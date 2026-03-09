import type { Metadata } from "next";
import dynamic from "next/dynamic";

const PageClient = dynamic(() => import("./PageClient"), { ssr: false });

export const metadata: Metadata = {
  title: "Testimonials | Pure Agua Enterprises",
  description:
    "Read real reviews from Central Florida families who trust Pure Agua for their water filtration needs. 5-star rated with 200+ happy customers.",
};

export default function TestimonialsPage() {
  return <PageClient />;
}
