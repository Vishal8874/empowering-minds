import { Quote } from "lucide-react";
import FadeIn from "./FadeIn";

export default function TestimonialCard({ quote, name, role, delay = 0 }) {
  return (
    <FadeIn
      delay={delay}
      className="rounded-[28px] border border-[#B9DDED] bg-white p-7 shadow-[0_18px_45px_rgba(8,44,92,0.05)]"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-[#EAF7FD] text-[#1594C9]">
        <Quote size={20} />
      </div>
      <p className="mt-6 text-base leading-8 text-slate-700">{quote}</p>
      <div className="mt-6">
        <p className="font-bold text-[#082C5C]">{name}</p>
        <p className="text-sm text-slate-500">{role}</p>
      </div>
    </FadeIn>
  );
}
