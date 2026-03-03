"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight, Droplets, Beaker, ShieldCheck, Gauge, Leaf } from "lucide-react";
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

/* 5-Stage Filtration data */
const filtrationStages = [
  {
    stage: 1,
    name: { en: "Sediment Filter", es: "Filtro de Sedimentos" },
    desc: { en: "Removes sand, dirt, rust, and particles down to 5 microns. Protects the RO membrane.", es: "Elimina arena, suciedad, oxido y particulas de hasta 5 micrones. Protege la membrana RO." },
    icon: Gauge,
    removal: "Sand, Dirt, Rust",
    color: "#F59E0B",
  },
  {
    stage: 2,
    name: { en: "Carbon Block Filter", es: "Filtro de Carbon en Bloque" },
    desc: { en: "Absorbs chlorine, chloramines, and organic chemicals that cause bad taste and odor.", es: "Absorbe cloro, cloraminas y quimicos organicos que causan mal sabor y olor." },
    icon: Beaker,
    removal: "Chlorine, Chemicals",
    color: "#10B981",
  },
  {
    stage: 3,
    name: { en: "RO Membrane", es: "Membrana RO" },
    desc: { en: "The heart of the system. Forces water through a 0.0001 micron membrane, removing 99% of dissolved solids.", es: "El corazon del sistema. Fuerza el agua a traves de una membrana de 0.0001 micrones, eliminando el 99% de solidos disueltos." },
    icon: ShieldCheck,
    removal: "99% of TDS",
    color: "var(--color-primary)",
  },
  {
    stage: 4,
    name: { en: "Post Carbon Filter", es: "Filtro Post Carbon" },
    desc: { en: "Final polish that removes any remaining taste or odor, ensuring crystal-clear water.", es: "Pulido final que elimina cualquier sabor u olor restante, asegurando agua cristalina." },
    icon: Droplets,
    removal: "Taste, Odor",
    color: "var(--color-accent)",
  },
  {
    stage: 5,
    name: { en: "Alkaline Remineralization", es: "Remineralizacion Alcalina" },
    desc: { en: "Adds beneficial minerals like calcium and magnesium back, raising pH to optimal 7.5-8.5 range.", es: "Agrega minerales beneficiosos como calcio y magnesio, elevando el pH al rango optimo de 7.5-8.5." },
    icon: Leaf,
    removal: "pH Balance",
    color: "#8B5CF6",
  },
];

/* Before/after metric comparisons */
const metricComparisons = [
  { metric: "TDS (ppm)", before: "300-500", after: "10-30", improvement: "95%" },
  { metric: "Chlorine (ppm)", before: "1.0-4.0", after: "0.0", improvement: "100%" },
  { metric: "Lead (ppb)", before: "5-15", after: "<1", improvement: "99%" },
  { metric: "Fluoride (ppm)", before: "0.7-1.2", after: "<0.1", improvement: "92%" },
  { metric: "Bacteria (CFU)", before: "1-500", after: "0", improvement: "100%" },
  { metric: "Nitrates (ppm)", before: "5-10", after: "<1", improvement: "95%" },
];

