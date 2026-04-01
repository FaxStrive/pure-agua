"use client";

import { GalleryGrid } from "@/components/sections/gallery/GalleryGrid";
import { CTA } from "@/components/sections/CTA";
import { GalleryHeroClient } from "./GalleryHeroClient";
import InlineCTA from "@/components/InlineCTA";

export default function GalleryPageClient() {
  return (
    <main>
      <GalleryHeroClient />
      <InlineCTA variant="text" text="Want results like these? Get a free water test" />
      <GalleryGrid />
      <CTA />
    </main>
  );
}
