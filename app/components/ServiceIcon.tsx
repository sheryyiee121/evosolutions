export function ServiceIcon({ type, className = "h-5 w-5" }: { type: string; className?: string }) {
  const props = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.5, className };

  switch (type) {
    case "ai":
      return (
        <svg {...props}>
          <path d="M12 2a4 4 0 014 4v1h2a2 2 0 012 2v2a2 2 0 01-2 2h-1v1a4 4 0 01-8 0v-1H6a2 2 0 01-2-2v-2a2 2 0 012-2h2V6a4 4 0 014-4z" />
          <circle cx="9" cy="10" r="1" fill="currentColor" stroke="none" />
          <circle cx="15" cy="10" r="1" fill="currentColor" stroke="none" />
          <path d="M9 14h6" />
        </svg>
      );
    case "web":
      return (
        <svg {...props}>
          <rect x="3" y="4" width="18" height="14" rx="2" />
          <path d="M3 8h18M8 4V2M16 4V2" />
        </svg>
      );
    case "software":
      return (
        <svg {...props}>
          <path d="M8 6l-4 6 4 6M16 6l4 6-4 6M14 4l-4 16" />
        </svg>
      );
    case "mobile":
      return (
        <svg {...props}>
          <rect x="7" y="2" width="10" height="20" rx="2" />
          <path d="M11 18h2" />
        </svg>
      );
    case "3d":
      return (
        <svg {...props}>
          <path d="M12 3L21 8.5v7L12 21 3 15.5v-7L12 3z" />
          <path d="M12 12l9-3.5M12 12v9M12 12L3 8.5" />
        </svg>
      );
    case "seo":
      return (
        <svg {...props}>
          <path d="M3 17l6-6 4 4 8-8" />
          <path d="M14 7h7v7" />
        </svg>
      );
    default:
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
  }
}
