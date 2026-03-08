import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { NavbarWithBanner } from "@/components/conversion/ConversionElements";
import { Footer } from "@/components/layout/Footer";
import { ChatWidget } from "@/components/layout/ChatWidget";
import { ExitIntentPopup } from "@/components/conversion/ExitIntentPopup";
import { SocialProofToast } from "@/components/conversion/SocialProofToast";
import { StickyBottomBar } from "@/components/conversion/StickyBottomBar";
import { FloatingCTA } from "@/components/conversion/FloatingCTA";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pure Agua Enterprises | Pure Water, Nothing Less",
  description:
    "Central Florida's trusted water filtration experts. Family-owned, serving Kissimmee and Orlando with whole-home water purification, reverse osmosis, and water softening systems. Get a free water test today.",
  keywords:
    "water filtration Orlando, water purification Kissimmee, reverse osmosis Central Florida, water softener Orlando, whole home water filter, Pure Agua Enterprises",
  openGraph: {
    title: "Pure Agua Enterprises | Pure Water, Nothing Less",
    description:
      "Family-owned water filtration experts serving Kissimmee and Orlando, FL. Schedule your free water test today.",
    type: "website",
    locale: "en_US",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const dynamic = "force-dynamic";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased overflow-x-hidden">
        <NavbarWithBanner />
        {children}
        <Footer />
        <ChatWidget />
        <ExitIntentPopup />
        <SocialProofToast />
        <StickyBottomBar />
        <FloatingCTA />
      </body>
    </html>
  );
}
