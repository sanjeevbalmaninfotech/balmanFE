'use client';
import { useState } from 'react';

interface Section {
    title: string;
    content: string;
    items?: string[];
}

interface BrandingAccordionProps {
    sections: Section[];
}

export default function BrandingAccordion({ sections }: BrandingAccordionProps) {
    const [openAccordion, setOpenAccordion] = useState<number | null>(null);

    return (
        <div
            className="bg-black"

        >
            <div className="">
                {/* Heading */}
                <h2
                    className="font-['Plus Jakarta Sans'] font-semibold lg:mb-2"
                    style={{
                        background: 'radial-gradient(circle, #FFFFFF 0%, #656565 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        fontSize: '28px',
                        lineHeight: '120%'
                    }}
                >
                    Branding Solutions by Balman Infotech
                </h2>

                {/* Description */}
                <p
                    className="font-['Plus Jakarta Sans'] lg:mb-3"
                    style={{
                        color: '#E8E8EA',
                        fontSize: '16px',
                        fontWeight: 400,
                        lineHeight: '120%'
                    }}
                >
                    We create quick, responsive, conversion-focused websites that effectively engage users and represent your business. The services that we offer include:
                </p>

                {/* Accordion Items */}
                <div className="space-y-0">
                    {sections?.slice(1, 5).map((section, idx) => (
                        <div key={idx} className="border-b border-gray-800">
                            <button
                                onClick={() => setOpenAccordion(openAccordion === idx ? null : idx)}
                                className="w-full pt-6  pb-2 flex items-center justify-between text-left hover:opacity-80 transition-opacity"
                            >
                                <span
                                    className="font-['Plus Jakarta Sans']"
                                    style={{
                                        color: '#E8E8EA',
                                        fontSize: '20px',
                                        fontWeight: 500,
                                        lineHeight: '24px'
                                    }}
                                >
                                    {section.title}
                                </span>
                                <svg
                                    className={`w-6 h-6 transition-transform duration-300 flex-shrink-0 ml-4 ${openAccordion === idx ? 'rotate-180' : ''
                                        }`}
                                    fill="none"
                                    stroke="#E8E8EA"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openAccordion === idx ? 'max-h-48 pb-6' : 'max-h-0'
                                    }`}
                            >
                                <p
                                    className="font-['Plus Jakarta Sans']"
                                    style={{
                                        color: '#E8E8EA',
                                        fontSize: '16px',
                                        fontWeight: 400,
                                        lineHeight: '24px'
                                    }}
                                >
                                    {section.content}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
