import type { Metadata } from "next";
import dynamic from "next/dynamic";

const PageClient = dynamic(() => import("./PageClient"), { ssr: false });

export const metadata: Metadata = {
  title: "Privacy Policy | Pure Agua Enterprises",
  description:
    "Privacy Policy for Pure Agua Enterprises. Learn how we collect, use, and protect your personal information including SMS and text messaging data.",
  alternates: {
    canonical: "https://pureaguaenterprise.com/privacy",
  },
  openGraph: {
    title: "Privacy Policy | Pure Agua Enterprises",
    description: "Learn how Pure Agua Enterprises collects, uses, and protects your personal information.",
    url: "https://pureaguaenterprise.com/privacy",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Pure Agua Enterprises Privacy Policy" }],
  },
};

export default function PrivacyPage() {
  return <PageClient />;
}
