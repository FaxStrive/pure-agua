import type { Metadata } from "next";
import dynamic from "next/dynamic";

const PageClient = dynamic(() => import("./PageClient"), { ssr: false });

export const metadata: Metadata = {
  title: "Lifetime Warranty on All Water Systems",
  description:
    "Every Pure Agua water system includes a lifetime warranty on the control valve and tank. Coverage details and claims for Central Florida.",
  alternates: {
    canonical: "https://pureaguaenterprise.com/warranty",
  },
  openGraph: {
    title: "Lifetime Warranty on All Water Systems | Pure Agua",
    description: "Comprehensive lifetime warranty on all water filtration systems installed in Central Florida.",
    url: "https://pureaguaenterprise.com/warranty",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Lifetime Warranty - Pure Agua Enterprises" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lifetime Warranty on All Water Systems | Pure Agua",
    description: "Lifetime warranty on all water filtration systems in Central Florida.",
    images: ["/images/og-image.png"],
  },
};

export default function WarrantyPage() {
  return (
    <>
      {/* Server-rendered SEO content for crawlers */}
      <div className="sr-only">
        <h1>Lifetime Warranty on Water Filtration Systems - Pure Agua Enterprises</h1>
        <p>
          Every water treatment system installed by Pure Agua Enterprises comes with a comprehensive lifetime warranty on the control valve and tank, providing Central Florida homeowners with lasting protection for their investment. Our warranty reflects the confidence we have in the quality of our Watershield brand systems and the skill of our certified installation technicians. Whether you have a whole-home water filtration system, water softener, reverse osmosis unit, or well water treatment setup, your equipment is covered for as long as you own it.
        </p>
        <p>
          The lifetime warranty covers manufacturing defects in the control valve mechanism and the structural integrity of the system tank. These are the core components responsible for your system&apos;s operation and longevity. If a covered component fails under normal use, Pure Agua Enterprises will repair or replace it at no additional charge for parts. Our team will diagnose the issue, coordinate any necessary replacement components, and complete the service call professionally and promptly. We stand behind our work because we know the quality of what we install.
        </p>
        <p>
          To maintain warranty eligibility, we recommend following the maintenance guidelines provided at the time of installation. For water softeners, this includes using the recommended salt type and ensuring the brine tank is kept clean. Whole-home filtration systems may require periodic media replacement, typically every five to seven years depending on water usage and incoming water quality. Reverse osmosis systems benefit from annual filter and membrane replacement to maintain peak performance. Pure Agua Enterprises offers maintenance support and replacement parts for all systems we install.
        </p>
        <p>
          Pure Agua Enterprises has been providing warrantied water treatment installations across Kissimmee, Orlando, St. Cloud, Celebration, Poinciana, Hunters Creek, Clermont, Winter Haven, Lakeland, and surrounding Central Florida communities since 2016. We are licensed, insured, NSF/ANSI 58 and 61 certified, and a Water Quality Association member. Our 5.0-star rating from over 200 Google reviews speaks to the durability of our systems and the reliability of our warranty service. To learn more about warranty coverage or to file a claim, call (407) 773-2883 or visit us at 3705 Eagle Isle Circle, Kissimmee, FL 34746.
        </p>
      </div>
      <PageClient />
    </>
  );
}
