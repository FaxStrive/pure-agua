"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { getTranslationArray } from "@/lib/i18n/getTranslationData";
import { viewportConfig, staggerContainer, staggerItem } from "@/lib/animations";
import { TextAnimate } from "@/components/magicui/text-animate";
interface Article {
  title: string;
  excerpt: string;
  category: string;
}

export function ArticleGrid() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("all");

  const articles = getTranslationArray<Article>("resourcesPage", "articles");

  const filters = [
    { key: "all", label: t("resourcesPage", "filterAll") },
    { key: "Water Quality", label: t("resourcesPage", "filterQuality") },
    { key: "Maintenance", label: t("resourcesPage", "filterMaintenance") },
    { key: "Education", label: t("resourcesPage", "filterEducation") },
  ];

  const filtered = activeFilter === "all"
    ? articles
    : articles.filter((a) => a.category === activeFilter);

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-white" />
      <div
        className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,159,227,0.03) 0%, transparent 70%)",
        }}
      />

      <div className="container-custom relative">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
        >
          <span className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-primary)] mb-4">
            <span className="w-8 h-px bg-[var(--color-primary)]" />
            {t("resourcesPage", "articlesLabel")}
          </span>
          <TextAnimate animation="blurInUp" by="word" as="h2" className="heading-md font-bold text-[var(--color-foreground)]">
            {t("resourcesPage", "articlesHeading")}
          </TextAnimate>
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-2 justify-center mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportConfig}
        >
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.key
                  ? "bg-[var(--color-primary)] text-white shadow-md shadow-[var(--color-primary)]/20"
                  : "bg-[var(--color-surface)] text-[var(--color-muted)] hover:text-[var(--color-primary)]"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((article) => (
              <motion.article
                key={article.title}
                layout
                variants={staggerItem}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="group relative overflow-hidden p-6 rounded-2xl bg-[var(--color-surface)] border border-transparent hover:border-[var(--color-primary)]/10 hover:shadow-lg transition-all duration-300"
              >
                {/* Water edge is applied at card container level via hover */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)]">
                    {article.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[var(--color-foreground)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-4">
                  {article.excerpt}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-primary)] group-hover:gap-2 transition-all">
                  {t("resourcesPage", "readMore")}
                  <ArrowRight className="w-4 h-4" />
                </span>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
