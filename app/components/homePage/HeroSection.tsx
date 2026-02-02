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
import GlassCard from './GlassCard';
import GlassCardDown from './GlassCardDown';

export default function HeroSection() {

    return (
        <>
        <section className="relative w-full min-h-screen bg-[#010101] flex flex-col md:block overflow-hidden">
            
            {/* --- MOBILE VIEW: Image on Top --- */}
            <div className="md:hidden w-full h-[350px] overflow-hidden">
                <img 
                    src="/heroImgs/orangetree.jpeg" 
                    alt="Orange Tree Growth"
                    className="w-full h-full object-cover object-center brightness-[1.1]"
                />
            </div>

            {/* --- DESKTOP VIEW: Background Image --- */}
            <div className="hidden md:block absolute inset-0 z-0">
                <img 
                    src="/heroImgs/heroOrangeTreelarge.jpeg" 
                    alt="Orange Tree Background"
                    className="w-full h-full object-top"
                />
            </div>

            {/* --- CONTENT LAYER --- */}
            <div className="relative z-10 w-full ml-4 mr-4 lg:ml-12 lg:mr-12  mx-auto px-6 md:px-12 flex flex-col justify-center min-h-[50vh] md:min-h-screen">
                
                <div className="max-w-[683px] py-12 md:py-0">
                    <h1
                        className="mb-2 md:mb-4 text-[32px] sm:text-[45px] md:text-[54px] lg:text-[72px] font-light leading-[1.1]"
                        style={{
                            fontFamily: 'Montserrat, sans-serif',
                            background: 'linear-gradient(89.84deg, #FEFEFE 0.23%, #FF5900 90.05%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}>
                        Your Growth <span className="font-bold">Partner</span>
                    </h1>

                    <p className="text-gray-300 text-base md:text-lg mb-8 max-w-[500px] leading-relaxed">
                        To empower businesses with expressive brand identities and seamless digital experiences by blending creativity, strategy, and technology.
                    </p>

                    <button className="btn-primary px-10 py-4 bg-[#FF5900] text-white rounded-full font-bold transition-transform active:scale-95">
                        Get Started
                    </button>
                </div>

                {/* Glass Cards - Positioned relative to this container on Desktop */}
                <div className="absolute inset-0 pointer-events-none hidden md:block">
                    <div className="absolute top-[15%] right-[5%]">
                        <GlassCard />
                    </div>
                    <div className="absolute bottom-[20%] right-[10%]">
                        <GlassCardDown />
                    </div>
                </div>
            </div>
        </section>

            <AboutSection />
            {/* <OurServices /> */}
            <ServicesCards />
            
            
        
<FounderSection />
<TestimonialSection />
            {/* <TeamSection /> */}
            <BrandAnalysisCTA />
            <TeamLeadsSection />
                
            <BlogSection />
            <FAQSection />
            <NewsletterSection />
            <Footer />

        </>
    );
}