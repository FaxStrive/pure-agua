"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface WaterButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  fillColor?: string;
}

export const WaterButton = React.forwardRef<HTMLButtonElement, WaterButtonProps>(
  ({ children, className, fillColor = "var(--color-primary)", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "relative overflow-hidden rounded-xl px-6 py-3 font-semibold",
          "border-2 border-[var(--color-primary)] text-[var(--color-primary)]",
          "transition-all duration-500 ease-out cursor-pointer",
          "hover:text-white hover:border-transparent",
          "active:scale-[0.98]",
          className
        )}
        {...props}
      >
        {/* Water-fill background that rises from bottom */}
        <span
          className="absolute inset-0 z-0 transition-transform duration-500 ease-out translate-y-full hover-target"
          style={{
            background: `linear-gradient(to top, ${fillColor}, color-mix(in oklch, ${fillColor}, #3BD6F5 30%))`,
          }}
          aria-hidden="true"
        />
        <span className="relative z-10 flex items-center justify-center gap-2">
          {children}
        </span>
        <style jsx>{`
          button:hover .hover-target {
            transform: translateY(0);
          }
        `}</style>
      </button>
    );
  }
);

WaterButton.displayName = "WaterButton";
