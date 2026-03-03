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
      image="https://images.pexels.com/photos/4262413/pexels-photo-4262413.jpeg?auto=compress&cs=tinysrgb&w=1920"
      imageAlt="Family enjoying clean water"
      variant="accent"
      ctaText={t("nav", "freeWaterTest")}
      ctaHref="#contact-form"
    />
  );
}
