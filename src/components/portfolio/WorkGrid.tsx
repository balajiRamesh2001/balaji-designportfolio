import { Link } from "@tanstack/react-router";
import { projects } from "@/data/projects";
import { ExternalLink } from "lucide-react";

const accentRing: Record<string, string> = {
  electric: "from-primary/40 to-violet/30",
  cyan: "from-cyan/40 to-primary/30",
  violet: "from-violet/40 to-cyan/30",
};

export function WorkGrid() {
  return (
    <section id="work" className="relative py-16 md:py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal flex items-end justify-between flex-wrap gap-8 mb-16">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-primary mb-4">Selected work</p>
            <h2 className="font-display text-4xl md:text-6xl text-balance max-w-2xl">
              Six products. One throughline —{" "}
              <span className="text-gradient">measurable impact</span>.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            Each case study opens a dedicated page with the problem, decisions, before/after UI and
            the metrics that moved.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((p, i) => (
            <Link
              key={p.slug}
              to="/work/$slug"
              params={{ slug: p.slug }}
              className="reveal group relative rounded-3xl overflow-hidden glass p-1 magnetic"
            >
              <div
                className={`absolute -inset-px rounded-3xl bg-linear-to-br ${accentRing[p.accent]} opacity-0 group-hover:opacity-100 transition duration-500 blur-xl`}
              />

              <div className="relative rounded-[22px] overflow-hidden bg-surface/60">
                {/* IMAGE */}
                <div className="relative aspect-16/10 overflow-hidden">
                  <img
                    src={p.image}
                    alt={`${p.title} preview`}
                    loading="lazy"
                    width={1600}
                    height={1000}
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-[1.04]"
                  />

                  {/* VISIT BUTTON */}
                  <span className="absolute bottom-4 right-4 flex items-center gap-1 rounded-full bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground opacity-0 transition group-hover:opacity-100">
                    Visit <ExternalLink size={13} />
                  </span>
                </div>

                {/* CONTENT */}
                <div className="p-6 md:p-8 flex items-end justify-between gap-6 flex-wrap">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
                      {p.type}
                    </p>

                    <h3 className="font-display text-3xl md:text-4xl mt-2 group-hover:text-gradient transition">
                      {p.title}
                    </h3>

                    <p
                      className="text-xl md:text-[16px] text-muted-foreground mt-2"
                      style={{ maxWidth: "99%" }}
                    >
                      {p.tagline}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
