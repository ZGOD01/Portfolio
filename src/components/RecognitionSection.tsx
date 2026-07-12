"use client";

import { motion } from "framer-motion";

type AwardLogoType = "awwwards" | "figma" | "checkered";

interface AwardItem {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  logoType: AwardLogoType;
}

const AWARDS: AwardItem[] = [
  {
    id: "awwwards-young-jury",
    title: "Awwwards Young Jury",
    subtitle: "Jury Member",
    year: "(2026, 2025)",
    logoType: "awwwards",
  },
  {
    id: "awwwards-honors",
    title: "Awwwards Honors",
    subtitle: "enric.design",
    year: "(2025)",
    logoType: "awwwards",
  },
  {
    id: "config-apac",
    title: "Config APAC Attendee",
    subtitle: "Singapore",
    year: "(2024)",
    logoType: "figma",
  },
  {
    id: "huddle-designers",
    title: "Huddle Designers Award",
    subtitle: "Kelp Kookies",
    year: "(2023)",
    logoType: "checkered",
  },
];

function AwardLogo({ logoType }: { logoType: AwardLogoType }) {
  if (logoType === "awwwards") {
    return (
      <span
        className="text-[32px] font-bold leading-none text-[#606060]"
        style={{
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        w.
      </span>
    );
  }

  if (logoType === "figma") {
    return (
      <svg
        width="27"
        height="39"
        viewBox="0 0 38 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Figma logo"
      >
        <path
          d="M10 4H19V20H10C5.58 20 2 16.42 2 12C2 7.58 5.58 4 10 4Z"
          fill="#606060"
        />

        <path
          d="M19 4H28C32.42 4 36 7.58 36 12C36 16.42 32.42 20 28 20H19V4Z"
          fill="#606060"
        />

        <path
          d="M10 20H19V36H10C5.58 36 2 32.42 2 28C2 23.58 5.58 20 10 20Z"
          fill="#606060"
        />

        <circle cx="28" cy="28" r="8" fill="#606060" />

        <path
          d="M10 36H19V44C19 48.42 15.42 52 11 52H10C5.58 52 2 48.42 2 44C2 39.58 5.58 36 10 36Z"
          fill="#606060"
        />
      </svg>
    );
  }

  return (
    <svg
      width="38"
      height="31"
      viewBox="0 0 66 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Checkered flag"
      className="-rotate-[8deg]"
    >
      <path
        d="M8 37L14 10"
        stroke="#606060"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <path d="M15 10L25 7L23 17L13 20L15 10Z" fill="#606060" />
      <path d="M25 7L35 5L33 15L23 17L25 7Z" fill="#FFFFFF" />
      <path d="M35 5L45 4L44 13L33 15L35 5Z" fill="#606060" />

      <path d="M13 20L23 17L21 27L11 30L13 20Z" fill="#FFFFFF" />
      <path d="M23 17L33 15L32 25L21 27L23 17Z" fill="#606060" />
      <path d="M33 15L44 13L43 23L32 25L33 15Z" fill="#FFFFFF" />

      <path d="M11 30L21 27L19 37L9 40L11 30Z" fill="#606060" />
      <path d="M21 27L32 25L30 35L19 37L21 27Z" fill="#FFFFFF" />
      <path d="M32 25L43 23L42 33L30 35L32 25Z" fill="#606060" />
    </svg>
  );
}

function LaurelAward({ logoType }: { logoType: AwardLogoType }) {
  return (
    <div className="relative flex h-[120px] w-[150px] items-center justify-center sm:h-[128px] sm:w-[164px]">
      <img
        src="/images/garland 3.png"
        alt=""
        aria-hidden="true"
        draggable={false}
        className="absolute inset-0 block h-full w-full select-none object-contain"
      />

      <div className="relative z-10 flex items-center justify-center pt-2">
        <AwardLogo logoType={logoType} />
      </div>
    </div>
  );
}

export default function RecognitionSection() {
  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 15,
    },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as [
          number,
          number,
          number,
          number,
        ],
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as [
          number,
          number,
          number,
          number,
        ],
      },
    },
  };

  return (
    <section className="w-full bg-transparent">
      <div className="mx-auto w-full max-w-6xl px-6 pb-16 pt-6 md:px-8 md:pb-24 md:pt-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: "-100px",
          }}
          className="flex w-full flex-col items-start"
        >
          {/* Section Category */}
          <span
            className="mb-1 select-none text-[#9A9A9A]"
            style={{
              fontFamily: "Arial, Helvetica, sans-serif",
              fontSize: "16px",
              fontWeight: 500,
              textTransform: "uppercase",
            }}
          >
            RECOGNITION
          </span>

          {/* Section Heading */}
          <h2
            className="mb-12 select-none leading-tight tracking-tight text-[#111111] md:mb-16"
            style={{
              fontFamily:
                '"Stack Sans Notch", "Stack Sans Notch", system-ui, sans-serif',
              fontSize: "32px",
              fontWeight: 400,
            }}
          >
            A <span className="text-[#5C5C5C]">shelf</span> of awards.
          </h2>

          {/* Awards Grid */}
          <div className="grid w-full grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-4 md:gap-x-8">
            {AWARDS.map((award) => (
              <motion.article
                key={award.id}
                variants={itemVariants}
                className="group flex min-w-0 flex-col items-center text-center"
              >
                {/* Garland */}
                <div>
                  <LaurelAward logoType={award.logoType} />
                </div>

                {/* Award Title */}
                <h3 className="font-stack-notch mt-4 max-w-[220px] text-[15px] font-semibold leading-[1.2] tracking-[-0.01em] text-[#111111] transition-colors duration-300 group-hover:text-black md:text-[16px]">
                  {award.title}
                </h3>

                {/* Award Details */}
                <p className="mt-1 max-w-[220px] text-[12px] font-normal leading-normal text-[#767676] md:text-[13px]">
                  {award.subtitle} {award.year}
                </p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}