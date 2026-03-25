import type { Metadata } from "next";
import dynamic from "next/dynamic";

const PageClient = dynamic(() => import("./PageClient"), { ssr: false });

export const metadata: Metadata = {
  title: "Water Quality Resources | Pure Agua Enterprises",
  description:
    "Educational articles about water quality, filtration technology, and maintenance guides for Central Florida homeowners. Free resources from Pure Agua experts.",
  alternates: {
    canonical: "https://pureaguaenterprise.com/resources",
  },
  openGraph: {
    title: "Water Quality Resources | Pure Agua Enterprises",
    description: "Educational resources about water quality and filtration for Central Florida homeowners.",
    url: "https://pureaguaenterprise.com/resources",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Water Quality Resources - Pure Agua Enterprises" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Water Quality Resources | Pure Agua Enterprises",
    description: "Educational resources about water quality and filtration in Central Florida.",
    images: ["/images/og-image.png"],
  },
};

export default function ResourcesPage() {
  return (
    <>
      <h1 className="sr-only">Water Quality Resources and Education - Pure Agua Enterprises</h1>
      <PageClient />
    </>
  );
}
