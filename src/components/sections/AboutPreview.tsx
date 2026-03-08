"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { viewportConfig } from "@/lib/animations";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translations } from "@/lib/i18n/translations";

export function AboutPreview() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden">
      <div className="grid lg:grid-cols-2 lg:min-h-[600px]">
        {/* Left - Image full bleed */}
        <motion.div
          className="relative min-h-[400px] lg:min-h-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportConfig}
          transition={{ duration: 0.8 }}
        >
          {/* Team photo placeholder */}
          <div className="absolute inset-0 bg-[var(--color-surface)] flex items-center justify-center">
            <span className="text-lg font-medium text-[var(--color-muted)] tracking-wide uppercase">[Team Photo]</span>
          </div>

          {/* Floating card */}
          <motion.div
            className="absolute bottom-8 right-8 bg-white rounded-2xl p-5 shadow-2xl shadow-black/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-xl bg-[var(--color-primary)] flex items-center justify-center">
                <span className="text-2xl font-bold text-white">10+</span>
              </div>
              <div>
                <p className="text-sm font-bold text-[var(--color-foreground)]">{t("aboutPreview", "yearsServing")}</p>
                <p className="text-xs text-[var(--color-muted)]">{t("hero", "centralFlorida")}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right - Content */}
        <div className="flex items-center px-8 lg:px-16 xl:px-24 py-16 lg:py-24 bg-[var(--color-surface)]">
          <motion.div
            className="max-w-lg"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--color-foreground)] leading-tight mb-6">
              {t("aboutPreview", "heading")}
            </h2>

            <p className="text-lg text-[var(--color-muted)] leading-relaxed mb-8">
              {t("aboutPreview", "description")}
            </p>

            {/* Value props - simple list */}
            <div className="space-y-4 mb-10">
              {[
                translations.aboutPreview.familyValues.title,
                translations.aboutPreview.communityFirst.title,
                translations.aboutPreview.localExperts.title,
              ].map((value, i) => (
                <motion.div
                  key={value}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewportConfig}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <div className="w-2 h-2 rounded-full bg-[var(--color-primary)]" />
                  <span className="text-[var(--color-foreground)] font-medium">{value}</span>
                </motion.div>
              ))}
            </div>

            <Link href="/about">
              <Button
                variant="outline"
                className="rounded-full px-8 py-5 text-sm font-semibold border-[var(--color-dark)] text-[var(--color-dark)] hover:bg-[var(--color-dark)] hover:text-white transition-all duration-300 group"
              >
                {t("aboutPreview", "learnMore")}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
