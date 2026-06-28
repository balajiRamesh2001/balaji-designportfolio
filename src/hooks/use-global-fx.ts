import { useEffect } from "react";

/** Adds a global mouse-follow radial glow + reveal-on-scroll observer. */
export function useGlobalFx() {
  useEffect(() => {
    // Mouse glow
    const glow = document.createElement("div");
    glow.setAttribute("aria-hidden", "true");
    glow.style.cssText = [
      "position:fixed",
      "top:0",
      "left:0",
      "width:520px",
      "height:520px",
      "border-radius:9999px",
      "pointer-events:none",
      "z-index:1",
      "transform:translate(-50%,-50%)",
      "background:radial-gradient(circle, color-mix(in oklab, var(--electric) 22%, transparent) 0%, transparent 60%)",
      "transition:opacity .25s ease",
      "opacity:0",
      "mix-blend-mode:screen",
      "filter:blur(20px)",
    ].join(";");
    document.body.appendChild(glow);

    let raf = 0;
    let tx = 0, ty = 0;
    const onMove = (e: MouseEvent) => {
      tx = e.clientX; ty = e.clientY;
      glow.style.opacity = "1";
      if (!raf) {
        raf = requestAnimationFrame(() => {
          glow.style.transform = `translate(${tx - 260}px, ${ty - 260}px)`;
          raf = 0;
        });
      }
    };
    const onLeave = () => { glow.style.opacity = "0"; };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);

    // Reveal on scroll
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      }
    }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      io.disconnect();
      glow.remove();
    };
  }, []);
}
