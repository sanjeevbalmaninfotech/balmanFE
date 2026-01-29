import React, { useState } from 'react';
import Image from 'next/image';
import { LeadCardProps } from '@/app/types/ourTeam';
import { leads } from '@/app/constants/ourTeam';



export default function TeamLeadsSection() {


    const [currentIndex, setCurrentIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (touchStart - touchEnd > 75) {
            if (currentIndex < leads.length - 1) setCurrentIndex(currentIndex + 1);
        }
        if (touchStart - touchEnd < -75) {
            if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div className="bg-black text-white overflow-hidden py-12 md:py-20">
            <div className="max-w-[1200px] mx-auto relative px-4">

                {/* Header Section */}
                <div className="flex flex-col items-center justify-center">
                    <h2
                        className="text-gradient font-['Plus_Jakarta_Sans'] font-bold text-center leading-[110%] tracking-tight"
                        style={{
                            fontSize: "clamp(32px, 6vw, 36px)",
                        }}
                    >
                        Meet Our Leads
                    </h2>
                    <div className="mt-4 w-16 h-[2px] bg-orange-600"></div>
                </div>

                {/* Slider Container */}
                <div className="relative">
                    {/* Navigation Arrows - Hidden on mobile */}
                    <button
                        onClick={() => setCurrentIndex(0)}
                        className={`hidden md:flex absolute -left-4 lg:-left-16 top-1/2 -translate-y-1/2 z-30 
    h-12 w-12 items-center justify-center rounded-full 
    bg-black/40 backdrop-blur border border-white/10 
    transition-all duration-300 
    ${currentIndex === 0 ? 'opacity-20' : 'hover:bg-orange-500 hover:scale-110'}`}
                    >
                        <svg
                            className="w-5 h-5 text-white"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button
                        onClick={() => setCurrentIndex(1)}
                        className={`hidden md:flex absolute -right-4 lg:-right-16 top-1/2 -translate-y-1/2 z-30 
    h-12 w-12 items-center justify-center rounded-full 
    bg-black/40 backdrop-blur border border-white/10 
    transition-all duration-300 
    ${currentIndex === 1 ? 'opacity-20' : 'hover:bg-orange-500 hover:scale-110'}`}
                    >
                        <svg
                            className="w-5 h-5 text-white"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>


                    {/* The "Window" - py-24 ensures the shadow is never cut */}
                    <div className="overflow-hidden py-8 px-4">
                        <div
                            className="flex transition-transform duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                        >
                            {/* Desktop: Page 1 & 2 */}
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

                            {/* Mobile: Individual cards */}
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
        <div className="group relative">

            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-[50px] rounded-full z-0"
                style={{
                    background: 'radial-gradient(circle, rgba(255, 89, 0, 0.45) 0%)',
                    transform: 'scale(1.1)'
                }}
            />

            {/* 2. Main Card with User Dimensions */}
            <div
                className="relative z-10 overflow-hidden"
                style={{
                    width: '316px',
                    height: '568px',
                    borderRadius: '20px',
                    border: '1px solid rgba(255, 255, 255, 0.05)'
                }}
            >
                <img
                    src={lead.image}
                    alt={lead.name}
                    className="w-full h-full object-cover"
                />

                {/* Info Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10" />

                <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-[20px] font-bold text-white mb-1 tracking-tight">{lead.name}</h3>
                    <p className="text-sm text-gray-300 font-medium tracking-widest uppercase opacity-80">{lead.title}</p>
                </div>
            </div>
        </div>
    );
}