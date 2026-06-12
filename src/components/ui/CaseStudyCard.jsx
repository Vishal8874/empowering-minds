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
      className="rounded-[30px] border border-[#B9DDED] bg-white p-6 shadow-[0_18px_45px_rgba(8,44,92,0.06)]"
    >
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-[#F0F8FC] px-3 py-2 text-xs font-semibold text-[#1594C9]"
          >
            {tag}
          </span>
        ))}
      </div>
      <h3 className="mt-5 text-2xl font-bold tracking-tight text-[#082C5C]">
        {title}
      </h3>
      <p className="mt-4 text-sm leading-7 text-slate-600">{summary}</p>
      <div className="mt-6 rounded-[24px] bg-[#082C5C] p-5 text-white">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8FCDFE]">
          Outcome
        </p>
        <p className="mt-3 text-base leading-7">{outcome}</p>
      </div>
    </FadeIn>
  );
}
