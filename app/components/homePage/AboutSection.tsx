export default function AboutSection() {
    return (
        <>
            <section className="relative w-full bg-black py-[40px] sm:py-[50px] md:py-[60px]">
                <div className="relative w-full mx-auto px-4 sm:px-8 lg:px-[120px]">
                    {/* Two Column Layout */}
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-0">
                        {/* Left Column - Heading */}
                        <div className="relative lg:w-[30%] lg:pr-8">
                            <div className="lg:absolute lg:top-1/2 lg:-translate-y-1/2 w-full flex flex-col items-start">

                                {/* About Us Label */}
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-[40px] h-[2px] bg-[#FF5900]"></div>
                                    <span
                                        className="text-white/80"
                                        style={{
                                            fontFamily: 'Plus Jakarta Sans, sans-serif',
                                            fontSize: '16px',
                                            fontWeight: '500'
                                        }}
                                    >
                                        About Us
                                    </span>
                                </div>

                                {/* Heading */}
                                <h2
                                    className=""
                                    style={{
                                        fontFamily: 'Plus Jakarta Sans, sans-serif',
                                        fontSize: 'clamp(28px, 5vw, 36px)',
                                        fontWeight: '700',
                                        lineHeight: '110%',
                                        color: 'rgba(232, 232, 234, 1)'
                                    }}
                                >
                                    We're More Than A <br className="hidden sm:block" /><span className="sm:hidden"> </span>Digital Agency
                                </h2>

                            </div>
                        </div>



                        {/* Vertical Divider - Hidden on mobile */}
                        <div className="hidden lg:block w-[1px] bg-white/20 mx-8"></div>

                        {/* Right Column - Content */}
                        <div className="lg:w-[70%] lg:pl-8">
                            {/* Paragraph 1 */}
                            <p
                                className="text-white/80 mb-4 sm:mb-5 md:mb-6"
                                style={{
                                    fontFamily: 'Plus Jakarta Sans, sans-serif',
                                    fontSize: 'clamp(14px, 2.5vw, 16px)',
                                    fontWeight: '400',
                                    lineHeight: '150%'
                                }}
                            >
                                At Balman Infotech, we believe technology is more than just code — it's a tool to create impact. Our mission is to empower businesses through smart, scalable, and secure solutions that deliver measurable results. From concept to completion, we focus on understanding each client's unique needs and providing customized services that combine creativity, technical expertise, and strategic thinking.
                            </p>

                            {/* Paragraph 2 */}
                            <p
                                className="text-white/80 mb-4 sm:mb-5 md:mb-6"
                                style={{
                                    fontFamily: 'Plus Jakarta Sans, sans-serif',
                                    fontSize: 'clamp(14px, 2.5vw, 16px)',
                                    fontWeight: '400',
                                    lineHeight: '150%'
                                }}
                            >
                                Our team consists of experienced developers, designers, and IT professionals who are passionate about innovation and excellence. Using modern frameworks, agile methodologies, and cutting-edge technologies, we build solutions that are robust, user-friendly, and future-ready. Whether it's automating processes, building enterprise platforms, or enhancing user experience, we ensure every project reflects our commitment to quality and performance.
                            </p>

                            {/* Paragraph 3 */}
                            <p
                                className="text-white/80 mb-4 sm:mb-5 md:mb-6"
                                style={{
                                    fontFamily: 'Plus Jakarta Sans, sans-serif',
                                    fontSize: 'clamp(14px, 2.5vw, 16px)',
                                    fontWeight: '400',
                                    lineHeight: '150%'
                                }}
                            >
                                What makes Balman Infotech stand out is our customer-centric approach. We believe in building long-term partnerships by delivering consistent value, transparency, and support. Every project is handled with attention to detail, timely execution, and a focus on exceeding expectations.
                            </p>

                            {/* Paragraph 4 */}
                            <p
                                className="text-white/80 mb-6 sm:mb-7 md:mb-8"
                                style={{
                                    fontFamily: 'Plus Jakarta Sans, sans-serif',
                                    fontSize: 'clamp(14px, 2.5vw, 16px)',
                                    fontWeight: '400',
                                    lineHeight: '150%'
                                }}
                            >
                                Our vision is to become a global leader in technology services by continuously evolving, innovating, and creating digital ecosystems that drive success for our clients. Guided by our core values — integrity, innovation, and excellence — Balman Infotech continues to shape the future of technology and help businesses adapt, grow, and succeed in the digital era.
                            </p>

                            {/* See More Button */}
                            <button className="flex items-center justify-center gap-2 mx-auto">
                                <span
                                    className="text-white"
                                    style={{
                                        fontFamily: 'Plus Jakarta Sans, sans-serif',
                                        fontSize: '16px',
                                        fontWeight: '500'
                                    }}
                                >
                                    See More
                                </span>
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