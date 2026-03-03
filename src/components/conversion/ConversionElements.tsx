"use client";

import { useState, useCallback } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { PromoBanner } from "@/components/conversion/PromoBanner";

/**
 * Replaces standalone <Navbar /> on every page.
 * Wraps Navbar + PromoBanner so the navbar offset adjusts when banner is visible.
 */
export function NavbarWithBanner() {
  const [promoBannerVisible, setPromoBannerVisible] = useState(false);

  const handleBannerVisibility = useCallback((visible: boolean) => {
    setPromoBannerVisible(visible);
  }, []);

  return (
    <>
      <PromoBanner onVisibilityChange={handleBannerVisibility} />
      <Navbar promoBannerVisible={promoBannerVisible} />
    </>
  );
}
