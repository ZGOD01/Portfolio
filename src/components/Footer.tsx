"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const rotatingWords = ["ship", "build", "design", "develop", "dream"];

const stackFont = {
  fontFamily:
    '"Stack Sans Notch", "Stack Sans Notch", system-ui, sans-serif',
};

const bodyFont = {
  fontFamily: "Arial, Helvetica, sans-serif",
};

/* -------------------------------------------------------------------------- */
/*                            Decorative shapes                               */
/* -------------------------------------------------------------------------- */

function HexagonShape() {
  return (
    <svg
      width="58"
      height="58"
      viewBox="0 0 88 88"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M44 3 79 23.5v41L44 85 9 64.5v-41L44 3Z" />
    </svg>
  );
}

function HourglassShape() {
  return (
    <svg
      width="58"
      height="58"
      viewBox="0 0 88 88"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M8 8h72c0 20.3-16.1 36-36 36S8 28.3 8 8Z" />
      <path d="M8 80h72c0-20.3-16.1-36-36-36S8 59.7 8 80Z" />
    </svg>
  );
}

function ButterflyShape() {
  return (
    <svg
      width="58"
      height="58"
      viewBox="0 0 88 88"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M8 8h30c0 16.57-13.43 30-30 30V8Z" />
      <path d="M80 8H50c0 16.57 13.43 30 30 30V8Z" />
      <path d="M8 80h30c0-16.57-13.43-30-30-30v30Z" />
      <path d="M80 80H50c0-16.57 13.43-30 30-30v30Z" />
    </svg>
  );
}

function DoubleArcShape() {
  return (
    <svg
      width="58"
      height="58"
      viewBox="0 0 88 88"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M8 38C8 21.43 21.43 8 38 8h12c16.57 0 30 13.43 30 30H8Z" />
      <path d="M8 50h72c0 16.57-13.43 30-30 30H38C21.43 80 8 66.57 8 50Z" />
    </svg>
  );
}

const patternSet = [
  HexagonShape,
  HourglassShape,
  ButterflyShape,
  DoubleArcShape,
];

const pageLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Works", href: "#works" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/",
  },
];

