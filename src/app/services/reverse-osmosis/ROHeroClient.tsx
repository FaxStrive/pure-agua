"use client";

import { InnerPageHero } from "@/components/sections/shared/InnerPageHero";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function ROHeroClient() {
  const { t } = useLanguage();

  return (
    <InnerPageHero
      image="https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=1920"
      imageAlt="Crystal clear reverse osmosis purified water"
      label={t("reverseOsmosisPage", "heroLabel")}
      headline1={t("reverseOsmosisPage", "heroHeadline1")}
      headline2={t("reverseOsmosisPage", "heroHeadline2")}
      description={t("reverseOsmosisPage", "heroDescription")}
      variant="primary"
      ctaText={t("nav", "freeWaterTest")}
      ctaHref="/contact"
      breadcrumbs={[
        { label: t("common", "home"), href: "/" },
        { label: t("common", "services"), href: "/services" },
        { label: t("common", "reverseOsmosis") },
      ]}
    />
  );
}
