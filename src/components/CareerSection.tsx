"use client";

import { motion } from "framer-motion";

export default function CareerSection() {
  const smoothEase = [0.16, 1, 0.3, 1] as [number, number, number, number];

  const items = [
    {
      role: "Freelance Web & App Developer",
      period: "2025 – Present",
      logoType: "freelance",
      descriptions: [
        "Delivered 12+ freelance and personal projects, including responsive websites, mobile apps, dashboards, AI tools, and client-focused digital products.",
        "Worked with startup-based brands such as Scale100Million, Squarx, and other freelance clients, focusing on clean UI and seamless user experiences.",
        "Managed complete project lifecycles—from requirement gathering and UI development to API integration, database setup, testing, deployment, and client communication.",
        "Built and deployed projects using React.js, React Native, Expo, Next.js, Firebase, Tailwind CSS, APIs, GitHub, and Vercel."
      ]
    },
    {
      role: "AWS Intern — TechnoGrowth Software Solutions",
      period: "January 2025 – March 2025",
      logoType: "aws",
      descriptions: [
        "Gained hands-on experience with AWS services including IAM, EC2, S3, EFS, and SNS through practical cloud-based tasks.",
        "Deployed and configured a WordPress website on AWS using EC2 and server-access tools such as MobaXterm and PuTTY.",
        "Implemented IAM users, roles, permissions, and security policies to provide secure and controlled cloud access.",
        "Configured S3 for storage, EFS for shared file systems, EC2 for hosting, and SNS for notifications and alerts."
      ]
    },
    {
      role: "Web Developer Intern — BrainlyHood Technologies",
      period: "December 2024 – February 2025",
      logoType: "brainlyhood",
      descriptions: [
        "Developed a React.js dashboard to automate and display daily unit-test results for an in-development product.",
        "Designed a structured and interactive interface using React.js, HTML, CSS, and JavaScript to improve test-result visibility.",
        "Integrated APIs to fetch and update testing data dynamically, giving the team real-time access to the latest reports.",
        "Improved team collaboration by organizing daily testing reports into a clear, accessible, and easy-to-understand dashboard."
      ]
    }
  ];

  // Motion variants for stagger entry
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: smoothEase,
      }
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: smoothEase }}
      className="mx-auto mb-24 w-full max-w-6xl px-6 md:px-8 select-none"
    >
      {/* Badge Career tag */}
      <div className="">
        <span className="text-[11px] md:text-[13px] font-bold tracking-[0.08em] text-[#767676] uppercase">
          CAREER LADDER
        </span>
      </div>

      {/* Section Title */}
      <div className="mb-12">
        <h2 
          className="text-[20px] sm:text-[28px] md:text-[34px] font-normal tracking-[-0.035em] leading-[1.1] text-black"
          style={{
            fontFamily: '"Stack Sans Notch", "Stack Sans Notch", system-ui, sans-serif',
          }}
        >
          How I got <span className="font-normal text-[#767676]">here.</span>
        </h2>
      </div>

      {/* Timeline List */}
      <div className="relative">
        {items.map((item, idx) => (
          <motion.div 
            key={idx} 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="relative pl-8 md:pl-16 pb-16 last:pb-8 group/item"
          >
            {/* Timeline vertical connector line (Drawing animation) */}
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: smoothEase }}
              className="absolute left-[4px] md:left-[6px] top-[16px] bottom-0 w-[1px] bg-[#E5E5E2] origin-top" 
            />

            {/* Timeline bullet dot (Pop-in animation) */}
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.4, ease: "backOut" }}
              className="absolute left-[0px] md:left-[2px] top-[11px] w-2.5 h-2.5 rounded-full bg-black z-10 group-hover/item:scale-125 transition-transform duration-200" 
            />

            {/* Header Block: Logo, Role Title, Date Badge */}
            <motion.div 
              variants={childVariants}
              className="flex flex-wrap items-center gap-3 md:gap-4 mb-8"
            >
              {/* Custom Logo rendering */}
              {item.logoType === "freelance" && (
                <div className="flex items-center justify-center bg-gradient-to-br from-[#6366F1] to-[#4F46E5] w-12 h-12 rounded-[10px] shadow-sm text-white select-none hover:scale-105 transition-transform duration-200">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                </div>
              )}

              {item.logoType === "aws" && (
                <div className="flex items-center justify-center bg-white border border-[#EBEBEB] w-12 h-12 rounded-[10px] shadow-sm overflow-hidden p-1.5 hover:scale-105 transition-transform duration-200">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/icons/aws.png" alt="AWS" className="w-full h-full object-contain" />
                </div>
              )}

              {item.logoType === "brainlyhood" && (
                <div className="flex items-center justify-center bg-gradient-to-br from-[#F59E0B] to-[#EF4444] w-12 h-12 rounded-[10px] shadow-sm text-white select-none hover:scale-105 transition-transform duration-200">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1 .3 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                    <path d="M9 18h6" />
                    <path d="M10 22h4" />
                  </svg>
                </div>
              )}

              {/* Role Title */}
              <h3 
                className="text-[20px] md:text-[24px] font-bold text-black tracking-tight"
                style={{
                  fontFamily: '"Stack Sans Notch", "Stack Sans Notch", system-ui, sans-serif',
                }}
              >
                {item.role}
              </h3>

              {/* Date Badge */}
              <span className="px-3 py-1 bg-[#F4F4F0] border border-[#E5E5E2] rounded-full text-[12px] font-medium text-[#5C5C5C] select-none">
                {item.period}
              </span>
            </motion.div>

            {/* Descriptions Grid (4 columns, hoverable card blocks) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {item.descriptions.map((desc, dIdx) => (
                <motion.div 
                  key={dIdx} 
                  variants={childVariants}
                  className="flex flex-col p-4 -m-4 rounded-[16px] border border-transparent hover:border-[#EBEBEB] hover:bg-[#FDFCFA]/90 hover:shadow-[0_4px_12px_rgba(0,0,0,0.015)] transition-all duration-300 group/card"
                >
                  <p 
                    className="text-[14px] md:text-[15px] leading-[1.5] text-[#767676] font-normal group-hover/card:text-black transition-colors duration-300"
                    style={{
                      fontFamily: '"Stack Sans Notch", "Stack Sans Notch", system-ui, sans-serif',
                    }}
                  >
                    {desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
