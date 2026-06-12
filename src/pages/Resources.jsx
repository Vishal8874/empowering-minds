import { featuredResource, resources } from "../data/siteContent";
import CTASection from "../components/ui/CTASection";
import FadeIn from "../components/ui/FadeIn";
import PageHero from "../components/ui/PageHero";
import ResourceCard from "../components/ui/ResourceCard";
import SectionHeader from "../components/ui/SectionHeader";

export default function Resources() {
  const FeaturedIcon = featuredResource.icon;

  return (
    <main>
      <PageHero
        eyebrow="Resources"
        title="A clean library of articles, downloads, guides, and insights"
        description="Browse practical content created to support leaders, institutions, facilitators, and learners beyond the session."
      />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Featured Resources"
            title="Start with our highlighted practical tools"
            description="A blog-style layout with curated content categories for ongoing learning."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <FadeIn className="rounded-[32px] bg-[#082C5C] p-8 text-white shadow-[0_28px_70px_rgba(8,44,92,0.18)]">
              <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-white/10 text-[#8FCDFE]">
                <FeaturedIcon size={26} />
              </div>
              <h2 className="mt-6 text-3xl font-black tracking-tight">{featuredResource.title}</h2>
              <p className="mt-4 text-base leading-8 text-slate-200">
                {featuredResource.description}
              </p>
            </FadeIn>

            <div className="grid gap-6">
              {resources.map((resource, index) => (
                <ResourceCard key={resource.title} {...resource} delay={index * 0.05} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
          {["Articles", "Downloads", "Learning Guides", "Insights"].map((item, index) => (
            <FadeIn
              key={item}
              delay={index * 0.05}
              className="rounded-[28px] border border-[#B9DDED] bg-white p-6 shadow-sm"
            >
              <p className="text-xl font-bold text-[#082C5C]">{item}</p>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Clean placeholders for curated content, previews, and featured posts
                within the resource hub.
              </p>
            </FadeIn>
          ))}
        </div>
      </section>

      <CTASection
        title="Need a resource strategy to support your learning programs?"
        description="We can pair development journeys with toolkits, reflection guides, and follow-up content."
      />
    </main>
  );
}
