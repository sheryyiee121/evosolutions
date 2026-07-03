import { services } from "../data/services";
import { ServiceIcon } from "./ServiceIcon";

export function Services() {
  return (
    <section id="services" className="border-t border-white/5 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-bold tracking-widest text-[#00F0FF] uppercase">Services</p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Everything you need to{" "}
            <span className="bg-gradient-to-r from-[#0A0FF5] to-[#00F0FF] bg-clip-text text-transparent">
              build & grow
            </span>
          </h2>
          <p className="mt-4 text-white/50">
            From intelligent AI agents to full-stack development and marketing — we ship end-to-end
            digital solutions.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.id}
              id={`service-${service.id}`}
              className="group scroll-mt-28 rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-all hover:border-[#00F0FF]/25 hover:bg-[#00F0FF]/[0.03] hover:shadow-[0_0_40px_rgba(0,240,255,0.06)]"
            >
              <div className="mb-5 inline-flex rounded-xl border border-[#00F0FF]/20 bg-[#00F0FF]/5 p-3 text-[#00F0FF] transition-all group-hover:border-[#00F0FF]/40 group-hover:bg-[#00F0FF]/10">
                <ServiceIcon type={service.icon} className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-white">{service.title}</h3>
              <p className="mt-1 text-sm text-[#00F0FF]/70">{service.short}</p>
              <p className="mt-3 text-sm leading-relaxed text-white/45">{service.description}</p>
              <a
                href="#contact"
                className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-white/60 transition-colors group-hover:text-[#00F0FF]"
              >
                Get a quote
                <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
