"use client";

import { InnerPageHero } from "@/components/sections/shared/InnerPageHero";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function AboutHero() {
  const { t } = useLanguage();

  return (
    <InnerPageHero
      headline1={t("aboutHero", "headline1")}
      headline2={t("aboutHero", "headline2")}
      description={t("aboutHero", "description")}
      label={t("aboutHero", "label")}
      breadcrumbs={[
        { label: t("common", "home"), href: "/" },
        { label: t("common", "about") },
      ]}
      image="/images/about-hero.jpeg"
      imageAlt="Crystal clear blue water surface with bokeh light"
      variant="primary"
      ctaText={t("nav", "freeWaterTest")}
      ctaHref="/contact"
    />
  );
}
