"use client";

import { motion } from "framer-motion";

export function Moon() {
  return (
    <motion.div
      animate={{
        opacity: [0.5, 0.9, 0.5],
        scale: [1, 1.04, 1],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute left-1/2 top-16 h-28 w-28 -translate-x-1/2 rounded-full bg-[#fff2b8] blur-sm shadow-[0_0_120px_rgba(255,242,184,0.45)]"
    />
  );
}