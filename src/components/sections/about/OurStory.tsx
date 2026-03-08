"use client";

import { motion } from "framer-motion";
import { viewportConfig } from "@/lib/animations";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { TextAnimate } from "@/components/magicui/text-animate";

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

            <TextAnimate animation="blurInUp" by="word" as="h2" className="text-3xl lg:text-4xl font-bold text-[var(--color-foreground)] leading-tight mb-6">
              {t("ourStory", "heading")}
            </TextAnimate>

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
          <div className="absolute inset-0 bg-[var(--color-surface)] flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                </svg>
              </div>
              <p className="text-lg font-semibold text-[var(--color-dark)]">Family Photo Here</p>
              <p className="text-sm text-[var(--color-dark)]/50 mt-1">Client to provide</p>
            </div>
          </div>

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
