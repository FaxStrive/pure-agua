import type { Metadata } from "next";
import dynamic from "next/dynamic";

const PageClient = dynamic(() => import("./PageClient"), { ssr: false });

export const metadata: Metadata = {
  title: "Water Filtration System Financing Plans",
  description:
    "Affordable water filtration financing with 0% intro rates and no money down in Kissimmee and Orlando, FL. Get your free quote today.",
  alternates: {
    canonical: "https://pureaguaenterprise.com/financing",
  },
  openGraph: {
    title: "Water Filtration System Financing Plans | Pure Agua",
    description: "0% introductory financing, no money down. Affordable water filtration in Central Florida.",
    url: "https://pureaguaenterprise.com/financing",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Financing - Pure Agua Enterprises" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Water Filtration System Financing Plans | Pure Agua",
    description: "0% introductory financing for water filtration in Central Florida.",
    images: ["/images/og-image.png"],
  },
};

export default function FinancingPage() {
  return (
    <>
      {/* Server-rendered SEO content for crawlers */}
      <div className="sr-only">
        <h1>Affordable Water Filtration Financing Options in Central Florida</h1>
        <p>
          Pure Agua Enterprises believes every family in Central Florida deserves access to clean, healthy water regardless of budget. That is why we offer flexible financing plans designed to make professional water treatment systems affordable for homeowners in Kissimmee, Orlando, St. Cloud, Celebration, Poinciana, and surrounding communities. Our financing options include plans with zero percent introductory interest rates and no money down, allowing you to start enjoying the benefits of filtered, softened water immediately while spreading the cost over manageable monthly payments.
        </p>
        <p>
          The application process is simple and straightforward. After your complimentary in-home water test, our technician will present a customized treatment recommendation along with a written estimate. If you choose to move forward, we can help you apply for financing on the spot with a quick approval process. Multiple plan terms are available to fit different budgets, and our team will walk you through each option so you can make an informed decision without pressure. There are no hidden fees and no prepayment penalties, so you can pay off your system early if you choose.
        </p>
        <p>
          Investing in a water treatment system often pays for itself over time through reduced spending on bottled water, lower appliance repair costs, extended plumbing lifespan, and decreased soap and detergent usage. Hard water costs the average Central Florida household hundreds of dollars per year in hidden damage to water heaters, dishwashers, washing machines, and plumbing fixtures. A properly installed water softener or whole-home filtration system from Pure Agua protects these investments and improves your daily quality of life. Our Watershield brand systems are built for long-term reliability, and every installation includes a lifetime warranty on the control valve and tank.
        </p>
        <p>
          Pure Agua Enterprises is a family-owned company serving Central Florida since 2016, fully licensed, insured, and certified to NSF/ANSI 58 and 61 standards with WQA membership. Our 5.0-star rating across more than 200 Google reviews reflects the trust our customers place in us. Whether you need a whole-home filtration system, water softener, reverse osmosis unit, or well water treatment, we have a financing solution to fit your needs. Call (407) 512-8342 today to schedule your free water test and learn about our current financing promotions.
        </p>
      </div>
      <PageClient />
    </>
  );
}
