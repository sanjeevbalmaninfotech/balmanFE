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

                    {/* Top-Right Orange Blur Background */}
                    {/* <OrangeBlurEffect /> */}


                    <div className="relative w-full mx-auto z-10">
                        <ServiceHeading />


                        {/* Main Heading */}
                        <h1 className="service-heading-h1 mb-4 sm:mb-10 lg:mb-15 text-center">
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
                                                className="w-full text-left py-2 service-list-text"
                                            >
                                                {svc}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>




                            {/* Left Side - Image + Content */}
                            <div className="flex-1 order-2 ">
                                {/* IMAGE */}
                                <div className="relative rounded-2xl overflow-hidden h-[clamp(300px,_50vw,_480px)] lg:mb-15 w-full">
                                    <Image
                                        src={service.image}
                                        alt={service.mainHeading}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 rounded-2xl pointer-events-none"></div>
                                </div>


                                {/* HEADING + DESCRIPTION */}
                                <div className="w-full">
                                    <div className="lg:mb-3">
                                        <h2 className="service-heading-h2">
                                            {service.subHeadings[0]}
                                        </h2>
                                    </div>
                                    <div className="service-body-text">
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


                                {/* Additional Sections */}
                                {service?.whySection && (
                                    <div className="lg:mt-15">
                                        <div className="bg-black ">
                                            <h2 className="service-heading-h2 mb-4 lg:mb-6">
                                                {service.whySection.title}
                                            </h2>
                                            <p className="service-body-text">
                                                {service.whySection.content}
                                            </p>
                                        </div>
                                    </div>
                                )}

                                {service.whyChooseUs && service.whyChooseUs.items.length > 0 && (
                                    <div className="lg:mt-15">
                                        <h2 className="service-heading-h2 text-left lg:mb-7">
                                            {service.whyChooseUs.heading}
                                        </h2>

                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                            {service?.whyChooseUs?.items?.map((reason, idx) => (
                                                <div
                                                    key={idx}
                                                    className="relative border-2 border-orange-600 rounded-2xl p-8 text-center mb-6"
                                                    style={{ background: 'black' }}
                                                >
                                                    <p className="service-body-text mb-6 !text-white !text-[clamp(10px,3vw,20px)]">
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

                                {service.accordionData && (
                                    <BrandingAccordion accordionData={service.accordionData} />
                                )}

                                {service?.process && service?.process?.length > 0 && (
                                    <div className="bg-black lg:mt-15">
                                        <h2 className="service-heading-h2 lg:mb-7 text-left">
                                            {service.process[0].heading}
                                        </h2>

                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16">
                                            {service.process.map((step, idx) => (
                                                <div key={idx} className="relative">
                                                    <div className="flex flex-col items-start text-left space-y-2">
                                                        <div className="relative flex items-center w-full">
                                                            <div
                                                                className="w-16 h-16 rounded-full border-2 border-[#FF5900] flex items-center justify-center font-['Plus Jakarta Sans'] font-bold relative z-10 bg-black"
                                                                style={{
                                                                    fontSize: '24px',
                                                                    color: '#E8E8EA',
                                                                    flexShrink: 0
                                                                }}
                                                            >
                                                                {step.step}
                                                            </div>

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

                                                        <div className="pt-2">
                                                            <h3 className=" !text-[clamp(16px,3vw,20px)]  !text-[#E8E8EA]">
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
                                )}

                                {service?.industries && service?.industries?.items?.length > 0 && (
                                    <div className="lg:mt-15">
                                        <div className="mx-auto">
                                            <h2 className="service-heading-h2 lg:mb-3">
                                                {service.industries.heading}
                                            </h2>

                                            <ul className="list-disc list-inside space-y-2">
                                                {service.industries.items.map((industry, idx) => (
                                                    <li key={idx} className="service-body-text">
                                                        {industry}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                )}

                                {service?.faqs && service?.faqs?.items?.length > 0 && (
                                    <div className="lg:mt-15">
                                        <h2 className="service-heading-h2 lg:mb-3 text-left">
                                            {service.faqs.heading}
                                        </h2>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3">
                                            {service.faqs.items.map((faq, idx) => (
                                                <div key={idx} className="space-y-2">
                                                    <h3
                                                        className="
  
    font-['Plus_Jakarta_Sans']
    font-bold
    text-[18px]
    leading-[150%]
    tracking-[0%]
    text-[#E8E8EA]
  "
                                                    >
                                                        {faq.question}
                                                    </h3>

                                                    <p className="service-body-text !text-[#B8B8B8] !line-height-[120%]">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>

                                        {service?.ctaButtons && service?.ctaButtons?.length > 0 && (
                                            <div className="flex flex-col sm:flex-row gap-4 justify-right lg:mt-15">
                                                {service.ctaButtons.map((button, idx) => (
                                                    <PrimaryButton
                                                        key={idx}
                                                        text={button.text}
                                                        href={button.href}
                                                    />
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                )}


                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>

    );
}
