import { useEffect, useRef, useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getProject, projects } from "@/data/projects";
import { BeforeAfter } from "@/components/portfolio/BeforeAfter";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const p = getProject(params.slug);

    if (!p) {
      throw notFound();
    }

    return p;
  },

  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          {
            title: `${loaderData.title} — Case Study · Balaji R`,
          },
          {
            name: "description",
            content: loaderData.tagline,
          },
          {
            property: "og:title",
            content: `${loaderData.title} — Case Study`,
          },
          {
            property: "og:description",
            content: loaderData.tagline,
          },
          {
            property: "og:type",
            content: "article",
          },
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

  const isPayrupe = p.slug === "payrupe";

  return (
    <main className="relative">
      <div className="aurora-bg" />

      <div className="absolute inset-0 grid-bg -z-10" />

      <article className="mx-auto max-w-6xl px-6 pt-32 md:pt-10 pb-24">
        {/* =====================================================
            BACK TO WORK
        ====================================================== */}

        <Link
          to="/"
          className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-2"
        >
          ← Back to work
        </Link>

        {/* =====================================================
            EXISTING CASE STUDY HEADER
            KEEPING YOUR CURRENT UI
        ====================================================== */}

        <header className="mt-8 space-y-6">
          <p className="text-xs uppercase tracking-[0.25em] text-primary">
            {p.type} · {p.year}
          </p>

          <h1 className="font-display text-5xl md:text-6xl leading-[0.95] text-balance">
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

        {/* =====================================================
            PAYRUPE ONLY
            PERSONA
        ====================================================== */}

        {isPayrupe && (
          <section className="mt-12">
            <div className="mb-10">
              <p className="text-xs uppercase tracking-[0.25em] text-primary mb-4">
                Who this was designed for
              </p>

              <h2 className="font-display text-3xl md:text-5xl max-w-5xl">
                One agent, forty transactions a day, zero patience for a treasure hunt.
              </h2>

              <p className="text-muted-foreground text-lg mt-5 max-w-5xl">
                Every decision in this redesign was checked against a single question: does this
                help Suresh finish a transaction before the customer in front of him loses patience?
              </p>
            </div>

            {/* PERSONA CARD */}

            <div className="relative overflow-hidden rounded-[28px] bg-linear-to-r from-[#0b1138] via-[#151d59] to-[#202b72] px-7 py-8 text-white md:px-10 md:py-10">
              {/* Background glow */}
              <div className="absolute -left-16 -top-20 h-52 w-52 rounded-full bg-blue-500/10 blur-3xl" />

              <div className="absolute bottom-0 right-0 h-60 w-60 rounded-full bg-indigo-400/10 blur-3xl" />

              <div className="relative flex flex-col gap-8 md:flex-row md:items-center">
                {/* Profile */}
                <div className="flex items-center gap-5 md:w-67.5 md:shrink-0">
                  <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-[#303b86] to-[#1a2257] shadow-lg ring-1 ring-white/10">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#f5c94b] text-2xl font-bold text-[#111936]">
                      SK
                    </div>
                  </div>

                  <div>
                    <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#f5c94b]">
                      PERSONA
                    </p>

                    <h2 className="text-2xl font-semibold tracking-tight md:text-[26px]">
                      Suresh Kumar
                    </h2>

                    <p className="mt-1 text-sm text-white/60">Primary User</p>
                  </div>
                </div>

                {/* Persona Details */}
                <div className="flex-1 border-t border-white/10 pt-6 md:border-l md:border-t-0 md:pl-8 md:pt-0">
                  <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#f5c94b]">
                    Retail Agent · Kirana Store Owner · Tier-2 Town
                  </p>

                  <div className="grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4">
                    <div>
                      <p className="text-xl font-semibold text-white">
                        40–60
                        <span className="text-sm font-medium">/day</span>
                      </p>

                      <p className="mt-1 text-xs text-white/50">Transactions handled</p>
                    </div>

                    <div>
                      <p className="text-xl font-semibold text-white">AEPS · DMT</p>

                      <p className="mt-1 text-xs text-white/50">Core services used</p>
                    </div>

                    <div>
                      <p className="text-xl font-semibold text-white">Moderate</p>

                      <p className="mt-1 text-xs text-white/50">Smartphone literacy</p>
                    </div>

                    <div>
                      <p className="text-xl font-semibold text-white">34</p>

                      <p className="mt-1 text-xs text-white/50">Age</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom insight */}
              <div className="relative mt-8 border-t border-white/10 pt-5">
                <p className="max-w-4xl text-sm leading-6 text-white/65">
                  Every decision in this redesign was checked against a single question:
                  <span className="ml-1 text-white/90">
                    does this help Balaji finish a transaction before the customer in front of him
                    loses patience?
                  </span>
                </p>
              </div>
            </div>

            {/* =========================================================
              GOALS + FRUSTRATIONS
          ========================================================= */}

            <div className="grid gap-6 md:grid-cols-2 mt-6">
              {/* Goals */}
              <div className="glass rounded-3xl p-8">
                <p className="mb-3 text-xs uppercase tracking-[0.2em] text-primary">Goals</p>

                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-primary">01</span>
                    <span>
                      Finish a transaction while the customer is still standing at the counter.
                    </span>
                  </li>

                  <li className="flex gap-3">
                    <span className="text-primary">02</span>
                    <span>
                      Trust that his wallet balance and commission are accurate at a glance.
                    </span>
                  </li>

                  <li className="flex gap-3">
                    <span className="text-primary">03</span>
                    <span>Avoid mis-taps that cost time or money he can't easily reverse.</span>
                  </li>
                </ul>
              </div>

              {/* Frustrations */}
              <div className="glass rounded-3xl p-8">
                <p className="mb-3 text-xs uppercase tracking-[0.2em] text-primary">Frustrations</p>

                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-primary">01</span>
                    <span>Scrolls past 25 service icons just to check his last transaction.</span>
                  </li>

                  <li className="flex gap-3">
                    <span className="text-primary">02</span>
                    <span>Can't tell locked services apart from active ones at a glance.</span>
                  </li>

                  <li className="flex gap-3">
                    <span className="text-primary">03</span>
                    <span>
                      Has no idea how much he's earned today without digging into Reports.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* =====================================================
            PAYRUPE ONLY
            EXISTING DESIGN
        ====================================================== */}

        {isPayrupe && (
          <PayrupeAnnotatedSection
            title="Existing Design"
            label="Diagnostic"
            description="Eight usability issues, each traced to a specific UX principle, a real cost to the agent, and a real cost to the business."
            image="/payrupe-existing.png"
            imageLabel="EXISTING DESIGN"
            type="existing"
            leftCards={[
              {
                number: 1,
                title: "No daily financial snapshot",
                why: "Only wallet balances show on open; settlement, commission and money debited today aren't visible anywhere on this screen.",
                principle: "Visibility of System Status",
                userImpact: "Agents can't tell how their day is going without opening Reports.",
                businessImpact: "No natural daily-engagement hook to bring agents back to the app.",
              },
              {
                number: 3,
                title: "Locked icons aren't visually distinct",
                why: "UPI and CMS render exactly like active icons, with no lock indicator or inline label.",
                principle: "Visibility of System Status",
                userImpact: "Agents waste time tapping features that don't respond.",
                businessImpact:
                  "Missed upsell opportunity — locked items look broken, not premium.",
              },

              {
                number: 5,
                title: "25 services on one long scroll",
                why: "Four stacked catalog sections sit above Recent Transactions, forcing a long scroll before reaching anything actionable.",
                principle: "Chunking",
                userImpact: "Higher cognitive load scanning past irrelevant icons every visit.",
                businessImpact: "Lower-frequency, high-value services get buried and under-used.",
              },

              {
                number: 7,
                title: "No scalable home for new services",
                why: "The flat structure has no place to add loans, insurance, or credit products without deepening clutter.",
                principle: "Scalable IA",
                userImpact: "Every new feature launch degrades an already-busy screen.",
                businessImpact: "New revenue lines have nowhere to launch without a redesign.",
              },
            ]}
            rightCards={[
              {
                number: 2,
                title: "No quick actions near the balance",
                why: "Only Payout and Add Fund sit near the wallet; there's no Statement or history shortcut from Home.",
                principle: "Efficiency of Use",
                userImpact: "Extra navigation just to confirm a past transaction went through.",
                businessImpact: "More support queries asking 'did my transaction go through?'",
              },

              {
                number: 4,
                title: "No visual hierarchy between actions",
                why: "Daily-use icons (AEPS, DMT) render with the same size and weight as rare ones (Gas bill, Bus Booking).",
                principle: "Visual Hierarchy",
                userImpact: "High-frequency agents lose seconds per transaction during peak hours.",
                businessImpact: "Slower per-transaction time caps daily throughput per agent.",
              },

              {
                number: 6,
                title: "Inconsistent icon language",
                why: "Icons vary in weight and style across sections with no shared visual system.",
                principle: "Consistency & Standards",
                userImpact: "Slower recognition and more mis-taps under pressure.",
                businessImpact: "Increases training time for new agents.",
              },
              {
                number: 8,
                title: "Recent activity buried at the bottom",
                why: "Last 7 Transactions is the very last element, ranked below every single service icon.",
                principle: "Recognition over Recall",
                userImpact: "Agents can't quickly confirm recent activity without scrolling far.",
                businessImpact: "Reduces trust signals exactly where they matter most.",
              },
            ]}
          />
        )}

        {/* =====================================================
            PAYRUPE ONLY
            REDESIGNED SOLUTION
        ====================================================== */}

        {isPayrupe && (
          <PayrupeAnnotatedSection
            title="Redesigned Solution"
            label="Solution"
            description="Every fix maps back to the exact problem it resolves — the change, the reasoning, and the outcome it's designed to produce."
            image="/payrupe-redesigned.png"
            imageLabel="REDESIGNED SOLUTION"
            type="fix"
            leftCards={[
              {
                number: 1,
                title: "Search added at the top of Home",
                why: "Agents can jump straight to a service or past transaction instead of scrolling a long catalog.",
                principle: "Recognition over Recall",
                userImpact: "Finds any service in seconds without memorizing where it lives.",
                businessImpact:
                  "Reduces time-to-transaction, supporting more transactions per day.",
              },

              {
                number: 3,
                title: "Transfer / Add Fund / Statement",
                why: "Three clear actions sit immediately below the wallet card, no digging required.",
                principle: "Efficiency of Use",
                userImpact: "Completes core actions in one tap instead of hunting through menus.",
                businessImpact: "Faster transactions support higher daily volume per agent.",
              },

              {
                number: 5,
                title: "Full catalog moved to a Services tab",
                why: "The 25-item catalog now lives in a dedicated bottom-nav tab, keeping Home focused on today's activity.",
                principle: "Scalable IA",
                userImpact: "Home stays fast and uncluttered as more services launch.",
                businessImpact: "New products get a home without harming daily-use navigation.",
              },
            ]}
            rightCards={[
              {
                number: 2,
                title: "Live financial snapshot on open",
                why: "Settlement, Commission and Debited render as one row directly under the balance the moment the app opens.",
                principle: "Visibility of System Status",
                userImpact: "Knows exactly how the day is going without opening Reports.",
                businessImpact: "A daily-glance habit that keeps agents opening the app.",
              },
              {
                number: 4,
                title: "Frequently Used surfaced on Home",
                why: "Top actions (AEPS, DMT, Recharge) sit directly on Home instead of requiring deep navigation.",
                principle: "Recognition over Recall",
                userImpact: "Reaches daily-use actions in one glance, no searching.",
                businessImpact: "Encourages continued use of core, commission-driving services.",
              },
              {
                number: 6,
                title: "Promotional banner on Home",
                why: "A dedicated banner slot nudges time-bound commission campaigns directly on the home screen.",
                principle: "Efficiency of Use",
                userImpact: "Sees relevant earning opportunities without extra taps.",
                businessImpact: "Direct channel to drive campaign participation.",
              },
            ]}
          />
        )}

        {/* =====================================================
            PAYRUPE ONLY
            TESTIMONIAL
        ====================================================== */}

        {isPayrupe && (
          <section className="mt-24">
            <div className="rounded-3xl bg-surface/60 glass p-8 md:p-10 text-center">
              <div className="text-5xl text-primary mb-6">"</div>

              <blockquote className="font-display text-2xl md:text-4xl leading-relaxed max-w-4xl mx-auto">
                Now I can see my settlement and commission the moment I open the app. I don't lose
                time in front of a customer looking for the right button anymore.
              </blockquote>

              <p className="text-xs uppercase tracking-widest text-primary mt-8">
                Suresh Kumar · Retail Agent Persona
              </p>

              <p className="text-sm text-muted-foreground mt-2">Grounded in agent interviews</p>
            </div>
          </section>
        )}

        {!isPayrupe && (
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
        )}

        <section className="mt-16 grid md:grid-cols-3 gap-px rounded-3xl overflow-hidden">
          {p.metrics?.map((m) => (
            <div key={m.label} className="p-8 bg-background/40 text-center">
              <p className="font-display text-4xl md:text-5xl text-gradient">{m.value}</p>

              <p className="text-xs uppercase tracking-widest text-muted-foreground mt-2">
                {m.label}
              </p>
            </div>
          ))}
        </section>

        <section className="mt-11 grid md:grid-cols-3 gap-10">
          <div>
            <p className="text-xs uppercase tracking-widest text-primary mb-2">Role</p>

            <p className="text-lg">{p.role}</p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-primary mb-2">Type</p>

            <p className="text-lg">{p.type}</p>
          </div>

          <div className="md:pl-42">
            <p className="text-xs uppercase tracking-widest text-primary mb-2">Year</p>

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

        {/* =====================================================
            NEXT CASE STUDY
            EXISTING UI
        ====================================================== */}

        <section className="mt-20 glass rounded-3xl p-8 md:p-12 flex items-end gap-6">
          <div className="flex-1 min-w-0">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              Next case study
            </p>

            <h3 className="font-display text-3xl md:text-4xl mt-2">{next.title}</h3>

            <p className="text-muted-foreground mt-2">{next.tagline}</p>
          </div>

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

/* =============================================================
   PAYRUPE ANNOTATED DESIGN SECTION
============================================================= */

type PayrupeCard = {
  number: number;
  title: string;
  why: string;
  principle: string;
  userImpact: string;
  businessImpact: string;
};

function PayrupeAnnotatedSection({
  title,
  label,
  description,
  image,
  imageLabel,
  type,
  leftCards,
  rightCards,
}: {
  title: string;
  label: string;
  description: string;
  image: string;
  imageLabel: string;
  type: "existing" | "fix";
  leftCards: PayrupeCard[];
  rightCards: PayrupeCard[];
}) {
  const mockupRef = useRef<HTMLDivElement>(null);
  const [mockupHeight, setMockupHeight] = useState<number | null>(null);

  useEffect(() => {
    const el = mockupRef.current;
    if (!el) return;

    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setMockupHeight(entry.contentRect.height);
      }
    });

    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <section className="mt-14">
      <div className="mb-10">
        <p className="text-xs uppercase tracking-[0.25em] text-primary mb-4">{label}</p>

        <div className="flex items-end justify-between gap-6 flex-wrap">
          <h2 className="font-display text-4xl md:text-6xl">{title}</h2>

          <p className="text-sm text-muted-foreground max-w-md">{description}</p>
        </div>
      </div>

      {/* =====================================================
          DESKTOP ANNOTATED LAYOUT
      ====================================================== */}

      <div className="hidden lg:grid grid-cols-[1fr_36px_280px_36px_1fr] gap-6 items-start">
        {/* LEFT CARDS */}

        <div
          className="grid gap-y-15"
          style={{
            ...(mockupHeight ? { height: mockupHeight } : undefined),
            gridTemplateRows: `repeat(${leftCards.length}, minmax(0, 1fr))`,
          }}
        >
          {leftCards.map((card) => (
            <PayrupeProblemCard key={card.number} card={card} type={type} />
          ))}
        </div>

        {/* LEFT CONNECTORS */}

        <div
          className="grid gap-y-5"
          style={{
            ...(mockupHeight ? { height: mockupHeight } : undefined),
            gridTemplateRows: `repeat(${leftCards.length}, minmax(0, 1fr))`,
          }}
        >
          {leftCards.map((card) => (
            <ConnectorLine key={card.number} number={card.number} type={type} side="left" />
          ))}
        </div>

        {/* CENTER IMAGE */}

        <div className="sticky top-24 flex justify-center">
          <div className="relative w-[280px]">
            <div
              className={`
                absolute -inset-5 rounded-[40px] blur-2xl
                ${type === "fix" ? "bg-emerald-400/10" : "bg-primary/10"}
              `}
            />

            <div
              ref={mockupRef}
              className={`
                relative rounded-[28px] overflow-hidden
                bg-white border shadow-2xl
                ${type === "fix" ? "border-emerald-400/40" : "border-border"}
              `}
            >
              <img
                src={image}
                alt={`${imageLabel} PayRupe mobile screen`}
                className="w-full h-auto block"
              />
            </div>
          </div>
        </div>

        {/* RIGHT CONNECTORS */}

        <div
          className="grid gap-y-5"
          style={{
            ...(mockupHeight ? { height: mockupHeight } : undefined),
            gridTemplateRows: `repeat(${rightCards.length}, minmax(0, 1fr))`,
          }}
        >
          {rightCards.map((card) => (
            <ConnectorLine key={card.number} number={card.number} type={type} side="right" />
          ))}
        </div>

        {/* RIGHT CARDS */}

        <div
          className="grid gap-y-15"
          style={{
            ...(mockupHeight ? { height: mockupHeight } : undefined),
            gridTemplateRows: `repeat(${rightCards.length}, minmax(0, 1fr))`,
          }}
        >
          {rightCards.map((card) => (
            <PayrupeProblemCard key={card.number} card={card} type={type} />
          ))}
        </div>
      </div>

      {/* =====================================================
          MOBILE/TABLET VERSION
      ====================================================== */}

      <div className="lg:hidden">
        <div className="flex justify-center mb-10">
          <div className="relative w-[min(82vw,300px)]">
            <div className="absolute -inset-5 rounded-[40px] bg-primary/10 blur-2xl" />

            <div className="relative rounded-[28px] overflow-hidden bg-white border shadow-2xl">
              <div
                className={`
                  absolute top-4 left-1/2 -translate-x-1/2
                  z-10 rounded-full px-4 py-2
                  text-[10px] font-semibold tracking-wide
                  ${type === "fix" ? "bg-emerald-400 text-emerald-950" : "bg-slate-900 text-white"}
                `}
              >
                {imageLabel}
              </div>

              <img
                src={image}
                alt={`${imageLabel} PayRupe mobile screen`}
                className="w-full h-auto block"
              />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {[...leftCards, ...rightCards]
            .sort((a, b) => a.number - b.number)
            .map((card) => (
              <PayrupeProblemCard key={card.number} card={card} type={type} />
            ))}
        </div>
      </div>
    </section>
  );
}

