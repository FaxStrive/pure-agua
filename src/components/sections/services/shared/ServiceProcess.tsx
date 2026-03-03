"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { getTranslationArray, type LocalizedString } from "@/lib/i18n/getTranslationData";
import { viewportConfig, cascadeItem, easeOutExpo } from "@/lib/animations";

interface ProcessStep {
  title: LocalizedString;
  description: LocalizedString;
}

interface ServiceProcessProps {
  translationSection: string;
}

export function ServiceProcess({ translationSection }: ServiceProcessProps) {
  const { t, language } = useLanguage();

  const steps = getTranslationArray<ProcessStep>(translationSection, "processSteps");
  if (steps.length === 0) return null;

  return (
    <section className="section-padding relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, rgba(8,73,120,0.03) 0%, rgba(0,159,227,0.02) 50%, rgba(59,214,245,0.03) 100%)",
        }}
      />
      {/* Diagonal sweep */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(160deg, rgba(0,159,227,0.03) 0%, transparent 40%, rgba(59,214,245,0.02) 100%)",
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
            {t(translationSection, "processLabel")}
          </span>
          <h2 className="heading-md font-bold text-[var(--color-foreground)]">
            {t(translationSection, "processHeading")}
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--color-primary)]/20 via-[var(--color-accent)]/20 to-transparent hidden md:block" />

            <div className="space-y-8">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  className="flex gap-6 items-start"
                  initial={cascadeItem.initial}
                  whileInView={cascadeItem.animate}
                  viewport={viewportConfig}
                  transition={{ delay: 0.15 + i * 0.06, duration: 0.5, ease: easeOutExpo }}
                >
                  <div className="relative z-10 w-12 h-12 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-lg shadow-[var(--color-primary)]/20">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="flex-1 pb-2">
                    <h3 className="text-lg font-bold text-[var(--color-foreground)] mb-1">
                      {step.title[language]}
                    </h3>
                    <p className="text-[var(--color-muted)] leading-relaxed">
                      {step.description[language]}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
