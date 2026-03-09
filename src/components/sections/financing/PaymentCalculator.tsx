"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { DollarSign } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { viewportConfig } from "@/lib/animations";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { TextAnimate } from "@/components/magicui/text-animate";

export function PaymentCalculator() {
  const { t } = useLanguage();
  const [price, setPrice] = useState(3000);
  const [rate, setRate] = useState(5.99);
  const [term, setTerm] = useState(60);

  const { monthly, totalCost, totalInterest } = useMemo(() => {
    const monthlyRate = rate / 100 / 12;
    if (monthlyRate === 0) {
      const m = price / term;
      return { monthly: m, totalCost: price, totalInterest: 0 };
    }
    const m = price * (monthlyRate * Math.pow(1 + monthlyRate, term)) / (Math.pow(1 + monthlyRate, term) - 1);
    const tc = m * term;
    return { monthly: m, totalCost: tc, totalInterest: tc - price };
  }, [price, rate, term]);

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-[var(--color-surface)]" />
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(59,214,245,0.05) 0%, transparent 70%)",
        }}
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
            {t("financingPage", "calculatorLabel")}
          </span>
          <TextAnimate animation="blurInUp" by="word" as="h2" className="heading-md font-bold text-[var(--color-foreground)]">
            {t("financingPage", "calculatorHeading")}
          </TextAnimate>
        </motion.div>

        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ delay: 0.1 }}
        >
          <div className="bg-white rounded-2xl border border-[var(--color-border)] p-8 shadow-sm">
            <div className="space-y-8">
              {/* System Price */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-semibold text-[var(--color-foreground)]">
                    {t("financingPage", "systemPrice")}
                  </label>
                  <span className="text-lg font-bold text-[var(--color-primary)]">
                    ${price.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min={1000}
                  max={10000}
                  step={100}
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                  className="w-full h-2 bg-[var(--color-surface)] rounded-lg appearance-none cursor-pointer accent-[var(--color-primary)]"
                />
                <div className="flex justify-between text-xs text-[var(--color-muted)] mt-1">
                  <span>$1,000</span>
                  <span>$10,000</span>
                </div>
              </div>

              {/* Interest Rate */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-semibold text-[var(--color-foreground)]">
                    {t("financingPage", "interestRate")}
                  </label>
                  <span className="text-lg font-bold text-[var(--color-primary)]">
                    {rate}%
                  </span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={12}
                  step={0.01}
                  value={rate}
                  onChange={(e) => setRate(Number(e.target.value))}
                  className="w-full h-2 bg-[var(--color-surface)] rounded-lg appearance-none cursor-pointer accent-[var(--color-primary)]"
                />
                <div className="flex justify-between text-xs text-[var(--color-muted)] mt-1">
                  <span>0%</span>
                  <span>12%</span>
                </div>
              </div>

              {/* Loan Term */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-semibold text-[var(--color-foreground)]">
                    {t("financingPage", "loanTerm")}
                  </label>
                  <span className="text-lg font-bold text-[var(--color-primary)]">
                    {term}
                  </span>
                </div>
                <input
                  type="range"
                  min={6}
                  max={144}
                  step={6}
                  value={term}
                  onChange={(e) => setTerm(Number(e.target.value))}
                  className="w-full h-2 bg-[var(--color-surface)] rounded-lg appearance-none cursor-pointer accent-[var(--color-primary)]"
                />
                <div className="flex justify-between text-xs text-[var(--color-muted)] mt-1">
                  <span>6</span>
                  <span>144</span>
                </div>
              </div>
            </div>

            {/* Result */}
            <div className="mt-10 pt-8 border-t border-[var(--color-border)]">
              <div className="text-center mb-6">
                <p className="text-sm text-[var(--color-muted)] mb-2">
                  {t("financingPage", "monthlyPayment")}
                </p>
                <div className="flex items-center justify-center gap-2">
                  <DollarSign className="w-8 h-8 text-[var(--color-primary)]" />
                  <NumberTicker value={Math.round(monthly)} className="text-5xl font-bold text-[var(--color-foreground)]" />
                  <span className="text-lg text-[var(--color-muted)]">
                    {t("financingPage", "perMonth")}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 rounded-xl bg-[var(--color-surface)]">
                  <p className="text-xs text-[var(--color-muted)] mb-1">
                    {t("financingPage", "totalCost")}
                  </p>
                  <p className="text-lg font-bold text-[var(--color-foreground)]">
                    ${totalCost.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </p>
                </div>
                <div className="text-center p-4 rounded-xl bg-[var(--color-surface)]">
                  <p className="text-xs text-[var(--color-muted)] mb-1">
                    {t("financingPage", "totalInterest")}
                  </p>
                  <p className="text-lg font-bold text-[var(--color-foreground)]">
                    ${totalInterest.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
