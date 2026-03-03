"use client";

import { InnerPageHero } from "@/components/sections/shared/InnerPageHero";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function WaterSofteningHeroClient() {
  const { t } = useLanguage();

  return (
    <InnerPageHero
      image="https://images.pexels.com/photos/1556704/pexels-photo-1556704.jpeg?auto=compress&cs=tinysrgb&w=1920"
      imageAlt="Soft water flowing from modern faucet"
      label={t("waterSofteningPage", "heroLabel")}
      headline1={t("waterSofteningPage", "heroHeadline1")}
      headline2={t("waterSofteningPage", "heroHeadline2")}
      description={t("waterSofteningPage", "heroDescription")}
      variant="accent"
      ctaText={t("nav", "freeWaterTest")}
      ctaHref="/contact"
      breadcrumbs={[
        { label: t("common", "home"), href: "/" },
        { label: t("common", "services"), href: "/services" },
        { label: t("common", "waterSoftening") },
      ]}
    />
  );
}
