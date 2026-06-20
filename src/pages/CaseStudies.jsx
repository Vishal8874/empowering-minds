import { caseStudies } from "../data/siteContent";
import CTASection from "../components/ui/CTASection";
import CaseStudyCard from "../components/ui/CaseStudyCard";
import FadeIn from "../components/ui/FadeIn";
import PageHero from "../components/ui/PageHero";
import SectionHeader from "../components/ui/SectionHeader";

export default function CaseStudies() {
  return (
    <main>
      <PageHero
        eyebrow="Case Studies"
        title="Transformation stories backed by clear outcomes"
        description="Explore how learning interventions have strengthened confidence, capability, and institutional or team performance."
      />

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Featured Transformations"
            title="Card-based snapshots of measurable change"
            description="Preview selected stories across leadership, institutional development, and student transformation."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((study, index) => (
              <CaseStudyCard key={study.title} {...study} delay={index * 0.06} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
            <FadeIn className="rounded-tl-[48px] rounded-br-[48px] border border-[var(--color-border)] bg-[var(--color-background)] p-5 sm:p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-secondary)]">
                Success Stories
              </p>
              <p className="mt-5 text-base leading-8 text-slate-600">
                Leadership labs, faculty development pathways, and student readiness
                programs built around specific outcomes and lasting ownership.
              </p>
            </FadeIn>
            <FadeIn delay={0.08} className="rounded-tl-[48px] rounded-br-[48px] border border-[var(--color-border)] bg-[var(--color-background)] p-5 sm:p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-secondary)]">
                Outcomes & Results
              </p>
              <p className="mt-5 text-base leading-8 text-slate-600">
                Engagement improvement, stronger confidence, better communication,
                and clearer leadership behavior shifts across audiences.
              </p>
            </FadeIn>
            <FadeIn delay={0.16} className="rounded-tl-[48px] rounded-br-[48px] border border-[var(--color-border)] bg-[var(--color-background)] p-5 sm:p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-secondary)]">
                Engagement Model
              </p>
              <p className="mt-5 text-base leading-8 text-slate-600">
                Discovery, design, delivery, reflection, and measurable follow-through
                are built into every intervention.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to create your own transformation story?"
        description="Letâ€™s shape a development initiative around the outcomes that matter most to your team or institution."
      />
    </main>
  );
}
