"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const STORAGE_KEY = "pureagua-promo-dismissed";

export function PromoBanner({ onVisibilityChange }: { onVisibilityChange?: (visible: boolean) => void }) {
  const [visible, setVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const dismissed = sessionStorage.getItem(STORAGE_KEY);
    if (!dismissed) {
      const timer = setTimeout(() => {
        setVisible(true);
        onVisibilityChange?.(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [onVisibilityChange]);

  const dismiss = () => {
    setVisible(false);
    sessionStorage.setItem(STORAGE_KEY, "true");
    onVisibilityChange?.(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed top-0 left-0 right-0 z-[60]"
          initial={{ y: -60 }}
          animate={{ y: 0 }}
          exit={{ y: -60 }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div
            className="relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, var(--color-dark) 0%, var(--color-primary) 60%, var(--color-secondary) 100%)",
            }}
          >
            {/* Animated shimmer */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <motion.div
                className="absolute inset-y-0 w-[200px] bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg]"
                animate={{ x: ["-200px", "calc(100vw + 200px)"] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 4, ease: "linear" }}
              />
            </div>

            <div className="container-custom flex items-center justify-center gap-3 sm:gap-4 py-2.5 sm:py-3 relative">
              <Link
                href="/contact"
                className="flex items-center gap-2 sm:gap-3 text-white group"
              >
                <span className="text-xs sm:text-sm font-semibold tracking-wide text-center leading-tight">
                  {t("promoBanner", "text")}
                </span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>

              <button
                onClick={(e) => {
                  e.preventDefault();
                  dismiss();
                }}
                className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 p-1.5 text-white/60 hover:text-white transition-colors rounded-full hover:bg-white/10"
                aria-label="Dismiss promotion"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
