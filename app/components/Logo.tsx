export function LogoIcon({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect x="4" y="36" width="28" height="6" rx="1" fill="#0A0FF5" />
      <rect x="4" y="21" width="20" height="6" rx="1" fill="#0A0FF5" />
      <path d="M4 6h20l12 12-6 6L18 12H4V6z" fill="#0A0FF5" />
      <path d="M24 6h8l12 12v6H30L18 12h6z" fill="#00F0FF" opacity="0.9" />
      <line x1="10" y1="24" x2="18" y2="16" stroke="#00F0FF" strokeWidth="1.5" />
      <line x1="10" y1="27" x2="16" y2="21" stroke="#00F0FF" strokeWidth="1.5" />
      <line x1="10" y1="30" x2="14" y2="26" stroke="#00F0FF" strokeWidth="1.5" />
      <circle cx="18" cy="16" r="2" fill="#00F0FF" />
    </svg>
  );
}

export function Logo({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const iconSize = size === "sm" ? "h-8 w-8" : size === "lg" ? "h-14 w-14" : "h-10 w-10";
  const textSize = size === "sm" ? "text-sm" : size === "lg" ? "text-2xl" : "text-base";

  return (
    <div className="flex items-center gap-3">
      <LogoIcon className={iconSize} />
      <div className={`leading-none ${textSize}`}>
        <span className="block font-bold tracking-wider text-white">EVO</span>
        <span className="block font-bold tracking-wider text-[#00F0FF]">SOLUTIONS</span>
      </div>
    </div>
  );
}
