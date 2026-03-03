"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, AlertTriangle } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function SlideInCTA() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    if (dismissed) return;

    const alreadyDismissed = sessionStorage.getItem("pureagua-slide-cta-dismissed");
    if (alreadyDismissed) {
      setDismissed(true);
      return;
    }

    const timer = setTimeout(() => {
      setShow(true);
    }, 45000);

    const autoHide = setTimeout(() => {
      setShow(false);
    }, 60000);

    return () => {
      clearTimeout(timer);
      clearTimeout(autoHide);
    };
  }, [dismissed]);

  const close = () => {
    setShow(false);
    setDismissed(true);
    sessionStorage.setItem("pureagua-slide-cta-dismissed", "true");
  };

  return (
    <AnimatePresence>
      {show && !dismissed && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 26, stiffness: 220 }}
          className="fixed bottom-6 left-6 z-50 hidden lg:block w-[360px]"
        >
          <div className="relative bg-gradient-to-br from-[var(--color-dark-900)] to-[var(--color-dark-800)] rounded-2xl shadow-2xl overflow-hidden">
            <button
              onClick={close}
              className="absolute top-3 right-3 z-10 w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <X className="w-3.5 h-3.5 text-white/60" />
            </button>

            <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-[var(--color-accent)]/20 blur-[40px] pointer-events-none" />

            <div className="relative p-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.15, damping: 12 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/30 mb-4"
              >
                <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-xs font-bold text-amber-300">
                  {t("slideInCta", "badge") || "Did you know?"}
                </span>
              </motion.div>

              <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                {t("slideInCta", "headline") || (
                  <>
                    Florida tap water contains{" "}
                    <span className="text-[var(--color-accent)]">15+ contaminants</span>{" "}
                    above health guidelines
                  </>
                )}
              </h3>
              <p className="text-sm text-white/50 leading-relaxed mb-5">
                {t("slideInCta", "subtext") ||
                  "Find out exactly what's in your water with a free 15-minute test. No strings attached."}
              </p>

              <Link href="/contact" onClick={close}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-[var(--color-accent)] text-white text-sm font-bold transition-colors hover:bg-[var(--color-accent-dark)]"
                >
                  {t("slideInCta", "cta") || "See What's In Your Water"}
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </Link>
            </div>

            <motion.div
              initial={{ scaleX: 1 }}
              animate={{ scaleX: 0 }}
              transition={{ duration: 15, ease: "linear" }}
              className="h-0.5 bg-[var(--color-accent)] origin-left"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
