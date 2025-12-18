'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

interface Service {
    title: string;
    description: string;
    leftHeight: number;
    rightHeight: number;
}

export default function Page() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const router = useRouter();

    const services: Service[] = [
        {
            title: "Digital Marketing",
            description: "We excel in building scalable, secure, and feature-rich apps that drive business success.",
            leftHeight: 300,
            rightHeight: 290
        },
        {
            title: "Branding Services",
            description: "We excel in building scalable, secure, and feature-rich apps that drive business success.",
            leftHeight: 290,
            rightHeight: 280
        },
        {
            title: "Web Designing",
            description: "We excel in building scalable, secure, and feature-rich apps that drive business success.",
            leftHeight: 280,
            rightHeight: 280
        },
        {
            title: "App Development",
            description: "We excel in building scalable, secure, and feature-rich apps that drive business success.",
            leftHeight: 280,
            rightHeight: 290
        },
        {
            title: "Web Development",
            description: "We excel in building scalable, secure, and feature-rich apps that drive business success.",
            leftHeight: 290,
            rightHeight: 300
        }
    ];

    const maxHeight = 300;

    const getRoundedPath = (leftH: number, rightH: number) => {
        const leftGap = maxHeight - leftH;
        const rightGap = maxHeight - rightH;

        // Calculate Y positions (0-100 scale)
        const lt = (leftGap / 2 / maxHeight) * 100; // Left Top
        const lb = 100 - lt; // Left Bottom
        const rt = (rightGap / 2 / maxHeight) * 100; // Right Top
        const rb = 100 - rt; // Right Bottom

        const r = 4; // Corner radius (approximate percentage)

        // Calculate slopes for top and bottom edges
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
        <div className="min-h-screen bg-cyan-700 flex items-center justify-center p-4 sm:p-8">
            <div className="w-full max-w-7xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4" style={{ perspective: '1000px' }}>
                    {services.map((service, index) => {
                        const isHovered = hoveredIndex === index;

                        // Calculate rotation for the "angle" effect
                        let rotateY = 0;
                        if (index === 0) rotateY = -5;
                        if (index === 1) rotateY = -2.5;
                        if (index === 3) rotateY = 2.5;
                        if (index === 4) rotateY = 5;

                        return (
                            <div
                                key={index}
                                onClick={() => router.push('/')}
                                className="relative group w-full cursor-pointer"
                                style={{
                                    height: `${maxHeight}px`,
                                    transform: `rotateY(${rotateY}deg)`,
                                    transformStyle: 'preserve-3d',
                                    transition: 'transform 0.5s ease'
                                }}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                {/* SVG Background & Border */}
                                <div className="absolute inset-0 w-full h-full" style={{ filter: isHovered ? 'drop-shadow(0 0 15px rgba(255, 89, 0, 0.3))' : 'none', transition: 'filter 0.5s ease' }}>
                                    <svg
                                        className="w-full h-full overflow-visible"
                                        viewBox="0 0 100 100"
                                        preserveAspectRatio="none"
                                    >
                                        <path
                                            d={getRoundedPath(service.leftHeight, service.rightHeight)}
                                            className={`transition-all duration-500 fill-black ${isHovered ? 'stroke-orange-500' : 'stroke-zinc-800'
                                                }`}
                                            strokeWidth="2"
                                            vectorEffect="non-scaling-stroke"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>

                                {/* Content Container */}
                                <div className="relative h-full p-6 flex flex-col z-10">
                                    {/* Icon */}
                                    <div
                                        className={`w-14 h-14 rounded-xl border flex items-center justify-center mb-6 transition-all duration-500 flex-shrink-0 ${isHovered
                                            ? 'bg-orange-500 border-orange-500'
                                            : 'bg-zinc-900 border-zinc-800'
                                            }`}
                                    >
                                        <div className="grid grid-cols-2 gap-1.5">
                                            {[...Array(6)].map((_, i) => (
                                                <div
                                                    key={i}
                                                    className={`w-2 h-2 rounded-sm transition-all duration-500 ${isHovered ? 'bg-black' : 'bg-orange-500'
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                    </div>

                                    {/* Text Content */}
                                    <div className="flex-1 flex flex-col">
                                        <h3 className="text-white text-xl font-semibold mb-4">
                                            {service.title}
                                        </h3>
                                        <p className="text-zinc-400 text-sm leading-relaxed">
                                            {service.description}
                                        </p>
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
