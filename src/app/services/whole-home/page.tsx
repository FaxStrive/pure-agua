import type { Metadata } from "next";
import dynamic from "next/dynamic";

const PageClient = dynamic(() => import("./PageClient"), { ssr: false });

export const metadata: Metadata = {
  title: "Whole Home Water Filtration | Pure Agua Enterprises",
  description:
    "Complete point-of-entry water filtration for every faucet in your home. Remove chlorine, sediment, VOCs, and contaminants. Professional installation in Kissimmee and Orlando, FL.",
  alternates: {
    canonical: "https://pureaguaenterprise.com/services/whole-home",
  },
  openGraph: {
    title: "Whole Home Water Filtration | Pure Agua Enterprises",
    description: "Complete point-of-entry water filtration for every faucet. Remove chlorine, sediment, and contaminants. Free water test in Central Florida.",
    url: "https://pureaguaenterprise.com/services/whole-home",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Whole Home Water Filtration - Pure Agua Enterprises" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Whole Home Water Filtration | Pure Agua Enterprises",
    description: "Complete point-of-entry water filtration for every faucet in Central Florida homes.",
    images: ["/images/og-image.png"],
  },
};

export default function WholeHomePage() {
  return (
    <>
      <h1 className="sr-only">Whole Home Water Filtration Systems in Central Florida</h1>
      <PageClient />
    </>
  );
}
