type NotebookPageProps = {
  title: string;
  body: string;
  truth: string;
};

export function NotebookPage({
  title,
  body,
  truth,
}: NotebookPageProps) {
  return (
    <article className="relative overflow-hidden rounded-[2rem] border border-[#ceb98c] bg-[linear-gradient(180deg,rgba(248,238,214,0.98),rgba(236,219,186,0.98))] p-8 text-[#2f2418] shadow-[inset_0_1px_0_rgba(255,250,236,0.85),0_30px_70px_rgba(28,18,8,0.18)] sm:p-10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-6 w-px bg-[#b99d67]/35"
      />

      <div className="relative space-y-8 pl-4 sm:pl-6">
        <header className="space-y-4">
          <p className="text-xs uppercase tracking-[0.32em] text-[#7c6440]">
            Quiet Reading
          </p>

          <h2 className="font-serif text-3xl leading-tight font-semibold sm:text-4xl">
            {title}
          </h2>
        </header>

        <p className="whitespace-pre-line text-lg leading-9 text-[#3a2d1e] sm:text-[1.2rem]">
          {body}
        </p>

        <hr className="border-[#b99d67]/45" />

        <blockquote className="border-l-2 border-[#8a7350] pl-5 text-base leading-8 italic text-[#5d4a35] sm:text-lg">
          {truth}
        </blockquote>
      </div>
    </article>
  );
}
