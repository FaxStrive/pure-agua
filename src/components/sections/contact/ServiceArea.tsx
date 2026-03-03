"use client";

import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";
import GlassLiftCard from "@/components/animations/glass-lift-card";
import { viewportConfig } from "@/lib/animations";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translations } from "@/lib/i18n/translations";

export function ServiceArea() {
  const { t, language } = useLanguage();

  const areas = translations.serviceArea.areas;

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="relative container-custom">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-px bg-[var(--color-primary)]" />
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-primary)]">
                {t("serviceArea", "label")}
              </span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--color-foreground)] leading-tight mb-5">
              {t("serviceArea", "heading")}
            </h2>
            <p className="text-[var(--color-muted)] leading-relaxed mb-10">
              {t("serviceArea", "description")}
            </p>

            <div className="flex items-center gap-3 p-4 rounded-xl bg-[var(--color-primary)]/5 border border-[var(--color-primary)]/10">
              <Phone className="w-5 h-5 text-[var(--color-primary)] shrink-0" />
              <p className="text-sm text-[var(--color-foreground)]">
                {t("serviceArea", "callForAvailability")}
              </p>
            </div>
          </motion.div>

          {/* Right - Area list */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {areas.map((area, i) => (
                <motion.div
                  key={area.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportConfig}
                  transition={{ delay: 0.3 + i * 0.06, duration: 0.4 }}
                >
                  <GlassLiftCard className="flex items-center gap-3 p-4 rounded-xl bg-white border border-[var(--color-border)] hover:border-[var(--color-primary)]/20 hover:shadow-lg hover:shadow-black/[0.03] transition-all duration-300">
                    <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)]/5 flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-[var(--color-primary)]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[var(--color-foreground)] text-sm">
                        {area.name}
                      </p>
                      <p className="text-xs text-[var(--color-muted)]">
                        {area.detail[language]}
                      </p>
                    </div>
                  </GlassLiftCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
