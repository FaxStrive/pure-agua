"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Check, Droplets, Shield, Sparkles as SparklesIcon, Zap, Heart, PiggyBank, ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { getTranslationArray, type LocalizedString } from "@/lib/i18n/getTranslationData";
import { viewportConfig } from "@/lib/animations";
import { RelatedServices } from "@/components/sections/services/shared/RelatedServices";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";
import { Guarantee } from "@/components/sections/services/Guarantee";
import InlineCTABanner from "@/components/conversion/InlineCTABanner";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { WaterButton } from "@/components/ui/water-button";
import { NumberTicker } from "@/components/magicui/number-ticker";
import GlassLiftCard from "@/components/animations/glass-lift-card";
import WaterCaustics from "@/components/animations/water-caustics";

const featureIcons = [Droplets, Shield, SparklesIcon, Zap, Heart, PiggyBank];

interface FeatureItem {
  title: LocalizedString;
  description: LocalizedString;
}

interface ProcessStep {
  title: LocalizedString;
  description: LocalizedString;
}

interface FAQItem {
  question: LocalizedString;
  answer: LocalizedString;
}

/* Contaminant data with animated removal bars */
const contaminants = [
  { name: { en: "Chlorine & Chloramines", es: "Cloro y Cloraminas" }, removal: 99, color: "#009FE3" },
  { name: { en: "Sediment & Turbidity", es: "Sedimento y Turbidez" }, removal: 99, color: "#3BD6F5" },
  { name: { en: "Iron & Manganese", es: "Hierro y Manganeso" }, removal: 95, color: "#10B981" },
  { name: { en: "Sulfur & Hydrogen Sulfide", es: "Azufre y Sulfuro de Hidrogeno" }, removal: 98, color: "#F59E0B" },
  { name: { en: "Pesticides & Herbicides", es: "Pesticidas y Herbicidas" }, removal: 97, color: "#8B5CF6" },
  { name: { en: "VOCs & Industrial Chemicals", es: "COV y Quimicos Industriales" }, removal: 96, color: "#EC4899" },
];

