"use client";

import { useState } from "react";
import { services } from "../data/services";
import { ServiceIcon } from "./ServiceIcon";

export function ServicesDropdown({ onNavigate }: { onNavigate?: () => void }) {
  const [open, setOpen] = useState(false);

  return (
    <li
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className="flex items-center gap-1.5 text-sm font-medium tracking-wide text-white/70 transition-colors hover:text-[#00F0FF]"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        Services
        <svg
          viewBox="0 0 12 12"
          className={`h-3 w-3 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M2 4l4 4 4-4" />
        </svg>
      </button>

      <div
        className={`absolute left-1/2 top-full z-50 pt-4 -translate-x-1/2 transition-all duration-300 ${
          open ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <div className="w-[520px] overflow-hidden rounded-2xl border border-white/10 bg-[#111]/95 shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_40px_rgba(0,240,255,0.08)] backdrop-blur-2xl">
          <div className="border-b border-white/5 bg-gradient-to-r from-[#0A0FF5]/10 to-[#00F0FF]/5 px-5 py-4">
            <p className="text-xs font-bold tracking-widest text-[#00F0FF] uppercase">What we build</p>
            <p className="mt-1 text-sm text-white/50">Full-stack digital products & growth services</p>
          </div>
          <div className="grid grid-cols-2 gap-1 p-2">
            {services.map((service) => (
              <a
                key={service.id}
                href={`#service-${service.id}`}
                className="group flex gap-3 rounded-xl p-3 transition-all hover:bg-white/[0.04]"
                onClick={() => {
                  setOpen(false);
                  onNavigate?.();
                }}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#00F0FF]/20 bg-[#00F0FF]/5 text-[#00F0FF] transition-all group-hover:border-[#00F0FF]/50 group-hover:bg-[#00F0FF]/10 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.15)]">
                  <ServiceIcon type={service.icon} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white group-hover:text-[#00F0FF]">{service.title}</p>
                  <p className="mt-0.5 text-xs leading-relaxed text-white/40">{service.short}</p>
                </div>
              </a>
            ))}
          </div>
          <div className="border-t border-white/5 px-5 py-3">
            <a
              href="#services"
              className="text-xs font-medium text-[#00F0FF] hover:underline"
              onClick={() => {
                setOpen(false);
                onNavigate?.();
              }}
            >
              View all services →
            </a>
          </div>
        </div>
      </div>
    </li>
  );
}

export function ServicesMobileList({ onNavigate }: { onNavigate?: () => void }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <li>
      <button
        type="button"
        className="flex w-full items-center justify-between text-base font-medium text-white/80"
        onClick={() => setExpanded(!expanded)}
      >
        Services
        <svg
          viewBox="0 0 12 12"
          className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M2 4l4 4 4-4" />
        </svg>
      </button>
      {expanded && (
        <ul className="mt-3 flex flex-col gap-2 border-l border-[#00F0FF]/20 pl-4">
          {services.map((service) => (
            <li key={service.id}>
              <a
                href={`#service-${service.id}`}
                className="flex items-center gap-2 text-sm text-white/60 hover:text-[#00F0FF]"
                onClick={onNavigate}
              >
                <ServiceIcon type={service.icon} className="h-4 w-4" />
                {service.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
