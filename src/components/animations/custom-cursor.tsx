"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { stiffness: 300, damping: 28 });
  const springY = useSpring(cursorY, { stiffness: 300, damping: 28 });
  const scale = useSpring(1, { stiffness: 300, damping: 20 });

  useEffect(() => {
    const isDesktop = window.matchMedia("(pointer: fine)").matches;
    if (!isDesktop) return;

    setIsVisible(true);

    const onMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const onEnterInteractive = () => {
      setIsHovering(true);
      scale.set(2.4);
    };

    const onLeaveInteractive = () => {
      setIsHovering(false);
      scale.set(1);
    };

    window.addEventListener("mousemove", onMove);

    const addListeners = () => {
      const targets = document.querySelectorAll(
        'a, button, [role="button"], input, textarea, select, .cursor-pointer'
      );
      targets.forEach((el) => {
        el.addEventListener("mouseenter", onEnterInteractive);
        el.addEventListener("mouseleave", onLeaveInteractive);
      });
      return targets;
    };

    let targets = addListeners();

    const interval = setInterval(() => {
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", onEnterInteractive);
        el.removeEventListener("mouseleave", onLeaveInteractive);
      });
      targets = addListeners();
    }, 3000);

    return () => {
      window.removeEventListener("mousemove", onMove);
      clearInterval(interval);
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", onEnterInteractive);
        el.removeEventListener("mouseleave", onLeaveInteractive);
      });
    };
  }, [cursorX, cursorY, scale]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-5 h-5 rounded-full border-2 pointer-events-none z-[9999] mix-blend-difference"
      style={{
        x: springX,
        y: springY,
        scale,
        translateX: "-50%",
        translateY: "-50%",
        borderColor: isHovering ? "var(--color-accent)" : "var(--color-primary)",
        backgroundColor: isHovering ? "rgba(var(--color-accent-rgb), 0.1)" : "transparent",
        transition: "border-color 0.3s, background-color 0.3s",
      }}
    />
  );
}
