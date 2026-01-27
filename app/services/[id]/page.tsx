// app/services/[id]/page.tsx
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { servicesData } from '@/app/constants/servicesData';
import BrandingAccordion from '@/app/components/services/BrandingAccordion';
import Footer from '@/app/components/footer/Footer';
import Navbar from '@/app/components/navBar';
import OrangeBlurEffect from '@/app/components/services/OrangeBlurEffect';
import ServiceHeading from '@/app/components/services/Heading';
import PrimaryButton from '@/app/components/Common/PrimaryButton';



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

                    <>
                        {/* Top-Right Orange Blur Background */}
                        {/* <OrangeBlurEffect /> */}
                    </>


                    <div className="relative w-full mx-auto z-10">
                        <ServiceHeading />


                        {/* Main Heading */}
                        <h1
                            className="font-['Plus Jakarta Sans'] font-semibold mb-4 sm:mb-10 lg:mb-15 text-center"
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

                            <>

                                <div className="w-full xl:w-[320px] 2xl:w-[360px] flex-shrink-0">
                                    <div className="border border-gray-700 rounded-xl p-4">
                                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-x-4 gap-y-2">
                                            {service.services.map((svc, idx) => (
                                                <button
                                                    key={idx}
                                                    className="w-full text-left py-2 font-['Plus Jakarta Sans'] "
                                                    style={{
                                                        color: '#E8E8EA',
                                                        fontSize: 'clamp(12px, 1.2vw, 24px)',
                                                        fontWeight: 500
                                                    }}
                                                >
                                                    {svc}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                            </>




                            {/* Left Side - Image + Content */}
                            <div className="flex-1 order-2 ">
                                {/* IMAGE */}

                                <>

                                    <div className="relative rounded-2xl overflow-hidden h-[clamp(300px,_50vw,_480px)]   lg:mb-15 w-full">
                                        <Image
                                            src={service.image}
                                            alt={service.mainHeading}
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 rounded-2xl pointer-events-none"></div>
                                    </div>
                                </>


                                {/* HEADING + DESCRIPTION */}
                                <>
                                    <div className=" w-full ">
                                        <div className="lg:mb-3">
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
                                        <div className="font-['Plus Jakarta Sans']  " style={{
                                            color: '#E8E8EA',
                                            fontSize: 'clamp(14px, 3vw, 16px)',
                                            fontWeight: 400,
                                            lineHeight: '120%',
                                            letterSpacing: '0%',
                                        }}>
                                            {service.descriptions[0].split('\n\n').map((paragraph, idx) => (
                                                <p key={idx} className="whitespace-pre-line break-words ">
                                                    {paragraph}
                                                </p>
                                            ))}

                                            {/* Talk to an Expert Button */}
                                            <div className="lg:mt-3"> <PrimaryButton
                                                text="Talk to an Expert"
                                                href="/contact-us"
                                            /></div>

                                        </div>
                                    </div>


                                </>


                                {/* Additional Sections */}

                                <>
                                    <>
                                        <div className="lg:mt-15">
                                            {/* Why Choose Us Cards Section */}
                                            {service.whyChooseUs && service.whyChooseUs.length > 0 && (
                                                <div className="">
                                                    <h2
                                                        className="font-['Plus Jakarta Sans'] font-semibold text-left lg:mb-7"
                                                        style={{
                                                            background: 'radial-gradient(circle, #FFFFFF 0%, #656565 100%)',
                                                            WebkitBackgroundClip: 'text',
                                                            WebkitTextFillColor: 'transparent',
                                                            backgroundClip: 'text',
                                                            fontSize: 'clamp(10px, 6vw, 28px)',
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
                                                                        fontSize: 'clamp(10px, 3vw, 20px)',
                                                                        fontWeight: 400,
                                                                        lineHeight: '150%'
                                                                    }}
                                                                >
                                                                    {reason}
                                                                </p>
                                                                <div
                                                                    className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 bg-orange-600 rounded-xl px-6 py-3 font-['Plus Jakarta Sans'] font-bold"
                                                                    style={{
                                                                        fontSize: '18px',
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
                                        </div>

                                    </>

                                    <>


                                        {/* Branding Solutions Dropdown Section */}
                                        <div className="lg:mt-15">
                                            {service.accordion && service.accordion.length > 0 && (
                                                <BrandingAccordion sections={service.accordion} />
                                            )}

                                        </div>

                                    </>

                                    <>
                                        {/* Process Section */}
                                        {service?.process && service?.process?.length > 0 && (
                                            <div className="bg-black lg:mt-15 ">
                                                <div className="">
                                                    <h2
                                                        className="font-['Plus Jakarta Sans'] font-bold lg:mb-7 text-left"
                                                        style={{
                                                            background: 'radial-gradient(circle, #FFFFFF 0%, #656565 100%)',
                                                            WebkitBackgroundClip: 'text',
                                                            WebkitTextFillColor: 'transparent',
                                                            backgroundClip: 'text',
                                                            fontSize: 'clamp(28px, 5vw, 28px)',
                                                            lineHeight: '120%'
                                                        }}
                                                    >
                                                        Branding Process
                                                    </h2>

                                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16">
                                                        {service.process.map((step, idx) => (
                                                            <div key={idx} className="relative">
                                                                <div className="flex flex-col items-start text-left space-y-2">

                                                                    {/* Circle and Line Container */}
                                                                    <div className="relative flex items-center w-full">
                                                                        <div
                                                                            className="w-16 h-16 rounded-full border-2 border-[#FF5900] flex items-center justify-center font-['Plus Jakarta Sans'] font-bold relative z-10 bg-black"
                                                                            style={{
                                                                                fontSize: '24px',
                                                                                color: '#E8E8EA', //FF5900
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
                                                                                background: '#E8E8EA',
                                                                                WebkitBackgroundClip: 'text',
                                                                                WebkitTextFillColor: 'transparent',
                                                                                backgroundClip: 'text',
                                                                                fontSize: 'clamp(16px, 3vw, 20px)',
                                                                                lineHeight: '120%'
                                                                            }}
                                                                        >
                                                                            {step.title}
                                                                        </h3>
                                                                        <p
                                                                            className="font-['Plus Jakarta Sans'] mt-2"
                                                                            style={{
                                                                                color: '#B8B8B8',
                                                                                fontSize: 'clamp(13px, 2.5vw, 15px)',
                                                                                lineHeight: '120%'
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

                                    </>

                                    <>

                                        {/* Industries Section */}
                                        {service?.industries && service?.industries?.length > 0 && (
                                            <div className=" lg:mt-15 ">
                                                <div className="mx-auto">
                                                    <h2
                                                        className="font-['Plus Jakarta Sans'] font-semibold lg:mb-3"
                                                        style={{
                                                            background: 'radial-gradient(circle, #FFFFFF 0%, #656565 100%)',
                                                            WebkitBackgroundClip: 'text',
                                                            WebkitTextFillColor: 'transparent',
                                                            backgroundClip: 'text',
                                                            fontSize: 'clamp(24px, 6vw, 28px)',
                                                            fontWeight: 600,
                                                            lineHeight: '110%',
                                                            letterSpacing: '0%'
                                                        }}
                                                    >
                                                        Industries We Serve
                                                    </h2>

                                                    <ul className="list-disc list-inside space-y-2">
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


                                    </>
                                    <>

                                        {/* FAQs Section */}
                                        {service?.faqs && service?.faqs?.length > 0 && (
                                            <div className="lg:mt-15">
                                                <div className="">
                                                    <h2
                                                        className="font-['Plus Jakarta Sans'] font-semibold lg:mb-3 text-left"
                                                        style={{
                                                            background: 'radial-gradient(circle, #FFFFFF 0%, #656565 100%)',
                                                            WebkitBackgroundClip: 'text',
                                                            WebkitTextFillColor: 'transparent',
                                                            backgroundClip: 'text',
                                                            fontSize: 'clamp(24px, 6vw, 28px)',
                                                            fontWeight: 600,
                                                            lineHeight: '110%',
                                                            letterSpacing: '0%'
                                                        }}
                                                    >
                                                        Frequently Asked Questions
                                                    </h2>

                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3">
                                                        {service.faqs.map((faq, idx) => (
                                                            <div key={idx} className="space-y-2">
                                                                <h3
                                                                    className="font-['Plus Jakarta Sans'] font-semibold"
                                                                    style={{
                                                                        background: '#E8E8EA',
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
                                                                        lineHeight: '120%'
                                                                    }}
                                                                >
                                                                    {faq.answer}
                                                                </p>
                                                            </div>
                                                        ))}
                                                    </div>

                                                    {/* CTA Buttons */}
                                                    <div className="flex flex-col sm:flex-row gap-4 justify-right lg:mt-15">
                                                        <PrimaryButton
                                                            text="Request a Free Brand Audit"
                                                            href="/contact-us"
                                                        />
                                                        <PrimaryButton
                                                            text="Schedule a Strategy Call Today"
                                                            href="/contact-us"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                    </>


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