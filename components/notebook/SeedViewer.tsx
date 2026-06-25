import { NotebookPage } from "./NotebookPage";
import type { Seed } from "@/domains/notebook/types";

type SeedViewerProps = {
  seed: Seed;
};

export function SeedViewer({ seed }: SeedViewerProps) {
  return (
    <NotebookPage
      title={`${seed.symbol} ${seed.title}`}
      body={seed.body}
      truth={seed.truth}
    />
  );
}