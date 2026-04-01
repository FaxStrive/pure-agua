"use client";

import { WarrantyCoverage } from "@/components/sections/warranty/WarrantyCoverage";
import { ServiceProcess } from "@/components/sections/services/shared/ServiceProcess";
import { ServiceFAQ } from "@/components/sections/services/shared/ServiceFAQ";
import { CTA } from "@/components/sections/CTA";
import { WarrantyHeroClient } from "./WarrantyHeroClient";

export default function WarrantyPageClient() {
  return (
    <main>
      <WarrantyHeroClient />
      <WarrantyCoverage />
      <ServiceProcess translationSection="warrantyPage" />
      <ServiceFAQ translationSection="warrantyPage" />
      <CTA />
    </main>
  );
}
