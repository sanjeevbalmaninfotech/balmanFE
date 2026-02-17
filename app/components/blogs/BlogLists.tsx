import Image from "next/image";
import SectionHeading from "../Common/SectionHeading";
import Link from "next/link";
import { blogPosts } from "@/app/constants/blogsData";

export default function BlogList() {

  return (
    <div className="min-h-screen bg-[#010101] text-white">
      {/* Header Section */}
      <header className="section-padding-x pt-8 sm:pt-4 lg:pt-8 pb-8 sm:pb-8">
        <div className="flex flex-col items-center justify-center text-center mb-4 lg:mb-12">
          <div className="flex items-center gap-3 mb-2 sm:mb-3">
            <div className="h-[1px] w-6 bg-primary"></div>
            <span className="text-gray-400 text-sm sm:text-base">Blogs</span>
          </div>
          <SectionHeading>
            {`Why Every Business Needs a Professional Website in 2025`}
          </SectionHeading>

        </div>
      </header>

      {/* Blog Posts Section */}
      <main className="section-padding-x py-8 sm:py-12 lg:pt-2 lg:pb-16">
        <div className="space-y-4 sm:space-y-4 lg:space-y-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="grid grid-cols-1 lg:grid-cols-[4fr_6fr] gap-3 lg:gap-8 xl:gap-8 items-center"
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-xl w-full shadow-md
                /* Mobile: 16:9 aspect ratio */
                aspect-[16/9]
                /* Tablet: wider aspect */
                sm:aspect-[4/3]
                /* Desktop: original aspect */
                md:aspect-[612/350]
                /* Max height constraints */
                max-h-[250px]
                sm:max-h-[300px]
                md:max-h-[360px]">
                <Image
                  src={post.thumbnailImage}
                  alt={post.title}
                  fill
                  className="object-cover"

                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="space-y-4 sm:space-y-6">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">
                  {post.title}
                </h2>

                {/* Author Info */}
                <div className="flex items-center gap-3 sm:gap-4">


                  {/* <div className="text-sm sm:text-base">
                    <p className="font-semibold">{post?.author}</p>
                    <p className="text-gray-400">
                      {post?.date} <span className="mx-2">•</span>{" "}
                      {post?.readTime}
                    </p>
                  </div> */}
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  {post.excerpt}
                </p>

                {/* CTA Button */}
                <Link
                  href={`/blogs/${post.id}`}
                  className="btn-primary touch-manipulation inline-block text-center"
                >
                  See More
                </Link>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
