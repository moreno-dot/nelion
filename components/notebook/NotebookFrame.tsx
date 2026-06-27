"use client";

import { SeedViewer } from "./SeedViewer";
import type { Seed } from "@/domains/notebook/types";

type NotebookFrameProps = {
  seed: Seed;
  onClose: () => void;
};

export function NotebookFrame({
  seed,
  onClose,
}: NotebookFrameProps) {
  return (
    <div className="relative w-full max-w-3xl rounded-[2.5rem] border border-[#8f7348]/30 bg-[radial-gradient(circle_at_top,rgba(255,247,226,0.95),rgba(240,224,190,0.96)_42%,rgba(223,201,163,0.97)_100%)] p-5 shadow-[0_35px_90px_rgba(0,0,0,0.38)] sm:p-7">
      <div className="rounded-[2rem] border border-[#f7efdc]/60 bg-[#ead7b0]/40 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] sm:p-6">
        <div className="mb-6 flex items-center justify-between gap-4 px-2">
          <div className="min-w-0">
            <p className="text-xs uppercase tracking-[0.32em] text-[#7c6540]">
              {seed.chapter}
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-full border border-[#9c8359]/45 bg-[#f7efd9]/65 px-4 py-2 text-sm text-[#5c4730] transition hover:bg-[#fbf5e5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9c8359]/55"
          >
            Sluiten
          </button>
        </div>

        <SeedViewer seed={seed} />
      </div>
    </div>
  );
}
