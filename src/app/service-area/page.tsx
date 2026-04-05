import type { Metadata } from "next";
import dynamic from "next/dynamic";

const PageClient = dynamic(() => import("./PageClient"), { ssr: false });

export const metadata: Metadata = {
  title: "Service Areas - Kissimmee & Orlando FL | Pure Agua",
  description:
    "Pure Agua serves Osceola, Orange, Polk, Seminole, and Lake counties in Central Florida. Free water testing in Kissimmee and Orlando.",
  alternates: {
    canonical: "https://pureaguaenterprise.com/service-area",
  },
  openGraph: {
    title: "Service Areas - Kissimmee & Orlando FL | Pure Agua",
    description: "Water filtration services in Kissimmee, Orlando, St. Cloud, Celebration, and Central Florida.",
    url: "https://pureaguaenterprise.com/service-area",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Service Area - Pure Agua Enterprises" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Service Areas - Kissimmee & Orlando FL | Pure Agua",
    description: "Water filtration serving Kissimmee, Orlando, and Central Florida.",
    images: ["/images/og-image.png"],
  },
};

export default function ServiceAreaPage() {
  return (
    <>
      {/* Server-rendered SEO content for crawlers */}
      <div className="sr-only">
        <h1>Pure Agua Enterprises Service Area - Water Filtration Across Central Florida</h1>
        <p>
          Pure Agua Enterprises provides professional water treatment services throughout Central Florida, with primary coverage spanning Osceola County, Orange County, Polk County, Seminole County, and Lake County. Our headquarters at 3705 Eagle Isle Circle in Kissimmee, FL positions us centrally to serve homeowners in Kissimmee, Orlando, St. Cloud, Celebration, Poinciana, Hunters Creek, Ocoee, Apopka, Clermont, Winter Haven, Lakeland, and Haines City. We also serve many smaller communities and unincorporated areas within these counties.
        </p>
        <p>
          Water quality varies significantly across our service area due to differences in water sources, municipal treatment methods, and geological conditions. Homes in Kissimmee and Osceola County commonly experience hard water measuring 15 to 25 grains per gallon, along with chlorine taste and elevated TDS from the regional aquifer. Orlando and Orange County residents frequently deal with similar hardness levels plus sediment and occasional discoloration. Rural properties and homes on well water throughout Polk, Lake, and Seminole counties may face additional challenges including iron, sulfur, tannins, and bacteria that require specialized treatment approaches.
        </p>
        <p>
          Our certified technicians travel to your home for a complimentary water test that measures hardness, TDS, pH, chlorine, iron, sulfur, and other parameters relevant to your specific water source. Based on the results, we recommend the most effective treatment solution from our Watershield product line, whether that is a whole-home carbon filtration system, a water softener, an under-sink reverse osmosis unit, or a combination system for comprehensive protection. Every recommendation is customized to your water chemistry, household size, and plumbing configuration.
        </p>
        <p>
          Since 2016, Pure Agua Enterprises has earned the trust of more than 200 Central Florida families, maintaining a perfect 5.0-star Google rating through honest service, professional installations, and responsive aftercare. We are licensed, insured, NSF/ANSI 58 and 61 certified, and a proud member of the Water Quality Association. Every system includes a lifetime warranty on the control valve and tank, and financing options with zero percent introductory rates are available. If you are within our service area, call (407) 773-2883 to schedule your free water test.
        </p>
      </div>
      <PageClient />
    </>
  );
}
