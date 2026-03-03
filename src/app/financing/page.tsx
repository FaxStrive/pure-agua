import type { Metadata } from "next";
import dynamic from "next/dynamic";

const PageClient = dynamic(() => import("./PageClient"), { ssr: false });

export const metadata: Metadata = {
  title: "Financing Options | Pure Agua Enterprises",
  description:
    "Affordable water filtration financing with 0% introductory rates. Flexible payment plans, no money down. Estimate your monthly payment with our calculator.",
};

export default function FinancingPage() {
  return <PageClient />;
}
