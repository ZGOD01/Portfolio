"use client";

import { motion } from "framer-motion";

const smoothEase = [0.16, 1, 0.3, 1] as [
  number,
  number,
  number,
  number,
];



export default function ProfessionalModeContent() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: -20,
      }}
      transition={{
        duration: 0.6,
        ease: smoothEase,
      }}
      className="w-full"
    >

    </motion.div>
  );
}