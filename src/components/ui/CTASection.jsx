import CTAButton from "./CTAButton";
import FadeIn from "./FadeIn";

export default function CTASection({
  title,
  description,
  primaryLabel = "Schedule a consultation",
  primaryTo = "/contact",
  secondaryLabel = "Browse programs",
  secondaryTo = "/programs",
}) {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="overflow-hidden rounded-[36px] bg-[#082C5C] px-8 py-12 text-white shadow-[0_28px_70px_rgba(8,44,92,0.18)] sm:px-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#8FCDFE]">
                Let&apos;s build what&apos;s next
              </p>
              <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                {title}
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-200">
                {description}
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <CTAButton to={primaryTo} variant="primary">
                {primaryLabel}
              </CTAButton>
              <CTAButton to={secondaryTo} variant="ghost">
                {secondaryLabel}
              </CTAButton>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
