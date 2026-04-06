import type { Metadata } from "next";
import dynamic from "next/dynamic";

const PageClient = dynamic(() => import("./PageClient"), { ssr: false });

export const metadata: Metadata = {
  title: "Customer Reviews - 5 Star Water Service",
  description:
    "Read real reviews from Central Florida families who trust Pure Agua for water filtration. 5-star rated with 200+ happy customers in Kissimmee and Orlando.",
  alternates: {
    canonical: "https://pureaguaenterprise.com/testimonials",
  },
  openGraph: {
    title: "Customer Reviews - 5 Star Water Service | Pure Agua",
    description: "5-star rated with 200+ happy customers. Read reviews from Central Florida families.",
    url: "https://pureaguaenterprise.com/testimonials",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Customer Reviews - Pure Agua Enterprises" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Customer Reviews - 5 Star Water Service | Pure Agua",
    description: "5-star rated water filtration in Central Florida. 200+ happy customers.",
    images: ["/images/og-image.png"],
  },
};

export default function TestimonialsPage() {
  return (
    <>
      {/* Server-rendered SEO content for crawlers */}
      <div className="sr-only">
        <h1>Customer Reviews and Testimonials - Pure Agua Enterprises Water Filtration</h1>
        <p>
          Pure Agua Enterprises is proud to maintain a perfect 5.0-star rating across more than 200 verified Google reviews from homeowners throughout Kissimmee, Orlando, St. Cloud, Celebration, Poinciana, and the greater Central Florida area. Our customer testimonials reflect the quality of our water treatment installations, the professionalism of our technicians, and the genuine improvement families experience in their daily water quality. From softer skin and hair to better-tasting drinking water and the elimination of hard water scale, our customers consistently report life-changing results.
        </p>
        <p>
          Customers frequently highlight the transparency of our process as a key differentiator. Every engagement begins with a free in-home water test where we show you exactly what is in your water using professional testing equipment. There is no high-pressure sales approach and no hidden costs. Our written estimates detail exactly what system is recommended, why it is the right fit for your water chemistry, and what the total installed price will be. This honest, educational approach is a major reason families across Central Florida choose Pure Agua over larger corporate competitors.
        </p>
        <p>
          Many of our five-star reviews come from homeowners who had previously tried other solutions, from pitcher filters and refrigerator filters to systems installed by other companies, before finding lasting success with Pure Agua. Our Watershield brand systems are NSF/ANSI 58 and 61 certified and designed for the specific water conditions found in Central Florida, including high hardness levels, chlorine from municipal treatment, and iron or sulfur in well water. Customers regularly praise the noticeable difference in water quality from the very first day the system is operational.
        </p>
        <p>
          As a family-owned company operating from Kissimmee since 2016, Pure Agua Enterprises treats every customer like a neighbor. Our reviews frequently mention our responsive customer service, clean and professional installation work, and willingness to answer questions long after the system has been installed. We back every system with a lifetime warranty on the control valve and tank and offer flexible financing options to make clean water accessible to every household. Read what our customers have to say, then call (407) 773-2883 to schedule your own free water test and experience the Pure Agua difference.
        </p>
      </div>
      <PageClient />
    </>
  );
}
