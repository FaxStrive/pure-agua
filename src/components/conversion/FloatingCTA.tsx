"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Phone, Calendar } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [nearFooter, setNearFooter] = useState(false);
  const [hovered, setHovered] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const { t } = useLanguage();

  const isServicePage = pathname?.startsWith("/services/") ?? false;

  useMotionValueEvent(scrollY, "change", (latest) => {
    const docHeight = document.documentElement.scrollHeight;
    const winHeight = window.innerHeight;
    const scrollPercent = latest / (docHeight - winHeight);
    setVisible(scrollPercent > 0.3);
    setNearFooter(latest > docHeight - winHeight - 300);
  });

  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  if (!isServicePage || !isDesktop) return null;

  return (
    <AnimatePresence>
      {visible && !nearFooter && (
        <motion.div
          className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden lg:block"
          initial={{ x: 80 }}
          animate={{ x: 0 }}
          exit={{ x: 80 }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <motion.div
            className="relative overflow-hidden rounded-l-2xl shadow-xl shadow-[rgba(var(--color-primary-rgb),0.2)]"
            animate={{ width: hovered ? 200 : 48 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              background: "linear-gradient(180deg, var(--color-dark) 0%, var(--color-primary) 100%)",
            }}
          >
            {/* Collapsed: vertical text + pulsing dot */}
            <AnimatePresence mode="wait">
              {!hovered ? (
                <motion.div
                  key="collapsed"
                  className="flex flex-col items-center py-6 px-3 gap-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  {/* Pulsing dot */}
                  <div className="relative">
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                    <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75" />
                  </div>

                  {/* Rotated text */}
                  <span
                    className="text-white text-xs font-bold tracking-widest uppercase whitespace-nowrap"
                    style={{
                      writingMode: "vertical-lr",
                      textOrientation: "mixed",
                    }}
                  >
                    {t("floatingCta", "label")}
                  </span>
                </motion.div>
              ) : (
                <motion.div
                  key="expanded"
                  className="p-4 space-y-3 min-h-[180px]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15, delay: 0.1 }}
                >
                  <p className="text-white text-sm font-bold leading-tight">
                    {t("floatingCta", "heading")}
                  </p>

                  <a
                    href="tel:+1"
                    className="flex items-center gap-2 text-white/80 hover:text-white text-xs font-medium transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    {t("floatingCta", "callUs")}
                  </a>

                  <Link
                    href="/contact"
                    className="flex items-center gap-2 bg-white text-[var(--color-dark)] rounded-lg px-3 py-2 text-xs font-bold hover:bg-white/90 transition-colors"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    {t("floatingCta", "bookNow")}
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
