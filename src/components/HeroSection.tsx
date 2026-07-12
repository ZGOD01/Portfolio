"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 24, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number], // Custom premium ease-out
      },
    },
  };

  return (
    <section className="font-stack-notch relative flex flex-col items-center justify-center pt-16 pb-12 md:pt-20 md:pb-16 px-4 overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-6xl text-center flex flex-col items-center"
      >
        {/* Hello Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-[#E5E5E5] rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.02)] mb-8"
        >
          <span className="text-[10px] md:text-[11px] font-medium tracking-[0.08em] text-[#767676]">
            HELLO
          </span>
          <svg viewBox="0 0 109.35 122.88" className="w-[13px] h-[14.6px] flex-shrink-0 select-none mx-0.5">
            <defs>
              <linearGradient id="maple-leaf-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FF9F43" />
                <stop offset="50%" stopColor="#FF3366" />
                <stop offset="100%" stopColor="#DF1D24" />
              </linearGradient>
            </defs>
            <path
              fill="url(#maple-leaf-gradient)"
              d="M55.15,85.62c1.73,11.9-0.93,21.51-8.05,31.37c-1.6,2.21-3.29,3.99-5.25,5.89c-0.01-2.63-1.69-3.76-4.22-4.34 C48.04,108.25,52.33,96.9,53.7,85.62h-2.36c-7.79-0.77-16.33,12.35-26.35,15.92c4.77-9.16-0.56-10.4-12.66-6.33 c9.05-10.8,9.93-14.79,0-13.35c5.13-3.88,9.9-6.11,14.38-7.02c-9.33-2.97-17.63-7.97-24.64-15.57c13.16-0.48,9.93-9.37-2.05-22.76 c15.93,8.01,24.33,9.02,21.73-0.17c4.71,3.18,10.75,9.27,17.11,16.09c-2.45-12.5-4.29-24.34-3.42-33.2 C41.63,28.56,48.3,19.12,54.84,0c5.51,17.44,11.43,27.12,18.92,20.08c0.97,7.76-0.07,16.06-2.74,24.81l-0.17,6.67 c6.21-6.7,12.31-13.03,17.22-15.44c-3.05,10.09,7.63,6.57,21.28,0.38c-12.92,14.44-13.94,22.06-2.57,22.59 c-4.73,7.36-13.07,11.84-22.76,15.23c4.22,1.21,8.44,3.49,12.66,7.02c-8.73-0.72-6.9,5,0.25,14.2c-10.92-3.2-16.49-2.33-13.04,6 C70.98,90.74,61.77,85.51,56.13,85.62H55.15L55.15,85.62z"
            />
          </svg>
          <span className="text-[10px] md:text-[11px] font-semibold tracking-[0.08em] text-[#111111]">
            OM S GADHAVE
          </span>
        </motion.div>

        {/* Large Bold Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px] font-bold tracking-[-0.035em] leading-[1.08] text-[#111111] max-w-none"
        >
          Building Products. Writing Code.
          <br className="hidden md:inline" />Creating Experiences.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="mt-2 md:mt-8 text-[15px] sm:text-[17px] md:text-[18px] text-[#555555] max-w-[780px] font-normal leading-[1.6]"
        >
          Developer turning ideas into clean web and app products.
          <br className="hidden md:inline" /> Focused on fast performance, smooth UX, and polished details.
        </motion.p>
      </motion.div>
    </section>
  );
}
