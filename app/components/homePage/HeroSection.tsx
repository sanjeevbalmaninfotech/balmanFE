import Image from "next/image";
import Link from "next/link";
import GlassCard from "./GlassCard";
import GlassCardDown from "./GlassCardDown";

export default function HeroSection() {
  return (
    <section className="relative w-full bg-[#010101] mt-18 overflow-hidden">

      {/* ================= MOBILE + TABLET IMAGE (TOP) ================= */}
      {/* Works for phones AND 1024×1366 tablets */}
      <div className="relative w-full block lg:hidden">
        <Image
          src="/heroImgs/orangetree.jpeg"
          alt="Orange Tree Growth"
          width={395}
          height={445}
          className="
        w-full
        h-auto
        max-h-[75vh]
        object-contain
        brightness-[1.1]
        bg-[#010101]
      "
          priority
          sizes="100vw"
        />
      </div>

      {/* ================= DESKTOP BACKGROUND IMAGE ONLY ================= */}
      <div className="hidden lg:block absolute inset-0 z-0">
        <Image
          src="/heroImgs/heroOrangeTreelarge.jpeg"
          alt="Orange Tree Background"
          fill
          className="
        object-cover
        object-top
      "
          priority
          sizes="100vw"
          quality={80}
        />
        {/* Contrast overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/20 to-transparent" />
      </div>

      {/* ================= CONTENT ================= */}
      <div
        className="
      relative z-10 w-full mt-10 px-6 md:px-12
      flex flex-col justify-start
      lg:justify-center lg:min-h-screen
      lg:ml-12 lg:mr-12
    "
      >
        <div className="max-w-[683px] py-4 md:py-0 mt-4 md:mt-0">
          <h1
            className="
          mb-3 text-[28px] sm:text-[45px]
          md:text-[54px] lg:text-[72px]
          font-light leading-[1.2] md:leading-[1.1]
        "
            style={{
              fontFamily: "var(--font-primary), sans-serif",
              background:
                "linear-gradient(89.84deg, #FEFEFE 0.23%, #FF5900 90.05%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Your Growth{" "}
            <span className="font-bold text-[#FF5900] md:text-inherit">
              Partner
            </span>
          </h1>

          <p className="text-gray-400 text-sm md:text-lg mb-6 max-w-[500px] leading-relaxed">
            In a world where the digital space is crowded, an end-to-end digital growth partner at your side becomes your biggest advantage.
          </p>

          <p className="text-gray-400 text-sm md:text-lg mb-6 max-w-[500px] leading-relaxed">
            Balman Infotech amalgamates technology, performance-based digital marketing, and customer support to help your brand navigate the end-to-end customer journey.
          </p>

          <div className="pb-8 md:pb-0">
            <Link href="/ContactUs">
              <button className="btn-primary touch-manipulation inline-block text-center">
                Contact Us
              </button>
            </Link>
          </div>
        </div>

        {/* ================= GLASS CARDS (DESKTOP ONLY) ================= */}
        <div className="absolute inset-0 pointer-events-none hidden lg:block">
          <div className="absolute top-[15%] right-[5%] pointer-events-auto">
            <GlassCard />
          </div>
          <div className="absolute bottom-[20%] right-[10%] pointer-events-auto">
            <GlassCardDown />
          </div>
        </div>
      </div>
    </section>
  );
}
