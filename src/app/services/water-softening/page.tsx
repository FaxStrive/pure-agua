import type { Metadata } from "next";
import dynamic from "next/dynamic";

const PageClient = dynamic(() => import("./PageClient"), { ssr: false });

export const metadata: Metadata = {
  title: "Water Softener Systems for FL Hard Water | Pure Agua",
  description:
    "End hard water problems in Kissimmee and Orlando with salt-based and salt-free water softeners. Protect pipes and appliances. Free water test.",
  alternates: {
    canonical: "https://pureaguaenterprise.com/services/water-softening",
  },
  openGraph: {
    title: "Water Softener Systems for FL Hard Water | Pure Agua",
    description: "Salt-based and salt-free water softeners for Central Florida homes. End hard water problems. Free water test in Kissimmee and Orlando.",
    url: "https://pureaguaenterprise.com/services/water-softening",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Water Softening Systems - Pure Agua Enterprises" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Water Softener Systems for FL Hard Water | Pure Agua",
    description: "End hard water problems in Central Florida. Salt-based and salt-free water softeners.",
    images: ["/images/og-image.png"],
  },
};

export default function WaterSofteningPage() {
  return (
    <>
      {/* Server-rendered SEO content for crawlers */}
      <div className="sr-only">
        <h1>Water Softener Systems for Hard Water in Kissimmee, Orlando, and Central Florida</h1>
        <p>
          Hard water is one of the most widespread water quality problems affecting homes in Kissimmee, Orlando, and across Central Florida. With hardness levels routinely measuring between 15 and 25 grains per gallon in Osceola and Orange counties, the dissolved calcium and magnesium in untreated water causes white scale buildup on faucets and showerheads, reduces the efficiency and lifespan of water heaters and appliances, leaves spots on dishes and glassware, and makes soap and shampoo less effective. Pure Agua Enterprises installs Watershield water softener systems engineered to eliminate hard water problems and protect your home&apos;s plumbing infrastructure.
        </p>
        <p>
          We offer both salt-based ion exchange water softeners and salt-free water conditioning systems to suit different household preferences and needs. Traditional salt-based softeners work by exchanging calcium and magnesium ions for sodium ions, producing genuinely soft water that feels noticeably different on your skin and hair. Salt-free conditioners use template-assisted crystallization to prevent scale formation without adding sodium, making them a popular choice for homeowners on sodium-restricted diets or those who prefer a maintenance-free approach. Our certified technicians will recommend the right type based on your water test results, household size, and personal preferences.
        </p>
        <p>
          The financial benefits of water softening extend well beyond comfort. Hard water costs the average Central Florida household hundreds of dollars per year through premature water heater failure, increased energy consumption from scale-insulated heating elements, higher soap and detergent usage, and plumbing repairs caused by mineral deposits in pipes and valves. A properly sized water softener pays for itself over time by protecting these investments and reducing ongoing household expenses. Our Watershield systems are built for the demanding conditions of Florida water and carry NSF/ANSI 61 certification for material safety.
        </p>
        <p>
          Pure Agua Enterprises has been solving hard water problems for Central Florida families since 2016. Our process begins with a complimentary in-home water test that measures hardness, TDS, iron, and other relevant parameters. Based on the results, we provide a written estimate for a system sized to your home and water usage. Installation typically takes two to three hours and includes connection to your main water line, programming of the control valve, and a thorough walkthrough of system operation. Every softener comes with a lifetime warranty on the control valve and tank, and financing options are available. Call (407) 773-2883 to schedule your free water test today.
        </p>
      </div>
      <PageClient />
    </>
  );
}
