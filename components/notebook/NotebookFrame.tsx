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
    <div className="rounded-3xl bg-[#f1dfbd] p-8 shadow-2xl">
      <SeedViewer seed={seed} />

      <button
        onClick={onClose}
        className="mt-8 rounded-xl bg-[#6f8755] px-5 py-3 font-semibold text-white transition hover:opacity-90"
      >
        Sluiten
      </button>
    </div>
  );
}
