import type { Metadata } from "next";
import dynamic from "next/dynamic";

const PageClient = dynamic(() => import("./PageClient"), { ssr: false });

export const metadata: Metadata = {
  title: "Water Softening Systems | Pure Agua Enterprises",
  description:
    "End hard water problems in Kissimmee and Orlando with salt-based and salt-free water softeners. Protect pipes, appliances, and enjoy softer skin. Free water test included.",
  alternates: {
    canonical: "https://pureaguaenterprise.com/services/water-softening",
  },
  openGraph: {
    title: "Water Softening Systems | Pure Agua Enterprises",
    description: "Salt-based and salt-free water softeners for Central Florida homes. End hard water problems. Free water test in Kissimmee and Orlando.",
    url: "https://pureaguaenterprise.com/services/water-softening",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Water Softening Systems - Pure Agua Enterprises" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Water Softening Systems | Pure Agua Enterprises",
    description: "End hard water problems in Central Florida. Salt-based and salt-free water softeners.",
    images: ["/images/og-image.png"],
  },
};

export default function WaterSofteningPage() {
  return (
    <>
      <h1 className="sr-only">Water Softening Systems in Kissimmee and Orlando, Central Florida</h1>
      <PageClient />
    </>
  );
}
