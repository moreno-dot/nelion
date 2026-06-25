"use client";

import { useState } from "react";
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
      <Atmosphere />
      <Moon />
      <Fireflies />

      <section className="relative z-10 flex flex-col items-center text-center">
        <h1 className="font-serif text-7xl tracking-[0.15em]">NELION</h1>

        <p className="mt-6 text-xl italic text-[#efe0c2]/70">
          Every forest begins with one possibility.
        </p>

        {!isNotebookOpen && <Acorn onOpen={() => setIsNotebookOpen(true)} />}

        {isNotebookOpen && (
          <div className="mt-12 max-w-2xl">
            <NotebookFrame
              seed={firstSeed}
              onClose={() => setIsNotebookOpen(false)}
            />
          </div>
        )}
      </section>
    </main>
  );
}