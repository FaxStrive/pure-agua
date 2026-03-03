import type { Metadata } from "next";
import dynamic from "next/dynamic";

const PageClient = dynamic(() => import("./PageClient"), { ssr: false });

export const metadata: Metadata = {
  title: "Services | Pure Agua Enterprises",
  description:
    "Whole-home water filtration, reverse osmosis, and water softening systems for Central Florida homes. Custom solutions for city water and well water.",
};

export default function ServicesPage() {
  return <PageClient />;
}
