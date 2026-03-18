import type { Metadata } from "next";
import dynamic from "next/dynamic";

const PageClient = dynamic(() => import("./PageClient"), { ssr: false });

export const metadata: Metadata = {
  title: "Reverse Osmosis Systems | Pure Agua Enterprises",
  description:
    "Multi-stage reverse osmosis drinking water systems removing 99% of contaminants including PFAS, lead, and arsenic. Under-sink installation in Kissimmee and Orlando, FL.",
  alternates: {
    canonical: "https://pureaguaenterprise.com/services/reverse-osmosis",
  },
  openGraph: {
    title: "Reverse Osmosis Systems | Pure Agua Enterprises",
    description: "Remove 99% of water contaminants including PFAS, lead, and arsenic. Under-sink RO systems in Central Florida.",
    url: "https://pureaguaenterprise.com/services/reverse-osmosis",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Reverse Osmosis Systems - Pure Agua Enterprises" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reverse Osmosis Systems | Pure Agua Enterprises",
    description: "Remove 99% of water contaminants. Under-sink RO installation in Central Florida.",
    images: ["/images/og-image.png"],
  },
};

export default function ReverseOsmosisPage() {
  return (
    <>
      <h1 className="sr-only">Reverse Osmosis Drinking Water Systems in Central Florida</h1>
      <PageClient />
    </>
  );
}
