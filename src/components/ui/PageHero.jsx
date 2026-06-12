import CTAButton from "./CTAButton";
import FadeIn from "./FadeIn";

export default function PageHero({
  eyebrow,
  title,
  description,
  primaryCta = { label: "Talk to us", to: "/contact" },
  secondaryCta = { label: "Explore programs", to: "/programs" },
}) {
  return (
    <section className="relative overflow-hidden bg-[#082C5C] pt-32 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(21,148,201,0.45),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(143,205,254,0.2),_transparent_30%)]" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <FadeIn className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.32em] text-[#8FCDFE]">
            {eyebrow}
          </p>
          <h1 className="text-5xl font-black tracking-tight sm:text-6xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
            {description}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <CTAButton to={primaryCta.to} variant="primary">
              {primaryCta.label}
            </CTAButton>
            <CTAButton to={secondaryCta.to} variant="ghost">
              {secondaryCta.label}
            </CTAButton>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
