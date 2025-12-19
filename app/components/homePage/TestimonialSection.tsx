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
        <>


            <div className="w-full bg-black flex items-center justify-center section-padding">
                <div className="w-full max-w-[1680px] flex flex-col lg:flex-row gap-5">

                    {/* ================= LEFT SIDE ================= */}
                    <div className="relative lg:w-[420px] xl:w-[572px] lg:pr-6 xl:pr-8">

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

                            <p className="body-text">
                                Reviews from all the clients that we&apos;ve helped grow.
                            </p>

                            <div className="flex items-center gap-8 mt-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-[#1A1A1A] rounded-xl flex items-center justify-center">
                                        <Hexagon className="w-6 h-6 text-[#3B82F6] fill-[#3B82F6]" />
                                    </div>
                                    <div>
                                        <p className="text-white font-bold">4.5K</p>
                                        <p className="text-gray-400 text-xs">Ambitious Rating</p>
                                    </div>
                                </div>

                                <div className="h-8 w-[1px] bg-white/10"></div>

                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-[#1A1A1A] rounded-xl flex items-center justify-center">
                                        {/* Google Icon */}
                                        <svg viewBox="0 0 24 24" className="w-6 h-6">
                                            <path d="M22.56 12.25..." fill="#4285F4" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-white font-bold">4.5K</p>
                                        <p className="text-gray-400 text-xs">Google Rating</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ================= RIGHT SIDE / CAROUSEL ================= */}
                    <div
                        className="
        flex-1 relative flex items-center justify-center
       min-h-[520px] sm:min-h-[560px] lg:min-h-[520px] xl:h-[495px]

        px-4 lg:px-0
      "
                    >
                        {/* ===== LEFT PREVIEW ===== */}
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[180px] h-[300px]
                      rounded-2xl opacity-40 overflow-hidden hidden xl:block

                      scale-90 blur-[1px]">
                            <Image
                                src={testimonials[(currentIndex - 1 + testimonials.length) % testimonials.length].image}
                                alt=""
                                fill
                                className="object-cover opacity-50"
                            />
                        </div>

                        {/* ===== RIGHT PREVIEW ===== */}
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[180px] h-[300px]
                      rounded-2xl opacity-40 overflow-hidden hidden xl:block

                      scale-90 blur-[1px]">
                            <Image
                                src={testimonials[(currentIndex + 1) % testimonials.length].image}
                                alt=""
                                fill
                                className="object-cover opacity-50"
                            />
                        </div>

                        {/* ===== MAIN CARD ===== */}
                        <div className="relative w-full max-w-[640px] xl:max-w-[720px]
  z-10">
                            <div className="absolute -inset-[2px] bg-gradient-to-br
                        from-primary via-primary/50 to-transparent
                        rounded-[26px] blur-md opacity-80"></div>

                            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden h-full">
                                <div className="flex flex-col md:flex-row">

                                    {/* TEXT */}
                                    <div className="w-full md:w-[55%] p-6 md:p-10 flex flex-col justify-between">
                                        <span className="text-primary text-6xl">“</span>
                                        <p className="text-gray-800 my-4 leading-relaxed">
                                            {testimonials[currentIndex].text}
                                        </p>
                                        <div>
                                            <h3 className="font-bold">
                                                {testimonials[currentIndex].name}
                                            </h3>
                                            <p className="text-sm text-gray-600">
                                                {testimonials[currentIndex].position}
                                            </p>
                                        </div>
                                    </div>

                                    {/* IMAGE (FIXED FOR MOBILE) */}
                                    <div className="w-full md:w-[45%] relative h-[220px] sm:h-[260px] md:h-auto">
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

                        {/* ===== NAVIGATION ARROWS ===== */}
                        <button
                            onClick={prevTestimonial}
                            className="
          absolute left-1 sm:left-4 md:left-2 lg:left-6 xl:left-12
          top-1/2 -translate-y-1/2
          w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12
          bg-black border border-white/20 rounded-full
          flex items-center justify-center z-20
        "
                        >
                            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                        </button>

                        <button
                            onClick={nextTestimonial}
                            className="
          absolute right-1 sm:right-4 md:right-2 lg:right-6 xl:right-12
          top-1/2 -translate-y-1/2
          w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12
          bg-black border border-white/20 rounded-full
          flex items-center justify-center z-20
        "
                        >
                            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                        </button>

                        {/* ===== DOTS ===== */}
                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentIndex(i)}
                                    className={`h-2 rounded-full transition-all ${i === currentIndex ? "bg-primary w-8" : "bg-gray-500 w-2"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default TestimonialSection;