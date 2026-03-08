"use client";

import { InnerPageHero } from "@/components/sections/shared/InnerPageHero";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function WellWaterHeroClient() {
  const { t } = useLanguage();

  return (
    <InnerPageHero
      image="/images/well-water-hero.jpeg"
      imageAlt="Sunlight sparkling on clean water surface"
      label={t("wellWaterPage", "heroLabel")}
      headline1={t("wellWaterPage", "heroHeadline1")}
      headline2={t("wellWaterPage", "heroHeadline2")}
      description={t("wellWaterPage", "heroDescription")}
      variant="gradient"
      ctaText={t("nav", "freeWaterTest")}
      ctaHref="/contact"
      breadcrumbs={[
        { label: t("common", "home"), href: "/" },
        { label: t("common", "services") },
        { label: t("common", "wellWater") },
      ]}
    />
  );
}
