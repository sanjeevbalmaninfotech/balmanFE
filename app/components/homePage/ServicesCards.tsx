'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import SectionHeading from "../Common/SectionHeading";

interface Service {
    title: string;
    description: string;
    leftHeight: number;
    rightHeight: number;
    url: string;
    icon: string;
}

export default function ServicesCards() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const router = useRouter();

    const services: Service[] = [
        {
            title: "Branding  Services",
            description:
                "Your brand is not just a product or a service; it is about the feelings it evokes in the consumer. Our job is to give that feeling a voice, a shape, and a story that your audience remembers.",
            leftHeight: 500,
            rightHeight: 460,
            url: "/services/branding",
            icon: "/services/WebDevelopment.png",
        },
        {
            title: "Digital Marketing",
            description:
                "We blend creator-driven ideas with performance-based digital marketing strategies. Every campaign is custom-built and designed to achieve measurable results without compromising creativity.",
            leftHeight: 460,
            rightHeight: 420,
            url: "/services/digital-marketing",
            icon: "/services/DigitalMarketing.png",
        },
        {
            title: "Organic Growth",
            description:
                "We create content that feels natural yet impactful and designed to stop the scroll, spark conversations, and build loyal communities. Our goal is simple: to organically create trust, attract followers, and leave a lasting impression.",
            leftHeight: 420,
            rightHeight: 420,
            url: "/services/organic-growth",
            icon: "/services/OrganicGrowth.png",
        },
        {
            title: "Web Development",
            description:
                `A brand is incomplete without a digital home, and your website is the most powerful representation of who you are. Our expert team of web developers ensure that every website we build is responsive, fast, visually stunning, and aligned with your brand’s identity.`,
            leftHeight: 420,
            rightHeight: 460,
            url: "/services/web-development",
            icon: "/services/WebDevelopment.png",
        },
        {
            title: "Customer Support Services",
            description:
                "Branding doesn’t end after a customer discovers you; it extends to how they feel every time they interact with you. Balman Infotech provides complete Customer Support Services that ensure your customers feel heard, valued, and cared for.",
            leftHeight: 460,
            rightHeight: 500,
            url: "/services/customer-support",
            icon: "/services/CustomerSupport.png",
        },
    ];

    const maxHeight = 500;

    /* SVG WAVE PATH — USED ONLY ON XL+ */
    const getRoundedPath = (leftH: number, rightH: number) => {
        const leftGap = maxHeight - leftH;
        const rightGap = maxHeight - rightH;

        const lt = (leftGap / 2 / maxHeight) * 100;
        const lb = 100 - lt;
        const rt = (rightGap / 2 / maxHeight) * 100;
        const rb = 100 - rt;

        const r = 4;
        const topSlope = (rt - lt) / 100;
        const botSlope = (rb - lb) / 100;

        return `
      M 0,${lt + r}
      Q 0,${lt} ${r},${lt + topSlope * r}
      L ${100 - r},${rt - topSlope * r}
      Q 100,${rt} 100,${rt + r}
      L 100,${rb - r}
      Q 100,${rb} ${100 - r},${rb - botSlope * r}
      L ${r},${lb + botSlope * r}
      Q 0,${lb} 0,${lb - r}
      Z
    `;
    };

    return (
        <section className="min-h-screen bg-[#010101] mt-4 lg:mt-1 py-10 section-padding-x">
            <div className="w-full max-w-[1800px] mx-auto">

                {/* HEADER */}
                <div className="text-center mb-12">
                    <SectionHeading>
                        Experience In Different Industries
                    </SectionHeading>
                    <div className="heading-underline"></div>
                </div>

                {/* GRID */}
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
                    style={{ perspective: '1000px' }}
                >
                    {services.map((service, index) => {
                        const isHovered = hoveredIndex === index;

                        let rotateY = 0;
                        if (index === 0) rotateY = -5;
                        if (index === 1) rotateY = -2.5;
                        if (index === 3) rotateY = 2.5;
                        if (index === 4) rotateY = 5;

                        return (
                            <div
                                key={index}
                                onClick={() => router.push(service.url)}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                className="relative group w-full cursor-pointer transition-transform duration-500 ease-out h-auto xl:h-[500px]
                  [transform:none] xl:[transform:rotateY(var(--rotate-y))]"
                                style={{
                                    '--rotate-y': `${rotateY}deg`,
                                    transformStyle: 'preserve-3d',
                                } as any}
                            >
                                {/* WAVE SVG — XL ONLY */}
                                <div
                                    className="absolute inset-0 hidden xl:block"
                                    style={{
                                        filter: isHovered
                                            ? ' drop-shadow(0 0 25px rgba(255,89,0,0.2))'
                                            : 'none',
                                        transition: 'filter 0.4s ease',
                                    }}
                                >

                                    <svg
                                        className="w-full h-full"
                                        viewBox="0 0 100 100"
                                        preserveAspectRatio="none"
                                    >
                                        <path
                                            d={getRoundedPath(service.leftHeight, service.rightHeight)}
                                            className={`fill-black transition-all duration-500 ${isHovered ? 'stroke-zinc-500' : 'stroke-zinc-800'
                                                }`}
                                            strokeWidth="2"
                                            vectorEffect="non-scaling-stroke"
                                        />
                                    </svg>
                                </div>

                                {/* NORMAL CARD — MOBILE + TABLET + IPAD */}
                                <div className="absolute inset-0 xl:hidden bg-[#010101] rounded-2xl border border-zinc-800" />

                                {/* CONTENT */}
                                <div className="relative z-10 p-6 xl:p-8 h-full flex flex-col justify-center">
                                    <div className="w-14 h-14 mb-6 rounded-xl bg-[#010101] flex items-center justify-center">
                                        <img
                                            src={service.icon}
                                            alt={service.title}
                                            className="w-10 h-10 object-contain"
                                        />
                                    </div>

                                    <h3 className="text-white text-xl font-semibold mb-4">
                                        {service.title}
                                    </h3>

                                    <p className="text-zinc-400 text-sm leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
