import type { Metadata } from "next";
import dynamic from "next/dynamic";

const PageClient = dynamic(() => import("./PageClient"), { ssr: false });

export const metadata: Metadata = {
  title: "About Us - Family-Owned Water Experts FL | Pure Agua",
  description:
    "Pure Agua is a family-owned water filtration company in Kissimmee and Orlando, FL. Trusted Central Florida water experts. Free quote.",
  alternates: {
    canonical: "https://pureaguaenterprise.com/about",
  },
  openGraph: {
    title: "About Us - Family-Owned Water Experts FL | Pure Agua",
    description: "Family-owned water filtration company serving Kissimmee and Orlando, FL. Pure water for every Central Florida home.",
    url: "https://pureaguaenterprise.com/about",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "About Pure Agua Enterprises" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - Family-Owned Water Experts FL | Pure Agua",
    description: "Family-owned water filtration in Kissimmee and Orlando, FL.",
    images: ["/images/og-image.png"],
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Server-rendered SEO content for crawlers */}
      <div className="sr-only">
        <h1>About Pure Agua Enterprises - Family-Owned Water Filtration Experts in Central Florida</h1>
        <p>
          Pure Agua Enterprises is a family-owned and operated water treatment company headquartered at 3705 Eagle Isle Circle, Kissimmee, FL 34746. Founded in 2016, Pure Agua has grown from a small local operation into one of Central Florida&apos;s most trusted names in residential water filtration, earning a perfect 5.0-star rating across more than 200 Google reviews. Our mission is simple: deliver clean, safe, great-tasting water to every home we serve while treating each customer like family.
        </p>
        <p>
          As a licensed and insured water treatment provider, Pure Agua Enterprises holds certifications that reflect our commitment to quality and safety. Our systems meet NSF/ANSI Standard 58 and Standard 61 requirements, and we are proud members of the Water Quality Association (WQA). These credentials ensure that every system we install has been tested and verified to remove contaminants effectively while meeting the highest industry benchmarks for performance and material safety.
        </p>
        <p>
          Our team of certified technicians specializes in whole-home water filtration, water softening, reverse osmosis drinking water systems, and well water treatment. We install the Watershield brand of filtration systems, chosen for their reliability, efficiency, and long service life. Every installation begins with a complimentary in-home water test so we can understand the unique water chemistry of your property and recommend the right solution rather than a one-size-fits-all approach.
        </p>
        <p>
          Pure Agua Enterprises proudly serves homeowners throughout Kissimmee, Orlando, St. Cloud, Celebration, Poinciana, Hunters Creek, Ocoee, Apopka, Clermont, Winter Haven, Lakeland, and Haines City. Whether your home is on city water or a private well, our experienced team can diagnose common Central Florida water issues such as hard water scale, chlorine taste, sulfur odor, iron staining, and elevated TDS levels. We back every system with a lifetime warranty on the control valve and tank, so your investment is protected for years to come.
        </p>
        <p>
          Choosing a water treatment company is a decision that affects your family&apos;s health and your home&apos;s plumbing. Pure Agua Enterprises makes that decision easy with transparent pricing, flexible financing options including plans with zero percent introductory rates, and a no-pressure consultation process. Call us today at (407) 773-2883 to schedule your free water test and discover why hundreds of Central Florida families trust Pure Agua with their water.
        </p>
      </div>
      <PageClient />
    </>
  );
}
