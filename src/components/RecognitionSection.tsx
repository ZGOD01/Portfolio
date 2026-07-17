"use client";

import { motion } from "framer-motion";

type RecognitionLogoType =
  | "figma"
  | "developer"
  | "hackathon"
  | "finalist";

interface RecognitionItem {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  logoType: RecognitionLogoType;
}

const RECOGNITIONS: RecognitionItem[] = [
  {
    id: "ui-ux-coordinator",
    title: "UI/UX Coordinator",
    subtitle: "College Technical Event",
    year: "(2025)",
    logoType: "figma",
  },
  {
    id: "college-fest-developer",
    title: "College Fest Web Developer",
    subtitle: "Technical Fest Website Team",
    year: "(2025)",
    logoType: "developer",
  },
  {
    id: "hackathon-participant",
    title: "Hackathon Participant",
    subtitle: "AI & Web Development",
    year: "(2025)",
    logoType: "hackathon",
  },
  {
    id: "project-showcase-finalist",
    title: "Project Showcase Finalist",
    subtitle: "Department Project Exhibition",
    year: "(2026)",
    logoType: "finalist",
  },
];

function RecognitionLogo({
  logoType,
}: {
  logoType: RecognitionLogoType;
}) {
  if (logoType === "figma") {
    return (
      <svg
        width="27"
        height="39"
        viewBox="0 0 38 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="UI and UX design icon"
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

  if (logoType === "developer") {
    return (
      <svg
        width="47"
        height="38"
        viewBox="0 0 64 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Web development icon"
      >
        <path
          d="M23 12L10 24L23 36"
          stroke="#606060"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M41 12L54 24L41 36"
          stroke="#606060"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M36 8L28 40"
          stroke="#606060"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (logoType === "hackathon") {
    return (
      <svg
        width="43"
        height="40"
        viewBox="0 0 64 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Hackathon icon"
        className="-rotate-[6deg]"
      >
        <path
          d="M8 45L15 11"
          stroke="#606060"
          strokeWidth="3.5"
          strokeLinecap="round"
        />

        <path d="M16 11L29 8L26 20L13 23L16 11Z" fill="#606060" />
        <path d="M29 8L42 6L40 18L26 20L29 8Z" fill="#FFFFFF" />
        <path d="M42 6L55 5L54 16L40 18L42 6Z" fill="#606060" />

        <path d="M13 23L26 20L24 32L11 35L13 23Z" fill="#FFFFFF" />
        <path d="M26 20L40 18L38 30L24 32L26 20Z" fill="#606060" />
        <path d="M40 18L54 16L52 28L38 30L40 18Z" fill="#FFFFFF" />

        <path d="M11 35L24 32L22 44L9 47L11 35Z" fill="#606060" />
        <path d="M24 32L38 30L36 42L22 44L24 32Z" fill="#FFFFFF" />
        <path d="M38 30L52 28L50 40L36 42L38 30Z" fill="#606060" />
      </svg>
    );
  }

  return (
    <svg
      width="42"
      height="42"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Project finalist icon"
    >
      <path
        d="M18 8H38V18C38 27.9411 33.5228 34 28 34C22.4772 34 18 27.9411 18 18V8Z"
        stroke="#606060"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />

      <path
        d="M18 13H10V17C10 23.0751 14.9249 28 21 28"
        stroke="#606060"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M38 13H46V17C46 23.0751 41.0751 28 35 28"
        stroke="#606060"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M28 34V42"
        stroke="#606060"
        strokeWidth="3.5"
        strokeLinecap="round"
      />

      <path
        d="M20 48H36"
        stroke="#606060"
        strokeWidth="3.5"
        strokeLinecap="round"
      />

      <path
        d="M23 42H33"
        stroke="#606060"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function LaurelRecognition({
  logoType,
}: {
  logoType: RecognitionLogoType;
}) {
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
        <RecognitionLogo logoType={logoType} />
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
              fontFamily:
                '"Stack Sans Headline", system-ui, sans-serif',
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
                '"Stack Sans Notch", system-ui, sans-serif',
              fontSize: "clamp(22px, 3.5vw, 32px)",
              fontWeight: 400,
            }}
          >
            Roles, projects and{" "}
            <span className="text-[#5C5C5C]">
              recognition.
            </span>
          </h2>

          {/* Recognition Grid */}
          <div className="grid w-full grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-4 md:gap-x-8">
            {RECOGNITIONS.map((recognition) => (
              <motion.article
                key={recognition.id}
                variants={itemVariants}
                className="group flex min-w-0 flex-col items-center text-center"
              >
                {/* Garland */}
                <LaurelRecognition
                  logoType={recognition.logoType}
                />

                {/* Recognition Title */}
                <h3
                  className="mt-4 max-w-[220px] text-[15px] font-semibold leading-[1.2] tracking-[-0.01em] text-[#111111] transition-colors duration-300 group-hover:text-black md:text-[16px]"
                  style={{
                    fontFamily:
                      '"Stack Sans Notch", system-ui, sans-serif',
                  }}
                >
                  {recognition.title}
                </h3>

                {/* Recognition Details */}
                <p
                  className="mt-1 max-w-[220px] text-[12px] font-normal leading-normal text-[#767676] md:text-[13px]"
                  style={{
                    fontFamily:
                      '"Stack Sans Notch", system-ui, sans-serif',
                  }}
                >
                  {recognition.subtitle} {recognition.year}
                </p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}