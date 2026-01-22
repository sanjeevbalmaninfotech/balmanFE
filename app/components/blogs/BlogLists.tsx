import Image from "next/image";
export default function BlogList() {
  const blogPosts = [
    {
      id: 1,
      title: "Branding Services",
      author: "Dasteen 2",
      date: "Jan 10, 2024",
      readTime: "3 Min Read",
      content: "Lorem Ipsum Dolor Sit Amet Consectetur. Consectetur Risus Quis Diam Hendrerit. Interdum Mattis In Sed Diam Egestas Metus At Duis Commodo. Cursus Quis Cursus Dignissim Egestas Sollicitudin Tristique Quis. Orci Neque Quis Porttitor Eu Amet. Ommodo. Cursus Quis Cursus Dignissim Egestas Sollicitudin Tristique Quis. Orci Neque Quis Porttitor Eu Amet.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop&q=80"
    },
    {
      id: 2,
      title: "Digital Marketing",
      author: "Dasteen 3",
      date: "Jan 10, 2024",
      readTime: "3 Min Read",
      content: "Lorem Ipsum Dolor Sit Amet Consectetur. Consectetur Risus Quis Diam Hendrerit. Interdum Mattis In Sed Diam Egestas Metus At Duis Commodo. Cursus Quis Cursus Dignissim Egestas Sollicitudin Tristique Quis. Orci Neque Quis Porttitor Eu Amet. Ommodo. Cursus Quis Cursus Dignissim Egestas Sollicitudin Tristique Quis. Orci Neque Quis Porttitor Eu Amet.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop&q=80"
    },
    {
      id: 3,
      title: "Social Media Marketing",
      author: "Dasteen 4",
      date: "Jan 10, 2024",
      readTime: "3 Min Read",
      content: "Lorem Ipsum Dolor Sit Amet Consectetur. Consectetur Risus Quis Diam Hendrerit. Interdum Mattis In Sed Diam Egestas Metus At Duis Commodo. Cursus Quis Cursus Dignissim Egestas Sollicitudin Tristique Quis. Orci Neque Quis Porttitor Eu Amet. Ommodo. Cursus Quis Cursus Dignissim Egestas Sollicitudin Tristique Quis. Orci Neque Quis Porttitor Eu Amet.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop&q=80"
    },
    {
      id: 4,
      title: "Customer Support Marketing",
      author: "Dasteen 5",
      date: "Jan 10, 2024",
      readTime: "3 Min Read",
      content: "Lorem Ipsum Dolor Sit Amet Consectetur. Consectetur Risus Quis Diam Hendrerit. Interdum Mattis In Sed Diam Egestas Metus At Duis Commodo. Cursus Quis Cursus Dignissim Egestas Sollicitudin Tristique Quis. Orci Neque Quis Porttitor Eu Amet. Ommodo. Cursus Quis Cursus Dignissim Egestas Sollicitudin Tristique Quis. Orci Neque Quis Porttitor Eu Amet.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header Section */}
      <header className="section-padding-x pt-8 sm:pt-4 lg:pt-8 pb-8 sm:pb-8">
        <div className="flex items-center gap-3 mb-2 sm:mb-2">
          <div className="heading-underline"></div>
          <span className="text-gray-400 text-sm sm:text-base">Blogs</span>
        </div>
        {/* FIX: Changed specific article title to Generic Title to separate it from the list */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          Our Latest Articles & News
        </h1>
      </header>

      {/* Blog Posts Section */}
      <main className="section-padding-x py-8 sm:py-12 lg:pt-2 lg:pb-16">
        <div className="space-y-16 sm:space-y-20 lg:space-y-24">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center"
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-xl aspect-[16/9] max-h-[360px] shadow-md group">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="space-y-4 sm:space-y-6">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                  {post.title}
                </h2>

                {/* Author Info */}
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-12 h-10 sm:w-20 sm:h-12 overflow-hidden rounded-[50%] flex-shrink-0 relative">
                    {/* Added 'relative' here so the Image 'fill' works correctly */}
                    <Image
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=120&fit=crop"
                      alt={post.author}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="text-sm sm:text-base">
                    <p className="font-semibold">{post.author}</p>
                    <p className="text-gray-400">
                      {post.date} <span className="mx-2">•</span> {post.readTime}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  {post.content}
                </p>

                {/* CTA Button */}
                <button className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300">
                  See More
                </button>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}