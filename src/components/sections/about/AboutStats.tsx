"use client";

import { motion } from "framer-motion";
import { viewportConfig } from "@/lib/animations";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { NumberTicker } from "@/components/magicui/number-ticker";
import WaterCaustics from "@/components/animations/water-caustics";
import { scaleUpReveal, easeOutExpo } from "@/lib/animations";

export function AboutStats() {
  const { t } = useLanguage();

  const stats = [
    { numericValue: 500, suffix: "+", label: t("aboutStats", "homesServed") },
    { numericValue: 10, suffix: "+", label: t("aboutStats", "yearsExperience") },
    { numericValue: 99, suffix: "%", label: t("aboutStats", "satisfactionRate") },
    { numericValue: 1000, suffix: "+", label: t("aboutStats", "systemsInstalled") },
  ];

  return (
    <section className="relative py-16 lg:py-20 bg-[var(--color-dark)] overflow-hidden">
      {/* Water caustics overlay + diagonal sweep */}
      <div className="absolute inset-0 pointer-events-none">
        <WaterCaustics variant="dark" speed={10} />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(150deg, rgba(0,159,227,0.06) 0%, transparent 50%, rgba(59,214,245,0.04) 100%)",
          }}
        />
      </div>

      <div className="relative container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-0">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className={`text-center ${
                i < stats.length - 1 ? "lg:border-r lg:border-white/10" : ""
              }`}
              initial={scaleUpReveal.initial}
              whileInView={scaleUpReveal.animate}
              viewport={viewportConfig}
              transition={{ delay: i * 0.1, duration: 0.6, ease: easeOutExpo }}
            >
              <span className="flex items-center justify-center gap-0 mb-2">
                <NumberTicker
                  value={stat.numericValue}
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white"
                />
                <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                  {stat.suffix}
                </span>
              </span>
              <span className="text-sm text-white/50 font-medium uppercase tracking-wider">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
