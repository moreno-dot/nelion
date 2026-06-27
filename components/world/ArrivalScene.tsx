"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Moon } from "./Moon";
import { Fireflies } from "./Fireflies";
import { Atmosphere } from "./Atmosphere";
import { Acorn } from "./Acorn";
import { NotebookFrame } from "@/components/notebook/NotebookFrame";
import { firstSeed } from "@/domains/notebook/loader";

export function ArrivalScene() {
  const [isNotebookOpen, setIsNotebookOpen] = useState(false);

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050604] text-[#efe0c2]">
      <motion.div
        animate={{
          scale: isNotebookOpen ? 0.985 : 1,
          filter: isNotebookOpen
            ? "blur(8px) brightness(0.42)"
            : "blur(0px) brightness(1)",
        }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <Atmosphere />
        <Moon />
        <Fireflies />

        <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
          <h1 className="font-serif text-6xl tracking-[0.15em] sm:text-7xl">
            NELION
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 italic text-[#efe0c2]/70 sm:text-xl">
            Every forest begins with one possibility.
          </p>

          {!isNotebookOpen && <Acorn onOpen={() => setIsNotebookOpen(true)} />}
        </section>
      </motion.div>

      <AnimatePresence>
        {isNotebookOpen ? (
          <>
            <motion.div
              key="notebook-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="absolute inset-0 z-20 bg-[radial-gradient(circle_at_top,rgba(255,244,221,0.08),rgba(3,3,2,0.36)_60%,rgba(0,0,0,0.5))] backdrop-blur-[2px]"
            />

            <motion.div
              key="notebook-panel"
              initial={{ opacity: 0, y: 28, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.985 }}
              transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-30 flex min-h-screen w-full items-center justify-center px-4 py-10 sm:px-8"
            >
              <NotebookFrame
                seed={firstSeed}
                onClose={() => setIsNotebookOpen(false)}
              />
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </main>
  );
}
