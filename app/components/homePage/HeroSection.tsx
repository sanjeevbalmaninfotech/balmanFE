"use client"
import React from 'react';
import { Smartphone } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

// 2. Import Swiper Styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import OurServices from './OurServices';
import TestimonialSection from './TestimonialSection';
import AboutSection from './AboutSection';
import FounderSection from './FounderSection';

export default function HeroSection() {



    return (
        <>
            <section className="relative w-full min-h-screen md:min-h-[700px] lg:min-h-[860px] bg-black overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: 'url(/heroImgs/heroOrangeTreelarge.jpg)',
                        filter: 'brightness(1.3)'
                    }}
                ></div>


                <div className="relative w-full mx-auto min-h-screen md:min-h-[700px] lg:h-[860px] px-4 sm:px-8 lg:px-0">
                    {/* Left Content Container */}
                    <div
                        className="absolute left-4 sm:left-8 lg:left-[100px] top-[120px] sm:top-[180px] md:top-[240px] lg:top-[304px] max-w-[683px] z-10"
                        style={{ gap: '45px' }}
                    >
                        {/* Heading */}
                        <h1
                            className="mb-[20px] sm:mb-[25px] md:mb-[30px]"
                            style={{
                                fontFamily: 'Montserrat, sans-serif',
                                fontSize: 'clamp(32px, 8vw, 60px)',
                                fontWeight: '300',
                                lineHeight: '110%',
                                letterSpacing: '0%',
                                background: 'linear-gradient(89.84deg, #FEFEFE 0.23%, #FF5900 90.05%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text'
                            }}
                        >
                            Your Growth <span style={{ fontWeight: '700' }}>Partner</span>
                        </h1>
                        {/* Description */}
                        <p className="body-text mb-[25px] sm:mb-[35px] md:mb-[45px] max-w-[550px]">
                            To empower businesses with expressive brand identities and seamless digital experiences by blending creativity, strategy, and technology, delivering quality with consistency and purpose.
                        </p>

                        {/* Get Started Button */}
                        <button className="btn-primary touch-manipulation">
                            Get Started
                        </button>
                    </div>

                    {/* Right Image Container */}
                    <div
                        className="absolute right-0 top-[18px] w-full sm:w-[70%] lg:w-[908px] h-[calc(100vh-100px)] sm:h-[600px] md:h-[700px] lg:h-[833px] flex items-center justify-center lg:justify-end pr-0 pointer-events-none"
                    >
                        {/* Tree Image with tooltips */}
                        <div className="relative w-full h-full flex items-center justify-center">
                            {/* <img
                            src="/api/placeholder/908/833"
                            alt="Digital Growth Tree"
                            className="w-auto h-full max-w-full object-contain"
                            style={{
                                filter: 'drop-shadow(0 0 50px rgba(255, 87, 34, 0.5))'
                            }}
                        /> */}

                            {/* Top Right Tooltip */}
                            <div
                                className="absolute top-[60px] right-[50px] bg-gray-800/90 backdrop-blur-sm rounded-lg p-3 max-w-[200px] hidden lg:block"
                                style={{
                                    fontFamily: 'Plus Jakarta Sans, sans-serif'
                                }}
                            >
                                <h4 className="text-white font-semibold text-sm mb-1">Lorem Ipsum</h4>
                                <p className="text-white/70 text-xs">Lorem Ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>

                            {/* Bottom Right Tooltip */}
                            <div
                                className="absolute bottom-[80px] right-[50px] bg-gray-800/90 backdrop-blur-sm rounded-lg p-3 max-w-[200px] hidden lg:block"
                                style={{
                                    fontFamily: 'Plus Jakarta Sans, sans-serif'
                                }}
                            >
                                <h4 className="text-white font-semibold text-sm mb-1">Lorem Ipsum</h4>
                                <p className="text-white/70 text-xs">Lorem Ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <AboutSection />
            <OurServices />
            <TestimonialSection />
            <FounderSection />


        </>
    );
}