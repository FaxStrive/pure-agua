"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Droplets, Ruler, Wrench, HeartHandshake, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { WaterButton } from "@/components/ui/water-button";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translations } from "@/lib/i18n/translations";

const stepIcons = [Droplets, Ruler, Wrench, HeartHandshake];

const stepImages = [
  { src: "/images/water-testing-lab.jpg", alt: "Technician testing water quality in lab" },
  { src: "/images/technician-clipboard.jpg", alt: "Technician writing custom recommendation" },
  { src: "/images/installation-plumbing.jpg", alt: "Professional water system installation" },
  { src: "/images/enjoy-pure-water.jpg", alt: "Hands catching clean flowing water" },
];

export function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const { t, language } = useLanguage();
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  const steps = translations.process.steps.map((step, i) => ({
    icon: stepIcons[i],
    number: String(i + 1).padStart(2, "0"),
    title: step.title[language],
    description: step.description[language],
  }));

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-24 md:py-32">
      {/* Light background with subtle accent */}
      <div className="absolute inset-0 bg-[var(--color-surface)]" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 70% 20%, rgba(0,159,227,0.05) 0%, transparent 50%)",
        }}
      />

      <div className="container-custom relative z-10">
        {/* Header - left aligned */}
        <div className="max-w-xl mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium uppercase tracking-[0.15em] text-[var(--color-primary)] mb-5"
            style={{ backgroundColor: "rgba(0,159,227,0.08)" }}
          >
            {t("process", "label")}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-3xl lg:text-5xl font-bold text-[var(--color-foreground)] mb-4"
          >
            {t("process", "heading")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-[var(--color-muted)] leading-relaxed"
          >
            {t("process", "subheading")}
          </motion.p>
        </div>

        {/* Steps - alternating left/right cards with large numbers */}
        <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-6 lg:gap-8">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: 0.3 + i * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative"
              >
                <div className="relative flex rounded-2xl bg-white border border-[var(--color-border)] hover:border-[var(--color-primary)]/20 hover:shadow-xl transition-all duration-500 overflow-hidden">
                  {/* Text content */}
                  <div className="flex-1 p-7 md:p-8 relative">
                    {/* Large faded step number */}
                    <span
                      className="absolute top-4 right-4 text-[4rem] font-black leading-none select-none pointer-events-none"
                      style={{ color: "rgba(0,159,227,0.06)" }}
                      aria-hidden="true"
                    >
                      {step.number}
                    </span>

                    <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)]/8 flex items-center justify-center group-hover:bg-[var(--color-primary)]/15 transition-colors duration-300 mb-4">
                      <Icon className="w-5 h-5 text-[var(--color-primary)]" />
                    </div>

                    <h3 className="text-lg font-bold text-[var(--color-foreground)] mb-2 group-hover:text-[var(--color-primary)] transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Photo */}
                  <div className="hidden sm:block relative w-[140px] lg:w-[160px] shrink-0">
                    <Image
                      src={stepImages[i].src}
                      alt={stepImages[i].alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="160px"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-14"
        >
          <Link href="/contact">
            <WaterButton className="text-base font-semibold px-8 py-4">
              {language === "es" ? "Programe Su Consulta Gratis" : "Schedule Free Consultation"}
              <ArrowRight className="w-5 h-5 ml-2" />
            </WaterButton>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