export function WholeHomeContent() {
  const { t, language } = useLanguage();
  const features = getTranslationArray<FeatureItem>("wholeHomePage", "features");
  const steps = getTranslationArray<ProcessStep>("wholeHomePage", "processSteps");
  const faqItems = getTranslationArray<FAQItem>("wholeHomePage", "faq");

  const parallaxRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <>
      {/* Overview Section - Image + Text side by side */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <svg className="absolute bottom-0 left-0 w-full h-48 text-[var(--color-primary)]" viewBox="0 0 1440 200" preserveAspectRatio="none">
            <path d="M0,120 C360,180 720,60 1440,140 L1440,200 L0,200 Z" fill="currentColor" fillOpacity="0.02" />
          </svg>
          <div
            className="absolute top-20 right-0 w-[700px] h-[700px] rounded-full"
            style={{ background: "linear-gradient(160deg, rgba(0,159,227,0.03) 0%, transparent 40%, rgba(59,214,245,0.02) 100%)" }}
          />
        </div>

        <div ref={parallaxRef} className="container-custom relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image with parallax */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={viewportConfig}
              transition={{ duration: 0.7 }}
            >
              <motion.div className="rounded-2xl overflow-hidden shadow-2xl shadow-[var(--color-primary)]/10" style={{ y: imageY }}>
                <Image
                  src="https://images.pexels.com/photos/327090/pexels-photo-327090.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Clean sparkling water being poured from whole home filtration"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
              </motion.div>
              {/* Floating accent badge */}
              <motion.div
                className="absolute -bottom-4 -right-4 lg:-right-8 bg-white rounded-xl shadow-xl shadow-[var(--color-primary)]/10 p-4 border border-[var(--color-border)]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportConfig}
                transition={{ delay: 0.4 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[var(--color-foreground)]">
                      {language === "es" ? "5-7 Anos" : "5-7 Year"}
                    </p>
                    <p className="text-xs text-[var(--color-muted)]">
                      {language === "es" ? "Vida del Filtro" : "Filter Media Life"}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportConfig}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-px bg-[var(--color-primary)]" />
                <span className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-primary)]">
                  {t("wholeHomePage", "heroLabel")}
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[var(--color-foreground)] leading-tight mb-5">
                {t("wholeHomePage", "featuresHeading")}
              </h2>
              <p className="text-[var(--color-muted)] leading-relaxed mb-8">
                {t("wholeHomePage", "heroDescription")}
              </p>
              <div className="space-y-3">
                {features.slice(0, 4).map((feature, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={viewportConfig}
                    transition={{ delay: i * 0.08 }}
                  >
                    <div className="w-5 h-5 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-[var(--color-primary)]" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-[var(--color-foreground)]">{feature.title[language]}</span>
                      <span className="text-sm text-[var(--color-muted)]"> &mdash; {feature.description[language]}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
              <motion.div
                className="mt-8"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportConfig}
                transition={{ delay: 0.4 }}
              >
                <Link href="/contact">
                  <WaterButton className="text-sm font-semibold px-6 py-3">
                    {t("nav", "freeWaterTest")}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </WaterButton>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contaminant Removal Section - Animated bars */}
      <ContaminantSection language={language} />

      {/* Inline CTA */}
      <InlineCTABanner
        headline={language === "es" ? "Preocupado por la calidad de su agua?" : "Concerned About Your Water Quality?"}
        subtext={language === "es" ? "Programe una prueba gratuita y descubra exactamente que hay en su agua." : "Schedule a free water test and find out exactly what's in your water."}
        buttonText={language === "es" ? "Prueba Gratis" : "Free Water Test"}
        variant="accent"
      />

      {/* Benefits Grid with GlassLiftCard */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-1/3 left-0 w-[600px] h-[600px] rounded-full"
            style={{ background: "linear-gradient(160deg, rgba(59,214,245,0.03) 0%, transparent 40%, rgba(0,159,227,0.02) 100%)" }}
          />
          <div
            className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full"
            style={{ background: "linear-gradient(200deg, rgba(0,159,227,0.03) 0%, transparent 40%, rgba(59,214,245,0.02) 100%)" }}
          />
        </div>

        <div className="container-custom relative">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
          >
            <span className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-primary)] mb-4">
              <span className="w-8 h-px bg-[var(--color-primary)]" />
              {t("wholeHomePage", "featuresLabel")}
              <span className="w-8 h-px bg-[var(--color-primary)]" />
            </span>
            <h2 className="heading-md font-bold text-[var(--color-foreground)]">
              {t("wholeHomePage", "featuresHeading")}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => {
              const Icon = featureIcons[i % featureIcons.length];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportConfig}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                >
                  <GlassLiftCard liftAmount={5} className="rounded-2xl h-full">
                    <div className="relative group p-6 rounded-2xl bg-white border border-[var(--color-border)] hover:border-[var(--color-primary)]/20 transition-all duration-300 h-full">
                      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-accent)]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-5 h-5 text-[var(--color-primary)]" />
                      </div>
                      <h3 className="text-lg font-bold text-[var(--color-foreground)] mb-2">
                        {feature.title[language]}
                      </h3>
                      <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                        {feature.description[language]}
                      </p>
                    </div>
                  </GlassLiftCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process - Dark section with numbered steps and Sparkles */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-[var(--color-dark)]">
        <WaterCaustics variant="dark" speed={10} />
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full"
            style={{ background: "linear-gradient(160deg, rgba(0,159,227,0.08) 0%, transparent 40%, rgba(59,214,245,0.04) 100%)" }}
          />
          <div
            className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full"
            style={{ background: "linear-gradient(200deg, rgba(59,214,245,0.05) 0%, transparent 40%, rgba(0,159,227,0.03) 100%)" }}
          />
        </div>

        <div className="relative container-custom z-10">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-10 h-px bg-[var(--color-accent)]" />
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-accent)]">
                {t("wholeHomePage", "processLabel")}
              </span>
              <div className="w-10 h-px bg-[var(--color-accent)]" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              {t("wholeHomePage", "processHeading")}
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                className="text-center group"
                initial={{ opacity: 0, rotateX: 25 }}
                whileInView={{ opacity: 1, rotateX: 0 }}
                viewport={viewportConfig}
                transition={{ delay: i * 0.12, duration: 0.6, type: "spring", stiffness: 120 }}
              >
                <div className="relative inline-block mb-4">
                  <span className="text-5xl sm:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-white/5 leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-[var(--color-accent)]/20 scale-150 opacity-0 group-hover:opacity-100 group-hover:scale-[2]"
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <h3 className="text-base sm:text-xl font-bold text-white mb-2">
                  {step.title[language]}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed max-w-xs mx-auto">
                  {step.description[language]}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-14"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            transition={{ delay: 0.5 }}
          >
            <Link href="/contact">
              <ShimmerButton
                shimmerColor="#3BD6F5"
                background="var(--color-accent)"
                borderRadius="100px"
                className="text-sm font-semibold px-8 py-4"
              >
                {t("nav", "freeWaterTest")}
                <ArrowRight className="w-4 h-4 ml-2" />
              </ShimmerButton>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Strip */}
      <StatsStrip language={language} />

      {/* FAQ */}
      {faqItems.length > 0 && (
        <section className="relative py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full"
              style={{ background: "linear-gradient(160deg, rgba(59,214,245,0.03) 0%, transparent 40%, rgba(0,159,227,0.02) 100%)" }}
            />
          </div>

          <div className="container-custom relative max-w-3xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
            >
              <span className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-primary)] mb-4">
                <span className="w-8 h-px bg-[var(--color-primary)]" />
                {t("faq", "label")}
              </span>
              <h2 className="heading-md font-bold text-[var(--color-foreground)]">
                {t("faq", "heading")}
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ delay: 0.1 }}
            >
              <Accordion type="single" collapsible className="space-y-3">
                {faqItems.map((item, i) => (
                  <AccordionItem
                    key={i}
                    value={`faq-${i}`}
                    className="bg-white rounded-xl border border-[var(--color-border)] px-6 data-[state=open]:shadow-md data-[state=open]:border-[var(--color-primary)]/20 transition-all"
                  >
                    <AccordionTrigger className="text-left font-semibold text-[var(--color-foreground)] hover:text-[var(--color-primary)] py-5 text-base">
                      {item.question[language]}
                    </AccordionTrigger>
                    <AccordionContent className="text-[var(--color-muted)] leading-relaxed pb-5">
                      {item.answer[language]}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>
      )}

      <Guarantee />
      <Testimonials />
      <RelatedServices currentSlug="whole-home" />
      <CTA />
    </>
  );
}

