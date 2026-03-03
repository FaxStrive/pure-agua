import type { Metadata } from "next";
import dynamic from "next/dynamic";

const PageClient = dynamic(() => import("./PageClient"), { ssr: false });

export const metadata: Metadata = {
  title: "Lifetime Warranty | Pure Agua Enterprises",
  description:
    "Every water filtration system we install is backed by a comprehensive lifetime warranty. Learn about our coverage, claims process, and transferability.",
};

export default function WarrantyPage() {
  return <PageClient />;
}
