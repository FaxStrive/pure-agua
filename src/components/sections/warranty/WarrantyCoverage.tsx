"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { getTranslationArray, type LocalizedString } from "@/lib/i18n/getTranslationData";
import { viewportConfig, staggerContainer, staggerItem } from "@/lib/animations";
import { WaterEdge } from "@/components/animations/water-edge";

export function WarrantyCoverage() {
  const { t, language } = useLanguage();

  const covered = getTranslationArray<LocalizedString>("warrantyPage", "covered");
  const notCovered = getTranslationArray<LocalizedString>("warrantyPage", "notCovered");

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-white" />
      <div
        className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full pointer-events-none"
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
            {t("warrantyPage", "coverageLabel")}
          </span>
          <h2 className="heading-md font-bold text-[var(--color-foreground)]">
            {t("warrantyPage", "coverageHeading")}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <WaterEdge alwaysActive colorFrom="rgb(34,197,94)" colorMid="rgb(22,163,74)" colorTo="rgb(34,197,94)" borderRadius="1rem">
          <motion.div
            className="relative overflow-hidden rounded-2xl bg-green-50/30 p-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <Check className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-green-800">
                {language === "en" ? "What Is Covered" : "Que Esta Cubierto"}
              </h3>
            </div>
            <ul className="space-y-4">
              {covered.map((item, i) => (
                <motion.li key={i} variants={staggerItem} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-green-800/80 text-sm leading-relaxed">
                    {item[language]}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          </WaterEdge>

          <WaterEdge alwaysActive colorFrom="rgb(239,68,68)" colorMid="rgb(220,38,38)" colorTo="rgb(239,68,68)" borderRadius="1rem">
          <motion.div
            className="relative overflow-hidden rounded-2xl bg-red-50/30 p-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                <X className="w-5 h-5 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-red-800">
                {language === "en" ? "What Is Not Covered" : "Que No Esta Cubierto"}
              </h3>
            </div>
            <ul className="space-y-4">
              {notCovered.map((item, i) => (
                <motion.li key={i} variants={staggerItem} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <span className="text-red-800/80 text-sm leading-relaxed">
                    {item[language]}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          </WaterEdge>
        </div>
      </div>
    </section>
  );
}
