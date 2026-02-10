
export default function AuditImageSection() {
    return (
        <>
            <section
                className=" relative w-full mt-4 lg:mt-14 flex items-center justify-center overflow-hidden bg-gray-900 min-h-[220px] sm:min-h-[260px] md:min-h-[320px] lg:min-h-[420px] mt-20" >
                {/* Background Image Layer */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: `url('/heroImgs/auditImg.jpeg')`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                    }}
                />

                {/* Optional dark overlay for readability */}
                <div className="absolute inset-0 bg-black/40 z-0"></div>

                {/* Content Layer */}
                <div className="relative z-10  flex items-center container mx-auto px-4 sm:px-6 py-3 lg:py-7 lg:ml-15 ml-4">
                    <div className="max-w-md flex flex-col items-start text-white lg:ml-5 ml-4">
                        <h2
                            className="text-gradient font-bold leading-[110%] tracking-tight mb-2"
                            style={{
                                fontSize: "clamp(22px, 6vw, 36px)",
                            }}
                        >
                            Discover What Your Brand Is Really Saying
                            <div className="heading-underline-left mt-2"></div>
                        </h2>

                        <p className="body-text mb-4 sm:mb-5 md:mb-6">
                            Your brand communicates even when you’re not speaking. Our Brand Audit
                            uncovers how your brand looks, feels, and performs and where it needs
                            refinement to grow with clarity and consistency.
                        </p>
                    </div>
                </div>
            </section>
            <section className="flex justify-center lg:py-7 py-3 px-4 lg:px-0">
                <div className="max-w-full flex flex-col items-center text-white">
                    <h2
                        className="font-bold leading-[110%] tracking-tight mb-2"
                        style={{ fontSize: "clamp(22px, 6vw, 36px)" }}
                    >
                        Brand Audit Questionnaire

                    </h2>

                    <p className="font-['Plus_Jakarta_Sans'] max-w-2xl text-[16px] font-normal leading-[150%] tracking-[0px] text-center mb-4 sm:mb-5 md:mb-6">
                        This assessment helps us understand your brand beyond visuals. Please answer honestly, there are no right or wrong answers.
                    </p>
                </div>
            </section>


        </>


    );
}


