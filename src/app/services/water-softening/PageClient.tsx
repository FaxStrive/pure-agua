"use client";

import { WaterSofteningHeroClient } from "./WaterSofteningHeroClient";
import { WaterSofteningContent } from "./WaterSofteningContent";

export default function WaterSofteningPageClient() {
  return (
    <main>
      <WaterSofteningHeroClient />
      <WaterSofteningContent />
    </main>
  );
}
