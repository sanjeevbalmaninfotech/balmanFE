"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import axiosInstance from "@/app/lib/http/axiosInstance";
import { auditFormSchema } from "@/app/lib/validators/auditForm";
import * as z from "zod";

type FormData = z.infer<typeof auditFormSchema>;

export default function AuditForm() {
    const [submitStatus, setSubmitStatus] = useState<{
        type: "success" | "error" | null;
        message: string;
    }>({ type: null, message: "" });

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<FormData>({
        resolver: zodResolver(auditFormSchema),
        defaultValues: {
            companyName: "",
            websiteUrl: "",
            industry: "",
            yearsInOperation: "",
            emailAddress: "",
            contactNumber: "",
            companySize: "",
        }
    });

    const onSubmit = async (data: FormData) => {
        setSubmitStatus({ type: null, message: "" });
        try {
            const response = await axiosInstance.post("/api/auditForm", data);

            if (response.status === 201 || response.data.success) {
                const successMsg = response.data.message || "Audit request submitted successfully!";
                toast.success(successMsg);
                setSubmitStatus({
                    type: "success",
                    message: successMsg,
                });
                reset();
            } else {
                throw new Error(response.data.message || "Something went wrong. Please try again.");
            }
        } catch (error: any) {
            console.error("Form submission error:", error);
            const errorMessage = error.response?.data?.message || error.message || "Failed to submit request. Please try again later.";
            toast.error(errorMessage);
            setSubmitStatus({
                type: "error",
                message: errorMessage,
            });
        }
    };

    const inputClasses = ` w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 outline-none transition-all focus:border-orange-600 focus:ring-1 focus:ring-orange-600`;
    const labelClasses = "block text-gray-300 text-sm mb-2 ml-1";
    const errorClasses = "text-red-500 text-xs mt-1 ml-1";

    return (
        <div className=" bg-[#010101] flex items-center justify-center mb-5 lg:mb-8 px-6">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full max-w-4xl space-y-6"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">

                    {/* Company Name */}
                    <div>
                        <label className={labelClasses}>Company Name</label>
                        <input
                            {...register("companyName")}
                            placeholder="Enter company name"
                            className={inputClasses}
                        />
                        {errors.companyName && <p className={errorClasses}>{errors.companyName.message}</p>}
                    </div>

                    {/* Website URL */}
                    <div>
                        <label className={labelClasses}>Website URL</label>
                        <input
                            {...register("websiteUrl")}
                            placeholder="https://example.com"
                            className={inputClasses}
                        />
                        {errors.websiteUrl && <p className={errorClasses}>{errors.websiteUrl.message}</p>}
                    </div>

                    {/* Industry */}
                    <div>
                        <label className={labelClasses}>Industry</label>
                        <input
                            {...register("industry")}
                            placeholder="e.g. Technology"
                            className={inputClasses}
                        />
                        {errors.industry && <p className={errorClasses}>{errors.industry.message}</p>}
                    </div>

                    {/* Years in operation */}
                    <div>
                        <label className={labelClasses}>Years in operation</label>
                        <input
                            {...register("yearsInOperation")}
                            placeholder="e.g. 5"
                            className={inputClasses}
                        />
                        {errors.yearsInOperation && <p className={errorClasses}>{errors.yearsInOperation.message}</p>}
                    </div>

                    {/* Email Address */}
                    <div>
                        <label className={labelClasses}>Email Address</label>
                        <input
                            {...register("emailAddress")}
                            placeholder="email@company.com"
                            className={inputClasses}
                        />
                        {errors.emailAddress && <p className={errorClasses}>{errors.emailAddress.message}</p>}
                    </div>

                    {/* Contact Number */}
                    <div>
                        <label className={labelClasses}>Contact Number</label>
                        <input
                            {...register("contactNumber")}
                            placeholder="+1 234 567 890"
                            className={inputClasses}
                        />
                        {errors.contactNumber && <p className={errorClasses}>{errors.contactNumber.message}</p>}
                    </div>

                    {/* Company Size (Full Width on Mobile & Desktop) */}
                    <div className="md:col-span-2">
                        <label className={labelClasses}>Company Size</label>
                        <div className="relative">
                            <select
                                {...register("companySize")}
                                className={`${inputClasses} appearance-none cursor-pointer`}
                                defaultValue=""
                            >
                                <option value="" disabled>Select Service</option>
                                <option value="1-10">1-10 employees</option>
                                <option value="11-50">11-50 employees</option>
                                <option value="51-200">51-200 employees</option>
                                <option value="201+">201+ employees</option>
                            </select>
                            {/* Custom Arrow */}
                            <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                                <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                        {errors.companySize && <p className={errorClasses}>{errors.companySize.message}</p>}
                    </div>
                </div>

                {/* Form Response Message */}
                {submitStatus.type && (
                    <div
                        className={`p-4 rounded ${submitStatus.type === "success"
                            ? "bg-green-900/30 text-green-400 border border-green-800"
                            : "bg-red-900/30 text-red-400 border border-red-800"
                            } text-sm`}
                    >
                        {submitStatus.message}
                    </div>
                )}

                {/* Submit Button */}
                <div className="flex justify-center pt-4">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`btn-primary touch-manipulation flex items-center justify-center gap-2 ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                            }`}
                    >
                        {isSubmitting ? (
                            <>
                                <svg
                                    className="animate-spin h-5 w-5 text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    ></circle>
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                    ></path>
                                </svg>
                                Submitting...
                            </>
                        ) : (
                            "Submit"
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
}