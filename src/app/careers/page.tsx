import type { Metadata } from "next";
import dynamic from "next/dynamic";

const PageClient = dynamic(() => import("./PageClient"), { ssr: false });

export const metadata: Metadata = {
  title: "Careers | Pure Agua Enterprises",
  description:
    "Join the Pure Agua team. We are hiring water treatment technicians, sales representatives, and customer service coordinators in Central Florida.",
};

export default function CareersPage() {
  return <PageClient />;
}
