import portrait from "@/assets/portrait.jpg";

export function About() {
  return (
    <section id="about" className="relative py-16 md:py-20 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5 reveal">
          <div className="relative rounded-3xl overflow-hidden ring-glow max-w-sm">
            <img
              src={portrait}
              alt="Portrait of Balaji R, UI/UX designer"
              loading="lazy"
              width={1024}
              height={1980}
              className="w-full aspect-4/5 object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent" />
          </div>
        </div>

        <div className="lg:col-span-7 reveal space-y-6">
          <p className="text-xs uppercase tracking-[0.25em] text-primary">About</p>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.02] text-balance">
            I design products where <span className="text-gradient">trust, clarity, and usability</span> matter most.
          </h2>
          <p className="text-[17px] text-muted-foreground leading-relaxed">
            With over 3 years of experience, I design digital products that simplify complex workflows across fintech and enterprise SaaS. My work spans KYC & merchant onboarding, payment systems, ATS, HRMS, CRM and admin dashboards, helping businesses deliver intuitive, scalable and user-focused experiences.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
           I enjoy solving complex product challenges through user research, interaction design, rapid prototyping and design systems while collaborating closely with product managers, developers and stakeholders from discovery to delivery
          </p>
          {/* <div className="grid sm:grid-cols-3 gap-4 pt-6">
            {[
              ["Product thinking", "Strategy before surface."],
              ["Growth focus", "Every screen ties to a metric."],
              ["Systems mindset", "Designs scale, don't snowflake."],
            ].map(([t, d]) => (
              <div key={t} className="glass rounded-2xl p-5">
                <p className="font-medium">{t}</p>
                <p className="text-sm text-muted-foreground mt-1">{d}</p>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
}
