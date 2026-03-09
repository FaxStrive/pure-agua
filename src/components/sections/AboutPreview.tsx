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
    <section className="relative overflow-hidden py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-[var(--color-surface)]" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 50% at 20% 30%, rgba(8,73,120,0.04) 0%, transparent 60%), radial-gradient(ellipse 40% 40% at 80% 70%, rgba(59,214,245,0.03) 0%, transparent 60%)",
        }}
      />

      <div className="container-custom relative">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-primary)] mb-4">
              <span className="w-8 h-px bg-[var(--color-primary)]" />
              {t("aboutPreview", "label")}
              <span className="w-8 h-px bg-[var(--color-primary)]" />
            </span>
          </motion.div>

          <motion.h2
            className="text-3xl lg:text-4xl font-bold text-[var(--color-foreground)] leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            {t("aboutPreview", "heading")}
          </motion.h2>

          <motion.p
            className="text-lg text-[var(--color-muted)] leading-relaxed mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {t("aboutPreview", "description")}
          </motion.p>

          {/* Value props */}
          <motion.div
            className="flex flex-wrap justify-center gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {[
              { title: translations.aboutPreview.familyValues.title },
              { title: translations.aboutPreview.communityFirst.title },
              { title: translations.aboutPreview.localExperts.title },
            ].map((value) => (
              <div
                key={value.title}
                className="flex items-center gap-3 px-5 py-3 rounded-full bg-white border border-[var(--color-border)] shadow-sm"
              >
                <div className="w-2 h-2 rounded-full bg-[var(--color-primary)]" />
                <span className="text-sm font-medium text-[var(--color-foreground)]">{value.title}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
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
