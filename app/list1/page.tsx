import { ReactNode } from "react";

export default function TiltedCardsSection() {
  const services = [
    {
      title: "Digital Marketing",
      description:
        "We excel in building scalable, secure, and feature-rich apps that drive business success.",
      icon: "📱",
    },
    {
      title: "Branding Services",
      description:
        "We excel in building scalable, secure, and feature-rich apps that drive business success.",
      icon: "📱",
    },
    {
      title: "Web Designing",
      description:
        "We excel in building scalable, secure, and feature-rich apps that drive business success.",
      icon: "📱",
    },
    {
      title: "App Development",
      description:
        "We excel in building scalable, secure, and feature-rich apps that drive business success.",
      icon: "📱",
    },
    {
      title: "Web Development",
      description:
        "We excel in building scalable, secure, and feature-rich apps that drive business success.",
      icon: "📱",
    },
  ];

  const getCardStyles = (index: number) => {
    const heights = [
      { left: 300, right: 290 }, // 1st
      { left: 290, right: 280 }, // 2nd
      { left: 280, right: 280 }, // 3rd
      { left: 280, right: 290 }, // 4th
      { left: 290, right: 300 }, // 5th
    ];

    const rotations = [-40, -2, 0, 2, 4];

    return {
      rotation: rotations[index],
      ...heights[index],
    };
  };
  interface ServiceCard {
    title: string;
    description: string;
    icon?: ReactNode;
  }

  interface SlantedCardsProps {
    services: ServiceCard[];
  }

  const getnewCardStyles = (index: number) => {
    // Slant angles for each card (degrees)
    const slants = [20, 10, 0, -10, -20];
    // Heights adjustment for perspective
    const heights = [320, 310, 300, 310, 320];
    // Rotations for 3D effect
    const rotations = [-8, -4, 0, 4, 8];
    // Vertical offsets for base alignment
    const verticalOffsets = [10, 5, 0, 5, 10];

    return {
      slant: slants[index],
      height: heights[index],
      rotation: rotations[index],
      verticalOffset: verticalOffsets[index],
    };
  };

  return (
    <>
      <section className="relative w-full bg-green-200 py-20 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Cards Container */}
          <div className="flex items-center justify-center gap-6 flex-wrap lg:flex-nowrap">
            {services.map((service, index) => {
              // Calculate rotation and height based on position
              let rotation = 0;
              let height = "h-[280px]";
              let zIndex = "z-10";

              if (index === 0) {
                rotation = -8; // Left tilt
                height = "h-[260px]";
                zIndex = "z-20";
              } else if (index === 1) {
                rotation = -4;
                height = "h-[270px]";
                zIndex = "z-30";
              } else if (index === 2) {
                rotation = 0; // Center - no tilt
                height = "h-[300px]";
                zIndex = "z-40";
              } else if (index === 3) {
                rotation = 4;
                height = "h-[270px]";
                zIndex = "z-30";
              } else if (index === 4) {
                rotation = 8; // Right tilt
                height = "h-[260px]";
                zIndex = "z-20";
              }

              return (
                <>
                  <div
                    key={index}
                    className={`relative w-full lg:w-[220px] ${height} ${zIndex} transition-all duration-500 hover:scale-105 hover:z-50`}
                    style={{
                      transform: `rotate(${rotation}deg)`,
                    }}
                  >
                    {/* Card */}
                    <div className="w-full h-full bg-black border border-white/20 rounded-3xl p-6 flex flex-col items-start justify-between hover:border-orange-500/50 transition-all duration-300">
                      {/* Icon */}
                      <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4">
                        <div className="grid grid-cols-2 gap-1">
                          <div className="w-2 h-2 bg-orange-500 rounded-sm"></div>
                          <div className="w-2 h-2 bg-orange-500 rounded-sm"></div>
                          <div className="w-2 h-2 bg-orange-500 rounded-sm"></div>
                          <div className="w-2 h-2 bg-orange-500 rounded-sm"></div>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-white text-xl font-bold mb-3 font-['Plus_Jakarta_Sans']">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-400 text-sm leading-relaxed font-['Plus_Jakarta_Sans']">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
      <>
        <section className="relative w-full bg-black py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-end justify-center gap-6 flex-wrap lg:flex-nowrap overflow-visible">
              {services.map((service, index) => {
                const cardStyles = getCardStyles(index);

                return (
                  <div
                    key={index}
                    className={`relative w-full lg:w-[220px] transition-all duration-500 group`}
                    style={{
                      transform: `rotate(${cardStyles.rotation}deg)`,
                      clipPath: `
                polygon(
                  0 0,
                  100% ${
                    ((cardStyles.right - cardStyles.left) / cardStyles.left) *
                    100
                  }%,
                  100% 100%,
                  0 100%
                )
              `,
                    }}
                  >
                    {/* CARD INSIDE */}
                    <div
                      className="w-full bg-black border border-white/20 rounded-3xl p-6 flex flex-col justify-between
              transition-all duration-300 overflow-visible
              group-hover:border-orange-500
              group-hover:shadow-[0_0_35px_rgba(255,89,0,0.55)]"
                      style={{
                        height: `${cardStyles.left}px`,
                      }}
                    >
                      {/* ICON */}
                      <div
                        className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4 
                group-hover:bg-orange-500/20 transition-all duration-300"
                      >
                        <div className="grid grid-cols-2 gap-1">
                          <div className="w-2 h-2 bg-orange-500 group-hover:bg-orange-400 rounded-sm"></div>
                          <div className="w-2 h-2 bg-orange-500 group-hover:bg-orange-400 rounded-sm"></div>
                          <div className="w-2 h-2 bg-orange-500 group-hover:bg-orange-400 rounded-sm"></div>
                          <div className="w-2 h-2 bg-orange-500 group-hover:bg-orange-400 rounded-sm"></div>
                        </div>
                      </div>

                      <h3 className="text-white text-xl font-bold mb-3 group-hover:text-orange-500 transition-colors">
                        {service.title}
                      </h3>

                      <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                        {service.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="relative w-full bg-black py-20 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Section Title */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Experience in Different{" "}
                <span className="text-orange-500">Industries</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                We provide comprehensive solutions across various domains to
                help your business grow
              </p>
            </div>

            {/* Cards Container with Base Line */}
            <div className="relative">
              {/* Base Line */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gray-600 to-transparent z-0"></div>

              {/* Cards */}
              <div className="flex items-end justify-center gap-4 md:gap-6 lg:gap-8 flex-wrap lg:flex-nowrap relative z-10">
                {services.map((service, index) => {
                  const cardStyles = getnewCardStyles(index);

                  return (
                    <div
                      key={index}
                      className="relative w-full lg:w-[200px] xl:w-[220px] transition-all duration-500 group"
                      style={{
                        marginBottom: `${cardStyles.verticalOffset}px`,
                      }}
                    >
                      {/* Card Container with Rotation */}
                      <div
                        className="relative overflow-hidden rounded-2xl border border-gray-800 transition-all duration-500
                    group-hover:border-orange-500 group-hover:shadow-[0_10px_30px_rgba(255,89,0,0.25)]
                    group-hover:scale-[1.02] group-hover:-translate-y-2"
                        style={{
                          height: `${cardStyles.height}px`,
                          transform: `rotate(${cardStyles.rotation}deg)`,
                          transformOrigin: "bottom center",
                          clipPath: `
                        polygon(
                          0 0,
                          100% 0,
                          100% 100%,
                          0 calc(100% - ${cardStyles.slant * 3}px)
                        )
                      `,
                        }}
                      >
                        {/* Card Background with Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>

                        {/* Hover Overlay */}
                        <div
                          className="absolute inset-0 bg-gradient-to-b from-orange-500/0 via-orange-500/0 to-orange-500/0 
                    group-hover:from-orange-500/10 group-hover:via-orange-500/5 group-hover:to-orange-500/20 
                    transition-all duration-500"
                        ></div>

                        {/* Card Content */}
                        <div className="relative p-6 h-full flex flex-col">
                          {/* Icon/Number */}
                          <div className="mb-6">
                            <div
                              className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-500/10 
                        flex items-center justify-center border border-orange-500/30 group-hover:border-orange-500/50 
                        transition-all duration-300"
                            >
                              <span className="text-2xl font-bold text-orange-500">
                                {index + 1}
                              </span>
                            </div>
                          </div>

                          {/* Title */}
                          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors">
                            {service.title}
                          </h3>

                          {/* Description */}
                          <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                            {service.description}
                          </p>

                          {/* Learn More Link */}
                          <div className="mt-6 pt-4 border-t border-gray-800 group-hover:border-orange-500/30 transition-colors">
                            <span
                              className="text-orange-500 text-sm font-medium inline-flex items-center gap-2
                        group-hover:gap-3 transition-all duration-300"
                            >
                              Learn more
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </>
    </>
  );
}
