"use client";

import { motion } from "framer-motion";
import { Heart, Shield, Zap, Users, Leaf, Award } from "lucide-react";
import { viewportConfig, slideRevealLeft, slideRevealRight, easeOutQuart, blurReveal } from "@/lib/animations";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translations } from "@/lib/i18n/translations";
import GlassLiftCard from "@/components/animations/glass-lift-card";
import { TextAnimate } from "@/components/magicui/text-animate";

const valueIcons = [Heart, Shield, Zap, Users, Leaf, Award];

export function Values() {
  const { t } = useLanguage();

  const values = translations.values.items.map((item, i) => ({
    icon: valueIcons[i],
    title: item.title,
    description: item.description,
  }));

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Section background */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(135deg, transparent 0%, rgba(0,159,227,0.03) 50%, transparent 100%)" }} />
      <div className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(0,159,227,0.04) 0%, transparent 70%)" }} />

      <div className="relative container-custom">
        {/* Header */}
        <motion.div
          className="max-w-2xl mb-16"
          initial={blurReveal.initial}
          whileInView={blurReveal.animate}
          viewport={viewportConfig}
          transition={blurReveal.transition}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-px bg-[var(--color-primary)]" />
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-primary)]">
              {t("values", "label")}
            </span>
          </div>
          <TextAnimate animation="blurInUp" by="word" as="h2" className="text-3xl lg:text-4xl font-bold text-[var(--color-foreground)] leading-tight mb-5">
            {t("values", "heading")}
          </TextAnimate>
          <p className="text-lg text-[var(--color-muted)] leading-relaxed">
            {t("values", "subheading")}
          </p>
        </motion.div>

        {/* Values grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={i % 2 === 0 ? slideRevealLeft.initial : slideRevealRight.initial}
              whileInView={i % 2 === 0 ? slideRevealLeft.animate : slideRevealRight.animate}
              viewport={viewportConfig}
              transition={{ delay: i * 0.08, duration: 0.6, ease: easeOutQuart }}
            >
              <GlassLiftCard className="p-5 sm:p-6 md:p-8 rounded-2xl bg-white border border-[var(--color-border)] hover:border-[var(--color-primary)]/20 hover:shadow-xl hover:shadow-black/[0.04] transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/5 flex items-center justify-center mb-5 group-hover:bg-[var(--color-primary)]/10 transition-colors duration-300">
                  <value.icon className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-lg font-bold text-[var(--color-foreground)] mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                  {value.description}
                </p>
              </GlassLiftCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
