export type Service = {
  id: string;
  title: string;
  short: string;
  description: string;
  icon: string;
};

export const services: Service[] = [
  {
    id: "agentic-ai",
    title: "Agentic AI",
    short: "Autonomous AI agents that work for you",
    description:
      "Custom AI agents that automate workflows, support decisions, and scale operations around the clock.",
    icon: "ai",
  },
  {
    id: "web-development",
    title: "Web Development",
    short: "Fast, modern, conversion-focused sites",
    description:
      "High-performance websites and web apps built with clean architecture and stunning UX.",
    icon: "web",
  },
  {
    id: "software-development",
    title: "Software Development",
    short: "Custom platforms & internal tools",
    description:
      "Tailored software solutions from MVPs to enterprise systems — built to grow with your business.",
    icon: "software",
  },
  {
    id: "mobile-apps",
    title: "Mobile Applications",
    short: "iOS & Android apps users love",
    description:
      "Native and cross-platform mobile apps with smooth performance and polished interfaces.",
    icon: "mobile",
  },
  {
    id: "3d-development",
    title: "3D Development",
    short: "Immersive visuals & 3D experiences",
    description:
      "3D modeling, product visualization, and interactive experiences for web and marketing.",
    icon: "3d",
  },
  {
    id: "seo-marketing",
    title: "SEO & Marketing",
    short: "Get found. Get leads. Grow faster.",
    description:
      "Search optimization, content strategy, and digital campaigns that drive measurable growth.",
    icon: "seo",
  },
];

export const blogPosts = [
  {
    slug: "agentic-ai-for-business",
    title: "How Agentic AI Is Changing Software Delivery",
    excerpt: "Autonomous agents are reshaping how teams build, ship, and support digital products.",
    date: "Jun 28, 2026",
    tag: "AI",
  },
  {
    slug: "mvp-to-scale",
    title: "From MVP to Scale: What Founders Get Wrong",
    excerpt: "The architecture decisions that matter most when your product starts gaining traction.",
    date: "Jun 20, 2026",
    tag: "Product",
  },
  {
    slug: "seo-for-software-houses",
    title: "SEO Playbook for B2B Tech Brands",
    excerpt: "Practical steps to rank higher and convert more visitors into qualified leads.",
    date: "Jun 12, 2026",
    tag: "Marketing",
  },
];

export const howItWorksSteps = [
  {
    step: "01",
    title: "Discovery",
    desc: "We learn your goals, users, and constraints — then map the smartest path forward.",
  },
  {
    step: "02",
    title: "Strategy & Design",
    desc: "Architecture, UX, and a clear roadmap so everyone knows what we're building and why.",
  },
  {
    step: "03",
    title: "Build & Iterate",
    desc: "Agile delivery with clean code, regular demos, and room to refine as we go.",
  },
  {
    step: "04",
    title: "Launch & Grow",
    desc: "Deploy, optimize, and support — plus SEO and marketing to keep momentum.",
  },
];
