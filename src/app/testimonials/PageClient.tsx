"use client";

import { InnerPageHero } from "@/components/sections/shared/InnerPageHero";
import { ReviewStats } from "@/components/sections/testimonials/ReviewStats";
import { TestimonialGrid } from "@/components/sections/testimonials/TestimonialGrid";
import { VideoTestimonials } from "@/components/sections/testimonials/VideoTestimonials";
import { GoogleReviewsCTA } from "@/components/sections/testimonials/GoogleReviewsCTA";
import { CTA } from "@/components/sections/CTA";
import { translations } from "@/lib/i18n/translations";

export default function TestimonialsPageClient() {
  const t = translations.testimonialsPage;

  return (
    <main>
      <InnerPageHero
        image="/images/testimonials-hero.jpeg"
        imageAlt="5-star customer review rating"
        label={t.heroLabel}
        headline1={t.heroHeadline1}
        headline2={t.heroHeadline2}
        description={t.heroDescription}
        variant="accent"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Testimonials" },
        ]}
      />
      <ReviewStats />
      <TestimonialGrid />
      <VideoTestimonials />
      <GoogleReviewsCTA />
      <CTA />
    </main>
  );
}