/* =============================================================
   CONNECTOR LINE
============================================================= */

function ConnectorLine({
  number,
  type,
  side,
}: {
  number: number;
  type: "existing" | "fix";
  side: "left" | "right";
}) {
  const isFix = type === "fix";
  const dotColor = isFix ? "bg-emerald-400 text-emerald-950" : "bg-slate-700 text-white";
  const lineColor = isFix ? "border-emerald-400/50" : "border-slate-400/50";

  return (
    <div className="relative flex items-center h-full">
      <div
        className={`h-0 border-t-2 border-dashed ${lineColor}`}
        style={{ width: "calc(100% + 48px)", marginLeft: -24, marginRight: -24 }}
      />

      <div
        className={`
          absolute
          -translate-y-1/2 top-1/2
          w-6 h-6 rounded-full
          flex items-center justify-center
          text-[10px] font-bold
          ${dotColor}
        `}
        style={side === "left" ? { right: -24 } : { left: -24 }}
      >
        {number}
      </div>
    </div>
  );
}

/* =============================================================
   PAYRUPE PROBLEM / FIX CARD
============================================================= */

function PayrupeProblemCard({ card, type }: { card: PayrupeCard; type: "existing" | "fix" }) {
  const isFix = type === "fix";

  return (
    <div
      className={`
        rounded-2xl
        bg-background/60
        border-l-2
        ${isFix ? "border-emerald-400" : "border-slate-400"}
        shadow-sm
        h-full overflow-hidden
        flex flex-col justify-start
        space-y-3
      `}
      style={{ padding: 20 }}
    >
      {/* Number + Problem/Fix label, inline */}
      <div className="flex items-center gap-2">
        <div
          className={`
      w-6 h-6 shrink-0 rounded-full
      flex items-center justify-center
      text-[11px] font-bold
      ${isFix ? "bg-emerald-400 text-emerald-950" : "bg-primary text-white"}
    `}
        >
          {card.number}
        </div>

        <p className="text-[13px] text-primary font-medium leading-snug">{card.title}</p>
      </div>

      <div>
        <p className="text-[9px] uppercase tracking-widest mb-0.5">Why it matters</p>
        <p className="text-xs text-muted-foreground leading-snug line-clamp-2">{card.why}</p>
      </div>

      <div>
        <p className="text-[9px] uppercase tracking-widest mb-0.5">Impact on user</p>
        <p className="text-xs text-muted-foreground leading-snug line-clamp-2">{card.userImpact}</p>
      </div>

      <div>
        <p className="text-[9px] uppercase tracking-widest mb-0.5">Impact on business</p>
        <p className="text-xs text-muted-foreground leading-snug line-clamp-2">
          {card.businessImpact}
        </p>
      </div>
    </div>
  );
}

/* =============================================================
   EXISTING GENERIC SECTION
============================================================= */

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
