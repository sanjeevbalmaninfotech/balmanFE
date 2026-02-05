import Image from "next/image";
import SectionHeading from "../Common/SectionHeading";

const FounderSection = () => {
  return (

    <section className="w-full bg-[#010101] text-white lg:py-10 py-5">
      <div className="w-full mx-auto section-padding-x">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-20">
          {/* Image Section - Left Side */}
          <div className="w-full lg:w-[30%] relative flex-shrink-0 rounded-lg">
            {/* Container with proper aspect ratio for 500x900 image */}
            <div
              className="relative w-full rounded-lg overflow-hidden max-h-[500px] lg:max-h-[600px]"
              style={{
                aspectRatio: '5/9',
                boxShadow: "0 0 0 0 rgba(0, 0, 0, 0)",
              }}
            >
              <Image
                src="/staff/nav.png"
                alt="Founder Portrait"
                fill
                className="object-cover object-top rounded-lg"
                priority
                unoptimized
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 40vw, 30vw"
              />
            </div>
          </div>

          {/* Content Section - Right Side */}
          <div className="w-full lg:w-[65%] flex flex-col gap-8 lg:gap-10">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-left justify-left">
                <SectionHeading align="left">
                  Meet The Mind That Turned A Vision Into Reality
                  <div className="heading-underline-left"></div>
                </SectionHeading>
              </div>

              <div className="w-full">
                <div className="font-['Plus_Jakarta_Sans'] font-normal text-base lg:text-lg leading-[160%] tracking-[0%]">
                  <p className="mb-4 lg:mb-5">
                    <strong className="font-semibold text-lg lg:text-xl">
                      Many companies are built on business plans. Balman
                      Infotech was built on determination.
                    </strong>
                  </p>

                  <p className="mb-5 lg:mb-6">
                    As a young woman who moved to the UK, Navdeep Bains learned
                    early on that creativity is a tool for transformation.
                    Surrounded by diverse cultures, fast-moving industries, and
                    the global digital shift, she saw how brands that think
                    differently survive, and those who fail to evolve disappear.
                    This understanding planted the seed for Balman Infotech.
                  </p>

                  <p className="mb-4 lg:mb-5 font-medium text-lg">Her vision was clear:</p>

                  <ul className="mb-5 lg:mb-6 space-y-2 list-disc list-inside ml-5">
                    <li className="leading-relaxed">
                      Build an agency that treats branding as an art form.
                    </li>
                    <li className="leading-relaxed">
                      Craft digital experiences that feel human, intuitive,
                      and memorable.
                    </li>
                    <li className="leading-relaxed">
                      Help businesses in Mohali compete with brands anywhere
                      in the world.
                    </li>
                    <li className="leading-relaxed">
                      And lead with originality, not imitation.
                    </li>
                  </ul>

                  <p className="mb-5 lg:mb-6">
                    What began as inspiration grew into an end-to-end Digital
                    Transformation Partner agency, committed to building,
                    innovating, and shaping brands with intention.
                  </p>

                  <p className="text-base lg:text-lg leading-relaxed">
                    Today, Balman Infotech stands as a trusted partner for businesses
                    seeking to elevate their digital presence. Under Navdeep's leadership,
                    the agency has helped countless brands discover their unique voice and
                    connect meaningfully with their audiences.
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
