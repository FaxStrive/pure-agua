"use client";

import { InnerPageHero } from "@/components/sections/shared/InnerPageHero";
import { FAQCategories } from "@/components/sections/faq/FAQCategories";
import { AskQuestion } from "@/components/sections/faq/AskQuestion";
import { FAQContactCTA } from "@/components/sections/faq/FAQContactCTA";
import { CTA } from "@/components/sections/CTA";
import { translations } from "@/lib/i18n/translations";
import InlineCTA from "@/components/InlineCTA";

export default function FAQPageClient() {
  const t = translations.faqPage;

  return (
    <main>
      <InnerPageHero
        image="https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=1920"
        imageAlt="Clean water flowing"
        label={t.heroLabel}
        headline1={t.heroHeadline1}
        headline2={t.heroHeadline2}
        description={t.heroDescription}
        variant="gradient"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "FAQ" },
        ]}
      />
      <FAQCategories />
      <InlineCTA variant="button" text="Still Have Questions? Talk to an Expert" trustLine="Free consultation — no pressure" />
      <AskQuestion />
      <FAQContactCTA />
      <CTA />
    </main>
  );
}
