"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dumbbell,
  Timer,
  BarChart3,
  Layers,
  Zap,
  Eye,
  Star,
  Shirt,
  LayoutGrid,
  AlignJustify,
  ExternalLink,
} from "lucide-react";

/* ─────────────────────────────────────────────
   Maple-leaf SVG icon (gradient, reused style)
───────────────────────────────────────────── */
function MapleIcon({ id }: { id: string }) {
  return (
    <svg
      viewBox="0 0 109.35 122.88"
      className="h-[15.7px] w-[14px] shrink-0"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id={id}
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
        fill={`url(#${id})`}
        d="M55.15,85.62c1.73,11.9-0.93,21.51-8.05,31.37c-1.6,2.21-3.29,3.99-5.25,5.89c-0.01-2.63-1.69-3.76-4.22-4.34
        C48.04,108.25,52.33,96.9,53.7,85.62h-2.36c-7.79-0.77-16.33,12.35-26.35,15.92c4.77-9.16-0.56-10.4-12.66-6.33
        c9.05-10.8,9.93-14.79,0-13.35c5.13-3.88,9.9-6.11,14.38-7.02c-9.33-2.97-17.63-7.97-24.64-15.57
        c13.16-0.48,9.93-9.37-2.05-22.76c15.93,8.01,24.33,9.02,21.73-0.17c4.71,3.18,10.75,9.27,17.11,16.09
        c-2.45-12.5-4.29-24.34-3.42-33.2C41.63,28.56,48.3,19.12,54.84,0c5.51,17.44,11.43,27.12,18.92,20.08
        c0.97,7.76-0.07,16.06-2.74,24.81l-0.17,6.67c6.21-6.7,12.31-13.03,17.22-15.44c-3.05,10.09,7.63,6.57,21.28,0.38
        c-12.92,14.44-13.94,22.06-2.57,22.59c-4.73,7.36-13.07,11.84-22.76,15.23c4.22,1.21,8.44,3.49,12.66,7.02
        c-8.73-0.72-6.9,5,0.25,14.2c-10.92-3.2-16.49-2.33-13.04,6C70.98,90.74,61.77,85.51,56.13,85.62H55.15L55.15,85.62z"
      />
    </svg>
  );
}

/* ─────────────────────────────────────────────
   Project data
───────────────────────────────────────────── */
type Category = "all" | "case-study" | "landing";

interface Project {
  id: string;
  name: string;
  headline: string;
  description: string;
  image: string;
  imageAlt: string;
  category: Category[];
  tags: string[];
  href: string;
  theme: "navy" | "pink" | "red";
}

const PROJECTS: Project[] = [
  {
    id: "sketch-to-design",
    name: "Sketch To Design",
    headline: "Sketch Your Ideas.\nLet AI Design the Actual UI.",
    description:
      "S2C is an infinite canvas where you sketch rough wireframes, draw shapes, and let AI transform them into production-ready UI in seconds.",
    image: "/images/non text banner.png",
    imageAlt: "Sketch to Design Canvas Preview",
    category: ["all", "case-study"],
    tags: ["AI Powered", "Infinite Canvas", "Pixel-perfect UI", "No Limits"],
    href: "https://sketch-to-design-ai-saa-s.vercel.app/",
    theme: "navy",
  },
  {
    id: "clothify",
    name: "Clothify",
    headline: "Your Wardrobe,\nStyled by AI.",
    description:
      "Upload your entire wardrobe and let AI suggest outfits based on the event, climate, and lifestyle — while discovering new pieces you do not own yet.",
    image: "/images/Clothify banner.PNG",
    imageAlt: "Clothify Fashion E-Commerce Preview",
    category: ["all", "landing"],
    tags: ["Smart Outfit", "Style Discovery", "AI Matching", "Full Wardrobe"],
    href: "#",
    theme: "pink",
  },
  {
    id: "repwise",
    name: "RepWise",
    headline: "Train Smart.\nGet Stronger.",
    description:
      "RepWise is your personal fitness coach — it curates exercises by muscle group, guides every rep with proper form, auto-tracks rest time, and logs each workout day by day.",
    image: "/images/Repwise Banner.png",
    imageAlt: "RepWise Fitness App Preview",
    category: ["all", "landing"],
    tags: ["12+ Muscle Groups", "Auto Rest Timer", "365-Day Tracking", "Custom Sets"],
    href: "#",
    theme: "red",
  },
];

