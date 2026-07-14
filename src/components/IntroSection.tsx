"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function IntroSection() {
  const containerVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  const bannerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: bannerRef,
    offset: ["start end", "end start"],
  });

  // Transform scroll progress to translate from left to right as we scroll down
  const x = useTransform(scrollYProgress, [0, 1], ["-30vw", "10vw"]);

  const items = [
    "Photography",
    "Travel",
    "Food",
    "User Experience",
    "Music",
    "Gym",
  ];

  // Repeat items to make the list long enough to prevent blank gaps
  const repeatedItems = [...items, ...items, ...items, ...items, ...items];

  return (
    <section className="w-full bg-transparent">
      {/* Profile Section Content */}
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-8 md:py-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-20 items-start"
        >
          {/* Left Text Column: Profile Description */}
          <div className="md:col-span-7 flex flex-col items-start text-left">
            <span className="text-[14px] md:text-[15px] font-semibold tracking-[0.16em] uppercase text-[#9A9A9A] mb-2 select-none">
              KNOW ME
            </span>
            <h2 className="font-stack-notch text-[32px] md:text-[40px] font-medium tracking-tight text-[#111111] mb-4 leading-tight select-none">
              Little about <span className="text-[#9A9A9A]">myself.</span>
            </h2>
            <p className="font-sans text-[15px] md:text-[16px] leading-[1.65] text-[#1A1A1A] font-normal max-w-none pr-0">
              I'm <span className="text-[#111111] font-semibold">Om</span>. I started in engineering, moved to development, and somewhere along the way started building of my own, giving me a different instinct – less &ldquo;just write code,&rdquo; more &ldquo;will this actually work, and would someone use it.&rdquo;
            </p>
          </div>

          {/* Right Text Column: Key Metrics / Stats */}
          <div className="md:col-span-5 flex items-center justify-between md:justify-end w-full h-full md:pt-10 gap-4 sm:gap-6 md:gap-8">
            {/* Stat 1 */}
            <div className="flex flex-col items-start md:items-center text-left md:text-center shrink-0">
              <span className="font-stack-notch text-[52px] md:text-[60px] font-light leading-none text-[#111111] tracking-tighter select-none">
                02
              </span>
              <span className="text-[10px] md:text-[11px] font-semibold tracking-[0.12em] uppercase text-[#9A9A9A] mt-3 leading-tight select-none text-center">
                YEARS IN<br />DEVELOPMENT
              </span>
            </div>

            {/* Divider 1 */}
            <div className="h-16 w-px bg-[#E5E5E2] shrink-0" />

            {/* Stat 2 */}
            <div className="flex flex-col items-start md:items-center text-left md:text-center shrink-0">
              <span className="font-stack-notch text-[52px] md:text-[60px] font-light leading-none text-[#111111] tracking-tighter select-none">
                10+
              </span>
              <span className="text-[10px] md:text-[11px] font-semibold tracking-[0.12em] uppercase text-[#9A9A9A] mt-3 leading-tight select-none text-center">
                PROJECTS<br />DELIVERED
              </span>
            </div>

            {/* Divider 2 */}
            <div className="h-16 w-px bg-[#E5E5E2] shrink-0" />
          </div>
        </motion.div>
      </div>

      {/* Horizontal Scrolling Interest Banner (controlled by scrolling progress) */}
      <div ref={bannerRef} className="w-full py-3 border-y border-[#E5E5E2] bg-transparent overflow-hidden select-none mt-10 md:mt-16 mb-16">
        <motion.div style={{ x }} className="flex items-center gap-8 md:gap-12 whitespace-nowrap">
          {repeatedItems.map((item, index) => (
            <div key={index} className="flex items-center gap-8 md:gap-12 shrink-0 text-[32px] font-normal tracking-tight text-[#8C8C8C] font-stack-notch">
              <span>{item}</span>
              {/* Red diamond bullet icon */}
              <div className="w-2 h-2 bg-[#EF3B2D] rotate-45 shrink-0 select-none" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
