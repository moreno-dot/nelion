"use client";

import { motion } from "framer-motion";

const fireflies = [
  { left: "18%", top: "38%", delay: 0 },
  { left: "68%", top: "42%", delay: 1.4 },
  { left: "54%", top: "61%", delay: 2.8 },
  { left: "83%", top: "28%", delay: 4.2 },
  { left: "31%", top: "59%", delay: 1.9 },
];

export function Fireflies() {
  return (
    <>
      {fireflies.map((fly, index) => (
        <motion.div
          key={index}
          style={{ left: fly.left, top: fly.top }}
          animate={{
            y: [0, -18, 0],
            x: [0, 8, -5, 0],
            opacity: [0.2, 1, 0.25],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: fly.delay,
            ease: "easeInOut",
          }}
          className="absolute z-20 h-2 w-2 rounded-full bg-yellow-200 shadow-[0_0_16px_rgba(255,240,150,0.9)]"
        />
      ))}
    </>
  );
}