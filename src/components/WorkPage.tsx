"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";

/* ─────────────────────────────────────────────
   Maple-leaf SVG icon (gradient, reused style)
 ───────────────────────────────────────────── */
function MapleIcon({ id }: { id: string }) {
  return (
    <svg
      viewBox="0 0 109.35 122.88"
      className="h-[12px] w-[11px] shrink-0"
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

const smoothEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

/* ─────────────────────────────────────────────
   Project type definitions
 ───────────────────────────────────────────── */
type Category = "all" | "case-study" | "landing";

interface Project {
  id: string;
  name: string;
  description: string;
  image: string;
  imageAlt: string;
  category: Category[];
  role: string;
  market: string;
  tags: string[];
  href: string;
}

const PROJECTS: Project[] = [
  {
    id: "sppu-notes",
    name: "SPPU Notes",
    description:
      "A cross-platform mobile application built for engineering students to easily access structured academic notes and course materials. Features a fluid 5-step guided navigation browsing flow, secure Firebase database authentication, and a file-management admin dashboard.",
    image: "/images/banner.PNG",
    imageAlt: "SPPU Notes App Screen Preview",
    category: ["all", "case-study"],
    role: "Lead Developer & Designer",
    market: "Education / Students",
    tags: ["CASE STUDY", "REACT NATIVE", "FIREBASE", "EXPO"],
    href: "https://github.com/ZGOD01/SPPU-Notes-App",
  },
  {
    id: "sketch-to-design",
    name: "S2C",
    description:
      "AI-powered tool that converts sketches, wireframes, and visual ideas into responsive HTML/CSS code.",
    image: "/images/non text banner.png",
    imageAlt: "Sketch to Design UI Preview",
    category: ["all", "case-study"],
    role: "Lead Developer",
    market: "AI & Developer Tools",
    tags: ["AI", "LANDING", "CONVEX"],
    href: "https://sketch-to-design-ai-saa-s.vercel.app/",
  },
  {
    id: "clothify",
    name: "Clothifyy",
    description:
      "AI-powered virtual wardrobe app that helps users manage clothes and get outfit suggestions.",
    image: "/images/Clothify banner.PNG",
    imageAlt: "Clothifyy App Screen Preview",
    category: ["all", "landing"],
    role: "Full-Stack Developer",
    market: "Fashion & Lifestyle (B2C)",
    tags: ["AI STYLING", "REACT NATIVE", "APPLICATION"],
    href: "https://github.com/ZGOD01/Clothifyy",
  },
  {
    id: "repwise",
    name: "Repwise",
    description:
      "Fitness tracking mobile application for logging workouts, exercise sets, reps, and sessions.",
    image: "/images/Repwise Banner.png",
    imageAlt: "Repwise App Preview",
    category: ["all", "landing"],
    role: "Lead Developer",
    market: "Health & Fitness",
    tags: ["LOCAL STORAGE", "EXPO", "APPLICATION"],
    href: "https://github.com/ZGOD01/RepWise",
  },
];

const countAll = PROJECTS.length;
const countCaseStudy = PROJECTS.filter((p) => p.category.includes("case-study")).length;
const countLanding = PROJECTS.filter((p) => p.category.includes("landing")).length;

/* ─────────────────────────────────────────────
   Featured split card layout (SPPU)
 ───────────────────────────────────────────── */
function FeaturedCard({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.8, ease: smoothEase }}
      className="w-full bg-white border border-[#E5E5E2] rounded-[24px] p-6 md:p-8 flex flex-col lg:flex-row gap-8 lg:gap-12 hover:shadow-[0_12px_45px_rgba(0,0,0,0.03)] transition-all duration-300"
    >
      {/* Left side: Info & Meta */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          {/* Title and Featured Badge */}
          <div className="flex items-center gap-4 flex-wrap">
            <h2
              className="text-[28px] md:text-[36px] font-bold text-black tracking-tight"
              style={{ fontFamily: '"Stack Sans Notch", system-ui, sans-serif' }}
            >
              {project.name}
              <span className="text-[#E83A3A]">.</span>
            </h2>
            <span className="inline-flex items-center gap-1.5 bg-[#FFF0EF] text-[#E83A3A] font-bold text-[11px] uppercase tracking-wider px-3.5 py-1 rounded-full border border-[#FFF0EF]">
              <MapleIcon id={`leaf-${project.id}`} />
              Featured
            </span>
          </div>

          {/* Description */}
          <p className="text-[14.5px] leading-[1.65] text-[#5C5C5C] font-normal my-6" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
            {project.description}
          </p>
        </div>

        {/* Metadata Table */}
        <div className="border-t border-[#E5E5E2] mt-auto">
          {/* Row 1: ROLE */}
          <div className="flex items-center py-4 border-b border-[#E5E5E2] text-[13.5px] font-normal">
            <span className="w-[100px] shrink-0 font-bold tracking-wider text-[#A4A4A4] text-[11px] uppercase">
              ROLE
            </span>
            <span className="text-[#111111] font-medium" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
              {project.role}
            </span>
          </div>

          {/* Row 2: MARKET */}
          <div className="flex items-center py-4 border-b border-[#E5E5E2] text-[13.5px] font-normal">
            <span className="w-[100px] shrink-0 font-bold tracking-wider text-[#A4A4A4] text-[11px] uppercase">
              MARKET
            </span>
            <span className="text-[#111111] font-medium" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
              {project.market}
            </span>
          </div>

          {/* Row 3: TAGS */}
          <div className="flex items-center py-4 text-[13.5px] font-normal">
            <span className="w-[100px] shrink-0 font-bold tracking-wider text-[#A4A4A4] text-[11px] uppercase">
              TAGS
            </span>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-[#F7F7F7] text-[#555555] rounded-[6px] px-2.5 py-1 text-[11px] font-bold border border-[#E5E5E5] tracking-wide"
                  style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* View Project CTA */}
        <div className="mt-6">
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-[46px] items-center justify-center gap-2 rounded-[12px] bg-[#151515] hover:bg-[#2D2D2D] hover:shadow-md text-white text-[14px] font-semibold transition-all px-6 active:scale-[0.98]"
            style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
          >
            <span>View Project</span>
            <ExternalLink size={13} strokeWidth={2.5} />
          </a>
        </div>
      </div>

      {/* Right side: Mockup Image */}
      <div className="w-full lg:w-[44%] shrink-0 rounded-[18px] overflow-hidden border border-[#E5E5E2] bg-white relative aspect-[4/3] lg:aspect-square flex items-center justify-center">
        <img
          src={project.image}
          alt={project.imageAlt}
          className="w-full h-full object-contain p-2"
        />
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   3-column Grid project card (image inside, text outside)
 ───────────────────────────────────────────── */
function GridColCard({ project, isListMode }: { project: Project; isListMode?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: smoothEase }}
      className="flex flex-col"
    >
      {/* Image box (only image inside) */}
      <div className={`w-full rounded-[16px] overflow-hidden border border-[#E5E5E2] bg-white relative group hover:shadow-md transition-all duration-300 flex items-center justify-center ${isListMode ? "aspect-[4/3] md:aspect-[16/7]" : "aspect-[4/3]"
        }`}>
        <img
          src={project.image}
          alt={project.imageAlt}
          className="w-full h-full object-contain p-2"
        />
      </div>
      {/* Info below box */}
      <div className="mt-5 flex flex-col">
        <div className="flex items-center justify-between">
          <h3 className="text-[22px] font-bold text-black tracking-tight" style={{ fontFamily: "system-ui, sans-serif" }}>
            {project.name}<span className="text-[#E83A3A]">.</span>
          </h3>
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#767676] hover:text-black transition-colors"
          >
            <ExternalLink size={14} />
          </a>
        </div>

        {/* Description */}
        <p className="text-[14.5px] leading-[1.5] text-[#5C5C5C] font-normal mt-2.5" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
          {project.description}
        </p>

        {/* Badges */}
        <div className="flex flex-nowrap gap-2 mt-4 whitespace-nowrap overflow-x-auto scrollbar-none">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-block bg-white text-[#767676] rounded-[6px] px-2.5 py-1 text-[11px] font-bold border border-[#E5E5E2] uppercase tracking-wide"
              style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Horizontal list card (List view mode)
 ───────────────────────────────────────────── */
function ListCardRow({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.5, ease: smoothEase }}
      className="w-full py-6 border-b border-[#E5E5E2] flex flex-row items-start gap-4 sm:gap-6"
    >
      {/* Left image box */}
      <div className="w-[100px] h-[75px] sm:w-[140px] sm:h-[95px] shrink-0 rounded-[12px] overflow-hidden border border-[#E5E5E2] bg-white flex items-center justify-center">
        <img
          src={project.image}
          alt={project.imageAlt}
          className="w-full h-full object-contain p-1.5"
        />
      </div>

      {/* Info & Badges */}
      <div className="flex-1 flex flex-col md:flex-row md:items-center justify-between gap-4 w-full">
        {/* Title & Description */}
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-3">
            <h3 className="text-[20px] font-bold text-black tracking-tight" style={{ fontFamily: "system-ui, sans-serif" }}>
              {project.name}<span className="text-[#E83A3A]">.</span>
            </h3>
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#767676] hover:text-black transition-colors"
            >
              <ExternalLink size={13} />
            </a>
          </div>
          <p className="text-[14px] text-[#5C5C5C] font-normal mt-1.5 font-sans leading-normal" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
            {project.description}
          </p>
        </div>

        {/* Badges block */}
        <div className="flex flex-nowrap items-center gap-2 whitespace-nowrap shrink-0 overflow-x-auto scrollbar-none max-w-full">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-block bg-white text-[#767676] rounded-[6px] px-2.5 py-1 text-[11px] font-bold border border-[#E5E5E2] uppercase tracking-wide"
              style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Main WorkPage component
 ───────────────────────────────────────────── */
export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState<Category>("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Determine list of displayed projects
  const filtered = PROJECTS.filter((p) => p.category.includes(activeFilter));

  const filterTabs: { label: string; value: Category; count: number }[] = [
    { label: "All", value: "all", count: countAll },
    { label: "Case studies", value: "case-study", count: countCaseStudy },
    { label: "Landing", value: "landing", count: countLanding },
  ];

  return (
    <main className="flex min-h-screen w-full flex-col bg-white pt-24 sm:pt-28 md:pt-32 select-none">
      {/* ── WORKS badge ── */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: smoothEase }}
        className="mb-2 flex items-center justify-center gap-2"
      >
        <span
          className="text-[13px] font-bold uppercase text-[#767676] tracking-[0.08em]"
          style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
        >
          MY WORKS
        </span>
      </motion.div>

      {/* ── Main headline ── */}
      <motion.h1
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.08, ease: smoothEase }}
        className="mx-auto mb-10 w-full max-w-4xl px-6 text-center leading-[1.1] tracking-[-0.04em] text-[#5C5C5C] md:px-8"
        style={{
          fontFamily: '"Stack Sans Notch", system-ui, sans-serif',
          fontSize: "clamp(30px, 4vw, 52px)",
          fontWeight: 400,
        }}
      >
        crafting the <span className="text-black italic">finest</span> of all.
      </motion.h1>

      {/* ── Dynamic Filter bar (Exactly as screenshot) ── */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.16, ease: smoothEase }}
        className="mx-auto mb-14 flex w-full max-w-5xl items-center justify-between gap-4 px-6 md:px-8 flex-wrap"
      >
        {/* Filter tabs */}
        <div className="flex items-center gap-1 rounded-[16px] bg-[#FAF9F6]/50 border border-[#E5E5E2] p-1.5 shadow-sm">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.value;
            return (
              <button
                key={tab.value}
                id={`work-filter-${tab.value}`}
                onClick={() => setActiveFilter(tab.value)}
                className={`flex items-center gap-1.5 sm:gap-2 rounded-[12px] px-2 sm:px-4 py-1.5 sm:py-2 text-[12px] sm:text-[13.5px] font-semibold transition-all duration-200 cursor-pointer select-none ${isActive
                  ? "bg-[#111111] text-white shadow-sm"
                  : "text-[#5C5C5C] hover:bg-[#FAF9F6]"
                  }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`inline-flex h-[18px] min-w-[20px] items-center justify-center rounded-[6px] px-1.5 text-[10px] font-bold ${isActive
                    ? "bg-[#E83A3A] text-white"
                    : "bg-[#EAEAEA] text-[#767676]"
                    }`}
                >
                  {String(tab.count).padStart(2, "0")}
                </span>
              </button>
            );
          })}
        </div>

        {/* Right side: count + view modes */}
        <div className="flex items-center gap-4 ml-auto">
          <span
            className="text-[13.5px] text-[#5C5C5C] font-normal select-none"
            style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
          >
            <strong className="text-black font-bold">{filtered.length}</strong> shown
          </span>

          {/* View mode toggle button box */}
          <div className="flex items-center gap-1 rounded-[12px] bg-white border border-[#E5E5E2] p-[4px] shadow-sm">
            <button
              onClick={() => setViewMode("grid")}
              className={`flex items-center justify-center rounded-[8px] p-2 transition-all duration-200 cursor-pointer ${viewMode === "grid"
                ? "bg-[#E83A3A] text-white shadow-sm"
                : "text-[#767676] hover:bg-[#F5F5F5]"
                }`}
              title="Grid view"
            >
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
              </svg>
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`flex items-center justify-center rounded-[8px] p-2 transition-all duration-200 cursor-pointer ${viewMode === "list"
                ? "bg-[#E83A3A] text-white shadow-sm"
                : "text-[#767676] hover:bg-[#F5F5F5]"
                }`}
              title="List view"
            >
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </motion.div>

      {/* ── PROJECTS LIST / GRID CONTAINER ── */}
      <div className="mx-auto w-full max-w-5xl px-6 pb-24 md:px-8 flex flex-col gap-16">
        {/* FEATURED: SPPU Notes (always rendered on top, always as FeaturedCard, if matches filter) */}
        {filtered.some((p) => p.id === "sppu-notes") && (
          <FeaturedCard project={PROJECTS.find((p) => p.id === "sppu-notes")!} />
        )}

        {/* Other projects section (with dynamic grid/list switch) */}
        {filtered.some((p) => p.id !== "sppu-notes") && (
          <div className="flex flex-col gap-10">
            <div className="w-full border-t border-[#E5E5E2] pt-8">
              <span className="text-[11px] font-bold text-[#A4A4A4] uppercase tracking-[0.15em]" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                OTHER PROJECTS
              </span>
            </div>

            <AnimatePresence mode="wait">
              {viewMode === "grid" ? (
                <motion.div
                  key="grid-view"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                  {filtered
                    .filter((p) => p.id !== "sppu-notes")
                    .map((p) => (
                      <GridColCard key={p.id} project={p} />
                    ))}
                </motion.div>
              ) : (
                <motion.div
                  key="list-view"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-2"
                >
                  {filtered
                    .filter((p) => p.id !== "sppu-notes")
                    .map((p) => (
                      <ListCardRow key={p.id} project={p} />
                    ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>

      {/* ── How I Work (Process in brief) Section ── */}
      <div className="w-full bg-white py-20 border-t border-[#E5E5E2] mt-auto text-left">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-12">
          {/* Header */}
          <div className="mb-12">
            <span
              className="text-[12px] font-bold text-[#767676] uppercase tracking-[0.15em] mb-2 block"
              style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            >
              HOW I WORK
            </span>
            <h2
              className="text-[26px] sm:text-[32px] md:text-[44px] font-normal leading-[1.1] tracking-tight text-black"
              style={{ fontFamily: '"Stack Sans Notch", system-ui, sans-serif' }}
            >
              The process, <span className="text-[#767676] font-light">in brief.</span>
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-5">
            {/* Step 1 */}
            <div className="bg-white border border-[#E5E5E2] rounded-[16px] p-5 flex flex-col justify-start hover:shadow-md transition-all duration-300">
              <div className="inline-flex w-[32px] h-[24px] items-center justify-center rounded-[6px] bg-[#FFF0EF] text-[#E83A3A] font-bold text-[12px] mb-5 select-none">
                01
              </div>
              <h3 className="text-[24px] font-normal text-black tracking-tight mb-2.5" style={{
                fontFamily: '"Stack Sans Notch", system-ui, sans-serif',
              }}>
                Listen
              </h3>
              <p className="text-[16px] text-[#5C5C5C] leading-[1.6] font-normal" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                Every project starts with good conversations. Learn about your goals, users, challenges, & expectations.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white border border-[#E5E5E2] rounded-[16px] p-5 flex flex-col justify-start hover:shadow-md transition-all duration-300">
              <div className="inline-flex w-[32px] h-[24px] items-center justify-center rounded-[6px] bg-[#FFF0EF] text-[#E83A3A] font-bold text-[12px] mb-5 select-none">
                02
              </div>
              <h3 className="text-[24px] font-normal text-black tracking-tight mb-2.5" style={{
                fontFamily: '"Stack Sans Notch", system-ui, sans-serif',
              }}>
                Define
              </h3>
              <p className="text-[16px] text-[#5C5C5C] leading-[1.6] font-normal" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                Simplify the problem into a clear product vision, making sure every design decision supports what matters most.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white border border-[#E5E5E2] rounded-[16px] p-5 flex flex-col justify-start hover:shadow-md transition-all duration-300">
              <div className="inline-flex w-[32px] h-[24px] items-center justify-center rounded-[6px] bg-[#FFF0EF] text-[#E83A3A] font-bold text-[12px] mb-5 select-none">
                03
              </div>
              <h3 className="text-[24px] font-normal text-black tracking-tight mb-2.5" style={{
                fontFamily: '"Stack Sans Notch", system-ui, sans-serif',
              }}>
                Explore
              </h3>
              <p className="text-[16px] text-[#5C5C5C] leading-[1.6] font-normal" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                Sketch, prototype, & test multiple approaches before committing, exploring possibilities to uncover best experience.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white border border-[#E5E5E2] rounded-[16px] p-5 flex flex-col justify-start hover:shadow-md transition-all duration-300">
              <div className="inline-flex w-[32px] h-[24px] items-center justify-center rounded-[6px] bg-[#FFF0EF] text-[#E83A3A] font-bold text-[12px] mb-5 select-none">
                04
              </div>
              <h3 className="text-[24px] font-normal text-black tracking-tight mb-2.5" style={{
                fontFamily: '"Stack Sans Notch", system-ui, sans-serif',
              }}>
                Design
              </h3>
              <p className="text-[16px] text-[#5C5C5C] leading-[1.6] font-normal" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                With direction in place, craft polished interfaces, & realistic prototypes ready for collaboration & development.
              </p>
            </div>

            {/* Step 5 */}
            <div className="bg-white border border-[#E5E5E2] rounded-[16px] p-5 flex flex-col justify-start hover:shadow-md transition-all duration-300">
              <div className="inline-flex w-[32px] h-[24px] items-center justify-center rounded-[6px] bg-[#FFF0EF] text-[#E83A3A] font-bold text-[12px] mb-5 select-none">
                05
              </div>
              <h3 className="text-[24px] font-normal text-black tracking-tight mb-2.5" style={{
                fontFamily: '"Stack Sans Notch", system-ui, sans-serif',
              }}>
                Refine
              </h3>
              <p className="text-[16px] text-[#5C5C5C] leading-[1.6] font-normal" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                Fine-tune every state, & transition, ensuring the final product feels thoughtful, intuitive, & ready for launch.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
