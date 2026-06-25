type SeedCardProps = {
  symbol: string;
  title: string;
  onOpen: () => void;
};

export function SeedCard({
  symbol,
  title,
  onOpen,
}: SeedCardProps) {
  return (
    <button
      onClick={onOpen}
      className="w-full rounded-2xl border border-[#d7a847]/30 bg-[#11150f] p-6 text-left transition hover:scale-[1.02] hover:border-[#d7a847]"
    >
      <div className="mb-3 text-4xl">{symbol}</div>

      <h3 className="text-2xl font-semibold text-[#efe0c2]">
        {title}
      </h3>

      <p className="mt-2 text-sm text-[#efe0c2]/60">
        Open Seed
      </p>
    </button>
  );
}
