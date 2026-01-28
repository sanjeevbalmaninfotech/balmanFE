'use client';
import { AIMarketingSection as AIMarketingSectionType } from '@/app/constants/servicesData';

interface AIMarketingSectionProps {
    data: AIMarketingSectionType;
}

export default function AISection({ data }: AIMarketingSectionProps) {
    return (
        <div className="bg-black lg:mt-15">
            <div className="container ">
                {/* Main Heading */}
                <h2
                    className="font-['Plus Jakarta Sans'] font-semibold mb-4"
                    style={{
                        color: '#E8E8EA',
                        fontSize: '32px',
                        lineHeight: '120%'
                    }}
                >
                    {data.mainHeading}
                </h2>

                {/* Main Description */}
                <p
                    className="font-['Plus Jakarta Sans'] mb-8"
                    style={{
                        color: '#E8E8EA',
                        fontSize: '16px',
                        fontWeight: 400,
                        lineHeight: '150%'
                    }}
                >
                    {data.description}
                </p>

                {/* Sub Sections */}
                <div className="space-y-8">
                    {data.subSections.map((subSection, idx) => (
                        <div key={idx}>
                            {/* Sub Heading */}
                            <h3
                                className="font-['Plus Jakarta Sans'] font-semibold mb-3"
                                style={{
                                    color: '#E8E8EA',
                                    fontSize: '24px',
                                    lineHeight: '120%'
                                }}
                            >
                                {subSection.subHeading}
                            </h3>

                            {/* Sub Description */}
                            <p
                                className="font-['Plus Jakarta Sans'] mb-4"
                                style={{
                                    color: '#E8E8EA',
                                    fontSize: '16px',
                                    fontWeight: 400,
                                    lineHeight: '150%'
                                }}
                            >
                                {subSection.description}
                            </p>

                            {/* Bullet Points (if exists) */}
                            {subSection.bulletPoints && subSection.bulletPoints.length > 0 && (
                                <div className="space-y-6 mt-6">
                                    <ul className="ml-4 list-disc space-y-4 marker:text-[#FF5900]">
                                        {subSection.bulletPoints.map((bullet, bulletIdx) => (
                                            <li key={bulletIdx}>

                                                {/* Main Bullet Title */}
                                                <h4
                                                    className="
          font-['Plus Jakarta Sans']
          font-semibold
          text-[18px]
          leading-[140%]
          text-[#E8E8EA]
        "
                                                >
                                                    {bullet.title}
                                                </h4>

                                                {/* Bullet Description */}
                                                <p
                                                    className="
          font-['Plus Jakarta Sans']
          mt-2
          text-[15px]
          font-normal
          leading-[150%]
          text-[#E8E8EA]
        "
                                                >
                                                    {bullet.description}
                                                </p>

                                                {/* Sub Bullet Points */}
                                                {bullet.subPoints && bullet.subPoints.length > 0 && (
                                                    <ul className="mt-2 ml-6 list-disc space-y-2 marker:text-[#FF5900]">
                                                        {bullet.subPoints.map((subPoint, subIdx) => (
                                                            <li key={subIdx}
                                                                className="font-['Plus Jakarta Sans'] text-[14px] font-normal leading-[120%] text-[#E8E8EA]">
                                                                {subPoint}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}

                                            </li>
                                        ))}
                                    </ul>

                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}