const steps = [
  { n: "01", t: "Discovery", d: "Stakeholder interviews, business goals, success metrics." },
  { n: "02", t: "Research", d: "User interviews, analytics, competitive teardown." },
  { n: "03", t: "Define", d: "Problem statements, JTBD, opportunity map." },
  { n: "04", t: "Ideate", d: "Flows, IA, low-fi explorations and bets." },
  { n: "05", t: "Design", d: "High-fidelity UI, motion, design system updates." },
  { n: "06", t: "Validate", d: "Usability tests, A/B tests, qualitative review." },
  { n: "07", t: "Iterate", d: "Ship, measure, sharpen — repeat on the next loop." },
];

export function Process() {
  return (
    <section className="relative py-12 md:py-1 mb-15">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal text-center max-w-3xl mx-auto mb-20">
          <p className="text-xs uppercase tracking-[0.25em] text-primary mb-4">Process</p>
          <h2 className="font-display text-4xl md:text-6xl text-balance">
            How I solve <span className="text-gradient">product problems</span>.
          </h2>
        </div>

        <div className="relative">
          <div aria-hidden className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-primary/50 to-transparent hidden md:block" />
          <ol className="space-y-10 md:space-y-5">
            {steps.map((s, i) => (
              <li key={s.n} className={`reveal grid md:grid-cols-2 gap-6 items-center ${i % 2 ? "md:[direction:rtl]" : ""}`}>
                <div className="md:[direction:ltr] relative">
                  <div className="glass rounded-2xl p-6 md:p-6 magnetic">
                    <p className="font-display text-5xl text-gradient">{s.n}</p>
                    <h3 className="font-display text-2xl mt-3">{s.t}</h3>
                    <p className="text-muted-foreground mt-2">{s.d}</p>
                  </div>
                </div>
                <div className="hidden md:flex justify-center relative">
                  <span className="size-4 rounded-full bg-primary shadow-glow pulse-ring" />
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
