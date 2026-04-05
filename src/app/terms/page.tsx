import type { Metadata } from "next";
import dynamic from "next/dynamic";

const PageClient = dynamic(() => import("./PageClient"), { ssr: false });

export const metadata: Metadata = {
  title: "Terms of Service | Pure Agua Enterprises",
  description:
    "Terms of Service for Pure Agua Enterprises. Review our terms including SMS/text messaging policies, service agreements, and user responsibilities.",
  alternates: {
    canonical: "https://pureaguaenterprise.com/terms",
  },
  openGraph: {
    title: "Terms of Service | Pure Agua Enterprises",
    description: "Review Pure Agua Enterprises terms of service, SMS policies, and service agreements.",
    url: "https://pureaguaenterprise.com/terms",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Pure Agua Enterprises Terms of Service" }],
  },
};

export default function TermsPage() {
  return <PageClient />;
}
