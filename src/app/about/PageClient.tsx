"use client";

import { AboutHero } from "@/components/sections/about/AboutHero";
import { TrustBadgeBar } from "@/components/sections/shared/TrustBadgeBar";
import { OurStory } from "@/components/sections/about/OurStory";
import { AboutStats } from "@/components/sections/about/AboutStats";
import { Values } from "@/components/sections/about/Values";
import { WhyChooseUs } from "@/components/sections/about/WhyChooseUs";
import { ServiceAreaBanner } from "@/components/sections/about/ServiceAreaBanner";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";

export default function AboutPageClient() {
  return (
    <main>
      <AboutHero />
      <TrustBadgeBar />
      <OurStory />
      <AboutStats />
      <Values />
      <WhyChooseUs />
      <ServiceAreaBanner />
      <Testimonials />
      <CTA />
    </main>
  );
}
