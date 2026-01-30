import React from "react";
import Image from "next/image";
import SectionHeading from "../Common/SectionHeading";

export default function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
      title: "Blog title heading will go here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
      title: "Blog title heading will go here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
      title: "Blog title heading will go here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
  ];

  return (
    <section className="relative w-full bg-black section-padding-y">
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
              className="group cursor-pointer rounded-2xl overflow-hidden "
            >
              {/* Image Container */}

              <div className="relative h-64 overflow-hidden group">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />

                {/* Content (Positioned at the Bottom-Left) */}
                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black via-black/70 to-transparent text-white text-left">
                  <div>
                    <h3 className="text-xl font-semibold">{post.title}</h3>
                    <p className="text-sm">{post.description}</p>
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
