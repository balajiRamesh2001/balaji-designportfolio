import { createFileRoute } from "@tanstack/react-router";
import { useGlobalFx } from "@/hooks/use-global-fx";
import { GlassNav } from "@/components/portfolio/GlassNav";
import { Hero } from "@/components/portfolio/Hero";
import { WorkGrid } from "@/components/portfolio/WorkGrid";
import { ExpertiseSection } from "@/components/portfolio/InfiniteExpertiseMarquee";
import { Process } from "@/components/portfolio/Process";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { About } from "@/components/portfolio/About";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { MyProjects } from "@/components/portfolio/MyProjects";
import { Contact, Footer } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Balaji R — UI/UX Designer · Fintech, SaaS & Mobile" },
      {
        name: "description",
        content:
          "UI/UX Designer with 3+ years across fintech, SaaS and enterprise. Case studies from Rupenet, FINX, PayRupe and more — showing 25% less friction and 40% engagement lift.",
      },
      { property: "og:title", content: "Balaji R — UI/UX Designer" },
      {
        property: "og:description",
        content:
          "Designing digital products that drive growth, improve UX, and create business impact.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  useGlobalFx();
  return (
    <main className="relative min-h-screen">
      <GlassNav />
      <Hero />
      <ExpertiseSection />
      <WorkGrid />
      <MyProjects/>
      <Process />
      <About />
      <Experience />
      <Skills />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
