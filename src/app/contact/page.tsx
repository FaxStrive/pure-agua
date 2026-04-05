import type { Metadata } from "next";
import dynamic from "next/dynamic";

const PageClient = dynamic(() => import("./PageClient"), { ssr: false });

export const metadata: Metadata = {
  title: "Contact Us - Free Water Test | Pure Agua Enterprises",
  description:
    "Schedule your free in-home water test today. Call (407) 773-2883 or contact Pure Agua Enterprises serving Kissimmee and Orlando, FL. No obligation.",
  alternates: {
    canonical: "https://pureaguaenterprise.com/contact",
  },
  openGraph: {
    title: "Contact Pure Agua Enterprises - Free Water Test",
    description: "Schedule your free in-home water test. Call (407) 773-2883. Serving Kissimmee and Orlando, FL.",
    url: "https://pureaguaenterprise.com/contact",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Contact Pure Agua Enterprises for a Free Water Test in Central Florida" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Pure Agua Enterprises - Free Water Test",
    description: "Schedule your free in-home water test in Central Florida. Call (407) 773-2883.",
    images: ["/images/og-image.png"],
  },
};

export default function ContactPage() {
  return (
    <>
      <h1 className="sr-only">Contact Pure Agua Enterprises - Schedule Your Free Water Test</h1>
      <PageClient />
    </>
  );
}