export function ROContent() {
  const { t, language } = useLanguage();
  const features = getTranslationArray<FeatureItem>("reverseOsmosisPage", "features");
  const steps = getTranslationArray<ProcessStep>("reverseOsmosisPage", "processSteps");
  const faqItems = getTranslationArray<FAQItem>("reverseOsmosisPage", "faq");

  const parallaxRef = useRef(null);
  const { scrollYProgress: imgProgress } = useScroll({
    target: parallaxRef,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(imgProgress, [0, 1], [50, -50]);

  return (
    <>
      {/* Overview - Image left, text right with parallax */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-40 left-0 w-[500px] h-[500px] rounded-full"
            style={{ background: "linear-gradient(160deg, rgba(0,159,227,0.03) 0%, transparent 40%, rgba(59,214,245,0.02) 100%)" }}
          />
          <svg className="absolute top-0 right-0 w-full h-32 text-[var(--color-accent)]" viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path d="M0,80 C480,20 960,100 1440,40 L1440,0 L0,0 Z" fill="currentColor" fillOpacity="0.015" />
          </svg>
        </div>

        <div ref={parallaxRef} className="container-custom relative space-y-20 lg:space-y-28">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportConfig}
              transition={{ duration: 0.7 }}
            >
              <motion.div className="rounded-2xl overflow-hidden shadow-2xl shadow-[var(--color-primary)]/10" style={{ y: imgY }}>
                <Image
                  src="https://images.pexels.com/photos/6032817/pexels-photo-6032817.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Pouring purified reverse osmosis drinking water"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
              </motion.div>
              <motion.div
                className="absolute -bottom-6 -left-2 lg:-left-6 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-xl shadow-xl p-4 text-white"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={viewportConfig}
                transition={{ delay: 0.5 }}
              >
                <p className="text-2xl font-bold">99%</p>
                <p className="text-xs text-white/70">
                  {language === "es" ? "Eliminacion Contaminantes" : "Contaminant Removal"}
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportConfig}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-px bg-[var(--color-primary)]" />
                <span className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-primary)]">
                  {t("reverseOsmosisPage", "heroLabel")}
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[var(--color-foreground)] leading-tight mb-5">
                {t("reverseOsmosisPage", "featuresHeading")}
              </h2>
              <p className="text-[var(--color-muted)] leading-relaxed mb-8">
                {t("reverseOsmosisPage", "heroDescription")}
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {features.slice(0, 4).map((feature, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start gap-2.5"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={viewportConfig}
                    transition={{ delay: i * 0.06 }}
                  >
                    <div className="w-5 h-5 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-[var(--color-primary)]" />
                    </div>
                    <span className="text-sm text-[var(--color-foreground)]">
                      {feature.title[language]}
                    </span>
                  </motion.div>
                ))}
              </div>
              <motion.div
                className="mt-8"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportConfig}
                transition={{ delay: 0.3 }}
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

          {/* Block 2 - Reversed */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              className="lg:order-2 relative"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportConfig}
              transition={{ duration: 0.7 }}
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl shadow-[var(--color-primary)]/10">
                <Image
                  src="https://images.pexels.com/photos/1458671/pexels-photo-1458671.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Family enjoying clean drinking water at kitchen"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
              </div>
            </motion.div>

            <motion.div
              className="lg:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportConfig}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-[var(--color-foreground)] leading-tight mb-5">
                {language === "es" ? "Agua Pura," : "Pure Water,"}
                <br />
                <span className="text-[var(--color-primary)]">
                  {language === "es" ? "Directo de Su Grifo" : "Straight From Your Tap"}
                </span>
              </h2>
              <p className="text-[var(--color-muted)] leading-relaxed mb-6">
                {language === "es"
                  ? "Nuestros sistemas de osmosis inversa de multiples etapas se instalan debajo de su fregadero de cocina y se conectan a un grifo dedicado, dandole agua purificada ilimitada sin el desperdicio del agua embotellada."
                  : "Our multi-stage reverse osmosis systems are installed under your kitchen sink and connect to a dedicated faucet, giving you unlimited purified drinking water without the waste of bottled water."}
              </p>
              <div className="space-y-3">
                {features.slice(4).map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-[var(--color-primary)]" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-[var(--color-foreground)]">{feature.title[language]}</span>
                      <span className="text-sm text-[var(--color-muted)]"> &mdash; {feature.description[language]}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5-Stage Filtration Scroll Reveal */}
      <FiltrationStages language={language} />

      {/* Inline CTA */}
      <InlineCTABanner
        headline={language === "es" ? "Deje de comprar agua embotellada" : "Stop Buying Bottled Water"}
        subtext={language === "es" ? "Una familia promedio gasta $500+/ano en agua embotellada. Nuestro sistema RO se paga solo." : "The average family spends $500+/year on bottled water. Our RO system pays for itself."}
        buttonText={language === "es" ? "Calcule Sus Ahorros" : "Calculate Your Savings"}
        variant="gradient"
      />

      {/* Before/After Metrics Comparison */}
      <MetricsComparison language={language} />

      {/* Process Timeline */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, rgba(8,73,120,0.03) 0%, rgba(0,159,227,0.02) 50%, rgba(59,214,245,0.03) 100%)",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
          style={{ background: "linear-gradient(160deg, rgba(0,159,227,0.03) 0%, transparent 40%, rgba(59,214,245,0.02) 100%)" }}
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
              {t("reverseOsmosisPage", "processLabel")}
            </span>
            <h2 className="heading-md font-bold text-[var(--color-foreground)]">
              {t("reverseOsmosisPage", "processHeading")}
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--color-primary)]/20 via-[var(--color-accent)]/20 to-transparent hidden md:block" />
              <div className="space-y-8">
                {steps.map((step, i) => (
                  <motion.div
                    key={i}
                    className="flex gap-6 items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={viewportConfig}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                  >
                    <div className="relative z-10 w-12 h-12 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-lg shadow-[var(--color-primary)]/20">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="flex-1 pb-2">
                      <h3 className="text-lg font-bold text-[var(--color-foreground)] mb-1">
                        {step.title[language]}
                      </h3>
                      <p className="text-[var(--color-muted)] leading-relaxed">
                        {step.description[language]}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            transition={{ delay: 0.4 }}
          >
            <Link href="/contact">
              <ShimmerButton
                shimmerColor="#3BD6F5"
                background="var(--color-primary)"
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

      {/* FAQ */}
      {faqItems.length > 0 && (
        <section className="relative py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[var(--color-surface)]" />
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full"
              style={{ background: "linear-gradient(160deg, rgba(0,159,227,0.03) 0%, transparent 40%, rgba(59,214,245,0.02) 100%)" }}
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
      <RelatedServices currentSlug="reverse-osmosis" />
      <CTA />
    </>
  );
}

/* -------- Sub-components -------- */

function FiltrationStages({ language }: { language: "en" | "es" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="relative py-24 lg:py-32 overflow-hidden bg-[var(--color-dark)]">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full"
          style={{ background: "linear-gradient(160deg, rgba(0,159,227,0.06) 0%, transparent 40%, rgba(59,214,245,0.04) 100%)" }}
        />
        <div
          className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full"
          style={{ background: "linear-gradient(200deg, rgba(59,214,245,0.04) 0%, transparent 40%, rgba(0,159,227,0.03) 100%)" }}
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-px bg-[var(--color-accent)]" />
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-accent)]">
              {language === "es" ? "Filtracion de 5 Etapas" : "5-Stage Filtration"}
            </span>
            <div className="w-10 h-px bg-[var(--color-accent)]" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
            {language === "es" ? "Como Funciona" : "How It Works"}
          </h2>
        </motion.div>

        {/* Connected stages */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-24 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {filtrationStages.map((stage, i) => {
              const Icon = stage.icon;
              return (
                <motion.div
                  key={i}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.12, duration: 0.5 }}
                >
                  <div className="relative mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ background: `${stage.color}20` }}>
                    <Icon className="w-7 h-7" style={{ color: stage.color }} />
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white text-[var(--color-dark)] text-xs font-bold flex items-center justify-center shadow-lg">
                      {stage.stage}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-white mb-2">{stage.name[language]}</h3>
                  <p className="text-xs text-white/50 leading-relaxed mb-2">{stage.desc[language]}</p>
                  <span className="inline-block text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full" style={{ background: `${stage.color}20`, color: stage.color }}>
                    {stage.removal}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function MetricsComparison({ language }: { language: "en" | "es" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[var(--color-surface)]" />
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full"
          style={{ background: "linear-gradient(160deg, rgba(0,159,227,0.03) 0%, transparent 40%, rgba(59,214,245,0.02) 100%)" }}
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
            {language === "es" ? "Antes y Despues" : "Before & After"}
            <span className="w-8 h-px bg-[var(--color-primary)]" />
          </span>
          <h2 className="heading-md font-bold text-[var(--color-foreground)]">
            {language === "es" ? "Resultados Reales" : "Real Results"}
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Table Header */}
          <div className="grid grid-cols-4 gap-4 mb-4 px-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)]">
              {language === "es" ? "Metrica" : "Metric"}
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-red-400 text-center">
              {language === "es" ? "Agua del Grifo" : "Tap Water"}
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)] text-center">
              {language === "es" ? "Despues de RO" : "After RO"}
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-500 text-center">
              {language === "es" ? "Mejora" : "Improvement"}
            </span>
          </div>

          <div className="space-y-3">
            {metricComparisons.map((item, i) => (
              <motion.div
                key={i}
                className="grid grid-cols-4 gap-4 items-center p-4 rounded-xl bg-white border border-[var(--color-border)] hover:shadow-md hover:border-[var(--color-primary)]/15 transition-all duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.06, duration: 0.4 }}
              >
                <span className="text-sm font-semibold text-[var(--color-foreground)]">{item.metric}</span>
                <span className="text-sm text-red-500 text-center font-medium">{item.before}</span>
                <span className="text-sm text-[var(--color-primary)] text-center font-bold">{item.after}</span>
                <div className="flex items-center justify-center">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-bold">
                    {item.improvement}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
