import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getProject, projects } from "@/data/projects";
import { BeforeAfter } from "@/components/portfolio/BeforeAfter";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const p = getProject(params.slug);
    if (!p) throw notFound();
    return p;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} — Case Study · Balaji R` },
          { name: "description", content: loaderData.tagline },
          { property: "og:title", content: `${loaderData.title} — Case Study` },
          { property: "og:description", content: loaderData.tagline },
          { property: "og:type", content: "article" },
        ]
      : [{ title: "Case study not found" }],
  }),
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="font-display text-4xl">Case study not found</h1>
        <Link to="/" className="text-primary underline">
          Back home
        </Link>
      </div>
    </div>
  ),
  errorComponent: ({ error, reset }) => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="font-display text-3xl">Something went wrong</h1>
        <p className="text-muted-foreground">{error.message}</p>
        <button onClick={reset} className="text-primary underline">
          Try again
        </button>
      </div>
    </div>
  ),
  component: CaseStudy,
});

function CaseStudy() {
  const p = Route.useLoaderData() as import("@/data/projects").Project;
  const idx = projects.findIndex((x) => x.slug === p.slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <main className="relative">
      <div className="aurora-bg" />
      <div className="absolute inset-0 grid-bg -z-10" />

      <article className="mx-auto max-w-6xl px-6 pt-32 md:pt-20 pb-24">
        <Link
          to="/"
          className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-2"
        >
          ← Back to work
        </Link>

        <header className="mt-8 space-y-6">
          <p className="text-xs uppercase tracking-[0.25em] text-primary">
            {p.type} · {p.year}
          </p>
          <h1 className="font-display text-5xl md:text-7xl leading-[0.95] text-balance">
            {p.title}
          </h1>
          <p
            className="text-xl md:text-[18px] text-muted-foreground max-w-3xl"
            style={{ maxWidth: "99%" }}
          >
            {p.tagline}
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={p.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-medium magnetic shadow-glow text-sm"
            >
              Visit live project ↗
            </a>
            {p.secondaryUrl && (
              <a
                href={p.secondaryUrl.href}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-full glass text-sm magnetic"
              >
                {p.secondaryUrl.label} ↗
              </a>
            )}
          </div>
        </header>

        <section className="mt-14">
          {p.beforeAfter ? (
            <BeforeAfter src={p.image} alt={`${p.title} before and after`} />
          ) : (
            <div className="rounded-3xl overflow-hidden ring-glow">
              <img
                src={p.image}
                alt={`${p.title} preview`}
                width={1600}
                height={1000}
                className="w-full aspect-16/10 object-cover"
              />
            </div>
          )}
        </section>

        <section className="mt-16 grid md:grid-cols-3 gap-px rounded-3xl overflow-hidden glass">
          {p.metrics?.map((m) => (
            <div key={m.label} className="p-8 bg-background/40 text-center">
              <p className="font-display text-4xl md:text-5xl text-gradient">{m.value}</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mt-2">
                {m.label}
              </p>
            </div>
          ))}
        </section>

        <section className="mt-20 grid md:grid-cols-3 gap-10">
          <div>
            <p className="text-xs uppercase tracking-widest text-primary mb-3">Role</p>
            <p className="text-lg">{p.role}</p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-primary mb-3">Type</p>
            <p className="text-lg">{p.type}</p>
          </div>

          <div className="md:pl-42">
            <p className="text-xs uppercase tracking-widest text-primary mb-3">Year</p>
            <p className="text-lg">{p.year}</p>
          </div>
        </section>
        <Section title="Product overview">{p.overview}</Section>
        <Section title="Business problem">{p.problem}</Section>

        <section className="mt-16">
          <h2 className="font-display text-3xl md:text-4xl mb-6">UX challenges</h2>
          <ul className="grid md:grid-cols-3 gap-4">
            {p.challenges.map((c, i) => (
              <li key={c} className="glass rounded-2xl p-6">
                <p className="font-display text-3xl text-gradient">0{i + 1}</p>
                <p className="text-muted-foreground mt-3">{c}</p>
              </li>
            ))}
          </ul>
        </section>

        <Section title="Research process">{p.research}</Section>

        <section className="mt-16">
          <h2 className="font-display text-3xl md:text-4xl mb-6">Design decisions</h2>
          <ul className="space-y-3">
            {p.decisions.map((d) => (
              <li key={d} className="glass rounded-2xl p-5 flex gap-4">
                <span className="size-2 mt-2.5 rounded-full bg-primary shrink-0 shadow-glow" />
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </section>

        <Section title="Learnings">{p.learnings}</Section>

        <section className="mt-24 glass rounded-3xl p-8 md:p-12 flex items-end gap-6">
          {/* Text */}
          <div className="flex-1 min-w-0">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              Next case study
            </p>

            <h3 className="font-display text-3xl md:text-4xl mt-2">{next.title}</h3>

            <p className="text-muted-foreground mt-2">{next.tagline}</p>
          </div>

          {/* Button */}
          <Link
            to="/work/$slug"
            params={{ slug: next.slug }}
            className="shrink-0 whitespace-nowrap px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-medium magnetic shadow-glow text-sm"
          >
            Continue →
          </Link>
        </section>
      </article>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-16">
      <h2 className="font-display text-3xl md:text-4xl mb-4">{title}</h2>
      <p
        className="text-lg text-muted-foreground leading-relaxed max-w-3xl"
        style={{ maxWidth: "99%" }}
      >
        {children}
      </p>
    </section>
  );
}
