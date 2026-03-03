"use client";

import { InnerPageHero } from "@/components/sections/shared/InnerPageHero";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function WholeHomeHeroClient() {
  const { t } = useLanguage();

  return (
    <InnerPageHero
      image="https://images.pexels.com/photos/6444260/pexels-photo-6444260.jpeg?auto=compress&cs=tinysrgb&w=1920"
      imageAlt="Whole home water filtration system installation"
      label={t("wholeHomePage", "heroLabel")}
      headline1={t("wholeHomePage", "heroHeadline1")}
      headline2={t("wholeHomePage", "heroHeadline2")}
      description={t("wholeHomePage", "heroDescription")}
      variant="gradient"
      ctaText={t("nav", "freeWaterTest")}
      ctaHref="/contact"
      breadcrumbs={[
        { label: t("common", "home"), href: "/" },
        { label: t("common", "services"), href: "/services" },
        { label: t("common", "wholeHome") },
      ]}
    />
  );
}
