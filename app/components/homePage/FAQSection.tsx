import React from "react";
import SectionHeading from "../Common/SectionHeading";
import Link from "next/link";

// 1. Interface define karein taaki TS ko pata chale object mein kya hai
interface FAQItem {
  question: string;
  answer: string;
  linkKeyword?: string; // '?' matlab ye optional hai
  linkUrl?: string;
}

export default function FAQSection() {
  // 2. faqs array ko type dein
  const faqs: FAQItem[] = [
    {
      question: "Do you work with startups or only large companies?",
      answer: "We work with businesses of all industries and sizes.",
    },
    {
      question: "Do you provide post-launch support?",
      answer: "Yes, we offer ongoing maintenance, updates, and technical support to ensure your system continues to perform smoothly after deployment.",
    },
    {
      question: "Is there a package or I can avail the services independently also?",
      answer: "If you prefer flexibility, you’re welcome to pick and choose individual services. We also offer curated packages designed to give you maximum value and consistent growth.",
    },
    {
      question: "How can I get a quote for my project?",
      answer: "If you need a quote, you can either fill out our form or email us, and we’ll make sure a team member reaches out to you within 24 hours.",
      linkKeyword: "form",
      linkUrl: "/ContactUs#contactForm",
    },
  ];


  const renderAnswer = (faq: FAQItem) => {
    if (faq.linkKeyword && faq.linkUrl) {
      const parts = faq.answer.split(faq.linkKeyword);
      return (
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
          {`${parts[0]} `}
          <Link href={faq.linkUrl} className="text-white underline hover:text-gray-200 transition-colors">
            {`${' ' + faq.linkKeyword}`}
          </Link>
          {parts[1]}
        </p>
      );
    }

    return (
      <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
        {faq.answer}
      </p>
    );
  };

  return (
    <section className="relative w-full bg-[#010101] section-padding-y">
      <div className="relative w-full mx-auto section-padding-x">
        <div className="flex flex-col items-center justify-center mb-12 ">
          <SectionHeading>
            Frequently Asked Questions
          </SectionHeading>
          <div className="heading-underline "></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8 mt-4 mb-4 lg:mt-12 mb-12">
          {faqs.map((faq, index) => (
            <div key={index} className="space-y-3">
              <h3 className="text-white text-lg sm:text-xl font-semibold">
                {faq.question}
              </h3>
              {renderAnswer(faq)}
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-white text-base sm:text-lg mb-4">
            Still have questions?
          </p>
          <Link href="/ContactUs">
            <button className="btn-primary touch-manipulation inline-block text-center">
              Contact us
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}