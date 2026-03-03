"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Phone, Calendar } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function StickyBottomBar() {
  const [visible, setVisible] = useState(false);
  const [nearFooter, setNearFooter] = useState(false);
  const { scrollY } = useScroll();
  const { t } = useLanguage();

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Show after scrolling past ~500px (hero section)
    setVisible(latest > 500);

    // Hide near footer
    const docHeight = document.documentElement.scrollHeight;
    const winHeight = window.innerHeight;
    setNearFooter(latest > docHeight - winHeight - 300);
  });

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  if (!isMobile) return null;

  return (
    <AnimatePresence>
      {visible && !nearFooter && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 z-50 lg:hidden"
          initial={{ y: 80 }}
          animate={{ y: 0 }}
          exit={{ y: 80 }}
          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div
            className="px-3 py-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom))]"
            style={{
              background: "linear-gradient(135deg, var(--color-dark) 0%, var(--color-primary) 100%)",
            }}
          >
            <div className="flex items-center gap-2">
              <span className="text-white/90 text-xs font-medium shrink-0 hidden xs:block">
                {t("stickyBar", "label")}
              </span>
              <div className="flex items-center gap-2 flex-1 ml-auto justify-end">
                <a
                  href="tel:+1"
                  className="flex items-center gap-1.5 bg-white/15 hover:bg-white/25 text-white rounded-full px-4 py-2 text-xs font-semibold transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  {t("stickyBar", "callNow")}
                </a>
                <Link
                  href="/contact"
                  className="flex items-center gap-1.5 bg-white text-[var(--color-dark)] rounded-full px-4 py-2 text-xs font-bold transition-colors hover:bg-white/90"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  {t("stickyBar", "bookOnline")}
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
