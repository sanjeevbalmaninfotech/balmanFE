import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import ourServices from '@/app/constants/ourServices';

// Sample service data


export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(2);

  return (
    <section className="relative w-full bg-black section-padding-y">
      <div className="relative w-full mx-auto section-padding-x">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">



          <h2
            className="font-['Plus_Jakarta_Sans'] font-bold text-center leading-[110%] tracking-tight"
            style={{
              fontSize: "clamp(32px, 6vw, 36px)",
              backgroundImage:
                "radial-gradient(18.08% 413.84% at 51.02% 51.02%, #FFFFFF 35%, #656565 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Experience In Different Industries
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-12 rounded-full"></div>

        </div>

        {/* Swiper Section */}
        <div className="flex items-center justify-center py-6 md:py-10">
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            initialSlide={2}
            coverflowEffect={{
              rotate: 10,
              stretch: 0,
              depth: 50,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="services-swiper"
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            onInit={(swiper) => setActiveIndex(swiper.activeIndex)}
            breakpoints={{
              320: {
                coverflowEffect: {
                  rotate: 10,
                  stretch: 0,
                  depth: 50,
                  modifier: 1,
                },
              },
              768: {
                coverflowEffect: {
                  rotate: 30,
                  stretch: 0,
                  depth: 80,
                  modifier: 1,
                },
              },
              1024: {
                coverflowEffect: {
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                },
              },
            }}
          >
            {ourServices.map((service, index) => (
              <SwiperSlide key={index}>
                <div
                  className={`
                    w-full h-full bg-black border border-primary rounded-2xl 
                    p-6 md:p-8 flex flex-col justify-start items-start text-left 
                    transition-all duration-300 cursor-pointer relative
                    ${index === activeIndex ? 'active-slide' : ''}
                  `}
                  style={{
                    boxShadow: '0 0 20px rgba(255, 102, 0, 0.3)',
                  }}
                >
                  {/* Icon Container */}
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-[#1a1a1a] border border-primary rounded-xl flex items-center justify-center mb-5 md:mb-6">
                    <span className="text-2xl md:text-3xl">{service.icon}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-white font-['Plus_Jakarta_Sans'] text-lg md:text-xl font-semibold mb-3 tracking-wide">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#b0b0b0] font-['Plus_Jakarta_Sans'] text-xs md:text-sm leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        .services-swiper {
          width: 100%;
          max-width: 1400px;
          padding-top: 30px;
          padding-bottom: 30px;
        }

        .services-swiper .swiper-wrapper {
          padding-inline: 20px;
        }

        .services-swiper .swiper-slide {
          background-position: center;
          background-size: cover;
          width: 280px;
          height: 380px;
          border-radius: 1rem;
          pointer-events: auto;
        }

        /* Hover effect only for active slide */
        .services-swiper .swiper-slide.swiper-slide-active .active-slide:hover {
          box-shadow: 0 0 40px 15px rgba(255, 102, 0, 0.8) !important;
          transform: translateY(0px);
        }

        .services-swiper .swiper-slide.swiper-slide-active {
          z-index: 10 !important;
        }

        /* Non-active slides hover effect */
        .services-swiper .swiper-slide:not(.swiper-slide-active) > div:hover {
          box-shadow: 0 0 20px rgba(255, 102, 0, 0.3) !important;
          transform: none;
        }

        /* Pagination styling */
        .services-swiper .swiper-pagination-bullet-active {
          background: #ff6600 !important;
        }

        .services-swiper .swiper-pagination-bullet {
          background: #666 !important;
        }

        /* Remove default shadows */
        .services-swiper .swiper-slide-shadow-left,
        .services-swiper .swiper-slide-shadow-right,
        .services-swiper .swiper-slide-shadow-top,
        .services-swiper .swiper-slide-shadow-bottom {
          display: none !important;
        }

        .services-swiper .swiper-slide.swiper-slide-active {
          transform: scale(1) !important;
        }

        /* Mobile styles */
        @media (max-width: 640px) {
          .services-swiper {
            padding-top: 20px;
            padding-bottom: 40px;
          }

          .services-swiper .swiper-wrapper {
            padding-inline: 10px;
          }

          .services-swiper .swiper-slide {
            width: 250px !important;
            height: 350px !important;
          }

          .services-swiper .swiper-pagination {
            bottom: 10px !important;
          }
        }

        /* Tablet styles */
        @media (min-width: 641px) and (max-width: 1024px) {
          .services-swiper .swiper-slide {
            width: 300px;
            height: 400px;
          }
        }

        /* Desktop styles */
        @media (min-width: 1025px) {
          .services-swiper .swiper-slide {
            width: 350px;
            height: 420px;
          }
        }
      `}</style>
    </section>
  );
}