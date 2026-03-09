"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { translations } from "@/lib/i18n/translations";

const stats = [
  { value: 200, suffix: "+", label: translations.testimonialsPage.statsSection.happyFamilies },
  { value: 5.0, suffix: "", label: translations.testimonialsPage.statsSection.starRating, isDecimal: true },
  { value: 10, suffix: "+", label: translations.testimonialsPage.statsSection.yearsServing },
  { value: 500, suffix: "+", label: translations.testimonialsPage.statsSection.systemsInstalled },
];

export function ReviewStats() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section ref={ref} className="relative py-12 overflow-hidden">
      {/* Background band */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-primary)]" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 40% 80% at 50% 50%, rgba(255,255,255,0.08) 0%, transparent 60%)",
        }}
      />

      <div className="relative container-custom z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="flex items-baseline justify-center gap-0.5">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                  {isInView && (
                    stat.isDecimal
                      ? <NumberTicker value={stat.value} decimalPlaces={1} className="text-white" />
                      : <NumberTicker value={stat.value} className="text-white" />
                  )}
                </span>
                {stat.suffix && (
                  <span className="text-2xl sm:text-3xl font-bold text-white/80">{stat.suffix}</span>
                )}
              </div>
              <p className="text-sm text-white/60 mt-1 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
