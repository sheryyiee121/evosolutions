"use client";

import { useState } from "react";
import { services } from "../data/services";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="relative border-t border-white/5 py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(10,15,245,0.08),transparent_70%)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-xs font-bold tracking-widest text-[#00F0FF] uppercase">Contact</p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Let&apos;s build something{" "}
            <span className="bg-gradient-to-r from-[#0A0FF5] to-[#00F0FF] bg-clip-text text-transparent">
              together
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/50">
            Tell us about your project — AI, web, mobile, 3D, or marketing. We&apos;ll reply within 24 hours.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="flex flex-col gap-5">
            {[
              {
                label: "Email",
                value: "hello@evosolutions.com",
                href: "mailto:hello@evosolutions.com",
                icon: (
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                ),
              },
              {
                label: "Response time",
                value: "Within 24 hours",
                icon: <path d="M12 8v4l3 3M12 22a10 10 0 110-20 10 10 0 010 20z" />,
              },
              {
                label: "Services",
                value: "AI · Web · Mobile · 3D · SEO",
                icon: (
                  <path d="M4 6h16M4 12h16M4 18h10" />
                ),
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#00F0FF]/20 bg-[#00F0FF]/5 text-[#00F0FF]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
                    {item.icon}
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold tracking-widest text-[#00F0FF] uppercase">{item.label}</p>
                  {"href" in item && item.href ? (
                    <a href={item.href} className="mt-1 block text-white/80 hover:text-[#00F0FF]">
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-1 text-white/80">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="rounded-2xl border border-[#00F0FF]/10 bg-gradient-to-br from-[#0A0FF5]/10 to-[#00F0FF]/5 p-5">
              <p className="text-sm font-semibold text-white">Free consultation</p>
              <p className="mt-1 text-sm text-white/50">
                Not sure which service fits? Book a free 30-min discovery call.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#111]/80 p-8 backdrop-blur-xl">
            {submitted ? (
              <div className="flex h-full min-h-[360px] flex-col items-center justify-center text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#00F0FF]/30 bg-[#00F0FF]/10 text-[#00F0FF]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-7 w-7">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="mt-5 text-xl font-bold text-white">Message sent!</h3>
                <p className="mt-2 text-white/50">We&apos;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-white/60">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/25 focus:border-[#00F0FF]/40"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-white/60">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/25 focus:border-[#00F0FF]/40"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="mb-1.5 block text-xs font-medium text-white/60">
                    Service interested in
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-[#00F0FF]/40"
                  >
                    {services.map((s) => (
                      <option key={s.id} value={s.id} className="bg-[#111]">
                        {s.title}
                      </option>
                    ))}
                    <option value="other" className="bg-[#111]">
                      Other / Not sure
                    </option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-white/60">
                    Project details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/25 focus:border-[#00F0FF]/40"
                    placeholder="Tell us about your project, timeline, and goals..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-gradient-to-r from-[#0A0FF5] to-[#00F0FF] py-3.5 text-sm font-semibold text-white shadow-[0_0_30px_rgba(10,15,245,0.35)] transition-all hover:shadow-[0_0_40px_rgba(0,240,255,0.45)] hover:brightness-110"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
