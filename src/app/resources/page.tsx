import type { Metadata } from "next";
import dynamic from "next/dynamic";

const PageClient = dynamic(() => import("./PageClient"), { ssr: false });

export const metadata: Metadata = {
  title: "Water Quality Resources | Pure Agua Enterprises",
  description:
    "Educational articles about water quality, filtration technology, and maintenance guides. Free downloadable resources for Central Florida homeowners.",
};

export default function ResourcesPage() {
  return <PageClient />;
}
