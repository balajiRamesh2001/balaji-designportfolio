import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import { useRef, useState } from "react";

type Direction = "left" | "right";

interface InfiniteExpertiseMarqueeProps {
  items: string[];
  speed?: number; // pixels per second
  direction?: Direction;
  pauseOnHover?: boolean;
}

export function InfiniteExpertiseMarquee({
  items,
  speed = 70,
  direction = "left",
  pauseOnHover = true,
}: InfiniteExpertiseMarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [paused, setPaused] = useState(false);

  useAnimationFrame((_, delta) => {
    if (paused) return;
    const track = trackRef.current;
    if (!track) return;
    const half = track.scrollWidth / 2;
    if (half === 0) return;
    const dir = direction === "left" ? -1 : 1;
    let next = x.get() + (dir * (speed * delta)) / 1000;
    if (next <= -half) next += half;
    if (next >= 0 && dir === 1) next -= half;
    x.set(next);
  });

  const loop = [...items, ...items];

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => pauseOnHover && setPaused(true)}
      onMouseLeave={() => pauseOnHover && setPaused(false)}
      style={{
        maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <motion.div
        ref={trackRef}
        style={{ x, willChange: "transform" }}
        className="flex flex-nowrap items-center gap-10 md:gap-3 py-2"
      >
        {loop.map((item, i) => (
          <div key={`${item}-${i}`} className="flex items-center gap-10 md:gap-10 shrink-0">
            <span className="font-display font-medium tracking-tight whitespace-nowrap text-[#9A9A9A] hover:text-white transition-colors duration-300 text-[24px] sm:text-[32px] md:text-[44px] lg:text-[18px] leading-none cursor-default">
              {item}
            </span>
            <span
              aria-hidden
              className="shrink-0 size-2 md:size-2 bg-primary rounded-full"
              style={{
                boxShadow:
                  "0 0 12px #3B82F6, 0 0 24px rgba(59, 130, 246, 0.6), 0 0 40px rgba(59, 130, 246, 0.3)",
              }}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

const EXPERTISE_ITEMS = [
  "Fintech",
  "SaaS",
  "Enterprise",
  "ATS",
  "HRMS",
  "Mobile Apps",
  "Payments",
  "Investing",
  "Wealth Management",
  "Design Systems",
  "Product Design",
  "User Experience",
  "Admin Dashboards",
  "Analytics",
  "Automation",
  "Recruitment Platforms",
  "B2B Products",
  "Mobile Banking",
  "Enterprise Platforms",
  "Growth-Focused Design",
];

export function ExpertiseSection() {
  return (
    <section id="expertise" className="relative py-0 md:py-0 overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 grid-bg opacity-40 -z-10" />
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(60% 40% at 50% 50%, color-mix(in oklab, var(--electric) 12%, transparent), transparent 70%)",
        }}
      />
      {/* Soft glow particles */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${15 + i * 18}%`,
              top: `${20 + (i % 3) * 25}%`,
              width: 6,
              height: 6,
              background: "#FFD84D",
              filter: "blur(2px)",
              opacity: 0.4,
            }}
            animate={{ y: [0, -20, 0], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.6 }}
          />
        ))}
      </div>
      {/* Noise */}
      <div className="absolute inset-0 -z-10 noise opacity-30" />
    </section>
  );
}
