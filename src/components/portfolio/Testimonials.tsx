const items = [
  {
    quote:
      "As Balaji's manager, I've had a front-row seat to his growth and the consistent value he brings to our product team — and I can say without hesitation that he is one of the most well-rounded designers I've worked with.Balaji owns the complete design cycle — from wireframe to final UI — and delivers within timelines that most designers would find challenging. What impresses me most as a manager is his product thinking. He doesn't wait to be told what to design; he understands the problem deeply and crafts flows that are so intuitive, users complete multi-step, data-heavy processes without friction — often without realizing how far they've come.He has been a reliable daily partner to our dev teams, showing up with fresh designs, resolving design ambiguities proactively, and consistently raising the quality bar for every screen that ships.",
    name: "Santhosh VKS",
    role: "Product Manager",
  },
  {
    quote:
      "Had the pleasure of working with Balaji during the recent sprint. He shows agency in his workflow, takes initiative/demonstrates ownership by actively suggesting alternate processes; highly recommend him for his skills in crafting intuitive UI.",
    name: "Abdur Rahman M",
    role: "Product Lead",
  },
  // {
  //   quote:
  //     "Calm, structured and obsessed with the problem. The SaaS work we shipped together raised the bar for the rest of the design team.",
  //   name: "Head of Design",
  //   role: "SWITS Digital",
  // },
];

export function Testimonials() {
  return (
    <section className="relative py-16 md:py-20 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-primary mb-4">Trusted by teams</p>
          <h2 className="font-display text-4xl md:text-6xl text-balance">
            Work that <span className="text-gradient">teams remember</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {items.map((t) => (
            <figure
              key={t.name}
              className="reveal glass rounded-3xl p-8 magnetic flex flex-col gap-6"
            >
              <span className="font-display text-5xl text-gradient leading-none">"</span>
              <a
                href="https://www.linkedin.com/in/balajiramesh2908/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <blockquote className="text-foreground/90 leading-relaxed line-clamp-5">
                  {t.quote}
                </blockquote>
              </a>

              <figcaption className="mt-auto">
                <p className="font-medium">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
