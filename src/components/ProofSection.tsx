"use client";

import { motion } from "framer-motion";

export default function ProofSection() {
  return (
    <section className="w-full overflow-hidden bg-transparent">
      <div className="mx-auto w-full max-w-[1180px] px-4 pb-8 pt-2 sm:px-6 md:pb-12 md:pt-4">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="flex flex-col items-start"
        >
          <span className="font-stack-notch mb-1 text-[15px] font-normal uppercase tracking-[-0.025em] text-[#9A9A9A] sm:text-[17px]">
            The one I build for myself
          </span>

          <h2 className="font-stack-notch text-[30px] font-normal leading-tight tracking-[-0.04em] text-[#111111] sm:text-[36px]">
            Proof I can do this{" "}
            <span className="text-[#8C8C8C]">end to end.</span>
          </h2>
        </motion.div>

        {/* Project Box */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.9,
            delay: 0.1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mt-10 overflow-hidden rounded-[22px] border border-[#DDDDDD] bg-white p-3 sm:mt-12 sm:p-4 md:mt-14 md:p-5"
        >
          <div className="grid grid-cols-1 items-center gap-7 lg:grid-cols-[1fr_0.95fr] lg:gap-9">
            {/* Project Preview Image */}
            <div className="w-full overflow-hidden rounded-[17px] bg-[#EAF4FF]">
              <img
                src="/images/banner 2.PNG"
                alt="SPPU Notes project preview"
                className="block h-auto w-full object-contain"
              />
            </div>

            {/* Project Content */}
            <div className="flex flex-col px-2 pb-4 sm:px-3 lg:px-0 lg:py-5 lg:pr-4">
              {/* Project Logo */}
              <div className="mb-6 flex w-full items-center">
                <img
                  src="/images/logo-sppu.png"
                  alt="SPPU Notes"
                  className="block h-auto w-full max-w-[340px] object-contain object-left sm:max-w-[380px]"
                />
              </div>

              <p className="max-w-[540px] text-[16px] leading-[1.5] tracking-[-0.02em] text-[#171717] sm:text-[18px]">
                SPPU Notes brings verified academic resources into one simple platform,
                helping students quickly find the right notes by pattern, branch, and
                semester.
              </p>

              <ul className="mt-5 flex flex-col gap-2.5">
                <li className="flex items-start gap-3 text-[15px] leading-relaxed text-[#555555] sm:text-[17px]">
                  <span className="mt-[8px] h-[8px] w-[8px] shrink-0 rotate-45 bg-[#F04438]" />
                  <span>Explore verified notes across branches and semesters.</span>
                </li>

                <li className="flex items-start gap-3 text-[15px] leading-relaxed text-[#555555] sm:text-[17px]">
                  <span className="mt-[8px] h-[8px] w-[8px] shrink-0 rotate-45 bg-[#F04438]" />
                  <span>Find relevant study material quickly and easily.</span>
                </li>

                <li className="flex items-start gap-3 text-[15px] leading-relaxed text-[#555555] sm:text-[17px]">
                  <span className="mt-[8px] h-[8px] w-[8px] shrink-0 rotate-45 bg-[#F04438]" />
                  <span>Study smarter with resources built for SPPU students.</span>
                </li>
              </ul>

              {/* Visit Project Button */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-fit items-center gap-3 rounded-[12px] bg-[#111111] px-6 py-3.5 text-[15px] font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#2A2A2A] hover:shadow-lg"
              >
                Visit Project

                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}