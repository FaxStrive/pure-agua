"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { viewportConfig, staggerContainer, staggerItem } from "@/lib/animations";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translations } from "@/lib/i18n/translations";

export function FAQ() {
  const { t, language } = useLanguage();

  const faqs = translations.faq.questions.map((q) => ({
    question: q.question[language],
    answer: q.answer[language],
  }));

  const half = Math.ceil(faqs.length / 2);
  const leftColumn = faqs.slice(0, half);
  const rightColumn = faqs.slice(half);

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-white" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0,159,227,0.04) 0%, transparent 60%)",
        }}
      />

      <div className="relative container-custom">
        {/* Centered header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold text-[var(--color-primary)] mb-4" style={{ backgroundColor: "rgba(var(--color-primary-rgb, 0,159,227), 0.08)" }}>
            {t("faq", "label")}
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--color-foreground)] leading-tight mb-4">
            {t("faq", "heading")}
          </h2>
          <p className="text-lg text-[var(--color-muted)] leading-relaxed">
            {t("faq", "subheading")}
          </p>
        </motion.div>

        {/* Two-column accordion grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-5xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {/* Left column */}
          <div className="space-y-4">
            <Accordion type="single" collapsible className="space-y-3">
              {leftColumn.map((faq, i) => (
                <motion.div key={i} variants={staggerItem}>
                  <AccordionItem
                    value={`faq-l-${i}`}
                    className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] px-5 data-[state=open]:shadow-lg data-[state=open]:shadow-black/[0.03] data-[state=open]:border-[var(--color-primary)]/20 transition-all duration-300"
                  >
                    <AccordionTrigger className="text-left text-[var(--color-foreground)] font-semibold hover:text-[var(--color-primary)] py-5 hover:no-underline text-sm">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-[var(--color-muted)] leading-relaxed pb-5 text-sm">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>

          {/* Right column */}
          <div className="space-y-4">
            <Accordion type="single" collapsible className="space-y-3">
              {rightColumn.map((faq, i) => (
                <motion.div key={i} variants={staggerItem}>
                  <AccordionItem
                    value={`faq-r-${i}`}
                    className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] px-5 data-[state=open]:shadow-lg data-[state=open]:shadow-black/[0.03] data-[state=open]:border-[var(--color-primary)]/20 transition-all duration-300"
                  >
                    <AccordionTrigger className="text-left text-[var(--color-foreground)] font-semibold hover:text-[var(--color-primary)] py-5 hover:no-underline text-sm">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-[var(--color-muted)] leading-relaxed pb-5 text-sm">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
