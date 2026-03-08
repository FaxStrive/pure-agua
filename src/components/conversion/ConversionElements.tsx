"use client";

import { Navbar } from "@/components/layout/Navbar";
import { PromoBanner } from "@/components/conversion/PromoBanner";

/**
 * Sticky header wrapper: PromoBanner + Navbar stay in document flow
 * and stick to the top of the viewport on scroll.
 */
export function NavbarWithBanner() {
  return (
    <div className="sticky top-0 z-[60]">
      <PromoBanner />
      <Navbar />
    </div>
  );
}
