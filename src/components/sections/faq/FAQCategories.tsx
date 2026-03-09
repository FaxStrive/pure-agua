"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { viewportConfig, staggerContainer, staggerItem } from "@/lib/animations";
import { translations } from "@/lib/i18n/translations";

const categories = translations.faqPage.categories;
const allQuestions = translations.faqPage.questions;

type CategoryKey = keyof typeof categories;

export function FAQCategories() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredQuestions = useMemo(() => {
    let filtered = [...allQuestions];

    if (activeCategory !== "all") {
      filtered = filtered.filter((q) => q.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (q) =>
          q.question.toLowerCase().includes(query) ||
          q.answer.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [activeCategory, searchQuery]);

  const categoryKeys = Object.keys(categories) as CategoryKey[];

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 30% 20%, rgba(0,159,227,0.04) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 80%, rgba(59,214,245,0.03) 0%, transparent 60%)",
          }}
        />
      </div>

      <div className="relative container-custom">
        {/* Search + Category Filter */}
        <motion.div
          className="max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.5 }}
        >
          {/* Search */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--color-muted)]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={translations.faqPage.searchPlaceholder}
              className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-[var(--color-border)] bg-white text-[var(--color-foreground)] placeholder:text-[var(--color-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)] transition-all text-sm"
            />
          </div>

          {/* Category pills */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categoryKeys.map((key) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === key
                    ? "bg-[var(--color-primary)] text-white shadow-md shadow-[var(--color-primary)]/20"
                    : "bg-[var(--color-surface)] text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:bg-[var(--color-primary)]/5 border border-[var(--color-border)]"
                }`}
              >
                {categories[key]}
              </button>
            ))}
          </div>
        </motion.div>

        {/* FAQ Accordion Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeCategory}-${searchQuery}`}
            className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-5xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
          >
            {filteredQuestions.length > 0 ? (
              <>
                {/* Left column */}
                <div className="space-y-3">
                  <Accordion type="single" collapsible className="space-y-3">
                    {filteredQuestions
                      .filter((_, i) => i % 2 === 0)
                      .map((faq, i) => (
                        <motion.div key={`l-${i}-${faq.question}`} variants={staggerItem}>
                          <AccordionItem
                            value={`faq-l-${i}`}
                            className="bg-white rounded-2xl border border-[var(--color-border)] px-5 data-[state=open]:shadow-lg data-[state=open]:shadow-black/[0.03] data-[state=open]:border-[var(--color-primary)]/20 transition-all duration-300"
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
                <div className="space-y-3">
                  <Accordion type="single" collapsible className="space-y-3">
                    {filteredQuestions
                      .filter((_, i) => i % 2 === 1)
                      .map((faq, i) => (
                        <motion.div key={`r-${i}-${faq.question}`} variants={staggerItem}>
                          <AccordionItem
                            value={`faq-r-${i}`}
                            className="bg-white rounded-2xl border border-[var(--color-border)] px-5 data-[state=open]:shadow-lg data-[state=open]:shadow-black/[0.03] data-[state=open]:border-[var(--color-primary)]/20 transition-all duration-300"
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
              </>
            ) : (
              <motion.div
                className="col-span-full text-center py-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <p className="text-[var(--color-muted)] text-lg">
                  No questions found matching your search. Try a different term or category.
                </p>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
