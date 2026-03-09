"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ArrowRight, ArrowLeft, Droplets } from "lucide-react";
import Link from "next/link";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import MagneticWrapper from "@/components/animations/magnetic-wrapper";
import GlassLiftCard from "@/components/animations/glass-lift-card";
import { translations } from "@/lib/i18n/translations";

const t = translations.systemQuiz;

type ResultKey = keyof typeof t.results;

function getRecommendation(answers: string[]): ResultKey {
  const [source, issue] = answers;

  if (source === "Well Water") return "wellWater";
  if (issue === "Multiple issues") return "combo";
  if (issue === "Bad taste or smell") return "reverseOsmosis";
  if (issue === "Hard water / scale buildup") return "waterSoftener";
  if (issue === "Discolored water") return "wholeHome";
  if (issue === "Health concerns") return "reverseOsmosis";
  return "wholeHome";
}

export function SystemQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const steps = [
    { question: t.step1.question, options: t.step1.options },
    { question: t.step2.question, options: t.step2.options },
    { question: t.step3.question, options: t.step3.options },
  ];

  const handleSelect = (option: string) => {
    const newAnswers = [...answers];
    newAnswers[step] = option;
    setAnswers(newAnswers);

    if (step < 2) {
      setStep(step + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleBack = () => {
    if (showResult) {
      setShowResult(false);
    } else if (step > 0) {
      setStep(step - 1);
    }
  };

  const handleReset = () => {
    setStep(0);
    setAnswers([]);
    setShowResult(false);
  };

  const recommendation = showResult ? t.results[getRecommendation(answers)] : null;

  return (
    <section ref={ref} className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(160deg, rgba(0,159,227,0.05) 0%, transparent 30%), radial-gradient(ellipse 50% 50% at 70% 60%, rgba(59,214,245,0.04) 0%, transparent 60%)",
        }}
      />

      <div className="relative container-custom">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold text-[var(--color-primary)] mb-4" style={{ backgroundColor: "rgba(var(--color-primary-rgb, 0,159,227), 0.08)" }}>
            {t.label}
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--color-foreground)] leading-tight mb-4">
            {t.heading}
          </h2>
          <p className="text-lg text-[var(--color-muted)] leading-relaxed">
            {t.subheading}
          </p>
        </motion.div>

        {/* Quiz Card */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white border border-[var(--color-border)] rounded-2xl p-6 sm:p-8 shadow-lg shadow-black/[0.03]">
            {/* Progress bar */}
            {!showResult && (
              <div className="flex gap-2 mb-8">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${
                      i <= step ? "bg-[var(--color-primary)]" : "bg-[var(--color-border)]"
                    }`}
                  />
                ))}
              </div>
            )}

            <AnimatePresence mode="wait">
              {!showResult ? (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-xs text-[var(--color-muted)] uppercase tracking-wider mb-2 font-medium">
                    Step {step + 1} of 3
                  </p>
                  <h3 className="text-xl font-bold text-[var(--color-foreground)] mb-6">
                    {steps[step].question}
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-3">
                    {steps[step].options.map((option) => (
                      <GlassLiftCard key={option} className="rounded-xl" liftAmount={4}>
                        <button
                          onClick={() => handleSelect(option)}
                          className={`w-full text-left px-5 py-4 rounded-xl border-2 transition-all duration-200 ${
                            answers[step] === option
                              ? "border-[var(--color-primary)] bg-[var(--color-primary)]/5"
                              : "border-[var(--color-border)] hover:border-[var(--color-primary)]/40"
                          }`}
                        >
                          <span className="text-sm font-semibold text-[var(--color-foreground)]">
                            {option}
                          </span>
                        </button>
                      </GlassLiftCard>
                    ))}
                  </div>

                  {step > 0 && (
                    <button
                      onClick={handleBack}
                      className="mt-6 flex items-center gap-2 text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Back
                    </button>
                  )}
                </motion.div>
              ) : (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-[var(--color-primary)]/10 flex items-center justify-center mx-auto mb-6">
                    <Droplets className="w-8 h-8 text-[var(--color-primary)]" />
                  </div>

                  <p className="text-xs text-[var(--color-primary)] uppercase tracking-wider mb-2 font-semibold">
                    {t.resultHeading}
                  </p>
                  <h3 className="text-2xl font-bold text-[var(--color-foreground)] mb-3">
                    {recommendation?.title}
                  </h3>
                  <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-8 max-w-md mx-auto">
                    {recommendation?.description}
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <MagneticWrapper strength={0.3}>
                      <Link href="/contact">
                        <ShimmerButton
                          shimmerColor="#3BD6F5"
                          background="var(--color-primary)"
                          borderRadius="100px"
                          glowColor="rgba(0,159,227,0.2)"
                          className="text-sm font-semibold px-8 py-4 group"
                        >
                          {t.resultCta}
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </ShimmerButton>
                      </Link>
                    </MagneticWrapper>

                    <button
                      onClick={handleReset}
                      className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors"
                    >
                      Start Over
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
