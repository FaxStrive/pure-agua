import type { Metadata } from "next";
import dynamic from "next/dynamic";

const PageClient = dynamic(() => import("./PageClient"), { ssr: false });

export const metadata: Metadata = {
  title: "Before & After Results | Pure Agua Enterprises",
  description:
    "See real before and after water filtration results across Central Florida. TDS readings, water quality improvements, and installation photos from Kissimmee and Orlando homes.",
  alternates: {
    canonical: "https://pureaguaenterprise.com/before-after",
  },
  openGraph: {
    title: "Before & After Results | Pure Agua Enterprises",
    description: "Real before and after water filtration results from Central Florida homes.",
    url: "https://pureaguaenterprise.com/before-after",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Before & After - Pure Agua Enterprises" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Before & After Results | Pure Agua Enterprises",
    description: "Real water filtration results from Central Florida homes.",
    images: ["/images/og-image.png"],
  },
};

export default function BeforeAfterPage() {
  return (
    <>
      <h1 className="sr-only">Before and After Water Filtration Results - Pure Agua Enterprises</h1>
      <PageClient />
    </>
  );
}
