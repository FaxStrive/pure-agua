"use client";

import { Hero } from "@/components/sections/Hero";
import { TrustBadgeBar } from "@/components/sections/shared/TrustBadgeBar";
import { Stats } from "@/components/sections/Stats";
import { WaterQualityChecker } from "@/components/sections/WaterQualityChecker";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { SystemQuiz } from "@/components/sections/shared/SystemQuiz";
import { WaterBottleSavings } from "@/components/sections/WaterBottleSavings";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { SocialFeed } from "@/components/sections/shared/SocialFeed";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBadgeBar />
      <Stats />
      <WaterQualityChecker />
      <Services />
      <Process />
      <SystemQuiz />
      <WaterBottleSavings />
      <AboutPreview />
      <SocialFeed />
      <Testimonials />
      <FAQ />
      <CTA />
    </main>
  );
}
