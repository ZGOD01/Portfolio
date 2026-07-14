"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SummarySection from "@/components/SummarySection";
import CareerSection from "@/components/CareerSection";
import ModeSlider from "@/components/ModeSlider";
import ProfessionalModeContent from "@/components/ProfessionalModeContent";
import PersonalIntroSection from "@/components/PersonalIntroSection";

const smoothEase = [0.16, 1, 0.3, 1] as [
  number,
  number,
  number,
  number,
];

export default function AboutPage() {
  const [mode, setMode] = useState<"personal" | "professional">("personal");
  const isProfessional = mode === "professional";

  const handleModeChange = (newMode: "personal" | "professional") => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMode(newMode);
  };

  return (
    <>
      <Navbar />

      <main className="flex min-h-screen w-full flex-col bg-white pt-16 md:pt-24">
        {/* ABOUT badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: smoothEase,
          }}
          className="mb-2 flex select-none items-center justify-center gap-2"
        >
          <svg
            viewBox="0 0 109.35 122.88"
            className="h-[15.7px] w-[14px] shrink-0"
            aria-hidden="true"
          >
            <defs>
              <linearGradient
                id="about-maple-gradient"
                x1="0%"
                y1="100%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#FF9F43" />
                <stop offset="50%" stopColor="#FF3366" />
                <stop offset="100%" stopColor="#DF1D24" />
              </linearGradient>
            </defs>

            <path
              fill="url(#about-maple-gradient)"
              d="M55.15,85.62c1.73,11.9-0.93,21.51-8.05,31.37c-1.6,2.21-3.29,3.99-5.25,5.89c-0.01-2.63-1.69-3.76-4.22-4.34 C48.04,108.25,52.33,96.9,53.7,85.62h-2.36c-7.79-0.77-16.33,12.35-26.35,15.92c4.77-9.16-0.56-10.4-12.66-6.33 c9.05-10.8,9.93-14.79,0-13.35c5.13-3.88,9.9-6.11,14.38-7.02c-9.33-2.97-17.63-7.97-24.64-15.57c13.16-0.48,9.93-9.37-2.05-22.76 c15.93,8.01,24.33,9.02,21.73-0.17c4.71,3.18,10.75,9.27,17.11,16.09c-2.45-12.5-4.29-24.34-3.42-33.2 C41.63,28.56,48.3,19.12,54.84,0c5.51,17.44,11.43,27.12,18.92,20.08c0.97,7.76-0.07,16.06-2.74,24.81l-0.17,6.67 c6.21-6.7,12.31-13.03,17.22-15.44c-3.05,10.09,7.63,6.57,21.28,0.38c-12.92,14.44-13.94,22.06-2.57,22.59 c-4.73,7.36-13.07,11.84-22.76,15.23c4.22,1.21,8.44,3.49,12.66,7.02c-8.73-0.72-6.9,5,0.25,14.2c-10.92-3.2-16.49-2.33-13.04,6 C70.98,90.74,61.77,85.51,56.13,85.62H55.15L55.15,85.62z"
            />
          </svg>

          <span
            className="text-[15px] font-bold uppercase text-[#5C5C5C]"
            style={{
              fontFamily: "Arial, Helvetica, sans-serif",
            }}
          >
            About
          </span>
        </motion.div>

        {/* Main title — same on both modes */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.08,
            ease: smoothEase,
          }}
          className="mx-auto mb-3 w-full max-w-6xl select-none px-6 text-center leading-[1.1] tracking-[-0.04em] text-[#5C5C5C] md:px-8"
          style={{
            fontFamily: '"Stack Sans Notch", system-ui, sans-serif',
            fontSize: "clamp(30px, 4vw, 48px)",
            fontWeight: 400,
          }}
        >
          two sides{" "}
          <span className="text-black">of one developer.</span>
        </motion.h1>


        {/* ─── CONDITIONAL CONTENT ─── */}
        <AnimatePresence mode="wait">
          {isProfessional ? (
            <motion.div
              key="professional"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.55, ease: smoothEase }}
              className="w-full"
            >
              {/* About Us Banner 2 */}
              <div className="mx-auto mb-5 w-full max-w-6xl select-none overflow-hidden px-6 md:px-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, ease: smoothEase }}
                  className="relative w-full overflow-hidden rounded-[16px] md:rounded-[24px]"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/About us banner 2.png"
                    alt="About Us Banner 2"
                    className="w-full object-cover max-h-[260px] md:max-h-[360px]"
                  />
                </motion.div>
              </div>
              <PersonalIntroSection />

              <ProfessionalModeContent />

              {/* ─── MODE SLIDER (bottom) ─── */}
              <div className="flex justify-center mb-8 px-6">
                <ModeSlider mode={mode} onChange={handleModeChange} />
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="personal"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.55, ease: smoothEase }}
              className="w-full"
            >
              {/* About Us Banner */}
              <div className="mx-auto mb-5 w-full max-w-6xl select-none overflow-hidden px-6 md:px-8">
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.98,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                    margin: "-60px",
                  }}
                  transition={{
                    duration: 1,
                    ease: smoothEase,
                  }}
                  className="relative w-full overflow-hidden rounded-[16px] md:rounded-[24px]"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/About us banner.png"
                    alt="About Us Banner"
                    className="w-full object-cover max-h-[260px] md:max-h-[360px]"
                  />
                </motion.div>
              </div>

              <SummarySection />
              <CareerSection />

              {/* ─── MODE SLIDER (bottom) ─── */}
              <div className="flex justify-center mb-8 px-6">
                <ModeSlider mode={mode} onChange={handleModeChange} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </>
  );
}