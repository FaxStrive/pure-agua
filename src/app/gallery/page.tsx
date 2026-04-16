import type { Metadata } from "next";
import dynamic from "next/dynamic";

const PageClient = dynamic(() => import("./PageClient"), { ssr: false });

export const metadata: Metadata = {
  title: "Water System Installation Photo Gallery",
  description:
    "Browse water filtration installation photos across Central Florida. See our team at work and completed systems in Kissimmee and Orlando.",
  alternates: {
    canonical: "https://pureaguaenterprise.com/gallery",
  },
  openGraph: {
    title: "Water System Installation Photo Gallery | Pure Agua",
    description: "Water filtration installation photos from across Central Florida.",
    url: "https://pureaguaenterprise.com/gallery",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Installation Gallery - Pure Agua Enterprises" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Water System Installation Photo Gallery | Pure Agua",
    description: "Water filtration installation photos from Central Florida.",
    images: ["/images/og-image.png"],
  },
};

export default function GalleryPage() {
  return (
    <>
      {/* Server-rendered SEO content for crawlers */}
      <div className="sr-only">
        <h1>Water Filtration System Installation Gallery - Pure Agua Enterprises</h1>
        <p>
          Browse the Pure Agua Enterprises installation gallery to see our professional water treatment work across Central Florida homes. Our photo collection features completed installations of whole-home water filtration systems, water softeners, reverse osmosis drinking water units, and well water treatment equipment in Kissimmee, Orlando, St. Cloud, Celebration, Poinciana, Hunters Creek, and neighboring communities. Each photograph documents the quality craftsmanship our certified technicians deliver on every project, from the initial plumbing connections to the finished system neatly mounted and operational.
        </p>
        <p>
          Our gallery includes a variety of installation types to help prospective customers understand what to expect. You will find examples of garage-mounted whole-home filtration systems that treat every drop of water entering the house, compact under-sink reverse osmosis units that provide purified drinking water on demand, and combination setups where a water softener works alongside a filtration system to address both hardness and contaminants simultaneously. For homes on private wells, we showcase specialized treatment configurations that tackle iron, sulfur, bacteria, and sediment common in Central Florida groundwater.
        </p>
        <p>
          Every installation shown in our gallery was performed by a licensed and insured Pure Agua technician following industry best practices. We use Watershield brand systems that carry NSF/ANSI 58 and 61 certifications, ensuring the equipment meets rigorous standards for contaminant reduction and material safety. As a Water Quality Association member company, we adhere to professional installation guidelines that protect both the homeowner and the integrity of the plumbing system. Most installations are completed within two to four hours with minimal disruption to your household.
        </p>
        <p>
          Pure Agua Enterprises has been serving Central Florida families since 2016 and maintains a perfect 5.0-star rating with more than 200 Google reviews. Our gallery reflects the pride we take in every job, whether it is a straightforward softener swap or a complex multi-system installation for a large home. Every system comes with a lifetime warranty on the control valve and tank and is eligible for our flexible financing plans. If you would like your home to be our next success story, call (407) 512-8342 to schedule your free in-home water test today.
        </p>
      </div>
      <PageClient />
    </>
  );
}
