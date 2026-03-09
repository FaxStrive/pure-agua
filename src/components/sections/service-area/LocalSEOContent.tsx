"use client";

import { motion } from "framer-motion";
import { viewportConfig } from "@/lib/animations";
import { translations } from "@/lib/i18n/translations";

const t = translations.serviceAreaPage.localContent;

export function LocalSEOContent() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 30%, rgba(0,159,227,0.04) 0%, transparent 60%)",
        }}
      />

      <div className="relative container-custom">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold text-[var(--color-primary)] mb-4" style={{ backgroundColor: "rgba(var(--color-primary-rgb, 0,159,227), 0.08)" }}>
            {t.label}
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--color-foreground)] leading-tight mb-8">
            {t.heading}
          </h2>

          <div className="space-y-6">
            {t.paragraphs.map((paragraph, i) => (
              <motion.p
                key={i}
                className="text-[var(--color-muted)] leading-relaxed"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportConfig}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
