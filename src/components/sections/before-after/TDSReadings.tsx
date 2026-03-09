"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { NumberTicker } from "@/components/magicui/number-ticker";
import GlassLiftCard from "@/components/animations/glass-lift-card";
import { translations } from "@/lib/i18n/translations";

export function TDSReadings() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const t = translations.beforeAfterPage.tdsSection;

  return (
    <section ref={ref} className="relative py-20 lg:py-28 overflow-hidden">
      {/* Dark background */}
      <div className="absolute inset-0 bg-[var(--color-dark)]" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 30% 40%, rgba(0,159,227,0.12) 0%, transparent 60%), radial-gradient(ellipse 40% 50% at 75% 60%, rgba(59,214,245,0.08) 0%, transparent 60%)",
        }}
      />
      {/* Sweeping highlight */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(140deg, transparent 30%, rgba(59,214,245,0.03) 45%, transparent 60%)",
        }}
      />

      <div className="relative container-custom z-10">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold text-[var(--color-accent)] bg-[var(--color-accent)]/10 mb-4">
            {t.label}
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
            {t.heading}
          </h2>
          <p className="text-lg text-white/50 leading-relaxed">
            {t.subheading}
          </p>
        </motion.div>

        {/* TDS Cards */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {t.readings.map((reading) => (
            <motion.div key={reading.location} variants={staggerItem}>
              <GlassLiftCard className="rounded-2xl">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
                  <p className="text-sm font-medium text-white/50 mb-4 uppercase tracking-wider">
                    {reading.location}
                  </p>

                  {/* Before */}
                  <div className="mb-4">
                    <p className="text-xs text-red-400/80 mb-1 font-medium">Before</p>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-3xl font-bold text-red-400">
                        {isInView && <NumberTicker value={reading.before} className="text-red-400" />}
                      </span>
                      <span className="text-sm text-white/40">{reading.unit}</span>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="flex justify-center mb-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[var(--color-accent)]">
                      <path d="M12 5V19M12 19L6 13M12 19L18 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>

                  {/* After */}
                  <div>
                    <p className="text-xs text-green-400/80 mb-1 font-medium">After</p>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-3xl font-bold text-green-400">
                        {isInView && <NumberTicker value={reading.after} className="text-green-400" />}
                      </span>
                      <span className="text-sm text-white/40">{reading.unit}</span>
                    </div>
                  </div>

                  {/* Reduction badge */}
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <span className="text-sm font-semibold text-[var(--color-accent)]">
                      {Math.round(((reading.before - reading.after) / reading.before) * 100)}% Reduction
                    </span>
                  </div>
                </div>
              </GlassLiftCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
