"use client";

import { motion } from "framer-motion";

interface GlassLiftCardProps {
  children: React.ReactNode;
  className?: string;
  liftAmount?: number;
}

export default function GlassLiftCard({
  children,
  className = "",
  liftAmount = 8,
}: GlassLiftCardProps) {
  return (
    <motion.div
      whileHover={{ y: -liftAmount, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className={`relative group/lift overflow-hidden ${className}`}
    >
      {children}
      {/* Light sweep across top edge on hover */}
      <div
        className="absolute inset-0 pointer-events-none z-20 opacity-0 group-hover/lift:opacity-100 transition-opacity duration-300"
        aria-hidden="true"
      >
        <div
          className="absolute top-0 left-0 right-0 h-[2px]"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(59,214,245,0.5) 30%, rgba(255,255,255,0.8) 50%, rgba(59,214,245,0.5) 70%, transparent 100%)",
            transform: "translateX(-100%)",
            animation: "lightSweep 1.2s ease-out forwards",
          }}
        />
      </div>
      {/* Shadow bloom on hover */}
      <div
        className="absolute inset-0 rounded-[inherit] pointer-events-none -z-10 transition-shadow duration-500"
        style={{
          boxShadow: "0 4px 20px rgba(0,159,227,0.05)",
        }}
        aria-hidden="true"
      />
      <style jsx>{`
        @keyframes lightSweep {
          to {
            transform: translateX(100%);
          }
        }
        .group\\/lift:hover > div:last-of-type {
          box-shadow: 0 20px 60px rgba(0, 159, 227, 0.12);
        }
      `}</style>
    </motion.div>
  );
}
