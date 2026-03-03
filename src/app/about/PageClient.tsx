"use client";

import { AboutHero } from "@/components/sections/about/AboutHero";
import { OurStory } from "@/components/sections/about/OurStory";
import { AboutStats } from "@/components/sections/about/AboutStats";
import { Values } from "@/components/sections/about/Values";
import { WhyChooseUs } from "@/components/sections/about/WhyChooseUs";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";

export default function AboutPageClient() {
  return (
    <main>
      <AboutHero />
      <OurStory />
      <AboutStats />
      <Values />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
    </main>
  );
}
