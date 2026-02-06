"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import SectionHeading from "../Common/SectionHeading";
import axiosInstance from "@/app/lib/http/axiosInstance";
import { formSchema } from "@/app/lib/validators/contactForm";
import { services } from "@/app/constants/contactUs";



type FormData = z.infer<typeof formSchema>;

export default function ContactUsForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      conmpanyName: "",
      websiteUrl: "",
      service: "",
      CompanyType: "",
      message: "",
    },
  });

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const selectedService = watch("service");



  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });
    try {
      await axiosInstance.post("/api/contactUs", data);
      setSubmitStatus({
        type: "success",
        message: "Your message has been sent successfully!",
      });
      reset();
    } catch (error: any) {
      console.error("Form submission error:", error);
      setSubmitStatus({
        type: "error",
        message:
          error.response?.data?.message ||
          "Failed to send message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectService = (service: string) => {
    setValue("service", service, { shouldValidate: true });
    setDropdownOpen(false);
  };
  return (
    <div className=" mt-8 p-4 lg:mt-15 mx-auto w-full flex-grow">
      {/* Main Container */}
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 lg:gap-20 items-start">
        {/* Left Side - Heading */}
        <div className="w-full lg:col-span-3">
          <div className="flex items-center gap-3 mb-4">
            <div className="heading-underline-left"></div>
            <span className="sort-main-heading">Contact Us</span>
          </div>

          <div className="mb-8">
            <SectionHeading align="left">Get in Touch</SectionHeading>
            <p
              style={{
                color: "#8E8E8E",
                fontFamily: "Plus Jakarta Sans, sans-serif",
                fontWeight: 500,
                fontSize: "16px",
                lineHeight: "150%",
                letterSpacing: "0",
              }}
            >
              Fill out the form below and tell us about your project,
              requirement, or query.
            </p>
          </div>

          {/* Contact Information Section */}
          <div className="grid grid-cols-1 md:grid-cols-2  gap-2 lg:gap-20 mb-8">
            {/* Email */}
            <div>
              <div className="flex items-center gap-1 lg:gap-3 mb-1">
                <img src="/icons/email.png" alt="Email" className="w-8 h-8" />
              </div>
              <h3 className="text-white text-[20px] font-semibold mb-2">
                Email
              </h3>
              <a
                href="mailto:contact@balmaninfotech.net"
                className="text-[#8E8E8E] hover:text-white text-[16px] transition-colors"
                style={{
                  fontFamily: "Plus Jakarta Sans, sans-serif",
                }}
              >
                contact@balmaninfotech.net
              </a>
            </div>

            {/* Phone */}
            <div>
              <div className="flex items-center gap-3 mb-1">
                <img src="/icons/phone.png" alt="Phone" className="w-8 h-8" />
              </div>
              <h3 className="text-white text-lg font-semibold mb-2">Phone</h3>
              <a
                href="tel:+919814097251"
                className="text-[#8E8E8E] hover:text-white transition-colors"
                style={{
                  fontFamily: "Plus Jakarta Sans, sans-serif",
                  fontSize: "16px",
                }}
              >
                +91 98140 97251
              </a>
            </div>
          </div>

          {/* Office Address */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <img src="/icons/map.png" alt="Location" className="w-8 h-8" />
            </div>
            <h3 className="text-white text-lg font-semibold mb-2">Office</h3>
            <p
              className="text-[#8E8E8E] mb-3"
              style={{
                fontFamily: "Plus Jakarta Sans, sans-serif",
                fontSize: "16px",
                lineHeight: "150%",
              }}
            >
              4th floor, F88, Phase 7, Industrial Area, Sector 74, Sahibzada
              Ajit Singh Nagar, Punjab 160055
            </p>
            <a
              href="https://shorturl.at/O62Bt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:opacity-80  transition-opacity inline-flex items-center gap-2"
              style={{
                fontFamily: "Plus Jakarta Sans, sans-serif",
                fontSize: "16px",
              }}
            >
              Get Directions
              <span>→</span>
            </a>
          </div>
        </div>

        {/* Right Side - Form Container */}
        <div className="w-full lg:col-span-7">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name and Phone Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  className="block font-normal text-sm md:text-base text-gray-400 mb-2"
                  style={{
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: "150%",
                  }}
                >
                  Full Name
                </label>
                <input
                  type="text"
                  {...register("fullName")}
                  className={`w-full bg-transparent border ${errors.fullName ? "border-red-500" : "border-gray-700"
                    } rounded px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary transition-colors text-sm md:text-base`}
                />
                {errors.fullName && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.fullName.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  className="block font-normal text-sm md:text-base text-gray-400 mb-2"
                  style={{
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: "150%",
                  }}
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  {...register("phone")}
                  className={`w-full bg-transparent border ${errors.phone ? "border-red-500" : "border-gray-700"
                    } rounded px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary transition-colors text-sm md:text-base`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>
            </div>

            {/* Company Name and Website */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  className="block font-normal text-sm md:text-base text-gray-400 mb-2"
                  style={{
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: "150%",
                  }}
                >
                  Company Name
                </label>
                <input
                  type="text"
                  {...register("conmpanyName")}
                  className={`w-full bg-transparent border ${errors.conmpanyName ? "border-red-500" : "border-gray-700"
                    } rounded px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary transition-colors text-sm md:text-base`}
                />
                {errors.conmpanyName && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.conmpanyName.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  className="block font-normal text-sm md:text-base text-gray-400 mb-2"
                  style={{
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: "150%",
                  }}
                >
                  Website URL
                </label>
                <input
                  type="text"
                  {...register("websiteUrl")}
                  placeholder="https://example.com"
                  className={`w-full bg-transparent border ${errors.websiteUrl ? "border-red-500" : "border-gray-700"
                    } rounded px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary transition-colors text-sm md:text-base`}
                />
                {errors.websiteUrl && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.websiteUrl.message}
                  </p>
                )}
              </div>
            </div>

            {/* Service Select */}
            <div>
              <label
                className="block font-normal text-sm md:text-base text-gray-400 mb-2"
                style={{
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "150%",
                }}
              >
                Service Interested In
              </label>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className={`w-full bg-transparent border ${errors.service ? "border-red-500" : "border-gray-700"
                    } rounded px-4 py-3 text-left ${selectedService ? "text-white" : "text-gray-400"
                    } focus:outline-none focus:border-primary transition-colors flex justify-between items-center text-sm md:text-base`}
                >
                  <span>{selectedService || "Select Service"}</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {dropdownOpen && (
                  <div className="absolute z-10 w-full mt-1 bg-[#1a1a1a] border border-gray-700 rounded shadow-lg max-h-60 overflow-y-auto">
                    {services?.map((service, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => selectService(service)}
                        className="w-full px-4 py-3 text-left text-gray-300 hover:bg-gray-800 transition-colors flex justify-between items-center text-sm md:text-base"
                      >
                        <span>{service}</span>
                        {selectedService === service && (
                          <svg
                            className="w-4 h-4 text-primary"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        )}
                      </button>
                    ))}
                  </div>
                )}
                {errors.service && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.service.message}
                  </p>
                )}
              </div>
            </div>

            {/* Company Type Field */}
            <div>
              <label
                className="block font-normal text-sm md:text-base text-gray-400 mb-2"
                style={{
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "150%",
                }}
              >
                Company Type
              </label>
              <input
                type="text"
                {...register("CompanyType")}
                className={`w-full bg-transparent border ${errors.CompanyType ? "border-red-500" : "border-gray-700"
                  } rounded px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary transition-colors text-sm md:text-base`}
              />
              {errors.CompanyType && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.CompanyType.message}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <label
                className="block font-normal text-sm md:text-base text-gray-400 mb-2"
                style={{
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "150%",
                }}
              >
                Message
              </label>
              <textarea
                {...register("message")}
                rows={4}
                placeholder="Type your message..."
                className={`w-full bg-transparent border ${errors.message ? "border-red-500" : "border-gray-700"
                  } rounded px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary transition-colors resize-none text-sm md:text-base`}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.message.message}
                </p>
              )}
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
                  Sending...
                </>
              ) : (
                "Submit"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
