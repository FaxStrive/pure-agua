"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Droplets, ArrowRight } from "lucide-react";
import Link from "next/link";
import { ShimmerButton } from "@/components/magicui/shimmer-button";

const STORAGE_KEY = "pureagua-scroll-cta-shown";
const SCROLL_THRESHOLD = 0.6;
const AUTO_DISMISS_MS = 8000;

export function ScrollCTA() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const hasTriggered = useRef(false);
  const dismissTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem(STORAGE_KEY);
    if (alreadyShown) {
      setDismissed(true);
      return;
    }

    const handleScroll = () => {
      if (hasTriggered.current) return;
      const scrollPercent =
        window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight);
      if (scrollPercent >= SCROLL_THRESHOLD) {
        hasTriggered.current = true;
        sessionStorage.setItem(STORAGE_KEY, "true");
        setShow(true);

        // Auto-dismiss after 8s
        dismissTimer.current = setTimeout(() => {
          setShow(false);
          setDismissed(true);
        }, AUTO_DISMISS_MS);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (dismissTimer.current) clearTimeout(dismissTimer.current);
    };
  }, []);

  const close = () => {
    setShow(false);
    setDismissed(true);
    if (dismissTimer.current) clearTimeout(dismissTimer.current);
  };

  return (
    <AnimatePresence>
      {show && !dismissed && (
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 24, stiffness: 200 }}
          className="fixed bottom-6 right-6 z-50 w-[340px] hidden lg:block"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 backdrop-blur-xl bg-white/95">
            {/* Gradient left border */}
            <div
              className="absolute left-0 top-0 bottom-0 w-1"
              style={{
                background:
                  "linear-gradient(180deg, var(--color-primary) 0%, var(--color-accent) 100%)",
              }}
            />

            {/* Close button */}
            <button
              onClick={close}
              className="absolute top-3 right-3 z-10 w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
            >
              <X className="w-3.5 h-3.5 text-gray-500" />
            </button>

            {/* Ambient glow */}
            <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-[var(--color-primary)]/10 blur-[40px] pointer-events-none" />

            <div className="relative p-5 pl-6">
              {/* Icon + badge */}
              <div className="flex items-center gap-2 mb-3">
                <div className="w-9 h-9 rounded-full bg-[rgba(var(--color-primary-rgb),0.1)] flex items-center justify-center">
                  <Droplets className="w-4.5 h-4.5 text-[var(--color-primary)]" />
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
                  </span>
                  <span className="text-xs font-semibold text-red-600">
                    Important
                  </span>
                </div>
              </div>

              <h4 className="text-base font-bold text-[var(--color-foreground)] leading-tight mb-1.5">
                Your water could be hurting your family.
              </h4>
              <p className="text-xs text-[var(--color-muted)] leading-relaxed mb-4">
                Get a free 15-minute water test. Find out exactly what is in
                your tap water. No strings attached.
              </p>

              <Link href="/contact" onClick={close}>
                <ShimmerButton
                  shimmerColor="#3BD6F5"
                  background="var(--color-primary)"
                  borderRadius="10px"
                  className="w-full text-xs font-semibold px-4 py-3 group"
                >
                  Get Your Free Water Test
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-0.5 transition-transform" />
                </ShimmerButton>
              </Link>
            </div>

            {/* Countdown bar */}
            <motion.div
              initial={{ scaleX: 1 }}
              animate={{ scaleX: 0 }}
              transition={{ duration: AUTO_DISMISS_MS / 1000, ease: "linear" }}
              className="h-0.5 bg-[var(--color-primary)] origin-left"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
