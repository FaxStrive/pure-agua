import type { Metadata } from "next";
import dynamic from "next/dynamic";

const PageClient = dynamic(() => import("./PageClient"), { ssr: false });

export const metadata: Metadata = {
  title: "Terms of Service & User Agreement Info",
  description:
    "Terms of Service for Pure Agua Enterprises. Review our terms including SMS/text messaging policies, service agreements, and user responsibilities.",
  alternates: {
    canonical: "https://pureaguaenterprise.com/terms",
  },
  openGraph: {
    title: "Terms of Service & User Agreement Info | Pure Agua",
    description: "Review Pure Agua Enterprises terms of service, SMS policies, and service agreements.",
    url: "https://pureaguaenterprise.com/terms",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Pure Agua Enterprises Terms of Service" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service & User Agreement Info | Pure Agua",
    description: "Terms of Service for Pure Agua Enterprises. Review our terms including SMS/text messaging policies, service agreements, and user responsibilities.",
    images: ["/images/og-image.png"],
  },
};

export default function TermsPage() {
  return (
    <>
      {/* Server-rendered SEO content for crawlers */}
      <div className="sr-only">
        <h1>Terms of Service - Pure Agua Enterprises</h1>
        <p>
          These terms of service govern your use of the Pure Agua Enterprises website and the water treatment services we provide to residential customers throughout Central Florida. Pure Agua Enterprises is a family-owned water treatment company located at 3705 Eagle Isle Circle, Kissimmee, FL 34746. By using our website, scheduling a water test, or purchasing a water treatment system, you agree to abide by the terms and conditions outlined in this agreement. We reserve the right to update these terms as needed, and continued use of our services constitutes acceptance of any modifications.
        </p>
        <p>
          Our water treatment services include complimentary in-home water testing, professional system installation, and ongoing customer support. Pricing for water filtration systems, water softeners, reverse osmosis units, and well water treatment equipment is provided through written estimates following a water test. Installation timelines, warranty coverage, and financing terms are detailed in the individual service agreement you receive at the time of purchase. All installations are performed by licensed and insured technicians in accordance with Florida building codes and industry best practices.
        </p>
        <p>
          If you opt in to receive SMS or text messages from Pure Agua Enterprises, you consent to receive service-related communications including appointment reminders, follow-up messages, and promotional offers. Message and data rates from your wireless carrier may apply. You may opt out of text messaging at any time by replying STOP to any message. Pure Agua Enterprises does not sell or share your phone number or personal information with third-party marketers. For questions about these terms, contact us at (407) 773-2883 or visit our Kissimmee office during business hours.
        </p>
      </div>
      <PageClient />
    </>
  );
}
