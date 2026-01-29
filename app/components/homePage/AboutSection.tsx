export default function AboutSection() {
  return (
    <>
      <section className="relative w-full bg-black section-padding-y">
        <div className="relative w-full mx-auto section-padding-x">
          {/* Two Column Layout */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-0">
            {/* Left Column - Heading */}
            <div className="relative lg:w-[30%] lg:pr-8">
              <div className="lg:absolute lg:top-1/2 lg:-translate-y-1/2 w-full flex flex-col items-start">
                <h2
                  className="font-bold leading-[110%] tracking-tight mb-2"
                  style={{
                    fontSize: "clamp(32px, 6vw, 36px)",
                    backgroundImage:
                      "radial-gradient(18.08% 413.84% at 51.02% 51.02%, #FFFFFF 35%, #656565 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  We&apos;re More Than A <br />

                  Digital Agency
                  <span className="absolute left-0 -bottom-2 heading-underline"></span>

                </h2>
              </div>
            </div>

            {/* Vertical Divider - Hidden on mobile */}
            <div className="hidden lg:block vertical-divider mx-8"></div>

            {/* Right Column - Content */}
            <div className="lg:w-[70%] lg:pl-8">
              {/* Paragraph 1 */}
              <p className="body-text mb-4 sm:mb-5 md:mb-6">
                Every brand begins as a flicker, a quiet, imaginative spark in someone’s mind. But only a few sparks into something powerful enough to illuminate industries, shape customer experiences, and redefine how businesses show up in the world. We exist specifically to nurture that spark!

              </p>

              {/* Paragraph 2 */}
              <p className="body-text mb-4 sm:mb-5 md:mb-6">
                Our vision is to become a global leader in technology services by continuously evolving, innovating, and creating digital ecosystems that drive success for our clients. We are rooted in creativity, guided by strategy, and driven by the belief that every brand and every person carries a story waiting to be told. Balman Infotech stands as a rare blend: a creative-minded agency built on innovation, end to end support and guaranteed results.  We never believe in the one solution fits all strategies, as all the agencies at present do. This is why businesses trust us, not for templates, but for transformation. Our work is not about trends. It is about timelessness, building brands that look relevant today and remain iconic forever!

              </p>

              {/* Paragraph 3 */}
              <p className="body-text mb-4 sm:mb-5 md:mb-6">
                We are not just an agency. We are your Growth Partner!
              </p>

              {/* Paragraph 4 */}


              {/* See More Button */}
              <button className="flex items-center justify-center gap-2 mx-auto">
                <span className="sub-heading">See More</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="animate-bounce"
                >
                  <path
                    d="M8 12L8 4M8 12L4 8M8 12L12 8"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
