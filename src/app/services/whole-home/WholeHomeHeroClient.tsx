"use client";

import { InnerPageHero } from "@/components/sections/shared/InnerPageHero";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function WholeHomeHeroClient() {
  const { t } = useLanguage();

  return (
    <InnerPageHero
      image="/images/whole-home-hero-glass.jpeg"
      imageAlt="Woman holding a glass of clean filtered water"
      label={t("wholeHomePage", "heroLabel")}
      headline1={t("wholeHomePage", "heroHeadline1")}
      headline2={t("wholeHomePage", "heroHeadline2")}
      description={t("wholeHomePage", "heroDescription")}
      variant="gradient"
      ctaText={t("nav", "freeWaterTest")}
      ctaHref="/contact"
      breadcrumbs={[
        { label: t("common", "home"), href: "/" },
        { label: t("common", "services") },
        { label: t("common", "wholeHome") },
      ]}
    />
  );
}
