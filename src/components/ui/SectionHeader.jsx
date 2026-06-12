import FadeIn from "./FadeIn";

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  titleClassName = "",
}) {
  const alignment = align === "center" ? "text-center mx-auto" : "";

  return (
    <FadeIn className={`max-w-3xl ${alignment}`}>
      {eyebrow ? (
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.32em] text-[#1594C9]">
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`text-4xl font-black tracking-tight text-[#082C5C] sm:text-5xl ${titleClassName}`}
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
          {description}
        </p>
      ) : null}
    </FadeIn>
  );
}
