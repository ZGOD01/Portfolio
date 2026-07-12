"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const NAV_ITEMS = ["HOME", "ABOUT", "WORKS", "RESUME", "CONTACT"];

export default function Navbar() {
  const [activeItem, setActiveItem] = useState("HOME");
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide navbar if scrolling down past 100px, show if scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: visible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
    >
      {/* Floating Pill Menu Container */}
      <nav className="flex items-center gap-[4px] p-[7px] bg-[#F5F5F5] border border-[#E5E5E5] rounded-[18px] shadow-sm select-none">
        {NAV_ITEMS.map((item) => {
          const isActive = activeItem === item;
          return (
            <button
              key={item}
              onClick={() => setActiveItem(item)}
              className="relative h-[36px] px-[20px] text-[14px] font-normal uppercase tracking-normal rounded-[10px] focus:outline-none cursor-pointer flex items-center justify-center"
            >
              {isActive && (
                <motion.span
                  layoutId="activeNavTab"
                  className="absolute inset-0 bg-[#111111] rounded-[10px]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <motion.span
                animate={{ color: isActive ? "#FFFFFF" : "#000000" }}
                transition={{ duration: 0.25 }}
                className="relative z-10"
              >
                {item}
              </motion.span>
            </button>
          );
        })}
      </nav>
    </motion.header>
  );
}
