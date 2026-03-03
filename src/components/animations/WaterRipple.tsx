"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

export function WaterRipple() {
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const gradientX = useTransform(springX, [0, 1], [20, 80]);
  const gradientY = useTransform(springY, [0, 1], [20, 80]);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth);
      mouseY.set(e.clientY / window.innerHeight);
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, [mouseX, mouseY]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Main flowing gradient */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 50% 40%, rgba(var(--color-primary-rgb), 0.08) 0%, transparent 70%)`,
        }}
      />

      {/* Mouse-follow light */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          left: useTransform(gradientX, (v) => `${v}%`),
          top: useTransform(gradientY, (v) => `${v}%`),
          x: "-50%",
          y: "-50%",
          background:
            "radial-gradient(circle, rgba(var(--color-primary-rgb), 0.06) 0%, transparent 70%)",
        }}
      />

      {/* Flowing wave layers */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-40"
        animate={{ x: [0, -100, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <svg
          viewBox="0 0 2880 120"
          className="w-[200%] h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C480,120 960,0 1440,60 C1920,120 2400,0 2880,60 L2880,120 L0,120 Z"
            fill="rgba(var(--color-primary-rgb), 0.03)"
          />
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-0 left-0 right-0 h-32"
        animate={{ x: [0, 80, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      >
        <svg
          viewBox="0 0 2880 100"
          className="w-[200%] h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,50 C360,100 720,0 1080,50 C1440,100 1800,0 2160,50 C2520,100 2880,0 2880,50 L2880,100 L0,100 Z"
            fill="rgba(var(--color-secondary-rgb), 0.02)"
          />
        </svg>
      </motion.div>
    </div>
  );
}
