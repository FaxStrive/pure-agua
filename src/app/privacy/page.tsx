import type { Metadata } from "next";
import dynamic from "next/dynamic";

const PageClient = dynamic(() => import("./PageClient"), { ssr: false });

export const metadata: Metadata = {
  title: "Privacy Policy for Website & SMS Users | Pure Agua",
  description:
    "Privacy Policy for Pure Agua Enterprises. Learn how we collect, use, and protect your personal information including SMS and text messaging data.",
  alternates: {
    canonical: "https://pureaguaenterprise.com/privacy",
  },
  openGraph: {
    title: "Privacy Policy for Website & SMS Users | Pure Agua",
    description: "Learn how Pure Agua Enterprises collects, uses, and protects your personal information.",
    url: "https://pureaguaenterprise.com/privacy",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Pure Agua Enterprises Privacy Policy" }],
  },
};

export default function PrivacyPage() {
  return (
    <>
      {/* Server-rendered SEO content for crawlers */}
      <div className="sr-only">
        <h1>Privacy Policy - Pure Agua Enterprises</h1>
        <p>
          Pure Agua Enterprises, located at 3705 Eagle Isle Circle, Kissimmee, FL 34746, is committed to protecting the privacy and personal information of our website visitors and customers. This privacy policy explains how we collect, use, store, and safeguard your data when you visit our website, request a free water test, submit a contact form, or communicate with us via phone, email, or SMS text messaging. We do not sell, rent, or share your personal information with third-party marketers.
        </p>
        <p>
          When you interact with Pure Agua Enterprises, we may collect information such as your name, phone number, email address, home address, and details about your water quality concerns. This information is used solely to provide you with water treatment consultations, schedule service appointments, deliver estimates, and communicate about your account or requested services. If you opt in to receive SMS or text messages from us, standard messaging rates from your carrier may apply, and you may opt out at any time by replying STOP to any message.
        </p>
        <p>
          Our website may use cookies, analytics tools, and similar technologies to understand how visitors use our pages, improve site performance, and deliver relevant content. We implement reasonable security measures to protect your data against unauthorized access, alteration, or disclosure. For questions about this privacy policy or to request deletion of your personal information, contact Pure Agua Enterprises at (407) 773-2883 or visit our office in Kissimmee, Florida. This policy may be updated periodically to reflect changes in our practices or applicable regulations.
        </p>
      </div>
      <PageClient />
    </>
  );
}
