"use client"; // Next.js app router ke liye zaroori hai

import React from 'react';
import { LeadCardProps } from '@/app/types/ourTeam';
import { leads } from '@/app/constants/ourTeam';
import SectionHeading from "../Common/SectionHeading";

// Swiper Imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, A11y } from 'swiper/modules';

// Swiper CSS (Zaroori hai)
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Custom CSS for Swiper Pagination (Optional: Put this in your global css or keep inline styles below)
import './swiper-custom.css'; // Agar aap chahein to extra styles alag file me rakh sakte hain

export default function TeamLeadsSection() {
    return (
        <div className="bg-[#010101] text-white overflow-hidden py-12 md:py-20">
            <div className="max-w-[1400px] mx-auto relative px-4">

                {/* Header Section */}
                <div className="flex flex-col items-center justify-center mb-12">
                    <SectionHeading>
                        Meet Our Leads
                    </SectionHeading>
                    <div className="heading-underline"></div>
                </div>

                {/* Swiper Slider Container */}
                <div className="relative w-full px-2 md:px-12">

                    {/* Navigation Buttons (Desktop Only - Custom styled) */}
                    <div className="swiper-button-prev-custom hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-30 cursor-pointer p-2 hover:scale-110 transition-transform">
                        {/* Aapka Left SVG Icon yahan aa sakta hai ya Swiper ka default use karein */}
                    </div>
                    <div className="swiper-button-next-custom hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-30 cursor-pointer p-2 hover:scale-110 transition-transform">
                        {/* Aapka Right SVG Icon */}
                    </div>

                    <Swiper
                        modules={[Pagination, Navigation, A11y]}
                        spaceBetween={30}
                        slidesPerView={1}
                        centeredSlides={true} // Mobile pe center focus ke liye best hai
                        grabCursor={true}     // Desktop pe hand icon aayega
                        pagination={{
                            clickable: true,
                            dynamicBullets: true // Professional look ke liye dots size change hote hain
                        }}
                        navigation={true} // Default navigation on kar diya hai (custom buttons ke sath link kar sakte hain)
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                centeredSlides: true,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                centeredSlides: false,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 3,
                                centeredSlides: false, // Desktop par usually left align ya grid achha lagta hai
                                spaceBetween: 50,
                            },
                        }}
                        className="w-full !pb-16 !overflow-visible" // !overflow-visible zaroori hai taki shadow cut na ho
                    >
                        {leads.map((lead) => (
                            <SwiperSlide key={lead.id} className="flex justify-center h-auto">
                                <LeadCard lead={lead} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

function LeadCard({ lead }: LeadCardProps) {
    return (
        /* Outer Wrapper: Fixed Dimensions removed to handle responsiveness better, 
           Swiper controls width now */
        <div
            className="group relative transition-all duration-500 rounded-[20px] hover:shadow-[0_0_30px_5px_rgba(255,89,0,0.4)] mx-auto"
            style={{
                width: '316px',
                height: '568px',
                // Mobile par agar card zyada bada hai to max-width laga sakte hain
                maxWidth: '100%'
            }}
        >
            {/* Main Card */}
            <div
                className="relative z-10 w-full h-full overflow-hidden transition-all duration-500 bg-[#0a0a0a]"
                style={{
                    borderRadius: '20px',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                }}
            >
                {/* Use Next/Image for better performance if possible, otherwise img is fine */}
                <img
                    src={lead.image}
                    alt={lead.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />

                {/* Info Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

                {/* Text Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-[24px] font-bold text-white mb-1 tracking-tight drop-shadow-md">
                        {lead.name}
                    </h3>
                    <p className="text-sm text-[#ff5900] font-bold tracking-widest uppercase opacity-90">
                        {lead.title}
                    </p>
                </div>
            </div>

            {/* Glow Layer */}
            <div className="absolute -inset-1 rounded-[22px] z-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-xl bg-[#ff5900]" />
        </div>
    );
}