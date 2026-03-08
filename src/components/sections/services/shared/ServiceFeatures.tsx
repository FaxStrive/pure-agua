"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { getTranslationArray } from "@/lib/i18n/getTranslationData";
import { viewportConfig, staggerContainer, staggerItem } from "@/lib/animations";
import { Droplets, Shield, Sparkles, Zap, Heart, PiggyBank, Check } from "lucide-react";

const featureIcons = [Droplets, Shield, Sparkles, Zap, Heart, PiggyBank, Check, Droplets];

interface FeatureItem {
  title: string;
  description: string;
}

interface ServiceFeaturesProps {
  translationSection: string;
  layout?: "grid" | "alternating" | "cards";
}

export function ServiceFeatures({ translationSection, layout = "grid" }: ServiceFeaturesProps) {
  const { t } = useLanguage();

  const features = getTranslationArray<FeatureItem>(translationSection, "features");
  if (features.length === 0) return null;

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-white" />
      <div
        className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,159,227,0.03) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(59,214,245,0.04) 0%, transparent 70%)",
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

        {layout === "grid" && (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            {features.map((feature, i) => {
              const Icon = featureIcons[i % featureIcons.length];
              return (
                <motion.div
                  key={i}
                  variants={staggerItem}
                  className="group p-6 rounded-2xl bg-[var(--color-surface)] border border-transparent hover:border-[var(--color-primary)]/10 hover:shadow-lg hover:shadow-[var(--color-primary)]/5 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-accent)]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <h3 className="text-lg font-bold text-[var(--color-foreground)] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        )}

        {layout === "alternating" && (
          <div className="space-y-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                className={`flex flex-col md:flex-row items-center gap-6 md:gap-12 ${
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewportConfig}
                transition={{ duration: 0.5 }}
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-[var(--color-primary)]/20">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl font-bold text-[var(--color-foreground)] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-[var(--color-muted)] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {layout === "cards" && (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            {features.map((feature, i) => {
              const Icon = featureIcons[i % featureIcons.length];
              return (
                <motion.div
                  key={i}
                  variants={staggerItem}
                  className="flex gap-4 p-6 rounded-2xl bg-white border border-[var(--color-border)] hover:shadow-md transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[var(--color-foreground)] mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </div>
    </section>
  );
}
