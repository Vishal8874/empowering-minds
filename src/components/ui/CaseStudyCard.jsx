import FadeIn from "./FadeIn";

export default function CaseStudyCard({
  title,
  summary,
  outcome,
  tags = [],
  delay = 0,
}) {
  return (
    <FadeIn
      delay={delay}
      className="h-full rounded-[30px] border border-[var(--color-border)] bg-white p-5 shadow-[0_18px_45px_rgba(35,66,78,0.06)] sm:p-6"
    >
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-[var(--color-soft-accent)] px-3 py-2 text-xs font-semibold text-[var(--color-secondary)]"
          >
            {tag}
          </span>
        ))}
      </div>
      <h3 className="mt-5 text-xl font-bold tracking-tight text-[var(--color-primary)] sm:text-2xl">
        {title}
      </h3>
      <p className="mt-4 text-sm leading-7 text-slate-600">{summary}</p>
      <div className="mt-6 rounded-[24px] bg-[var(--color-primary)] p-4 text-white sm:p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-muted)]">
          Outcome
        </p>
        <p className="mt-3 text-base leading-7">{outcome}</p>
      </div>
    </FadeIn>
  );
}
