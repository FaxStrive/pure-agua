import type { Metadata } from "next";
import dynamic from "next/dynamic";

const PageClient = dynamic(() => import("./PageClient"), { ssr: false });

export const metadata: Metadata = {
  title: "Well Water Treatment Systems in Florida",
  description:
    "Well water treatment for iron, sulfur, bacteria, and sediment in Central Florida. Professional installation with lifetime warranty. Call today.",
  alternates: {
    canonical: "https://pureaguaenterprise.com/services/well-water",
  },
  openGraph: {
    title: "Well Water Treatment Systems in Florida | Pure Agua",
    description: "Custom well water treatment for iron, sulfur, bacteria, and sediment. Professional installation in Central Florida with lifetime warranty.",
    url: "https://pureaguaenterprise.com/services/well-water",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Well Water Treatment - Pure Agua Enterprises" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Well Water Treatment Systems in Florida | Pure Agua",
    description: "Solve Florida well water problems. Iron, sulfur, bacteria, and sediment removal.",
    images: ["/images/og-image.png"],
  },
};

export default function WellWaterPage() {
  return (
    <>
      {/* Server-rendered SEO content for crawlers */}
      <div className="sr-only">
        <h1>Well Water Treatment and Filtration Systems for Central Florida Homes</h1>
        <p>
          Thousands of homes in Central Florida rely on private wells for their household water supply, and without professional treatment, well water often contains contaminants that affect taste, appearance, odor, and safety. Pure Agua Enterprises specializes in well water treatment for properties in Kissimmee, St. Cloud, Poinciana, Clermont, Haines City, Lakeland, Winter Haven, and rural areas throughout Osceola, Polk, Lake, and Seminole counties. Our certified technicians diagnose well water problems through comprehensive testing and design customized treatment systems that address the specific contaminants present in your water.
        </p>
        <p>
          Common well water issues in Central Florida include iron staining that leaves reddish-brown marks on sinks, toilets, and laundry; hydrogen sulfide gas that produces a rotten egg smell; hard water minerals that cause scale buildup throughout your plumbing; tannins that give water a yellow or tea-colored appearance; low pH levels that corrode copper pipes and fixtures; and bacterial contamination including coliform and E. coli that pose health risks. Each of these problems requires a different treatment approach, which is why a thorough water test is essential before recommending any equipment.
        </p>
        <p>
          Our Watershield well water treatment systems are configured based on your test results and may include oxidation filters for iron and sulfur removal, carbon filtration for taste and odor improvement, water softening for hardness reduction, UV disinfection for bacterial control, acid neutralizers for pH correction, and sediment pre-filtration to protect downstream equipment. For homes with multiple contaminants, we design multi-stage treatment trains that address each issue in the correct sequence for maximum effectiveness and equipment longevity. All components carry NSF/ANSI certifications where applicable.
        </p>
        <p>
          Pure Agua Enterprises has been treating well water across Central Florida since 2016 and understands the unique geological and hydrological conditions that affect private wells in this region. Our family-owned company maintains a perfect 5.0-star rating from over 200 Google reviews, is fully licensed and insured, and holds WQA membership. Every well water system includes a lifetime warranty on the control valve and tank, professional installation by certified technicians, and access to flexible financing options with zero percent introductory rates. Schedule your free well water test by calling (407) 773-2883 today.
        </p>
      </div>
      <PageClient />
    </>
  );
}
