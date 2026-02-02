"use client";

import { useState } from "react";
import SectionHeading from "../Common/SectionHeading";

export default function ContactUsForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    conmpanyName: "",
    websiteUrl: "",
    service: "",
    message: "",
    CompanyType: "",
  });

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const services = [
    "Branding Services",
    "Performance Marketing",
    "Organic Growth",
    "Web Development",
    "Customer Support",
    "Finance & Acc. Management",
  ];

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
  };

  const handleChange = (name: string, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const selectService = (service: string) => {
    setFormData((prev) => ({ ...prev, service }));
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
              href="https://maps.app.goo.gl/r5tmo5sUkF5Sb6KG8"
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
          <div className="space-y-6">
            {/* Name Fields */}
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
                  value={formData.fullName}
                  onChange={(e) => handleChange("firstName", e.target.value)}
                  className="w-full bg-transparent border border-gray-700 rounded px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary transition-colors text-sm md:text-base"
                />
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
                  type="phone"
                  value={formData.phone}
                  onChange={(e) => handleChange("lastName", e.target.value)}
                  className="w-full bg-transparent border border-gray-700 rounded px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary transition-colors text-sm md:text-base"
                />
              </div>
            </div>

            {/* Email and Phone */}
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
                  value={formData.conmpanyName}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className="w-full bg-transparent border border-gray-700 rounded px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary transition-colors text-sm md:text-base"
                />
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
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  className="w-full bg-transparent border border-gray-700 rounded px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary transition-colors text-sm md:text-base"
                />
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
                  className="w-full bg-transparent border border-gray-700 rounded px-4 py-3 text-left text-gray-400 focus:outline-none focus:border-primary transition-colors flex justify-between items-center text-sm md:text-base"
                >
                  <span>{formData.service || "Select Service"}</span>
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
                  <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded shadow-lg max-h-60 overflow-y-auto">
                    {services.map((service, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => selectService(service)}
                        className="w-full px-4 py-3 text-left text-black hover:bg-gray-100 transition-colors flex justify-between items-center text-sm md:text-base"
                      >
                        <span>{service}</span>
                        {formData.service === service && (
                          <svg
                            className="w-4 h-4 text-green-600"
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
              </div>
            </div>

            {/* New Input Field */}
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
                value={formData.CompanyType}
                onChange={(e) => handleChange("additionalInfo", e.target.value)}
                className="w-full bg-transparent border border-gray-700 rounded px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary transition-colors text-sm md:text-base"
              />
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
                value={formData.message}
                onChange={(e) => handleChange("message", e.target.value)}
                rows={4}
                placeholder="Type your message..."
                className="w-full bg-transparent border border-gray-700 rounded px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary transition-colors resize-none text-sm md:text-base"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="btn-primary touch-manipulation"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
