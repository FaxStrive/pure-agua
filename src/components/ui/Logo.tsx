import Image from "next/image";

interface LogoProps {
  variant?: "horizontal" | "stacked";
  className?: string;
  width?: number;
  height?: number;
}

export function Logo({
  variant = "horizontal",
  className = "",
  width,
  height,
}: LogoProps) {
  if (variant === "stacked") {
    return (
      <Image
        src="/images/logo-stacked.png"
        alt="Pure Agua Enterprises"
        width={width || 180}
        height={height || 180}
        className={className}
        priority
      />
    );
  }

  return (
    <Image
      src="/images/logo-horizontal.png"
      alt="Pure Agua Enterprises"
      width={width || 200}
      height={height || 60}
      className={className}
      priority
    />
  );
}
