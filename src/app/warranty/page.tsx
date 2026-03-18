import type { Metadata } from "next";
import dynamic from "next/dynamic";

const PageClient = dynamic(() => import("./PageClient"), { ssr: false });

export const metadata: Metadata = {
  title: "Lifetime Warranty | Pure Agua Enterprises",
  description:
    "Every water filtration system we install in Central Florida is backed by a lifetime warranty on the control valve and tank. Learn about our coverage, claims, and transferability.",
  alternates: {
    canonical: "https://pureaguaenterprise.com/warranty",
  },
  openGraph: {
    title: "Lifetime Warranty | Pure Agua Enterprises",
    description: "Comprehensive lifetime warranty on all water filtration systems installed in Central Florida.",
    url: "https://pureaguaenterprise.com/warranty",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Lifetime Warranty - Pure Agua Enterprises" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lifetime Warranty | Pure Agua Enterprises",
    description: "Lifetime warranty on all water filtration systems in Central Florida.",
    images: ["/images/og-image.png"],
  },
};

export default function WarrantyPage() {
  return (
    <>
      <h1 className="sr-only">Lifetime Warranty on Water Filtration Systems - Pure Agua Enterprises</h1>
      <PageClient />
    </>
  );
}
