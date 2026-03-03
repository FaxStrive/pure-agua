"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const INITIAL_DELAY = 15000;
const SHOW_INTERVAL = 10000;
const DISPLAY_DURATION = 4000;
const MAX_TOASTS = 3;

interface ToastData {
  name: string;
  location: string;
  action: string;
  timeAgo: string;
  initial: string;
}

export function SocialProofToast() {
  const [currentToast, setCurrentToast] = useState<ToastData | null>(null);
  const [visible, setVisible] = useState(false);
  const toastCount = useRef(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const dismissRef = useRef<NodeJS.Timeout | null>(null);
  const { t } = useLanguage();

  const getToasts = useCallback((): ToastData[] => [
    {
      name: "Maria R.",
      location: t("socialProof", "kissimmee"),
      action: t("socialProof", "scheduledTest"),
      timeAgo: t("socialProof", "minutesAgo3"),
      initial: "M",
    },
    {
      name: "Carlos P.",
      location: t("socialProof", "orlando"),
      action: t("socialProof", "installedSystem"),
      timeAgo: t("socialProof", "hoursAgo2"),
      initial: "C",
    },
    {
      name: "Jennifer L.",
      location: t("socialProof", "stCloud"),
      action: t("socialProof", "scheduledTest"),
      timeAgo: t("socialProof", "minutesAgo12"),
      initial: "J",
    },
    {
      name: "Roberto M.",
      location: t("socialProof", "kissimmee"),
      action: t("socialProof", "leftReview"),
      timeAgo: t("socialProof", "hoursAgo1"),
      initial: "R",
    },
    {
      name: "Sarah K.",
      location: t("socialProof", "winterPark"),
      action: t("socialProof", "installedSystem"),
      timeAgo: t("socialProof", "minutesAgo45"),
      initial: "S",
    },
    {
      name: "David G.",
      location: t("socialProof", "orlando"),
      action: t("socialProof", "scheduledTest"),
      timeAgo: t("socialProof", "minutesAgo8"),
      initial: "D",
    },
  ], [t]);

  const showNext = useCallback(() => {
    if (toastCount.current >= MAX_TOASTS) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }

    const toasts = getToasts();
    const toast = toasts[toastCount.current % toasts.length];
    setCurrentToast(toast);
    setVisible(true);
    toastCount.current += 1;

    dismissRef.current = setTimeout(() => {
      setVisible(false);
    }, DISPLAY_DURATION);
  }, [getToasts]);

  useEffect(() => {
    const shown = sessionStorage.getItem("pureagua-social-proof-count");
    if (shown && parseInt(shown) >= MAX_TOASTS) return;

    const initialTimer = setTimeout(() => {
      showNext();
      intervalRef.current = setInterval(showNext, SHOW_INTERVAL);
    }, INITIAL_DELAY);

    return () => {
      clearTimeout(initialTimer);
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (dismissRef.current) clearTimeout(dismissRef.current);
    };
  }, [showNext]);

  // Persist count
  useEffect(() => {
    if (toastCount.current > 0) {
      sessionStorage.setItem("pureagua-social-proof-count", String(toastCount.current));
    }
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && currentToast && (
        <motion.div
          className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-40 max-w-xs"
          initial={{ opacity: 0, y: 20, x: -10 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: 10, x: -10 }}
          transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="bg-white rounded-xl shadow-xl shadow-black/10 border border-[var(--color-border)] p-3.5 flex items-start gap-3">
            {/* Avatar */}
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-sm font-bold text-white"
              style={{
                background: "linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%)",
              }}
            >
              {currentToast.initial}
            </div>

            <div className="min-w-0">
              <p className="text-sm text-[var(--color-foreground)] leading-snug">
                <span className="font-semibold">{currentToast.name}</span>{" "}
                <span className="text-[var(--color-muted)]">
                  {t("socialProof", "from")} {currentToast.location}
                </span>
              </p>
              <p className="text-sm text-[var(--color-foreground)] mt-0.5 flex items-center gap-1">
                <CheckCircle className="w-3.5 h-3.5 text-green-500 shrink-0" />
                {currentToast.action}
              </p>
              <p className="text-xs text-[var(--color-muted)]/60 mt-1">
                {currentToast.timeAgo}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
