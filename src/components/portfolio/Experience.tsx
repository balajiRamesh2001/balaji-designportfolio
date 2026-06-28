const timeline = [
  {
    when: "Nov 2025 — Present",
    role: "Senior UI/UX Designer",
    org: "Rupenet Technology Solutions Pvt. Ltd",
    bullets: [
      "Designing fintech products for payments, onboarding, KYC, and transaction management.",
      "Improved onboarding and payment experiences through research and usability testing.",
      "Built scalable design systems and intuitive dashboards for operational efficiency.",
      "Collaborated closely with product and engineering teams to deliver user-centered solutions.",
    ],
  },
  {
    when: "Sep 2024 — Sep 2025",
    role: "Lead UI/UX Designer",
    org: "SWITS Digital Pvt. Ltd",
    bullets: [
      "Led UX design for ATS, HRMS, and CRM enterprise platforms.",
      "Managed the complete design process from discovery to developer handoff.",
      "Improved design consistency through reusable components and design systems.",
      "Mentored designers and collaborated across agile product teams.",
    ],
  },
  {
    when: "Mar 2023 — Aug 2024",
    role: "UI/UX Designer & Graphic Designer",
    org: "SmarteHop Mobility Pvt. Ltd",
    bullets: [
      "Designed mobile and web experiences focused on engagement and usability.",
      "Improved user journeys through simplified navigation and interaction design.",
      "Created rewards and retention experiences to enhance customer engagement.",
      "Supported branding, marketing, and digital product initiatives.",
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
