import React, { useState } from 'react';
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star, Hexagon } from 'lucide-react';

const TestimonialSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            id: 1,
            text: "Abodah, under the umbrella of Zennial Pro, has completely transformed our approach to learning and development. Their tailored solutions have not only improved employee engagement but also boosted productivity across our organization. Working with Abodah has been a game-changer for us.",
            name: "David Lee",
            position: "HR Director, Tech Innovations Inc.",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
        },
        {
            id: 2,
            text: "Zennial Pro's innovative approach has revolutionized our training programs. Their dedication to optimizing our processes has streamlined our operations significantly. Their team is incredibly responsive and driven to ensure success. We couldn't be happier to achieve such remarkable results. Worth every investment we made.",
            name: "John Thompson",
            position: "Senior Manager, Global Solutions",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
        },
        {
            id: 3,
            text: "The partnership with Abodah has exceeded all our expectations. Their comprehensive understanding of our needs and swift implementation has been remarkable. The ROI we've seen is outstanding, and our team's productivity has improved dramatically.",
            name: "Sarah Mitchell",
            position: "CEO, Innovation Labs",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
        }
    ];

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <div className="w-full bg-black flex items-center justify-center section-padding">
            <div className="w-full max-w-[1680px] h-auto lg:h-[495px] flex flex-col lg:flex-row gap-5">

                {/* Left Side Container */}
                <div className="relative lg:w-[572px] lg:pr-8">
                    <div className="lg:absolute lg:top-1/2 lg:-translate-y-1/2 w-full flex flex-col items-start gap-8">

                        {/* Heading */}
                        <h2
                            className="font-['Plus_Jakarta_Sans'] font-bold leading-[110%] tracking-tight mb-2"
                            style={{
                                fontSize: "clamp(32px, 6vw, 36px)",
                                backgroundImage:
                                    "radial-gradient(18.08% 413.84% at 51.02% 51.02%, #FFFFFF 35%, #656565 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            WHAT OUR <br />
                            CLIENT SAYS
                            <div className="heading-underline mt-2"></div>
                        </h2>

                        {/* Description */}
                        <p className="body-text">
                            Reviews from all the clients that we&apos;ve helped grow.
                        </p>

                        {/* Ratings */}
                        <div className="flex items-center gap-8 mt-6">
                            {/* Ambitious Rating */}
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-[#1A1A1A] rounded-xl flex items-center justify-center">
                                    <Hexagon className="w-6 h-6 text-[#3B82F6] fill-[#3B82F6]" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-white text-[18px] font-bold leading-tight">4.5K</span>
                                    <span className="text-gray-400 text-[12px] leading-tight">Ambitious Rating</span>
                                </div>
                            </div>

                            <div className="h-8 w-[1px] bg-white/10"></div>

                            {/* Google Rating */}
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-[#1A1A1A] rounded-xl flex items-center justify-center">
                                    <svg viewBox="0 0 24 24" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.84z" fill="#FBBC05" />
                                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                    </svg>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-white text-[18px] font-bold leading-tight">4.5K</span>
                                    <span className="text-gray-400 text-[12px] leading-tight">Google Rating</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side Container - Carousel */}
                <div className="flex-1 lg:w-[900px] h-auto lg:h-[495px] relative flex items-center justify-center">

                    {/* Left Preview Card */}
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[180px] h-[300px] rounded-2xl opacity-40 overflow-hidden hidden lg:block z-0 scale-90 blur-[1px]">
                        <div className="relative w-full h-full bg-gray-800 flex">
                            <div className="relative w-full h-full">
                                <Image
                                    src={testimonials[(currentIndex - 1 + testimonials.length) % testimonials.length].image}
                                    alt=""
                                    fill
                                    className="object-cover opacity-50"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Preview Card */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[180px] h-[300px] rounded-2xl opacity-40 overflow-hidden hidden lg:block z-0 scale-90 blur-[1px]">
                        <div className="relative w-full h-full bg-gray-800 flex">
                            <div className="relative w-full h-full">
                                <Image
                                    src={testimonials[(currentIndex + 1) % testimonials.length].image}
                                    alt=""
                                    fill
                                    className="object-cover opacity-50"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Main Testimonial Card */}
                    <div className="relative w-full max-w-[720px] h-auto lg:h-[410px] z-10">
                        {/* Glow Effect */}
                        <div className="absolute -inset-[2px] bg-gradient-to-br from-primary via-primary/50 to-transparent rounded-[26px] blur-md opacity-80"></div>

                        <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-primary/10 h-full">
                            <div className="flex flex-col md:flex-row h-full">
                                {/* Text Content */}
                                <div className="w-full md:w-[55%] flex flex-col justify-between p-8 md:p-10">
                                    <div className="text-primary text-6xl font-serif leading-none">“</div>
                                    <p className="text-gray-800 flex-1 my-6 font-['Plus_Jakarta_Sans'] text-[16px] leading-[160%]">
                                        {testimonials[currentIndex].text}
                                    </p>
                                    <div>
                                        <h3 className="text-gray-900 font-['Plus_Jakarta_Sans'] text-[18px] font-bold">
                                            {testimonials[currentIndex].name}
                                        </h3>
                                        <p className="text-gray-600 font-['Plus_Jakarta_Sans'] text-[14px]">
                                            {testimonials[currentIndex].position}
                                        </p>
                                    </div>
                                </div>

                                {/* Image Section */}
                                <div className="w-full md:w-[45%] relative overflow-hidden">
                                    <Image
                                        src={testimonials[currentIndex].image}
                                        alt={testimonials[currentIndex].name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={prevTestimonial}
                        className="absolute left-4 lg:left-12 top-1/2 -translate-y-1/2 w-12 h-12 bg-black border border-white/20 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-900 transition-all z-20"
                    >
                        <ChevronLeft className="w-6 h-6 text-white" />
                    </button>

                    <button
                        onClick={nextTestimonial}
                        className="absolute right-4 lg:right-12 top-1/2 -translate-y-1/2 w-12 h-12 bg-black border border-white/20 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-900 transition-all z-20"
                    >
                        <ChevronRight className="w-6 h-6 text-white" />
                    </button>

                    {/* Dots */}
                    <div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 flex gap-2 z-20">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`h-2 rounded-full transition-all ${index === currentIndex ? 'bg-primary w-8' : 'bg-gray-600 w-2'}`}
                            />
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default TestimonialSection;