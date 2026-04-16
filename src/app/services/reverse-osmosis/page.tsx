import type { Metadata } from "next";
import dynamic from "next/dynamic";

const PageClient = dynamic(() => import("./PageClient"), { ssr: false });

export const metadata: Metadata = {
  title: "Reverse Osmosis Drinking Water Systems",
  description:
    "Under-sink reverse osmosis systems removing 99% of contaminants including PFAS, lead, and arsenic. Installation in Kissimmee and Orlando, FL.",
  alternates: {
    canonical: "https://pureaguaenterprise.com/services/reverse-osmosis",
  },
  openGraph: {
    title: "Reverse Osmosis Drinking Water Systems | Pure Agua",
    description: "Remove 99% of water contaminants including PFAS, lead, and arsenic. Under-sink RO systems in Central Florida.",
    url: "https://pureaguaenterprise.com/services/reverse-osmosis",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Reverse Osmosis Systems - Pure Agua Enterprises" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reverse Osmosis Drinking Water Systems | Pure Agua",
    description: "Remove 99% of water contaminants. Under-sink RO installation in Central Florida.",
    images: ["/images/og-image.png"],
  },
};

export default function ReverseOsmosisPage() {
  return (
    <>
      {/* Server-rendered SEO content for crawlers */}
      <div className="sr-only">
        <h1>Reverse Osmosis Drinking Water Systems in Kissimmee, Orlando, and Central Florida</h1>
        <p>
          Pure Agua Enterprises installs under-sink reverse osmosis (RO) drinking water systems that remove up to 99 percent of dissolved contaminants from your tap water. Our NSF/ANSI 58 certified Watershield reverse osmosis units are designed to eliminate PFAS, lead, arsenic, nitrates, fluoride, chlorine, chromium-6, pharmaceuticals, and hundreds of other dissolved solids that standard carbon filters cannot effectively reduce. For families in Kissimmee, Orlando, and throughout Central Florida, a reverse osmosis system provides the purest possible drinking water directly from a dedicated faucet at your kitchen sink.
        </p>
        <p>
          Central Florida&apos;s municipal water supplies draw from the Floridan Aquifer, which naturally contains high levels of dissolved minerals. While municipal treatment removes bacteria and pathogens, it introduces chlorine and chloramines while leaving behind TDS levels that often range from 200 to 500 parts per million in Osceola and Orange counties. A reverse osmosis system reduces TDS to between 10 and 30 parts per million, producing water that tastes clean and pure. For well water users, RO provides an additional barrier against contaminants that whole-home systems may not fully address at the point of use.
        </p>
        <p>
          Installation of a reverse osmosis system typically takes one to two hours and involves mounting the filtration unit under the kitchen sink, connecting it to the cold water supply line, and installing a dedicated dispensing faucet on the countertop or sink deck. Our certified technicians handle the entire process with minimal disruption to your kitchen. The system includes a storage tank that maintains a ready supply of purified water so you never have to wait. Most households find that the RO system easily meets their drinking and cooking water needs.
        </p>
        <p>
          Maintenance is straightforward and affordable. Pre-filters and post-filters are typically replaced once per year, and the RO membrane itself lasts two to three years under normal usage conditions. Pure Agua Enterprises provides guidance on maintenance schedules and offers replacement filter packages to keep your system performing at its best. Every RO installation comes with our lifetime warranty on the control valve and tank, flexible financing options including zero percent introductory rates, and the support of a family-owned company that has earned a 5.0-star rating from over 200 Google reviews. Call (407) 512-8342 for your free water test and see what reverse osmosis can do for your home.
        </p>
      </div>
      <PageClient />
    </>
  );
}
