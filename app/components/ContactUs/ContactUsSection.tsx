import React from "react";
import SectionHeading from "../Common/SectionHeading";

const ContactUsSection: React.FC = () => {
  const ContactUsSection = [
    {
      title: "Branding Services",
      description:
        "We help your brand develop a unique identity and enhance its recall value through visual storytelling.",
      isHighlighted: false,
    },
    {
      title: "Performance Marketing",
      description:
        "We run data-driven campaigns tailored to your brand, designed to generate leads, sales, and a strong return on investment.",
      isHighlighted: false,
    },
    {
      title: "Organic Growth",
      description:
        "We utilise SEO, high-quality content, and social media strategies to help your brand grow in a sustainable manner.",
      isHighlighted: false,
    },
    {
      title: "Web Development",
      description:
        "We create digital solutions that boost your visibility and help you convert leads through a smooth and engaging user experience.",
      isHighlighted: false,
    },
    {
      title: "Customer Support",
      description:
        "We provide customer support that makes a positive impression and helps improve your customer retention.",
      isHighlighted: false,
    },
    {
      title: "Finance Management",
      description:
        "We offer professional accounting, financial planning, compliance, and reporting to keep your business on track.",
      isHighlighted: false,
    },
  ];

  return (
    <section className="bg-[#010101] px-4">
      <div className="mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left Side - Info Section (30% width, aligned to top) */}
          <div className="w-full lg:w-[30%] flex flex-col">
            {/* Sort Heading */}
            <div className="flex items-center gap-3 mb-4">
              <div className="heading-underline-left"></div>
              <span className="sort-main-heading">Contact Us</span>
            </div>

            {/* Main Heading */}
            <div className="mb-8">
              <SectionHeading align="left">
                Let`s Build, Grow & Scale Your Brand
              </SectionHeading>
            </div>
            {/* Description */}
            <p
              style={{
                color: "#8E8E8E",
                fontFamily: "Plus Jakarta Sans, sans-serif",
                fontWeight: 500,
                fontSize: "16px",
                lineHeight: "150%",
                letterSpacing: "0",
              }}
            >
              Whether you`re a startup, a growing business, or an established
              enterprise, we`d love to be your Growth Partners!
            </p>
          </div>

          {/* Right Side - Service Cards Grid (70% width) */}
          <div className="w-full lg:w-[70%] grid grid-cols-1 sm:grid-cols-3 gap-8">
            {ContactUsSection.map((service, index) => (
              <div
                key={index}
                className={`rounded-2xl p-4 lg:p-12 border ${service.isHighlighted
                  ? "bg-[#FF5900] border-[#FF5900]"
                  : "bg-transparent border-[#FF5900]"
                  }`}
              >
                {/* Service Title */}
                <h3
                  className="capitalize mb-3 mb-8"
                  style={{
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                    fontWeight: 600,
                    fontSize: "20px",
                    lineHeight: "120%",
                    color: "#E8E8EA",
                  }}
                >
                  {service.title}
                </h3>

                {/* Service Description */}
                <p
                  style={{
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                    fontWeight: 500,
                    fontSize: "16.27px",
                    lineHeight: "120%",
                    color: "#E8E8EA",
                  }}
                >
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
