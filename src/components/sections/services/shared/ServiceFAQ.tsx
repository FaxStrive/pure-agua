"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { getTranslationArray } from "@/lib/i18n/getTranslationData";
import { viewportConfig } from "@/lib/animations";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface ServiceFAQProps {
  translationSection: string;
}

export function ServiceFAQ({ translationSection }: ServiceFAQProps) {
  const { t } = useLanguage();

  const faqItems = getTranslationArray<FAQItem>(translationSection, "faq");

  if (faqItems.length === 0) return null;

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-[var(--color-surface)]" />
      <div
        className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(59,214,245,0.05) 0%, transparent 70%)",
        }}
      />

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
  );
}
