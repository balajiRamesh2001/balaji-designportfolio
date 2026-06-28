const core = [
  { skill: "Product Thinking", level: 95 },
  { skill: "UX Strategy", level: 92 },
  { skill: "Interaction Design", level: 95 },
  { skill: "Design Systems", level: 90 },
  { skill: "UX Research", level: 85 },
  { skill: "Data-Driven Design", level: 88 },
  { skill: "A/B Testing", level: 80 },
  { skill: "Usability Testing", level: 88 },
  { skill: "Information Architecture", level: 90 },
  { skill: "Prototyping", level: 92 },
];

const tools = ["Figma", "FigJam", "Jira", "Framer", "Adobe Illustrator", "Adobe XD ", "Miro", "Notion", "Slack", "Canva"];

export function Skills() {
  return (
    <section id="skills" className="relative py-16 md:py-18 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4 reveal">
          <p className="text-xs uppercase tracking-[0.25em] text-primary mb-4">Capabilities</p>
          <h2 className="font-display text-4xl md:text-5xl leading-tight text-balance">
            A toolkit built for <span className="text-gradient">complex products</span>.
          </h2>
          <p className="text-muted-foreground mt-6 leading-relaxed">
            I work across the full loop — strategy, research, IA, interaction, visual, design
            systems, motion and measurement.
          </p>

          <div className="mt-10">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Tools</p>
            <div className="flex flex-wrap gap-2">
              {tools.map((t) => (
                <span key={t} className="text-sm px-3 py-1.5 rounded-full glass magnetic">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        <ul className="lg:col-span-8 grid sm:grid-cols-2 gap-4">
          {core.map((s) => (
            <li key={s.skill} className="reveal glass rounded-2xl p-5 magnetic">
              <div className="flex items-center justify-between gap-4">
                <span className="font-medium">{s.skill}</span>
                <span className="text-xs text-muted-foreground tabular-nums">{s.level}%</span>
              </div>
              <div className="mt-3 h-1.5 rounded-full bg-white/5 overflow-hidden">
                <div
                  className="h-full rounded-full bg-linear-to-r from-cyan via-primary to-violet"
                  style={{ width: `${s.level}%` }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
