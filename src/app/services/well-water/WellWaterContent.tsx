"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { AlertTriangle, CheckCircle, ArrowRight, Droplets, Bug, Flame, FlaskConical } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { getTranslationArray } from "@/lib/i18n/getTranslationData";
import { viewportConfig } from "@/lib/animations";
import { RelatedServices } from "@/components/sections/services/shared/RelatedServices";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";
import { Guarantee } from "@/components/sections/services/Guarantee";
import InlineCTABanner from "@/components/conversion/InlineCTABanner";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { WaterButton } from "@/components/ui/water-button";
import GlassLiftCard from "@/components/animations/glass-lift-card";
import InlineCTA from "@/components/InlineCTA";

interface ProblemItem {
  problem: string;
  solution: string;
  cause: string;
}

interface ProcessStep {
  title: string;
  description: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

/* Contaminant testing cards with severity levels */
const wellContaminants = [
  {
    name: "Iron & Rust",
    icon: Flame,
    safeRange: "<0.3 ppm",
    floridaAvg: "1.5-5.0 ppm",
    severity: "high" as const,
    symptoms: "Orange staining on fixtures, metallic taste, rusty laundry",
  },
  {
    name: "Sulfur / H2S",
    icon: FlaskConical,
    safeRange: "<0.05 ppm",
    floridaAvg: "0.5-3.0 ppm",
    severity: "high" as const,
    symptoms: "Rotten egg smell, corroded pipes, black stains",
  },
  {
    name: "Bacteria / E. Coli",
    icon: Bug,
    safeRange: "0 CFU/100mL",
    floridaAvg: "1-500 CFU",
    severity: "critical" as const,
    symptoms: "Health risk, gastrointestinal illness, unsafe for drinking",
  },
  {
    name: "Hardness (Calcium)",
    icon: Droplets,
    safeRange: "<60 ppm",
    floridaAvg: "120-400 ppm",
    severity: "moderate" as const,
    symptoms: "Scale buildup, dry skin, appliance damage, soap scum",
  },
  {
    name: "Tannins",
    icon: Droplets,
    safeRange: "<0.5 ppm",
    floridaAvg: "1.0-5.0 ppm",
    severity: "moderate" as const,
    symptoms: "Yellow/brown water color, musty taste, stained laundry",
  },
  {
    name: "pH Imbalance",
    icon: FlaskConical,
    safeRange: "6.5-8.5",
    floridaAvg: "5.5-6.5 (acidic)",
    severity: "moderate" as const,
    symptoms: "Corroded pipes, blue-green stains on copper, metallic taste",
  },
];

export function WellWaterContent() {
  const { t } = useLanguage();
  const problems = getTranslationArray<ProblemItem>("wellWaterPage", "problems");
  const steps = getTranslationArray<ProcessStep>("wellWaterPage", "processSteps");
  const faqItems = getTranslationArray<FAQItem>("wellWaterPage", "faq");

  const parallaxRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <>
      {/* Overview */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full"
            style={{ background: "linear-gradient(160deg, rgba(8,73,120,0.03) 0%, transparent 40%, rgba(0,159,227,0.02) 100%)" }}
          />
          <svg className="absolute bottom-0 left-0 w-full h-32 text-[var(--color-surface)]" viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path d="M0,40 C360,100 720,20 1440,80 L1440,120 L0,120 Z" fill="currentColor" />
          </svg>
        </div>

        <div ref={parallaxRef} className="container-custom relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <motion.div
              className="relative lg:order-2"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportConfig}
              transition={{ duration: 0.7 }}
            >
              <motion.div className="rounded-2xl overflow-hidden shadow-2xl shadow-[var(--color-primary)]/10" style={{ y: imgY }}>
                <Image
                  src="/images/well-water-testing.jpeg"
                  alt="Laboratory water quality testing with flask"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 lg:-left-8 bg-amber-50 border border-amber-200 rounded-xl shadow-xl p-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportConfig}
                transition={{ delay: 0.4 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                    <AlertTriangle className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-amber-800">
                      Florida Well Water
                    </p>
                    <p className="text-xs text-amber-600">
                      Needs custom treatment
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div
              className="lg:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportConfig}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-px bg-[var(--color-primary)]" />
                <span className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-primary)]">
                  {t("wellWaterPage", "heroLabel")}
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[var(--color-foreground)] leading-tight mb-5">
                {t("wellWaterPage", "featuresHeading")}
              </h2>
              <p className="text-[var(--color-muted)] leading-relaxed mb-8">
                {t("wellWaterPage", "heroDescription")}
              </p>
              <Link href="/contact">
                <WaterButton className="text-sm font-semibold px-6 py-3">
                  {t("nav", "freeWaterTest")}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </WaterButton>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contaminant Testing Cards with Severity */}
      <ContaminantTestingCards />

      {/* Inline CTA */}
      <InlineCTABanner
        headline="Don't Know What's in Your Well Water?"
        subtext="We offer free water testing with detailed results and recommendations."
        buttonText="Free Water Test"
        variant="gradient"
      />

      {/* Problems & Solutions */}
      {problems.length > 0 && (
        <ProblemSolutionSection problems={problems} />
      )}

      {/* Process - Vertical Timeline with Animated Connector */}
      <ProcessTimeline steps={steps} label={t("wellWaterPage", "processLabel")} heading={t("wellWaterPage", "processHeading")} />

      {/* FAQ */}
      {faqItems.length > 0 && (
        <section className="relative py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute bottom-0 right-1/3 w-[500px] h-[500px] rounded-full"
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
      <InlineCTA variant="button" text="Get Your Well Water Tested Free" trustLine="Iron, sulfur, bacteria testing and custom solutions" />
      <Testimonials />
      <RelatedServices currentSlug="well-water" />
      <CTA />
    </>
  );
}

