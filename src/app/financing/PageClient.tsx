"use client";

import { FinancingOptions } from "@/components/sections/financing/FinancingOptions";
import { PaymentCalculator } from "@/components/sections/financing/PaymentCalculator";
import { ServiceProcess } from "@/components/sections/services/shared/ServiceProcess";
import { CTA } from "@/components/sections/CTA";
import { FinancingHeroClient } from "./FinancingHeroClient";
import InlineCTA from "@/components/InlineCTA";

export default function FinancingPageClient() {
  return (
    <main>
      <FinancingHeroClient />
      <FinancingOptions />
      <InlineCTA variant="button" text="Get Pre-Approved in Minutes" trustLine="No impact to your credit score" />
      <PaymentCalculator />
      <ServiceProcess translationSection="financingPage" />
      <InlineCTA variant="banner" text="Affordable Clean Water Is Possible" message="Flexible payment plans make it easy to get started today." />
      <CTA />
    </main>
  );
}
