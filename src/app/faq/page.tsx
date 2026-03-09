import type { Metadata } from "next";
import dynamic from "next/dynamic";

const PageClient = dynamic(() => import("./PageClient"), { ssr: false });

export const metadata: Metadata = {
  title: "FAQ | Pure Agua Enterprises",
  description:
    "Find answers to common questions about water filtration, installation, pricing, and maintenance from Pure Agua Enterprises in Central Florida.",
};

export default function FAQPage() {
  return <PageClient />;
}
