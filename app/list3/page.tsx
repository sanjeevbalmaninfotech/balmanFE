'use client';

import { useRef } from 'react';

type DynamicCardProps = {
  children: React.ReactNode;
};

const DynamicCard = ({ children }: DynamicCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="
        dynamic-card group relative rounded-3xl p-10 overflow-hidden
        border border-orange-700 h-72 md:h-80
        bg-[rgba(255,89,0,1)] text-black
        transition-all duration-300
        hover:bg-black hover:text-white
        hover:shadow-[0_0_20px_rgba(255,89,0,0.9),0_0_40px_rgba(255,89,0,0.7),0_0_60px_rgba(255,89,0,0.5)]
      "
      style={{ '--mouse-x': '50%', '--mouse-y': '50%' } as React.CSSProperties}
    >
      {/* Spotlight overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-500 group-hover:opacity-40"
        style={{
          background: 'radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(255,165,0,0.25), transparent 80%)',
        }}
      />
      {/* Card content */}
      <div className="relative z-10 flex flex-col justify-center h-full">
        {children}
      </div>
    </div>
  );
};

const DynamicCardsShowcase = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
      {[...Array(5)].map((_, index) => (
        <DynamicCard key={index}>
          <h2 className="text-2xl font-bold mb-3">Dynamic Card {index + 1}</h2>
          <p className="text-black group-hover:text-white/80">
            This card changes background and text colors on hover. The orange glow effect also appears on hover!
          </p>
        </DynamicCard>
      ))}
    </div>
  );
};

export default DynamicCardsShowcase;




