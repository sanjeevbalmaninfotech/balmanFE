export default function TeamSection() {
    const teamMembers = [
        {
            id: 1,
            name: "Marketing Lead",
            image:
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop",
        },
        {
            id: 2,
            name: "Marketing Lead",
            image:
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=600&fit=crop",
        },
        {
            id: 3,
            name: "Development Lead",
            image:
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=600&fit=crop",
        },
        {
            id: 4,
            name: "Business Lead",
            image:
                "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=600&fit=crop",
        },
        {
            id: 5,
            name: "Design Lead",
            image:
                "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=600&fit=crop",
        },
        {
            id: 6,
            name: "Technical Lead",
            image:
                "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=600&fit=crop",
        },
    ];

    return (
        <section className="relative w-full bg-black section-padding-y">
            <div className="relative w-full mx-auto section-padding-x">
                {/* Header Section */}
                <div className="flex flex-col items-center justify-center mb-12 md:mb-16">

                    <h2
                        className="font-['Plus_Jakarta_Sans'] font-bold text-center leading-[110%] tracking-tight"
                        style={{
                            fontSize: "clamp(24px, 5vw, 36px)",
                            backgroundImage:
                                "radial-gradient(18.08% 413.84% at 51.02% 51.02%, #FFFFFF 35%, #656565 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                        }}
                    >
                        Meet The Minds Behind Balman Infotech
                    </h2>


                    <div className="w-20 h-1 bg-orange-500 rounded-full"></div>

                </div>

                {/* Team Members Grid */}
                <div className="flex flex-wrap justify-evenly items-start gap-6 sm:gap-8 w-full">
                    {teamMembers.map((member, index) => (
                        <div
                            key={member.id}
                            className="group relative cursor-pointer transition-all duration-300"
                            style={{ marginTop: "0" }}
                        >
                            <div
                                className={`transition-all duration-300 ${index % 2 === 1 ? "md:mt-[60px]" : ""
                                    }`}
                            >
                                <div className="relative w-[120px] h-[220px] sm:w-[140px] sm:h-[260px] md:w-[160px] md:h-[400px] rounded-[100px] overflow-hidden border border-white/10 group-hover:border-[#FF5900] transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(255,89,0,0.4)] ">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                                    />

                                    <div className="absolute inset-0 flex items-center justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <p
                                            className="text-white text-lg sm:text-xl font-semibold font-['Plus_Jakarta_Sans'] px-4 text-center"
                                            style={{
                                                writingMode: "vertical-rl",
                                                textOrientation: "mixed",
                                                transform: "rotate(180deg)",
                                            }}
                                        >
                                            {member.name}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