export default function Footer() {
  const [wordIndex, setWordIndex] = useState(0);
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setWordIndex((current) => {
        return (current + 1) % rotatingWords.length;
      });
    }, 2200);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    // 1. Determine final visitor number
    let finalCount = 1;
    try {
      const stored = localStorage.getItem("portfolio_visitor_v3");
      if (stored) {
        const num = parseInt(stored, 10);
        if (!isNaN(num)) {
          finalCount = num + 1;
        }
      } else {
        finalCount = 1; // start from 1 on first visit
      }
      localStorage.setItem("portfolio_visitor_v3", finalCount.toString());
    } catch (e) {
      console.warn("localStorage not accessible:", e);
    }

    // 2. Count up gradually
    let start = 0;
    const end = finalCount;
    const duration = 2000; // 2 seconds animation
    const startTime = performance.now();
    let frameId: number;

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // easeOutQuad easing
      const ease = progress * (2 - progress);
      const current = Math.floor(ease * end);
      
      setVisitorCount(current);

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      } else {
        setVisitorCount(end);
      }
    };

    frameId = requestAnimationFrame(animate);

    return () => {
      if (frameId) {
        cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return (
    <footer className="w-full overflow-hidden bg-white">
      {/* ------------------------------------------------------------------ */}
      {/*                              Heading                               */}
      {/* ------------------------------------------------------------------ */}

      <div className="w-full px-7 pb-9 pt-8 sm:px-10 md:px-[72px] md:pb-11 md:pt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.75,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <h2
            className="select-none tracking-[-0.05em]"
            style={{
              ...stackFont,
              fontSize: "clamp(42px, 5.2vw, 76px)",
              fontWeight: 400,
              lineHeight: 1.02,
            }}
          >
            <span className="text-[#111111]">Let&apos;s </span>

            <span className="relative inline-flex overflow-hidden align-bottom">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={rotatingWords[wordIndex]}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{
                    duration: 0.32,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="inline-block text-[#111111]"
                >
                  {rotatingWords[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </span>

            <br />

            <span className="text-[#666666]">incredible work </span>
            <span className="text-[#F2322C]">together</span>
            <span className="text-[#111111]">.</span>
          </h2>
        </motion.div>

        <div className="mt-9 h-px w-full bg-[#DEDEDE] md:mt-11" />
      </div>

      {/* ------------------------------------------------------------------ */}
      {/*                          Red footer section                         */}
      {/* ------------------------------------------------------------------ */}

      <div
        className="relative w-full"
        style={{
          background:
            "linear-gradient(180deg, #FFF8F7 0px, #FFDAD7 72px, #F98982 145px, #F2322C 255px, #F2322C 100%)",
        }}
      >
        {/* White card */}
        <div className="px-4 sm:px-8 md:px-[46px]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              flex items-center bg-white
              rounded-[22px]
              px-7 py-8
              md:min-h-[270px]
              md:rounded-t-none
              md:rounded-b-[28px]
              md:px-12
              md:py-9
            "
          >
            <div className="grid w-full grid-cols-1 gap-9 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              {/* Bio */}
              <div className="flex flex-col items-start">
                <p
                  className="max-w-[290px] text-[15px] leading-[1.5] text-[#5C5C5C] md:text-[17px]"
                  style={bodyFont}
                >
                  I help teams turn vague ideas into products people actually
                  want. Based in India — open to opportunities.
                </p>

                <a
                  href="mailto:om@example.com"
                  className="
                    group mt-5 inline-flex h-[52px]
                    items-center justify-center gap-2
                    rounded-[13px] bg-[#151515]
                    px-6 text-[15px] font-semibold
                    text-white transition-all duration-300
                    hover:bg-[#2D2D2D]
                    hover:shadow-lg
                    active:scale-[0.98]
                  "
                  style={bodyFont}
                >
                  Let&apos;s talk

                  <ArrowUpRight
                    size={17}
                    strokeWidth={2}
                    className="
                      transition-transform duration-300
                      group-hover:translate-x-0.5
                      group-hover:-translate-y-0.5
                    "
                  />
                </a>
              </div>

              {/* Pages */}
              <div className="flex flex-col items-start">
                <p
                  className="mb-3.5 text-[11px] font-bold uppercase text-[#A4A4A4]"
                  style={bodyFont}
                >
                  Pages
                </p>

                <div className="flex flex-col gap-2.5">
                  {pageLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="
                        w-fit text-[16px] font-medium
                        leading-none text-[#111111]
                        transition-colors duration-200
                        hover:text-[#F2322C]
                      "
                      style={bodyFont}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Connect */}
              <div className="flex flex-col items-start">
                <p
                  className="mb-3.5 text-[11px] font-bold uppercase text-[#A4A4A4]"
                  style={bodyFont}
                >
                  Connect
                </p>

                <div className="flex flex-col gap-2.5">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        w-fit text-[16px] font-medium
                        leading-none text-[#111111]
                        transition-colors duration-200
                        hover:text-[#F2322C]
                      "
                      style={bodyFont}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Reach Out */}
              <div className="flex flex-col items-start">
                <p
                  className="mb-3.5 text-[11px] font-bold uppercase text-[#A4A4A4]"
                  style={bodyFont}
                >
                  Reach Out
                </p>

                <a
                  href="mailto:om@example.com"
                  className="
                    break-all text-[16px] font-medium
                    leading-none text-[#111111]
                    transition-colors duration-200
                    hover:text-[#F2322C]
                  "
                  style={bodyFont}
                >
                  zgod1549@gmail.com
                </a>

                <div className="mt-5">
                  <p
                    className="text-[16px] leading-none text-[#555555]"
                    style={bodyFont}
                  >
                    You&apos;re visitor number:
                  </p>

                  <p
                    className="mt-2 text-[26px] font-bold leading-none text-[#F2322C]"
                    style={bodyFont}
                  >
                    {visitorCount}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Decorative pattern */}
        <div
          className="
            flex w-full items-center justify-center
            gap-8 overflow-hidden
            px-0 pb-12 pt-14
            md:gap-12
          "
          style={{
            color: "rgba(255,255,255,0.23)",
          }}
        >
          {Array.from({ length: 3 }).flatMap((_, setIndex) =>
            patternSet.map((Shape, shapeIndex) => (
              <motion.span
                key={`${setIndex}-${shapeIndex}`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: shapeIndex * 0.04,
                }}
                className="shrink-0 scale-75 md:scale-100"
              >
                <Shape />
              </motion.span>
            )),
          )}
        </div>

        {/* Copyright */}
        <div className="px-6 pb-8 text-center">
          <p
            className="
              flex flex-wrap items-center justify-center
              gap-x-3 gap-y-2
              text-[12px] font-semibold uppercase
              text-white md:text-[15px]
            "
            style={bodyFont}
          >
            <span>© 2026 Designed with</span>
            <span className="text-[17px] leading-none">♥</span>
            <span>by Om S Gadhave</span>
          </p>
        </div>
      </div>
    </footer>
  );
}