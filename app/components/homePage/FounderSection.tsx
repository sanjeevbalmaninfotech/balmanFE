import Image from "next/image";
import SectionHeading from "../Common/SectionHeading";

const FounderSection = () => {
  return (
    <section className="w-full bg-black text-white section-padding-y">
      <div className="w-full mx-auto section-padding-x">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-20">
          {/* Image Section - Left Side */}
          <div
            className="w-full lg:w-[45%] aspect-[760/852] relative flex-shrink-0 rounded-lg transition-all duration-300"
            style={{
              boxShadow: "0 0 0 0 rgba(0, 0, 0, 0)",
            }}
            // onMouseEnter={(e) => {
            //   e.currentTarget.style.boxShadow =
            //     "0 0 50px 15px rgba(255, 89, 0, 0.6)";
            // }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 0 0 0 rgba(0, 0, 0, 0)";
            }}
          >
            <Image
              src="/staff/nav.png"
              alt="Founder Portrait"
              fill
              className="object-top rounded-lg"
              priority
              unoptimized
            />
          </div>

          {/* Content Section - Right Side */}
          <div className="w-full lg:w-[50%] flex flex-col gap-[60px]">
            <div className="flex flex-col gap-6">
              <div>
                <SectionHeading align="left">
                  Meet The Mind That Turned A
                  <br className="hidden md:block" />
                  Vision Into Reality
                </SectionHeading>
                <div className="heading-underline-left"></div>
              </div>

              <div className="max-w-4xl mx-auto">
                <div className="font-['Plus_Jakarta_Sans'] font-normal text-lg leading-[145%] tracking-[0%]">
                  <p className="mb-2 lg:4">
                    <strong className="font-medium">
                      Many companies are built on business plans. Balman
                      Infotech was built on determination.
                    </strong>
                  </p>

                  <p className="mb-6">
                    As a young woman who moved to the UK, Navdeep Bains learned
                    early on that creativity is a tool for transformation.
                    Surrounded by diverse cultures, fast-moving industries, and
                    the global digital shift, she saw how brands that think
                    differently survive, and those who fail to evolve disappear.
                    This understanding planted the seed for Balman Infotech.
                  </p>

                  <p className="mb-4">Her vision was clear:</p>

                  <ul className="mb-3 space-y-3">
                    <li className="flex items-start">
                      <span className="mr-3 mt-1">•</span>
                      <span>
                        Build an agency that treats branding as an art form.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 mt-1">•</span>
                      <span>
                        Craft digital experiences that feel human, intuitive,
                        and memorable.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 mt-1">•</span>
                      <span>
                        Help businesses in Mohali compete with brands anywhere
                        in the world.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 mt-1">•</span>
                      <span>And lead with originality, not imitation.</span>
                    </li>
                  </ul>

                  <p className="mb-6">
                    What began as inspiration grew into an end-to-end Digital
                    Transformation Partner agency, committed to building,
                    innovating, and shaping brands with intention.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
