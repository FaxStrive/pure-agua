import type { Metadata } from "next";
import dynamic from "next/dynamic";

const PageClient = dynamic(() => import("./PageClient"), { ssr: false });

export const metadata: Metadata = {
  title: "Customer Reviews | Pure Agua Enterprises",
  description:
    "Read real reviews from Central Florida families who trust Pure Agua for water filtration. 5-star rated with 200+ happy customers in Kissimmee and Orlando.",
  alternates: {
    canonical: "https://pureaguaenterprise.com/testimonials",
  },
  openGraph: {
    title: "Customer Reviews | Pure Agua Enterprises",
    description: "5-star rated with 200+ happy customers. Read reviews from Central Florida families.",
    url: "https://pureaguaenterprise.com/testimonials",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Customer Reviews - Pure Agua Enterprises" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Customer Reviews | Pure Agua Enterprises",
    description: "5-star rated water filtration in Central Florida. 200+ happy customers.",
    images: ["/images/og-image.png"],
  },
};

export default function TestimonialsPage() {
  return (
    <>
      <h1 className="sr-only">Customer Reviews - Pure Agua Enterprises Water Filtration</h1>
      <PageClient />
    </>
  );
}
