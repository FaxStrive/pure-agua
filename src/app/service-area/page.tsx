import type { Metadata } from "next";
import dynamic from "next/dynamic";

const PageClient = dynamic(() => import("./PageClient"), { ssr: false });

export const metadata: Metadata = {
  title: "Service Area | Pure Agua Enterprises",
  description:
    "Pure Agua serves Central Florida including Osceola, Orange, Polk, Seminole, and Lake counties. Free water testing in Kissimmee, Orlando, and surrounding areas.",
};

export default function ServiceAreaPage() {
  return <PageClient />;
}
