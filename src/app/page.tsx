"use client";

import { Hero } from "@/components/sections/Hero";
import { TrustSignals } from "@/components/sections/TrustSignals";
import { Stats } from "@/components/sections/Stats";
import { WaterQualityChecker } from "@/components/sections/WaterQualityChecker";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustSignals />
      <Stats />
      <WaterQualityChecker />
      <Services />
      <Process />
      <AboutPreview />
      <Testimonials />
      <FAQ />
      <CTA />
    </main>
  );
}
