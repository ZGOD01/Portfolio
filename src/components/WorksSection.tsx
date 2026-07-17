"use client";

import { motion } from "framer-motion";
import { Dumbbell, Timer, BarChart3, Layers, Zap, Eye, Star, Shirt } from "lucide-react";

export default function WorksSection() {
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

  return (
    <section className="w-full bg-transparent">
      <div className="mx-auto w-full max-w-6xl px-6 pb-16 pt-6 md:px-8 md:pb-24 md:pt-10">

        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 w-full"
        >
          <div className="flex flex-col items-start">
            <span
              className="mb-1.5 select-none text-[#9A9A9A] tracking-normal font-semibold"
              style={{ fontFamily: "Arial, Helvetica, sans-serif", fontSize: "16px", textTransform: "uppercase", fontWeight: 500 }}
            >
              MY WORKS
            </span>
            <h2
              className="select-none leading-[1.2] tracking-[-0.035em] text-[#111111] text-[26px] sm:text-[32px]"
              style={{ fontFamily: '"Stack Sans Notch", system-ui, sans-serif', fontWeight: 400 }}
            >
              Few things shipped <span className="text-[#9A9A9A]">for others.</span>
            </h2>
          </div>
          <div className="flex items-center shrink-0">
            <a
              href="/work"
              className="inline-flex items-center gap-1.5 rounded-[12px] border border-[#E5E5E5] bg-[#F7F7F7] px-[20px] py-[10.5px] text-[15px] font-medium text-[#111111] transition-all duration-300 hover:bg-[#EAEAEA] hover:shadow-sm active:scale-[0.98]"
              style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            >
              See all
              <svg width="12" height="12" viewBox="0 0 13 13" fill="none" aria-hidden="true"><path d="M1 12L12 1M12 1H4M12 1V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </div>
        </motion.div>

        {/* ================================================================ */}
        {/* CARD 1 - Sketch to Design                                        */}
        {/* Layout  : Text LEFT (5col) / Image RIGHT (7col)                  */}
        {/* Features: Horizontal pill / tag badges                           */}
        {/* Theme   : Dark navy / indigo                                     */}
        {/* ================================================================ */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="mt-10 mx-auto max-w-5xl rounded-[24px] border border-[#3b2b8c]/30 bg-gradient-to-b from-[#2a1e69] via-[#141035] to-[#0d0b2a] p-5 sm:p-6 md:p-8 shadow-[0_8px_32px_rgba(13,11,42,0.15)] transition-all duration-300"
        >
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-10 items-center">
            {/* Left: Content */}
            <div className="lg:col-span-5 flex flex-col items-start gap-4">
              <div className="flex items-center gap-2 select-none">
                <span className="font-mono text-[13px] font-semibold text-[#93c5fd] bg-[#93c5fd]/10 px-2 py-0.5 rounded-md">&lt;/&gt;</span>
                <span className="text-[12px] font-bold tracking-[0.1em] text-white uppercase font-sans">Sketch To Design</span>
              </div>

              <h3
                className="leading-[1.25] tracking-[-0.03em] text-white select-none font-normal text-[26px] sm:text-[32px]"
                style={{ fontFamily: '"Stack Sans Notch", system-ui, sans-serif' }}
              >
                Sketch Your Ideas.<br />Let AI Design the Actual UI.
              </h3>

              <p className="text-[15px] sm:text-[16px] leading-[1.6] text-[#cbd5e1] font-sans">
                S2C is an infinite canvas where you sketch rough wireframes, draw shapes, and let AI transform them into production-ready UI in seconds.
              </p>

              {/* Pill tags -- unique feature style for this card */}
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#93c5fd] bg-[#93c5fd]/10 border border-[#93c5fd]/20 rounded-full px-3 py-1 select-none">
                  <Zap size={11} strokeWidth={2.5} /> AI Powered
                </span>
                <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#93c5fd] bg-[#93c5fd]/10 border border-[#93c5fd]/20 rounded-full px-3 py-1 select-none">
                  <Eye size={11} strokeWidth={2.5} /> Infinite Canvas
                </span>
                <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#93c5fd] bg-[#93c5fd]/10 border border-[#93c5fd]/20 rounded-full px-3 py-1 select-none">
                  Pixel-perfect UI
                </span>
                <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#93c5fd] bg-[#93c5fd]/10 border border-[#93c5fd]/20 rounded-full px-3 py-1 select-none">
                  No Limits
                </span>
              </div>

              <a
                href="https://sketch-to-design-ai-saa-s.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-[12px] bg-white px-[22px] py-[12px] text-[14px] font-semibold text-[#0d0b2a] shadow-sm transition-all duration-300 hover:bg-[#cbd5e1] hover:shadow-md hover:-translate-y-0.5 active:scale-[0.98]"
                style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
              >
                Visit Website
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"><path d="M1 12L12 1M12 1H4M12 1V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </div>

            {/* Right: Image */}
            <div className="lg:col-span-7 w-full h-full flex items-center justify-center">
              <div className="relative w-full overflow-hidden rounded-[18px]">
                <img src="/images/non text banner.png" alt="Sketch to Design Canvas Preview" className="block w-full h-auto object-cover" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* ================================================================ */}
        {/* CARD 2 - Clothify                                                */}
        {/* Layout  : Image LEFT (7col) / Text RIGHT (5col) -- FLIPPED        */}
        {/* Features: 2x2 icon feature grid boxes (not a list)              */}
        {/* Theme   : Soft pink / rose                                       */}
        {/* ================================================================ */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="mt-10 mx-auto max-w-5xl rounded-[24px] border border-[#f4b8c8]/40 bg-gradient-to-br from-[#fce8ef] via-[#fbd5e0] to-[#f9c4d4] p-6 sm:p-8 md:p-10 shadow-[0_8px_32px_rgba(244,100,140,0.12)] transition-all duration-300"
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12 items-center">
            {/* Image on LEFT */}
            <div className="lg:col-span-7 w-full h-full flex items-center justify-center order-2 lg:order-1">
              <div className="relative w-full overflow-hidden rounded-[18px]">
                <img src="/images/Clothify banner.PNG" alt="Clothify Fashion E-Commerce Preview" className="block w-full h-auto object-cover" />
              </div>
            </div>

            {/* Text on RIGHT */}
            <div className="lg:col-span-5 flex flex-col items-start gap-5 order-1 lg:order-2">
              <div className="flex items-center gap-2 select-none">
                <span className="flex items-center justify-center text-[#c0536f] bg-[#c0536f]/10 p-1.5 rounded-md">
                  <Shirt size={15} strokeWidth={2.2} />
                </span>
                <span className="text-[12px] font-bold tracking-[0.1em] text-[#7a1f38] uppercase font-sans">Clothify</span>
              </div>

              <h3
                className="leading-[1.25] tracking-[-0.03em] text-[#3a0a18] select-none font-normal text-[26px] sm:text-[32px]"
                style={{ fontFamily: '"Stack Sans Notch", system-ui, sans-serif' }}
              >
                Your Wardrobe,<br />Styled by AI.
              </h3>

              <p className="text-[15px] sm:text-[16px] leading-[1.6] text-[#7a3048] font-sans">
                Upload your entire wardrobe and let AI suggest outfits based on the event, climate, and lifestyle -- while discovering new pieces you do not own yet.
              </p>

              {/* 2x2 feature grid -- unique to this card */}
              <div className="grid grid-cols-2 gap-3 w-full pt-1">
                <div className="flex flex-col gap-1.5 bg-white/50 border border-[#f4b8c8]/60 rounded-[14px] p-3 hover:bg-white/75 transition-colors duration-200 cursor-default group">
                  <span className="text-[#c0536f] transition-transform duration-200 group-hover:scale-110 w-fit"><Star size={14} strokeWidth={2.2} /></span>
                  <span className="text-[13px] font-semibold text-[#3a0a18]">Smart Outfit Picks</span>
                  <span className="text-[11px] text-[#7a3048] font-medium leading-tight">Event &amp; Climate</span>
                </div>
                <div className="flex flex-col gap-1.5 bg-white/50 border border-[#f4b8c8]/60 rounded-[14px] p-3 hover:bg-white/75 transition-colors duration-200 cursor-default group">
                  <span className="text-[#c0536f] transition-transform duration-200 group-hover:scale-110 w-fit"><Eye size={14} strokeWidth={2.2} /></span>
                  <span className="text-[13px] font-semibold text-[#3a0a18]">Style Discovery</span>
                  <span className="text-[11px] text-[#7a3048] font-medium leading-tight">Beyond Your Wardrobe</span>
                </div>
                <div className="flex flex-col gap-1.5 bg-white/50 border border-[#f4b8c8]/60 rounded-[14px] p-3 hover:bg-white/75 transition-colors duration-200 cursor-default group">
                  <span className="text-[#c0536f] transition-transform duration-200 group-hover:scale-110 w-fit"><Zap size={14} strokeWidth={2.2} /></span>
                  <span className="text-[13px] font-semibold text-[#3a0a18]">AI Matching</span>
                  <span className="text-[11px] text-[#7a3048] font-medium leading-tight">Instant Results</span>
                </div>
                <div className="flex flex-col gap-1.5 bg-white/50 border border-[#f4b8c8]/60 rounded-[14px] p-3 hover:bg-white/75 transition-colors duration-200 cursor-default group">
                  <span className="text-[#c0536f] transition-transform duration-200 group-hover:scale-110 w-fit"><Layers size={14} strokeWidth={2.2} /></span>
                  <span className="text-[13px] font-semibold text-[#3a0a18]">Full Wardrobe</span>
                  <span className="text-[11px] text-[#7a3048] font-medium leading-tight">Upload &amp; Organise</span>
                </div>
              </div>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-[12px] bg-[#c0536f] px-[22px] py-[12px] text-[14px] font-semibold text-white shadow-sm transition-all duration-300 hover:bg-[#a83e5a] hover:shadow-md hover:-translate-y-0.5 active:scale-[0.98]"
                style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
              >
                Visit Website
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"><path d="M1 12L12 1M12 1H4M12 1V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </div>
          </div>
        </motion.div>

        {/* CARD 3 - RepWise | Dark maroon | Top: heading+stats | Bottom: full-width image */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="mt-10 mx-auto max-w-5xl rounded-[24px] border border-[#dc2626]/25 bg-gradient-to-br from-[#450a0a] via-[#7f1d1d] to-[#991b1b] p-6 sm:p-8 md:p-8 shadow-[0_8px_40px_rgba(220,38,38,0.28)] overflow-hidden transition-all duration-300"
        >
          {/* Top: heading left + 2x2 stat grid right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-8">

            {/* Left: Badge + Heading + Desc + CTA */}
            <div className="flex flex-col items-start gap-4">
              <div className="flex items-center gap-2 select-none">
                <span className="flex items-center justify-center text-[#fca5a5] bg-[#fca5a5]/15 p-1.5 rounded-md">
                  <Dumbbell size={15} strokeWidth={2.2} />
                </span>
                <span className="text-[12px] font-bold tracking-[0.1em] text-[#fca5a5] uppercase font-sans">RepWise</span>
              </div>

              <h3
                className="leading-[1.25] tracking-[-0.03em] text-white select-none font-normal text-[26px] sm:text-[32px]"
                style={{ fontFamily: '"Stack Sans Notch", system-ui, sans-serif' }}
              >
                Train Smart.<br />Get Stronger.
              </h3>

              <p className="text-[15px] leading-[1.65] text-[#fca5a5]/75 font-sans">
                RepWise is your personal fitness coach -- it curates exercises by muscle group, guides every rep with proper form, auto-tracks rest time, and logs each workout day by day.
              </p>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-[12px] bg-white px-[22px] py-[12px] text-[14px] font-semibold text-[#7f1d1d] shadow-sm transition-all duration-300 hover:bg-[#fca5a5] hover:shadow-md hover:-translate-y-0.5 active:scale-[0.98]"
                style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
              >
                View Project
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"><path d="M1 12L12 1M12 1H4M12 1V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </div>

            {/* Right: 2x2 Big Stat Cards */}
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-2 rounded-[16px] p-4 cursor-default" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.10)" }}>
                <span className="text-[#fca5a5]"><Dumbbell size={18} strokeWidth={2} /></span>
                <span className="text-[24px] font-bold text-white leading-none">12+</span>
                <div>
                  <div className="text-[13px] font-semibold text-white/90">Muscle Groups</div>
                  <div className="text-[11px] text-[#fca5a5]/65 font-medium mt-0.5">Targeted exercises</div>
                </div>
              </div>
              <div className="flex flex-col gap-2 rounded-[16px] p-4 cursor-default" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.10)" }}>
                <span className="text-[#fca5a5]"><Timer size={18} strokeWidth={2} /></span>
                <span className="text-[24px] font-bold text-white leading-none">Auto</span>
                <div>
                  <div className="text-[13px] font-semibold text-white/90">Rest Timer</div>
                  <div className="text-[11px] text-[#fca5a5]/65 font-medium mt-0.5">Guided intervals</div>
                </div>
              </div>
              <div className="flex flex-col gap-2 rounded-[16px] p-4 cursor-default" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.10)" }}>
                <span className="text-[#fca5a5]"><BarChart3 size={18} strokeWidth={2} /></span>
                <span className="text-[24px] font-bold text-white leading-none">365</span>
                <div>
                  <div className="text-[13px] font-semibold text-white/90">Day Tracking</div>
                  <div className="text-[11px] text-[#fca5a5]/65 font-medium mt-0.5">Full history log</div>
                </div>
              </div>
              <div className="flex flex-col gap-2 rounded-[16px] p-4 cursor-default" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.10)" }}>
                <span className="text-[#fca5a5]"><Layers size={18} strokeWidth={2} /></span>
                <span className="text-[24px] font-bold text-white leading-none">&#8734;</span>
                <div>
                  <div className="text-[13px] font-semibold text-white/90">Custom Sets</div>
                  <div className="text-[11px] text-[#fca5a5]/65 font-medium mt-0.5">Build your own</div>
                </div>
              </div>
            </div>
          </div>

          {/* Full-width image at the bottom */}
          <div className="w-full rounded-[16px] overflow-hidden">
            <img
              src="/images/Repwise Banner.png"
              alt="RepWise Fitness App Preview"
              className="block w-full h-auto object-cover"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
