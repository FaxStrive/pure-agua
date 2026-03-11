"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Droplets } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const STORAGE_KEY = "pureagua-exit-popup-shown";
const MOBILE_IDLE_MS = 45000;

export function ExitIntentPopup() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const idleTimer = useRef<NodeJS.Timeout | null>(null);
  const hasShown = useRef(false);
  const { t } = useLanguage();

  const showPopup = useCallback(() => {
    if (hasShown.current) return;
    const shown = sessionStorage.getItem(STORAGE_KEY);
    if (shown) return;
    hasShown.current = true;
    sessionStorage.setItem(STORAGE_KEY, "true");
    setOpen(true);
  }, []);

  // Desktop: mouse leaves viewport (top of page)
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        showPopup();
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [showPopup]);

  // Mobile: idle timer
  useEffect(() => {
    const isMobile = window.innerWidth < 1024;
    if (!isMobile) return;

    const resetTimer = () => {
      if (idleTimer.current) clearTimeout(idleTimer.current);
      idleTimer.current = setTimeout(showPopup, MOBILE_IDLE_MS);
    };

    resetTimer();
    const events = ["touchstart", "scroll", "click"];
    events.forEach((e) => window.addEventListener(e, resetTimer, { passive: true }));

    return () => {
      if (idleTimer.current) clearTimeout(idleTimer.current);
      events.forEach((e) => window.removeEventListener(e, resetTimer));
    };
  }, [showPopup]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setOpen(false), 2000);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md border-0 rounded-2xl overflow-hidden p-0 gap-0 bg-white">
        {/* Top gradient accent */}
        <div
          className="h-2 w-full"
          style={{
            background: "linear-gradient(90deg, var(--color-primary) 0%, var(--color-accent) 50%, var(--color-secondary) 100%)",
          }}
        />

        <div className="p-6 sm:p-8">
          <DialogHeader className="text-center sm:text-center mb-6">
            <div className="mx-auto w-14 h-14 rounded-full bg-[rgba(var(--color-primary-rgb),0.1)] flex items-center justify-center mb-4">
              <Droplets className="w-7 h-7 text-[var(--color-primary)]" />
            </div>
            <DialogTitle className="text-xl sm:text-2xl font-bold text-[var(--color-foreground)] font-[var(--font-heading)]">
              {t("exitPopup", "title")}
            </DialogTitle>
            <DialogDescription className="text-sm text-[var(--color-muted)] mt-2">
              {t("exitPopup", "description")}
            </DialogDescription>
          </DialogHeader>

          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-6"
              >
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="font-semibold text-[var(--color-foreground)]">
                  {t("exitPopup", "successTitle")}
                </p>
                <p className="text-sm text-[var(--color-muted)] mt-1">
                  {t("exitPopup", "successMessage")}
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-3"
              >
                <input
                  type="text"
                  name="name"
                  required
                  placeholder={t("exitPopup", "namePlaceholder")}
                  className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/30 focus:border-[var(--color-primary)] transition-all"
                />
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder={t("exitPopup", "phonePlaceholder")}
                  className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/30 focus:border-[var(--color-primary)] transition-all"
                />
                <Button
                  type="submit"
                  className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] text-white rounded-xl py-6 text-base font-semibold shadow-lg shadow-[rgba(var(--color-primary-rgb),0.3)] transition-all duration-300 relative overflow-hidden"
                >
                  {/* Pulse ring */}
                  <span className="absolute inset-0 rounded-xl animate-ping bg-[var(--color-primary)]/20 pointer-events-none" style={{ animationDuration: "2s" }} />
                  <span className="relative">{t("exitPopup", "cta")}</span>
                </Button>

                <p className="text-[10px] text-center text-[var(--color-muted)]/60 leading-relaxed px-2">
                  By submitting, you consent to receive texts from Pure Agua Enterprises. Msg & data rates may apply. Reply STOP to opt out. <a href="/privacy" className="underline">Privacy Policy</a> & <a href="/terms" className="underline">Terms</a>.
                </p>

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="w-full text-center text-xs text-[var(--color-muted)]/60 hover:text-[var(--color-muted)] transition-colors py-2"
                >
                  {t("exitPopup", "dismiss")}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </DialogContent>
    </Dialog>
  );
}
