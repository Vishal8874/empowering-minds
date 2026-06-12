import { X } from "lucide-react";

export default function ProgramModal({ program, onClose }) {
  if (!program) {
    return null;
  }

  const Icon = program.icon;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-[#082C5C]/60 px-4 py-10">
      <div className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[32px] bg-white p-8 shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-[#B9DDED] text-[#082C5C] transition hover:bg-[#F4F7FA]"
          aria-label="Close program details"
        >
          <X size={18} />
        </button>

        <div className="flex h-16 w-16 items-center justify-center rounded-[24px] bg-[#EAF7FD] text-[#1594C9]">
          <Icon size={28} />
        </div>
        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.28em] text-[#1594C9]">
          {program.category}
        </p>
        <h3 className="mt-3 text-3xl font-black tracking-tight text-[#082C5C]">
          {program.title}
        </h3>
        <p className="mt-4 text-base leading-8 text-slate-600">
          {program.description}
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-[24px] bg-[#F4F7FA] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
              Audience
            </p>
            <p className="mt-3 font-semibold text-[#082C5C]">{program.audience}</p>
          </div>
          <div className="rounded-[24px] bg-[#F4F7FA] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
              Format
            </p>
            <p className="mt-3 font-semibold text-[#082C5C]">{program.format}</p>
          </div>
          <div className="rounded-[24px] bg-[#F4F7FA] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
              Duration
            </p>
            <p className="mt-3 font-semibold text-[#082C5C]">{program.duration}</p>
          </div>
          <div className="rounded-[24px] bg-[#F4F7FA] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
              Next start
            </p>
            <p className="mt-3 font-semibold text-[#082C5C]">{program.startDate}</p>
          </div>
        </div>

        <div className="mt-8 rounded-[28px] border border-[#B9DDED] bg-[#F8FBFF] p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#1594C9]">
            Outcomes
          </p>
          <div className="mt-4 space-y-3">
            {program.outcomes.map((outcome) => (
              <p key={outcome} className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-700">
                {outcome}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
