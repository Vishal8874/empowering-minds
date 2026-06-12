import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function CTAButton({
  to = "/contact",
  children,
  variant = "primary",
  className = "",
}) {
  const styles = {
    primary:
      "bg-[#1594C9] text-white hover:bg-[#117ba7] shadow-[0_16px_35px_rgba(21,148,201,0.22)]",
    secondary:
      "border border-[#B9DDED] bg-white text-[#082C5C] hover:bg-[#F4F7FA]",
    ghost:
      "border border-white/25 bg-white/10 text-white hover:bg-white/20",
  };

  return (
    <Link
      to={to}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition ${styles[variant]} ${className}`}
    >
      {children}
      <ArrowRight size={16} />
    </Link>
  );
}
