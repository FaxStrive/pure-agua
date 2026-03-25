import type { Metadata } from "next";
import dynamic from "next/dynamic";

const PageClient = dynamic(() => import("./PageClient"), { ssr: false });

export const metadata: Metadata = {
  title: "Water Filtration FAQ | Pure Agua Enterprises",
  description:
    "Find answers to common questions about water filtration, installation, pricing, and maintenance from Pure Agua Enterprises in Kissimmee and Orlando, FL.",
  alternates: {
    canonical: "https://pureaguaenterprise.com/faq",
  },
  openGraph: {
    title: "Water Filtration FAQ | Pure Agua Enterprises",
    description: "Common questions about water filtration, pricing, and installation in Central Florida answered by Pure Agua experts.",
    url: "https://pureaguaenterprise.com/faq",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "FAQ - Pure Agua Enterprises" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Water Filtration FAQ | Pure Agua Enterprises",
    description: "Common questions about water filtration answered by Central Florida experts.",
    images: ["/images/og-image.png"],
  },
};

export default function FAQPage() {
  return (
    <>
      <h1 className="sr-only">Frequently Asked Questions About Water Filtration in Central Florida</h1>
      <PageClient />
    </>
  );
}
