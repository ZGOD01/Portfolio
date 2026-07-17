"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function SummarySection() {
  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState("12:38 am");

  useEffect(() => {
    setMounted(true);
    const updateTime = () => {
      const formatted = new Date().toLocaleTimeString("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });
      setTime(formatted.toLowerCase());
    };
    updateTime();
    const timer = setInterval(updateTime, 60000);
    return () => clearInterval(timer);
  }, []);

  const smoothEase = [0.16, 1, 0.3, 1] as [number, number, number, number];

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: smoothEase }}
      className="mx-auto mb-24 w-full max-w-6xl px-6 md:px-8 select-none"
    >
      {/* Badge Summary tag */}
      <div className="mb-3">
        <span className="text-[11px] md:text-[13px] font-bold tracking-[0.08em] text-[#767676] uppercase">
          A SUMMARY
        </span>
      </div>

      {/* Section Title */}
      <div className="mb-10">
        <h2 
          className="text-[32px] sm:text-[40px] md:text-[44px] font-normal tracking-[-0.035em] leading-[1.1] text-black"
          style={{
            fontFamily: '"Stack Sans Notch", "Stack Sans Notch", system-ui, sans-serif',
          }}
        >
          Know <span className="font-normal text-[#767676]">me</span> as I am.
        </h2>
      </div>

      {/* Main Grid: Left Paragraph & Right Metadata */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
        {/* Left Column: About Paragraph */}
        <div className="md:col-span-7">
          <p 
            className="text-[18px] sm:text-[21px] md:text-[24px] leading-[1.5] tracking-[-0.02em] text-[#111111] font-normal"
            style={{
              fontFamily: '"Stack Sans Notch", "Stack Sans Notch", system-ui, sans-serif',
            }}
          >
            <span className="text-[#E54B4B] font-normal">I design products that get out of the way .</span> <span> </span>3+ years across fintech, SaaS and consumer apps – from the brief to the build. I care about clarity, calmness and the boring details no one notices when they&apos;re done right.
          </p>
        </div>

        {/* Right Column: Metadata List Table */}
        <div className="md:col-span-5 border-t border-[#E5E5E2]">
          {/* Row 1: BASED */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between py-5 border-b border-[#E5E5E2] gap-1.5 sm:gap-0 text-[15px] md:text-[16px] text-left">
            <span className="font-bold tracking-wider text-[#767676] text-[11px] md:text-[12px] uppercase">
              BASED
            </span>
            <span className="text-[#111111] font-medium flex items-center gap-2 sm:text-right">
              Maharashtra, IN <span className="text-[#DF1D24] text-[10px] select-none">♦</span> {mounted ? time : "12:38 am"}
            </span>
          </div>

          {/* Row 2: CURRENTLY */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between py-5 border-b border-[#E5E5E2] gap-1.5 sm:gap-0 text-[15px] md:text-[16px] text-left">
            <span className="font-bold tracking-wider text-[#767676] text-[11px] md:text-[12px] uppercase">
              CURRENTLY
            </span>
            <span className="text-[#111111] font-medium flex items-center gap-2 sm:text-right">
              Freelancer <span className="text-[#DF1D24] text-[10px] select-none">♦</span> Student
            </span>
          </div>

          {/* Row 3: DOMAIN */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between py-5 border-b border-[#E5E5E2] gap-1.5 sm:gap-0 text-[15px] md:text-[16px] text-left">
            <span className="font-bold tracking-wider text-[#767676] text-[11px] md:text-[12px] uppercase">
              DOMAIN
            </span>
            <span className="text-[#111111] font-medium sm:text-right">
              Data Science · Development
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Tools Dock/Tray */}
      <div className="mt-20 mx-auto w-full max-w-6xl bg-[#F6F6F6] border border-[#EBEBEB] rounded-[28px] p-4 md:p-5 flex flex-nowrap items-center justify-start md:justify-center gap-3 md:gap-4 overflow-x-auto scrollbar-none shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
        {/* Figma */}
        <div className="w-16 h-16 flex items-center justify-center bg-white border border-[#EBEBEB]/60 rounded-[16px] shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:scale-105 hover:-translate-y-1.5 transition-all duration-300 ease-out">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icons/figma.png" alt="Figma" className="w-11 h-11 object-contain" />
        </div>

        {/* HTML */}
        <div className="w-16 h-16 flex items-center justify-center bg-white border border-[#EBEBEB]/60 rounded-[16px] shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:scale-105 hover:-translate-y-1.5 transition-all duration-300 ease-out">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icons/html.png" alt="HTML" className="w-11 h-11 object-contain" />
        </div>

        {/* CSS */}
        <div className="w-16 h-16 flex items-center justify-center bg-white border border-[#EBEBEB]/60 rounded-[16px] shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:scale-105 hover:-translate-y-1.5 transition-all duration-300 ease-out">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icons/css.png" alt="CSS" className="w-11 h-11 object-contain" />
        </div>

        {/* ReactJs */}
        <div className="w-16 h-16 flex items-center justify-center bg-white border border-[#EBEBEB]/60 rounded-[16px] shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:scale-105 hover:-translate-y-1.5 transition-all duration-300 ease-out">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icons/ReactJs.png" alt="React" className="w-11 h-11 object-contain" />
        </div>

        {/* Expo */}
        <div className="w-16 h-16 flex items-center justify-center bg-white border border-[#EBEBEB]/60 rounded-[16px] shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:scale-105 hover:-translate-y-1.5 transition-all duration-300 ease-out">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icons/expo.png" alt="Expo" className="w-11 h-11 object-contain" />
        </div>

        {/* ExpressJs */}
        <div className="w-16 h-16 flex items-center justify-center bg-white border border-[#EBEBEB]/60 rounded-[16px] shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:scale-105 hover:-translate-y-1.5 transition-all duration-300 ease-out">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icons/ExpressJs.png" alt="Express" className="w-11 h-11 object-contain" />
        </div>

        {/* MongoDB */}
        <div className="w-16 h-16 flex items-center justify-center bg-white border border-[#EBEBEB]/60 rounded-[16px] shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:scale-105 hover:-translate-y-1.5 transition-all duration-300 ease-out">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icons/MongoDB.png" alt="MongoDB" className="w-11 h-11 object-contain" />
        </div>

        {/* PostgreSQL */}
        <div className="w-16 h-16 flex items-center justify-center bg-white border border-[#EBEBEB]/60 rounded-[16px] shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:scale-105 hover:-translate-y-1.5 transition-all duration-300 ease-out">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icons/PostgreSQL.png" alt="PostgreSQL" className="w-11 h-11 object-contain" />
        </div>

        {/* Firebase */}
        <div className="w-16 h-16 flex items-center justify-center bg-white border border-[#EBEBEB]/60 rounded-[16px] shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:scale-105 hover:-translate-y-1.5 transition-all duration-300 ease-out">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icons/Firebase.png" alt="Firebase" className="w-11 h-11 object-contain" />
        </div>

        {/* Python */}
        <div className="w-16 h-16 flex items-center justify-center bg-white border border-[#EBEBEB]/60 rounded-[16px] shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:scale-105 hover:-translate-y-1.5 transition-all duration-300 ease-out">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icons/python.png" alt="Python" className="w-11 h-11 object-contain" />
        </div>

        {/* C++ */}
        <div className="w-16 h-16 flex items-center justify-center bg-white border border-[#EBEBEB]/60 rounded-[16px] shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:scale-105 hover:-translate-y-1.5 transition-all duration-300 ease-out">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icons/cpp.png" alt="C++" className="w-11 h-11 object-contain" />
        </div>

        {/* AWS */}
        <div className="w-16 h-16 flex items-center justify-center bg-white border border-[#EBEBEB]/60 rounded-[16px] shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:scale-105 hover:-translate-y-1.5 transition-all duration-300 ease-out">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icons/aws.png" alt="AWS" className="w-11 h-11 object-contain" />
        </div>

        {/* Git */}
        <div className="w-16 h-16 flex items-center justify-center bg-white border border-[#EBEBEB]/60 rounded-[16px] shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:scale-105 hover:-translate-y-1.5 transition-all duration-300 ease-out">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icons/git.png" alt="Git" className="w-11 h-11 object-contain" />
        </div>
      </div>

    </motion.section>
  );
}
