import type { Metadata } from "next";
import dynamic from "next/dynamic";

const PageClient = dynamic(() => import("./PageClient"), { ssr: false });

export const metadata: Metadata = {
  title: "Water Filtration Questions & Answers FAQ",
  description:
    "Find answers to common questions about water filtration, installation, pricing, and maintenance from Pure Agua Enterprises in Kissimmee and Orlando, FL.",
  alternates: {
    canonical: "https://pureaguaenterprise.com/faq",
  },
  openGraph: {
    title: "Water Filtration Questions & Answers FAQ | Pure Agua",
    description: "Common questions about water filtration, pricing, and installation in Central Florida answered by Pure Agua experts.",
    url: "https://pureaguaenterprise.com/faq",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "FAQ - Pure Agua Enterprises" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Water Filtration Questions & Answers FAQ | Pure Agua",
    description: "Common questions about water filtration answered by Central Florida experts.",
    images: ["/images/og-image.png"],
  },
};

export default function FAQPage() {
  return (
    <>
      {/* Server-rendered SEO content for crawlers */}
      <div className="sr-only">
        <h1>Frequently Asked Questions About Water Filtration and Treatment in Central Florida</h1>
        <p>
          Homeowners across Kissimmee, Orlando, and Central Florida commonly ask about the differences between water filtration, water softening, and reverse osmosis. A whole-home water filtration system removes chlorine, sediment, volatile organic compounds, and other contaminants from every faucet in your house. A water softener specifically addresses hard water by removing calcium and magnesium minerals that cause scale buildup on pipes, fixtures, and appliances. A reverse osmosis system provides the highest level of purification for drinking water, removing up to 99 percent of dissolved contaminants including PFAS, lead, arsenic, and nitrates. Pure Agua Enterprises installs all three types and often recommends combining systems for comprehensive protection.
        </p>
        <p>
          Many customers ask how they can tell if their water needs treatment. Common signs include white scale deposits on faucets and showerheads, a chlorine taste or smell from the tap, dry skin and hair after bathing, spots on dishes after washing, reddish-brown stains from iron, a rotten egg odor from sulfur, and consistently high water bills from inefficient appliances caused by mineral buildup. If you notice any of these issues, a free water test from Pure Agua will identify exactly what is in your water and which treatment approach will solve the problem.
        </p>
        <p>
          Installation timeline and cost are also frequent questions. Most water treatment system installations take between two and four hours with minimal disruption to your daily routine. Pure Agua Enterprises provides transparent, written estimates after the free water test so there are no surprises. We offer flexible financing options including plans with zero percent introductory rates and no money down to make clean water affordable for every household. Every system comes backed by a lifetime warranty on the control valve and tank.
        </p>
        <p>
          Regarding maintenance, most whole-home filters require media replacement every five to seven years, water softeners need periodic salt refills, and reverse osmosis membranes and filters are typically replaced annually. Pure Agua Enterprises provides ongoing support and maintenance guidance after installation. Our Watershield brand systems are NSF/ANSI 58 and 61 certified, and we are a Water Quality Association member company, licensed and insured for all residential water treatment work in Florida. Call (407) 512-8342 to get your specific questions answered by our expert team.
        </p>
      </div>
      <PageClient />
    </>
  );
}
