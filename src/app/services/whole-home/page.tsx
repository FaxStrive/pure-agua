import type { Metadata } from "next";
import dynamic from "next/dynamic";

const PageClient = dynamic(() => import("./PageClient"), { ssr: false });

export const metadata: Metadata = {
  title: "Whole Home Water Filtration | Pure Agua Enterprises",
  description:
    "Complete point-of-entry water filtration for every faucet in your home. Remove chlorine, sediment, and contaminants. Professional installation in Central Florida.",
};

export default function WholeHomePage() {
  return <PageClient />;
}
