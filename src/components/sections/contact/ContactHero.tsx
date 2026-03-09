"use client";

import { InnerPageHero } from "@/components/sections/shared/InnerPageHero";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function ContactHero() {
  const { t } = useLanguage();

  return (
    <InnerPageHero
      headline1={t("contactHero", "headline1")}
      headline2={t("contactHero", "headline2")}
      description={t("contactHero", "description")}
      label={t("contactHero", "label")}
      breadcrumbs={[
        { label: t("common", "home"), href: "/" },
        { label: t("common", "contact") },
      ]}
      image="/images/contact-hero.jpeg"
      imageAlt="Happy family at home"
      variant="accent"
      ctaText={t("nav", "freeWaterTest")}
      ctaHref="#contact-form"
    />
  );
}
