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
import InlineCTA from "@/components/InlineCTA";

export default function AboutPageClient() {
  return (
    <main>
      <AboutHero />
      <TrustBadgeBar />
      <OurStory />
      <InlineCTA variant="button" text="Get Your Free Water Assessment" trustLine="Family-owned, serving Central Florida" />
      <AboutStats />
      <Values />
      <InlineCTA variant="banner" text="Clean Water Starts With a Conversation" message="Book a free water test — we'll come to your home." />
      <WhyChooseUs />
      <ServiceAreaBanner />
      <Testimonials />
      <CTA />
    </main>
  );
}
