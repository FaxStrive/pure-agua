"use client";

import { InnerPageHero } from "@/components/sections/shared/InnerPageHero";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function WellWaterHeroClient() {
  const { t } = useLanguage();

  return (
    <InnerPageHero
      image="https://images.pexels.com/photos/2962405/pexels-photo-2962405.jpeg?auto=compress&cs=tinysrgb&w=1920"
      imageAlt="Well water treatment and filtration system"
      label={t("wellWaterPage", "heroLabel")}
      headline1={t("wellWaterPage", "heroHeadline1")}
      headline2={t("wellWaterPage", "heroHeadline2")}
      description={t("wellWaterPage", "heroDescription")}
      variant="gradient"
      ctaText={t("nav", "freeWaterTest")}
      ctaHref="/contact"
      breadcrumbs={[
        { label: t("common", "home"), href: "/" },
        { label: t("common", "services"), href: "/services" },
        { label: t("common", "wellWater") },
      ]}
    />
  );
}
