"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";

const STORAGE_KEY = "scrollRevealCTA_dismissed";

export function ScrollRevealCTA() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/contact") return;
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    const handleScroll = () => {
      const scrollPercent =
        window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight);
      if (scrollPercent >= 0.4 && !dismissed) {
        setShow(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname, dismissed]);

  useEffect(() => {
    if (!show) return;
    const timer = setTimeout(() => {
      setShow(false);
      sessionStorage.setItem(STORAGE_KEY, "1");
    }, 15000);
    return () => clearTimeout(timer);
  }, [show]);

  const handleClose = () => {
    setShow(false);
    setDismissed(true);
    sessionStorage.setItem(STORAGE_KEY, "1");
  };

  if (pathname === "/contact") return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "100%", opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-30"
        >
          <div
            className="px-4 py-4 shadow-2xl"
            style={{
              background:
                "linear-gradient(to right, var(--color-dark), var(--color-primary), var(--color-accent))",
            }}
          >
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 relative">
              <p className="text-white font-bold text-lg md:text-xl text-center md:text-left">
                Your family deserves clean water. Get a FREE water test today!
              </p>
              <div className="flex items-center gap-3 flex-shrink-0">
                <Link
                  href="/contact"
                  className="relative overflow-hidden bg-white font-bold px-6 py-3 rounded-lg transition-colors"
                  style={{ color: "var(--color-primary-dark)" }}
                >
                  <span className="relative z-10">Schedule Free Test</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </Link>
                <a
                  href="tel:4077732883"
                  className="text-white font-semibold hover:text-white/80 transition-colors whitespace-nowrap"
                >
                  (407) 773-2883
                </a>
              </div>
              <button
                onClick={handleClose}
                className="absolute top-[-8px] right-0 text-white/70 hover:text-white text-xl font-bold leading-none"
                aria-label="Close banner"
              >
                &times;
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
