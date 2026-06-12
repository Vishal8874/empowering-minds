import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../../data/siteContent";
import CTAButton from "../ui/CTAButton";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#B9DDED] bg-white/90 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex h-20 items-center justify-between gap-6">
          <Link to="/" className="text-2xl font-black tracking-tight text-[#082C5C]">
            Empowering Minds
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                className={({ isActive }) =>
                  `text-sm font-semibold transition ${
                    isActive ? "text-[#1594C9]" : "text-[#082C5C] hover:text-[#1594C9]"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <CTAButton to="/contact" className="px-5 py-3">
              Book a Demo
            </CTAButton>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((value) => !value)}
            className="text-[#082C5C] lg:hidden"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {mobileOpen ? (
          <div className="border-t border-[#E3EFF8] pb-6 pt-5 lg:hidden">
            <div className="space-y-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className="block text-base font-semibold text-[#082C5C]"
                >
                  {link.label}
                </NavLink>
              ))}
              <CTAButton to="/contact" className="w-full">
                Book a Demo
              </CTAButton>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
