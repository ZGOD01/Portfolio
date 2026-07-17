"use client";

import { motion } from "framer-motion";

export default function ResumeSection() {
  const smoothEase = [0.16, 1, 0.3, 1] as [number, number, number, number];

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[70vh] pt-32 pb-24 bg-white overflow-hidden w-full select-none">

      {/* Background soft pink/orange gradient glow at the bottom corners */}
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gradient-to-tr from-[#FFF8F7] to-transparent opacity-40 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-gradient-to-tl from-[#FFF8F7] to-transparent opacity-40 blur-[80px] pointer-events-none" />

      <div className="w-full max-w-6xl px-6 md:px-8 text-center flex flex-col items-center relative z-10">

        {/* Resume Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: smoothEase }}
          className="mb-4 flex items-center justify-center gap-2"
        >
          {/* Maple Leaf SVG with Linear Gradient */}
          <svg
            viewBox="0 0 109.35 122.88"
            className="h-[15.7px] w-[14px] shrink-0"
            aria-hidden="true"
          >
            <defs>
              <linearGradient
                id="resume-maple-gradient"
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
              fill="url(#resume-maple-gradient)"
              d="M55.15,85.62c1.73,11.9-0.93,21.51-8.05,31.37c-1.6,2.21-3.29,3.99-5.25,5.89c-0.01-2.63-1.69-3.76-4.22-4.34 C48.04,108.25,52.33,96.9,53.7,85.62h-2.36c-7.79-0.77-16.33,12.35-26.35,15.92c4.77-9.16-0.56-10.4-12.66-6.33 c9.05-10.8,9.93-14.79,0-13.35c5.13-3.88,9.9-6.11,14.38-7.02c-9.33-2.97-17.63-7.97-24.64-15.57c13.16-0.48,9.93-9.37-2.05-22.76 c15.93,8.01,24.33,9.02,21.73-0.17c4.71,3.18,10.75,9.27,17.11,16.09c-2.45-12.5-4.29-24.34-3.42-33.2 C41.63,28.56,48.3,19.12,54.84,0c5.51,17.44,11.43,27.12,18.92,20.08c0.97,7.76-0.07,16.06-2.74,24.81l-0.17,6.67 c6.21-6.7,12.31-13.03,17.22-15.44c-3.05,10.09,7.63,6.57,21.28,0.38c-12.92,14.44-13.94,22.06-2.57,22.59 c-4.73,7.36-13.07,11.84-22.76,15.23c4.22,1.21,8.44,3.49,12.66,7.02c-8.73-0.72-6.9,5,0.25,14.2c-10.92-3.2-16.49-2.33-13.04,6 C70.98,90.74,61.77,85.51,56.13,85.62H55.15L55.15,85.62z"
            />
          </svg>
          <span
            className="text-[16px] font-normal uppercase text-[#5C5C5C]"
            style={{
              fontFamily: '"Stack Sans Headline", system-ui, sans-serif',
            }}
          >
            RESUME
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.08,
            ease: smoothEase,
          }}
          className="mx-auto mb-4 w-full max-w-6xl select-none px-6 text-center leading-[1.1] tracking-[-0.04em] text-black md:px-8"
          style={{
            fontFamily: '"Stack Sans Notch", system-ui, sans-serif',
            fontSize: "clamp(34px, 5.5vw, 48px)",
            fontWeight: 400,
          }}
        >
          sure, let&apos;s keep it <span className="text-[#5C5C5C] font-normal">formal</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.16,
            ease: smoothEase,
          }}
          className="text-[15px] sm:text-[17px] md:text-[18px] text-[#5C5C5C] max-w-[480px] font-normal leading-[1.5] mb-6 text-center"
          style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
        >
          For recruiters, hiring managers, and anyone who prefers the short version.
        </motion.p>

        {/* Download Button */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.24,
            ease: smoothEase,
          }}
        >
          <a
            href="/resume.pdf"
            download
            className="inline-flex h-[52px] items-center justify-center gap-2.5 rounded-[14px] bg-[#151515] hover:bg-[#2D2D2D] hover:shadow-lg text-white text-[15px] font-normal transition-all px-8 cursor-pointer select-none active:scale-[0.98]"
            style={{ fontFamily: '"Stack Sans Headline", system-ui, sans-serif' }}
          >
            <span>Download</span>
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </a>
        </motion.div>

        {/* Resume Sheets (Page 1 and Page 2 one by one) */}
        <div className="w-full max-w-[850px] mt-16 flex flex-col gap-10 relative z-20">
          
          {/* Page 1 */}
          <div className="w-full bg-white border border-[#FFECEB] rounded-[16px] shadow-[0_10px_35px_rgba(242,50,44,0.04)] p-5 sm:p-10 md:p-14 text-left flex flex-col gap-8">
            
            {/* Header info */}
            <div className="flex flex-col md:flex-row justify-between items-start gap-4">
              <div className="flex flex-col">
                <h2 className="text-[30px] md:text-[38px] font-normal text-black leading-none mb-3 uppercase tracking-tight" style={{ fontFamily: '"Stack Sans Notch", system-ui, sans-serif' }}>
                  OM S GADHAVE
                </h2>
                <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-[13px] text-[#5C5C5C] font-medium" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                  <a href="http://linkedin.com/in/om-gadhave-996138335" target="_blank" rel="noopener noreferrer" className="hover:text-black flex items-center gap-1.5 transition-colors">
                    <svg viewBox="0 0 24 24" className="w-[14px] h-[14px] shrink-0" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    <span>linkedin.com/in/om-gadhave-996138335</span>
                  </a>
                  <a href="https://github.com/ZGOD01" target="_blank" rel="noopener noreferrer" className="hover:text-black flex items-center gap-1.5 transition-colors">
                    <svg viewBox="0 0 24 24" className="w-[14px] h-[14px] shrink-0" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span>github.com/ZGOD01</span>
                  </a>
                </div>
              </div>
              <div className="flex flex-col text-left md:text-right text-[13px] text-[#5C5C5C] font-medium leading-relaxed" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                <span>+91 93225 32936</span>
                <a href="mailto:zgod1549@gmail.com" className="hover:text-black transition-colors">zgod1549@gmail.com</a>
                <span>Maharashtra, India</span>
              </div>
            </div>

            {/* Separator */}
            <div className="w-full h-px bg-[#E5E5E2]" />

            {/* Education */}
            <div className="flex flex-col gap-5">
              <span className="text-[11px] font-bold text-[#A4A4A4] uppercase tracking-[0.12em]" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                EDUCATION
              </span>
              
              {/* College */}
              <div className="flex flex-col sm:flex-row justify-between items-start gap-1">
                <div>
                  <h3 className="text-[16px] md:text-[17px] font-bold text-[#111111]" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                    Parvatibai Genba Moze College of Engineering
                  </h3>
                  <p className="text-[14px] text-[#5C5C5C] font-medium mt-1" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                    Bachelor of Engineering in Artificial Intelligence and Data Science (Pune, MH)
                  </p>
                </div>
                <span className="text-[13px] text-[#A4A4A4] font-semibold tracking-wide shrink-0 mt-0.5" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                  Nov. 2022 – 2026
                </span>
              </div>

              {/* 12th */}
              <div className="flex flex-col sm:flex-row justify-between items-start gap-1 mt-2">
                <div>
                  <h3 className="text-[16px] md:text-[17px] font-bold text-[#111111]" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                    Kisan Veer Mahavidyalaya, Wai
                  </h3>
                  <p className="text-[14px] text-[#5C5C5C] font-medium mt-1" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                    Higher Secondary Certificate (12th) – 63%
                  </p>
                </div>
                <span className="text-[13px] text-[#A4A4A4] font-semibold tracking-wide shrink-0 mt-0.5" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                  2022
                </span>
              </div>

              {/* 10th */}
              <div className="flex flex-col sm:flex-row justify-between items-start gap-1 mt-2">
                <div>
                  <h3 className="text-[16px] md:text-[17px] font-bold text-[#111111]" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                    Ramesh Garware School, Wai
                  </h3>
                  <p className="text-[14px] text-[#5C5C5C] font-medium mt-1" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                    Secondary School Certificate (10th) – 86.60%
                  </p>
                </div>
                <span className="text-[13px] text-[#A4A4A4] font-semibold tracking-wide shrink-0 mt-0.5" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                  2020
                </span>
              </div>
            </div>

            {/* Separator */}
            <div className="w-full h-px bg-[#E5E5E2]" />

            {/* Experience */}
            <div className="flex flex-col gap-6">
              <span className="text-[11px] font-bold text-[#A4A4A4] uppercase tracking-[0.12em]" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                EXPERIENCE
              </span>

              {/* Item 1 */}
              <div className="flex flex-col gap-2">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-1">
                  <h3 className="text-[16px] md:text-[17px] font-bold text-[#111111]" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                    Freelance Web & App Developer
                  </h3>
                  <span className="text-[13px] text-[#A4A4A4] font-semibold tracking-wide shrink-0 mt-0.5" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                    2025 – Present
                  </span>
                </div>
                <p className="text-[14px] text-[#5C5C5C] font-medium" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                  React.js, React Native, Next.js, Firebase, APIs (Remote)
                </p>
                <ul className="list-disc pl-5 text-[13.5px] text-[#5C5C5C] font-normal leading-relaxed flex flex-col gap-1.5 mt-2" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                  <li>Delivered 12+ freelance and personal projects, including websites, mobile apps, dashboards, AI-based tools, and client-focused digital solutions.</li>
                  <li>Worked on projects for startup-based brands such as Scale100Million, Squrex, and other freelance clients with focus on clean UI and responsive design.</li>
                  <li>Built full project flows from requirement understanding, UI development, API integration, database setup, testing, deployment, and client updates.</li>
                </ul>
              </div>

              {/* Item 2 */}
              <div className="flex flex-col gap-2 mt-2">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-1">
                  <h3 className="text-[16px] md:text-[17px] font-bold text-[#111111]" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                    AWS Intern
                  </h3>
                  <span className="text-[13px] text-[#A4A4A4] font-semibold tracking-wide shrink-0 mt-0.5" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                    Jan 2025 – Mar 2025
                  </span>
                </div>
                <p className="text-[14px] text-[#5C5C5C] font-medium" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                  TechnoGrowth Software Solutions Pvt. Ltd. (Pune)
                </p>
                <ul className="list-disc pl-5 text-[13.5px] text-[#5C5C5C] font-normal leading-relaxed flex flex-col gap-1.5 mt-2" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                  <li>Gained hands-on experience with AWS services including IAM, EC2, S3, EFS, and SNS through practical cloud tasks.</li>
                  <li>Deployed a WordPress-based website on AWS and worked with server access tools like MobaXterm and PuTTY.</li>
                  <li>Implemented IAM basics including users, roles, permissions, and security policies for controlled cloud access.</li>
                </ul>
              </div>

              {/* Item 3 */}
              <div className="flex flex-col gap-2 mt-2">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-1">
                  <h3 className="text-[16px] md:text-[17px] font-bold text-[#111111]" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                    Web Developer Intern
                  </h3>
                  <span className="text-[13px] text-[#A4A4A4] font-semibold tracking-wide shrink-0 mt-0.5" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                    Dec 2024 – Feb 2025
                  </span>
                </div>
                <p className="text-[14px] text-[#5C5C5C] font-medium" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                  BrainlyHood Technologies Pvt. Ltd (Pune)
                </p>
                <ul className="list-disc pl-5 text-[13.5px] text-[#5C5C5C] font-normal leading-relaxed flex flex-col gap-1.5 mt-2" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                  <li>Developed a web-based dashboard using React.js to automate and display daily unit test results for an in-development product.</li>
                  <li>Designed an interactive and structured dashboard using React.js, HTML, CSS, and JavaScript to improve test result visibility.</li>
                </ul>
              </div>
            </div>

          </div>

          {/* Page 2 */}
          <div className="w-full bg-white border border-[#FFECEB] rounded-[16px] shadow-[0_10px_35px_rgba(242,50,44,0.04)] p-5 sm:p-10 md:p-14 text-left flex flex-col gap-8">
            
            {/* Projects */}
            <div className="flex flex-col gap-6">
              <span className="text-[11px] font-bold text-[#A4A4A4] uppercase tracking-[0.12em]" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                SELECTED PROJECTS
              </span>

              {/* Project 1 */}
              <div className="flex flex-col gap-1.5">
                <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-0.5 sm:gap-4">
                  <h3 className="text-[16px] md:text-[17px] font-bold text-[#111111]" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                    S2C / Sketch to Code (AI Code Generation Website)
                  </h3>
                  <span className="text-[12px] sm:text-[13px] text-[#A4A4A4] font-semibold shrink-0" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                    Next.js · Convex · AI SDK · March 2026
                  </span>
                </div>
                <p className="text-[13.5px] text-[#5C5C5C] leading-relaxed" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                  Converts sketches, wireframes, and visual ideas into responsive HTML/CSS. Features an infinite canvas drawing tool, multiple AI model integrations (OpenAI, Claude, Gemini, Groq), and chat-based code refinements.
                </p>
              </div>


              {/* Project 2 */}
              <div className="flex flex-col gap-1.5 mt-2">
                <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-0.5 sm:gap-4">
                  <h3 className="text-[16px] md:text-[17px] font-bold text-[#111111]" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                    SPPU Notes App (Educational Mobile Platform)
                  </h3>
                  <span className="text-[12px] sm:text-[13px] text-[#A4A4A4] font-semibold shrink-0" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                    React Native · Expo · Firebase · Moti · May 2026
                  </span>
                </div>
                <p className="text-[13.5px] text-[#5C5C5C] leading-relaxed" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                  Cross-platform mobile app for engineering students to easily access structured academic notes. Built with a fluid 5-step animated browsing flow (year, branch, subject), Firebase cloud storage, and file management tools.
                </p>
              </div>

              {/* Project 3 */}
              <div className="flex flex-col gap-1.5 mt-2">
                <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-0.5 sm:gap-4">
                  <h3 className="text-[16px] md:text-[17px] font-bold text-[#111111]" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                    Clothifyy (AI Virtual Wardrobe App)
                  </h3>
                  <span className="text-[12px] sm:text-[13px] text-[#A4A4A4] font-semibold shrink-0" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                    React Native · Expo · Firebase · OpenAI · Jan 2026
                  </span>
                </div>
                <p className="text-[13.5px] text-[#5C5C5C] leading-relaxed" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                  AI-powered virtual wardrobe helping users manage clothes and get outfit styling recommendations. Digitizes wardrobe catalogs, integrates weather-based styles, and syncs across devices with Firebase.
                </p>
              </div>

              {/* Project 4 */}
              <div className="flex flex-col gap-1.5 mt-2">
                <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-0.5 sm:gap-4">
                  <h3 className="text-[16px] md:text-[17px] font-bold text-[#111111]" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                    Repwise (Fitness Tracking Mobile App)
                  </h3>
                  <span className="text-[12px] sm:text-[13px] text-[#A4A4A4] font-semibold shrink-0" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                    React Native · Expo · AsyncStorage · Nov 2025
                  </span>
                </div>
                <p className="text-[13.5px] text-[#5C5C5C] leading-relaxed" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                  Logs workouts, exercises, sets, reps, weights, and sessions. Includes session performance histories, timer tools, body metrics charts, and offline-first storage via AsyncStorage for device privacy.
                </p>
              </div>
            </div>

            {/* Separator */}
            <div className="w-full h-px bg-[#E5E5E2]" />

            {/* Technical Practice */}
            <div className="flex flex-col gap-6">
              <span className="text-[11px] font-bold text-[#A4A4A4] uppercase tracking-[0.12em]" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                CERTIFICATIONS & TECHNICAL PRACTICE
              </span>

              {/* Practice Item 1 */}
              <div className="flex flex-col gap-1">
                <h4 className="text-[15px] md:text-[16px] font-bold text-[#111111]" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                  Machine Learning & SQL Portfolio
                </h4>
                <p className="text-[13.5px] text-[#5C5C5C] leading-relaxed" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                  Completed Machine Learning course from GeeksforGeeks and practiced ML concepts (preprocessing, model training, prediction tasks) through hands-on Jupyter notebooks. Managed structured database queries and SQL practice work published on GitHub.
                </p>
              </div>

              {/* Practice Item 2 */}
              <div className="flex flex-col gap-1 mt-2">
                <h4 className="text-[15px] md:text-[16px] font-bold text-[#111111]" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                  Applied Engineering Workflows
                </h4>
                <p className="text-[13.5px] text-[#5C5C5C] leading-relaxed" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                  Practiced frontend deployment cycles (Vercel, GitHub Pages), API integration, and collaborative peer learning via code reviews on open repository systems.
                </p>
              </div>
            </div>

            {/* Separator */}
            <div className="w-full h-px bg-[#E5E5E2]" />

            {/* Technical Skills */}
            <div className="flex flex-col gap-4">
              <span className="text-[11px] font-bold text-[#A4A4A4] uppercase tracking-[0.12em]" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                TECHNICAL SKILLS
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-2 text-[14px]" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                <div className="flex flex-col gap-1">
                  <span className="font-bold text-[#111111]">Languages</span>
                  <span className="text-[#5C5C5C]">Python, C, C++, JavaScript, SQL, HTML, CSS</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-bold text-[#111111]">Frontend Frameworks</span>
                  <span className="text-[#5C5C5C]">React.js, React Native, Expo, Next.js, Tailwind CSS, Bootstrap, Figma</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-bold text-[#111111]">Backend & Cloud</span>
                  <span className="text-[#5C5C5C]">Node.js, Express.js, MongoDB, Firebase, AWS (IAM, EC2, S3, SNS, EFS)</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-bold text-[#111111]">Tools</span>
                  <span className="text-[#5C5C5C]">Git, GitHub, Vercel, REST APIs, MySQL Workbench</span>
                </div>
              </div>
            </div>

          </div>
          
        </div>

      </div>
    </section>
  );
}
