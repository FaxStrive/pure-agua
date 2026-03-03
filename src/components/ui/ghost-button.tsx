"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface GhostButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export const GhostButton = React.forwardRef<HTMLButtonElement, GhostButtonProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "relative rounded-xl px-6 py-3 font-semibold cursor-pointer",
          "border border-[var(--color-border)] text-[var(--color-muted)]",
          "transition-all duration-400 ease-out",
          "hover:text-[var(--color-primary)] hover:border-[var(--color-primary)]/40",
          "active:scale-[0.98]",
          className
        )}
        style={{
          boxShadow: "0 0 0 rgba(0,159,227,0)",
          transition: "box-shadow 0.4s ease, color 0.4s ease, border-color 0.4s ease",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.boxShadow =
            `0 0 20px rgba(0,159,227,0.15), 0 0 40px rgba(0,159,227,0.05)`;
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.boxShadow =
            "0 0 0 rgba(0,159,227,0)";
        }}
        {...props}
      >
        <span className="flex items-center justify-center gap-2">{children}</span>
      </button>
    );
  }
);

GhostButton.displayName = "GhostButton";
