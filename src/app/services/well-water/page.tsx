import type { Metadata } from "next";
import dynamic from "next/dynamic";

const PageClient = dynamic(() => import("./PageClient"), { ssr: false });

export const metadata: Metadata = {
  title: "Well Water Treatment | Pure Agua Enterprises",
  description:
    "Custom well water treatment for iron, sulfur, bacteria, and sediment in Central Florida. Solve Florida well water problems with professional installation and lifetime warranty.",
  alternates: {
    canonical: "https://pureaguaenterprise.com/services/well-water",
  },
  openGraph: {
    title: "Well Water Treatment | Pure Agua Enterprises",
    description: "Custom well water treatment for iron, sulfur, bacteria, and sediment. Professional installation in Central Florida with lifetime warranty.",
    url: "https://pureaguaenterprise.com/services/well-water",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Well Water Treatment - Pure Agua Enterprises" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Well Water Treatment | Pure Agua Enterprises",
    description: "Solve Florida well water problems. Iron, sulfur, bacteria, and sediment removal.",
    images: ["/images/og-image.png"],
  },
};

export default function WellWaterPage() {
  return (
    <>
      <h1 className="sr-only">Well Water Treatment Systems in Central Florida</h1>
      <PageClient />
    </>
  );
}
