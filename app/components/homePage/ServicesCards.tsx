'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

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
            title: "Branding Services",
            description: "Companies and Brands go unnoticed, every day, every year. Your brand is not just how it looks, it’s how it feels. Our job is to give that feeling a voice, a shape, and a story that your audience remembers.",
            leftHeight: 500,
            rightHeight: 460,
            url: "/services/branding-services",
            icon: "/services/WebDevelopment.png",
        },
        {
            title: "Digital Marketing",
            description: "We blend creator-driven ideas with performance-based digital marketing strategies. Every campaign is custom-built and designed to achieve measurable results without compromising creativity",
            leftHeight: 460,
            rightHeight: 420,
            url: "/services/digital-marketing",
            icon: "/services/DigitalMarketing.png",
        },
        {
            title: "Organic Growth",
            description: "We create content that feels natural yet impactful and designed to stop the scroll, spark conversations, and build loyal communities. Our goal is simple: to organically create trust, attract followers, and leave a lasting impression.",
            leftHeight: 420,
            rightHeight: 420,
            url: "/services/web-designing",
            icon: "/services/OrganicGrowth.png",
        },
        {
            title: "Web Development",
            description: "A brand is incomplete without a digital home, and your website is the most powerful representation of who you are. Our expert team of web developers ensure that every website we build is responsive, fast, visually stunning, and aligned with your brand’s identity.",
            leftHeight: 420,
            rightHeight: 460,
            url: "/services/app-development",
            icon: "/services/WebDevelopment.png",
        },
        {
            title: "Customer Support Services",
            description: "Branding doesn’t end after a customer discovers you; it extends to how they feel every time they interact with you. Balman Infotech provides complete Customer Support Services that ensure your customers feel heard, valued, and cared for.",
            leftHeight: 460,
            rightHeight: 500,
            url: "/services/web-development",
            icon: "/services/CustomerSupport.png",
        },
    ];

    const maxHeight = 500;

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
        <div className="min-h-screen bg-black flex items-center justify-center py-10 px-5 md:px-10 lg:py-[60px] lg:px-[60px] xl:px-[120px]">
            <div className="w-full max-w-[1800px]">

                {/* Header Section */}
                <div className="text-center mb-12 md:mb-16">
                    <h2
                        className="font-['Plus_Jakarta_Sans'] font-bold text-center leading-[110%] tracking-tight"
                        style={{
                            fontSize: "clamp(32px, 6vw, 36px)",
                            backgroundImage:
                                "radial-gradient(18.08% 413.84% at 51.02% 51.02%, #FFFFFF 35%, #656565 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                        }}
                    >
                        Experience In Different Industries
                    </h2>
                    <div className="heading-underline mx-auto mb-12"></div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4" style={{ perspective: '1000px' }}>
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
                                className="relative group w-full transition-transform duration-500 ease-out [transform:none] lg:[transform:rotateY(var(--rotate-y))]"
                                style={{
                                    height: `${maxHeight}px`,
                                    '--rotate-y': `${rotateY}deg`,
                                    transformStyle: 'preserve-3d',
                                } as any}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <div className="absolute inset-0 w-full h-full hidden lg:block" style={{ filter: isHovered ? 'drop-shadow(0 0 15px rgba(255, 89, 0, 0.3))' : 'none', transition: 'filter 0.5s ease' }}>
                                    <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                                        <path
                                            d={getRoundedPath(service.leftHeight, service.rightHeight)}
                                            className={`transition-all duration-500 fill-black ${isHovered ? 'stroke-orange-500' : 'stroke-zinc-800'}`}
                                            strokeWidth="2"
                                            vectorEffect="non-scaling-stroke"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>

                                <div className={`absolute inset-0 w-full h-full lg:hidden bg-black rounded-2xl border transition-all duration-500 ${isHovered ? 'border-orange-500 shadow-[0_0_15px_rgba(255,89,0,0.3)]' : 'border-zinc-800'}`} />

                                <div className="relative h-full p-6 flex flex-col justify-center z-10">
                                    <div className={`w-14 h-14 rounded-xl border flex items-center justify-center mb-6 transition-all duration-500 flex-shrink-0 overflow-hidden ${isHovered ? 'bg-orange-500 border-orange-500' : 'bg-zinc-900 border-zinc-800'}`}>
                                        <img
                                            src={service.icon}
                                            alt={service.title}
                                            className={`w-8 h-8 object-contain transition-all duration-500 ${isHovered ? 'brightness-0 invert' : ''}`}
                                        />
                                    </div>

                                    <div className="flex flex-col">
                                        <h3 className="text-white text-xl font-semibold mb-4">{service.title}</h3>
                                        <p className="text-zinc-400 text-sm leading-relaxed">{service.description}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
