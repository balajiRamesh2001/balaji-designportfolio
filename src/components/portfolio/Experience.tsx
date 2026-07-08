const timeline = [
  {
    when: "Nov 2025 — Present",
    role: "UI/UX Designer",
    org: "Rupenet Technology Solutions Pvt. Ltd",
    bullets: [
      "Redesigned customer and merchant onboarding flows, reducing onboarding drop-off by 15%.",
      "Designed payment workflows for UPI, AEPS, and IMPS transactions.",
      "Created operational dashboards for transaction monitoring and management.",
      "Built reusable Figma components and a scalable design system.",
      "Collaborated with compliance, product, and engineering teams throughout the product lifecycle.",
    ],
  },
  {
    when: "Sep 2024 — Sep 2025",
    role: "UI/UX Designer",
    org: "SWITS Digital Pvt. Ltd",
    bullets: [
      "Designed recruiter workflows for ATS, including job creation, candidate pipelines, interview scheduling, and offer approvals.",
      "Designed HRMS modules for employee onboarding, attendance, payroll, leave, and performance management.",
      "Improved user engagement by 15% through usability-driven workflow redesigns.",
      "Designed CRM dashboards for lead management and sales tracking.",
      "Worked closely with product managers and developers during sprint planning and implementation.",
    ],
  },
  {
    when: "Aug 2023 — Sep 2024",
    role: "UI/UX Designer & Graphic Designer",
    org: "SmarteHop Mobility Pvt. Ltd",
    bullets: [
      "Designed mobile onboarding flows and core user journeys.",
      "Improved navigation and usability through user research and testing.",
      "Created responsive websites and marketing assets supporting product launches.",
      "Collaborated with cross-functional teams to improve engagement and user experience.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-16 md:py-18 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal mb-16 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.25em] text-primary mb-4">Experience</p>
          <h2 className="font-display text-4xl md:text-6xl text-balance">
            Three years. Multiple domains. <span className="text-gradient">One design mindset</span>.
          </h2>
        </div>

        <ol className="relative space-y-10">
          {timeline.map((t) => (
            <li key={t.role} className="reveal grid md:grid-cols-12 gap-6 glass rounded-3xl p-6 md:p-8 magnetic">
              <div className="md:col-span-3">
                <p className="text-xs uppercase tracking-widest text-muted-foreground">{t.when}</p>
                <p className="text-primary text-sm mt-2">{t.org}</p>
              </div>
              <div className="md:col-span-9">
                <h3 className="font-display text-2xl md:text-3xl">{t.role}</h3>
                <ul className="mt-4 space-y-2">
                  {t.bullets.map((b) => (
                    <li key={b} className="text-muted-foreground flex gap-3">
                      <span className="mt-2 size-1.5 rounded-full bg-primary shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
