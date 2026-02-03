import React from "react";
import Image from "next/image";
import SectionHeading from "../Common/SectionHeading";

export default function BlogSection() {
  const blogPosts = [ // "C:\repos\balmanFE\public\HeroImages\BlogHome.jpeg"
    {
      id: 1,
      image:
        "/HeroImages/BlogHome.jpeg",
      title: "Blog title heading will go here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
    {
      id: 2,
      image:
        "/HeroImages/BlogHome.jpeg",
      title: "Blog title heading will go here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
    {
      id: 3,
      image: "/HeroImages/BlogHome.jpeg",
      title: "Blog title heading will go here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
  ];

  return (
    <section className="relative w-full bg-[#010101] section-padding-y">
      <div className="relative w-full mx-auto section-padding-x">
        {/* Header */}
        <div className="relative mb-12 text-center">
          <SectionHeading>
            Stay Informed. Stay Inspired.
          </SectionHeading>
          <div className="heading-underline mx-auto mb-8"></div>
          <button
            className="mt-4 mx-auto flex items-center gap-2 text-white text-sm  md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2">
            See More
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

        </div>
        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="group cursor-pointer rounded-2xl overflow-hidden"
            >
              {/* Image wrapper */}
              <div className="relative mx-auto h-[320px] sm:h-[360px] md:h-[400px] w-[90%] sm:w-[85%] overflow-hidden rounded-2xl">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                />

                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black via-black/70 to-transparent text-white text-left">
                  <h3 className="text-xl font-semibold">{post.title}</h3>
                  <p className="text-sm">{post.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>


  );
}
