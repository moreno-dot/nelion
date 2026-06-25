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
      whileHover={{ scale: 1.15, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 1 }}
      className="mt-14 text-7xl drop-shadow-[0_0_24px_rgba(215,168,71,0.45)]"
    >
      🌰
    </motion.button>
  );
}