import SectionHeading from "../Common/SectionHeading";

export default function whyBalmanSection() {
  return (
    <>
      <section className="relative w-full bg-[#010101] section-padding-y">
        <div className="relative w-full mx-auto section-padding-x">
          {/* Two Column Layout */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-0">
            {/* Left Column - Heading */}
            <div className="relative lg:w-[30%] lg:pr-8">
              <div className="lg:absolute lg:top-1/2 lg:-translate-y-1/2 w-full flex flex-col items-start">
                <SectionHeading align="left">
                 Why Balman Infotech?
                </SectionHeading>
                <div className="heading-underline-left"></div>
              </div>
            </div>

            {/* Vertical Divider - Hidden on mobile */}
            <div className="hidden lg:block vertical-divider mx-8"></div>

            {/* Right Column - Content */}
            <div className="lg:w-[70%] lg:pl-8">
              {/* Paragraph 1 */}
              <p className="body-text mb-4 sm:mb-5 md:mb-6">
               Businesses usually come to us with pieces: a logo that feels off, a website that is simply existing but isn’t converting, marketing spend that isn’t yielding returns, or systems that work separately but cannot come together to grow the brand.
              </p>

              {/* Paragraph 2 */}
              <p className="body-text mb-4 sm:mb-5 md:mb-6">
              We exist to connect those pieces.
              </p>

              {/* Paragraph 3 */}
              <p className="body-text mb-4 sm:mb-5 md:mb-6">
                Balman Infotech has expertise in building brands and systems that work together, so you and your company can reach their full potential.
              </p>

           
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
