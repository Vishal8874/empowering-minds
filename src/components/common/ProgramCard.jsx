import { ArrowRight, CalendarDays } from "lucide-react";

export default function ProgramCard({ program }) {
  return (
    <div className="flex h-[420px] w-full flex-col overflow-hidden rounded-xl border border-[#BFD9E5] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="h-[3px] w-full bg-gradient-to-r from-[#1594C9] via-[#89A36A] to-[#D99A21]" />

      <div className="flex h-full flex-col p-3">
        <div className="rounded-lg bg-[#D9EBF5] py-2 text-center">
          <div className="text-xl">🎓</div>
        </div>

        <div className="mt-3">
          <span className="block rounded-full border border-[#BFD9E5] bg-[#EAF4F9] px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#1D84B5]">
            {program.category}
          </span>
        </div>

        <h3 className="mt-4 min-h-[72px] text-lg font-semibold leading-6 text-[#1F3E4A]">
          {program.title}
        </h3>

        <p className="mt-3 min-h-[72px] text-sm leading-6 text-[#666]">
          {program.description}
        </p>

        <div className="mt-3 min-h-[68px] space-y-1 text-sm leading-6 text-[#666]">
          <p>{program.price}</p>
          <p>{program.duration}</p>
        </div>

        <div className="my-3 border-t border-gray-200" />

        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-center gap-1 text-xs font-medium text-[#555]">
            <CalendarDays size={14} />
            {program.startDate}
          </div>

          <button className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-[#1D84B5] hover:text-[#0E6F9F]">
            View
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
