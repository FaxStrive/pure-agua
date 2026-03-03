import type { Metadata } from "next";
import dynamic from "next/dynamic";

const PageClient = dynamic(() => import("./PageClient"), { ssr: false });

export const metadata: Metadata = {
  title: "Reverse Osmosis Systems | Pure Agua Enterprises",
  description:
    "Multi-stage reverse osmosis drinking water systems. Remove up to 99% of contaminants. Under-sink installation in Central Florida homes.",
};

export default function ReverseOsmosisPage() {
  return <PageClient />;
}
