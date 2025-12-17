import React from "react";
import Image from "next/image";

const FounderSection = () => {
  return (
    <section className="w-full bg-black text-white section-padding-y">
      <div className="w-full mx-auto section-padding-x">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-20">
          {/* Image Section - Left Side */}
          <div
            className="w-full lg:w-[45%] aspect-[760/852] relative flex-shrink-0 rounded-lg transition-all duration-300"
            style={{
              boxShadow: '0 0 0 0 rgba(0, 0, 0, 0)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 0 50px 15px rgba(255, 89, 0, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 0 0 0 rgba(0, 0, 0, 0)';
            }}
          >
            <Image
              src="/oner.png"
              alt="Founder Portrait"
              fill
              className="object-cover rounded-lg"
              priority
              unoptimized
            />
          </div>

          {/* Content Section - Right Side */}
          <div className="w-full lg:w-[50%] flex flex-col gap-[60px]">
            <div className="flex flex-col gap-6">
              <div>
                <h2
                  className="font-['Plus_Jakarta_Sans'] font-bold leading-[110%] tracking-tight mb-2 text-left"
                  style={{
                    fontSize: "clamp(32px, 6vw, 56px)",
                    backgroundImage:
                      "radial-gradient(18.08% 413.84% at 51.02% 51.02%, #FFFFFF 35%, #656565 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Meet The Mind That Turned A<br />
                  Vision Into Reality
                </h2>

                {/* Orange underline - positioned under second line */}
                <div className="w-20 h-1 bg-primary -mt-2 rounded-full"></div>
              </div>
            </div>

            {/* Body Text */}
            <p className="body-text">
              Balman Infotech was built on a simple vision - to empower
              businesses through smart, scalable, and future-ready technology.
              Under the leadership of our founder, the company has grown from a
              small idea into a trusted digital partner for clients across
              industries. With a passion for innovation and a deep understanding
              of emerging technologies, our founder believes in combining
              creativity with strategy to deliver meaningful results. His
              approach focuses on building long-term relationships, maintaining
              transparency, and ensuring every solution adds real value to the
              client&apos;s business. Driven by integrity, dedication, and
              continuous learning, he inspires the Balman Infotech team to push
              boundaries, explore new possibilities, and set higher standards in
              every project. His vision continues to guide the company toward
              excellence, shaping Balman Infotech into a brand known for trust,
              innovation, and technological expertise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
