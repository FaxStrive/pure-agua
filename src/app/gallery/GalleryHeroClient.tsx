"use client";

import { InnerPageHero } from "@/components/sections/shared/InnerPageHero";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function GalleryHeroClient() {
  const { t } = useLanguage();

  return (
    <InnerPageHero
      image="https://images.pexels.com/photos/6444368/pexels-photo-6444368.jpeg?auto=compress&cs=tinysrgb&w=1920"
      imageAlt="Water filtration system installation gallery"
      label={t("galleryPage", "heroLabel")}
      headline1={t("galleryPage", "heroHeadline1")}
      headline2={t("galleryPage", "heroHeadline2")}
      description={t("galleryPage", "heroDescription")}
      breadcrumbs={[
        { label: t("common", "home"), href: "/" },
        { label: t("common", "company") },
        { label: t("common", "gallery") },
      ]}
    />
  );
}
