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
    <article className="rounded-3xl bg-[#efe0c2] p-8 text-[#281e13] shadow-2xl">
      <h2 className="mb-6 text-4xl font-bold">{title}</h2>

      <p className="whitespace-pre-line text-xl leading-9">
        {body}
      </p>

      <hr className="my-8" />

      <blockquote className="border-l-4 border-[#6f8755] pl-4 italic">
        {truth}
      </blockquote>
    </article>
  );
}
