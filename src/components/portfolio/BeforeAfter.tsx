import { useRef, useState } from "react";

export function BeforeAfter({ src, alt }: { src: string; alt: string }) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);

  const updateFromClientX = (clientX: number) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  };

  return (
    <div
      ref={ref}
      className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden ring-glow select-none cursor-ew-resize"
      onMouseMove={(e) => e.buttons === 1 && updateFromClientX(e.clientX)}
      onMouseDown={(e) => updateFromClientX(e.clientX)}
      onTouchMove={(e) => updateFromClientX(e.touches[0].clientX)}
    >
      <img src={src} alt={alt} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <img src={src} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "grayscale(0.9) contrast(0.85) brightness(0.7)" }} />
      </div>
      <div
        className="absolute top-0 bottom-0 w-px bg-white/90 pointer-events-none"
        style={{ left: `${pos}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 size-10 rounded-full glass flex items-center justify-center shadow-glow text-xs">
          ‹ ›
        </div>
      </div>
      <span className="absolute top-4 left-4 text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full glass">Before</span>
      <span className="absolute top-4 right-4 text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full bg-primary text-primary-foreground">After</span>
    </div>
  );
}
