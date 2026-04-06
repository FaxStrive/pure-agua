import type { Metadata } from "next";
import dynamic from "next/dynamic";

const PageClient = dynamic(() => import("./PageClient"), { ssr: false });

export const metadata: Metadata = {
  title: "Whole Home Water Filtration in Kissimmee",
  description:
    "Whole home water filtration removing chlorine, sediment, and VOCs from every faucet. Professional installation in Kissimmee and Orlando, FL.",
  alternates: {
    canonical: "https://pureaguaenterprise.com/services/whole-home",
  },
  openGraph: {
    title: "Whole Home Water Filtration in Kissimmee | Pure Agua",
    description: "Complete point-of-entry water filtration for every faucet. Remove chlorine, sediment, and contaminants. Free water test in Central Florida.",
    url: "https://pureaguaenterprise.com/services/whole-home",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Whole Home Water Filtration - Pure Agua Enterprises" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Whole Home Water Filtration in Kissimmee | Pure Agua",
    description: "Complete point-of-entry water filtration for every faucet in Central Florida homes.",
    images: ["/images/og-image.png"],
  },
};

export default function WholeHomePage() {
  return (
    <>
      {/* Server-rendered SEO content for crawlers */}
      <div className="sr-only">
        <h1>Whole Home Water Filtration Systems for Kissimmee, Orlando, and Central Florida Homes</h1>
        <p>
          A whole-home water filtration system from Pure Agua Enterprises treats every gallon of water entering your house at the point of entry, ensuring that every faucet, shower, appliance, and outdoor spigot delivers clean, filtered water. Unlike point-of-use filters that only treat water at a single tap, whole-home filtration provides comprehensive protection throughout your entire plumbing system. Our Watershield whole-home systems are specifically designed for Central Florida water conditions and effectively remove chlorine, chloramines, sediment, volatile organic compounds, and other contaminants commonly found in Kissimmee, Orlando, and surrounding municipal water supplies.
        </p>
        <p>
          Chlorine is added to Central Florida municipal water as a disinfectant, but it leaves an unpleasant taste and smell that many homeowners find objectionable. More importantly, chlorine reacts with organic matter in water to form disinfection byproducts like trihalomethanes and haloacetic acids, which are linked to health concerns with long-term exposure. A whole-home carbon filtration system removes chlorine and its byproducts before the water reaches any fixture in your home, improving not just the taste of your drinking water but also the quality of the water you bathe in, wash clothes with, and use for cooking.
        </p>
        <p>
          The benefits of whole-home filtration extend to your home&apos;s infrastructure as well. By removing sediment and particulates at the point of entry, you protect water heaters, dishwashers, washing machines, ice makers, and plumbing fixtures from premature wear. Many homeowners pair a whole-home filter with a water softener for complete protection against both chemical contaminants and hard water minerals, creating a two-stage treatment approach that addresses the full spectrum of Central Florida water quality challenges.
        </p>
        <p>
          Pure Agua Enterprises installs whole-home filtration systems throughout Kissimmee, Orlando, St. Cloud, Celebration, Poinciana, Hunters Creek, Ocoee, Apopka, Clermont, and surrounding communities. Installation typically takes two to four hours and connects directly to your main water line, usually in the garage or utility area. Our systems are NSF/ANSI 61 certified for material safety and require minimal maintenance, with filter media lasting five to seven years under typical usage. Every installation includes a lifetime warranty on the control valve and tank, a free in-home water test, and access to financing options with zero percent introductory rates. Call Pure Agua at (407) 773-2883 to get started.
        </p>
      </div>
      <PageClient />
    </>
  );
}
