import type { Metadata } from "next";
import dynamic from "next/dynamic";

const PageClient = dynamic(() => import("./PageClient"), { ssr: false });

export const metadata: Metadata = {
  title: "Well Water Treatment Systems | Pure Agua Enterprises",
  description:
    "Custom well water treatment for iron, sulfur, bacteria, and sediment. Solve Florida well water problems with professional installation and lifetime warranty.",
};

export default function WellWaterPage() {
  return <PageClient />;
}
