import type { Metadata } from "next";
import dynamic from "next/dynamic";

const PageClient = dynamic(() => import("./PageClient"), { ssr: false });

export const metadata: Metadata = {
  title: "Privacy Policy | Pure Agua Enterprises",
  description:
    "Privacy Policy for Pure Agua Enterprises. Learn how we collect, use, and protect your personal information including SMS and text messaging data.",
};

export default function PrivacyPage() {
  return <PageClient />;
}
