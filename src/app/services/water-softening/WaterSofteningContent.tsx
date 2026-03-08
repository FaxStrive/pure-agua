"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { X, Check, ArrowRight, Droplets, Home, Shirt, Sparkles as SparklesIcon } from "lucide-react";
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

interface ComparisonItem {
  before: LocalizedString;
  after: LocalizedString;
}

interface ProcessStep {
  title: LocalizedString;
  description: LocalizedString;
}

interface FAQItem {
  question: LocalizedString;
  answer: LocalizedString;
}

/* Hard water impact cards */
const hardWaterImpacts = [
  {
    icon: Home,
    title: "Pipe & Fixture Damage",
    cost: "$3,000+ in repairs",
    description: "Scale buildup clogs pipes, reduces water pressure, and corrodes fixtures over time.",
  },
  {
    icon: Droplets,
    title: "Appliance Breakdown",
    cost: "50% shorter lifespan",
    description: "Water heaters, dishwashers, and washing machines fail years earlier due to mineral deposits.",
  },
  {
    icon: Shirt,
    title: "Laundry & Cleaning",
    cost: "2x more soap needed",
    description: "Hard water prevents soap from lathering properly, leaving residue on clothes, dishes, and surfaces.",
  },
  {
    icon: SparklesIcon,
    title: "Skin & Hair Issues",
    cost: "Daily discomfort",
    description: "Mineral deposits dry out skin, cause eczema flare-ups, and leave hair dull and brittle.",
  },
];

export function WaterSofteningContent() {
  const { t } = useLanguage();
  const beforeAfterItems = getTranslationArray<ComparisonItem>("waterSofteningPage", "beforeAfterItems");
  const steps = getTranslationArray<ProcessStep>("waterSofteningPage", "processSteps");
  const faqItems = getTranslationArray<FAQItem>("waterSofteningPage", "faq");

  const parallaxRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <>
      {/* Overview Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-0 left-1/3 w-[600px] h-[600px] rounded-full"
            style={{ background: "linear-gradient(160deg, rgba(0,159,227,0.03) 0%, transparent 40%, rgba(59,214,245,0.02) 100%)" }}
          />
          <svg className="absolute bottom-0 right-0 w-full h-40 text-[var(--color-surface)]" viewBox="0 0 1440 160" preserveAspectRatio="none">
            <path d="M0,100 C400,40 800,140 1440,60 L1440,160 L0,160 Z" fill="currentColor" />
          </svg>
        </div>

        <div ref={parallaxRef} className="container-custom relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportConfig}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-px bg-[var(--color-primary)]" />
                <span className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-primary)]">
                  {t("waterSofteningPage", "heroLabel")}
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[var(--color-foreground)] leading-tight mb-5">
                {t("waterSofteningPage", "featuresHeading")}
              </h2>
              <p className="text-[var(--color-muted)] leading-relaxed mb-8">
                {t("waterSofteningPage", "heroDescription")}
              </p>

              {/* Quick stats with NumberTicker */}
              <QuickStats />

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

            {/* Image with parallax */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={viewportConfig}
              transition={{ duration: 0.7 }}
            >
              <motion.div className="rounded-2xl overflow-hidden shadow-2xl shadow-[var(--color-primary)]/10" style={{ y: imgY }}>
                <Image
                  src="/images/water-softening-family.jpeg"
                  alt="Family with kids drinking clean water in kitchen"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hard Water Impact Cards with GlassLiftCard */}
      <HardWaterImpactSection />

      {/* Inline CTA */}
      <InlineCTABanner
        headline="Is Hard Water Damaging Your Home?"
        subtext="Find out your water hardness level with a free test."
        buttonText="Free Water Test"
        variant="subtle"
      />

      {/* Enhanced Before/After Comparison */}
      {beforeAfterItems.length > 0 && (
        <BeforeAfterSection items={beforeAfterItems} />
      )}

      {/* Process - Dark section with Sparkles */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-[var(--color-dark)]">
        <div className="absolute inset-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src="/videos/whole-home-process-bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[var(--color-dark)]/[0.92]" />
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
                {t("waterSofteningPage", "processLabel")}
              </span>
              <div className="w-10 h-px bg-[var(--color-accent)]" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              {t("waterSofteningPage", "processHeading")}
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                className="text-center group"
                initial={{ opacity: 0, rotateX: 20 }}
                whileInView={{ opacity: 1, rotateX: 0 }}
                viewport={viewportConfig}
                transition={{ delay: i * 0.12, duration: 0.6, type: "spring", stiffness: 120 }}
              >
                <span className="inline-block text-5xl sm:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-white/5 leading-none mb-4">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-base sm:text-xl font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </motion.div>
            ))}
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
                {"Schedule Installation"}
                <ArrowRight className="w-4 h-4 ml-2" />
              </ShimmerButton>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      {faqItems.length > 0 && (
        <section className="relative py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute top-20 left-1/4 w-[500px] h-[500px] rounded-full"
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
      <RelatedServices currentSlug="water-softening" />
      <CTA />
    </>
  );
}

