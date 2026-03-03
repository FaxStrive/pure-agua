"use client";

import { motion } from "framer-motion";
import { DollarSign, GraduationCap, Heart, Calendar, Car, Users } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { getTranslationArray } from "@/lib/i18n/getTranslationData";
import { viewportConfig, staggerContainer, staggerItem } from "@/lib/animations";
import GlassLiftCard from "@/components/animations/glass-lift-card";

const benefitIcons = [DollarSign, GraduationCap, Heart, Calendar, Car, Users];

interface BenefitItem {
  title: { en: string; es: string };
  description: { en: string; es: string };
}

export function Benefits() {
  const { t, language } = useLanguage();

  const benefits = getTranslationArray<BenefitItem>("careersPage", "benefits");

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-[var(--color-surface)]" />
      <div
        className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(59,214,245,0.05) 0%, transparent 70%)",
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
            {t("careersPage", "benefitsLabel")}
          </span>
          <h2 className="heading-md font-bold text-[var(--color-foreground)]">
            {t("careersPage", "benefitsHeading")}
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {benefits.map((benefit, i) => {
            const Icon = benefitIcons[i % benefitIcons.length];
            return (
              <motion.div key={i} variants={staggerItem}>
                <GlassLiftCard className="p-6 rounded-2xl bg-white border border-[var(--color-border)] hover:shadow-lg hover:border-[var(--color-primary)]/10 transition-all duration-300 h-full">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-accent)]/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <h3 className="text-lg font-bold text-[var(--color-foreground)] mb-2">
                    {benefit.title[language]}
                  </h3>
                  <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                    {benefit.description[language]}
                  </p>
                </GlassLiftCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
