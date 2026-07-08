import rupenetImg from "@/assets/rupenet.jpg";
import collectiImg from "@/assets/collecti.jpg";
import switsImg from "@/assets/swits.jpg";
import payrupeImg from "@/assets/payrupe-ba.jpg";
import finxImg from "@/assets/finx-ba.jpg";
import finxGoldImg from "@/assets/finxgold-ba.jpg";

type Project = {
  title: string;
  tag: string;
  role: string;
  href: string;
  secondaryHref?: { label: string; href: string };
  image: string;
  overview: string;
  challenge: string;
  metrics?: { label: string; value: string }[];
  beforeAfter?: boolean;
};

const projects: Project[] = [
  {
    title: "Rupenet",
    tag: "Fintech • Landing",
    role: "UI/UX Designer",
    href: "https://www.rupenet.com/",
    image: rupenetImg,
    overview:
      "Marketing site for India's neo-banking & payments platform — positioned to convert SMB operators and white-label partners.",
    challenge:
      "Translate a sprawling product suite into a single narrative without overwhelming first-time visitors.",
    metrics: [
      { label: "Bounce", value: "−32%" },
      { label: "Demo requests", value: "+58%" },
      { label: "Time to value", value: "<8s" },
    ],
  },
  {
    title: "Collecti",
    tag: "SaaS • Web • Mobile",
    role: "UI/UX Designer",
    href: "https://www.rupenet.com/finx-collecti",
    image: collectiImg,
    secondaryHref: {
      label: "Google Play",
      href: "https://play.google.com/store/apps/details?id=com.rupenet.paywithus&hl=en_IN",
    },
    overview:
      "Finx Collecti is a Collection Management Platform built for financial institutions, lending companies, and recovery teams. The platform provides a complete ecosystem consisting of an Agent Mobile Application, Supervisor Dashboard, and Borrower Management Portal.The product helps organizations manage collection activities, track repayments, prioritize high-risk accounts, monitor recovery performance, and improve operational efficiency through data-driven workflows.",
    challenge:
      "Surface high-signal accounts inside dense data without losing the agent's daily rhythm.",
    // metrics: [
    //   { label: "Recovery speed", value: "+35%" },
    //   { label: "Agent tasks/day", value: "+22%" },
    //   { label: "Dispute rate", value: "−18%" },
    // ],
  },
  {
    title: "SWITS Digital",
    tag: "Enterprise · Landing",
    role: "UI/UX Designer",
    href: "https://www.smartworkitservices.com/services",
    image: switsImg,
    overview:
      "Services site for an IT consultancy — redesigned to communicate enterprise depth while keeping the page scannable.",
    challenge:
      "Rebuild trust signals and structure 20+ service offerings into a clear, scannable hierarchy.",
    metrics: [
      { label: "Inbound leads", value: "+47%" },
      { label: "Avg. session", value: "+1m 12s" },
      { label: "Pages / visit", value: "2.4×" },
    ],
  },
  {
    title: "Payrupe",
    tag: "Fintech • App + Web",
    role: "UI/UX Designer",
    href: "https://www.rupenet.com/payrupe",
    secondaryHref: {
      label: "Google Play",
      href: "https://play.google.com/store/apps/details?id=com.solution.rupenetpaymentbox&hl=en_IN",
    },
    image: payrupeImg,
    overview:
      "Agent-payments app for retailers — BBPS, AePS, recharge and DMT flows simplified into one fluid surface.",
    challenge:
      "Original UI buried high-frequency tasks under nested menus and inconsistent components.",
    metrics: [
      { label: "Task completion", value: "+38%" },
      { label: "Onboarding drop-off", value: "−25%" },
      { label: "DAU growth", value: "+29%" },
    ],
    // beforeAfter: true,
  },
  {
    title: "FINX",
    tag: "Wallet • App • Web",
    role: "UI/UX Designer",
    href: "https://www.rupenet.com/finx",
    secondaryHref: {
      label: "Google Play",
      href: "https://play.google.com/store/apps/details?id=com.rupenet.paywithus&hl=en_IN",
    },
    image: finxImg,
    overview:
      "Consumer wallet — send, receive, scan-to-pay, and bills in a single, calm surface optimised for one-handed use.",
    challenge: "Reorder a list-heavy IA into a balance-first home that nudges habitual actions.",
    metrics: [
      { label: "Engagement", value: "+40%" },
      { label: "P2P transfers", value: "+52%" },
      { label: "Crash-free users", value: "99.6%" },
    ],
    beforeAfter: true,
  },
  {
    title: "FINX Gold",
    tag: "Investing • Mobile",
    role: "UI/UX Designer",
    href: "https://play.google.com/store/apps/details?id=com.rupenet.finx_gold&hl=en_IN",
    secondaryHref: {
      label: "Google Play",
      href: "https://play.google.com/store/apps/details?id=com.rupenet.finx_gold&hl=en_IN",
    },
    image: finxGoldImg,
    overview:
      "Digital-gold investing app — live price, SIP, and portfolio in a layout that builds trust for first-time investors.",
    challenge:
      "Communicate live market data and purity guarantees without scaring the novice investor.",
    metrics: [
      { label: "First-buy conversion", value: "+44%" },
      { label: "SIP setup", value: "+33%" },
      { label: "Trust score", value: "4.6 / 5" },
    ],
    beforeAfter: true,
  },
];

