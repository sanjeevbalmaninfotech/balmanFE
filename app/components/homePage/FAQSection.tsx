import React from 'react';

export default function FAQSection() {
  const faqs = [
    {
      question: "What services does Balman Infotech offer?",
      answer: "Balman Infotech provides a wide range of IT services including software development, web and mobile app design, cloud solutions, and digital transformation consulting."
    },
    {
      question: "How can I get a quote for my project?",
      answer: "You can contact us through our inquiry form or email us directly. Our team will review your requirements and share a detailed proposal based on your goals and timeline."
    },
    {
      question: "Do you provide post-launch support?",
      answer: "Yes, we offer ongoing maintenance, updates, and technical support to ensure your system continues to perform smoothly after deployment."
    },
    {
      question: "Do you work with startups or only large companies?",
      answer: "We collaborate with businesses of all sizes — from startups looking to build their first product to enterprises seeking complex digital solutions."
    }
  ];

  return (
    <section className="relative w-full bg-black section-padding-y">
      <div className="relative w-full mx-auto section-padding-x">

        <h2
          className="font-['Plus_Jakarta_Sans'] font-bold text-center leading-[110%] tracking-tight"
          style={{
            fontSize: "clamp(24px, 5vw, 36px)",
            backgroundImage:
              "radial-gradient(18.08% 413.84% at 51.02% 51.02%, #FFFFFF 35%, #656565 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Everything You Need To Know Before Starting Your Next Project With Us.
        </h2>


        <div className="w-20 h-1 bg-orange-500 mx-auto mb-12 rounded-full"></div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8 mb-12">
          {faqs.map((faq, index) => (
            <div key={index} className="space-y-3">
              <h3 className="text-white text-lg sm:text-xl font-semibold">
                {faq.question}
              </h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-8">
          <p className="text-white text-base sm:text-lg mb-4">
            Still have questions?
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-8 py-3 rounded-lg transition-colors duration-300">
            Contact us
          </button>
        </div>
      </div>
    </section>
  );
}