"use client";

import { motion } from "framer-motion";
import { Shield, Award, Users, Clock, Star, CheckCircle } from "lucide-react";
import { viewportConfig } from "@/lib/animations";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function TrustSignals() {
  const { t } = useLanguage();

  const signals = [
    { icon: Shield, label: t("trustSignals", "licensedInsured") },
    { icon: Users, label: t("trustSignals", "familyOwned") },
    { icon: Clock, label: t("trustSignals", "tenYears") },
    { icon: Star, label: t("trustSignals", "fiveStarRated") },
    { icon: Award, label: t("trustSignals", "qualityGuaranteed") },
    { icon: CheckCircle, label: t("trustSignals", "freeWaterTests") },
  ];

  return (
    <section className="relative py-6 overflow-hidden border-b border-[var(--color-border)]">
      <div className="container-custom">
        <motion.div
          className="flex flex-wrap justify-center items-center gap-x-5 sm:gap-x-10 gap-y-3 sm:gap-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportConfig}
          transition={{ duration: 0.5 }}
        >
          {signals.map((signal, i) => (
            <motion.div
              key={signal.label}
              className="flex items-center gap-2 text-[var(--color-muted)]"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ delay: i * 0.05, duration: 0.4 }}
            >
              <signal.icon className="w-4 h-4 text-[var(--color-primary)]" />
              <span className="text-sm font-medium whitespace-nowrap">
                {signal.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
