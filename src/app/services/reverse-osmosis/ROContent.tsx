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
    name: "Sediment Pre-Filter",
    desc: "5-micron sediment pre-filter removes sand, dirt, rust, and particles. Protects the RO membrane from damage.",
    icon: Gauge,
    removal: "Sand, Dirt, Rust",
    color: "#F59E0B",
  },
  {
    stage: 2,
    name: "Carbon Block Filter",
    desc: "10\" x 2.5\" carbon block rated at 5 microns. Absorbs chlorine, chloramines, and organic chemicals that cause bad taste and odor.",
    icon: Beaker,
    removal: "Chlorine, Chemicals",
    color: "#10B981",
  },
  {
    stage: 3,
    name: "RO Membrane (NSF/ANSI 58)",
    desc: "50 GPD TFC membrane with 99% salt rejection, NSF/ANSI 58 certified. Assembled in America. Optional permeate pump reduces waste by 80%.",
    icon: ShieldCheck,
    removal: "99% of TDS",
    color: "#009FE3",
  },
  {
    stage: 4,
    name: "Post Carbon Filter",
    desc: "Final polish that removes any remaining taste or odor, ensuring crystal-clear water.",
    icon: Droplets,
    removal: "Taste, Odor",
    color: "#3BD6F5",
  },
  {
    stage: 5,
    name: "Alkaline Remineralization",
    desc: "Adds beneficial minerals like calcium and magnesium back, raising pH to optimal 7.5-8.5 range.",
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
  const { t } = useLanguage();
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
                  {"Contaminant Removal"}
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
                      {feature.title}
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
                {"Pure Water,"}
                <br />
                <span className="text-[var(--color-primary)]">
                  {"Straight From Your Tap"}
                </span>
              </h2>
              <p className="text-[var(--color-muted)] leading-relaxed mb-6">
                {"Our multi-stage reverse osmosis systems are installed under your kitchen sink and connect to a dedicated faucet, giving you unlimited purified drinking water without the waste of bottled water."}
              </p>
              <div className="space-y-3">
                {features.slice(4).map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-[var(--color-primary)]" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-[var(--color-foreground)]">{feature.title}</span>
                      <span className="text-sm text-[var(--color-muted)]"> &mdash; {feature.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5-Stage Filtration Scroll Reveal */}
      <FiltrationStages />

      {/* Inline CTA */}
      <InlineCTABanner
        headline="Stop Buying Bottled Water"
        subtext="The average family spends $500+/year on bottled water. Our RO system pays for itself."
        buttonText="Calculate Your Savings"
        variant="gradient"
      />

      {/* Before/After Metrics Comparison */}
      <MetricsComparison />

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
                        {step.title}
                      </h3>
                      <p className="text-[var(--color-muted)] leading-relaxed">
                        {step.description}
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
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-[var(--color-muted)] leading-relaxed pb-5">
                      {item.answer}
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

function FiltrationStages() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="relative py-24 lg:py-32 overflow-hidden bg-[var(--color-dark)]">
      <div className="absolute inset-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="/videos/whole-home-process-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[var(--color-dark)]/[0.92]" />
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
              {"5-Stage Filtration"}
            </span>
            <div className="w-10 h-px bg-[var(--color-accent)]" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
            {"How It Works"}
          </h2>
        </motion.div>

        {/* Connected stages */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-[2.5rem] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
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
                  <div className="relative mx-auto w-20 h-20 rounded-full flex items-center justify-center mb-5" style={{ background: `${stage.color}20` }}>
                    <Icon className="w-9 h-9" style={{ color: stage.color }} />
                    <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-white text-[var(--color-dark)] text-sm font-bold flex items-center justify-center shadow-lg">
                      {stage.stage}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{stage.name}</h3>
                  <p className="text-sm text-white/50 leading-relaxed mb-3">{stage.desc}</p>
                  <span className="inline-block text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full" style={{ background: `${stage.color}20`, color: stage.color }}>
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

function MetricsComparison() {
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
            {"Before & After"}
            <span className="w-8 h-px bg-[var(--color-primary)]" />
          </span>
          <h2 className="heading-md font-bold text-[var(--color-foreground)]">
            {"Real Results"}
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {metricComparisons.map((item, i) => (
            <motion.div
              key={i}
              className="group relative rounded-2xl bg-white border border-[var(--color-border)] p-6 hover:shadow-xl hover:shadow-[var(--color-primary)]/5 hover:border-[var(--color-primary)]/20 transition-all duration-500"
              initial={{ opacity: 0, y: 25, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Metric name */}
              <p className="text-sm font-semibold text-[var(--color-foreground)] mb-5">{item.metric}</p>

              {/* Before → After bar */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex-1 text-center rounded-lg bg-red-50 border border-red-100 py-2.5">
                  <p className="text-[10px] font-medium uppercase tracking-wider text-red-400 mb-0.5">Tap Water</p>
                  <p className="text-lg font-bold text-red-500">{item.before}</p>
                </div>
                <svg className="w-5 h-5 text-[var(--color-muted)] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <div className="flex-1 text-center rounded-lg bg-[var(--color-primary)]/5 border border-[var(--color-primary)]/10 py-2.5">
                  <p className="text-[10px] font-medium uppercase tracking-wider text-[var(--color-primary)]/70 mb-0.5">After RO</p>
                  <p className="text-lg font-bold text-[var(--color-primary)]">{item.after}</p>
                </div>
              </div>

              {/* Improvement bar */}
              <div className="relative h-2 rounded-full bg-[var(--color-surface)] overflow-hidden">
                <motion.div
                  className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: item.improvement } : {}}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
              <div className="flex items-center justify-between mt-2">
                <span className="text-xs text-[var(--color-muted)]">Removal rate</span>
                <span className="text-sm font-bold text-emerald-600">{item.improvement}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
