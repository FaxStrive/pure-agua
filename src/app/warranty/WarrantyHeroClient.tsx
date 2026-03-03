"use client";

import { InnerPageHero } from "@/components/sections/shared/InnerPageHero";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function WarrantyHeroClient() {
  const { t } = useLanguage();

  return (
    <InnerPageHero
      image="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1920"
      imageAlt="Warranty protection and peace of mind"
      label={t("warrantyPage", "heroLabel")}
      headline1={t("warrantyPage", "heroHeadline1")}
      headline2={t("warrantyPage", "heroHeadline2")}
      description={t("warrantyPage", "heroDescription")}
      breadcrumbs={[
        { label: t("common", "home"), href: "/" },
        { label: t("common", "support") },
        { label: t("common", "warranty") },
      ]}
    />
  );
}
