"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Droplets, Thermometer, Bug, FlaskConical, Shell } from "lucide-react";
import { viewportConfig } from "@/lib/animations";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translations } from "@/lib/i18n/translations";

const problemIcons = [Shell, FlaskConical, Bug, Thermometer, Droplets, AlertTriangle];

export function WaterProblems() {
  const { t } = useLanguage();

  const problems = translations.waterProblems.problems.map((p, i) => ({
    icon: problemIcons[i],
    title: p.title,
    description: p.description,
    solution: p.solution,
  }));

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="relative container-custom">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-px bg-[var(--color-primary)]" />
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-primary)]">
              {t("waterProblems", "label")}
            </span>
            <div className="w-10 h-px bg-[var(--color-primary)]" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--color-foreground)] leading-tight mb-5">
            {t("waterProblems", "heading")}
          </h2>
          <p className="text-lg text-[var(--color-muted)] leading-relaxed">
            {t("waterProblems", "subheading")}
          </p>
        </motion.div>

        {/* Problems grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.title}
              className="group p-5 sm:p-7 rounded-2xl bg-white border border-[var(--color-border)] hover:border-[var(--color-primary)]/20 hover:shadow-xl hover:shadow-black/[0.04] transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <div className="w-11 h-11 rounded-xl bg-[var(--color-primary)]/5 flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)]/10 transition-colors">
                <problem.icon className="w-5 h-5 text-[var(--color-primary)]" />
              </div>
              <h3 className="text-lg font-bold text-[var(--color-foreground)] mb-2">
                {problem.title}
              </h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-4">
                {problem.description}
              </p>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-primary)] bg-[var(--color-primary)]/5 px-3 py-1.5 rounded-full">
                {t("waterProblems", "solution")}: {problem.solution}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
