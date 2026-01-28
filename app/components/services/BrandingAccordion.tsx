'use client';
import { BrandingAccordionProps } from '@/app/types/servicesPage';
import { useState } from 'react';



export default function BrandingAccordion({ accordionData }: BrandingAccordionProps) {
    const [openAccordion, setOpenAccordion] = useState<number | null>(null);

    return (
        <div className="bg-black mt-15">
            <div className="">
                {/* Dynamic Heading */}
                <h2
                    className="font-['Plus Jakarta Sans'] font-semibold lg:mb-2 service-heading-h2"
                >
                    {accordionData.heading}
                </h2>

                {/* Dynamic Description */}
                <p
                    className="font-['Plus Jakarta Sans'] lg:mb-3"
                    style={{
                        color: '#E8E8EA',
                        fontSize: '16px',
                        fontWeight: 400,
                        lineHeight: '120%'
                    }}
                >
                    {accordionData.description}
                </p>

                {/* Accordion Items */}
                <div className="space-y-0">
                    {accordionData.accordion.map((section, idx) => (
                        <div key={idx} className="border-b border-gray-800">
                            <button
                                onClick={() => setOpenAccordion(openAccordion === idx ? null : idx)}
                                className="w-full pt-6 pb-2 flex items-center justify-between text-left hover:opacity-80 transition-opacity"
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
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openAccordion === idx ? 'max-h-96 pb-6' : 'max-h-0'
                                    }`}
                            >
                                <p
                                    className="font-['Plus Jakarta Sans'] mb-3"
                                    style={{
                                        color: '#E8E8EA',
                                        fontSize: '16px',
                                        fontWeight: 400,
                                        lineHeight: '24px'
                                    }}
                                >
                                    {section.content}
                                </p>

                                {/* Show items only if they exist */}
                                {section.items && section.items.length > 0 && (
                                    <ul className="space-y-2 ml-4">
                                        {section.items.map((item, itemIdx) => (
                                            <li
                                                key={itemIdx}
                                                className="font-['Plus Jakarta Sans'] flex items-start"
                                                style={{
                                                    color: '#E8E8EA',
                                                    fontSize: '14px',
                                                    fontWeight: 400,
                                                    lineHeight: '20px'
                                                }}
                                            >
                                                <span className="mr-2">•</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}