import type { Metadata } from "next";
import dynamic from "next/dynamic";

const PageClient = dynamic(() => import("./PageClient"), { ssr: false });

export const metadata: Metadata = {
  title: "About Us | Pure Agua Enterprises",
  description:
    "Learn about Pure Agua Enterprises - a family-owned water filtration company serving Kissimmee and Orlando, FL. Our mission: pure water for every Central Florida home.",
  alternates: {
    canonical: "https://pureaguaenterprise.com/about",
  },
  openGraph: {
    title: "About Pure Agua Enterprises",
    description: "Family-owned water filtration company serving Kissimmee and Orlando, FL. Pure water for every Central Florida home.",
    url: "https://pureaguaenterprise.com/about",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "About Pure Agua Enterprises" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Pure Agua Enterprises",
    description: "Family-owned water filtration in Kissimmee and Orlando, FL.",
    images: ["/images/og-image.png"],
  },
};

export default function AboutPage() {
  return (
    <>
      <h1 className="sr-only">About Pure Agua Enterprises - Family-Owned Water Filtration in Central Florida</h1>
      <PageClient />
    </>
  );
}
