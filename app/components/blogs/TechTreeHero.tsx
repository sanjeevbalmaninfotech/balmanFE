import Image from "next/image";
// Not using this component  now can remove this created new component  in common folder
export default function TechTreeHero() {
  return (
    <section className="relative w-full bg-[#010101] overflow-hidden">

      <div className="relative w-full" style={{ aspectRatio: '1680/541' }}>
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/40 via-black to-black"></div>

        {/* Tech tree image */}
        <Image
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1680&h=541&fit=crop&q=80"
          alt="Technology Circuit Tree"
          width={1680}
          height={541}
          className="object-cover object-center opacity-90"
        />

        {/* Glow effect overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent"></div>

        {/* Optional: Content overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4 sm:px-6 lg:px-8">
            {/* You can add your blog title or other content here */}
          </div>
        </div>
      </div>

      {/* Bottom fade to blend with page */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
}