"use client";

import { WellWaterHeroClient } from "./WellWaterHeroClient";
import { WellWaterContent } from "./WellWaterContent";

export default function WellWaterPageClient() {
  return (
    <main>
      <WellWaterHeroClient />
      <WellWaterContent />
    </main>
  );
}
