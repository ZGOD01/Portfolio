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
      <div className="mt-20 mx-auto w-full max-w-6xl bg-[#F6F6F6] border border-[#EBEBEB] rounded-[28px] p-4 md:p-5 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
        <div className="grid grid-cols-4 gap-3 md:flex md:flex-wrap md:items-center md:justify-center md:gap-4">
        {/* Figma */}
        <div className="flex flex-col items-center gap-1.5 group">
          <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-white border border-[#EBEBEB]/60 rounded-[14px] md:rounded-[16px] shadow-[0_1px_3px_rgba(0,0,0,0.02)] group-hover:scale-105 group-hover:-translate-y-1.5 transition-all duration-300 ease-out">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/icons/figma.png" alt="Figma" className="w-9 h-9 md:w-11 md:h-11 object-contain" />
          </div>
          <span className="text-[10px] font-medium text-[#9A9A9A] md:hidden">Figma</span>
        </div>

        {/* HTML */}
        <div className="flex flex-col items-center gap-1.5 group">
          <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-white border border-[#EBEBEB]/60 rounded-[14px] md:rounded-[16px] shadow-[0_1px_3px_rgba(0,0,0,0.02)] group-hover:scale-105 group-hover:-translate-y-1.5 transition-all duration-300 ease-out">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/icons/html.png" alt="HTML" className="w-9 h-9 md:w-11 md:h-11 object-contain" />
          </div>
          <span className="text-[10px] font-medium text-[#9A9A9A] md:hidden">HTML</span>
        </div>

        {/* CSS */}
        <div className="flex flex-col items-center gap-1.5 group">
          <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-white border border-[#EBEBEB]/60 rounded-[14px] md:rounded-[16px] shadow-[0_1px_3px_rgba(0,0,0,0.02)] group-hover:scale-105 group-hover:-translate-y-1.5 transition-all duration-300 ease-out">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/icons/css.png" alt="CSS" className="w-9 h-9 md:w-11 md:h-11 object-contain" />
          </div>
          <span className="text-[10px] font-medium text-[#9A9A9A] md:hidden">CSS</span>
        </div>

        {/* ReactJs */}
        <div className="flex flex-col items-center gap-1.5 group">
          <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-white border border-[#EBEBEB]/60 rounded-[14px] md:rounded-[16px] shadow-[0_1px_3px_rgba(0,0,0,0.02)] group-hover:scale-105 group-hover:-translate-y-1.5 transition-all duration-300 ease-out">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/icons/ReactJs.png" alt="React" className="w-9 h-9 md:w-11 md:h-11 object-contain" />
          </div>
          <span className="text-[10px] font-medium text-[#9A9A9A] md:hidden">React</span>
        </div>

        {/* Expo */}
        <div className="flex flex-col items-center gap-1.5 group">
          <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-white border border-[#EBEBEB]/60 rounded-[14px] md:rounded-[16px] shadow-[0_1px_3px_rgba(0,0,0,0.02)] group-hover:scale-105 group-hover:-translate-y-1.5 transition-all duration-300 ease-out">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/icons/expo.png" alt="Expo" className="w-9 h-9 md:w-11 md:h-11 object-contain" />
          </div>
          <span className="text-[10px] font-medium text-[#9A9A9A] md:hidden">Expo</span>
        </div>

        {/* ExpressJs */}
        <div className="flex flex-col items-center gap-1.5 group">
          <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-white border border-[#EBEBEB]/60 rounded-[14px] md:rounded-[16px] shadow-[0_1px_3px_rgba(0,0,0,0.02)] group-hover:scale-105 group-hover:-translate-y-1.5 transition-all duration-300 ease-out">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/icons/ExpressJs.png" alt="Express" className="w-9 h-9 md:w-11 md:h-11 object-contain" />
          </div>
          <span className="text-[10px] font-medium text-[#9A9A9A] md:hidden">Express</span>
        </div>

        {/* MongoDB */}
        <div className="flex flex-col items-center gap-1.5 group">
          <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-white border border-[#EBEBEB]/60 rounded-[14px] md:rounded-[16px] shadow-[0_1px_3px_rgba(0,0,0,0.02)] group-hover:scale-105 group-hover:-translate-y-1.5 transition-all duration-300 ease-out">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/icons/MongoDB.png" alt="MongoDB" className="w-9 h-9 md:w-11 md:h-11 object-contain" />
          </div>
          <span className="text-[10px] font-medium text-[#9A9A9A] md:hidden">MongoDB</span>
        </div>

        {/* PostgreSQL */}
        <div className="flex flex-col items-center gap-1.5 group">
          <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-white border border-[#EBEBEB]/60 rounded-[14px] md:rounded-[16px] shadow-[0_1px_3px_rgba(0,0,0,0.02)] group-hover:scale-105 group-hover:-translate-y-1.5 transition-all duration-300 ease-out">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/icons/PostgreSQL.png" alt="PostgreSQL" className="w-9 h-9 md:w-11 md:h-11 object-contain" />
          </div>
          <span className="text-[10px] font-medium text-[#9A9A9A] md:hidden">Postgres</span>
        </div>

        {/* Firebase */}
        <div className="flex flex-col items-center gap-1.5 group">
          <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-white border border-[#EBEBEB]/60 rounded-[14px] md:rounded-[16px] shadow-[0_1px_3px_rgba(0,0,0,0.02)] group-hover:scale-105 group-hover:-translate-y-1.5 transition-all duration-300 ease-out">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/icons/Firebase.png" alt="Firebase" className="w-9 h-9 md:w-11 md:h-11 object-contain" />
          </div>
          <span className="text-[10px] font-medium text-[#9A9A9A] md:hidden">Firebase</span>
        </div>

        {/* Python */}
        <div className="flex flex-col items-center gap-1.5 group">
          <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-white border border-[#EBEBEB]/60 rounded-[14px] md:rounded-[16px] shadow-[0_1px_3px_rgba(0,0,0,0.02)] group-hover:scale-105 group-hover:-translate-y-1.5 transition-all duration-300 ease-out">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/icons/python.png" alt="Python" className="w-9 h-9 md:w-11 md:h-11 object-contain" />
          </div>
          <span className="text-[10px] font-medium text-[#9A9A9A] md:hidden">Python</span>
        </div>

        {/* C++ */}
        <div className="flex flex-col items-center gap-1.5 group">
          <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-white border border-[#EBEBEB]/60 rounded-[14px] md:rounded-[16px] shadow-[0_1px_3px_rgba(0,0,0,0.02)] group-hover:scale-105 group-hover:-translate-y-1.5 transition-all duration-300 ease-out">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/icons/cpp.png" alt="C++" className="w-9 h-9 md:w-11 md:h-11 object-contain" />
          </div>
          <span className="text-[10px] font-medium text-[#9A9A9A] md:hidden">C++</span>
        </div>

        {/* AWS */}
        <div className="flex flex-col items-center gap-1.5 group">
          <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-white border border-[#EBEBEB]/60 rounded-[14px] md:rounded-[16px] shadow-[0_1px_3px_rgba(0,0,0,0.02)] group-hover:scale-105 group-hover:-translate-y-1.5 transition-all duration-300 ease-out">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/icons/aws.png" alt="AWS" className="w-9 h-9 md:w-11 md:h-11 object-contain" />
          </div>
          <span className="text-[10px] font-medium text-[#9A9A9A] md:hidden">AWS</span>
        </div>

        {/* Git */}
        <div className="flex flex-col items-center gap-1.5 group">
          <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-white border border-[#EBEBEB]/60 rounded-[14px] md:rounded-[16px] shadow-[0_1px_3px_rgba(0,0,0,0.02)] group-hover:scale-105 group-hover:-translate-y-1.5 transition-all duration-300 ease-out">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/icons/git.png" alt="Git" className="w-9 h-9 md:w-11 md:h-11 object-contain" />
          </div>
          <span className="text-[10px] font-medium text-[#9A9A9A] md:hidden">Git</span>
        </div>
        </div>
      </div>

    </motion.section>
  );
}
