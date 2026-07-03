"use client";

import { useState } from "react";
import { Logo } from "./Logo";
import { ServicesDropdown, ServicesMobileList } from "./ServicesDropdown";

const navLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Blog", href: "#blog" },
  { label: "About", href: "#about" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#0D0D0D]/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#" aria-label="EVO Solutions home" className="shrink-0">
          <Logo size="sm" />
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          <ServicesDropdown />
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium tracking-wide text-white/70 transition-colors hover:text-[#00F0FF]"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="text-sm font-medium tracking-wide text-white/70 transition-colors hover:text-[#00F0FF]"
            >
              Contact
            </a>
          </li>
        </ul>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-gradient-to-r from-[#0A0FF5] to-[#00F0FF] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_20px_rgba(10,15,245,0.4)] transition-all hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] hover:brightness-110"
          >
            Get Started
          </a>
        </div>

        <button
          type="button"
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span className={`block h-0.5 w-6 bg-white transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-white transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/5 bg-[#0D0D0D]/95 px-6 py-6 md:hidden">
          <ul className="flex flex-col gap-4">
            <ServicesMobileList onNavigate={close} />
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-base font-medium text-white/80 hover:text-[#00F0FF]" onClick={close}>
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#contact" className="text-base font-medium text-white/80 hover:text-[#00F0FF]" onClick={close}>
                Contact
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="inline-flex rounded-full bg-gradient-to-r from-[#0A0FF5] to-[#00F0FF] px-5 py-2.5 text-sm font-semibold text-white"
                onClick={close}
              >
                Get Started
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
