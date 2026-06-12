import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProgramCard from "../common/ProgramCard";

const programs = [
  {
    category: "LONG TERM",
    icon: "🎓",
    title: "Human Capital Development",
    description: "Transform into a high-impact people leader with advanced strategic capabilities.",
    price: "₹89,250",
    duration: "24 Weeks Program",
    startDate: "13 June 2026",
    topAccent: "bg-gradient-to-r from-[#1594C9] to-[#8FCDFE]",
  },
  {
    category: "STRATEGIC",
    icon: "🎓",
    title: "Leadership Excellence",
    description: "Develop confident leaders capable of driving innovation and organizational growth.",
    price: "₹12,000",
    duration: "12 Weeks Program",
    startDate: "20 July 2026",
    topAccent: "bg-gradient-to-r from-[#89A36A] to-[#C0D69F]",
  },
  {
    category: "SPECIALIST",
    icon: "🤝",
    title: "Faculty Development",
    description: "Master modern teaching strategies and transformational leadership practices.",
    price: "₹29,500",
    duration: "6 Weeks Program",
    startDate: "10 August 2026",
    topAccent: "bg-gradient-to-r from-[#D99A21] to-[#F3B560]",
  },
  {
    category: "SPECIALIST",
    icon: "📘",
    title: "Instructional Design",
    description: "Create engaging, high-impact digital learning experiences for modern learners.",
    price: "₹29,500",
    duration: "6 Weeks Program",
    startDate: "10 August 2026",
    topAccent: "bg-gradient-to-r from-[#F65A8B] to-[#FF95B8]",
  },
  {
    category: "STRATEGIC",
    icon: "🧭",
    title: "Change Leadership",
    description: "Lead organizational change with confidence, clarity, and measurable outcomes.",
    price: "₹39,500",
    duration: "10 Weeks Program",
    startDate: "15 September 2026",
    topAccent: "bg-gradient-to-r from-[#1594C9] to-[#8FCDFE]",
  },
  {
    category: "LONG TERM",
    icon: "📈",
    title: "Talent Strategy",
    description: "Design future-ready people strategies that align learning, performance, and growth.",
    price: "₹49,000",
    duration: "20 Weeks Program",
    startDate: "01 October 2026",
    topAccent: "bg-gradient-to-r from-[#89A36A] to-[#C0D69F]",
  },
  {
    category: "SPECIALIST",
    icon: "💡",
    title: "Digital Learning",
    description: "Build learner-centric programs with AI-enabled tools for hybrid delivery.",
    price: "₹24,000",
    duration: "8 Weeks Program",
    startDate: "22 October 2026",
    topAccent: "bg-gradient-to-r from-[#D99A21] to-[#F3B560]",
  },
  {
    category: "SPECIALIST",
    icon: "🧠",
    title: "Executive Coaching",
    description: "Accelerate leadership impact with practical coaching and peer learning.",
    price: "₹34,500",
    duration: "12 Weeks Program",
    startDate: "05 November 2026",
    topAccent: "bg-gradient-to-r from-[#F65A8B] to-[#FF95B8]",
  },
];

export default function ProgramsSection() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCards = 4;
  const maxIndex = programs.length - visibleCards;

  const nextSlide = () => {
    setStartIndex((current) => Math.min(current + 1, maxIndex));
  };

  const prevSlide = () => {
    setStartIndex((current) => Math.max(current - 1, 0));
  };

  return (
    <section className="bg-[#F4F7FA] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#1594C9]">
              Featured learning paths
            </p>
            <h2 className="max-w-3xl text-4xl font-black tracking-tight text-[#082C5C] sm:text-5xl">
              Trending & new launch programs
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={prevSlide}
              disabled={startIndex === 0}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#1594C9] text-[#1594C9] transition hover:bg-[#1594C9] hover:text-white disabled:cursor-not-allowed disabled:border-[#A8D4ED] disabled:text-[#A8D4E9] disabled:opacity-50"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              disabled={startIndex === maxIndex}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#1594C9] text-[#1594C9] transition hover:bg-[#1594C9] hover:text-white disabled:cursor-not-allowed disabled:border-[#A8D4ED] disabled:text-[#A8D4E9] disabled:opacity-50"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="overflow-hidden rounded-[32px] border border-[#B9DDED] bg-white shadow-sm">
          <div
            className="flex gap-6 px-4 py-6 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${startIndex * 25}%)` }}
          >
            {programs.map((program, index) => (
              <div key={index} className="min-w-[25%]">
                <ProgramCard program={program} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
