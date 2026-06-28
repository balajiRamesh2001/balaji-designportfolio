export function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/60 border-b border-border">
      <nav className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-display text-xl tracking-tight">
          Balaji<span className="text-primary">.</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#work" className="hover:text-foreground transition">Work</a>
          <a href="#skills" className="hover:text-foreground transition">Skills</a>
          <a href="#about" className="hover:text-foreground transition">About</a>
          <a href="#contact" className="hover:text-foreground transition">Contact</a>
        </div>
        <a
          href="mailto:balajiramesh.designer@gmail.com"
          className="text-sm px-4 py-2 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition"
        >
          Let's talk
        </a>
      </nav>
    </header>
  );
}
