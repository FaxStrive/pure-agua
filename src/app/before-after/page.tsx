import type { Metadata } from "next";
import dynamic from "next/dynamic";

const PageClient = dynamic(() => import("./PageClient"), { ssr: false });

export const metadata: Metadata = {
  title: "Before & After | Pure Agua Enterprises",
  description:
    "See real before and after results from Pure Agua water filtration installations across Central Florida. TDS readings, installation photos, and water quality improvements.",
};

export default function BeforeAfterPage() {
  return <PageClient />;
}
