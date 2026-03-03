"use client";

import { FinancingOptions } from "@/components/sections/financing/FinancingOptions";
import { PaymentCalculator } from "@/components/sections/financing/PaymentCalculator";
import { ServiceProcess } from "@/components/sections/services/shared/ServiceProcess";
import { CTA } from "@/components/sections/CTA";
import { FinancingHeroClient } from "./FinancingHeroClient";

export default function FinancingPageClient() {
  return (
    <main>
      <FinancingHeroClient />
      <FinancingOptions />
      <PaymentCalculator />
      <ServiceProcess translationSection="financingPage" />
      <CTA />
    </main>
  );
}
