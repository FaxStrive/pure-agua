"use client";

import { InnerPageHero } from "@/components/sections/shared/InnerPageHero";
import { CoverageMap } from "@/components/sections/service-area/CoverageMap";
import { CityGrid } from "@/components/sections/service-area/CityGrid";
import { CountyBreakdown } from "@/components/sections/service-area/CountyBreakdown";
import { LocalSEOContent } from "@/components/sections/service-area/LocalSEOContent";
import InlineCTABanner from "@/components/conversion/InlineCTABanner";
import { CTA } from "@/components/sections/CTA";
import { translations } from "@/lib/i18n/translations";

export default function ServiceAreaPageClient() {
  const t = translations.serviceAreaPage;

  return (
    <main>
      <InnerPageHero
        image="/images/service-area-hero.jpeg"
        imageAlt="Florida beach boardwalk with palm trees"
        label={t.heroLabel}
        headline1={t.heroHeadline1}
        headline2={t.heroHeadline2}
        description={t.heroDescription}
        variant="gradient"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Service Area" },
        ]}
      />
      <CoverageMap />
      <CityGrid />
      <CountyBreakdown />
      <LocalSEOContent />
      <InlineCTABanner />
      <CTA />
    </main>
  );
}