export function Work() {
  return (
    <section id="work" className="py-24 md:py-32 relative">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-8 mb-16 flex-wrap">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">Selected work</p>
            <h2 className="font-display text-4xl md:text-6xl text-balance max-w-2xl">
              Six products. One throughline —{" "}
              <em className="text-primary not-italic">measurable</em> impact.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            Each case study below shows the problem, the design moves, and the business metric they
            shifted. Click any title to open the live product.
          </p>
        </div>

        <div className="space-y-24">
          {projects.map((p, i) => (
            <article key={p.title} className="grid lg:grid-cols-12 gap-10 items-center group">
              <a
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className={`lg:col-span-7 block relative rounded-3xl overflow-hidden ring-1 ring-border shadow-card transition hover:shadow-elegant ${
                  i % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <img
                  src={p.image}
                  alt={`${p.title} — ${p.beforeAfter ? "before and after redesign" : "product preview"}`}
                  loading="lazy"
                  width={1600}
                  height={1000}
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-[1.02]"
                />
                {p.beforeAfter && (
                  <span className="absolute top-4 left-4 text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full bg-background/80 backdrop-blur border border-border">
                    Before / After
                  </span>
                )}
                <span className="absolute bottom-4 right-4 text-xs px-3 py-1.5 rounded-full bg-primary text-primary-foreground font-medium opacity-0 group-hover:opacity-100 transition">
                  Visit live ↗
                </span>
              </a>

              <div className={`lg:col-span-5 space-y-5 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{p.tag}</p>
                <h3 className="font-display text-4xl md:text-5xl">
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-primary transition"
                  >
                    {p.title} ↗
                  </a>
                </h3>
                <p className="text-sm text-muted-foreground">Role · {p.role}</p>
                <p className="text-foreground/90 leading-relaxed">{p.overview}</p>
                <p className="text-muted-foreground text-sm leading-relaxed border-l-2 border-primary/60 pl-4">
                  <span className="text-foreground font-medium">Challenge.</span> {p.challenge}
                </p>
                {/* <dl className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                  {p.metrics.map((m) => (
                    <div key={m.label}>
                      <dt className="text-[10px] uppercase tracking-widest text-muted-foreground">
                        {m.label}
                      </dt>
                      <dd className="font-display text-2xl text-primary mt-1">{m.value}</dd>
                    </div>
                  ))}
                </dl> */}
                {p.secondaryHref && (
                  <a
                    href={p.secondaryHref.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                  >
                    {p.secondaryHref.label} ↗
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
