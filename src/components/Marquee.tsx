"use client";

import { useState } from "react";

// Set this to true to display the beautiful custom vector placeholders.
// Set this to false once you have placed the logo image files inside the "public/logos/" directory.
const USE_FALLBACK_PLACEHOLDERS = true;

// Premium Fallback Logo Components - Styled in neutral tones with interactive accent transforms
function Scale100MillionFallback() {
  return (
    <div className="flex items-center gap-2 select-none font-sans">
      <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2.5" fill="none" className="shrink-0 text-[#9A9A9A] group-hover:text-accent transition-colors duration-300">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
      <div className="flex items-baseline leading-none">
        <span className="font-light text-[20px] md:text-[22px] tracking-tight">Scale</span>
        <span className="font-bold text-[21px] md:text-[23px] tracking-tight">100Million</span>
        <span className="font-medium text-[15px] md:text-[17px] tracking-tight opacity-70">.com</span>
      </div>
    </div>
  );
}

function SketchToDesignFallback() {
  return (
    <div className="flex items-center gap-2.5 select-none font-sans">
      <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" className="shrink-0 text-[#9A9A9A] group-hover:text-accent transition-colors duration-300">
        <path d="M17 3a2.82 2.82 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
        <path d="M5 15c4.5-5.5 9.5-5.5 14 0" strokeDasharray="3,3" />
      </svg>
      <span className="font-semibold text-[20px] md:text-[22px] tracking-tight">Sketch to Design</span>
    </div>
  );
}

function SqurexFallback() {
  return (
    <div className="flex items-center gap-2.5 select-none font-sans">
      <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2.5" fill="none" className="shrink-0 text-[#9A9A9A] group-hover:text-accent transition-colors duration-300">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <rect x="8" y="8" width="8" height="8" rx="0.5" fill="currentColor" stroke="none" className="fill-[#9A9A9A] group-hover:fill-accent transition-colors duration-300" />
      </svg>
      <span className="font-black text-[20px] md:text-[22px] tracking-[0.06em] uppercase">SQUREX</span>
    </div>
  );
}

function ClothifyFallback() {
  return (
    <div className="flex items-center gap-2.5 select-none font-sans">
      <svg viewBox="0 0 24 24" width="19" height="19" stroke="currentColor" strokeWidth="2" fill="none" className="shrink-0 text-[#9A9A9A] group-hover:text-accent transition-colors duration-300">
        <path d="M12 2a3 3 0 0 0-3 3h6a3 3 0 0 0-3-3z" />
        <path d="M2 17l10-10 10 10H2z" />
      </svg>
      <span className="font-semibold text-[20px] md:text-[22px] tracking-tight">Clothify</span>
    </div>
  );
}

function RepwiseFallback() {
  return (
    <div className="flex items-center gap-2.5 select-none font-sans">
      <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" className="shrink-0 text-[#9A9A9A] group-hover:text-accent transition-colors duration-300">
        <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l.73-.73" />
      </svg>
      <span className="font-light text-[20px] md:text-[22px] tracking-tight">
        Rep<span className="font-semibold">wise</span>
      </span>
    </div>
  );
}

function SppuNotesFallback() {
  return (
    <div className="flex items-center gap-2.5 select-none font-sans">
      <svg viewBox="0 0 24 24" width="19" height="19" stroke="currentColor" strokeWidth="2" fill="none" className="shrink-0 text-[#9A9A9A] group-hover:text-accent transition-colors duration-300">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
      <span className="font-semibold text-[20px] md:text-[22px] tracking-tight">SPPU Notes App</span>
    </div>
  );
}

interface LogoCardProps {
  name: string;
  src: string;
  fallback: React.ReactNode;
}

function LogoCard({ name, src, fallback }: LogoCardProps) {
  const [hasError, setHasError] = useState(false);

  if (USE_FALLBACK_PLACEHOLDERS) {
    return (
      <div className="group flex items-center justify-center shrink-0 px-6 text-[#9A9A9A] hover:text-[#111111] transition-colors duration-300 cursor-pointer">
        {fallback}
      </div>
    );
  }

  return (
    <div className="group flex items-center justify-center shrink-0 px-6 cursor-pointer">
      {!hasError ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={name}
          onError={() => setHasError(true)}
          className="h-10 md:h-11 object-contain opacity-50 grayscale hover:opacity-100 transition-opacity duration-300"
        />
      ) : (
        fallback
      )}
    </div>
  );
}

export default function Marquee() {
  const logos = [
    { name: "Scale100Million.com", src: "/logos/scale100million.png", fallback: <Scale100MillionFallback /> },
    { name: "Sketch To Design", src: "/logos/sketchtodesign.png", fallback: <SketchToDesignFallback /> },
    { name: "SQUREX", src: "/logos/squrex.png", fallback: <SqurexFallback /> },
    { name: "Clothify", src: "/logos/clothify.png", fallback: <ClothifyFallback /> },
    { name: "Repwise", src: "/logos/repwise.png", fallback: <RepwiseFallback /> },
    { name: "SPPU Notes App", src: "/logos/sppunotes.png", fallback: <SppuNotesFallback /> },
  ];

  const marqueeItems = [...logos, ...logos, ...logos, ...logos];

  return (
    <section className="w-full pt-0 pb-6 flex flex-col items-center overflow-hidden bg-transparent">
      {/* Premium Minimalist Heading */}
      <h2 className="text-[15px] md:text-[17px] font-semibold tracking-[0.02em] text-[#9A9A9A] text-center mb-4 select-none">
        Trusted by multiple clients worldwide
      </h2>

      {/* Marquee Wrapper Container */}
      <div className="w-full py-1 relative marquee-container select-none">
        {/* Soft blur overlays on left and right for seamless entrance/exit */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#FFFFFF] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#FFFFFF] to-transparent z-10 pointer-events-none" />

        {/* Scrolling track with cohesive logo density spacing */}
        <div className="animate-marquee flex items-center py-2 gap-12 md:gap-16">
          {marqueeItems.map((logo, index) => (
            <LogoCard
              key={`${logo.name}-${index}`}
              name={logo.name}
              src={logo.src}
              fallback={logo.fallback}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
