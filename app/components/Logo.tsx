import Image from "next/image";

const LOGO_SRC = "/logo.png";

const sizes = {
  sm: { height: 52, className: "h-[52px] w-auto min-w-[140px]" },
  md: { height: 64, className: "h-16 w-auto min-w-[170px]" },
  lg: { height: 80, className: "h-20 w-auto min-w-[210px]" },
};

export function Logo({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const { height, className } = sizes[size];

  return (
    <Image
      src={LOGO_SRC}
      alt="EVO Solutions"
      width={Math.round(height * 3.2)}
      height={height}
      className={`${className} object-contain object-left`}
      priority={size === "sm"}
      unoptimized
    />
  );
}