/* -------- Sub-components -------- */

function ContaminantTestingCards() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const severityColors = {
    critical: { bg: "bg-red-50", border: "border-red-200", badge: "bg-red-100 text-red-700", label: "Critical" },
    high: { bg: "bg-amber-50", border: "border-amber-200", badge: "bg-amber-100 text-amber-700", label: "High" },
    moderate: { bg: "bg-yellow-50", border: "border-yellow-200", badge: "bg-yellow-100 text-yellow-700", label: "Moderate" },
  };

  return (
    <section ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[var(--color-surface)]" />
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/3 left-0 w-[600px] h-[600px] rounded-full"
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
          <span className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-amber-500 mb-4">
            <span className="w-8 h-px bg-amber-400" />
            Contaminant Testing
            <span className="w-8 h-px bg-amber-400" />
          </span>
          <h2 className="heading-md font-bold text-[var(--color-foreground)]">
            What We Find in Florida Wells
          </h2>
          <p className="text-[var(--color-muted)] mt-4 max-w-xl mx-auto">
            Florida wells frequently exceed safe limits for these common contaminants.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {wellContaminants.map((item, i) => {
            const Icon = item.icon;
            const sev = severityColors[item.severity];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
              >
                <GlassLiftCard liftAmount={3} className="rounded-2xl h-full">
                  <div className="relative p-5 rounded-2xl bg-white border border-[var(--color-border)] h-full group hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Icon className="w-4 h-4 text-[var(--color-primary)]" />
                        <h3 className="text-sm font-bold text-[var(--color-foreground)]">{item.name}</h3>
                      </div>
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${sev.badge}`}>
                        {sev.label}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 mb-3">
                      <div className="p-2 rounded-lg bg-green-50">
                        <p className="text-[10px] uppercase font-semibold text-green-600 mb-0.5">
                          Safe Limit
                        </p>
                        <p className="text-xs font-bold text-green-700">{item.safeRange}</p>
                      </div>
                      <div className={`p-2 rounded-lg ${sev.bg}`}>
                        <p className="text-[10px] uppercase font-semibold text-amber-600 mb-0.5">
                          FL Average
                        </p>
                        <p className="text-xs font-bold text-amber-700">{item.floridaAvg}</p>
                      </div>
                    </div>

                    <p className="text-xs text-[var(--color-muted)] leading-relaxed">{item.symptoms}</p>
                  </div>
                </GlassLiftCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProblemSolutionSection({ problems }: { problems: ProblemItem[] }) {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-20 right-10 w-[500px] h-[500px] rounded-full"
          style={{ background: "linear-gradient(160deg, rgba(8,73,120,0.03) 0%, transparent 40%, rgba(0,159,227,0.02) 100%)" }}
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
            Common Well Water Issues
            <span className="w-8 h-px bg-[var(--color-primary)]" />
          </span>
          <h2 className="heading-md font-bold text-[var(--color-foreground)]">
            Problems We Solve
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {problems.map((item, i) => (
            <motion.div
              key={i}
              className="rounded-2xl border border-[var(--color-border)] overflow-hidden hover:shadow-lg hover:shadow-[var(--color-primary)]/5 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="p-5 bg-gradient-to-r from-amber-50 to-orange-50/50 border-b border-[var(--color-border)]">
                <div className="flex items-center gap-3 mb-2">
                  <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0" />
                  <span className="text-sm font-bold text-amber-700 uppercase tracking-wider">
                    {item.cause}
                  </span>
                </div>
                <p className="text-sm text-amber-800/70 leading-relaxed">
                  {item.problem}
                </p>
              </div>
              <div className="p-5 bg-white">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <p className="text-sm text-[var(--color-foreground)] leading-relaxed">
                    {item.solution}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessTimeline({ steps, label, heading }: { steps: ProcessStep[]; label: string; heading: string }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.8], ["0%", "100%"]);

  return (
    <section ref={ref} className="relative py-24 lg:py-32 overflow-hidden bg-[var(--color-dark)]">
      <div className="absolute inset-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="/videos/whole-home-process-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[var(--color-dark)]/[0.92]" />
      </div>

      <div className="relative container-custom z-10">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-px bg-[var(--color-accent)]" />
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-accent)]">
              {label}
            </span>
            <div className="w-10 h-px bg-[var(--color-accent)]" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
            {heading}
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Static background line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-white/10 hidden md:block" />
            {/* Animated fill line */}
            <motion.div
              className="absolute left-6 top-0 w-px bg-gradient-to-b from-[var(--color-accent)] to-[var(--color-primary)] hidden md:block origin-top"
              style={{ height: lineHeight }}
            />

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
                  <div className="relative z-10 w-12 h-12 rounded-full bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-primary)] flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-lg shadow-[var(--color-primary)]/30">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="flex-1 pb-2">
                    <h3 className="text-lg font-bold text-white mb-1">
                      {step.title}
                    </h3>
                    <p className="text-white/50 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          className="flex justify-center mt-14"
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
              Schedule Your Water Test
              <ArrowRight className="w-4 h-4 ml-2" />
            </ShimmerButton>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
