import { TrendingUp } from "lucide-react";
import Image from "next/image";
import SectionHeading from "../Common/SectionHeading";

export default function WhoAreWe() {
  return (
    <section className="relative mt-14 bg-[#010101] overflow-hidden">
      {/* Orange gradient glow - bottom left */}
      <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-primary rounded-full blur-[150px] opacity-40"></div>

      <div className="relative w-full section-padding-x section-padding-y">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Single Image */}
          <div className="relative w-full flex items-center justify-center">
            <div className="relative w-full max-w-[543px] aspect-[543/458] overflow-hidden rounded-[20px]">
              <div className="relative w-full max-w-[543px] aspect-[543/458] overflow-hidden rounded-[20px]">
                <Image
                  src="/staff/groupimage.jpeg"
                  alt="Team group photo"
                  fill // Layout fill use karna yahan behtar ho sakta hai
                  className="object-cover w-full h-full translate-x-[1px] scale-100.5"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="heading-underline-left"></div>
              <span className="sort-main-heading">About Us</span>
            </div>

            <div className="flex flex-col items-start justify-start">
              <SectionHeading align="left">Who Are We?</SectionHeading>
            </div>

            <p className="text-gray-400 leading-relaxed text-base mt-2 lg:mt-4">
              Balman Infotech is an end-to-end agency that covers your branding,
              marketing, and technology needs. We combine strategy, creativity,
              and technology to deliver results to elevate your brand, focusing
              on long-term success rather than short-term execution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
