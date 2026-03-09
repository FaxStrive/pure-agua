"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Droplets } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import Link from "next/link";

const STORAGE_KEY = "pureagua-timed-offer-shown";
const DELAY_MS = 20000;

export function TimedOfferPopup() {
  const [open, setOpen] = useState(false);
  const hasShown = useRef(false);

  useEffect(() => {
    if (hasShown.current) return;
    const alreadyShown = sessionStorage.getItem(STORAGE_KEY);
    if (alreadyShown) {
      hasShown.current = true;
      return;
    }

    const timer = setTimeout(() => {
      if (hasShown.current) return;
      hasShown.current = true;
      sessionStorage.setItem(STORAGE_KEY, "true");
      setOpen(true);
    }, DELAY_MS);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md border-0 rounded-2xl overflow-hidden p-0 gap-0 bg-white">
        {/* Gradient top border */}
        <div
          className="h-1.5 w-full"
          style={{
            background:
              "linear-gradient(90deg, var(--color-primary) 0%, var(--color-accent) 50%, var(--color-secondary) 100%)",
          }}
        />

        <div className="p-6 sm:p-8">
          <DialogHeader className="text-center sm:text-center mb-5">
            {/* Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.1, damping: 12 }}
              className="mx-auto w-14 h-14 rounded-full bg-[rgba(var(--color-primary-rgb),0.1)] flex items-center justify-center mb-4"
            >
              <Droplets className="w-7 h-7 text-[var(--color-primary)]" />
            </motion.div>

            {/* Offer badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="inline-flex items-center justify-center gap-2 mx-auto px-4 py-1.5 rounded-full bg-green-50 border border-green-200 mb-3"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="text-xs font-bold text-green-700 uppercase tracking-wide">
                Limited Time Offer
              </span>
            </motion.div>

            <DialogTitle className="text-xl sm:text-2xl font-bold text-[var(--color-foreground)]">
              $50 Off Your First Installation
            </DialogTitle>
            <DialogDescription className="text-sm text-[var(--color-muted)] mt-2 leading-relaxed">
              Schedule a free water test today and save $50 on any whole-home
              filtration system. No obligation, no pressure.
            </DialogDescription>
          </DialogHeader>

          {/* Benefits */}
          <div className="space-y-2.5 mb-6">
            {[
              "Free 15-minute water quality test",
              "Custom system recommendation",
              "$50 off any installation",
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.08 }}
                className="flex items-center gap-3"
              >
                <div className="w-5 h-5 rounded-full bg-[var(--color-primary)] flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-sm text-[var(--color-foreground)]">
                  {benefit}
                </span>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <Link href="/contact" onClick={() => setOpen(false)}>
            <ShimmerButton
              shimmerColor="#3BD6F5"
              background="var(--color-primary)"
              borderRadius="12px"
              className="w-full text-sm font-semibold px-6 py-4"
            >
              Claim My $50 Discount
            </ShimmerButton>
          </Link>

          <button
            type="button"
            onClick={() => setOpen(false)}
            className="w-full text-center text-xs text-[var(--color-muted)]/60 hover:text-[var(--color-muted)] transition-colors py-3 mt-1"
          >
            No thanks, I will pass on the savings
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
