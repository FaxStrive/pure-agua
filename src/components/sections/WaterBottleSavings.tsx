"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Droplets, Leaf, Wind } from "lucide-react";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { WaterButton } from "@/components/ui/water-button";
import {
  viewportConfig,
  blurReveal,
  cascadeStagger,
  cascadeItem,
  easeOutQuart,
} from "@/lib/animations";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const FILTER_MONTHLY_COST = 30; // ~$30/mo average filter maintenance
const LBS_PER_BOTTLE = 0.025;
const CO2_PER_BOTTLE = 0.082; // lbs CO2 per plastic bottle lifecycle

export function WaterBottleSavings() {
  const { t } = useLanguage();

  const [householdSize, setHouseholdSize] = useState(4);
  const [bottlesPerDay, setBottlesPerDay] = useState(3);
  const [costPerBottle, setCostPerBottle] = useState(1.5);

  const results = useMemo(() => {
    const dailyCost = householdSize * bottlesPerDay * costPerBottle;
    const monthlyCost = dailyCost * 30;
    const yearlyCost = dailyCost * 365;
    const yearlySavings = yearlyCost - FILTER_MONTHLY_COST * 12;
    const bottlesPerYear = householdSize * bottlesPerDay * 365;
    const plasticSaved = bottlesPerYear * LBS_PER_BOTTLE;
    const co2Reduced = bottlesPerYear * CO2_PER_BOTTLE;

    return {
      monthlyCost: Math.round(monthlyCost),
      yearlyCost: Math.round(yearlyCost),
      yearlySavings: Math.max(0, Math.round(yearlySavings)),
      bottlesPerYear,
      plasticSaved: Math.round(plasticSaved),
      co2Reduced: Math.round(co2Reduced),
    };
  }, [householdSize, bottlesPerDay, costPerBottle]);

  const statCards = [
    {
      icon: Droplets,
      value: results.bottlesPerYear,
      label: t("waterBottleSavings", "bottlesEliminated"),
      color: "var(--color-primary)",
    },
    {
      icon: Leaf,
      value: results.plasticSaved,
      label: t("waterBottleSavings", "plasticSaved"),
      color: "var(--color-secondary)",
    },
    {
      icon: Wind,
      value: results.co2Reduced,
      label: t("waterBottleSavings", "co2Reduced"),
      color: "var(--color-accent)",
    },
  ];

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background - diagonal sweep gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg,
              transparent 0%,
              color-mix(in oklch, var(--color-primary), transparent 95%) 25%,
              color-mix(in oklch, var(--color-secondary), transparent 93%) 50%,
              color-mix(in oklch, var(--color-accent), transparent 96%) 75%,
              transparent 100%)`,
          }}
        />
        <div
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-[0.04]"
          style={{
            background: `radial-gradient(circle, var(--color-primary), transparent 70%)`,
          }}
        />
        <div
          className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full opacity-[0.03]"
          style={{
            background: `radial-gradient(circle, var(--color-secondary), transparent 70%)`,
          }}
        />
      </div>

      <div className="relative container-custom">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={blurReveal.initial}
          whileInView={blurReveal.animate}
          viewport={viewportConfig}
          transition={blurReveal.transition}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-px bg-[var(--color-primary)]" />
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-primary)]">
              {t("waterBottleSavings", "label")}
            </span>
            <div className="w-10 h-px bg-[var(--color-primary)]" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--color-foreground)] leading-tight mb-5">
            {t("waterBottleSavings", "heading")}
          </h2>
          <p className="text-lg text-[var(--color-muted)] leading-relaxed">
            {t("waterBottleSavings", "subheading")}
          </p>
        </motion.div>

        {/* Calculator */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto items-start">
          {/* Sliders (left) */}
          <motion.div
            className="space-y-8 bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-[var(--color-border)]"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.6, ease: easeOutQuart }}
          >
            {/* Household Size */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-semibold text-[var(--color-foreground)]">
                  {t("waterBottleSavings", "householdSize")}
                </label>
                <span className="text-lg font-bold text-[var(--color-primary)] tabular-nums">
                  {householdSize}{" "}
                  <span className="text-sm font-normal text-[var(--color-muted)]">
                    {householdSize === 1
                      ? t("waterBottleSavings", "person")
                      : t("waterBottleSavings", "people")}
                  </span>
                </span>
              </div>
              <input
                type="range"
                min={1}
                max={8}
                step={1}
                value={householdSize}
                onChange={(e) => setHouseholdSize(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer slider-primary"
                style={{
                  background: `linear-gradient(to right, var(--color-primary) 0%, var(--color-primary) ${((householdSize - 1) / 7) * 100}%, #e5e7eb ${((householdSize - 1) / 7) * 100}%, #e5e7eb 100%)`,
                }}
              />
              <div className="flex justify-between text-xs text-[var(--color-muted)] mt-1">
                <span>1</span>
                <span>8</span>
              </div>
            </div>

            {/* Bottles per person per day */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-semibold text-[var(--color-foreground)]">
                  {t("waterBottleSavings", "bottlesPerDay")}
                </label>
                <span className="text-lg font-bold text-[var(--color-primary)] tabular-nums">
                  {bottlesPerDay}{" "}
                  <span className="text-sm font-normal text-[var(--color-muted)]">
                    {bottlesPerDay === 1
                      ? t("waterBottleSavings", "bottle")
                      : t("waterBottleSavings", "bottles")}
                  </span>
                </span>
              </div>
              <input
                type="range"
                min={1}
                max={6}
                step={1}
                value={bottlesPerDay}
                onChange={(e) => setBottlesPerDay(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer slider-primary"
                style={{
                  background: `linear-gradient(to right, var(--color-primary) 0%, var(--color-primary) ${((bottlesPerDay - 1) / 5) * 100}%, #e5e7eb ${((bottlesPerDay - 1) / 5) * 100}%, #e5e7eb 100%)`,
                }}
              />
              <div className="flex justify-between text-xs text-[var(--color-muted)] mt-1">
                <span>1</span>
                <span>6</span>
              </div>
            </div>

            {/* Cost per bottle */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-semibold text-[var(--color-foreground)]">
                  {t("waterBottleSavings", "costPerBottle")}
                </label>
                <span className="text-lg font-bold text-[var(--color-primary)] tabular-nums">
                  ${costPerBottle.toFixed(2)}
                </span>
              </div>
              <input
                type="range"
                min={0.5}
                max={3}
                step={0.25}
                value={costPerBottle}
                onChange={(e) => setCostPerBottle(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer slider-primary"
                style={{
                  background: `linear-gradient(to right, var(--color-primary) 0%, var(--color-primary) ${((costPerBottle - 0.5) / 2.5) * 100}%, #e5e7eb ${((costPerBottle - 0.5) / 2.5) * 100}%, #e5e7eb 100%)`,
                }}
              />
              <div className="flex justify-between text-xs text-[var(--color-muted)] mt-1">
                <span>$0.50</span>
                <span>$3.00</span>
              </div>
            </div>
          </motion.div>

          {/* Results (right) */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.6, delay: 0.15, ease: easeOutQuart }}
          >
            {/* Hero savings number */}
            <div className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-2xl p-8 text-white text-center">
              <p className="text-sm font-medium text-white/80 mb-2">
                {t("waterBottleSavings", "yearlySavings")}
              </p>
              <div className="flex items-center justify-center gap-1 text-5xl lg:text-6xl font-bold">
                <span>$</span>
                <NumberTicker
                  value={results.yearlySavings}
                  className="text-white"
                />
              </div>
              <p className="text-sm text-white/70 mt-2">
                {t("waterBottleSavings", "withPureAgua")}
              </p>
            </div>

            {/* Cost breakdown */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-5 border border-[var(--color-border)]">
                <p className="text-xs text-[var(--color-muted)] mb-1">
                  {t("waterBottleSavings", "monthlyCost")}
                </p>
                <div className="text-2xl font-bold text-[var(--color-foreground)] flex items-center gap-0.5">
                  <span>$</span>
                  <NumberTicker value={results.monthlyCost} />
                </div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-5 border border-[var(--color-border)]">
                <p className="text-xs text-[var(--color-muted)] mb-1">
                  {t("waterBottleSavings", "yearlyCost")}
                </p>
                <div className="text-2xl font-bold text-[var(--color-foreground)] flex items-center gap-0.5">
                  <span>$</span>
                  <NumberTicker value={results.yearlyCost} />
                </div>
              </div>
            </div>

            {/* Environmental impact stat cards */}
            <motion.div
              className="grid grid-cols-3 gap-3"
              variants={cascadeStagger}
              initial="initial"
              whileInView="animate"
              viewport={viewportConfig}
            >
              {statCards.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={cascadeItem}
                  className="bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-[var(--color-border)] text-center"
                >
                  <stat.icon
                    className="w-5 h-5 mx-auto mb-2"
                    style={{ color: stat.color }}
                  />
                  <div className="text-lg font-bold text-[var(--color-foreground)]">
                    <NumberTicker value={stat.value} />
                  </div>
                  <p className="text-[10px] leading-tight text-[var(--color-muted)] mt-1">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <div className="text-center pt-2">
              <Link href="/contact">
                <WaterButton className="text-base px-8 py-3.5">
                  {t("waterBottleSavings", "cta")}
                </WaterButton>
              </Link>
              <p className="text-xs text-[var(--color-muted)] mt-3">
                {t("waterBottleSavings", "filterNote")}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
