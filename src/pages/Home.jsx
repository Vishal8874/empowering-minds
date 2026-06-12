import {
  caseStudies,
  featuredResource,
  homepageSections,
  impactStats,
  resources,
  testimonials,
  trainerProfile,
  trustedPartners,
} from "../data/siteContent";
import ProgramsCarousel from "../components/sections/ProgramsCarousel";
import CTAButton from "../components/ui/CTAButton";
import CTASection from "../components/ui/CTASection";
import CaseStudyCard from "../components/ui/CaseStudyCard";
import FeatureCard from "../components/ui/FeatureCard";
import FadeIn from "../components/ui/FadeIn";
import ResourceCard from "../components/ui/ResourceCard";
import SectionHeader from "../components/ui/SectionHeader";
import StatCard from "../components/ui/StatCard";
import TestimonialCard from "../components/ui/TestimonialCard";

const heroOverlayOpacity = 0.2;
const heroGradientOpacity = {
  from: 0.5,
  via: 0.66,
  to: 0.88,
};

export default function Home() {
  const FeaturedResourceIcon = featuredResource.icon;

  return (
    <main>
      <section
        className="relative overflow-hidden bg-[#082C5C] pt-32 text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div
          className="absolute inset-0 bg-[#082C5C]"
          style={{ opacity: 0.2 }}
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#082C5C] via-[#082C5C] to-[#082C5C]"
          style={{
            opacity: 1,
            backgroundImage: `linear-gradient(to bottom, rgba(8, 44, 92, ${heroGradientOpacity.from}), rgba(8, 44, 92, ${heroGradientOpacity.via}), rgba(8, 44, 92, ${heroGradientOpacity.to}))`,
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <FadeIn className="max-w-2xl">
              <h1 className="mt-8 text-5xl font-black tracking-tight text-white sm:text-6xl">
                Developing <span className="text-[#1594C9]">People</span>.
                <br />
                Transforming <span className="text-[#1594C9]">Institutions</span>.
              </h1>
              <p className="mt-8 max-w-xl text-base leading-8 text-slate-200 sm:text-lg">
                We help educational institutions, corporate teams, and emerging
                leaders unlock their potential through leadership development,
                human capital training, and transformational learning experiences.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <CTAButton to="/programs">Explore Programs</CTAButton>
                <CTAButton to="/contact" variant="ghost">
                  Schedule Consultation
                </CTAButton>
              </div>

              {/* <div className="mt-16 grid gap-4 sm:grid-cols-3">
                {impactStats.slice(0, 3).map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-[28px] border border-white/10 bg-white/10 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur-sm"
                  >
                    <p className="text-sm uppercase tracking-[0.25em] text-slate-200">
                      {stat.label}
                    </p>
                    <p className="mt-4 text-3xl font-bold text-white">{stat.value}</p>
                  </div>
                ))}
              </div> */}
            </FadeIn>

            {/* <FadeIn delay={0.1} className="relative">
              <div className="rounded-[32px] border border-white/15 bg-white/10 p-6 shadow-2xl shadow-[#00000030] backdrop-blur-xl sm:p-8">
                <div className="rounded-[24px] bg-white/95 p-6 shadow-sm">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#1594C9]">
                    Live cohort
                  </p>
                  <h2 className="mt-4 text-2xl font-bold text-[#082C5C]">
                    Certified Learning & Development Manager
                  </h2>
                  <p className="mt-4 text-sm leading-6 text-slate-600">
                    Modern learning strategies for HR, L&D, and executive
                    development with practical, human-centered training tools.
                  </p>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-3xl bg-[#F4F7FA] p-4 text-sm text-slate-600">
                      <p className="font-semibold text-[#082C5C]">₹29,500 + 18% GST</p>
                    </div>
                    <div className="rounded-3xl bg-[#F4F7FA] p-4 text-sm text-slate-600">
                      <p className="font-semibold text-[#082C5C]">
                        04 Weeks Live · 06 Weeks Blended
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn> */}
          </div>
        </div>
      </section>
      
      <ProgramsCarousel />


      {/* <section className="border-y border-[#DCECF5] bg-white py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-slate-500">
              Trusted by institutions and people teams
            </p>
            <div className="grid gap-4 text-sm font-semibold text-[#082C5C] sm:grid-cols-3 lg:grid-cols-6">
              {trustedPartners.map((partner) => (
                <div key={partner} className="rounded-full bg-[#F4F7FA] px-4 py-3 text-center">
                  {partner}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section> */}

      <section className="py-5 bg-[#F4F7FA]">
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="grid items-center gap-16 lg:grid-cols-2">
      
      {/* Left Side */}
      <FadeIn>
        <p className="mb-4 text-2xl font-semibold tracking-[0.3em] text-[#1594C9]">
          Who We Are
        </p>

        <p className="mt-2 text-lg leading-8 text-slate-600">
          {homepageSections.whoWeAre}
        </p>

        <h3 className="mt-2 text-2xl font-bold text-[#082C5C]">
          {homepageSections.intersectionIntro}
        </h3>

        <div className="mt-2 space-y-2">
          {homepageSections.intersectionAreas.map((item) => (
            <div
              key={item.title}
              className="flex items-center gap-4"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF4F9]">
                <item.icon className="h-5 w-5 text-[#1594C9]" />
              </div>

              <span className="text-lg font-semibold text-[#082C5C]">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </FadeIn>

      {/* Right Side - Image Only */}
      <FadeIn delay={0.1}>
        <div className="relative">
          <div className="absolute -top-6 -right-6 h-32 w-32 rounded-[10px] bg-[#8FCDFE]/30 blur-3xl" />

          <div className="overflow-hidden rounded-[15px] border border-[#B9DDED] bg-white shadow-[0_28px_70px_rgba(8,44,92,0.12)]">
            <img
  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
  alt="Empowering Minds"
  className="h-[450px] w-full object-cover"
/>
          </div>
        </div>
      </FadeIn>

    </div>
  </div>
</section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Discover Our Approach" title="Transformation that starts with clarity and ends in action" />
          <FadeIn className="mt-8 max-w-3xl">
            <p className="text-base leading-8 text-slate-600 sm:text-lg">
              {homepageSections.approachIntro}
            </p>
          </FadeIn>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {homepageSections.approachPillars.map((pillar, index) => (
              <FeatureCard
                key={pillar.title}
                icon={pillar.icon}
                title={pillar.title}
                description={pillar.description}
                delay={index * 0.06}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Testimonials"
            title="What our partners say about the experience"
            description="Stories from institutions and teams who have seen stronger confidence, alignment, and growth."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((item, index) => (
              <TestimonialCard key={item.name} {...item} delay={index * 0.08} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Impact"
            title="Measurable growth across people, programs, and partnerships"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {impactStats.map((stat, index) => (
              <StatCard key={stat.label} {...stat} delay={index * 0.06} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Case Studies"
            title="Featured transformation stories"
            description="Preview the outcomes our clients have created through targeted development interventions."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {caseStudies.map((study, index) => (
              <CaseStudyCard key={study.title} {...study} delay={index * 0.08} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Resources"
            title="Articles, downloads, and learning guides"
            description="A growing resource hub for leaders, institutions, facilitators, and learners."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <FadeIn className="rounded-[32px] bg-[#082C5C] p-8 text-white shadow-[0_28px_70px_rgba(8,44,92,0.18)]">
              <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-white/10 text-[#8FCDFE]">
                <FeaturedResourceIcon size={26} />
              </div>
              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.3em] text-[#8FCDFE]">
                Featured Resource
              </p>
              <h3 className="mt-4 text-3xl font-black tracking-tight">
                {featuredResource.title}
              </h3>
              <p className="mt-4 max-w-xl text-base leading-8 text-slate-200">
                {featuredResource.description}
              </p>
              <div className="mt-8">
                <CTAButton to="/resources" variant="ghost">
                  View Resource Library
                </CTAButton>
              </div>
            </FadeIn>
            <div className="grid gap-6">
              {resources.slice(0, 3).map((resource, index) => (
                <ResourceCard key={resource.title} {...resource} delay={index * 0.06} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to create meaningful transformation?"
        description="Whether you are developing leaders, preparing students, or strengthening institutions, we can shape a learning experience that fits your goals."
      />
    </main>
  );
}
