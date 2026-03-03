"use client";

import { InnerPageHero } from "@/components/sections/shared/InnerPageHero";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function CareersHeroClient() {
  const { t } = useLanguage();

  return (
    <InnerPageHero
      image="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1920"
      imageAlt="Join the Pure Agua team"
      label={t("careersPage", "heroLabel")}
      headline1={t("careersPage", "heroHeadline1")}
      headline2={t("careersPage", "heroHeadline2")}
      description={t("careersPage", "heroDescription")}
      breadcrumbs={[
        { label: t("common", "home"), href: "/" },
        { label: t("common", "company") },
        { label: t("common", "careers") },
      ]}
    />
  );
}
