import Image from "next/image";
export default function TeamLeadsSection() {
    const leads = [
        {
            id: 1,
            name: 'Sangram Sandhu',
            title: 'Operations Head',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop'
        },
        {
            id: 2,
            name: 'Sukhman Jot Kaur',
            title: 'Values Strategist Head',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=600&fit=crop'
        },
        {
            id: 3,
            name: 'Sukhman Jot Kaur',
            title: 'Software Team Lead',
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=600&fit=crop'
        }
    ];

    return (
        <div className="min-h-screen bg-black text-white section-padding-x section-padding-y">
            <div className="max-w-7xl mx-auto">


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
                        Meet Our Leads
                    </h2>


                    <div className="heading-underline"></div>

                </div>

                {/* Team Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-16 lg:gap-20 mb-12">
                    {leads.map((lead) => (
                        <div
                            key={lead.id}
                            className="relative rounded-2xl overflow-hidden transition-all duration-300"
                            style={{
                                boxShadow: '0 0 0 0 rgba(0, 0, 0, 0.3)'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.boxShadow = '0 0 50px 15px rgba(255, 89, 0, 0.6)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.boxShadow = '0 0 0 0 rgba(0, 0, 0, 0)';
                            }}
                        >
                            {/* Image Container */}


                            <div className="relative w-full aspect-[9/14] overflow-hidden rounded-2xl">
                                <Image
                                    src={lead.image}
                                    alt={lead.name}
                                    fill
                                    className="object-cover"
                                    sizes="100vw"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-2xl"></div>

                                {/* Info Container */}
                                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 flex flex-col gap-2">
                                    {/* Name */}
                                    <h3
                                        className="font-['Plus Jakarta Sans'] font-semibold"
                                        style={{
                                            color: '#FFFFFF',
                                            fontSize: '18px',
                                            fontWeight: 600,
                                            lineHeight: '24px',
                                            letterSpacing: '-0.5px'
                                        }}
                                    >
                                        {lead.name}
                                    </h3>

                                    {/* Title */}
                                    <p
                                        className="font-['Plus Jakarta Sans'] font-normal"
                                        style={{
                                            color: '#E8E8EA',
                                            fontSize: '14px',
                                            fontWeight: 400,
                                            lineHeight: '22px'
                                        }}
                                    >
                                        {lead.title}
                                    </p>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>


            </div>
        </div>
    );
}