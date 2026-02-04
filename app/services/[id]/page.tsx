// app/services/[id]/page.tsx
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { servicesData } from "@/app/constants/servicesData";
import BrandingAccordion from "@/app/components/services/BrandingAccordion";
import Footer from "@/app/components/footer/Footer";
import Navbar from "@/app/components/navBar";
import ServiceHeading from "@/app/components/services/Heading";
import PrimaryButton from "@/app/components/Common/PrimaryButton";
import AISection from "@/app/components/services/AISection";
import ProcessSection from "@/app/components/services/ProcessSection";

export function generateStaticParams() {
  return Object.keys(servicesData).map((id) => ({
    id: id,
  }));
}
type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function ServicePage({ params }: PageProps) {
  const { id } = await params;
  const service = servicesData[id];

  if (!service) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <div className="mt-4 sm:mt-6 lg:mt-10 section-padding bg-[#010101] text-white">
        {/* Hero Section */}
        <div className="relative">
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

              <div className="w-full xl:w-[320px] 2xl:w-[360px] shrink-0">
                <div className="border border-gray-700 rounded-lg sm:rounded-xl p-2 sm:p-3 lg:p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-x-2 sm:gap-x-3 lg:gap-x-4 gap-y-1 sm:gap-y-2">
                    {service.leftSideServices.map((svc, idx) => (
                      <Link
                        key={idx}
                        href={svc.path}
                        className="block w-full py-1 sm:py-1.5 lg:py-2 service-list-text text-xs sm:text-sm lg:text-base"
                      >
                        {svc.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Left Side - Image + Content */}
              <div className="flex-1 order-2 ">
                {/* IMAGE */}
                <div className="relative rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden h-[clamp(200px,50vw,480px)] mb-4 sm:mb-8 lg:mb-15 w-full">
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
                  <div className="mb-2 sm:mb-2.5 lg:mb-3">
                    <h2 className="service-heading-h2">
                      {service.subHeadings[0]}
                    </h2>
                  </div>
                  <div className="service-body-text">
                    {service.descriptions[0]
                      .split("\n\n")
                      .map((paragraph, idx) => (
                        <p
                          key={idx}
                          className="whitespace-pre-line wrap-break-word"
                        >
                          {paragraph}
                        </p>
                      ))}

                    {/* Talk to an Expert Button */}
                    {service.mainCta && (
                      <div className="mt-2 sm:mt-2.5 lg:mt-3">
                        <PrimaryButton
                          text={service.mainCta.text}
                          href={service.mainCta.href}
                        />
                      </div>
                    )}
                  </div>
                </div>

                <>
                  {service.whyChooseUs &&
                    service.whyChooseUs.items.length > 0 && (
                      <div className="mt-6 sm:mt-8 lg:mt-15">
                        <h2 className="service-heading-h2 text-left mb-4 sm:mb-5 lg:mb-7">
                          {service.whyChooseUs.heading}
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
                          {service?.whyChooseUs?.items?.map((reason, idx) => (
                            <div
                              key={idx}
                              className="relative border-2 border-orange-600 rounded-lg sm:rounded-xl lg:rounded-2xl 
                               p-2 sm:p-3 lg:p-4 mb-4 sm:mb-5 lg:mb-6 text-[14px] sm:text-[15px] lg:text-[16px] text-center bg-black "
                              style={{ background: "black" }}
                            >
                              <p className="service-body-text mb-4 p-2 lg:p-4 sm:mb-5 lg:mb-6 text-white! text-[clamp(10px,3vw,15px)]!">
                                {reason}
                              </p>
                              <div
                                className="absolute -bottom-3 sm:-bottom-4 lg:-bottom-5 left-1/2 transform -translate-x-1/2 bg-orange-600 rounded-lg sm:rounded-xl px-3 sm:px-5 lg:px-6 py-1.5 sm:py-2 lg:py-3 font-['Plus Jakarta Sans'] font-bold"
                                style={{
                                  fontSize: "clamp(14px, 2.5vw, 18px)",
                                  color: "#FFFFFF",
                                }}
                              >
                                {String(idx + 1).padStart(2, "0")}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                </>

                <>
                  {/* Additional Sections */}
                  {service?.whySection && (
                    <div className="mt-6 sm:mt-8 lg:mt-15">
                      <div className="bg-[#010101]">
                        {/* Title */}
                        <h2 className="service-heading-h2 mb-2 sm:mb-3 lg:mb-6">
                          {service.whySection.title}
                        </h2>

                        {/* Description */}
                        {service.whySection.description
                          .split(/\n\s*\n/)
                          .map((paragraph, idx) => (
                            <p
                              key={idx}
                              className="service-body-text mb-2 sm:mb-3 lg:mb-4 whitespace-pre-line wrap-break-word"
                            >
                              {paragraph.trim()}
                            </p>
                          ))}

                        {/* List Heading */}
                        {service.whySection.listTitle && (
                          <p className="service-body-text font-semibold mb-2 sm:mb-2.5 lg:mb-3">
                            {service.whySection.listTitle}
                          </p>
                        )}

                        {/* Bullet Points */}
                        <ul className="list-disc pl-4 sm:pl-5 lg:pl-5 space-y-1 sm:space-y-1.5 lg:space-y-2 mb-2 sm:mb-3 lg:mb-4">
                          {service?.whySection?.points?.map((point, idx) => (
                            <li key={idx} className="service-body-text">
                              {point}
                            </li>
                          ))}
                        </ul>

                        {/* Footer Text */}
                        {service.whySection.footerText && (
                          <p className="service-body-text">
                            {service.whySection.footerText}
                          </p>
                        )}
                      </div>
                    </div>
                  )}
                </>

                <>
                  {service.accordionData && (
                    <BrandingAccordion accordionData={service.accordionData} />
                  )}
                </>
                <>
                  {service.aiSection && <AISection data={service.aiSection} />}
                </>

                <>
                  {/* Process Section - New Structure with main heading & description */}
                  {service.processSection && (
                    <ProcessSection data={service.processSection} />
                  )}
                </>

                {service?.industries &&
                  service?.industries?.items?.length > 0 && (
                    <div className="mt-6 sm:mt-8 lg:mt-15">
                      <div className="mx-auto">
                        <h2 className="service-heading-h2 mb-2 sm:mb-2.5 lg:mb-3">
                          {service.industries.heading}
                        </h2>

                        <ul className="list-disc list-inside space-y-1 sm:space-y-1.5 lg:space-y-2">
                          {service.industries.items.map((industry, idx) => (
                            <li
                              key={idx}
                              className="service-body-text text-xs sm:text-sm lg:text-base"
                            >
                              {industry}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                {service?.faqs && service?.faqs?.items?.length > 0 && (
                  <div className="mt-6 sm:mt-8 lg:mt-15">
                    <h2 className="service-heading-h2 mb-3 sm:mb-4 lg:mb-3 text-left">
                      {service.faqs.heading}
                      <div className="heading-underline-left"></div>
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-x-12 lg:gap-y-3">
                      {service.faqs.items.map((faq, idx) => (
                        <div
                          key={idx}
                          className="space-y-1 sm:space-y-1.5 lg:space-y-2"
                        >
                          <h3 className="service-heading-h3 text-sm sm:text-base lg:text-lg">
                            {faq.question}
                          </h3>

                          <p
                            className="service-body-text text-[#B8B8B8]! text-xs sm:text-sm lg:text-base"
                            style={{ lineHeight: "120%" }}
                          >
                            {faq.answer}
                          </p>
                        </div>
                      ))}
                    </div>

                    {service?.ctaButtons && service?.ctaButtons?.length > 0 && (
                      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 lg:gap-4 justify-center sm:justify-start lg:justify-right mt-4 sm:mt-6 lg:mt-15">
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
