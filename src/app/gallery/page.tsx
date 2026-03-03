import type { Metadata } from "next";
import dynamic from "next/dynamic";

const PageClient = dynamic(() => import("./PageClient"), { ssr: false });

export const metadata: Metadata = {
  title: "Gallery | Pure Agua Enterprises",
  description:
    "Browse our portfolio of water filtration installations, before and after transformations, and our team at work across Central Florida.",
};

export default function GalleryPage() {
  return <PageClient />;
}
