import FadeIn from "./FadeIn";

export default function ResourceCard({ title, type, description, delay = 0 }) {
  return (
    <FadeIn
      delay={delay}
      className="h-full rounded-[28px] border border-[var(--color-border)] bg-white p-5 shadow-[0_18px_45px_rgba(35,66,78,0.05)] sm:p-6"
    >
      <span className="inline-flex rounded-full bg-[var(--color-soft-accent)] px-3 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-secondary)]">
        {type}
      </span>
      <h3 className="mt-5 text-lg font-bold text-[var(--color-primary)] sm:text-xl">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
    </FadeIn>
  );
}
