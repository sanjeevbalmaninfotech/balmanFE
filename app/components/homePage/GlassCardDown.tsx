export default function GlassCardDown() {
    return (
        <a
            href="tel:+919814097251"
            className="hidden lg:block w-[150px] px-5 py-4 rounded-2xl
      bg-[#E8E8EA]/10 backdrop-blur-sm border border-white/5
      shadow-[0_4px_20px_rgba(0,0,0,0.06)] cursor-pointer group hover:bg-[#E8E8EA]/20 transition-all"
        >
            <p className="font-inter text-[#E8E8EA] text-[12px] leading-[120%] font-normal mb-1">
                Have any doubts?
            </p>

            <div className="flex items-center gap-2 mt-1
             font-inter text-[#E8E8EA] text-[12px]
             group-hover:text-white">
                Call us!
            </div>
        </a>
    );
}
