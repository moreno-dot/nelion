"use client";

import { motion } from "framer-motion";

export function Atmosphere() {
  return (
    <>
      <motion.div
        animate={{ x: ["-10%", "10%", "-10%"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 left-[-50%] z-0 h-72 w-[200%] rounded-full bg-white/5 blur-3xl"
      />

      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
    </>
  );
}