"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { viewportConfig } from "@/lib/animations";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function OurStory() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden">
      <div className="grid lg:grid-cols-2 min-h-[550px]">
        {/* Left - Content */}
        <div className="flex items-center px-5 sm:px-8 lg:px-16 xl:px-24 py-12 sm:py-16 lg:py-24 bg-[var(--color-surface)]">
          <motion.div
            className="max-w-lg"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-px bg-[var(--color-primary)]" />
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-primary)]">
                {t("ourStory", "label")}
              </span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--color-foreground)] leading-tight mb-6">
              {t("ourStory", "heading")}
            </h2>

            <div className="space-y-4 text-[var(--color-muted)] leading-relaxed">
              <p>{t("ourStory", "p1")}</p>
              <p>{t("ourStory", "p2")}</p>
              <p>{t("ourStory", "p3")}</p>
            </div>
          </motion.div>
        </div>

        {/* Right - Image full bleed */}
        <motion.div
          className="relative min-h-[400px] lg:min-h-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportConfig}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="https://images.pexels.com/photos/6032817/pexels-photo-6032817.jpeg?auto=compress&cs=tinysrgb&w=1000"
            alt="Pouring clean filtered water into a glass"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-[var(--color-dark)]/10" />

          {/* Floating card */}
          <motion.div
            className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 bg-white rounded-xl sm:rounded-2xl p-3 sm:p-5 shadow-2xl shadow-black/10"
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
                <p className="text-sm font-bold text-[var(--color-foreground)]">
                  {t("ourStory", "familyOwned")}
                </p>
                <p className="text-xs text-[var(--color-muted)]">
                  {t("ourStory", "sinceDayOne")}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
