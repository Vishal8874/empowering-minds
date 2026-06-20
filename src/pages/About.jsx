import { aboutContent, trainerProfile } from "../data/siteContent";
import CTASection from "../components/ui/CTASection";
import FadeIn from "../components/ui/FadeIn";
import PageHero from "../components/ui/PageHero";
import SectionHeader from "../components/ui/SectionHeader";

export default function About() {
  return (
    <main>
      <PageHero
        eyebrow="About"
        title={aboutContent.heroTitle}
        description={aboutContent.heroText}
      />

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <FadeIn className="overflow-hidden rounded-[36px] border border-[var(--color-border)]">
            <img
              src={trainerProfile.image}
              alt={trainerProfile.name}
              className="h-[350px] min-h-[220px] w-full object-cover"
            />
          </FadeIn>
          <FadeIn delay={0.08}>
            <SectionHeader
              eyebrow="Founder / Trainer"
              title={trainerProfile.name}
              description={trainerProfile.intro}
            />
            <p className="mt-6 text-base leading-8 text-slate-600">
              {trainerProfile.bio}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            <FadeIn className="rounded-[30px] border border-[var(--color-border)] bg-[var(--color-background)] p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-secondary)]">
                Vision
              </p>
              <p className="mt-5 text-lg leading-7 text-[var(--color-primary)] sm:text-xl sm:leading-8">{aboutContent.vision}</p>
            </FadeIn>
            <FadeIn delay={0.08} className="rounded-[30px] border border-[var(--color-border)] bg-[var(--color-background)] p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-secondary)]">
                Mission
              </p>
              <p className="mt-5 text-lg leading-7 text-[var(--color-primary)] sm:text-xl sm:leading-8">{aboutContent.mission}</p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Our Story" title="Why Empowering Minds began" description={aboutContent.story} />
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <SectionHeader eyebrow="Core Values" title="The principles that shape our work" />
              <div className="mt-8 grid gap-4">
                {aboutContent.values.map((value, index) => (
                  <FadeIn
                    key={value}
                    delay={index * 0.06}
                    className="rounded-[24px] border border-[var(--color-border)] bg-white p-5 shadow-sm"
                  >
                    {value}
                  </FadeIn>
                ))}
              </div>
            </div>
            <div>
              <SectionHeader eyebrow="Why Empowering Minds" title="A trusted partner for meaningful development" />
              <div className="mt-8 grid gap-4">
                {aboutContent.reasons.map((reason, index) => (
                  <FadeIn
                    key={reason}
                    delay={index * 0.06}
                    className="rounded-[24px] border border-[var(--color-border)] bg-[var(--color-background)] p-5 shadow-sm"
                  >
                    {reason}
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Letâ€™s create a development journey that fits your audience."
        description="Talk to us about workshops, leadership labs, institutional growth interventions, or customized learning experiences."
      />
    </main>
  );
}
