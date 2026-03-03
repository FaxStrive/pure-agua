"use client";

import { InnerPageHero } from "@/components/sections/shared/InnerPageHero";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function ResourcesHeroClient() {
  const { t } = useLanguage();

  return (
    <InnerPageHero
      image="https://images.pexels.com/photos/6032817/pexels-photo-6032817.jpeg?auto=compress&cs=tinysrgb&w=1920"
      imageAlt="Water quality education and resources"
      label={t("resourcesPage", "heroLabel")}
      headline1={t("resourcesPage", "heroHeadline1")}
      headline2={t("resourcesPage", "heroHeadline2")}
      description={t("resourcesPage", "heroDescription")}
      breadcrumbs={[
        { label: t("common", "home"), href: "/" },
        { label: t("common", "support") },
        { label: t("common", "resources") },
      ]}
    />
  );
}
