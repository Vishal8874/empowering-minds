import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { programs } from "../../data/siteContent";
import ProgramCard from "../common/ProgramCard";

export default function ProgramsCarousel() {
  const [startIndex, setStartIndex] = useState(0);

  const visibleCards = 4;
  const maxIndex = Math.max(programs.length - visibleCards, 0);

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setStartIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  return (
    <section className="bg-[#F4F7FA] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 flex items-center justify-between">
          <div>
            <h2 className="text-4xl font-black tracking-tight text-[#082C5C] sm:text-5xl">
              Trending & New Launch Programs
            </h2>
          </div>

          <div className="flex gap-4">
            <button
              onClick={handlePrev}
              disabled={startIndex === 0}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#1594C9] text-[#1594C9] transition hover:bg-[#1594C9] hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={handleNext}
              disabled={startIndex === maxIndex}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#1594C9] text-[#1594C9] transition hover:bg-[#1594C9] hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden pt-2">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${startIndex * 25}%)`,
            }}
          >
            {programs.map((program, index) => (
              <div
                key={program.id}
                className="w-1/4 flex-shrink-0 px-3"
              >
                <ProgramCard
                  program={program}
                  delay={
                    index >= startIndex &&
                    index < startIndex + visibleCards
                      ? (index - startIndex) * 0.05
                      : 0
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
