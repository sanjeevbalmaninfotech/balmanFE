import React from "react";

const WhoWeAreBuiltFor: React.FC = () => {
  return (
    <section className="mx-auto bg-[#010101]">
      {/* Who We're Built For Section */}
      <div className="lg:py-15 py-5 px-0 ml-5 mr-5 lg:ml-[100px] lg:mr-[100px]">
        {/* Main Title */}
        <div className="text-center mb-4 lg:mb-6">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium text-white">
            {`Who We're Built For`}
          </h3>
          <div className="heading-underline"></div>
        </div>

        {/* Description */}
        <div className="max-w-5xl mx-auto">
          <p className="section-description-text">
            We help anyone who is trying to create a personal brand or startups,
            finding it difficult to build ecosystems to grow. We also deal with
            businesses that have outgrown their original frameworks and need to
            start operating at a larger scale.
          </p>
        </div>
      </div>

      {/* WE DON'T Section */}
      <div className="lg:py-15 py-5  px-0 ml-5 mr-5 lg:ml-[100px] lg:mr-[100px]">
        {/* First Heading */}
        <div className="text-center mb-4">
          <p
            className="text-white text-xl md:text-2xl leading-[100%] capitalize"
            style={{
              fontFamily: "Plus Jakarta Sans, sans-serif",
              fontWeight: 600,
            }}
          >
            We design the front(& the back)! Most agencies choose one.
          </p>
        </div>

        {/* Main Title */}
        <div className="text-center mb-4 lg:mb-6">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium text-white">
            {`WE DON'T`}
          </h3>
          <div className="heading-underline"></div>
        </div>

        {/* Description */}
        <div className="max-w-5xl mx-auto">
          <p className="section-description-text">
            We don`t just believe in a pretty outside but also believe in a
            seamless and robust inside! We design how your brand feels on the
            outside, and we build how it functions seamlessly behind the scenes,
            too! From identity and messaging to websites, applications, and
            internal software, We generate whole ecosystems for your brand, not
            just deliverables.
          </p>
        </div>
      </div>

      <div className="lg:py-15 py-5  px-0 ml-5 mr-5 lg:ml-[100px] lg:mr-[100px]">
        {/* First Heading with Gradient */}
        <div className="text-center mb-4">
          <h2
            className="text-xl md:text-2xl leading-[120%] capitalize
    font-semibold
    bg-[radial-gradient(69.15%_305.03%_at_28.18%_51.11%,_#FFFFFF_12.92%,_#656565_100%)]
    bg-clip-text text-transparent
  "
            style={{
              fontFamily: "Plus Jakarta Sans, sans-serif",
            }}
          >
          {`Wondering Whether We\'re Right for You?`}
          </h2>
        </div>

        {/* Main Title */}
        <div className="text-center mb-4 lg:mb-6">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium text-white">
            Ask Yourself This!
          </h3>
          <div className="heading-underline"></div>
        </div>

        {/* Do You Want Text */}
        <div className="text-center mb-4">
          <p className="section-description-text font-semibold lg:text-lg">
            Do You Want:
          </p>
        </div>

        {/* Buttons Container */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 lg:gap-6 max-w-4xl mx-auto">
          {/* Left Button - Filled */}
         <span
            className="w-full md:w-auto px-6 py-3 bg-[#FF5900] border-1 border-[#FF5900]
    text-white text-sm md:text-base rounded-lg ">
           Just an another agency
          </span>

          {/* OR Text */}
          <span className="text-white text-xl font-medium">or</span>

          {/* Right Button - Outlined */}
          <span
            className="w-full md:w-auto px-6 py-3 bg-transparent border-1 border-[#FF5900]
    text-white text-sm md:text-base rounded-lg ">
            A team that thinks like builders?
          </span>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreBuiltFor;