/* -------- Sub-components -------- */

function ContaminantSection({ language }: { language: "en" | "es" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[var(--color-surface)]" />
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full"
          style={{ background: "linear-gradient(160deg, rgba(8,73,120,0.03) 0%, transparent 40%, rgba(0,159,227,0.02) 100%)" }}
        />
      </div>

      <div className="container-custom relative">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-primary)] mb-4">
            <span className="w-8 h-px bg-[var(--color-primary)]" />
            {language === "es" ? "Eliminacion de Contaminantes" : "Contaminant Removal"}
            <span className="w-8 h-px bg-[var(--color-primary)]" />
          </span>
          <h2 className="heading-md font-bold text-[var(--color-foreground)]">
            {language === "es" ? "Que Eliminamos" : "What We Remove"}
          </h2>
          <p className="text-[var(--color-muted)] mt-4 max-w-xl mx-auto">
            {language === "es"
              ? "Nuestros sistemas de filtracion de toda la casa eliminan una amplia gama de contaminantes."
              : "Our whole-home filtration systems remove a wide range of contaminants from every water source in your home."}
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-5">
          {contaminants.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-sm font-semibold text-[var(--color-foreground)]">
                  {item.name[language]}
                </span>
                <span className="text-sm font-bold" style={{ color: item.color }}>
                  {item.removal}%
                </span>
              </div>
              <div className="h-3 rounded-full bg-[var(--color-border)] overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: `linear-gradient(90deg, ${item.color}, ${item.color}88)` }}
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${item.removal}%` } : { width: 0 }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsStrip({ language }: { language: "en" | "es" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const stats = [
    { value: 500, suffix: "+", label: language === "es" ? "Sistemas Instalados" : "Systems Installed" },
    { value: 99, suffix: "%", label: language === "es" ? "Eliminacion Contaminantes" : "Contaminant Removal" },
    { value: 10, suffix: "+", label: language === "es" ? "Anos de Experiencia" : "Years Experience" },
    { value: 100, suffix: "%", label: language === "es" ? "Satisfaccion Garantizada" : "Satisfaction Guaranteed" },
  ];

  return (
    <section ref={ref} className="relative py-16 bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-primary)]">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <p className="text-3xl md:text-4xl font-bold text-white mb-1">
                {isInView ? <NumberTicker value={stat.value} delay={0.2 + i * 0.15} /> : "0"}
                {stat.suffix}
              </p>
              <p className="text-sm text-white/70">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
