"use client";

import { InnerPageHero } from "@/components/sections/shared/InnerPageHero";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function ROHeroClient() {
  const { t } = useLanguage();

  return (
    <InnerPageHero
      image="/images/ro-hero-faucet.jpeg"
      imageAlt="Hand turning on a modern kitchen faucet with pure filtered water flowing"
      label={t("reverseOsmosisPage", "heroLabel")}
      headline1={t("reverseOsmosisPage", "heroHeadline1")}
      headline2={t("reverseOsmosisPage", "heroHeadline2")}
      description={t("reverseOsmosisPage", "heroDescription")}
      variant="primary"
      ctaText={t("nav", "freeWaterTest")}
      ctaHref="/contact"
      breadcrumbs={[
        { label: t("common", "home"), href: "/" },
        { label: t("common", "services") },
        { label: t("common", "reverseOsmosis") },
      ]}
    />
  );
}
