"use client";

import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { getTranslationArray } from "@/lib/i18n/getTranslationData";
import { viewportConfig, staggerContainer, staggerItem } from "@/lib/animations";

interface ProblemItem {
  problem: string;
  solution: string;
  cause: string;
}

interface WellWaterProblemsProps {
  translationSection: string;
}

export function WellWaterProblems({ translationSection }: WellWaterProblemsProps) {
  const { t } = useLanguage();

  const problems = getTranslationArray<ProblemItem>(translationSection, "problems");
  if (problems.length === 0) return null;

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-white" />
      <div
        className="absolute top-20 right-10 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(8,73,120,0.03) 0%, transparent 70%)",
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
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {problems.map((item, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className="rounded-2xl border border-[var(--color-border)] overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-5 bg-gradient-to-r from-amber-50 to-orange-50/50 border-b border-[var(--color-border)]">
                <div className="flex items-center gap-3 mb-2">
                  <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0" />
                  <span className="text-sm font-bold text-amber-700 uppercase tracking-wider">
                    {item.cause}
                  </span>
                </div>
                <p className="text-sm text-amber-800/70 leading-relaxed">
                  {item.problem}
                </p>
              </div>
              <div className="p-5 bg-white">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <p className="text-sm text-[var(--color-foreground)] leading-relaxed">
                    {item.solution}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
