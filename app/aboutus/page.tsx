import React from 'react';
import { TrendingUp } from 'lucide-react';
import Image from "next/image";
export default function AboutExperienceSection() {
  const avatars = [
    'https://i.pravatar.cc/150?img=1',
    'https://i.pravatar.cc/150?img=2',
    'https://i.pravatar.cc/150?img=3',
    'https://i.pravatar.cc/150?img=4',
    'https://i.pravatar.cc/150?img=5',
    'https://i.pravatar.cc/150?img=6',
    'https://i.pravatar.cc/150?img=7',
    'https://i.pravatar.cc/150?img=8'
  ];

  return (
    <section className="relative bg-black min-h-screen overflow-hidden">
      {/* Orange gradient glow - bottom left */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary rounded-full blur-[150px] opacity-40"></div>

      <div className="relative w-full section-padding-x section-padding-y">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">


          {/* Left Side - Images and Cards */}
          <div className="relative w-full max-w-[630px] h-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* LEFT SECTION */}
              <div className="flex flex-col gap-4 justify-end">
                {/* Left Image - Team Meeting */}
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80"
                  alt="Team collaboration"
                  width={600}
                  height={378}
                  className="object-cover rounded-[10px]"
                />

                {/* Best Ratings Badge - Below left image */}
                <div className="bg-gray-900 border border-gray-800 flex flex-col justify-center px-4 py-3 rounded-[10px] w-[169px] h-[113px] ml-auto">
                  <h4 className="text-white font-semibold mb-2 text-sm">Best ratings</h4>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <div key={star} className="w-6 h-1 bg-primary rounded-full"></div>
                    ))}
                  </div>
                </div>
              </div>

              {/* RIGHT SECTION */}
              <div className="flex flex-col gap-4">
                {/* 30,000+ Stats Card */}
                <div className="bg-gray-900 border border-gray-800 p-6 rounded-[24px] w-full max-w-[248px] h-[252px]">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-white text-3xl font-bold">30,000+</h3>
                    <TrendingUp className="text-primary" size={24} />
                  </div>
                  <p className="text-gray-400 text-xs mb-4">
                    Since 1st July 2019, with 5 star ratings and happy customers
                  </p>
                  {/* Avatar Grid */}
                  <div className="grid grid-cols-4 gap-2">
                    {avatars.map((avatar, idx) => (
                      <div key={idx} className="relative">
                        <Image
                          src={avatar}
                          alt={`Customer ${idx + 1}`}
                          width={40}
                          height={40}
                          className="rounded-full border-2 border-gray-800 object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>


                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80"
                  alt="Business presentation"
                  width={600}
                  height={378}
                  className="object-cover rounded-[10px]"
                />

              </div>
            </div>
          </div>
          {/* Right Side - Content */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="heading-underline"></div>
              <span className="text-gray-400 text-sm">About Us</span>
            </div>



            <h2
              className="font-['Plus_Jakarta_Sans'] font-bold text-center leading-[110%] tracking-tight mb-2 sm:mb-3 md:mb-4"
              style={{
                fontSize: "clamp(24px, 5vw, 36px)",
                backgroundImage:
                  "radial-gradient(18.08% 413.84% at 51.02% 51.02%, #FFFFFF 35%, #656565 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Experience In Different Industries
            </h2>

            <p className="text-gray-400 leading-relaxed text-base">
              From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded incommode. Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}