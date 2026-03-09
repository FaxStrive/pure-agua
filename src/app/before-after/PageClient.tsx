"use client";

import { InnerPageHero } from "@/components/sections/shared/InnerPageHero";
import { BeforeAfterGallery } from "@/components/sections/before-after/BeforeAfterGallery";
import { TDSReadings } from "@/components/sections/before-after/TDSReadings";
import { InstallationGallery } from "@/components/sections/before-after/InstallationGallery";
import InlineCTABanner from "@/components/conversion/InlineCTABanner";
import { CTA } from "@/components/sections/CTA";
import { translations } from "@/lib/i18n/translations";

export default function BeforeAfterPageClient() {
  const t = translations.beforeAfterPage;

  return (
    <main>
      <InnerPageHero
        image="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920"
        imageAlt="Clean water in modern home"
        label={t.heroLabel}
        headline1={t.heroHeadline1}
        headline2={t.heroHeadline2}
        description={t.heroDescription}
        variant="primary"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Before & After" },
        ]}
      />
      <BeforeAfterGallery />
      <TDSReadings />
      <InstallationGallery />
      <InlineCTABanner variant="accent" />
      <CTA />
    </main>
  );
}
