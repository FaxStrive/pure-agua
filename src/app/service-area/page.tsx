import type { Metadata } from "next";
import dynamic from "next/dynamic";

const PageClient = dynamic(() => import("./PageClient"), { ssr: false });

export const metadata: Metadata = {
  title: "Service Area - Central Florida | Pure Agua Enterprises",
  description:
    "Pure Agua serves Osceola, Orange, Polk, Seminole, and Lake counties in Central Florida. Free water testing in Kissimmee, Orlando, St. Cloud, Celebration, and surrounding areas.",
  alternates: {
    canonical: "https://pureaguaenterprise.com/service-area",
  },
  openGraph: {
    title: "Service Area - Central Florida | Pure Agua Enterprises",
    description: "Water filtration services in Kissimmee, Orlando, St. Cloud, Celebration, and Central Florida.",
    url: "https://pureaguaenterprise.com/service-area",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Service Area - Pure Agua Enterprises" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Service Area - Central Florida | Pure Agua Enterprises",
    description: "Water filtration serving Kissimmee, Orlando, and Central Florida.",
    images: ["/images/og-image.png"],
  },
};

export default function ServiceAreaPage() {
  return (
    <>
      <h1 className="sr-only">Pure Agua Enterprises Service Area - Central Florida Water Filtration</h1>
      <PageClient />
    </>
  );
}