/* -------- Sub-components -------- */

function QuickStats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const stats = [
    { value: 99, suffix: "%", label: "Scale Reduction" },
    { value: 50, suffix: "%", label: "Less Soap Needed" },
    { value: 2, suffix: "x", label: "Appliance Lifespan" },
  ];

  return (
    <div ref={ref} className="grid grid-cols-3 gap-4">
      {stats.map((stat, i) => (
        <motion.div
          key={i}
          className="text-center p-3 rounded-xl bg-[var(--color-primary)]/5 border border-[var(--color-primary)]/10"
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 + i * 0.1 }}
        >
          <p className="text-xl font-bold text-[var(--color-primary)]">
            {isInView ? <NumberTicker value={stat.value} delay={0.3 + i * 0.15} /> : "0"}
            {stat.suffix}
          </p>
          <p className="text-xs text-[var(--color-muted)]">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
}

function HardWaterImpactSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[var(--color-surface)]" />
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full"
          style={{ background: "linear-gradient(160deg, rgba(239,68,68,0.03) 0%, transparent 40%, rgba(239,68,68,0.02) 100%)" }}
        />
      </div>

      <div className="container-custom relative">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
        >
          <span className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-amber-500 mb-4">
            <span className="w-8 h-px bg-amber-400" />
            {"Hard Water Impact"}
            <span className="w-8 h-px bg-amber-400" />
          </span>
          <h2 className="heading-md font-bold text-[var(--color-foreground)]">
            {"The Hidden Cost of Hard Water"}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {hardWaterImpacts.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportConfig}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <GlassLiftCard liftAmount={4} className="rounded-2xl h-full">
                  <div className="relative p-6 rounded-2xl bg-white border border-[var(--color-border)] h-full group hover:border-amber-200 transition-colors duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center shrink-0 group-hover:bg-amber-100 transition-colors">
                        <Icon className="w-5 h-5 text-amber-500" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base font-bold text-[var(--color-foreground)] mb-1">{item.title}</h3>
                        <span className="inline-block text-xs font-semibold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full mb-2">
                          {item.cost}
                        </span>
                        <p className="text-sm text-[var(--color-muted)] leading-relaxed">{item.description}</p>
                      </div>
                    </div>
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

function BeforeAfterSection({ items }: { items: ComparisonItem[] }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 right-1/3 w-[500px] h-[500px] rounded-full"
          style={{ background: "linear-gradient(160deg, rgba(59,214,245,0.03) 0%, transparent 40%, rgba(0,159,227,0.02) 100%)" }}
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
            {"Hard Water vs. Soft Water"}
            <span className="w-8 h-px bg-[var(--color-primary)]" />
          </span>
          <h2 className="heading-md font-bold text-[var(--color-foreground)]">
            {"See the Difference"}
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {items.map((item, i) => (
            <motion.div
              key={i}
              className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-xl overflow-hidden border border-[var(--color-border)] hover:shadow-lg hover:shadow-[var(--color-primary)]/5 transition-all duration-300"
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.06, duration: 0.4 }}
            >
              <div className="flex items-start gap-3 p-5 bg-red-50/50">
                <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                  <X className="w-3.5 h-3.5 text-red-500" />
                </div>
                <p className="text-sm text-red-800/70 leading-relaxed">
                  {item.before}
                </p>
              </div>
              <div className="flex items-start gap-3 p-5 bg-green-50/50">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-green-600" />
                </div>
                <p className="text-sm text-green-800/70 leading-relaxed">
                  {item.after}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
