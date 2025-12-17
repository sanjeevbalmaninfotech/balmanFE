'use client';

import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

// Import Swiper generic styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import ourServices from '../constants/ourServices';


export default function CoverflowSlider() {
    const [activeIndex, setActiveIndex] = useState(2);

    return (
        <main className="flex min-h-screen items-center justify-center bg-gray-900 py-10 px-4">
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                initialSlide={2}
                coverflowEffect={{
                    rotate: 10, // Reduced for mobile
                    stretch: 0,
                    depth: 50, // Reduced for mobile
                    modifier: 1,
                    slideShadows: false,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                onInit={(swiper) => setActiveIndex(swiper.activeIndex)}
                breakpoints={{
                    // when window width is >= 320px
                    320: {
                        coverflowEffect: {
                            rotate: 10,
                            stretch: 0,
                            depth: 50,
                            modifier: 1,
                        },
                    },
                    // when window width is >= 768px
                    768: {
                        coverflowEffect: {
                            rotate: 30,
                            stretch: 0,
                            depth: 80,
                            modifier: 1,
                        },
                    },
                    // when window width is >= 1024px
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
                {ourServices?.map((service, index) => (
                    <SwiperSlide key={index}>
                        <div className={`service-card ${index === activeIndex ? 'active-slide' : ''}`}>
                            <div className="icon-container">
                                <span className="service-icon">{service.icon}</span>
                            </div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-description">{service.description}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <style jsx global>{`
        .swiper {
            width: 100%;
            max-width: 1400px;
            padding-top: 30px;
            padding-bottom: 30px;
        }

        .swiper-wrapper {
            padding-inline: 20px;
        }

        .swiper-slide {
            background-position: center;
            background-size: cover;
            width: 280px;
            height: 380px;
            border-radius: 20px;
            pointer-events: auto;
        }

        .service-card {
            width: 100%;
            height: 100%;
            background: #000000;
            border: 1px solid var(--primary-color);
            border-radius: 20px;
            padding: 30px 20px;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            text-align: left;
            color: white;
            box-shadow: 0 0 20px rgba(255, 89, 0, 0.3);
            transition: all 0.3s ease-in-out;
            cursor: pointer;
            position: relative;
        }

        .swiper-slide.swiper-slide-active .service-card:hover {
            box-shadow: 0 0 40px 15px rgba(255, 89, 0, 0.8) !important;
            transform: translateY(0px);
        }

        .swiper-slide.swiper-slide-active {
            z-index: 10 !important;
        }

        .swiper-slide:not(.swiper-slide-active) .service-card:hover {
            box-shadow: 0 0 20px rgba(255, 89, 0, 0.3) !important;
            transform: none;
        }

        .icon-container {
            width: 50px;
            height: 50px;
            background: #1a1a1a;
            border: 1px solid var(--primary-color);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 20px;
        }

        .service-icon {
            font-size: 24px;
        }

        .service-title {
            font-size: 20px;
            font-weight: 600;
            margin-bottom: 12px;
            color: #ffffff;
            letter-spacing: 0.5px;
        }

        .service-description {
            font-size: 13px;
            line-height: 1.6;
            color: #b0b0b0;
            font-weight: 300;
        }

        /* Pagination color */
        .swiper-pagination-bullet-active {
            background: var(--primary-color) !important;
        }

        .swiper-pagination-bullet {
            background: #666 !important;
        }

        .swiper-slide-shadow-left,
        .swiper-slide-shadow-right,
        .swiper-slide-shadow-top,
        .swiper-slide-shadow-bottom {
            display: none !important;
        }

        .swiper-slide.swiper-slide-active {
            transform: scale(1) !important;
        }

        /* Mobile-specific styles */
        @media (max-width: 640px) {
            .swiper {
                padding-top: 20px;
                padding-bottom: 40px;
            }

            .swiper-wrapper {
                padding-inline: 10px;
            }

            .swiper-slide {
                width: 250px !important;
                height: 350px !important;
                border-radius: 16px;
            }

            .service-card {
                padding: 25px 18px;
                border-radius: 16px;
            }

            .icon-container {
                width: 45px;
                height: 45px;
                margin-bottom: 18px;
            }

            .service-icon {
                font-size: 22px;
            }

            .service-title {
                font-size: 18px;
                margin-bottom: 10px;
            }

            .service-description {
                font-size: 12px;
                line-height: 1.5;
            }

            /* Adjust pagination position for mobile */
            .swiper-pagination {
                bottom: 10px !important;
            }
        }

        /* Tablet adjustments */
        @media (min-width: 641px) and (max-width: 1024px) {
            .swiper-slide {
                width: 300px;
                height: 400px;
            }

            .service-card {
                padding: 35px 25px;
            }
        }

        /* Large screen adjustments */
        @media (min-width: 1025px) {
            .swiper-slide {
                width: 350px;
                height: 420px;
            }
        }
    `}</style>
        </main>
    );
}