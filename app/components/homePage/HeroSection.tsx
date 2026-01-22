"use client"
import React from 'react';
import { Smartphone } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import Image from "next/image";
// 2. Import Swiper Styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import OurServices from './OurServices';
import TestimonialSection from './TestimonialSection';
import AboutSection from './AboutSection';
import FounderSection from './FounderSection';
import BrandAnalysisCTA from './BrandAnalysisCTA';
import TeamSection from './TeamSection';
import BlogSection from './BlogSection';
import FAQSection from './FAQSection';
import NewsletterSection from './NewsletterSection';
import Footer from '../footer/Footer';
import TeamLeadsSection from './TeamLeadsSection';
import ServicesCards from './ServicesCards';

export default function HeroSection() {



    return (
        <>
            <section className="relative w-full min-h-screen md:min-h-[700px] lg:min-h-[860px] bg-black overflow-hidden">
                {/* Background Image - Mobile */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat md:hidden"
                    style={{
                        backgroundImage: 'url(/heroImgs/orangetree.jpg)',
                        filter: 'brightness(1.3)'
                    }}
                ></div>

                {/* Background Image - MD and above */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden md:block"
                    style={{
                        backgroundImage: 'url(/heroImgs/heroOrangeTreelarge.jpg)',
                        filter: 'brightness(1.3)'
                    }}
                ></div>


                <div className="relative w-full mx-auto min-h-screen md:min-h-[700px] lg:h-[860px] section-padding-x">
                    {/* Left Content Container */}
                    <div
                        className="absolute section-padding-x left-0 top-[80px] sm:top-[180px] md:top-[240px] lg:top-[304px] max-w-[683px] z-10"
                        style={{ gap: '45px' }}
                    >
                        {/* Heading */}
                        <h1
                            className="mb-[15px] sm:mb-[25px] md:mb-[30px] text-[28px] sm:text-[36px] md:text-[48px] lg:text-[60px] font-light leading-[120%] sm:leading-[115%] md:leading-[110%]"
                            style={{
                                fontFamily: 'Montserrat, sans-serif',
                                letterSpacing: '0%',
                                background: 'linear-gradient(89.84deg, #FEFEFE 0.23%, #FF5900 90.05%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text'
                            }}
                        >
                            Your Growth <span className="font-bold">Partner</span>
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
                            {/*  <Image
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
            {/* <OurServices /> */}
            <ServicesCards />
            <TestimonialSection />
            <FounderSection />
            <BrandAnalysisCTA />

            {/* <TeamSection /> */}
            <TeamLeadsSection />
            <BlogSection />
            <FAQSection />
            <NewsletterSection />
            <Footer />

        </>
    );
}