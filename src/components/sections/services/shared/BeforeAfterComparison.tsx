"use client";

import { motion } from "framer-motion";
import { X, Check } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { getTranslationArray, type LocalizedString } from "@/lib/i18n/getTranslationData";
import { viewportConfig, staggerContainer, staggerItem } from "@/lib/animations";

interface ComparisonItem {
  before: LocalizedString;
  after: LocalizedString;
}

interface BeforeAfterComparisonProps {
  translationSection: string;
}

export function BeforeAfterComparison({ translationSection }: BeforeAfterComparisonProps) {
  const { t, language } = useLanguage();

  const items = getTranslationArray<ComparisonItem>(translationSection, "beforeAfterItems");
  if (items.length === 0) return null;

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-white" />
      <div
        className="absolute top-0 left-1/3 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,159,227,0.03) 0%, transparent 70%)",
        }}
      />

      <div className="container-custom relative">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
        >
          <span className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-primary)] mb-4">
            <span className="w-8 h-px bg-[var(--color-primary)]" />
            {t(translationSection, "featuresLabel")}
          </span>
          <h2 className="heading-md font-bold text-[var(--color-foreground)]">
            {t(translationSection, "featuresHeading")}
          </h2>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto space-y-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {items.map((item, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-xl overflow-hidden border border-[var(--color-border)]"
            >
              <div className="flex items-start gap-3 p-5 bg-red-50/50">
                <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                  <X className="w-3.5 h-3.5 text-red-500" />
                </div>
                <p className="text-sm text-red-800/70 leading-relaxed">
                  {item.before[language]}
                </p>
              </div>
              <div className="flex items-start gap-3 p-5 bg-green-50/50">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-green-600" />
                </div>
                <p className="text-sm text-green-800/70 leading-relaxed">
                  {item.after[language]}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
