import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

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
        <div className="w-full  bg-black flex items-center justify-center section-padding">
            <div className="w-full max-w-[1680px] h-auto lg:h-[495px] flex flex-col lg:flex-row gap-5">

                {/* Left Side Container */}
                <div className="relative lg:w-[572px] lg:pr-8">
                    <div className="lg:absolute lg:top-1/2 lg:-translate-y-1/2 w-full flex flex-col items-start gap-8">

                        <div className="flex items-center gap-3 mb-4">

                        </div>

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
                            Trusted by locals, loved by professionals, here&apos;s what our riders in Reading have to say about Taaaxi.com Executive Car Services.
                        </p>


                        {/* Ratings */}
                        <div className="flex items-center gap-10 mt-6">

                            {/* Trustpilot Rating */}
                            <div className="flex items-center gap-3">
                                {/* Star Icon */}
                                <img
                                    src="/icons/star.png"
                                    alt="star"
                                    className="w-6 h-6"
                                />
                                <div className="h-6 w-[1px] bg-white/40"></div>
                                <span className="text-white text-[16px] font-medium">4.5K</span>
                            </div>

                            {/* Google Rating */}
                            <div className="flex items-center gap-3">
                                {/* Google Icon */}
                                <img
                                    src="/icons/google.png"
                                    alt="google"
                                    className="w-6 h-6"
                                />
                                <div className="h-6 w-[1px] bg-white/40"></div>
                                <span className="text-white text-[16px] font-medium">4.5K</span>
                            </div>

                        </div>


                    </div>
                </div>

                {/* Right Side Container - Carousel */}
                <div className="flex-1 lg:w-[900px] h-auto lg:h-[495px] relative flex items-center justify-center">

                    {/* Left Preview Card - Shows Next Testimonial with Left Shadow */}
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[180px] h-[300px] rounded-2xl opacity-70 overflow-hidden hidden lg:block z-0">
                        <div className="relative w-full h-full bg-gradient-to-br from-[rgba(255,89,0,0.05)] to-gray-100 flex">
                            {/* Left side shadow overlay */}
                            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black/80 to-transparent z-10"></div>

                            <div className="w-[60%] p-4 flex flex-col justify-between relative z-0">
                                <div className="text-primary text-2xl font-serif">"</div>
                                <div className="text-[10px] text-gray-700 line-clamp-6 leading-tight">
                                    {testimonials[(currentIndex + 1) % testimonials.length].text}
                                </div>
                                <div className="mt-2">
                                    <div className="text-[11px] font-bold text-gray-900 truncate">
                                        {testimonials[(currentIndex + 1) % testimonials.length].name}
                                    </div>
                                    <div className="text-[9px] text-gray-600 truncate">
                                        {testimonials[(currentIndex + 1) % testimonials.length].position}
                                    </div>
                                </div>
                            </div>
                            <div className="w-[40%] bg-gray-300">
                                <img
                                    src={testimonials[(currentIndex + 1) % testimonials.length].image}
                                    alt=""
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Preview Card - Shows Previous Testimonial with Right Shadow */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[180px] h-[300px] rounded-2xl opacity-70 overflow-hidden hidden lg:block z-0">
                        <div className="relative w-full h-full bg-gradient-to-br from-[rgba(255,89,0,0.05)] to-gray-100 flex">
                            {/* Right side shadow overlay */}
                            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black/80 to-transparent z-10"></div>

                            <div className="w-[60%] p-4 flex flex-col justify-between relative z-0">
                                <div className="text-primary text-2xl font-serif">"</div>
                                <div className="text-[10px] text-gray-700 line-clamp-6 leading-tight">
                                    {testimonials[(currentIndex - 1 + testimonials.length) % testimonials.length].text}
                                </div>
                                <div className="mt-2">
                                    <div className="text-[11px] font-bold text-gray-900 truncate">
                                        {testimonials[(currentIndex - 1 + testimonials.length) % testimonials.length].name}
                                    </div>
                                    <div className="text-[9px] text-gray-600 truncate">
                                        {testimonials[(currentIndex - 1 + testimonials.length) % testimonials.length].position}
                                    </div>
                                </div>
                            </div>
                            <div className="w-[40%] bg-gray-300">
                                <img
                                    src={testimonials[(currentIndex - 1 + testimonials.length) % testimonials.length].image}
                                    alt=""
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Main Testimonial Card with Orange Shadow */}
                    <div className="relative w-full max-w-[720px] h-auto lg:h-[410px] z-10">
                        {/* Orange Shadow/Glow Effect */}
                        <div className="absolute -inset-1 bg-gradient-to-br from-primary/40 via-primary/30 to-transparent rounded-3xl blur-xl"></div>

                        <div className="relative bg-gradient-to-br from-[rgba(255,89,0,0.05)] to-gray-100 rounded-3xl shadow-2xl overflow-hidden">
                            <div className="flex flex-col md:flex-row h-full">

                                {/* Text Content Container */}
                                <div
                                    className="w-full md:w-[55%] flex flex-col justify-between"
                                    style={{
                                        paddingTop: '32.58px',
                                        paddingRight: '27.92px',
                                        paddingBottom: '46.54px',
                                        paddingLeft: '27.92px'
                                    }}
                                >
                                    {/* Quote Icon */}
                                    <div className="text-primary text-5xl md:text-6xl font-serif leading-none">“</div>

                                    {/* Testimonial Text */}
                                    <p
                                        className="text-gray-800 flex-1 my-4"
                                        style={{
                                            fontFamily: 'Plus Jakarta Sans, sans-serif',
                                            fontSize: 'clamp(14px, 2vw, 16px)',
                                            fontWeight: '400',
                                            lineHeight: '160%'
                                        }}
                                    >
                                        {testimonials[currentIndex].text}
                                    </p>

                                    {/* Author Info */}
                                    <div>
                                        <h3
                                            className="text-gray-900"
                                            style={{
                                                fontFamily: 'Plus Jakarta Sans, sans-serif',
                                                fontSize: '18px',
                                                fontWeight: '700'
                                            }}
                                        >
                                            {testimonials[currentIndex].name}
                                        </h3>
                                        <p
                                            className="text-gray-600"
                                            style={{
                                                fontFamily: 'Plus Jakarta Sans, sans-serif',
                                                fontSize: '14px',
                                                fontWeight: '400'
                                            }}
                                        >
                                            {testimonials[currentIndex].position}
                                        </p>
                                    </div>
                                </div>

                                {/* Image Section */}
                                <div
                                    className="w-full md:w-[45%] bg-gradient-to-br from-gray-300 to-gray-400 relative overflow-hidden"

                                >
                                    <div className="w-full h-full rounded-2xl overflow-hidden">
                                        <img
                                            src={testimonials[currentIndex].image}
                                            alt={testimonials[currentIndex].name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Arrows - White arrows in black circles */}
                    <button
                        onClick={prevTestimonial}
                        className="absolute left-2 lg:left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-black border border-white/20 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-900 transition-all z-20"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft className="w-6 h-6 text-white" />
                    </button>

                    <button
                        onClick={nextTestimonial}
                        className="absolute right-2 lg:right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-black border border-white/20 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-900 transition-all z-20"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight className="w-6 h-6 text-white" />
                    </button>

                    {/* Dots Indicator */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`h-2 rounded-full transition-all ${index === currentIndex ? 'bg-primary w-8' : 'bg-gray-400 w-2'
                                    }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialSection;