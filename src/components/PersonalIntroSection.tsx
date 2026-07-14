"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const smoothEase = [0.16, 1, 0.3, 1] as [number, number, number, number];

const DAYS = [
  "Sunday", "Monday", "Tuesday", "Wednesday",
  "Thursday", "Friday", "Saturday",
];

const TODO_ITEMS = [
  { label: "Study or work abroad.", done: false },
  { label: "Own a Mahindra Thar 4x4.", done: false },
  { label: "Secure a valuable paid internship.", done: false },
  { label: "Earn my first ₹1 lakh through freelancing.", done: false },
  { label: "Travel solo and explore new places.", done: true },
];

export default function PersonalIntroSection() {
  const [today, setToday] = useState("Monday");
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setToday(DAYS[new Date().getDay()]);
  }, []);

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-10 md:px-8 md:py-14">
      <div className="flex flex-col gap-10 md:flex-row md:items-start md:gap-16">

        {/* ── LEFT: Bio copy ── */}
        <div className="flex-1">
          {/* Label */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: smoothEase, delay: 0 }}
            className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#A0A0A0]"
            style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
          >
            Meet the real me
          </motion.p>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: smoothEase, delay: 0.06 }}
            className="mb-6 leading-[1.1] tracking-[-0.03em] text-black"
            style={{
              fontFamily: '"Stack Sans Notch", system-ui, sans-serif',
              fontSize: "clamp(28px, 3.5vw, 44px)",
              fontWeight: 400,
            }}
          >
            True to{" "}
            <em style={{ fontStyle: "italic", color: "#5C5C5C" }}>my soul.</em>
          </motion.h2>

          {/* Paragraph 1 */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: smoothEase, delay: 0.1 }}
            className="mb-5 text-[16px] leading-[1.8] text-[#444] md:text-[17px]"
            style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
          >
            Off the clock, I love to{" "}
            <span className="font-medium text-[#E03228]">travel</span>, discover
            new places, explore emerging technologies, and turn random ideas into{" "}
            <span className="font-medium text-[#E03228]">side projects</span>.
            I&apos;m always curious about how technology can make everyday
            experiences simpler, faster, and more meaningful.
          </motion.p>

          {/* Paragraph 2 */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: smoothEase, delay: 0.14 }}
            className="text-[16px] leading-[1.8] text-[#444] md:text-[17px]"
            style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
          >
            There&apos;s the version of me that plans features, writes code,
            solves edge cases, and ships{" "}
            <span className="font-medium text-[#E03228]">
              web and mobile products
            </span>
            . And then there&apos;s this one—curious, grounded, always learning,
            and probably turning a small thought into the next thing worth
            building.
          </motion.p>
        </div>

        {/* ── RIGHT: To-Do card (static layout position, tilts on hover in place) ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{
            opacity: 1,
            y: 0,
            rotate: isHovered ? 3.8 : 0,
          }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          transition={{
            type: "spring",
            stiffness: 220,
            damping: 18,
            mass: 0.8,
          }}
          className="w-full shrink-0 md:w-[360px]"
        >
          <div
            className="overflow-hidden rounded-[14px] border border-[#E8E8E8] bg-white transition-shadow duration-300"
            style={{
              boxShadow: isHovered
                ? "0 12px 36px rgba(0,0,0,0.12)"
                : "0 4px 20px rgba(0,0,0,0.08)",
            }}
          >
            {/* Red header — current day */}
            <div
              className="flex items-center px-6 py-4"
              style={{ backgroundColor: "#E03228" }}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={today}
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  transition={{ duration: 0.25 }}
                  className="text-[12px] font-bold uppercase tracking-[0.22em] text-white"
                  style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                >
                  {today}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Card body */}
            <div className="bg-white px-6 pb-7 pt-5">
              <p
                className="mb-5 text-[20px] font-semibold text-black"
                style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
              >
                To do List
              </p>

              <ul className="flex flex-col gap-4">
                {TODO_ITEMS.map(({ label, done }) => {
                  const shouldShowChecked = isHovered && done;
                  return (
                    <li key={label} className="flex items-center gap-3 select-none">
                      {/* Checkbox — filled and ticked on hover if done, empty otherwise */}
                      <span
                        className="relative flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-[4px] border transition-all duration-300"
                        style={{
                          borderColor: shouldShowChecked ? "#111" : "#BDBDBD",
                          backgroundColor: shouldShowChecked ? "#111" : "transparent",
                        }}
                        aria-hidden="true"
                      >
                        <AnimatePresence>
                          {shouldShowChecked && (
                            <motion.svg
                              key="check"
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              exit={{ scale: 0, opacity: 0 }}
                              transition={{ duration: 0.2, ease: "easeOut" }}
                              width="10"
                              height="10"
                              viewBox="0 0 12 10"
                              fill="none"
                            >
                              <path
                                d="M1 5L4.5 8.5L11 1"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </motion.svg>
                          )}
                        </AnimatePresence>
                      </span>

                      {/* Label with strikethrough/dash dynamic effect */}
                      <span className="relative flex-1">
                        <span
                          className="text-[14px] leading-snug transition-colors duration-300"
                          style={{
                            fontFamily: "Arial, Helvetica, sans-serif",
                            color: shouldShowChecked ? "#ABABAB" : "#333",
                            textDecoration: shouldShowChecked ? "line-through" : "none",
                            textDecorationColor: "#ABABAB",
                          }}
                        >
                          {label}
                        </span>
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
