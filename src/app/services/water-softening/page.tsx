import type { Metadata } from "next";
import dynamic from "next/dynamic";

const PageClient = dynamic(() => import("./PageClient"), { ssr: false });

export const metadata: Metadata = {
  title: "Water Softening Systems | Pure Agua Enterprises",
  description:
    "End hard water problems with our salt-based and salt-free water softening systems. Protect pipes, appliances, and enjoy softer skin. Central Florida installation.",
};

export default function WaterSofteningPage() {
  return <PageClient />;
}
