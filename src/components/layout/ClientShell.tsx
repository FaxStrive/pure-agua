"use client";

import { NavbarWithBanner } from "@/components/conversion/ConversionElements";
import { Footer } from "@/components/layout/Footer";
import { ChatWidget } from "@/components/layout/ChatWidget";
import { ExitIntentPopup } from "@/components/conversion/ExitIntentPopup";
import { SocialProofToast } from "@/components/conversion/SocialProofToast";
import { StickyBottomBar } from "@/components/conversion/StickyBottomBar";
import { FloatingCTA } from "@/components/conversion/FloatingCTA";
import { TimedOfferPopup } from "@/components/conversion/TimedOfferPopup";
import { ScrollCTA } from "@/components/conversion/ScrollCTA";

export default function ClientShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavbarWithBanner />
      {children}
      <Footer />
      <ChatWidget />
      <ExitIntentPopup />
      <SocialProofToast />
      <StickyBottomBar />
      <FloatingCTA />
      <TimedOfferPopup />
      <ScrollCTA />
    </>
  );
}
