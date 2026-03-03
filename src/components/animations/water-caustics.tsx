"use client";

import { useRef, useEffect, useId } from "react";

interface WaterCausticsProps {
  variant?: "light" | "dark";
  className?: string;
  speed?: number;
}

export default function WaterCaustics({
  variant = "light",
  className = "",
  speed = 10,
}: WaterCausticsProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const rafRef = useRef<number>(0);
  const startRef = useRef<number>(0);
  const filterId = useId().replace(/:/g, "");
  const opacity = variant === "light" ? 0.04 : 0.1;

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const turbulence = svg.querySelector("feTurbulence");
    if (!turbulence) return;

    const animate = (t: number) => {
      if (!startRef.current) startRef.current = t;
      const elapsed = (t - startRef.current) / 1000;
      const freq = 0.012 + Math.sin(elapsed / speed * Math.PI * 2) * 0.005;
      turbulence.setAttribute("baseFrequency", `${freq} ${freq * 1.3}`);
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [speed]);

  return (
    <svg
      ref={svgRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      style={{ opacity }}
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <defs>
        <filter id={`caustics-${filterId}`} x="0%" y="0%" width="100%" height="100%">
          <feTurbulence
            type="turbulence"
            baseFrequency="0.012 0.016"
            numOctaves={3}
            seed={42}
            result="turbulence"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="turbulence"
            scale={variant === "light" ? 20 : 35}
            xChannelSelector="R"
            yChannelSelector="G"
          />
          <feGaussianBlur stdDeviation="8" />
        </filter>
      </defs>
      <rect
        x="0"
        y="0"
        width="100%"
        height="100%"
        fill={variant === "light" ? "url(#causticsFillLight)" : "url(#causticsFillDark)"}
        filter={`url(#caustics-${filterId})`}
      />
      <defs>
        <radialGradient id="causticsFillLight" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#3BD6F5" />
          <stop offset="50%" stopColor="#009FE3" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="causticsFillDark" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stopColor="#3BD6F5" />
          <stop offset="40%" stopColor="#009FE3" />
          <stop offset="100%" stopColor="#084978" />
        </radialGradient>
      </defs>
    </svg>
  );
}
