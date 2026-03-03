"use client";

import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { getTranslationArray } from "@/lib/i18n/getTranslationData";
import { viewportConfig, staggerContainer, staggerItem } from "@/lib/animations";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { WaterButton } from "@/components/ui/water-button";

interface Plan {
  name: { en: string; es: string };
  rate: string;
  term: { en: string; es: string };
  description: { en: string; es: string };
  features: { en: string[]; es: string[] };
  popular?: boolean;
}

export function FinancingOptions() {
  const { t, language } = useLanguage();

  const plans = getTranslationArray<Plan>("financingPage", "plans");

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-white" />
      <div
        className="absolute top-0 left-1/3 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,159,227,0.04) 0%, transparent 70%)",
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
            {t("financingPage", "optionsLabel")}
          </span>
          <h2 className="heading-md font-bold text-[var(--color-foreground)]">
            {t("financingPage", "optionsHeading")}
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className={`relative overflow-hidden rounded-2xl border-2 p-8 transition-all duration-300 hover:shadow-xl ${
                plan.popular
                  ? "border-[var(--color-primary)] shadow-lg shadow-[var(--color-primary)]/10"
                  : "border-[var(--color-border)] hover:border-[var(--color-primary)]/30"
              }`}
            >
              {plan.popular && (
                <div className="absolute inset-0 rounded-[inherit] pointer-events-none overflow-hidden">
                  <div
                    className="absolute inset-0 rounded-[inherit]"
                    style={{
                      padding: 2,
                      background: "conic-gradient(from 0deg, #009FE3, #3BD6F5, #009FE3)",
                      WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      WebkitMaskComposite: "xor",
                      maskComposite: "exclude",
                      animation: "waterEdgeSpin 6s linear infinite",
                    }}
                  />
                </div>
              )}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-[var(--color-primary)] text-white px-4 py-1 rounded-full text-xs font-bold">
                  <Star className="w-3 h-3" />
                  {language === "en" ? "Most Popular" : "Mas Popular"}
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-lg font-bold text-[var(--color-foreground)] mb-2">
                  {plan.name[language]}
                </h3>
                <div className="text-4xl font-bold text-[var(--color-primary)] mb-1">
                  {plan.rate}
                </div>
                <p className="text-sm text-[var(--color-muted)]">
                  APR / {plan.term[language]}
                </p>
              </div>

              <p className="text-sm text-[var(--color-muted)] text-center mb-6 leading-relaxed">
                {plan.description[language]}
              </p>

              <ul className="space-y-3 mb-8">
                {plan.features[language].map((feature, fi) => (
                  <li key={fi} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <span className="text-sm text-[var(--color-foreground)]">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link href="/contact" className="block">
                {plan.popular ? (
                  <ShimmerButton className="w-full py-5">
                    <span className="text-sm font-semibold text-white">{t("common", "getStarted")}</span>
                  </ShimmerButton>
                ) : (
                  <WaterButton className="w-full py-5 text-sm">
                    {t("common", "getStarted")}
                  </WaterButton>
                )}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
