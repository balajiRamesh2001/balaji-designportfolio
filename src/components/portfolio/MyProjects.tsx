import { ExternalLink } from "lucide-react";
import atsImg from "@/assets/atsImg.jpg";
import edTechImg from "@/assets/edTechImg.jpg";
import homeserviceImg from "@/assets/homeserviceImg.jpg";
import netflixImg from "@/assets/netflixImg.jpg";
import dmImg from "@/assets/dmImg.jpg";
import projectImg from "@/assets/projectImg.jpg";
import freelanceImg from "@/assets/freelanceImg.jpg";

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
    title: "Application Tracking System",
    tag: "Webapp",
    role: "UI/UX Designer",
    href: "https://www.behance.net/gallery/237968849/Application-Tracking-System-UI-UX-Design",
    image: atsImg,
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
    title: "Ed Tech Manager App",
    tag: "Mobile App",
    role: "UI/UX Designer",
    href: "https://www.behance.net/gallery/237418609/Modern-EdTech-Management-Platform-UI-Design",
    image: edTechImg,
    secondaryHref: {
      label: "Google Play",
      href: "https://play.google.com/store/apps/details?id=com.rupenet.paywithus&hl=en_IN",
    },
    overview:
      "End-to-end collections platform — admin dashboard, agent app and borrower flow — designed to compress recovery cycles.",
    challenge:
      "Surface high-signal accounts inside dense data without losing the agent's daily rhythm.",
    metrics: [
      { label: "Recovery speed", value: "+35%" },
      { label: "Agent tasks/day", value: "+22%" },
      { label: "Dispute rate", value: "−18%" },
    ],
  },
  {
    title: "Freelancer Discovery Platform",
    tag: "Website",
    role: "UI/UX Designer",
    href: "https://www.behance.net/gallery/237415277/ConnectUp-Discover-Freelancers-Web-UI-Design",
    image: freelanceImg,
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
    title: "Netflix Redesign",
    tag: "Mobile app",
    role: "UI/UX Designer",
    href: "https://www.behance.net/gallery/203371717/Netflix-Redesign",
    image: netflixImg,
    overview:
      "Consumer wallet — send, receive, scan-to-pay, and bills in a single, calm surface optimised for one-handed use.",
    challenge: "Reorder a list-heavy IA into a balance-first home that nudges habitual actions.",
    metrics: [
      { label: "Engagement", value: "+40%" },
      { label: "P2P transfers", value: "+52%" },
      { label: "Crash-free users", value: "99.6%" },
    ],
  },
  {
    title: "Digital Marketing Website",
    tag: "Website",
    role: "UI/UX Designer",
    href: "https://www.behance.net/gallery/203439963/Digital-Marketing-Website",
    image: dmImg,
    overview:
      "Digital-gold investing app — live price, SIP, and portfolio in a layout that builds trust for first-time investors.",
    challenge:
      "Communicate live market data and purity guarantees without scaring the novice investor.",
    metrics: [
      { label: "First-buy conversion", value: "+44%" },
      { label: "SIP setup", value: "+33%" },
      { label: "Trust score", value: "4.6 / 5" },
    ],
  },
  {
    title: "Home Service App",
    tag: "Mobile app",
    role: "UI/UX Designer",
    href: "https://www.behance.net/gallery/194516973/Reparo-Home-Service-App-Full-Model",
    image: homeserviceImg,
    overview:
      "Digital-gold investing app — live price, SIP, and portfolio in a layout that builds trust for first-time investors.",
    challenge:
      "Communicate live market data and purity guarantees without scaring the novice investor.",
    metrics: [
      { label: "First-buy conversion", value: "+44%" },
      { label: "SIP setup", value: "+33%" },
      { label: "Trust score", value: "4.6 / 5" },
    ],
  },
  {
    title: "Project ManagementSite",
    tag: "Website",
    role: "UI/UX Designer",
    href: "https://www.behance.net/gallery/234020895/Project-and-User-Management",
    image: projectImg,
    overview:
      "Digital-gold investing app — live price, SIP, and portfolio in a layout that builds trust for first-time investors.",
    challenge:
      "Communicate live market data and purity guarantees without scaring the novice investor.",
    metrics: [
      { label: "First-buy conversion", value: "+44%" },
      { label: "SIP setup", value: "+33%" },
      { label: "Trust score", value: "4.6 / 5" },
    ],
  },
];

export function MyProjects() {
  return (
    <section id="projects" className="relative py-2 md:py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-8">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-primary">My Projects</p>

            <h2 className="font-display max-w-2xl text-4xl text-balance md:text-6xl">
              Projects crafted with clean UI, strong UX, and real product focus.
            </h2>
          </div>
        </div>

        <div className="overflow-x-auto scroll-smooth pb-4 no-scrollbar">
          <div className="grid grid-flow-col auto-cols-[88%] sm:auto-cols-[44%] lg:auto-cols-[28%] gap-8">
            {projects.map((p) => (
              <article
                key={p.title}
                className="group overflow-hidden rounded-3xl border border-border bg-card shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-elegant"
              >
                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="relative block aspect-video overflow-hidden"
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    // loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                  />

                  {p.beforeAfter && (
                    <span className="absolute left-4 top-4 rounded-full border border-border bg-background/80 px-3 py-1.5 text-[10px] uppercase tracking-widest backdrop-blur">
                      Before / After
                    </span>
                  )}

                  <span className="absolute bottom-4 right-4 flex items-center gap-1 rounded-full bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground opacity-0 transition group-hover:opacity-100">
                    Visit <ExternalLink size={13} />
                  </span>
                </a>

                <div className="space-y-3 p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {p.tag}
                  </p>

                  <div>
                    <h3 className="font-display text-2xl">
                      <a
                        href={p.href}
                        target="_blank"
                        rel="noreferrer"
                        className="transition hover:text-primary"
                      >
                        {p.title}
                      </a>
                    </h3>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-linear-to-l from-background to-transparent" />
        </div>
      </div>
    </section>
  );
}
