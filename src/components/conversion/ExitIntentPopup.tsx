"use client";

import { useState, useEffect, useCallback, useRef } from "react";
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
import Link from "next/link";

const STORAGE_KEY = "pureagua-exit-popup-shown";
const MOBILE_IDLE_MS = 45000;

export function ExitIntentPopup() {
  const [open, setOpen] = useState(false);
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
    let handler: ((e: MouseEvent) => void) | null = null

    const enableTimer = setTimeout(() => {
      handler = (e: MouseEvent) => {
        if (e.clientY <= 0 && e.relatedTarget === null) {
          showPopup()
        }
      }
      document.documentElement.addEventListener("mouseout", handler)
    }, 2000)

    return () => {
      clearTimeout(enableTimer)
      if (handler) {
        document.documentElement.removeEventListener("mouseout", handler)
      }
    }
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

          <div className="space-y-3">
            <Button
              asChild
              className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] text-white rounded-xl py-6 text-base font-semibold shadow-lg shadow-[rgba(var(--color-primary-rgb),0.3)] transition-all duration-300 relative overflow-hidden"
            >
              <Link href="/contact" onClick={() => setOpen(false)}>
                {/* Pulse ring */}
                <span className="absolute inset-0 rounded-xl animate-ping bg-[var(--color-primary)]/20 pointer-events-none" style={{ animationDuration: "2s" }} />
                <span className="relative">{t("exitPopup", "cta")}</span>
              </Link>
            </Button>

            {/* Phone alternative */}
            <div className="text-center pt-2">
              <p className="text-xs text-[var(--color-muted)]/60 mb-1">Prefer to call?</p>
              <a
                href="tel:+14075128342"
                className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
              >
                (407) 512-8342
              </a>
            </div>

            <button
              type="button"
              onClick={() => setOpen(false)}
              className="w-full text-center text-xs text-[var(--color-muted)]/60 hover:text-[var(--color-muted)] transition-colors py-2"
            >
              {t("exitPopup", "dismiss")}
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
