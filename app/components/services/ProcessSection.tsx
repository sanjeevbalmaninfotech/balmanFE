'use client';
import { ProcessSectionProps } from '@/app/types/servicesPage';



export default function ProcessSection({ data }: ProcessSectionProps) {
    return (
        <div className="bg-[#010101]">
            <div className="container lg:mt-15">
                {/* Main Heading */}
                <h2 className="service-heading-h2 lg:mb-4 text-left">
                    {data.mainHeading}
                </h2>

                {/* Main Description */}
                <p
                    className="font-['Plus Jakarta Sans'] mb-8 text-left"
                    style={{
                        color: '#E8E8EA',
                        fontSize: '16px',
                        fontWeight: 400,
                        lineHeight: '150%'
                    }}
                >
                    {data.mainDescription}
                </p>

                {/* Process Steps */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16">
                    {data.steps.map((step, idx) => (
                        <div key={idx} className="relative">
                            <div className="flex flex-col items-start text-left space-y-2">
                                <div className="relative flex items-center w-full">
                                    {/* Step Number Circle */}
                                    <div
                                        className="w-16 h-16 rounded-full border-2 border-[#FF5900] flex items-center justify-center font-['Plus Jakarta Sans'] font-bold relative z-10 bg-[#010101]"
                                        style={{
                                            fontSize: '24px',
                                            color: '#E8E8EA',
                                            flexShrink: 0
                                        }}
                                    >
                                        {step.step}
                                    </div>

                                    {/* Connecting Line */}
                                    {idx < data.steps.length - 1 && (
                                        <div
                                            className="hidden lg:block absolute left-8 top-1/2 h-[2px] bg-[#E8E8EA]"
                                            style={{
                                                width: 'calc(100% + 64px)',
                                                zIndex: 0,
                                                transform: 'translateY(-50%)'
                                            }}
                                        ></div>
                                    )}
                                </div>

                                {/* Step Content */}
                                <div className="pt-2">
                                    <h3 className="!text-[clamp(16px,3vw,20px)] !text-[#E8E8EA] font-['Plus Jakarta Sans'] font-semibold">
                                        {step.title}
                                    </h3>
                                    <p className="service-body-text mt-2 !text-[#B8B8B8] !text-[clamp(13px,2.5vw,15px)]">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}