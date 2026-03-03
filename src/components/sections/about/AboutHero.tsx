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
      image="https://images.pexels.com/photos/6032817/pexels-photo-6032817.jpeg?auto=compress&cs=tinysrgb&w=1920"
      imageAlt="Pure clean water"
      variant="primary"
      ctaText={t("nav", "freeWaterTest")}
      ctaHref="/contact"
    />
  );
}
