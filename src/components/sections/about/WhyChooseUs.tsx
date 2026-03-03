"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { viewportConfig } from "@/lib/animations";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translations } from "@/lib/i18n/translations";
import { WaterButton } from "@/components/ui/water-button";

export function WhyChooseUs() {
  const { t, language } = useLanguage();

  const reasons = translations.whyChooseUs.reasons[language];

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-[var(--color-dark)]">
      {/* SVG wave accent */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="absolute top-0 right-0 w-[200%] h-24 opacity-[0.06]" viewBox="0 0 2880 80" preserveAspectRatio="none">
          <path d="M0,40 C480,10 960,70 1440,40 C1920,10 2400,70 2880,40 L2880,0 L0,0Z" fill="#3BD6F5">
            <animateTransform attributeName="transform" type="translate" values="0,0;-1440,0;0,0" dur="22s" repeatCount="indefinite" />
          </path>
        </svg>
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(170deg, transparent 0%, rgba(0,159,227,0.04) 50%, transparent 100%)" }}
        />
      </div>

      <div className="relative container-custom">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.7 }}
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <Image
                src="https://images.pexels.com/photos/1556704/pexels-photo-1556704.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Clean water flowing"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-px bg-[var(--color-accent)]" />
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-accent)]">
                {t("whyChooseUs", "label")}
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-6">
              {t("whyChooseUs", "heading")}
            </h2>
            <p className="text-lg text-white/60 leading-relaxed mb-8">
              {t("whyChooseUs", "description")}
            </p>

            <div className="space-y-3">
              {reasons.map((reason, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-3 py-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewportConfig}
                  transition={{ delay: 0.3 + i * 0.06, duration: 0.4 }}
                >
                  <div className="w-5 h-5 rounded-full bg-[var(--color-accent)]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[var(--color-accent)]" />
                  </div>
                  <span className="text-white/80 leading-relaxed">
                    {reason}
                  </span>
                </motion.div>
              ))}
            </div>

            <Link href="/contact" className="inline-block mt-8">
              <WaterButton
                fillColor="var(--color-accent)"
                className="px-8 py-3 text-sm border-[var(--color-accent)] text-[var(--color-accent)]"
              >
                {t("nav", "freeWaterTest")}
              </WaterButton>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
