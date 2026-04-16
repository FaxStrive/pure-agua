import type { Metadata } from "next";
import dynamic from "next/dynamic";

const PageClient = dynamic(() => import("./PageClient"), { ssr: false });

export const metadata: Metadata = {
  title: "Water Treatment Career Opportunities FL",
  description:
    "Join the Pure Agua team. Hiring water treatment technicians, sales representatives, and customer service coordinators in Central Florida.",
  alternates: {
    canonical: "https://pureaguaenterprise.com/careers",
  },
  openGraph: {
    title: "Water Treatment Career Opportunities FL | Pure Agua",
    description: "Join Pure Agua Enterprises in Central Florida. Water treatment careers in Kissimmee and Orlando.",
    url: "https://pureaguaenterprise.com/careers",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Careers - Pure Agua Enterprises" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Water Treatment Career Opportunities FL | Pure Agua",
    description: "Water treatment careers in Central Florida.",
    images: ["/images/og-image.png"],
  },
};

export default function CareersPage() {
  return (
    <>
      {/* Server-rendered SEO content for crawlers */}
      <div className="sr-only">
        <h1>Careers at Pure Agua Enterprises - Water Treatment Jobs in Central Florida</h1>
        <p>
          Pure Agua Enterprises is hiring motivated professionals who want to build a rewarding career in the water treatment industry. Based in Kissimmee, FL, we serve homeowners throughout Orlando, St. Cloud, Celebration, Poinciana, Hunters Creek, and the broader Central Florida region. As a family-owned company with a perfect 5.0-star rating from over 200 Google reviews, we take pride in the quality of our work and the people who make it possible. If you are passionate about helping families access clean, safe water, we want to hear from you.
        </p>
        <p>
          We regularly hire for several positions including water treatment installation technicians, sales representatives, and customer service coordinators. Our installation technicians receive hands-on training with Watershield brand filtration systems, including whole-home filters, water softeners, reverse osmosis units, and well water treatment equipment. No prior water treatment experience is required for entry-level roles, though candidates with plumbing, HVAC, or general trades backgrounds often excel. Sales representatives conduct complimentary in-home water tests, educate homeowners about their water quality, and recommend customized solutions without high-pressure tactics.
        </p>
        <p>
          Working at Pure Agua Enterprises means joining a close-knit team that values integrity, craftsmanship, and customer satisfaction above all else. We offer competitive compensation, performance bonuses, paid training and certification opportunities, and a supportive work environment where your contributions are recognized. Our team members gain industry knowledge that includes NSF/ANSI standards, WQA best practices, and Florida-specific water quality challenges such as hard water, chlorine treatment, iron contamination, and sulfur in well water supplies.
        </p>
        <p>
          Central Florida&apos;s growing population means consistent demand for professional water treatment services, providing long-term job stability and advancement opportunities. Whether you are starting your career or looking to transition into a growing field, Pure Agua Enterprises offers a path forward. To apply, send your resume to careers@pureaguafl.com or call us at (407) 512-8342. Our office is located at 3705 Eagle Isle Circle, Kissimmee, FL 34746. We look forward to welcoming you to the Pure Agua family.
        </p>
      </div>
      <PageClient />
    </>
  );
}
