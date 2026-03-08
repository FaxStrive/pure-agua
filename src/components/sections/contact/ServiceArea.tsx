"use client";

import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";
import { viewportConfig } from "@/lib/animations";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translations } from "@/lib/i18n/translations";
import { TextAnimate } from "@/components/magicui/text-animate";

export function ServiceArea() {
  const { t } = useLanguage();
  const areas = translations.serviceArea.areas;

  // Split into primary (Full Service) and secondary (Service Available)
  const primaryAreas = areas.filter((a) => a.detail === "Full Service Area");
  const secondaryAreas = areas.filter((a) => a.detail !== "Full Service Area");

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-[var(--color-surface)]">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(0,159,227,0.04) 0%, transparent 60%)" }}
        />
        <div
          className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(59,214,245,0.03) 0%, transparent 60%)" }}
        />
      </div>

      <div className="relative container-custom z-10">
        {/* Centered Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-px bg-[var(--color-primary)]" />
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-primary)]">
              {t("serviceArea", "label")}
            </span>
            <div className="w-10 h-px bg-[var(--color-primary)]" />
          </div>
          <TextAnimate animation="blurInUp" by="word" as="h2" className="text-3xl lg:text-5xl font-bold text-[var(--color-foreground)] leading-tight mb-5">
            {t("serviceArea", "heading")}
          </TextAnimate>
          <p className="text-lg text-[var(--color-muted)] leading-relaxed">
            {t("serviceArea", "description")}
          </p>
        </motion.div>

        {/* Primary areas */}
        {primaryAreas.length > 0 && (
          <div className="mb-8">
            <motion.p
              className="text-center text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-primary)] mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={viewportConfig}
            >
              Full Service Areas
            </motion.p>
            <div className="flex flex-wrap justify-center gap-3">
              {primaryAreas.map((area, i) => (
                <motion.div
                  key={area.name}
                  className="flex items-center gap-2.5 bg-white border border-[var(--color-primary)]/15 rounded-full px-5 py-3 shadow-sm hover:shadow-md hover:border-[var(--color-primary)]/30 transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={viewportConfig}
                  transition={{ delay: i * 0.05, duration: 0.4, type: "spring", stiffness: 150 }}
                >
                  <div className="w-7 h-7 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center">
                    <MapPin className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                  </div>
                  <span className="text-sm font-semibold text-[var(--color-foreground)]">{area.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Secondary areas */}
        {secondaryAreas.length > 0 && (
          <div className="mb-12">
            <motion.p
              className="text-center text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-muted)] mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={viewportConfig}
            >
              Service Available
            </motion.p>
            <div className="flex flex-wrap justify-center gap-2.5">
              {secondaryAreas.map((area, i) => (
                <motion.div
                  key={area.name}
                  className="flex items-center gap-2 bg-white/70 border border-[var(--color-border)] rounded-full px-4 py-2.5 hover:border-[var(--color-primary)]/20 transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={viewportConfig}
                  transition={{ delay: 0.3 + i * 0.04, duration: 0.4, type: "spring", stiffness: 150 }}
                >
                  <MapPin className="w-3 h-3 text-[var(--color-muted)]" />
                  <span className="text-sm text-[var(--color-foreground)]/80">{area.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Call banner */}
        <motion.div
          className="flex items-center justify-center gap-3 p-4 rounded-xl bg-[var(--color-primary)]/5 border border-[var(--color-primary)]/10 max-w-md mx-auto"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ delay: 0.4 }}
        >
          <Phone className="w-5 h-5 text-[var(--color-primary)] shrink-0" />
          <p className="text-sm text-[var(--color-foreground)]">
            {t("serviceArea", "callForAvailability")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
