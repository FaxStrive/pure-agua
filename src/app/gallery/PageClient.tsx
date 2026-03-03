"use client";

import { GalleryGrid } from "@/components/sections/gallery/GalleryGrid";
import { CTA } from "@/components/sections/CTA";
import { GalleryHeroClient } from "./GalleryHeroClient";

export default function GalleryPageClient() {
  return (
    <main>
      <GalleryHeroClient />
      <GalleryGrid />
      <CTA />
    </main>
  );
}
