"use client";

import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { getTranslationArray } from "@/lib/i18n/getTranslationData";
import { viewportConfig, staggerContainer, staggerItem } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import GlassLiftCard from "@/components/animations/glass-lift-card";

interface Guide {
  title: { en: string; es: string };
  description: { en: string; es: string };
}

export function DownloadGuides() {
  const { t, language } = useLanguage();

  const guides = getTranslationArray<Guide>("resourcesPage", "guides");

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-[var(--color-surface)]" />
      <div
        className="absolute bottom-0 left-1/3 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(8,73,120,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="container-custom relative">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
        >
          <span className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-primary)] mb-4">
            <span className="w-8 h-px bg-[var(--color-primary)]" />
            {t("resourcesPage", "guidesLabel")}
          </span>
          <h2 className="heading-md font-bold text-[var(--color-foreground)]">
            {t("resourcesPage", "guidesHeading")}
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {guides.map((guide, i) => (
            <motion.div key={i} variants={staggerItem}>
              <GlassLiftCard className="bg-white rounded-2xl border border-[var(--color-border)] p-6 hover:shadow-lg transition-all duration-300 text-center h-full">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-accent)]/10 flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-7 h-7 text-[var(--color-primary)]" />
                </div>
                <h3 className="font-bold text-[var(--color-foreground)] mb-2">
                  {guide.title[language]}
                </h3>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-5">
                  {guide.description[language]}
                </p>
                <Button
                  variant="outline"
                  className="rounded-full text-sm font-semibold border-[var(--color-primary)]/30 text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-all"
                >
                  <Download className="w-4 h-4 mr-2" />
                  {t("resourcesPage", "downloadPdf")}
                </Button>
              </GlassLiftCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
