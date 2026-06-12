import FadeIn from "./FadeIn";

export default function ResourceCard({ title, type, description, delay = 0 }) {
  return (
    <FadeIn
      delay={delay}
      className="rounded-[28px] border border-[#B9DDED] bg-white p-6 shadow-[0_18px_45px_rgba(8,44,92,0.05)]"
    >
      <span className="inline-flex rounded-full bg-[#EAF7FD] px-3 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#1594C9]">
        {type}
      </span>
      <h3 className="mt-5 text-xl font-bold text-[#082C5C]">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
    </FadeIn>
  );
}
