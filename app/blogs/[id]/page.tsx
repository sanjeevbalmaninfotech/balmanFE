'use client'


import { useState } from 'react';

export default function BlogSection() {
    const [currentImage, setCurrentImage] = useState(0);

    const images = [
        'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=400&fit=crop',

    ];

    const services = [
        'Branding',
        'Digital Marketing',
        'Web Development',
        'Social Media Marketing',
        'Customer Support Services'
    ];

    const mainHeading = 'Why Every Business Needs a Professional Website in 2025';

    const descriptions = [

        `In 2025, customers rely on online presence before trusting any business. A professional website acts as your brand’s digital face and creates the first impression that shapes customer decisions. Whether you’re a startup or a growing company, a modern website helps establish credibility and builds trust instantly.
A well-designed website operates 24/7, allowing customers to explore your services anytime and from anywhere. It also becomes the central hub for your marketing activities, helping drive traffic from social media, ads, and SEO efforts. With responsive layouts, faster load times, and user-friendly navigation, a professional site improves engagement and boosts conversions.
Investing in a high-quality website isn’t just a trend-it’s a necessity for long-term business growth.

Digital marketing has transformed the way businesses connect with customers. Through SEO, Google Ads, content marketing, and social media, companies can instantly reach their target audience with precision and cost-effectiveness. Unlike traditional marketing, every click, lead, and conversion can be tracked.
This data-driven approach helps businesses refine strategies, optimize performance, and increase ROI. Consistent online marketing improves brand visibility, boosts engagement, and creates a steady flow of qualified leads.
For companies aiming for rapid growth, digital marketing isn’t optional-it’s the backbone of modern business success.`
    ];

    const subHeadings = [
        "Your website is your digital identity-here's why it matters more than ever in today's competitive market.",
        "Digital marketing has transformed how businesses reach customers and drive growth in 2025."
    ];

    return (
        <div
            className="relative min-h-screen bg-black text-white px-4 sm:px-6 lg:px-12 xl:px-24 2xl:px-32 py-12 sm:py-16 lg:py-20"
            style={{ paddingTop: '60px', paddingBottom: '60px' }}
        >
            {/* Top-Right Orange Blur Background */}
            <div
                className="pointer-events-none absolute -top-20 -right-20 w-72 h-72 lg:w-96 lg:h-96 rounded-full hidden xl:block"
                style={{
                    background: '#FF5900',
                    filter: 'blur(80px)',
                    opacity: 0.65,
                    zIndex: 0
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Date */}
                <div className="flex items-center gap-3 mb-6 sm:mb-8">
                    <div className="w-6 h-px sm:w-8 sm:h-px bg-orange-600"></div>
                    <span className="text-xs sm:text-sm text-gray-400 tracking-wider font-medium">10 Aug, 2025</span>
                </div>

                {/* Main Heading */}
                <h1
                    className="font-['Plus Jakarta Sans'] font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-8 sm:mb-10 lg:mb-12 max-w-4xl leading-tight"
                    style={{
                        color: '#E8E8EA',
                        fontWeight: 700,
                        lineHeight: '110%',
                        fontSize: 'clamp(28px, 5vw, 42px)'
                    }}
                >
                    {mainHeading}
                </h1>

                {/* Main Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 items-start">
                    {/* Left Side - Image and Text */}
                    <div className="lg:col-span-2 space-y-6 sm:space-y-8 lg:space-y-10 order-2 lg:order-1">
                        {/* Image Container */}
                        <div className="relative rounded-2xl overflow-hidden border border-gray-700 h-80 shadow-2xl">
                            <img
                                src={images[0]}
                                alt="Blog featured"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 rounded-2xl border-2 border-orange-600/30 pointer-events-none"></div>
                        </div>

                        {/* Below Image - Heading and Description Layout */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
                            {/* Left - Sub Heading */}
                            <div>
                                <h2
                                    className="font-['Plus Jakarta Sans'] font-medium"
                                    style={{
                                        color: '#E8E8EA',
                                        fontWeight: 500,
                                        lineHeight: '120%',
                                        fontSize: '28px'
                                    }}
                                >
                                    {subHeadings[0]}
                                </h2>
                            </div>

                            {/* Right - Description */}
                            <div
                                className="font-['Plus Jakarta Sans'] space-y-4 sm:space-y-6"
                                style={{
                                    color: '#E8E8EA',
                                    fontSize: '16px',
                                    fontWeight: 400,
                                    lineHeight: '120%'
                                }}
                            >
                                {descriptions[0].split('\n\n').map((paragraph, idx) => (
                                    <p key={idx} className="whitespace-pre-line">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Services List */}
                    <div className="lg:col-span-1 order-1 w-[50%] lg:order-2 lg:mb-0 lg:w-auto">
                        <div className="max-w-md border border-gray-700 rounded-xl sm:p-2">
                            <div>
                                {services.map((service, idx) => (
                                    <button
                                        key={idx}
                                        className="w-full text-left py-2 sm:py-2 font-['Plus Jakarta Sans']"
                                        style={{
                                            color: '#E8E8EA',
                                            fontSize: '16px',
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