import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star, Hexagon } from "lucide-react";
import SectionHeading from "../Common/SectionHeading";

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: "Abodah, under the umbrella of Zennial Pro, has completely transformed our approach to learning and development. Their tailored solutions have not only improved employee engagement but also boosted productivity across our organization. Working with Abodah has been a game-changer for us.",
      name: "David Lee",
      position: "HR Director, Tech Innovations Inc.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    },
    {
      id: 2,
      text: "Zennial Pro's innovative approach has revolutionized our training programs. Their dedication to optimizing our processes has streamlined our operations significantly.",
      name: "John Thompson",
      position: "Senior Manager, Global Solutions",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    },
    {
      id: 3,
      text: "The partnership with Abodah has exceeded all our expectations. Their comprehensive understanding of our needs and swift implementation has been remarkable. The ROI we've seen is outstanding, and our team's productivity has improved dramatically.",
      name: "Sarah Mitchell",
      position: "CEO, Innovation Labs",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <>
      <section className="w-full bg-[#010101] py-4 md:py-24 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-8">

          {/* ================= LEFT SIDE ================= */}
          <div className="w-full lg:w-[40%] flex flex-col items-start text-left z-20">
            <SectionHeading align="left">
              WHAT OUR <br />
              CLIENT SAYS
            </SectionHeading>
            <div className="heading-underline-left mt-2"></div>

            <p className="body-text mt-8 text-gray-400 max-w-sm">
              Reviews from all the clients that we&apos;ve helped grow.
            </p>

            <div className="flex flex-wrap items-center gap-6 mt-10">
              {/* Rating Item 1 */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#1A1A1A] rounded-xl flex items-center justify-center border border-white/5">
                  <Image src="/icons/brand.png" alt="Brand" width={24} height={24} />
                </div>
                <div>
                  <p className="text-white font-bold text-lg">4.5K</p>
                  <p className="text-gray-500 text-xs uppercase tracking-wider">Ambitious Rating</p>
                </div>
              </div>

              <div className="hidden sm:block h-8 w-[1px] bg-white/10"></div>

              {/* Rating Item 2 */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#1A1A1A] rounded-xl flex items-center justify-center border border-white/5">
                  <Image src="/icons/google.png" alt="Google" width={24} height={24} />
                </div>
                <div>
                  <p className="text-white font-bold text-lg">4.8K</p>
                  <p className="text-gray-500 text-xs uppercase tracking-wider">Google Rating</p>
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT SIDE / CAROUSEL ================= */}
          <div className="w-full lg:flex-1 relative flex items-center justify-center min-h-[500px]">

            {/* Side Preview: Left (Desktop only) */}
            <div className="absolute left-[-10%] top-1/2 -translate-y-1/2 w-[150px] h-[250px] rounded-2xl opacity-20 overflow-hidden hidden xl:block blur-[2px]">
              <Image
                src={testimonials[(currentIndex - 1 + testimonials.length) % testimonials.length].image}
                alt="" fill className="object-cover"
              />
            </div>

            {/* SIDE PREVIEW: Right (Desktop only) */}
            <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[150px] h-[250px] rounded-2xl opacity-20 overflow-hidden hidden xl:block blur-[2px]">
              <Image
                src={testimonials[(currentIndex + 1) % testimonials.length].image}
                alt="" fill className="object-cover"
              />
            </div>

            {/* MAIN CARD CONTAINER */}
            <div className="relative w-full max-w-[680px] z-10 group">

              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-br from-[#FF5900] to-transparent rounded-[28px] blur-md opacity-30 group-hover:opacity-50 transition-opacity"></div>

              {/* The Actual Card */}
              <div className="relative bg-white rounded-[24px] overflow-hidden flex flex-col md:flex-row min-h-[400px] shadow-2xl">

                {/* Text Side */}
                <div className="w-full md:w-[55%] p-8 sm:p-10 flex flex-col justify-between order-2 md:order-1">
                  <div>
                    <span className="text-[#FF5900] text-6xl font-serif leading-none inline-block mb-4">“</span>
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base italic">
                      {testimonials[currentIndex].text}
                    </p>
                  </div>

                  <div className="mt-8">
                    <h3 className="font-bold text-gray-900 text-lg">
                      {testimonials[currentIndex].name}
                    </h3>
                    <p className="text-sm text-[#FF5900] font-medium uppercase tracking-wide">
                      {testimonials[currentIndex].position}
                    </p>
                  </div>
                </div>

                {/* Image Side */}
                <div className="w-full md:w-[45%] relative h-[250px] md:h-auto order-1 md:order-2">
                  <Image
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* NAVIGATION BUTTONS: Positioned relative to the MAIN CARD */}
              <button
                onClick={prevTestimonial}
                className="absolute -left-4 sm:-left-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-black border border-white/20 rounded-full flex items-center justify-center z-30 hover:bg-[#FF5900] transition-colors shadow-xl"
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>

              <button
                onClick={nextTestimonial}
                className="absolute -right-4 sm:-right-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-black border border-white/20 rounded-full flex items-center justify-center z-30 hover:bg-[#FF5900] transition-colors shadow-xl"
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* DOTS */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${i === currentIndex ? "bg-[#FF5900] w-10" : "bg-gray-600 w-2"
                    }`}
                />
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialSection;
