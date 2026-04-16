import type { Metadata } from "next";
import dynamic from "next/dynamic";

const PageClient = dynamic(() => import("./PageClient"), { ssr: false });

export const metadata: Metadata = {
  title: "Before & After Water Treatment Results",
  description:
    "See real before and after water treatment results from Central Florida homes. TDS readings and installation photos. Free water test.",
  alternates: {
    canonical: "https://pureaguaenterprise.com/before-after",
  },
  openGraph: {
    title: "Before & After Water Treatment Results | Pure Agua",
    description: "Real before and after water filtration results from Central Florida homes.",
    url: "https://pureaguaenterprise.com/before-after",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Before & After - Pure Agua Enterprises" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Before & After Water Treatment Results | Pure Agua",
    description: "Real water filtration results from Central Florida homes.",
    images: ["/images/og-image.png"],
  },
};

export default function BeforeAfterPage() {
  return (
    <>
      {/* Server-rendered SEO content for crawlers */}
      <div className="sr-only">
        <h1>Before and After Water Treatment Results from Central Florida Homes</h1>
        <p>
          Seeing is believing. The before and after gallery from Pure Agua Enterprises showcases real water quality transformations in homes across Kissimmee, Orlando, St. Cloud, Celebration, and surrounding Central Florida communities. Each result tells the story of a family who went from struggling with hard water, discolored tap water, or foul-tasting drinking water to enjoying crystal-clear, professionally treated water from every faucet. Our documented TDS (total dissolved solids) readings, water color comparisons, and installation photographs provide transparent proof that our Watershield filtration systems deliver measurable improvement.
        </p>
        <p>
          Central Florida water presents unique challenges that many homeowners may not realize until they see the evidence. Municipal water supplies in Osceola and Orange counties often contain elevated levels of chlorine, sediment, and dissolved minerals that contribute to hard water buildup. Well water properties frequently deal with iron staining, hydrogen sulfide odor, and bacterial contamination. Our before and after results capture these issues with side-by-side water samples, showing the dramatic difference a properly sized whole-home filtration system, water softener, or reverse osmosis unit can make.
        </p>
        <p>
          Every transformation documented in our gallery began with a complimentary in-home water test performed by one of our certified technicians. During the test, we measure TDS, hardness grains per gallon, pH levels, chlorine concentration, and check for iron, sulfur, and other contaminants specific to Central Florida groundwater. The before reading is recorded, the appropriate system is installed, and the after reading confirms the improvement. Many of our customers see TDS reductions of over 90 percent with reverse osmosis and hardness levels drop to near zero with our water softening systems.
        </p>
        <p>
          Pure Agua Enterprises is a family-owned company operating from Kissimmee, FL since 2016. We hold NSF/ANSI 58 and 61 certifications, maintain WQA membership, and are fully licensed and insured. With a perfect 5.0-star rating from more than 200 Google reviews, our results speak for themselves. Browse our gallery to see what clean water looks like, then call (407) 512-8342 to schedule your own free water test and start your transformation.
        </p>
      </div>
      <PageClient />
    </>
  );
}
