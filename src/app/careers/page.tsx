import type { Metadata } from "next";
import dynamic from "next/dynamic";

const PageClient = dynamic(() => import("./PageClient"), { ssr: false });

export const metadata: Metadata = {
  title: "Careers | Pure Agua Enterprises",
  description:
    "Join the Pure Agua team. Hiring water treatment technicians, sales representatives, and customer service coordinators in Central Florida.",
  alternates: {
    canonical: "https://pureaguaenterprise.com/careers",
  },
  openGraph: {
    title: "Careers | Pure Agua Enterprises",
    description: "Join Pure Agua Enterprises in Central Florida. Water treatment careers in Kissimmee and Orlando.",
    url: "https://pureaguaenterprise.com/careers",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Careers - Pure Agua Enterprises" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers | Pure Agua Enterprises",
    description: "Water treatment careers in Central Florida.",
    images: ["/images/og-image.png"],
  },
};

export default function CareersPage() {
  return (
    <>
      <h1 className="sr-only">Careers at Pure Agua Enterprises - Central Florida Water Treatment Jobs</h1>
      <PageClient />
    </>
  );
}
