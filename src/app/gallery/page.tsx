import type { Metadata } from "next";
import dynamic from "next/dynamic";

const PageClient = dynamic(() => import("./PageClient"), { ssr: false });

export const metadata: Metadata = {
  title: "Installation Gallery | Pure Agua Enterprises",
  description:
    "Browse our portfolio of water filtration installations across Central Florida. See before and after photos, our team at work, and completed systems in Kissimmee and Orlando homes.",
  alternates: {
    canonical: "https://pureaguaenterprise.com/gallery",
  },
  openGraph: {
    title: "Installation Gallery | Pure Agua Enterprises",
    description: "Water filtration installation photos from across Central Florida.",
    url: "https://pureaguaenterprise.com/gallery",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Installation Gallery - Pure Agua Enterprises" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Installation Gallery | Pure Agua Enterprises",
    description: "Water filtration installation photos from Central Florida.",
    images: ["/images/og-image.png"],
  },
};

export default function GalleryPage() {
  return (
    <>
      <h1 className="sr-only">Water Filtration Installation Gallery - Pure Agua Enterprises</h1>
      <PageClient />
    </>
  );
}
