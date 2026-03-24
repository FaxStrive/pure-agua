"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import {
  Shield,
  SprayCan,
  Zap,
  GlassWater,
  Snowflake,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { WaterButton } from "@/components/ui/water-button";
import Link from "next/link";
import {
  viewportConfig,
  blurReveal,
  easeOutQuart,
} from "@/lib/animations";

const savingsCategories = [
  {
    icon: Shield,
    title: "Appliance Protection",
    savings: "Up to $1,200/year",
    savingsValue: 1200,
    description:
      "Soft water eliminates scale buildup, extending the life of your water heater, dishwasher, and washing machine by up to 50%.",
    stat: "50%",
    statLabel: "Longer Appliance Lifespan",
    color: "var(--color-primary)",
    bgGradient: "from-[var(--color-primary)] to-[var(--color-primary-dark)]",
  },
  {
    icon: SprayCan,
    title: "Cleaning Products",
    savings: "$300 - $500/year",
    savingsValue: 400,
    description:
      "Soft water lathers better, cutting your soap, shampoo, and detergent usage in half. Less product, same clean.",
    stat: "50%",
    statLabel: "Less Soap & Detergent",
    color: "var(--color-accent)",
    bgGradient: "from-[var(--color-accent)] to-[var(--color-accent-dark)]",
  },
  {
    icon: Zap,
    title: "Energy Savings",
    savings: "$100 - $300/year",
    savingsValue: 200,
    description:
      "Scale-free appliances run more efficiently. Your water heater alone can save up to 25% on your energy bill.",
    stat: "25%",
    statLabel: "Lower Energy Bills",
    color: "var(--color-secondary)",
    bgGradient: "from-[var(--color-secondary)] to-[var(--color-primary)]",
  },
  {
    icon: GlassWater,
    title: "Bottled Water",
    savings: "$500 - $1,000/year",
    savingsValue: 750,
    description:
      "Pure, filtered water from every tap. Bring your cost per glass down to just 10 cents - no more cases of bottles.",
    stat: "10c",
    statLabel: "Per Glass of Water",
    color: "var(--color-dark)",
    bgGradient: "from-[var(--color-dark)] to-[var(--color-primary-dark)]",
  },
  {
    icon: Snowflake,
    title: "Fridge Filter Savings",
    savings: "$200/year",
    savingsValue: 200,
    description:
      "Stop replacing expensive refrigerator filters every 3 months. A whole-home system means your fridge filter lasts longer and works less.",
    stat: "$50",
    statLabel: "Saved Every 3 Months",
    color: "var(--color-primary-dark)",
    bgGradient: "from-[var(--color-primary-700)] to-[var(--color-dark)]",
  },
];

const TOTAL_ANNUAL_SAVINGS = 2750;

