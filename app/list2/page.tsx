'use client';









import { useRef } from 'react';

const SpotlightCard = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const divRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!divRef.current) return;

    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    divRef.current.style.setProperty('--mouse-x', `${x}px`);
    divRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      className="
        group relative rounded-2xl bg-black p-8 overflow-hidden h-64 md:h-80
        border border-gray-800
        transition-shadow duration-300
        hover:shadow-[0_0_20px_rgba(255,165,0,0.9),0_0_40px_rgba(255,165,0,0.7),0_0_60px_rgba(255,165,0,0.5)]
      "
      style={{ '--mouse-x': '50%', '--mouse-y': '50%' } as React.CSSProperties}
    >
      {/* Spotlight overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-500 group-hover:opacity-50"
        style={{
          background: 'radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(255,165,0,0.25), transparent 80%)',
        }}
      />
      {/* Card content */}
      <div className="relative z-10 flex flex-col justify-center h-full text-white">
        {children}
      </div>
    </div>
  );
};

const SpotlightCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {[...Array(5)].map((_, index) => (
        <SpotlightCard key={index}>
          <h2 className="text-xl font-semibold mb-2">Card {index + 1}</h2>
          <p className="text-gray-300">
            This is some content for card {index + 1}. Hover to see a bright orange glow!
          </p>
        </SpotlightCard>
      ))}
    </div>
  );
};

export default SpotlightCards;





