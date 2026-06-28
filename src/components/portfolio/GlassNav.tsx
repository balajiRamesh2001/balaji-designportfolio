import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const links = [
  { to: "/#work", label: "Work" },
  { to: "/#about", label: "About" },
  { to: "/#experience", label: "Experience" },
  { to: "/#skills", label: "Skills" },
  { to: "/#contact", label: "Contact" },
];

export function GlassNav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-4 inset-x-0 z-50 flex justify-center px-4">
      <nav
        className={`flex items-center gap-2 sm:gap-6 rounded-full transition-all duration-500
          ${scrolled ? "glass shadow-card px-3 sm:px-5 py-2" : "bg-transparent px-3 sm:px-5 py-2"}`}
      >
        <Link to="/" className="flex items-center gap-2 pl-2 pr-3">
          <span className="size-2 rounded-full bg-primary shadow-glow pulse-ring" />
          <span className="font-display font-medium tracking-tight">Balaji R</span>
        </Link>
        <ul className="hidden md:flex items-center gap-1 text-sm">
          {links.map((l) => (
            <li key={l.to}>
              <a
                href={l.to}
                className="px-3 py-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-white/5 transition"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="ml-1 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground text-sm font-medium px-4 py-2 hover:opacity-90 magnetic shadow-glow"
        >
          Let's build <span aria-hidden>→</span>
        </a>
      </nav>
    </header>
  );
}
