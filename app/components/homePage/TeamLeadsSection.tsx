"use client";

import React, { useState } from 'react';
// import Image from 'next/image'; // Agar zaroorat ho to uncomment karein
import { LeadCardProps } from '@/app/types/ourTeam';
import { leads } from '@/app/constants/ourTeam';
import SectionHeading from "../Common/SectionHeading";
import { useSwipeable } from 'react-swipeable';

export default function TeamLeadsSection() {

    const [currentIndex, setCurrentIndex] = useState(0);

    // --- NEW PROFESSIONAL TOUCH LOGIC ---
    const handlers = useSwipeable({
        onSwipedLeft: () => {
            if (currentIndex < leads.length - 1) {
                setCurrentIndex(prev => prev + 1);
            }
        },
        onSwipedRight: () => {
            if (currentIndex > 0) {
                setCurrentIndex(prev => prev - 1);
            }
        },
        // Ye sabse important part hai mobile stability ke liye:
        preventScrollOnSwipe: true,
        trackMouse: false, // Desktop pe mouse drag off rakha hai taaki click select na bigde
        delta: 10, // Thoda sa bhi swipe karne par trigger ho jayega (smooth feel)
    });

    return (
        <div className="bg-[#010101] text-white overflow-hidden py-6 md:py-8">
            <div className="max-w-[1200px] mx-auto relative px-4">

                {/* Header Section */}
                <div className="flex flex-col items-center justify-center">
                    <SectionHeading>
                        Meet Our Leads
                    </SectionHeading>
                    <div className="heading-underline"></div>
                </div>

                {/* Slider Container */}
                <div className="relative">
                    {/* Navigation Arrows - Hidden on mobile (Same as your original code) */}
                    {/* Left Navigation Arrow */}
                    <button
                        onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
                        disabled={currentIndex === 0}
                        className={`hidden md:flex absolute -left-4 lg:-left-16 top-1/2 -translate-y-1/2 z-30 
    h-12 w-12 items-center justify-center rounded-full 
    bg-[#010101] text-white backdrop-blur border border-white/10 
    transition-all duration-300 
    /* Hover Effect */
    hover:border-[#ff5900] hover:text-[#ff5900]
    ${currentIndex === 0 ? 'opacity-20 cursor-not-allowed pointer-events-none' : 'cursor-pointer'}`}
                    >
                        <svg
                            className="w-5 h-5 transition-colors duration-300"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* Right Navigation Arrow */}
                    <button
                        onClick={() => setCurrentIndex(Math.min(1, currentIndex + 1))}
                        disabled={currentIndex === 1}
                        className={`hidden md:flex absolute -right-4 lg:-right-16 top-1/2 -translate-y-1/2 z-30 
    h-12 w-12 items-center justify-center rounded-full 
    bg-[#010101]/40 backdrop-blur border border-white/10 
    transition-all duration-300 
    /* Hover Effect */
    hover:border-[#ff5900] hover:text-[#ff5900]
    ${currentIndex === 1 ? 'opacity-20 cursor-not-allowed pointer-events-none' : 'cursor-pointer'}`}
                    >
                        <svg
                            className="w-5 h-5 transition-colors duration-300"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>


                    {/* The "Window" */}
                    <div className="overflow-hidden py-8 px-4">
                        <div
                            // Spread the swipe handlers here (Ye mobile touch ko handle karega)
                            {...handlers}

                            className="flex transition-transform duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {/* Desktop: Page 1 & 2 (Original Layout Preserved) */}
                            <div className="hidden md:flex justify-center gap-16 min-w-full">
                                {leads.slice(0, 3).map((lead) => (
                                    <LeadCard key={lead.id} lead={lead} />
                                ))}
                            </div>
                            <div className="hidden md:flex justify-center gap-16 min-w-full">
                                {leads.slice(3, 6).map((lead) => (
                                    <LeadCard key={lead.id} lead={lead} />
                                ))}
                            </div>

                            {/* Mobile: Individual cards (Original Layout Preserved) */}
                            {leads.map((lead) => (
                                <div key={lead.id} className="md:hidden flex justify-center min-w-full">
                                    <LeadCard lead={lead} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center gap-3 mt-4">
                    {/* Desktop dots */}
                    <div className="hidden md:flex gap-3">
                        {[0, 1].map((i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentIndex(i)}
                                className={`h-2 transition-all duration-500 rounded-full ${currentIndex === i ? 'w-10 bg-orange-600' : 'w-2 bg-gray-700'
                                    }`}
                            />
                        ))}
                    </div>
                    {/* Mobile dots */}
                    <div className="flex md:hidden gap-3">
                        {leads.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentIndex(i)}
                                className={`h-2 transition-all duration-500 rounded-full ${currentIndex === i ? 'w-10 bg-orange-600' : 'w-2 bg-gray-700'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

function LeadCard({ lead }: LeadCardProps) {
    return (
        /* Original Design & Styling completely preserved */
        <div
            className="group relative transition-all duration-500 rounded-[20px] hover:shadow-[0_0_30px_5px_rgba(255,89,0,0.4)]"
            style={{
                width: '316px',
                height: '568px',
            }}
        >
            <div
                className="relative z-10 w-full h-full overflow-hidden transition-all duration-500"
                style={{
                    borderRadius: '20px',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                }}
            >
                <img
                    src={lead.image}
                    alt={lead.name}
                    className="w-full h-full object-cover "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-[20px] font-bold text-white mb-1 tracking-tight">
                        {lead.name}
                    </h3>
                    <p className="text-sm text-gray-300 font-medium tracking-widest uppercase opacity-80">
                        {lead.title}
                    </p>
                </div>
            </div>

            <div className="absolute inset-0 rounded-[20px] z-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl bg-[#ff5900]" />
        </div>
    );
}