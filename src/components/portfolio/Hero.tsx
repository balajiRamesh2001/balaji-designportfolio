import { InfiniteExpertiseMarquee } from "./InfiniteExpertiseMarquee";

const stats = [
  { v: "3+", l: "Years experience" },
  { v: "20+", l: "Products designed" },
  { v: "100+", l: "Screens shipped" },
  { v: "6", l: "Fintech products live" },
];


const EXPERTISE_ITEMS = [
  "Fintech",
  "SaaS",
  "Enterprise",
  "ATS",
  "HRMS",
  "Mobile Apps",
  "Payments",
  "Investing",
  "Wealth Management",
  "Design Systems",
  "Product Design",
  "User Experience",
  "Admin Dashboards",
  "Analytics",
  "Automation",
  "Recruitment Platforms",
  "B2B Products",
  "Mobile Banking",
  "Enterprise Platforms",
  "Growth-Focused Design",
];

export function Hero() {
  return (
    <section id="top" className="relative pt-25 pb-15 md:pt-22 md:pb-15 overflow-hidden">
      <div className="aurora-bg" />
      <div className="absolute inset-0 grid-bg -z-10" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal text-center max-w-5xl mx-auto">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted-foreground glass rounded-full px-4 py-1.5">
            <span className="size-1.5 rounded-full bg-primary pulse-ring" />
            UI/UX DESIGNER • FINTECH & ENTERPRISE SAAS
          </span>
          <h1 className="font-display font-medium text-4xl sm:text-5xl md:text-6xl0 lg:text-[5rem] leading-[0.95] mt-6 text-balance">
            Designing products that <span className="text-gradient">scale businesses</span> and delight users.
          </h1>
          <p className="text-base md:text-lg text-muted-foreground mt-6 max-w-2xl mx-auto leading-relaxed">
            Iam Balaji UI/UX Designer with 3+ years of experience crafting fintech, SaaS, and mobile products that simplify complex user journeys and drive business growth.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <a href="#work"
              className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium magnetic shadow-glow hover:opacity-90 transition">
              View case studies
            </a>
            <a href="#contact"
              className="px-6 py-3 rounded-full glass magnetic hover:bg-white/10 transition">
              Contact me
            </a>
          </div>
        </div>

        <dl className="reveal mt-14 grid grid-cols-2 md:grid-cols-4 gap-px rounded-3xl overflow-hidden glass">
          {stats.map((s) => (
            <div key={s.l} className="p-6 md:p-8 bg-background/40">
              <dd className="font-display text-4xl md:text-5xl text-gradient text-center">{s.v}</dd>
              <dt className="text-xs uppercase tracking-widest text-muted-foreground mt-2 text-center">{s.l}</dt>
            </div>
          ))}
        </dl>
      </div>

      <div className="pt-15">
        <InfiniteExpertiseMarquee items={EXPERTISE_ITEMS} speed={75} direction="left" pauseOnHover />
      </div>

    </section>
  );
}
