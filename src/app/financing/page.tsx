import type { Metadata } from "next";
import dynamic from "next/dynamic";

const PageClient = dynamic(() => import("./PageClient"), { ssr: false });

export const metadata: Metadata = {
  title: "Financing Options | Pure Agua Enterprises",
  description:
    "Affordable water filtration financing with 0% introductory rates and no money down. Flexible payment plans in Kissimmee and Orlando, FL. Estimate your monthly payment.",
  alternates: {
    canonical: "https://pureaguaenterprise.com/financing",
  },
  openGraph: {
    title: "Financing Options | Pure Agua Enterprises",
    description: "0% introductory financing, no money down. Affordable water filtration in Central Florida.",
    url: "https://pureaguaenterprise.com/financing",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Financing - Pure Agua Enterprises" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Financing Options | Pure Agua Enterprises",
    description: "0% introductory financing for water filtration in Central Florida.",
    images: ["/images/og-image.png"],
  },
};

export default function FinancingPage() {
  return (
    <>
      <h1 className="sr-only">Water Filtration Financing Options - Pure Agua Enterprises</h1>
      <PageClient />
    </>
  );
}
