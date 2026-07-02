const values = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: "Innovative Solutions",
    desc: "Cutting-edge tech that pushes boundaries.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <path d="M8 6l-4 6 4 6M16 6l4 6-4 6M14 4l-4 16" />
      </svg>
    ),
    title: "Clean Code",
    desc: "Maintainable, scalable architecture.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" />
        <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    ),
    title: "Scalable Growth",
    desc: "Built to evolve with your business.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Reliable Partner",
    desc: "Trusted from concept to launch.",
  },
];

export function Hero() {
  return (
    <section id="about" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(10,15,245,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(0,240,255,0.08),transparent_50%)]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-20">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#00F0FF]/20 bg-[#00F0FF]/5 px-4 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-[#00F0FF] animate-pulse" />
          <span className="text-xs font-medium tracking-widest text-[#00F0FF] uppercase">
            Software House
          </span>
        </div>

        <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
          Digital solutions.{" "}
          <span className="bg-gradient-to-r from-[#0A0FF5] to-[#00F0FF] bg-clip-text text-transparent">
            Engineered for growth.
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/60">
          Evo Solutions is a digital agency that helps brands evolve, innovate, and scale with
          powerful technology and creative strategy.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-gradient-to-r from-[#0A0FF5] to-[#00F0FF] px-8 py-3.5 text-sm font-semibold text-white shadow-[0_0_30px_rgba(10,15,245,0.35)] transition-all hover:shadow-[0_0_40px_rgba(0,240,255,0.45)] hover:brightness-110"
          >
            Start a Project
          </a>
          <a
            href="#services"
            className="inline-flex items-center rounded-full border border-white/10 px-8 py-3.5 text-sm font-semibold text-white/80 transition-colors hover:border-[#00F0FF]/40 hover:text-[#00F0FF]"
          >
            Our Services
          </a>
        </div>

        <div id="services" className="mt-24 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-all hover:border-[#00F0FF]/20 hover:bg-[#00F0FF]/[0.03]"
            >
              <div className="mb-4 inline-flex rounded-lg border border-[#00F0FF]/20 bg-[#00F0FF]/5 p-2.5 text-[#00F0FF] transition-colors group-hover:border-[#00F0FF]/40 group-hover:bg-[#00F0FF]/10">
                {item.icon}
              </div>
              <h3 className="text-sm font-bold tracking-wide text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/50">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
