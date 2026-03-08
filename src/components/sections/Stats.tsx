"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { WaterButton } from "@/components/ui/water-button";
import { NumberTicker } from "@/components/magicui/number-ticker";
import WaterCaustics from "@/components/animations/water-caustics";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { scaleUpReveal, easeOutExpo } from "@/lib/animations";

const stats = [
  { value: 10, suffix: "+", labelEn: "Years of Experience", labelEs: "Anos de Experiencia" },
  { value: 3, suffix: " Hr", labelEn: "Average Installation", labelEs: "Instalacion Promedio" },
  { value: 100, suffix: "%", labelEn: "Satisfaction Guaranteed", labelEs: "Satisfaccion Garantizada" },
  { value: 500, suffix: "+", labelEn: "Systems Installed", labelEs: "Sistemas Instalados" },
];

export function Stats() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.5 });
  useLanguage();

  return (
    <section ref={sectionRef} className="relative py-20 overflow-hidden">
      {/* Background - white base + asymmetric radial blobs + top wave separator */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Base */}
        <div className="absolute inset-0 bg-white" />

        {/* Top SVG wave separator */}
        <svg
          className="absolute top-0 left-0 w-full"
          style={{ opacity: 0.04 }}
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,0 L0,0 Z"
            fill="var(--color-primary)"
          />
        </svg>

        {/* Bottom-left radial blob */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 10% 80%, rgba(59,214,245,0.06) 0%, transparent 50%)",
          }}
        />

        {/* Top-right radial blob */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 85% 15%, rgba(0,159,227,0.05) 0%, transparent 45%)",
          }}
        />

        <WaterCaustics variant="light" speed={12} />
      </div>

      <div className="container-custom relative z-10">
        {/* Header - centered, no eyebrow, just h2 + primary bar underline */}
        <motion.div
          className="text-center mb-12"
          initial={scaleUpReveal.initial}
          animate={isInView ? scaleUpReveal.animate : {}}
          transition={{ duration: 0.6, ease: easeOutExpo }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-foreground)]">
            {"Pure Agua by the Numbers"}
          </h2>
          <div
            className="mx-auto mt-3 rounded-full bg-[var(--color-primary)]"
            style={{ width: 40, height: 2 }}
          />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.labelEn}
              initial={scaleUpReveal.initial}
              animate={isInView ? scaleUpReveal.animate : {}}
              transition={{
                duration: 0.6,
                delay: i * 0.12,
                ease: easeOutExpo,
              }}
              whileHover={{ scale: 1.08, transition: { duration: 0.25 } }}
              className="text-center relative group cursor-default"
            >
              <div className="absolute inset-0 -m-4 rounded-2xl bg-[var(--color-primary)]/0 group-hover:bg-[var(--color-primary)]/[0.03] transition-colors duration-500" />
              <div className="relative">
                <div className="text-2xl sm:text-3xl md:text-5xl font-bold text-[var(--color-primary)] mb-2">
                  <NumberTicker
                    value={stat.value}
                    className="text-[var(--color-primary)]"
                    delay={0.2 + i * 0.15}
                  />
                  <span>{stat.suffix}</span>
                </div>
                <div className="text-sm text-[var(--color-text-secondary)] font-medium">
                  {stat.labelEn}
                </div>
              </div>
              {i < stats.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-[var(--color-border-light)]" />
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex justify-center mt-10"
        >
          <Link href="/contact">
            <WaterButton className="text-sm font-semibold px-6 py-3">
              {"Get Your Free Water Test"}
              <ArrowRight className="w-4 h-4 ml-2" />
            </WaterButton>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
