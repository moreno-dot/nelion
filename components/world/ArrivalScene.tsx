"use client";

import { Moon } from "./Moon";
import { Fireflies } from "./Fireflies";
import { Atmosphere } from "./Atmosphere";
import { Acorn } from "./Acorn";

export function ArrivalScene() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050604] text-[#efe0c2]">

      <Atmosphere />
      <Moon />
      <Fireflies />

      <section className="relative z-10 flex flex-col items-center text-center">
        <h1 className="font-serif text-7xl tracking-[0.15em]">
          NELION
        </h1>

        <p className="mt-6 text-xl italic text-[#efe0c2]/70">
          Every forest begins with one possibility.
        </p>

        <Acorn />
      </section>

    </main>
  );
}