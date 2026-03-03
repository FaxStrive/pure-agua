import type { Metadata } from "next";
import dynamic from "next/dynamic";

const PageClient = dynamic(() => import("./PageClient"), { ssr: false });

export const metadata: Metadata = {
  title: "Contact Us | Pure Agua Enterprises",
  description:
    "Schedule your free water test today. Contact Pure Agua Enterprises serving Kissimmee and Orlando, FL.",
};

export default function ContactPage() {
  return <PageClient />;
}
