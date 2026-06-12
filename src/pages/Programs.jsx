import { useMemo, useState } from "react";
import ProgramCard from "../components/common/ProgramCard";
import ProgramModal from "../components/sections/ProgramModal";
import CTASection from "../components/ui/CTASection";
import PageHero from "../components/ui/PageHero";
import SectionHeader from "../components/ui/SectionHeader";
import { categories, programs } from "../data/siteContent";

export default function Programs() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [selectedProgram, setSelectedProgram] = useState(null);

  const filteredPrograms = useMemo(() => {
    return programs.filter((program) => {
      const matchesCategory = category === "All" || program.category === category;
      const query = search.trim().toLowerCase();
      const matchesSearch =
        !query ||
        program.title.toLowerCase().includes(query) ||
        program.description.toLowerCase().includes(query) ||
        program.audience.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [category, search]);

  return (
    <main>
      <PageHero
        eyebrow="Programs"
        title="A professional catalogue of transformational learning journeys"
        description="Search by need, filter by category, and explore program details built for institutions, teams, and learners."
      />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Catalogue"
            title="Find the right program for your audience"
            description="Use the search and filters below to discover flagship offerings and specialist interventions."
          />

          <div className="mt-5 grid gap-4 rounded-[10px] border border-[#B9DDED] bg-white p-5 shadow-sm md:grid-cols-[1fr_auto]">
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search programs, audience, or outcomes"
              className="rounded-[10px] border border-[#D4E7F2] px-5 py-2 outline-none transition focus:border-[#1594C9]"
            />
            <select
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              className="rounded-[10px] border border-[#D4E7F2] px-5 py-3 outline-none transition focus:border-[#1594C9]"
            >
              {categories.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredPrograms.map((program, index) => (
              <ProgramCard
                key={program.id}
                program={program}
                onView={setSelectedProgram}
                delay={index * 0.05}
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Want help selecting the right learning path?"
        description="We can recommend the best-fit program or shape a tailored cohort based on your goals and audience."
      />

      <ProgramModal program={selectedProgram} onClose={() => setSelectedProgram(null)} />
    </main>
  );
}
