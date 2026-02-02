

export default function IndividualBlog() {

    const categories = [
        {
            id: 1,
            title: "Technology",
            description:
                "Latest trends, tools, and innovations shaping the tech industry, from software development to emerging platforms."
        },
        {
            id: 2,
            title: "Artificial Intelligence",
            description:
                "Insights on AI, machine learning, automation, and how intelligent systems are transforming businesses and products."
        },
        {
            id: 3,
            title: "SEO & Growth",
            description:
                "Actionable SEO strategies, content optimization tips, and growth techniques to improve search rankings and visibility."
        },
        {
            id: 4,
            title: "Web Development",
            description:
                "Guides and best practices for building fast, scalable, and user-friendly websites using modern frameworks."
        },
        {
            id: 5,
            title: "App Development",
            description:
                "Everything about mobile and web apps — design, performance optimization, and real-world development insights."
        }
    ];

    return (
        <>
            <>
                <div className="min-h-screen bg-[#010101] text-white font-['Plus_Jakarta_Sans']">


                    <header className="section-padding-x pt-4 sm:pt-8 lg:pt-6 pb-4 sm:pb-8 lg:pb-6">
                        <div className="flex items-center gap-3 mb-2 sm:mb-3">
                            <div className="h-[1px] w-6 bg-primary"></div>
                            <span className="text-gray-400 text-sm sm:text-base">Blogs</span>
                        </div>

                        <h2
                            className="font-['Plus_Jakarta_Sans'] font-bold leading-[110%] tracking-tight mb-2"
                            style={{
                                fontSize: "clamp(32px, 6vw, 36px)",
                                backgroundImage:
                                    "radial-gradient(18% 410% at 30% 50%, #fff 35%, #656565 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            Building High-Performance Android Applications in 2025
                        </h2>

                    </header>

                    {/* ================= BLOG CONTENT ================= */}
                    <main className="w-full py-8 sm:py-4 lg:py-10">
                        <div className="section-padding-x">

                            {/* Author Bar */}
                            {/* Author Bar */}
                            <div className="flex items-center gap-3 mb-8 text-[#A1A1A1]">
                                {/* Avatar */}
                                <div className="w-10 h-10 rounded-full bg-gray-600 overflow-hidden shrink-0">
                                    <img
                                        src="https://via.placeholder.com/40"
                                        alt="Author"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Author Name */}
                                <span className="font-['Poppins'] font-semibold text-[20px] leading-[100%] text-white">
                                    Rehman Dakeet
                                </span>

                                {/* Separator */}
                                <span className="text-[20px] leading-[100%]">•</span>

                                {/* Date and Reading Time */}
                                <span className="font-['Plus_Jakarta_Sans'] font-normal text-[20px] leading-[100%] capitalize">
                                    Jan 10, 2024
                                </span>

                                <span className="text-[20px] leading-[100%]">•</span>

                                <span className="font-['Plus_Jakarta_Sans'] font-normal text-[20px] leading-[100%] capitalize">
                                    3 min read
                                </span>
                            </div>

                            {/* Blog Body */}
                            <div className="space-y-10">
                                <section>
                                    <h3 className="font-['Poppins'] font-bold text-[36px] leading-[48px] tracking-[-2px] text-[#E8E8EA] mb-6">
                                        Leveraging Kotlin and Jetpack Compose for Modern UI
                                    </h3>
                                    <p className="font-['Poppins'] font-normal text-[16px] leading-[28px] text-[#E8E8EA]">
                                        Android development has evolved significantly with the introduction of Jetpack Compose. It simplifies UI development by using a declarative approach, allowing developers to write less code and build more robust applications.
                                    </p>
                                </section>

                                <section>
                                    <h3 className="font-['Poppins'] font-bold text-[36px] leading-[48px] tracking-[-2px] text-[#E8E8EA] mb-6">
                                        Optimizing Performance for Global Android Devices
                                    </h3>
                                    <div className="space-y-2">
                                        <p className="font-['Poppins'] font-normal text-[16px] leading-[28px] text-[#E8E8EA]">
                                            Developing for Android requires a deep understanding of hardware diversity. Ensuring that your application runs smoothly on both flagship and budget devices is critical.
                                        </p>
                                        <p className="font-['Poppins'] font-normal text-[16px] leading-[28px] text-[#E8E8EA]">
                                            Integrating on-device AI allows smarter experiences without compromising user privacy.
                                        </p>
                                    </div>
                                </section>

                                <ul className="space-y-4 mt-8">
                                    <li className="flex items-start gap-3">
                                        <span className="font-['Poppins'] font-bold text-[20px]  text-[#E8E8EA]">•</span>
                                        <span className="font-['Poppins'] font-bold text-[20px]  tracking-[0px] text-[#E8E8EA]">
                                            Implementing Material Design 3 Guidelines
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="font-['Poppins'] font-bold text-[20px]  text-[#E8E8EA]">•</span>
                                        <span className="font-['Poppins'] font-bold text-[20px]  tracking-[0px] text-[#E8E8EA]">
                                            Securing User Data with Biometric Authentication
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="font-['Poppins'] font-bold text-[20px]  text-[#E8E8EA]">•</span>
                                        <span className="font-['Poppins'] font-bold text-[20px]  tracking-[0px] text-[#E8E8EA]">
                                            Integrating Real-time Features with Firebase
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </main>

                    {/* ================= ALL CATEGORY SECTION ================= */}
                    <div className=" bg-[#010101] text-white py-2 section-padding-x" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet" />

                        <div className="mx-auto">
                            {/* Header */}
                            <div className="mb-4 md:mb-8">
                                <h1
                                    className="text-white inline-block"
                                    style={{
                                        fontFamily: 'Poppins, sans-serif',
                                        fontSize: 'clamp(28px, 5vw, 24px)',
                                        fontWeight: '700'
                                    }}
                                >
                                    All Category
                                </h1>
                                <div className="w-12 sm:w-16 h-1 bg-orange-500 mt-2"></div>
                            </div>

                            {/* Cards Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 md:gap-6">
                                {categories.map((category) => (
                                    <div
                                        key={category.id}
                                        className="bg-gray-100 rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
                                    >
                                        {/* Icon Circle */}
                                        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#010101] flex items-center justify-center mb-4 sm:mb-6">
                                            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden">
                                                <svg viewBox="0 0 100 100" className="w-full h-full">
                                                    <defs>
                                                        <radialGradient id={`treeGradient${category.id}`}>
                                                            <stop offset="0%" stopColor="#ff6b35" />
                                                            <stop offset="50%" stopColor="#ff4500" />
                                                            <stop offset="100%" stopColor="#8b0000" />
                                                        </radialGradient>
                                                    </defs>
                                                    {/* Tree trunk */}
                                                    <rect x="45" y="60" width="10" height="15" fill={`url(#treeGradient${category.id})`} />
                                                    {/* Tree foliage */}
                                                    <circle cx="50" cy="35" r="8" fill={`url(#treeGradient${category.id})`} />
                                                    <circle cx="42" cy="42" r="7" fill={`url(#treeGradient${category.id})`} />
                                                    <circle cx="58" cy="42" r="7" fill={`url(#treeGradient${category.id})`} />
                                                    <circle cx="50" cy="48" r="9" fill={`url(#treeGradient${category.id})`} />
                                                    <circle cx="38" cy="50" r="6" fill={`url(#treeGradient${category.id})`} />
                                                    <circle cx="62" cy="50" r="6" fill={`url(#treeGradient${category.id})`} />
                                                    <circle cx="50" cy="55" r="7" fill={`url(#treeGradient${category.id})`} />
                                                </svg>
                                            </div>
                                        </div>

                                        {/* Title */}
                                        <h2
                                            className="text-black leading-none mb-4"
                                            style={{
                                                fontFamily: 'Poppins, sans-serif',
                                                fontSize: '20px',
                                                fontWeight: '700'
                                            }}
                                        >
                                            {category.title}
                                        </h2>

                                        {/* Description */}
                                        <p
                                            className="text-black leading-none text-center"
                                            style={{
                                                fontFamily: 'Poppins, sans-serif',
                                                fontSize: '14px',
                                                fontWeight: '400'
                                            }}
                                        >
                                            {category.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </>

        </>
    );
}