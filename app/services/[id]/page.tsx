// app/services/[id]/page.tsx
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { servicesData } from '@/app/constants/servicesData';
import BrandingAccordion from '@/app/components/services/BrandingAccordion';
import Footer from '@/app/components/footer/Footer';
import Navbar from '@/app/components/navBar';


export function generateStaticParams() {
    return Object.keys(servicesData).map((id) => ({
        id: id,
    }));
}
type PageProps = {
    params: Promise<{ id: string }>;
};

export default async function ({ params }: PageProps) {
    const { id } = await params;
    const service = servicesData[id];

    if (!service) {
        notFound();
    }

    return (
        <>

            <Navbar />
            <div className="mt-10 section-padding bg-black text-white">
                {/* Hero Section */}
                <div
                    className="relative"

                >
                    {/* Top-Right Orange Blur Background */}
                    <div
                        className="pointer-events-none absolute -top-20 -right-20 w-72 h-72 lg:w-96 lg:h-96 hidden xl:block"
                        style={{
                            background: '#FF5900',
                            filter: 'blur(80px)',
                            opacity: 0.65,
                            zIndex: 0
                        }}
                    />

                    <div className="relative w-full mx-auto z-10">
                        <div className="flex items-center justify-center gap-3 mb-4 sm:mb-6 lg:mb-8">
                            <div className="w-6 h-[2px] sm:w-8 bg-orange-600"></div>
                            <span className="font-medium text-[27.63px] leading-[1] capitalize text-[#8E8E8E] font-['Plus_Jakarta_Sans']">
                                Service
                            </span>
                        </div>
                        {/* Main Heading */}
                        <h1
                            className="font-['Plus Jakarta Sans'] font-semibold mb-8 sm:mb-10 lg:mb-12 text-center"
                            style={{
                                background: 'radial-gradient(circle, #FFFFFF 0%, #656565 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                fontSize: 'clamp(24px, 6vw, 36px)',
                                fontWeight: 600,
                                lineHeight: '110%',
                                letterSpacing: '0%',
                                maxWidth: '100%'
                            }}
                        >
                            {service.mainHeading}
                        </h1>

                        {/* Main Grid Layout */}
                        <div className="flex flex-col xl:flex-row gap-6 sm:gap-8 lg:gap-12">

                            {/* Services List - Top on mobile/tablet, Side on desktop */}
                            <div className="w-full xl:w-[320px] 2xl:w-[360px] flex-shrink-0">
                                <div className="border border-gray-700 rounded-xl p-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-x-4 gap-y-2">
                                        {service.services.map((svc, idx) => (
                                            <button
                                                key={idx}
                                                className="w-full text-left py-2 font-['Plus Jakarta Sans'] hover:text-orange-500 transition-colors"
                                                style={{
                                                    color: '#E8E8EA',
                                                    fontSize: 'clamp(12px, 1.2vw, 16px)',
                                                    fontWeight: 500
                                                }}
                                            >
                                                {svc}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>



                            {/* Left Side - Image + Content */}
                            <div className="flex-1 order-2 space-y-6 sm:space-y-8 lg:space-y-10">
                                {/* IMAGE */}
                                <div className="relative rounded-2xl overflow-hidden h-[clamp(300px,_50vw,_480px)] shadow-2xl w-full">
                                    <Image
                                        src={service.image}
                                        alt={service.mainHeading}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 rounded-2xl pointer-events-none"></div>
                                </div>

                                {/* HEADING + DESCRIPTION */}
                                <div className=" w-full">
                                    <div>
                                        <h2 className="font-['Plus Jakarta Sans'] font-semibold" style={{
                                            background: 'radial-gradient(circle, #FFFFFF 0%, #656565 100%)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                            backgroundClip: 'text',
                                            fontSize: 'clamp(20px, 5vw, 28px)',
                                            fontWeight: 600,
                                            lineHeight: '150%',
                                            letterSpacing: '0%'
                                        }}>
                                            {service.subHeadings[0]}
                                        </h2>
                                    </div>
                                    <div className="font-['Plus Jakarta Sans'] space-y-2 sm:space-y-2 lg:space-y-2" style={{
                                        color: '#E8E8EA',
                                        fontSize: 'clamp(14px, 3vw, 16px)',
                                        fontWeight: 400,
                                        lineHeight: '150%',
                                        letterSpacing: '0%',
                                    }}>
                                        {service.descriptions[0].split('\n\n').map((paragraph, idx) => (
                                            <p key={idx} className="whitespace-pre-line break-words">
                                                {paragraph}
                                            </p>
                                        ))}

                                        {/* Talk to an Expert Button */}
                                        <button className="btn-primary touch-manipulation">
                                            Talk to an Expert
                                        </button>
                                    </div>
                                </div>

                                {/* Additional Sections */}

                                <>

                                    {/* Why Choose Us Cards Section */}
                                    {service.whyChooseUs && service.whyChooseUs.length > 0 && (
                                        <div className="space-y-8 sm:space-y-10 lg:space-y-12">
                                            <h2
                                                className="font-['Plus Jakarta Sans'] font-semibold text-left"
                                                style={{
                                                    background: 'radial-gradient(circle, #FFFFFF 0%, #656565 100%)',
                                                    WebkitBackgroundClip: 'text',
                                                    WebkitTextFillColor: 'transparent',
                                                    backgroundClip: 'text',
                                                    fontSize: 'clamp(10px, 6vw, 36px)',
                                                    fontWeight: 600,
                                                    lineHeight: '110%',
                                                    letterSpacing: '0%'
                                                }}
                                            >
                                                Why Choose Balman as Your Web Development Partner?
                                            </h2>

                                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                                {service?.whyChooseUs?.map((reason, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="relative border-2 border-orange-600 rounded-2xl p-8 text-center mb-6"
                                                        style={{ background: 'black' }}
                                                    >
                                                        <p
                                                            className="font-['Plus Jakarta Sans'] mb-6"
                                                            style={{
                                                                color: '#FFFFFF',
                                                                fontSize: 'clamp(10px, 3vw, 10px)',
                                                                fontWeight: 400,
                                                                lineHeight: '150%'
                                                            }}
                                                        >
                                                            {reason}
                                                        </p>
                                                        <div
                                                            className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 bg-orange-600 rounded-xl px-6 py-3 font-['Plus Jakarta Sans'] font-bold"
                                                            style={{
                                                                fontSize: '12px',
                                                                color: '#FFFFFF'
                                                            }}
                                                        >
                                                            {String(idx + 1).padStart(2, '0')}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Branding Solutions Dropdown Section */}
                                    {service.accordion && service.accordion.length > 0 && (
                                        <BrandingAccordion sections={service.accordion} />
                                    )}


                                    {/* Process Section */}
                                    {service?.process && service?.process?.length > 0 && (
                                        <div className="bg-black py-12 lg:py-20">
                                            <div className="mx-auto">
                                                <h2
                                                    className="font-['Plus Jakarta Sans'] font-bold mb-12 text-left"
                                                    style={{
                                                        background: 'radial-gradient(circle, #FFFFFF 0%, #656565 100%)',
                                                        WebkitBackgroundClip: 'text',
                                                        WebkitTextFillColor: 'transparent',
                                                        backgroundClip: 'text',
                                                        fontSize: 'clamp(28px, 5vw, 42px)',
                                                        lineHeight: '120%'
                                                    }}
                                                >
                                                    Branding Process
                                                </h2>

                                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16">
                                                    {service.process.map((step, idx) => (
                                                        <div key={idx} className="relative">
                                                            <div className="flex flex-col items-start text-left space-y-4">

                                                                {/* Circle and Line Container */}
                                                                <div className="relative flex items-center w-full">
                                                                    <div
                                                                        className="w-16 h-16 rounded-full border-2 border-orange-500 flex items-center justify-center font-['Plus Jakarta Sans'] font-bold relative z-10 bg-black"
                                                                        style={{
                                                                            fontSize: '24px',
                                                                            color: '#FF5900',
                                                                            flexShrink: 0
                                                                        }}
                                                                    >
                                                                        {step.step}
                                                                    </div>

                                                                    {/* Connecting Line */}
                                                                    {idx < (service.process?.length ?? 0) - 1 && (
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

                                                                {/* Text Content */}
                                                                <div className="pt-2">
                                                                    <h3
                                                                        className="font-['Plus Jakarta Sans'] font-semibold"
                                                                        style={{
                                                                            background: 'radial-gradient(circle, #FFFFFF 0%, #656565 100%)',
                                                                            WebkitBackgroundClip: 'text',
                                                                            WebkitTextFillColor: 'transparent',
                                                                            backgroundClip: 'text',
                                                                            fontSize: 'clamp(16px, 3vw, 20px)',
                                                                            lineHeight: '130%'
                                                                        }}
                                                                    >
                                                                        {step.title}
                                                                    </h3>
                                                                    <p
                                                                        className="font-['Plus Jakarta Sans'] mt-2"
                                                                        style={{
                                                                            color: '#B8B8B8',
                                                                            fontSize: 'clamp(13px, 2.5vw, 15px)',
                                                                            lineHeight: '150%'
                                                                        }}
                                                                    >
                                                                        {step.description}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Industries Section */}
                                    {service?.industries && service?.industries?.length > 0 && (
                                        <div className=" ">
                                            <div className="mx-auto">
                                                <h2
                                                    className="font-['Plus Jakarta Sans'] font-semibold mb-8"
                                                    style={{
                                                        background: 'radial-gradient(circle, #FFFFFF 0%, #656565 100%)',
                                                        WebkitBackgroundClip: 'text',
                                                        WebkitTextFillColor: 'transparent',
                                                        backgroundClip: 'text',
                                                        fontSize: 'clamp(24px, 6vw, 36px)',
                                                        fontWeight: 600,
                                                        lineHeight: '110%',
                                                        letterSpacing: '0%'
                                                    }}
                                                >
                                                    Industries We Serve
                                                </h2>

                                                <ul className="list-disc list-inside space-y-4">
                                                    {service.industries.map((industry, idx) => (
                                                        <li
                                                            key={idx}
                                                            className="font-['Plus Jakarta Sans']"
                                                            style={{
                                                                color: '#E8E8EA',
                                                                fontSize: 'clamp(14px, 2.5vw, 16px)',
                                                                fontWeight: 400,
                                                                lineHeight: '150%'
                                                            }}
                                                        >
                                                            {industry}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    )}

                                    {/* FAQs Section */}
                                    {service?.faqs && service?.faqs?.length > 0 && (
                                        <div className="bg-black py-12 lg:py-20">
                                            <div className="mx-auto">
                                                <h2
                                                    className="font-['Plus Jakarta Sans'] font-semibold mb-12 text-left"
                                                    style={{
                                                        background: 'radial-gradient(circle, #FFFFFF 0%, #656565 100%)',
                                                        WebkitBackgroundClip: 'text',
                                                        WebkitTextFillColor: 'transparent',
                                                        backgroundClip: 'text',
                                                        fontSize: 'clamp(24px, 6vw, 36px)',
                                                        fontWeight: 600,
                                                        lineHeight: '110%',
                                                        letterSpacing: '0%'
                                                    }}
                                                >
                                                    Frequently Asked Questions
                                                </h2>

                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                                                    {service.faqs.map((faq, idx) => (
                                                        <div key={idx} className="space-y-3">
                                                            <h3
                                                                className="font-['Plus Jakarta Sans'] font-semibold"
                                                                style={{
                                                                    background: 'radial-gradient(circle, #FFFFFF 0%, #656565 100%)',
                                                                    WebkitBackgroundClip: 'text',
                                                                    WebkitTextFillColor: 'transparent',
                                                                    backgroundClip: 'text',
                                                                    fontSize: 'clamp(16px, 3vw, 20px)',
                                                                    fontWeight: 600,
                                                                    lineHeight: '140%'
                                                                }}
                                                            >
                                                                {faq.question}
                                                            </h3>
                                                            <p
                                                                className="font-['Plus Jakarta Sans']"
                                                                style={{
                                                                    color: '#B8B8B8',
                                                                    fontSize: 'clamp(14px, 2.5vw, 16px)',
                                                                    fontWeight: 400,
                                                                    lineHeight: '160%'
                                                                }}
                                                            >
                                                                {faq.answer}
                                                            </p>
                                                        </div>
                                                    ))}
                                                </div>

                                                {/* CTA Buttons */}
                                                <div className="flex flex-col sm:flex-row gap-4 justify-right mt-12">
                                                    <button
                                                        className="btn-primary touch-manipulation"

                                                    >
                                                        Request a Free Brand Audit
                                                    </button>
                                                    <button className="btn-primary touch-manipulation">
                                                        Schedule a Strategy Call Today
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )}


                                </>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>

    );
}