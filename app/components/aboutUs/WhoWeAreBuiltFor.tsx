import React from "react";
import SectionHeading from "../Common/SectionHeading";
import Link from "next/link";

const WhoWeAreBuiltFor: React.FC = () => {
  return (
    <section className="mx-auto bg-[#010101]">
      {/* Who We're Built For Section */}
      <div className="lg:py-15 py-5 px-0 ml-5 mr-5 lg:ml-[100px] lg:mr-[100px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 lg:divide-x lg:divide-[#FF5900]">

          {/* WE DON'T Section - LEFT */}
          <div className="lg:pr-8 xl:pr-12">
            {/* First Heading */}


            {/* Main Title */}
            <div className="flex flex-col items-start justify-center mb-4 lg:mb-6">
              <SectionHeading align="left">
                {`We design the front (& the back)!`}
              </SectionHeading>
              <div className="heading-underline-left"></div>
            </div>

            {/* Description */}
            <div>
              <p className="section-description-text">
                We don't just believe in a pretty outside but also believe in a
                seamless and robust inside! We design how your brand feels on the
                outside, and we build how it functions seamlessly behind the scenes,
                too! From identity and messaging to websites, applications, and
                internal software, We generate whole ecosystems for your brand, not
                just deliverables.
              </p>
            </div>
          </div>

          {/* Who We're Built For Section - RIGHT */}
          <div className="lg:pl-8 xl:pl-12">
            {/* Main Title */}
            <div className="flex flex-col items-start justify-center mb-4 lg:mb-6">
              <SectionHeading>
                Who We're Built For
              </SectionHeading>
              <div className="heading-underline-left"></div>
            </div>

            {/* Description */}
            <div>
              <p className="section-description-text">
                We help anyone who is trying to create a personal brand or startups,
                finding it difficult to build ecosystems to grow. We also deal with
                businesses that have outgrown their original frameworks and need to
                start operating at a larger scale.
              </p>
            </div>
          </div>

        </div>
      </div>

      <div className="lg:py-15 py-5  px-0 ml-5 mr-5 lg:ml-[100px] lg:mr-[100px]">
        {/* First Heading with Gradient */}
        <div className="text-center mb-4">
          <h2
            className="text-gradient text-xl md:text-2xl leading-[120%] capitalize font-semibold"
            style={{
              fontFamily: "Plus Jakarta Sans, sans-serif",
            }}
          >
            {`Wondering Whether We\'re Right for You?`}
          </h2>
        </div>

        {/* Main Title */}


        <div className="flex flex-col items-center justify-center mb-4 lg:mb-6">
          <SectionHeading>
            Ask Yourself This!
          </SectionHeading>
          <div className="heading-underline"></div>
        </div>

        {/* Do You Want Text */}
        <div className="text-center mb-4">
          <p className="text-center font-['Plus_Jakarta_Sans'] text-[16px] font-normal leading-[120%] bg-gradient-to-r from-[#656565] via-[#FFFFFF] to-[#656565] bg-[length:200%_100%] bg-clip-text
    text-transparent"         >
            Do you want: Just an another agency or a team that thinks like builders?
          </p>

        </div>



        <div className="flex flex-row gap-16 justify-center items-center mt-10">
          <SectionHeading>
            If you choose builders
          </SectionHeading>

          <Link href="/ContactUs">
            <button className="btn-primary touch-manipulation inline-block text-center">
              Let's Connect
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default WhoWeAreBuiltFor;
