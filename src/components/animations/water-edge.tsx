"use client";

import { useRef, useEffect, useState } from "react";

interface WaterEdgeProps {
  children: React.ReactNode;
  colorFrom?: string;
  colorMid?: string;
  colorTo?: string;
  borderWidth?: number;
  alwaysActive?: boolean;
  className?: string;
  borderRadius?: string;
}

export function WaterEdge({
  children,
  colorFrom = "#009FE3",
  colorMid = "#3BD6F5",
  colorTo = "#009FE3",
  borderWidth = 1.5,
  alwaysActive = false,
  className = "",
  borderRadius = "1rem",
}: WaterEdgeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const angleRef = useRef(0);
  const rafRef = useRef<number>(0);
  const [isHovered, setIsHovered] = useState(false);
  const active = alwaysActive || isHovered;

  useEffect(() => {
    if (!active || !containerRef.current) return;

    const el = containerRef.current;
    const animate = () => {
      angleRef.current = (angleRef.current + 0.8) % 360;
      el.style.setProperty("--water-angle", `${angleRef.current}deg`);
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(rafRef.current);
  }, [active]);

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={
        {
          "--water-angle": "0deg",
          borderRadius,
        } as React.CSSProperties
      }
    >
      {/* Flowing conic-gradient border */}
      <div
        className="absolute inset-0 rounded-[inherit] pointer-events-none transition-opacity duration-500"
        style={{
          opacity: active ? 1 : 0,
          padding: borderWidth,
          background: `conic-gradient(from var(--water-angle), ${colorFrom}, ${colorMid}, ${colorTo}, ${colorFrom})`,
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
        aria-hidden="true"
      />
      {/* Static subtle border when not active */}
      <div
        className="absolute inset-0 rounded-[inherit] pointer-events-none transition-opacity duration-500"
        style={{
          opacity: active ? 0 : 1,
          border: `${borderWidth}px solid rgba(0,159,227,0.12)`,
        }}
        aria-hidden="true"
      />
      {children}
    </div>
  );
}
