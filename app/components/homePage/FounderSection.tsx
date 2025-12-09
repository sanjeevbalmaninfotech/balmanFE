

import React from 'react';
import Image from 'next/image';

const FounderSection = () => {
    return (
        <section className="w-full bg-black text-white">
            <div className="max-w-[1680px] mx-auto px-[120px] py-[60px] flex justify-between items-center min-h-[972px] gap-10">
                {/* Image Section - Left Side */}
                <div className="w-[760.59px] h-[852.38px] flex-shrink-0 relative">
                    <Image
                        src="/oner.png"
                        alt="Founder Portrait"
                        fill
                        className="object-cover"
                        priority
                        unoptimized
                    />

                </div>

                {/* Content Section - Right Side */}
                <div className="w-[679px] flex flex-col gap-[60px]">

                    <div className="flex flex-col gap-6">

                        {/* Section Label */}
                        <div className="section-label flex items-center gap-3">
                            <div className="section-label-line bg-orange-500 w-10 h-[2px]"></div>
                            <p className="text-sm tracking-[2px] uppercase text-gray-400 font-medium">
                                Our Founder
                            </p>
                        </div>

                        {/* Heading */}
                        <h2 className="text-5xl font-semibold leading-tight">
                            Meet The Mind That Turned A Vision Into Reality
                        </h2>
                    </div>


                    <p className="text-base leading-relaxed text-gray-300">
                        Balman Infotech was built on a simple vision — to empower businesses through
                        smart, scalable, and future-ready technology. Under the leadership of our
                        founder, the company has grown from a small idea into a trusted digital partner
                        for clients across industries. With a passion for innovation and a deep
                        understanding of emerging technologies, our founder believes in combining
                        creativity with strategy to deliver meaningful results. His approach focuses on
                        building long-term relationships, maintaining transparency, and ensuring every
                        solution adds real value to the client's business. Driven by integrity, dedication,
                        and continuous learning, he inspires the Balman Infotech team to push
                        boundaries, explore new possibilities, and set higher standards in every project.
                        His vision continues to guide the company toward excellence, shaping Balman
                        Infotech into a brand known for trust, innovation, and technological expertise.
                    </p>
                </div>
            </div>

            {/* Responsive Styles */}
            <style jsx>{`
        @media (max-width: 1400px) {
          .max-w-\\[1680px\\] {
            padding-left: 80px;
            padding-right: 80px;
          }
        }

        @media (max-width: 1024px) {
          .max-w-\\[1680px\\] {
            flex-direction: column;
            padding: 40px 60px;
          }
        }

        @media (max-width: 768px) {
          .max-w-\\[1680px\\] {
            padding: 40px 30px;
          }
        }
      `}</style>
        </section>
    );
};

export default FounderSection;