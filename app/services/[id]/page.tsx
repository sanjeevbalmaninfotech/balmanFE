'use client'

import { useState } from 'react';
import Image from "next/image";
export default function BlogSection() {
    const mainHeading = 'Branding Services';

    const subHeadings = [
        "Your website is your digital identity-here's why it matters more than ever in today's competitive market."
    ];

    const descriptions = [
        `In 2025, customers rely on online presence before trusting any business. A professional website acts as your brand's digital face and creates the first impression that shapes customer decisions. Whether you're a startup or a growing company, a modern website helps establish credibility and builds trust instantly.

A well-designed website operates 24/7, allowing customers to explore your services anytime and from anywhere. It also becomes the central hub for your marketing activities, helping drive traffic from social media, ads, and SEO efforts. With responsive layouts, faster load times, and user-friendly navigation, a professional site improves engagement and boosts conversions.

Investing in a high-quality website isn't just a trend-it's a necessity for long-term business growth.

Digital marketing has transformed the way businesses connect with customers. Through SEO, Google Ads, content marketing, and social media, companies can instantly reach their target audience with precision and cost-effectiveness. Unlike traditional marketing, every click, lead, and conversion can be tracked.

This data-driven approach helps businesses refine strategies, optimize performance, and increase ROI. Consistent online marketing improves brand visibility, boosts engagement, and creates a steady flow of qualified leads.

For companies aiming for rapid growth, digital marketing isn't optional-it's the backbone of modern business success.`
    ];

    const BlogsServices = [
        'Branding',
        'Digital Marketing',
        'Web Development',
        'Social Media Marketing',
        'Customer Support Services'
    ];

    return (
        <div className="relative min-h-screen bg-black text-white" style={{ paddingTop: 'clamp(30px, 5vw, 60px)', paddingBottom: 'clamp(30px, 5vw, 60px)', paddingLeft: 'clamp(16px, 8vw, 120px)', paddingRight: 'clamp(16px, 8vw, 120px)' }}>
            {/* Top-Right Orange Blur Background */}
            <div
                className="pointer-events-none absolute -top-20 -right-20 w-72 h-72 lg:w-96 lg:h-96  hidden xl:block"
                style={{
                    background: '#FF5900',
                    filter: 'blur(80px)',
                    opacity: 0.65,
                    zIndex: 0
                }}
            />

            <div className="relative w-full mx-auto z-10">
                {/* Date */}
                <div className="flex items-center gap-3 mb-4 sm:mb-6 lg:mb-8">
                    <div className="w-6 h-[2px] sm:w-8 bg-orange-600"></div>
                    <span
                        className="font-medium text-[27.63px] leading-[1] tracking-normal capitalize text-[#8E8E8E] font-['Plus_Jakarta_Sans']">
                        Service
                    </span>

                </div>
                <h1
                    className="font-['Plus Jakarta Sans'] font-bold mb-8 sm:mb-10 lg:mb-12"
                    style={{
                        color: '#E8E8EA',
                        fontSize: 'clamp(24px, 6vw, 42px)',
                        fontWeight: 700,
                        lineHeight: '110%',
                        textTransform: 'capitalize',
                        maxWidth: '100%'
                    }}
                >
                    {mainHeading}
                </h1>

                {/* Main Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 items-stretch">
                    {/* Left Side - Image + Text */}
                    <div className="lg:col-span-2 order-2 lg:order-1 space-y-6 sm:space-y-8 lg:space-y-10">
                        {/* IMAGE */}
                        <div className="relative rounded-2xl overflow-hidden h-[clamp(300px,_50vw,_480px)] shadow-2xl w-full">
                            <Image
                                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=400&fit=crop"
                                alt="Blog featured"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 rounded-2xl pointer-events-none"></div>
                        </div>


                        {/* HEADING + DESCRIPTION */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-12 w-full">
                            <div>
                                <h2 className="font-['Plus Jakarta Sans'] font-medium" style={{
                                    color: '#E8E8EA',
                                    fontSize: 'clamp(18px, 5vw, 28px)',
                                    fontWeight: 500,
                                    lineHeight: '120%'
                                }}>
                                    {subHeadings[0]}
                                </h2>
                            </div>
                            <div className="font-['Plus Jakarta Sans'] space-y-3 sm:space-y-4 lg:space-y-6" style={{
                                color: '#E8E8EA',
                                fontSize: 'clamp(13px, 3vw, 16px)',
                                fontWeight: 400,
                                lineHeight: '120%',
                                letterSpacing: '0.12em',
                            }}>
                                {descriptions[0].split('\n\n').map((paragraph, idx) => (
                                    <p key={idx} className="whitespace-pre-line break-words">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Services */}
                    <div className="lg:col-span-1 order-1 lg:order-2 mb-8 lg:mb-0 w-full">
                        <div className="border border-gray-700 rounded-xl p-3 sm:p-4 md:p-6 lg:p-8 flex flex-col md:h-auto lg:h-[480px]">
                            <div className="space-y-1 sm:space-y-2 md:space-y-3 lg:space-y-4 flex-1">
                                {BlogsServices.map((service, idx) => (
                                    <button
                                        key={idx}
                                        className="w-full text-left py-1 sm:py-1.5 md:py-2.5 lg:py-4 font-['Plus Jakarta Sans']"
                                        style={{
                                            color: '#E8E8EA',
                                            fontSize: 'clamp(12px, 2.5vw, 24px)',
                                            fontWeight: 500
                                        }}
                                    >
                                        {service}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}