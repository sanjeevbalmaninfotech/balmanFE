"use client";
import React from "react";
import Image from "next/image";
import SectionHeading from "../Common/SectionHeading";

const WhatWeActuallyDo: React.FC = () => {
  const aboutUsServices = [
    {
      icon: "/icons/vision.png", // Update with your actual vision icon path
      title: "Vision and turning it into a reality",
      alt: "Vision Icon",
    },
    {
      icon: "/icons/hand.png", // Hand icon for brand and consumer
      title: "Brand and the consumer",
      alt: "Brand Icon",
    },
    {
      icon: "/icons/Bulb.png", // "\public\icons\Bulb.png"
      title: "Strategy and its execution",
      alt: "Strategy Icon",
    },
  ];

  return (
    <section className=" mx-auto bg-[#010101]">
      <div className="  lg:py-15 py-5 px-0 ml-5 mr-5  lg:ml-[100px] bg-[#010101] lg:mr-[100px]">
        {/* Main Title */}
        <div className="text-center mb-6">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium text-white">
            What We Actually Do{" "}
            <span className="text-white">(Beyond The Labels)</span>
          </h3>
          <div className="heading-underline"></div>
        </div>

        {/* First Description */}
        <div className="max-w-4xl mx-auto mb-8">
          <p
            className="text-white text-center text-base leading-[150%]"
            style={{
              fontFamily: "Plus Jakarta Sans, sans-serif",
              fontWeight: 400,
            }}
          >
            We do branding, marketing, websites, apps, and software development,
            and Customer support. But you`ll find a hundred agencies do that
            too.
          </p>
        </div>

        {/* Second Description */}
        <div>
          <div className="max-w-6xl mx-auto">
            <p
              className="text-white text-left text-base leading-[120%] mb-4 lg:mb-6"
              style={{
                fontFamily: "Plus Jakarta Sans, sans-serif",
                fontWeight: 400,
              }}
            >
              But what we really do is remove friction between:
            </p>

            {/* Service Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-15">
              {aboutUsServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-[#010101] border border-[#E8E8EA] rounded-[10px] rounded-[4px] p-3 lg:p-4  flex flex-col items-center text-center"
                >
                  {/* Icon */}
                  <div className="mb-2  mt-2 lg:mt-10 lg:mb-6">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={80}
                      height={80}
                      className="text-[#FF5900] fill-current"
                    />
                  </div>

                  {/* Title */}
                  <p className="text-white text-xs uppercase tracking-wider">
                    {service.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeActuallyDo;
