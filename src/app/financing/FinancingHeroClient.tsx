"use client";

import { InnerPageHero } from "@/components/sections/shared/InnerPageHero";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function FinancingHeroClient() {
  const { t } = useLanguage();

  return (
    <InnerPageHero
      image="https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=1920"
      imageAlt="Affordable financing for water filtration systems"
      label={t("financingPage", "heroLabel")}
      headline1={t("financingPage", "heroHeadline1")}
      headline2={t("financingPage", "heroHeadline2")}
      description={t("financingPage", "heroDescription")}
      breadcrumbs={[
        { label: t("common", "home"), href: "/" },
        { label: t("common", "support") },
        { label: t("common", "financing") },
      ]}
    />
  );
}
