import { Logo } from "./Logo";
import { services } from "../data/services";

const footerLinks = {
  Company: [
    { label: "About", href: "#about" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Blog", href: "#blog" },
  ],
  Connect: [
    { label: "Contact", href: "#contact" },
    { label: "LinkedIn", href: "#" },
    { label: "GitHub", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#080808]">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Logo size="md" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/40">
              Digital solutions. Engineered for growth.
            </p>
            <p className="mt-6 text-sm text-white/30">hello@evosolutions.com</p>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-bold tracking-widest text-[#00F0FF] uppercase">Services</h4>
            <ul className="flex flex-col gap-3">
              {services.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#service-${s.id}`}
                    className="text-sm text-white/50 transition-colors hover:text-[#00F0FF]"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="mb-4 text-xs font-bold tracking-widest text-[#00F0FF] uppercase">{heading}</h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/50 transition-colors hover:text-[#00F0FF]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} EVO Solutions. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy", "Terms"].map((item) => (
              <a key={item} href="#" className="text-xs text-white/30 transition-colors hover:text-[#00F0FF]">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
