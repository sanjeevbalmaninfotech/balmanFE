"use client"; // Agar aap Next.js App Router use kar rahe hain toh

import React from "react";
import SectionHeading from "../Common/SectionHeading";
import Link from "next/link";

// 1. Types define karein
interface LinkConfig {
  keyword: string;
  url: string;
}

interface FAQItem {
  question: string;
  answer: string;
  links?: LinkConfig[];
}

export default function FAQSection() {
  // 2. FAQ Data with Multiple Links
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
      answer: "If you need a quote, you can either fill out our form or mail us, and we’ll make sure a team member reaches out to you within 24 hours.",
      links: [
        { keyword: "form", url: "/ContactUs#contactForm" },
        { keyword: "mail us", url: "mailto:contact@balmaninfotech.net" }
      ],
    },
  ];

  // 3. Render logic jo string ko split karke links insert karega
  const renderAnswer = (faq: FAQItem) => {
    if (!faq.links || faq.links.length === 0) {
      return (
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
          {faq.answer}
        </p>
      );
    }

    // Parts array mein initially pura answer hoga
    let parts: (string | React.ReactNode)[] = [faq.answer];

    faq.links.forEach((linkObj, linkIndex) => {
      let newParts: (string | React.ReactNode)[] = [];

      parts.forEach((part) => {
        if (typeof part === "string") {
          // Keyword ke basis par split karein
          const splitParts = part.split(linkObj.keyword);

          splitParts.forEach((sp, index) => {
            newParts.push(sp);
            // Agar ye last part nahi hai, toh beech mein link insert karein
            if (index < splitParts.length - 1) {
              const isMail = linkObj.url.startsWith("mailto:");
              const linkClass = "text-white underline hover:text-gray-200 transition-colors cursor-pointer";

              if (isMail) {
                newParts.push(
                  <a key={`${linkIndex}-${index}`} href={linkObj.url} className={linkClass}>
                    {linkObj.keyword}
                  </a>
                );
              } else {
                newParts.push(
                  <Link key={`${linkIndex}-${index}`} href={linkObj.url} className={linkClass}>
                    {linkObj.keyword}
                  </Link>
                );
              }
            }
          });
        } else {
          // Agar part pehle se hi ek React component (Link) hai, toh as-is rakhein
          newParts.push(part);
        }
      });
      parts = newParts;
    });

    return (
      <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
        {parts.map((p, i) => (
          <React.Fragment key={i}>{p}</React.Fragment>
        ))}
      </p>
    );
  };

  return (
    <section className="relative w-full bg-[#010101] section-padding-y">
      <div className="relative w-full mx-auto section-padding-x">
        {/* Heading Section */}
        <div className="flex flex-col items-center justify-center mb-12">
          <SectionHeading>Frequently Asked Questions</SectionHeading>
          <div className="heading-underline"></div>
        </div>

        {/* FAQ Grid */}
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

        {/* CTA Section */}
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