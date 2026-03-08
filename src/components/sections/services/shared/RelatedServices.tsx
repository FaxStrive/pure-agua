"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Droplets, GlassWater, Waves, FlaskConical } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { getTranslationSection } from "@/lib/i18n/getTranslationData";
import { viewportConfig, staggerContainer, staggerItem } from "@/lib/animations";

const allServices = [
  {
    slug: "whole-home",
    titleKey: "wholeHome" as const,
    descKey: "wholeHome" as const,
    icon: Droplets,
    gradient: "from-[var(--color-primary)]/10 to-[var(--color-secondary)]/5",
  },
  {
    slug: "reverse-osmosis",
    titleKey: "reverseOsmosis" as const,
    descKey: "reverseOsmosis" as const,
    icon: GlassWater,
    gradient: "from-[var(--color-accent)]/10 to-[var(--color-primary)]/5",
  },
  {
    slug: "water-softening",
    titleKey: "waterSoftening" as const,
    descKey: "waterSoftening" as const,
    icon: Waves,
    gradient: "from-[var(--color-secondary)]/10 to-[var(--color-accent)]/5",
  },
  {
    slug: "well-water",
    titleKey: "wellWater" as const,
    descKey: "wellWater" as const,
    icon: FlaskConical,
    gradient: "from-[var(--color-dark)]/10 to-[var(--color-primary)]/5",
  },
];

interface RelatedServicesProps {
  currentSlug: string;
}

export function RelatedServices({ currentSlug }: RelatedServicesProps) {
  const { t } = useLanguage();
  const servicesData = getTranslationSection("services") as Record<string, { title?: string; description?: string }> | null;

  const related = allServices.filter((s) => s.slug !== currentSlug);

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-[var(--color-surface)]" />
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,159,227,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="container-custom relative">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
        >
          <span className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-primary)] mb-4">
            <span className="w-8 h-px bg-[var(--color-primary)]" />
            {t("relatedServices", "label")}
          </span>
          <h2 className="heading-md font-bold text-[var(--color-foreground)]">
            {t("relatedServices", "heading")}
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {related.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div key={service.slug} variants={staggerItem}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group block p-6 rounded-2xl bg-white border border-[var(--color-border)] hover:border-[var(--color-primary)]/30 hover:shadow-lg hover:shadow-[var(--color-primary)]/5 transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-[var(--color-primary)]" />
                  </div>
                  <h3 className="text-lg font-bold text-[var(--color-foreground)] mb-2">
                    {servicesData?.[service.titleKey]?.title ?? service.titleKey}
                  </h3>
                  <p className="text-sm text-[var(--color-muted)] mb-4 line-clamp-2">
                    {servicesData?.[service.descKey]?.description ?? ""}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-primary)] group-hover:gap-2 transition-all">
                    {t("common", "learnMore")}
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