/* Count helpers */
const countAll = PROJECTS.length;
const countCaseStudy = PROJECTS.filter((p) => p.category.includes("case-study")).length;
const countLanding = PROJECTS.filter((p) => p.category.includes("landing")).length;

const smoothEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

/* ─────────────────────────────────────────────
   Card – Grid variant (full rich card)
───────────────────────────────────────────── */
function GridCard({ project }: { project: Project }) {
  const isNavy = project.theme === "navy";
  const isPink = project.theme === "pink";
  const isRed = project.theme === "red";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: smoothEase }}
      className={`rounded-[24px] overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
        isNavy
          ? "border border-[#3b2b8c]/30 bg-gradient-to-b from-[#2a1e69] via-[#141035] to-[#0d0b2a]"
          : isPink
          ? "border border-[#f4b8c8]/40 bg-gradient-to-br from-[#fce8ef] via-[#fbd5e0] to-[#f9c4d4]"
          : "border border-[#dc2626]/25 bg-gradient-to-br from-[#450a0a] via-[#7f1d1d] to-[#991b1b]"
      }`}
    >
      {/* Image */}
      <div className="w-full overflow-hidden">
        <img
          src={project.image}
          alt={project.imageAlt}
          className="block w-full h-auto object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3">
        {/* Badge row */}
        <div className="flex items-center gap-2 select-none">
          {isNavy && (
            <>
              <span className="font-mono text-[12px] font-semibold text-[#93c5fd] bg-[#93c5fd]/10 px-2 py-0.5 rounded-md">
                &lt;/&gt;
              </span>
              <span className="text-[11px] font-bold tracking-[0.1em] text-white uppercase">
                {project.name}
              </span>
            </>
          )}
          {isPink && (
            <>
              <span className="flex items-center justify-center text-[#c0536f] bg-[#c0536f]/10 p-1 rounded-md">
                <Shirt size={13} strokeWidth={2.2} />
              </span>
              <span className="text-[11px] font-bold tracking-[0.1em] text-[#7a1f38] uppercase">
                {project.name}
              </span>
            </>
          )}
          {isRed && (
            <>
              <span className="flex items-center justify-center text-[#fca5a5] bg-[#fca5a5]/15 p-1 rounded-md">
                <Dumbbell size={13} strokeWidth={2.2} />
              </span>
              <span className="text-[11px] font-bold tracking-[0.1em] text-[#fca5a5] uppercase">
                {project.name}
              </span>
            </>
          )}
        </div>

        {/* Headline */}
        <h3
          className={`leading-[1.25] tracking-[-0.03em] select-none font-normal text-[22px] ${
            isNavy ? "text-white" : isPink ? "text-[#3a0a18]" : "text-white"
          }`}
          style={{ fontFamily: '"Stack Sans Notch", system-ui, sans-serif' }}
        >
          {project.headline.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              {i === 0 && <br />}
            </span>
          ))}
        </h3>

        {/* Description */}
        <p
          className={`text-[13px] leading-[1.6] ${
            isNavy ? "text-[#cbd5e1]" : isPink ? "text-[#7a3048]" : "text-[#fca5a5]/75"
          }`}
        >
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 pt-0.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`inline-flex items-center gap-1 text-[11px] font-semibold rounded-full px-2.5 py-0.5 select-none border ${
                isNavy
                  ? "text-[#93c5fd] bg-[#93c5fd]/10 border-[#93c5fd]/20"
                  : isPink
                  ? "text-[#c0536f] bg-[#c0536f]/10 border-[#f4b8c8]/60"
                  : "text-[#fca5a5] bg-[#fca5a5]/10 border-[#fca5a5]/20"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`group mt-1 inline-flex items-center gap-2 self-start rounded-[10px] px-[18px] py-[10px] text-[13px] font-semibold shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 active:scale-[0.98] ${
            isNavy
              ? "bg-white text-[#0d0b2a] hover:bg-[#cbd5e1]"
              : isPink
              ? "bg-[#c0536f] text-white hover:bg-[#a83e5a]"
              : "bg-white text-[#7f1d1d] hover:bg-[#fca5a5]"
          }`}
        >
          View Project
          <ExternalLink size={12} strokeWidth={2.5} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Card – List variant (horizontal row)
───────────────────────────────────────────── */
function ListCard({ project, index }: { project: Project; index: number }) {
  const isNavy = project.theme === "navy";
  const isPink = project.theme === "pink";
  const isRed = project.theme === "red";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.5, ease: smoothEase, delay: index * 0.07 }}
      className={`group flex items-center gap-5 rounded-[18px] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg border ${
        isNavy
          ? "border-[#3b2b8c]/30 bg-gradient-to-r from-[#2a1e69] to-[#0d0b2a]"
          : isPink
          ? "border-[#f4b8c8]/40 bg-gradient-to-r from-[#fce8ef] to-[#f9c4d4]"
          : "border-[#dc2626]/25 bg-gradient-to-r from-[#450a0a] to-[#991b1b]"
      }`}
    >
      {/* Thumbnail */}
      <div className="w-[120px] h-[80px] shrink-0 rounded-[12px] overflow-hidden">
        <img
          src={project.image}
          alt={project.imageAlt}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Info */}
      <div className="flex flex-1 flex-col gap-1.5 min-w-0">
        <div className="flex items-center gap-2 select-none">
          {isNavy && (
            <span className="font-mono text-[11px] font-semibold text-[#93c5fd] bg-[#93c5fd]/10 px-2 py-0.5 rounded-md">
              &lt;/&gt;
            </span>
          )}
          {isPink && (
            <span className="flex items-center justify-center text-[#c0536f] bg-[#c0536f]/10 p-1 rounded-md">
              <Shirt size={11} strokeWidth={2.2} />
            </span>
          )}
          {isRed && (
            <span className="flex items-center justify-center text-[#fca5a5] bg-[#fca5a5]/15 p-1 rounded-md">
              <Dumbbell size={11} strokeWidth={2.2} />
            </span>
          )}
          <span
            className={`text-[11px] font-bold tracking-[0.1em] uppercase ${
              isNavy ? "text-white" : isPink ? "text-[#7a1f38]" : "text-[#fca5a5]"
            }`}
          >
            {project.name}
          </span>
        </div>

        <h3
          className={`text-[16px] leading-[1.2] tracking-[-0.02em] font-normal select-none truncate ${
            isNavy ? "text-white" : isPink ? "text-[#3a0a18]" : "text-white"
          }`}
          style={{ fontFamily: '"Stack Sans Notch", system-ui, sans-serif' }}
        >
          {project.headline.replace("\n", " ")}
        </h3>

        <p
          className={`text-[12px] leading-[1.5] line-clamp-2 ${
            isNavy ? "text-[#cbd5e1]" : isPink ? "text-[#7a3048]" : "text-[#fca5a5]/75"
          }`}
        >
          {project.description}
        </p>
      </div>

      {/* CTA */}
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`group/btn shrink-0 inline-flex items-center gap-1.5 rounded-[10px] px-[16px] py-[9px] text-[12px] font-semibold shadow-sm transition-all duration-300 hover:shadow-md active:scale-[0.98] ${
          isNavy
            ? "bg-white text-[#0d0b2a] hover:bg-[#cbd5e1]"
            : isPink
            ? "bg-[#c0536f] text-white hover:bg-[#a83e5a]"
            : "bg-white text-[#7f1d1d] hover:bg-[#fca5a5]"
        }`}
      >
        View
        <ExternalLink size={11} strokeWidth={2.5} />
      </a>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Main WorkPage component
───────────────────────────────────────────── */
export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState<Category>("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filtered = PROJECTS.filter((p) => p.category.includes(activeFilter));

  const filterTabs: { label: string; value: Category; count: number }[] = [
    { label: "All", value: "all", count: countAll },
    { label: "Case studies", value: "case-study", count: countCaseStudy },
    { label: "Landing", value: "landing", count: countLanding },
  ];

  return (
    <main className="flex min-h-screen w-full flex-col bg-white pt-16 md:pt-24">
      {/* ── WORKS badge ── */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: smoothEase }}
        className="mb-2 flex select-none items-center justify-center gap-2"
      >
        <MapleIcon id="works-maple-gradient" />
        <span
          className="text-[15px] font-bold uppercase text-[#5C5C5C]"
          style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
        >
          Works
        </span>
      </motion.div>

      {/* ── Main headline ── */}
      <motion.h1
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.08, ease: smoothEase }}
        className="mx-auto mb-8 w-full max-w-4xl select-none px-6 text-center leading-[1.1] tracking-[-0.04em] text-[#5C5C5C] md:px-8"
        style={{
          fontFamily: '"Stack Sans Notch", system-ui, sans-serif',
          fontSize: "clamp(30px, 4vw, 52px)",
          fontWeight: 400,
        }}
      >
        crafting the{" "}
        <span className="text-black italic">finest</span>{" "}
        of all.
      </motion.h1>

      {/* ── Filter bar ── */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.16, ease: smoothEase }}
        className="mx-auto mb-10 flex w-full max-w-5xl items-center justify-between gap-4 px-6 md:px-8 flex-wrap"
      >
        {/* Filter tabs */}
        <div className="flex items-center gap-1 rounded-[14px] bg-[#F0F0F0] border border-[#E5E5E5] p-[5px]">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.value;
            return (
              <button
                key={tab.value}
                id={`work-filter-${tab.value}`}
                onClick={() => setActiveFilter(tab.value)}
                className={`relative flex items-center gap-2 rounded-[10px] px-[14px] py-[7px] text-[13px] font-medium transition-all duration-200 cursor-pointer select-none ${
                  isActive
                    ? "bg-[#111111] text-white shadow-sm"
                    : "text-[#444444] hover:bg-white/70"
                }`}
              >
                {tab.label}
                <span
                  className={`inline-flex h-[18px] min-w-[20px] items-center justify-center rounded-[5px] px-1 text-[11px] font-bold ${
                    isActive
                      ? "bg-[#E83A3A] text-white"
                      : "bg-[#D8D8D8] text-[#555555]"
                  }`}
                >
                  {String(tab.count).padStart(2, "0")}
                </span>
              </button>
            );
          })}
        </div>

        {/* Right: count + view toggle */}
        <div className="flex items-center gap-3 ml-auto">
          <span
            className="text-[13px] text-[#888888] font-medium select-none"
            style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
          >
            {filtered.length} shown
          </span>

          {/* View toggle */}
          <div className="flex items-center gap-1 rounded-[10px] bg-[#F0F0F0] border border-[#E5E5E5] p-[4px]">
            <button
              id="work-view-grid"
              onClick={() => setViewMode("grid")}
              title="Grid view"
              className={`flex items-center justify-center rounded-[7px] p-[6px] transition-all duration-200 cursor-pointer ${
                viewMode === "grid"
                  ? "bg-[#E83A3A] text-white shadow-sm"
                  : "text-[#555555] hover:bg-white/70"
              }`}
            >
              <LayoutGrid size={15} strokeWidth={2} />
            </button>
            <button
              id="work-view-list"
              onClick={() => setViewMode("list")}
              title="List view"
              className={`flex items-center justify-center rounded-[7px] p-[6px] transition-all duration-200 cursor-pointer ${
                viewMode === "list"
                  ? "bg-[#111111] text-white shadow-sm"
                  : "text-[#555555] hover:bg-white/70"
              }`}
            >
              <AlignJustify size={15} strokeWidth={2} />
            </button>
          </div>
        </div>
      </motion.div>

      {/* ── Project grid / list ── */}
      <div className="mx-auto w-full max-w-5xl px-6 pb-24 md:px-8">
        <AnimatePresence mode="wait">
          {viewMode === "grid" ? (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              <AnimatePresence>
                {filtered.map((project) => (
                  <GridCard key={project.id} project={project} />
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col gap-4"
            >
              <AnimatePresence>
                {filtered.map((project, i) => (
                  <ListCard key={project.id} project={project} index={i} />
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
