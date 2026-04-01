"use client";

import { CultureSection } from "@/components/sections/careers/CultureSection";
import { Benefits } from "@/components/sections/careers/Benefits";
import { OpenPositions } from "@/components/sections/careers/OpenPositions";
import { ApplicationForm } from "@/components/sections/careers/ApplicationForm";
import { CTA } from "@/components/sections/CTA";
import { CareersHeroClient } from "./CareersHeroClient";

export default function CareersPageClient() {
  return (
    <main>
      <CareersHeroClient />
      <CultureSection />
      <Benefits />
      <OpenPositions />
      <ApplicationForm />
      <CTA />
    </main>
  );
}
