import type { Metadata } from "next";
import dynamic from "next/dynamic";

const PageClient = dynamic(() => import("./PageClient"), { ssr: false });

export const metadata: Metadata = {
  title: "About Us | Pure Agua Enterprises",
  description:
    "Learn about Pure Agua Enterprises - a family-owned water filtration company serving Kissimmee and Orlando, FL for over 10 years.",
};

export default function AboutPage() {
  return <PageClient />;
}
