"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { getTranslationArray } from "@/lib/i18n/getTranslationData";
import { viewportConfig, cascadeStagger, cascadeItem } from "@/lib/animations";
import WaterCaustics from "@/components/animations/water-caustics";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TextAnimate } from "@/components/magicui/text-animate";

interface FAQItem {
  question: string;
  answer: string;
}

const faqSections = [
  { key: "wholeHomePage", category: "Whole Home Filtration" },
  { key: "reverseOsmosisPage", category: "Reverse Osmosis" },
  { key: "waterSofteningPage", category: "Water Softening" },
  { key: "wellWaterPage", category: "Well Water" },
  { key: "warrantyPage", category: "Warranty" },
];

export function KnowledgeBase() {
  const { t } = useLanguage();

  const faqCategories = faqSections
    .map((s) => ({
      category: s.category,
      faqs: getTranslationArray<FAQItem>(s.key, "faq"),
    }))
    .filter((s) => s.faqs.length > 0);

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-white" />
      <div className="absolute -top-10 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(0,159,227,0.04) 0%, transparent 70%)" }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(150deg, transparent 0%, rgba(8,73,120,0.02) 50%, transparent 100%)" }} />
      <WaterCaustics variant="light" speed={16} className="opacity-50" />

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
          <TextAnimate animation="blurInUp" by="word" as="h2" className="heading-md font-bold text-[var(--color-foreground)]">
            {t("resourcesPage", "knowledgeHeading")}
          </TextAnimate>
        </motion.div>

        <motion.div className="space-y-10" variants={cascadeStagger} initial="initial" whileInView="animate" viewport={viewportConfig}>
          {faqCategories.map((cat, ci) => (
            <motion.div
              key={ci}
              variants={cascadeItem}
            >
              <h3 className="text-lg font-bold text-[var(--color-foreground)] mb-4 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[var(--color-primary)]" />
                {cat.category}
              </h3>
              <Accordion type="single" collapsible className="space-y-2">
                {cat.faqs.map((faq, fi) => (
                  <AccordionItem
                    key={fi}
                    value={`cat-${ci}-faq-${fi}`}
                    className="bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] px-5 data-[state=open]:shadow-sm data-[state=open]:border-[var(--color-primary)]/20 transition-all"
                  >
                    <AccordionTrigger className="text-left font-medium text-[var(--color-foreground)] hover:text-[var(--color-primary)] py-4 text-sm">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-[var(--color-muted)] leading-relaxed pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
