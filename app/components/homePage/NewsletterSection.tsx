"use client";

import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import SectionHeading from "../Common/SectionHeading";
import axiosInstance from "@/app/lib/http/axiosInstance";
import { newsletterSchema, NewsletterData } from "@/app/lib/validators/newsletter";

export default function NewsletterSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewsletterData>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      firstName: "",
      email: "",
    },
  });

  const onSubmit = async (data: NewsletterData) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });
    try {
      const response = await axiosInstance.post("/api/newsLetterSection", data);


      if (response.status === 200 || response.status === 201) {
        toast.success(response.data.message || "Thank you for subscribing to our newsletter!");
        setSubmitStatus({
          type: "success",
          message: response.data.message || "Thank you for subscribing to our newsletter!",
        });
        reset();
      } else {

        toast.error(response.data.message || "Subscription successful but with an unexpected status.");
        setSubmitStatus({
          type: "error",
          message: response.data.message || "Subscription successful but with an unexpected status.",
        });
      }
    } catch (error: any) {
      console.error("Newsletter submission error:", error);
      const errorMessage = error.response?.data?.message || "Failed to subscribe. Please try again later.";
      toast.error(errorMessage);
      setSubmitStatus({
        type: "error",
        message: errorMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative w-full bg-[#010101] py-8 lg:py-16">
      <div className=" mx-auto  w-full">
        <div className="relative w-full min-h-[260px] sm:min-h-[280px] md:min-h-[340px] rounded-[20px] border border-white/10 overflow-hidden flex items-center justify-center">

          {/* Top Right Glow */}
          <div className="absolute -top-20 -right-20 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] bg-primary rounded-full blur-[120px] sm:blur-[180px] opacity-80 pointer-events-none"></div>

          {/* Bottom Left Glow */}
          <div className="absolute -bottom-20 -left-20 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] bg-primary rounded-full blur-[120px] sm:blur-[180px] opacity-80 pointer-events-none"></div>

          {/* Content Container (centered and responsive) */}
          <div className="relative z-10 text-center section-padding-x w-full max-w-7xl">
            <div className="flex flex-col items-center justify-center mb-4 lg:mb-8">
              <SectionHeading>
                Subscribe to our Newsletter
              </SectionHeading>
              <div className="heading-underline"></div>
            </div>


            <form onSubmit={handleSubmit(onSubmit)} className="max-w-3xl mx-auto">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <div className="w-full sm:w-auto">
                  <input
                    type="text"
                    placeholder="Enter your name"
                    {...register("firstName")}
                    className={`w-full sm:w-[300px] md:w-[320px] px-4 py-3 rounded-lg bg-white text-black placeholder-gray-500
                      focus:outline-none focus:ring-2 focus:ring-primary
                      transition-all ${errors.firstName ? 'ring-2 ring-red-500' : ''}`}
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-xs mt-1 text-left">{errors.firstName.message}</p>
                  )}
                </div>

                <div className="w-full sm:w-auto">
                  <input
                    type="email"
                    placeholder="Email address"
                    {...register("email")}
                    className={`w-full sm:w-[300px] md:w-[320px] px-4 py-3 rounded-lg bg-white text-black placeholder-gray-500
                      focus:outline-none focus:ring-2 focus:ring-primary
                      transition-all ${errors.email ? 'ring-2 ring-red-500' : ''}`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1 text-left">{errors.email.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn-primary touch-manipulation inline-block text-center min-w-[120px] ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      <span>...</span>
                    </div>
                  ) : (
                    "Subscribe"
                  )}
                </button>
              </div>

              {/* Status Message */}
              {submitStatus.type && (
                <div className={`mt-4 p-3 rounded-lg text-sm ${submitStatus.type === "success"
                  ? "bg-green-100 text-green-800 border border-green-200"
                  : "bg-red-100 text-red-800 border border-red-200"
                  }`}>
                  {submitStatus.message}
                </div>
              )}
            </form>

          </div>
        </div>
      </div>
    </section>
  );
}
