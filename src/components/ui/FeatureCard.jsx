import FadeIn from "./FadeIn";

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  className = "",
  delay = 0,
}) {
  return (
    <FadeIn
      delay={delay}
      className={`rounded-[28px] border border-[#B9DDED] bg-[#f9fafb] p-6 shadow-[0_18px_45px_rgba(8,44,92,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(21,148,201,0.12)] ${className}`}
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-[#EAF7FD] text-[#1594C9]">
        <Icon size={26} />
      </div>
      <h3 className="mt-5 text-xl font-bold text-[#082C5C]">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
    </FadeIn>
  );
}
