import type { Metadata } from "next";
import dynamic from "next/dynamic";

const PageClient = dynamic(() => import("./PageClient"), { ssr: false });

export const metadata: Metadata = {
  title: "Water Quality Guides & Homeowner Tools",
  description:
    "Educational articles about water quality, filtration technology, and maintenance guides for Central Florida homeowners. Free resources from Pure Agua experts.",
  alternates: {
    canonical: "https://pureaguaenterprise.com/resources",
  },
  openGraph: {
    title: "Water Quality Guides & Homeowner Tools | Pure Agua",
    description: "Educational resources about water quality and filtration for Central Florida homeowners.",
    url: "https://pureaguaenterprise.com/resources",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Water Quality Resources - Pure Agua Enterprises" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Water Quality Guides & Homeowner Tools | Pure Agua",
    description: "Educational resources about water quality and filtration in Central Florida.",
    images: ["/images/og-image.png"],
  },
};

export default function ResourcesPage() {
  return (
    <>
      {/* Server-rendered SEO content for crawlers */}
      <div className="sr-only">
        <h1>Water Quality Resources, Guides, and Educational Articles for Central Florida Homeowners</h1>
        <p>
          Pure Agua Enterprises provides free educational resources to help Central Florida homeowners understand their water quality and make informed decisions about water treatment. Our library of guides, articles, and tools covers topics essential to families in Kissimmee, Orlando, St. Cloud, Celebration, and throughout Osceola, Orange, and Polk counties. From understanding what total dissolved solids mean for your health to learning the differences between water softening and water filtration, our resources are written by water treatment professionals with years of experience in the Florida market.
        </p>
        <p>
          Central Florida faces water quality challenges that are distinct from other regions. Municipal water supplies often contain elevated chlorine levels used to treat surface water sources, along with sediment, trihalomethanes, and hard water minerals that measure between 15 and 25 grains per gallon in many Osceola County neighborhoods. Well water users may encounter iron staining, hydrogen sulfide odor, coliform bacteria, tannins, and low pH levels that corrode copper plumbing. Our resource articles explain these issues in plain language, describe the health and household effects, and outline the treatment options available for each contaminant.
        </p>
        <p>
          Among our most popular guides, you will find articles on how to read a water quality test report, the true cost of hard water damage to home appliances and plumbing, comparing reverse osmosis to pitcher filters and refrigerator filters for drinking water purification, maintaining your water softener with the correct salt type and regeneration schedule, and understanding the benefits of whole-home filtration versus point-of-use systems. We also publish seasonal tips relevant to Florida homeowners, including how weather patterns and seasonal water table changes affect well water quality.
        </p>
        <p>
          Pure Agua Enterprises has served Central Florida since 2016 as a family-owned, licensed, and insured water treatment company. We hold NSF/ANSI 58 and 61 certifications and are a WQA member, reflecting our dedication to industry-leading standards. Our educational resources complement the free in-home water testing we offer to every homeowner in our service area. If reading our guides raises questions about your own water, call (407) 512-8342 to schedule a no-obligation water test and receive a personalized water quality report for your home.
        </p>
      </div>
      <PageClient />
    </>
  );
}
