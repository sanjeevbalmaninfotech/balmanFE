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
import { Metadata } from "next";

export const metadata: Metadata = {
  robots: {
    index: true,
    follow: true,
  },
};

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
        <div className="relative w-full mx-auto z-10">
          <ServiceHeading />

          <div className="flex flex-col items-center justify-center">
            <h1 className="service-heading-h1 mb-4 sm:mb-10 lg:mb-15 text-center">
              {service.mainHeading}
            </h1>
          </div>

          {/* --- ROW 1: Image and Sidebar List (Side-by-Side) --- */}
          <div className="flex flex-col xl:flex-row gap-6 sm:gap-8 lg:gap-12 mb-4 sm:mb-8 lg:mb-15">
            {/* IMAGE SECTION */}
            <div className="flex-1">
              <div className="relative w-full aspect-[1565/573] rounded-2xl sm:rounded-xl lg:rounded-3xl overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.mainHeading}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* SIDEBAR SERVICES LIST */}
            <div className="hidden xl:block w-full xl:w-[260px] 2xl:w-[280px] shrink-0">
              <div className="border border-gray-700 rounded-lg sm:rounded-xl p-2 sm:p-3 lg:p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 place-items-center xl:place-items-start gap-x-4 gap-y-2">
                  {service.leftSideServices.map((svc, idx) => (
                    <Link
                      key={idx}
                      href={svc.path}
                      className="block w-full text-center xl:text-left py-1.5 service-list-text text-xs sm:text-sm lg:text-base"
                    >
                      {svc.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* --- ROW 2 & BEYOND: Everything else flows below Row 1 --- */}
          <div className="w-full">

            {/* 1. HEADING + DESCRIPTION (Full Width) */}
            <div className="w-full mb-6 sm:mt-8 lg:mt-15">
              <div className="mb-2 sm:mb-2.5 lg:mb-3">
                <h2 className="service-heading-h2">
                  {service.subHeadings[0]}
                </h2>
              </div>
              <div className="service-body-text">
                {service.descriptions[0].split("\n\n").map((paragraph, idx) => (
                  <p key={idx} className="whitespace-pre-line wrap-break-word mb-4">
                    {paragraph}
                  </p>
                ))}
                {service.mainCta && (
                  <div className="mt-2 sm:mt-2.5 lg:mt-3">
                    <PrimaryButton text={service.mainCta.text} href={service.mainCta.href} />
                  </div>
                )}
              </div>
            </div>

            {/* 2. WHY CHOOSE US (Restricted Width to match image above) */}
            <div className="mt-10 lg:mt-[2px]">
              {service.whyChooseUs && service.whyChooseUs.items.length > 0 && (
                <div className="mt-6 sm:mt-8 lg:mt-15 xl:max-w-[calc(100%-328px)]">
                  <h2 className="service-heading-h2 text-left mb-4 sm:mb-5 lg:mb-7">
                    {service.whyChooseUs.heading}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
                    {service?.whyChooseUs?.items?.map((reason, idx) => (
                      <div
                        key={idx}
                        className="relative border-2 border-orange-600 rounded-lg sm:rounded-xl lg:rounded-2xl p-4 mb-4 text-center bg-black"
                        style={{ background: "black" }}
                      >
                        <p className="service-body-text mb-4 p-2 text-white! text-[clamp(10px,3vw,15px)]!">
                          {reason}
                        </p>
                        <div className="absolute -bottom-3 sm:-bottom-4 lg:-bottom-5 left-1/2 transform -translate-x-1/2 bg-orange-600 rounded-lg px-3 sm:px-5 py-1.5 font-bold text-white"
                          style={{ fontSize: "clamp(14px, 2.5vw, 18px)" }}>
                          {String(idx + 1).padStart(2, "0")}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>


            {/* 3. WHY SECTION (Full Width) */}
            <div className="mt-10 lg:mt-[2px]">
              {service?.whySection && (
                <div className="mt-6 sm:mt-8 lg:mt-15 w-full">
                  <h2 className="service-heading-h2 mb-2 sm:mb-3 lg:mb-6">
                    {service.whySection.title}
                  </h2>
                  {service.whySection.description.split(/\n\s*\n/).map((paragraph, idx) => (
                    <p key={idx} className="service-body-text mb-2 whitespace-pre-line">
                      {paragraph.trim()}
                    </p>
                  ))}
                  {service.whySection.listTitle && (
                    <p className="service-body-text font-semibold mb-2">{service.whySection.listTitle}</p>
                  )}
                  <ul className="list-disc pl-5 space-y-1 mb-4">
                    {service?.whySection?.points?.map((point, idx) => (
                      <li key={idx} className="service-body-text">{point}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* 4. ACCORDION (Full Width) */}
            {service.accordionData && (
              <div className="w-full  mt-10 lg:mt-[2px] xl:max-w-[calc(100%-328px)]">
                <BrandingAccordion accordionData={service.accordionData} />
              </div>
            )}

            {/* 5. AI SECTION (Full Width) */}
            {service.aiSection && (
              <div className="w-full mt-10 lg:mt-[2px]">
                <AISection data={service.aiSection} />
              </div>
            )}

            {/* 6. PROCESS SECTION (Full Width) */}
            {service.processSection && (
              <div className="w-full">
                <ProcessSection data={service.processSection} />
              </div>
            )}

            {/* 7. INDUSTRIES (Full Width) */}
            {service?.industries && service?.industries?.items?.length > 0 && (
              <div className="mt-6 sm:mt-8 lg:mt-15 w-full">
                <h2 className="service-heading-h2 mb-3">{service.industries.heading}</h2>
                <ul className="list-disc list-inside space-y-1">
                  {service.industries.items.map((industry, idx) => (
                    <li key={idx} className="service-body-text">{industry}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* 8. FAQs (Full Width) */}
            <div className="mt-10 lg:mt-[2px]">
              {service?.faqs && service?.faqs?.items?.length > 0 && (
                <div className="mt-6 sm:mt-8 lg:mt-15 w-full">
                  <h2 className="service-heading-h2 mb-3">
                    {service.faqs.heading}
                    <div className="heading-underline-left"></div>
                  </h2>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12">
                    {service.faqs.items.map((faq, idx) => (
                      <div key={idx} className="space-y-1">
                        <h3 className="service-heading-h3 text-sm sm:text-lg">{faq.question}</h3>
                        <p className="service-body-text text-[#B8B8B8]!">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                  {service?.ctaButtons && (
                    <div className="flex flex-col sm:flex-row gap-3 mt-6 lg:mt-15">
                      {service.ctaButtons.map((button, idx) => (
                        <PrimaryButton key={idx} text={button.text} href={button.href} />
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
