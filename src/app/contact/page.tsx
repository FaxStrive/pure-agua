import type { Metadata } from "next";
import dynamic from "next/dynamic";

const PageClient = dynamic(() => import("./PageClient"), { ssr: false });

export const metadata: Metadata = {
  title: "Contact Us - Schedule a Free Water Test",
  description:
    "Schedule your free in-home water test today. Call (407) 773-2883 or contact Pure Agua Enterprises serving Kissimmee and Orlando, FL. No obligation.",
  alternates: {
    canonical: "https://pureaguaenterprise.com/contact",
  },
  openGraph: {
    title: "Contact Us - Schedule a Free Water Test | Pure Agua",
    description: "Schedule your free in-home water test. Call (407) 773-2883. Serving Kissimmee and Orlando, FL.",
    url: "https://pureaguaenterprise.com/contact",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Contact Pure Agua Enterprises for a Free Water Test in Central Florida" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - Schedule a Free Water Test | Pure Agua",
    description: "Schedule your free in-home water test in Central Florida. Call (407) 773-2883.",
    images: ["/images/og-image.png"],
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Server-rendered SEO content for crawlers */}
      <div className="sr-only">
        <h1>Contact Pure Agua Enterprises - Schedule Your Free In-Home Water Test</h1>
        <p>
          Getting started with Pure Agua Enterprises is easy. Call us directly at (407) 773-2883 or fill out our online contact form to schedule a complimentary in-home water test. There is no obligation and no sales pressure. One of our certified technicians will visit your home, test your water for hardness, chlorine, TDS, iron, sulfur, pH, and other contaminants common in Central Florida, and provide a detailed water quality report along with a written estimate for any recommended treatment solutions.
        </p>
        <p>
          Our office is located at 3705 Eagle Isle Circle, Kissimmee, FL 34746, and we serve homeowners throughout Kissimmee, Orlando, St. Cloud, Celebration, Poinciana, Hunters Creek, Ocoee, Apopka, Clermont, Winter Haven, Lakeland, Haines City, and surrounding communities in Osceola, Orange, Polk, Seminole, and Lake counties. Whether your home is connected to city water or relies on a private well, our team has the expertise and equipment to address your specific water quality concerns.
        </p>
        <p>
          Pure Agua Enterprises is a family-owned company that has been serving Central Florida since 2016. We are fully licensed, insured, and hold NSF/ANSI 58 and 61 certifications as well as Water Quality Association membership. Our 5.0-star rating from more than 200 Google reviews reflects our commitment to honest service, professional installations, and long-term customer relationships. We install Watershield brand water filtration systems including whole-home filters, water softeners, reverse osmosis drinking water systems, and well water treatment equipment.
        </p>
        <p>
          Flexible financing options are available for qualifying homeowners, including plans with zero percent introductory rates and no money down. Every system we install comes with a lifetime warranty on the control valve and tank, giving you peace of mind that your investment is protected. Do not wait to discover what is in your water. Contact Pure Agua Enterprises today at (407) 773-2883 and take the first step toward cleaner, healthier water for your entire home.
        </p>
      </div>
      <PageClient />
    </>
  );
}
