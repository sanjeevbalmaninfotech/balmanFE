export default function BrandAnalysisCTA() {
    return (
        <section className=" w-full mx-auto  bg-black py-10">

            {/* CTA Card Container */}
            <div className="relative w-full mx-auto min-h-[280px] sm:min-h-[320px] md:min-h-[373px] rounded-[20px] border border-white/10 overflow-hidden flex items-center justify-center">
                {/* Top Right Glow */}
                <div className="absolute top-0 right-0 w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] bg-[#FF5900] rounded-full blur-[60px] sm:blur-[80px] opacity-80"></div>

                {/* Bottom Left Glow */}
                <div className="absolute bottom-0 left-0 w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] bg-[#FF5900] rounded-full blur-[60px] sm:blur-[80px] opacity-80"></div>

                {/* Content Container */}
                <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-10 md:py-12 lg:py-[60px] flex flex-col items-center gap-3 sm:gap-4">
                    {/* Heading with Gradient Text */}
                    <h2
                        className="font-['Plus_Jakarta_Sans'] font-bold text-center leading-[110%] tracking-tight mb-2 sm:mb-3 md:mb-4"
                        style={{
                            fontSize: 'clamp(24px, 5vw, 48px)',
                            backgroundImage: 'radial-gradient(18.08% 413.84% at 51.02% 51.02%, #FFFFFF 35%, #656565 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}
                    >
                        Let's Analyse Your Brand - For Free!
                    </h2>

                    {/* Description */}
                    <p
                        className="text-center leading-[150%] text-[#E8E8EA]  mb-3 sm:mb-4 md:mb-6 font-['Plus_Jakarta_Sans']"
                        style={{
                            fontSize: 'clamp(13px, 2.5vw, 16px)'
                        }}
                    >
                        Not sure where to start? Let our experts review your project and give you a clear, actionable plan - absolutely free.
                    </p>

                    {/* CTA Button */}
                    <button className="relative min-w-[180px] sm:min-w-[200px] md:min-w-[215px] h-[44px] sm:h-[48px] md:h-[50px] bg-[#FF5900] text-white rounded-lg px-5 sm:px-6 py-2.5 sm:py-3 font-semibold border border-[#FF5900] overflow-hidden group transition-all duration-300 hover:bg-[#ff6a1a] hover:shadow-[0_8px_20px_rgba(255,89,0,0.4)] hover:-translate-y-0.5 active:translate-y-0 font-['Poppins']"
                        style={{
                            fontSize: 'clamp(14px, 2.5vw, 17px)'
                        }}
                    >
                        <span className="absolute inset-0 -left-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:left-full transition-all duration-500"></span>
                        <span className="relative">Get Your Free Quote</span>
                    </button>
                </div>
            </div>

        </section>
    );
}