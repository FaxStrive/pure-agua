"use client";

import { InnerPageHero } from "@/components/sections/shared/InnerPageHero";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function WaterSofteningHeroClient() {
  const { t } = useLanguage();

  return (
    <InnerPageHero
      image="/images/water-softening-hero.jpeg"
      imageAlt="Woman showering with soft filtered water"
      label={t("waterSofteningPage", "heroLabel")}
      headline1={t("waterSofteningPage", "heroHeadline1")}
      headline2={t("waterSofteningPage", "heroHeadline2")}
      description={t("waterSofteningPage", "heroDescription")}
      variant="accent"
      ctaText={t("nav", "freeWaterTest")}
      ctaHref="/contact"
      breadcrumbs={[
        { label: t("common", "home"), href: "/" },
        { label: t("common", "services") },
        { label: t("common", "waterSoftening") },
      ]}
    />
  );
}
