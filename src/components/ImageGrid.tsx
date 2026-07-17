"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Image as ImageIcon, User } from "lucide-react";

interface ImageCardProps {
  src: string;
  alt: string;
  delay: number;
  index: number;
  isProfile?: boolean;
}

function ImageCard({ src, alt, delay, index, isProfile = false }: ImageCardProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className="relative flex-1 overflow-hidden rounded-[24px] md:rounded-[32px] border border-border-light/80 bg-[#f4f4f0] shadow-sm h-[240px] md:h-[350px] gpu will-change-transform isolate"
    >
      {!hasError ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover split-image-wrapper split-image-${index}`}
        />
      ) : (
        // Premium Fallback Placeholder UI
        <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8 bg-gradient-to-b from-[#FAF8F5] to-[#EFECE6] select-none text-foreground">
          {/* Header */}
          <div className="flex items-center justify-between">
            <span className="text-[10px] tracking-widest font-bold uppercase text-muted-text font-sans">
              {isProfile ? "PROFILE IMAGE" : "WORK PREVIEW"}
            </span>
            <div className="w-8 h-8 rounded-full bg-white/80 border border-border-light flex items-center justify-center text-muted-text shadow-sm">
              {isProfile ? <User size={14} /> : <ImageIcon size={14} />}
            </div>
          </div>

          {/* Details / Instructions */}
          <div className="space-y-2">
            <h3 className="text-base font-semibold font-sans tracking-tight">
              {isProfile ? "Om Gadhave" : alt}
            </h3>
            <p className="text-xs text-muted-text font-mono leading-relaxed">
              Place image at:
              <br />
              <span className="text-foreground font-semibold break-all bg-black/5 px-1 py-0.5 rounded">
                public{src}
              </span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ImageGrid() {
  const images = [
    {
      src: "/images/Om%20Photo.jpeg",
      alt: "Project Showcase One",
      delay: 0.1,
      isProfile: false,
    },
    {
      src: "/images/Om%20Photo.jpeg",
      alt: "Om Gadhave Profile",
      delay: 0.25,
      isProfile: true,
    },
    {
      src: "/images/Om%20Photo.jpeg",
      alt: "Project Showcase Two",
      delay: 0.4,
      isProfile: false,
    },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-4 pb-12 md:pb-16">
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 split-image-container">
        {images.map((img, idx) => (
          <ImageCard
            key={idx}
            src={img.src}
            alt={img.alt}
            delay={img.delay}
            index={idx}
            isProfile={img.isProfile}
          />
        ))}
      </div>
    </section>
  );
}
