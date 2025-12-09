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

export default function HeroSection() {

    const services = [
        {
            title: "Digital Marketing",
            description: "We excel in building scalable, secure, and feature-rich apps that drive business success."
        },
        {
            title: "Branding Services",
            description: "We excel in building scalable, secure, and feature-rich apps that drive business success."
        },
        {
            title: "Web Designing",
            description: "We excel in building scalable, secure, and feature-rich apps that drive business success."
        },
        {
            title: "App Development",
            description: "We excel in building scalable, secure, and feature-rich apps that drive business success."
        },
        {
            title: "Web Development",
            description: "We excel in building scalable, secure, and feature-rich apps that drive business success."
        },
    ];

    const getClipPath = (index: number) => {
        switch (index) {
            case 0:
                return 'polygon(0 0, 100% 5%, 100% 95%, 0% 100%)';
            case 1:
                return 'polygon(0 0, 100% 2%, 100% 98%, 0% 100%)';
            case 2:
                return 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)';
            case 3:
                return 'polygon(0 2%, 100% 0, 100% 100%, 0 98%)';
            case 4:
                return 'polygon(0 5%, 100% 0, 100% 100%, 0 95%)';
            default:
                return 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)';
        }
    };


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
                        <p
                            className="mb-[25px] sm:mb-[35px] md:mb-[45px] max-w-[550px] pr-4 sm:pr-0"
                            style={{
                                fontFamily: 'Plus Jakarta Sans, sans-serif',
                                fontSize: 'clamp(14px, 3vw, 16.13px)',
                                fontWeight: '400',
                                lineHeight: '150%',
                                letterSpacing: '0%',
                                color: 'rgba(232, 232, 234, 1)'
                            }}
                        >
                            To empower businesses with expressive brand identities and seamless digital experiences by blending creativity, strategy, and technology, delivering quality with consistency and purpose.
                        </p>

                        {/* Get Started Button */}
                        <button
                            className="min-w-[145px] h-[48px] px-6 py-3 rounded-lg border border-black bg-[#FF5900] text-white transition-all duration-300 hover:bg-black hover:border-[#FF5900] hover:text-white touch-manipulation"
                            style={{
                                fontFamily: 'Poppins, sans-serif',
                                fontSize: 'clamp(15px, 3vw, 17px)',
                                fontWeight: '400'
                            }}
                        >
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

            <section className="relative w-full bg-black py-[40px] sm:py-[50px] md:py-[60px]">
                <div className="relative w-full mx-auto px-4 sm:px-8 lg:px-[120px]">
                    {/* Two Column Layout */}
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-0">
                        {/* Left Column - Heading */}
                        <div className="relative lg:w-[30%] lg:pr-8">
                            <div className="lg:absolute lg:top-1/2 lg:-translate-y-1/2 w-full flex flex-col items-start">

                                {/* About Us Label */}
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-[40px] h-[2px] bg-[#FF5900]"></div>
                                    <span
                                        className="text-white/80"
                                        style={{
                                            fontFamily: 'Plus Jakarta Sans, sans-serif',
                                            fontSize: '16px',
                                            fontWeight: '500'
                                        }}
                                    >
                                        About Us
                                    </span>
                                </div>

                                {/* Heading */}
                                <h2
                                    className=""
                                    style={{
                                        fontFamily: 'Plus Jakarta Sans, sans-serif',
                                        fontSize: 'clamp(28px, 5vw, 36px)',
                                        fontWeight: '700',
                                        lineHeight: '110%',
                                        color: 'rgba(232, 232, 234, 1)'
                                    }}
                                >
                                    We're More Than A <br className="hidden sm:block" /><span className="sm:hidden"> </span>Digital Agency
                                </h2>

                            </div>
                        </div>



                        {/* Vertical Divider - Hidden on mobile */}
                        <div className="hidden lg:block w-[1px] bg-white/20 mx-8"></div>

                        {/* Right Column - Content */}
                        <div className="lg:w-[70%] lg:pl-8">
                            {/* Paragraph 1 */}
                            <p
                                className="text-white/80 mb-4 sm:mb-5 md:mb-6"
                                style={{
                                    fontFamily: 'Plus Jakarta Sans, sans-serif',
                                    fontSize: 'clamp(14px, 2.5vw, 16px)',
                                    fontWeight: '400',
                                    lineHeight: '150%'
                                }}
                            >
                                At Balman Infotech, we believe technology is more than just code — it's a tool to create impact. Our mission is to empower businesses through smart, scalable, and secure solutions that deliver measurable results. From concept to completion, we focus on understanding each client's unique needs and providing customized services that combine creativity, technical expertise, and strategic thinking.
                            </p>

                            {/* Paragraph 2 */}
                            <p
                                className="text-white/80 mb-4 sm:mb-5 md:mb-6"
                                style={{
                                    fontFamily: 'Plus Jakarta Sans, sans-serif',
                                    fontSize: 'clamp(14px, 2.5vw, 16px)',
                                    fontWeight: '400',
                                    lineHeight: '150%'
                                }}
                            >
                                Our team consists of experienced developers, designers, and IT professionals who are passionate about innovation and excellence. Using modern frameworks, agile methodologies, and cutting-edge technologies, we build solutions that are robust, user-friendly, and future-ready. Whether it's automating processes, building enterprise platforms, or enhancing user experience, we ensure every project reflects our commitment to quality and performance.
                            </p>

                            {/* Paragraph 3 */}
                            <p
                                className="text-white/80 mb-4 sm:mb-5 md:mb-6"
                                style={{
                                    fontFamily: 'Plus Jakarta Sans, sans-serif',
                                    fontSize: 'clamp(14px, 2.5vw, 16px)',
                                    fontWeight: '400',
                                    lineHeight: '150%'
                                }}
                            >
                                What makes Balman Infotech stand out is our customer-centric approach. We believe in building long-term partnerships by delivering consistent value, transparency, and support. Every project is handled with attention to detail, timely execution, and a focus on exceeding expectations.
                            </p>

                            {/* Paragraph 4 */}
                            <p
                                className="text-white/80 mb-6 sm:mb-7 md:mb-8"
                                style={{
                                    fontFamily: 'Plus Jakarta Sans, sans-serif',
                                    fontSize: 'clamp(14px, 2.5vw, 16px)',
                                    fontWeight: '400',
                                    lineHeight: '150%'
                                }}
                            >
                                Our vision is to become a global leader in technology services by continuously evolving, innovating, and creating digital ecosystems that drive success for our clients. Guided by our core values — integrity, innovation, and excellence — Balman Infotech continues to shape the future of technology and help businesses adapt, grow, and succeed in the digital era.
                            </p>

                            {/* See More Button */}
                            <button className="flex items-center justify-center gap-2 mx-auto">
                                <span
                                    className="text-white"
                                    style={{
                                        fontFamily: 'Plus Jakarta Sans, sans-serif',
                                        fontSize: '16px',
                                        fontWeight: '500'
                                    }}
                                >
                                    See More
                                </span>
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="animate-bounce"
                                >
                                    <path
                                        d="M8 12L8 4M8 12L4 8M8 12L12 8"
                                        stroke="white"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

            </section>

            <OurServices />

            <TestimonialSection />



        </>
    );
}