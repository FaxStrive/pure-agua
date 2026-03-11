import type { Metadata } from "next";
import dynamic from "next/dynamic";

const PageClient = dynamic(() => import("./PageClient"), { ssr: false });

export const metadata: Metadata = {
  title: "Terms of Service | Pure Agua Enterprises",
  description:
    "Terms of Service for Pure Agua Enterprises. Review our terms including SMS/text messaging policies, service agreements, and user responsibilities.",
};

export default function TermsPage() {
  return <PageClient />;
}
