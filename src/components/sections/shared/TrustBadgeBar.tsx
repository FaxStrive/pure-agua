"use client";

import { motion } from "framer-motion";
import { Shield, Award, FileCheck, Clock, Users } from "lucide-react";
import { viewportConfig } from "@/lib/animations";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { translations } from "@/lib/i18n/translations";

const t = translations.trustBadgeBar;

const badges = [
  { icon: Shield, label: t.wqaMember },
  { icon: Award, label: t.bbbRated },
  { icon: FileCheck, label: t.flLicensed },
  { icon: Clock, label: t.lifetimeWarranty },
  { icon: Users, label: t.familiesServed, hasCount: true },
];

export function TrustBadgeBar() {
  return (
    <section className="relative py-6 border-y border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="container-custom">
        <motion.div
          className="flex flex-wrap items-center justify-center gap-6 lg:gap-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportConfig}
          transition={{ duration: 0.5 }}
        >
          {badges.map((badge, i) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={badge.label}
                className="flex items-center gap-2.5"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={viewportConfig}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div className="w-8 h-8 rounded-lg bg-[var(--color-primary)]/8 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 text-[var(--color-primary)]" />
                </div>
                <span className="text-sm font-semibold text-[var(--color-foreground)] whitespace-nowrap">
                  {badge.hasCount ? (
                    <>
                      <NumberTicker value={500} className="font-bold" />+ {badge.label}
                    </>
                  ) : (
                    badge.label
                  )}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
