"use client";

import { motion } from "framer-motion";

type AcornProps = {
  onOpen?: () => void;
};

export function Acorn({ onOpen }: AcornProps) {
  return (
    <motion.button
      type="button"
      onClick={onOpen}
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.06, y: -4 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 1.4, ease: "easeOut" }}
      className="mt-14 rounded-full px-6 py-5 text-7xl text-[#f0ddb2] drop-shadow-[0_0_24px_rgba(215,168,71,0.35)] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d5bf8c]/70 focus-visible:ring-offset-4 focus-visible:ring-offset-[#050604]"
      aria-label="Open het notebook"
    >
      <span aria-hidden="true">🌰</span>
    </motion.button>
  );
}
