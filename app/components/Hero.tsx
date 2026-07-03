export function Hero() {
  return (
    <section id="about" className="relative flex min-h-[90vh] items-center overflow-hidden pt-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(10,15,245,0.18),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(0,240,255,0.1),transparent_50%)]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-16">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#00F0FF]/20 bg-[#00F0FF]/5 px-4 py-1.5">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#00F0FF]" />
          <span className="text-xs font-medium tracking-widest text-[#00F0FF] uppercase">Software House</span>
        </div>

        <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
          Digital solutions.{" "}
          <span className="bg-gradient-to-r from-[#0A0FF5] to-[#00F0FF] bg-clip-text text-transparent">
            Engineered for growth.
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
          Evo Solutions builds agentic AI systems, web & mobile apps, custom software, 3D experiences,
          and SEO-driven marketing — helping brands evolve, innovate, and scale.
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
            Explore Services
          </a>
        </div>

        <div className="mt-16 flex flex-wrap gap-8 border-t border-white/5 pt-10">
          {[
            { value: "50+", label: "Projects Delivered" },
            { value: "6", label: "Core Services" },
            { value: "24h", label: "Response Time" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl font-bold text-[#00F0FF]">{stat.value}</p>
              <p className="mt-1 text-sm text-white/40">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
