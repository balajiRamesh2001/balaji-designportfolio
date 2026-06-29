export function Contact() {
  return (
    <section
      id="contact"
      className="relative py-16 md:py-18 border-t border-border overflow-hidden"
    >
      <div className="aurora-bg" />
      <div className="mx-auto max-w-4xl px-1 text-center space-y-10 reveal">
        <p className="text-xs uppercase tracking-[0.25em] text-primary">Contact</p>
        <h2 className="font-display text-5xl md:text-7xl leading-[0.95] text-balance">
          Let's create <span className="text-gradient">products users love</span>.
        </h2>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          I'm open to senior UI/UX design roles and selective freelance in fintech, SaaS and
          enterprise platforms. Quick reply guaranteed.
        </p>

        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 max-w-5xl mx-auto">
          <a
            href="mailto:balajiramesh.desiger@gmail.com"
            className="glass rounded-2xl p-5 hover:bg-white/10 transition magnetic text-left"
          >
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Email</p>
            <p className="mt-1 text-sm break-all">balajiramesh.desiger@gmail.com  ↗</p>
          </a>
          <a
            href="tel:+918056228651"
            target="_blank"
            rel="noreferrer"
            className="glass rounded-2xl p-5 hover:bg-white/10 transition magnetic text-left"
          >
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Contact</p>
            <p className="mt-1 text-sm">+91 8056228651</p>
          </a>

          <a
            href="https://www.linkedin.com/in/balajiramesh2908/"
            target="_blank"
            rel="noreferrer"
            className="glass rounded-2xl p-5 hover:bg-white/10 transition magnetic text-left"
          >
            <p className="text-xs uppercase tracking-widest text-muted-foreground">LinkedIn</p>
            <p className="mt-1 text-sm">/in/balajiramesh2908 ↗</p>
          </a>

          <a
            href="https://www.behance.net/balajiramesh1"
            target="_blank"
            rel="noreferrer"
            className="glass rounded-2xl p-5 hover:bg-white/10 transition magnetic text-left"
          >
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Behance</p>
            <p className="mt-1 text-sm">/balajiramesh1 ↗</p>
          </a>
        </div> */}

        <div className="space-y-4 pt-4 max-w-3xl mx-auto w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-4 sm:px-0">
            <a
              href="mailto:balajiramesh.desiger@gmail.com"
              className="glass rounded-2xl p-4 md:p-5 hover:bg-white/10 transition magnetic text-left h-full"
            >
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                Email
              </p>
              <p className="mt-2 text-sm break-words whitespace-nowrap">
                balajiramesh.desiger@gmail.com ↗
              </p>
            </a>

            <a
              href="tel:+918056228651"
              className="glass rounded-2xl p-4 md:p-5 hover:bg-white/10 transition magnetic text-left h-full"
            >
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                Contact
              </p>
              <p className="mt-2 text-sm whitespace-nowrap">
                +91 8056228651
              </p>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-4 sm:px-0">
            <a
              href="https://www.linkedin.com/in/balajiramesh2908/"
              target="_blank"
              rel="noreferrer"
              className="glass rounded-2xl p-4 md:p-5 hover:bg-white/10 transition magnetic text-left h-full"
            >
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                LinkedIn
              </p>
              <p className="mt-2 text-sm whitespace-nowrap">
                /in/balajiramesh2908 ↗
              </p>
            </a>

            <a
              href="https://www.behance.net/balajiramesh1"
              target="_blank"
              rel="noreferrer"
              className="glass rounded-2xl p-4 md:p-5 hover:bg-white/10 transition magnetic text-left h-full"
            >
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                Behance
              </p>
              <p className="mt-2 text-sm whitespace-nowrap">
                /balajiramesh1 ↗
              </p>
            </a>
          </div>
        </div>


        <div className="pt-4">
          <a
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium shadow-glow magnetic hover:opacity-90 transition"
            href="/resume/Balaji-Ramesh-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-wrap items-center justify-between gap-6 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-primary" />
          <span>© {new Date().getFullYear()} Balaji R · Designed in Chennai</span>
        </div>
        <div className="flex flex-wrap gap-5">
          <a href="#work" className="hover:text-foreground">
            Work
          </a>
          <a href="#about" className="hover:text-foreground">
            About
          </a>
          <a href="#contact" className="hover:text-foreground">
            Contact
          </a>
          <a
            href="https://www.linkedin.com/in/balajiramesh2908/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground"
          >
            LinkedIn ↗
          </a>
          <a
            href="https://www.behance.net/balajiramesh1"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground"
          >
            Behance ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
