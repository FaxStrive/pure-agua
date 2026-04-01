"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Phone, MessageCircle, FileText } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { trackPhoneConversion } from "@/lib/gtag";

export function MobileCallBar() {
  const [visible, setVisible] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const { t } = useLanguage();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 600);
  });

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  if (!isMobile || pathname === "/contact") return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 z-50 lg:hidden"
          initial={{ y: 80 }}
          animate={{ y: 0 }}
          exit={{ y: 80 }}
          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div
            className="px-2 py-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))]"
            style={{
              background: "linear-gradient(135deg, var(--color-dark) 0%, var(--color-primary) 100%)",
            }}
          >
            <div className="grid grid-cols-3 gap-1.5">
              <a
                href="tel:+14077732883"
                onClick={() => trackPhoneConversion()}
                className="flex flex-col items-center gap-1 bg-white/15 hover:bg-white/25 text-white rounded-xl px-2 py-2.5 text-[11px] font-semibold transition-colors"
              >
                <Phone className="w-4 h-4" />
                {t("mobileCallBar", "callNow")}
              </a>
              <a
                href="sms:+14077732883"
                className="flex flex-col items-center gap-1 bg-white/15 hover:bg-white/25 text-white rounded-xl px-2 py-2.5 text-[11px] font-semibold transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                {t("mobileCallBar", "textUs")}
              </a>
              <Link
                href="/contact"
                className="flex flex-col items-center gap-1 bg-white text-[var(--color-dark)] rounded-xl px-2 py-2.5 text-[11px] font-bold transition-colors hover:bg-white/90"
              >
                <FileText className="w-4 h-4" />
                {t("mobileCallBar", "freeQuote")}
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
