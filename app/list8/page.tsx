"use client";

import React from "react";
// Swiper React components import karein
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles import karein
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// Required modules import karein
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

// Dummy Data
const services = [
    { title: "Digital Marketing", desc: "Building scalable and secure apps." },
    { title: "Branding Services", desc: "Creating unique brand identities." },
    { title: "Web Designing", desc: "Stunning UI/UX for your business." },
    { title: "App Development", desc: "Robust mobile applications." },
    { title: "Web Development", desc: "Full-stack web solutions." },
];

const ServiceCards = () => {
    return (
        <div className="flex min-h-screen items-center justify-center bg-black py-20">
            <div className="w-full max-w-6xl px-4">

                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                        rotate: 0, // Card rotation (image me slight rotation hai)
                        stretch: 0,
                        depth: 100, // 3D depth effect
                        modifier: 2.5, // Effect intensity
                    }}
                    pagination={{ clickable: true }}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper !pb-12" // Padding bottom for shadow/pagination
                >
                    {services.map((item, index) => (
                        // SwiperSlide ki width fix honi chahiye taaki 3D effect dikhe
                        <SwiperSlide key={index} className="!w-[300px] md:!w-[350px]">

                            {/* --- CARD DESIGN START --- */}
                            <div className="group relative h-[450px] overflow-hidden rounded-2xl bg-[#0a0a0a] border border-white/10 p-8 flex flex-col justify-center transition-all duration-300 
              
              /* HOVER EFFECTS: Orange Border & Glow */
              hover:border-orange-500 hover:shadow-[0_0_30px_rgba(249,115,22,0.6)] hover:-translate-y-2">

                                {/* Orange Icon Container */}
                                <div className="mb-6 h-12 w-12 rounded-lg border border-orange-500/30 bg-orange-500/10 flex items-center justify-center text-orange-500 group-hover:scale-110 transition-transform duration-300">
                                    {/* Icon Placeholder (Yaha aap Lucide Icon laga sakte ho) */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="h-6 w-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                                        />
                                    </svg>
                                </div>

                                {/* Title */}
                                <h3 className="mb-3 text-2xl font-bold text-white group-hover:text-orange-500 transition-colors">
                                    {item.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm leading-relaxed text-gray-400">
                                    We excel in building scalable, secure, and feature-rich apps
                                    that drive business success. {item.desc}
                                </p>

                                {/* Bottom Line Decoration */}
                                <div className="absolute bottom-0 left-0 h-1 w-0 bg-orange-500 transition-all duration-300 group-hover:w-full" />
                            </div>
                            {/* --- CARD DESIGN END --- */}

                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default ServiceCards;