export function AnnualSavings() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll, { passive: true });
    checkScroll();
    return () => el.removeEventListener("scroll", checkScroll);
  }, [checkScroll]);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.firstElementChild
      ? (el.firstElementChild as HTMLElement).offsetWidth + 16
      : 320;
    el.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  // Auto-advance on desktop
  useEffect(() => {
    if (!isInView) return;
    const interval = setInterval(() => {
      const el = scrollRef.current;
      if (!el) return;
      const atEnd = el.scrollLeft >= el.scrollWidth - el.clientWidth - 10;
      if (atEnd) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scroll("right");
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(160deg,
              color-mix(in oklch, var(--color-dark), transparent 96%) 0%,
              color-mix(in oklch, var(--color-primary), transparent 94%) 35%,
              white 55%,
              color-mix(in oklch, var(--color-accent), transparent 96%) 80%,
              color-mix(in oklch, var(--color-secondary), transparent 95%) 100%)`,
          }}
        />
        {/* Flowing SVG wave accent */}
        <svg
          className="absolute bottom-0 left-0 w-full opacity-[0.03]"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M0,80 C180,120 360,40 540,80 C720,120 900,40 1080,80 C1260,120 1380,60 1440,80 L1440,120 L0,120 Z"
            fill="var(--color-primary)"
          />
        </svg>
        <div
          className="absolute top-16 right-[10%] w-72 h-72 rounded-full opacity-[0.04]"
          style={{
            background: `radial-gradient(circle, var(--color-accent), transparent 70%)`,
          }}
        />
      </div>

      <div className="relative container-custom">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-6"
          initial={blurReveal.initial}
          whileInView={blurReveal.animate}
          viewport={viewportConfig}
          transition={blurReveal.transition}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-px bg-[var(--color-primary)]" />
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-primary)]">
              Annual Savings Potential
            </span>
            <div className="w-10 h-px bg-[var(--color-primary)]" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--color-foreground)] leading-tight mb-5">
            See How Much You Could Save Every Year
          </h2>
          <p className="text-lg text-[var(--color-muted)] leading-relaxed">
            A whole-home water treatment system pays for itself. Here is what our
            customers typically save across every area of their home.
          </p>
        </motion.div>

        {/* Total savings highlight */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={viewportConfig}
          transition={{ duration: 0.5, delay: 0.2, ease: easeOutQuart }}
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] rounded-full px-8 py-3.5 text-white shadow-lg shadow-[var(--color-primary)]/20">
            <span className="text-sm font-medium text-white/80">
              Total Potential Savings:
            </span>
            <span className="text-2xl lg:text-3xl font-bold">
              Up to $
              {isInView ? (
                <NumberTicker value={TOTAL_ANNUAL_SAVINGS} className="text-white" />
              ) : (
                "0"
              )}
              /yr
            </span>
          </div>
        </motion.div>

        {/* Slider navigation */}
        <div className="flex items-center justify-end gap-2 mb-4 pr-1">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className="p-2 rounded-full border border-[var(--color-border)] bg-white/80 backdrop-blur-sm hover:bg-[var(--color-primary-50)] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-4 h-4 text-[var(--color-foreground)]" />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className="p-2 rounded-full border border-[var(--color-border)] bg-white/80 backdrop-blur-sm hover:bg-[var(--color-primary-50)] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-4 h-4 text-[var(--color-foreground)]" />
          </button>
        </div>

        {/* Savings cards slider */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 lg:-mx-0 lg:px-0"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {savingsCategories.map((category, i) => (
            <motion.div
              key={category.title}
              className="flex-shrink-0 w-[300px] sm:w-[340px] snap-start"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: easeOutQuart,
              }}
            >
              <div className="h-full bg-white/80 backdrop-blur-sm rounded-2xl border border-[var(--color-border)] overflow-hidden group hover:shadow-xl hover:shadow-[var(--color-primary)]/5 transition-all duration-500">
                {/* Card header with gradient */}
                <div
                  className={`bg-gradient-to-br ${category.bgGradient} p-6 relative overflow-hidden`}
                >
                  {/* Subtle pattern overlay */}
                  <div className="absolute inset-0 opacity-10">
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `radial-gradient(circle at 70% 30%, rgba(255,255,255,0.3) 0%, transparent 50%)`,
                      }}
                    />
                  </div>
                  <div className="relative">
                    <category.icon className="w-8 h-8 text-white/90 mb-3" />
                    <h3 className="text-lg font-bold text-white">
                      {category.title}
                    </h3>
                    <p className="text-2xl font-bold text-white mt-1">
                      {category.savings}
                    </p>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-6">
                  <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-5">
                    {category.description}
                  </p>

                  {/* Key stat pill */}
                  <div className="flex items-center gap-3 bg-[var(--color-surface)] rounded-xl p-3.5">
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center font-bold text-white text-lg"
                      style={{
                        background: `linear-gradient(135deg, ${category.color}, color-mix(in oklch, ${category.color}, black 20%))`,
                      }}
                    >
                      {category.stat}
                    </div>
                    <span className="text-sm font-medium text-[var(--color-foreground)]">
                      {category.statLabel}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.5, delay: 0.3, ease: easeOutQuart }}
        >
          <Link href="/contact">
            <WaterButton className="text-base px-8 py-3.5">
              Get Your Free Water Test
              <ArrowRight className="w-4 h-4 ml-2" />
            </WaterButton>
          </Link>
          <p className="text-sm text-[var(--color-muted)] mt-3">
            Savings estimates based on average South Florida household usage
          </p>
        </motion.div>
      </div>
    </section>
  );
}
