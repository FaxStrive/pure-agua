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
  question: { en: string; es: string };
  answer: { en: string; es: string };
}

const faqSections = [
  { key: "wholeHomePage", category: { en: "Whole Home Filtration", es: "Filtracion para Toda la Casa" } },
  { key: "reverseOsmosisPage", category: { en: "Reverse Osmosis", es: "Osmosis Inversa" } },
  { key: "waterSofteningPage", category: { en: "Water Softening", es: "Ablandamiento de Agua" } },
  { key: "wellWaterPage", category: { en: "Well Water", es: "Agua de Pozo" } },
  { key: "warrantyPage", category: { en: "Warranty", es: "Garantia" } },
];

export function KnowledgeBase() {
  const { t, language } = useLanguage();

  const faqCategories = faqSections
    .map((s) => ({
      category: s.category,
      faqs: getTranslationArray<FAQItem>(s.key, "faq"),
    }))
    .filter((s) => s.faqs.length > 0);

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-white" />

      <div className="container-custom relative max-w-3xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
        >
          <span className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-primary)] mb-4">
            <span className="w-8 h-px bg-[var(--color-primary)]" />
            {t("resourcesPage", "knowledgeLabel")}
          </span>
          <h2 className="heading-md font-bold text-[var(--color-foreground)]">
            {t("resourcesPage", "knowledgeHeading")}
          </h2>
        </motion.div>

        <div className="space-y-10">
          {faqCategories.map((cat, ci) => (
            <motion.div
              key={ci}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ delay: ci * 0.1 }}
            >
              <h3 className="text-lg font-bold text-[var(--color-foreground)] mb-4 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[var(--color-primary)]" />
                {cat.category[language]}
              </h3>
              <Accordion type="single" collapsible className="space-y-2">
                {cat.faqs.map((faq, fi) => (
                  <AccordionItem
                    key={fi}
                    value={`cat-${ci}-faq-${fi}`}
                    className="bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] px-5 data-[state=open]:shadow-sm data-[state=open]:border-[var(--color-primary)]/20 transition-all"
                  >
                    <AccordionTrigger className="text-left font-medium text-[var(--color-foreground)] hover:text-[var(--color-primary)] py-4 text-sm">
                      {faq.question[language]}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-[var(--color-muted)] leading-relaxed pb-4">
                      {faq.answer[language]}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
