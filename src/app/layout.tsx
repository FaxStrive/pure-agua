import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { NavbarWithBanner } from "@/components/conversion/ConversionElements";
import { Footer } from "@/components/layout/Footer";
import { ChatWidget } from "@/components/layout/ChatWidget";
import { ExitIntentPopup } from "@/components/conversion/ExitIntentPopup";
import { SocialProofToast } from "@/components/conversion/SocialProofToast";
import { StickyBottomBar } from "@/components/conversion/StickyBottomBar";
import { FloatingCTA } from "@/components/conversion/FloatingCTA";
import { MobileCallBar } from "@/components/conversion/MobileCallBar";
import { ScrollRevealCTA } from "@/components/conversion/ScrollRevealCTA";
import { CornerOfferPeek } from "@/components/conversion/CornerOfferPeek";
import { TimedTopBar } from "@/components/conversion/TimedTopBar";

import SchemaMarkup from '@/components/seo/schema-markup';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://pureaguaenterprise.com'),

  title: {
    default: "Water Filtration & Softeners Kissimmee FL | Pure Agua",
    template: "%s | Pure Agua",
  },
  description:
    "Central Florida's trusted water filtration experts. Family-owned, serving Kissimmee and Orlando with whole-home water purification, reverse osmosis, and water softening systems. Get a free water test today.",
  keywords:
    "water filtration Orlando, water purification Kissimmee, reverse osmosis Central Florida, water softener Orlando, whole home water filter, Pure Agua Enterprises",
  openGraph: {
    title: "Pure Agua Enterprises | Central Florida Water Filtration",
    description:
      "Family-owned water filtration experts serving Kissimmee and Orlando, FL. Schedule your free water test today.",
    type: "website",
    locale: "en_US",
    url: "https://pureaguaenterprise.com",
    siteName: "Pure Agua Enterprises",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pure Agua Enterprises - Central Florida Water Filtration",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pure Agua Enterprises | Central Florida Water Filtration",
    description:
      "Family-owned water filtration experts serving Kissimmee and Orlando, FL. Free water test.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const dynamic = "force-dynamic";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" as="image" href="/images/hero-bg.jpg" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17998364551"
          strategy="afterInteractive"
        />
        <meta name="msvalidate.01" content="BING_VERIFICATION_ID_HERE" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HomeAndConstructionBusiness",
              "@id": "https://pureaguaenterprise.com/#business",
              name: "Pure Agua Enterprises",
              description: "Pure Agua Enterprises is a family-owned water filtration company serving Kissimmee, Orlando, and Central Florida with whole-home water purification, reverse osmosis, and water softening systems.",
              url: "https://pureaguaenterprise.com",
              telephone: "+14077732883",
              email: "info@pureaguaenterprise.com",
              priceRange: "$",
              image: "https://pureaguaenterprise.com/images/og-image.png",
              logo: "https://pureaguaenterprise.com/images/pure-agua-logo.png",
              address: {
                "@type": "PostalAddress",
                streetAddress: "3705 Eagle Isle Circle",
                addressLocality: "Kissimmee",
                addressRegion: "FL",
                postalCode: "34746",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 28.2919,
                longitude: -81.4076,
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                reviewCount: "200",
                bestRating: "5",
                worstRating: "1",
              },
              hasCredential: [
                { "@type": "EducationalOccupationalCredential", credentialCategory: "certification", name: "NSF/ANSI 58 Certified Systems" },
                { "@type": "EducationalOccupationalCredential", credentialCategory: "certification", name: "NSF/ANSI 61 Certified Systems" },
                { "@type": "EducationalOccupationalCredential", credentialCategory: "membership", name: "WQA Member" },
                { "@type": "EducationalOccupationalCredential", credentialCategory: "license", name: "FL State Licensed & Insured" },
              ],
              sameAs: [
                "https://www.facebook.com/pureaguaenterprise",
                "https://www.instagram.com/pureaguaenterprise",
                "https://www.youtube.com/@pureaguaenterprise",
                "https://x.com/pureaguafl",
                "https://www.linkedin.com/company/pureaguaenterprise",
                "https://www.google.com/maps/place/Pure+Agua+Enterprise",
              ],
            }),
          }}
        />
        <Script id="google-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17998364551');
          `}
        </Script>
        <Script id="gtag-conversion" strategy="afterInteractive">
          {`
            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };
              gtag('event', 'conversion', {
                'send_to': 'AW-17998364551/9oQ3CLqo94UcEIf_pIZD',
                'value': 1.0,
                'currency': 'USD',
                'event_callback': callback
              });
              return false;
            }
          `}
        </Script>
        <Script id="ga4-events" strategy="afterInteractive">
          {`
            document.addEventListener('click', function(e) {
              var el = e.target.closest('a[href^="tel:"]');
              if (el) {
                gtag('event', 'phone_click', {
                  event_category: 'conversion',
                  event_label: el.getAttribute('href'),
                  value: 1
                });
              }
              var cta = e.target.closest('a[href="/contact"], button[type="submit"]');
              if (cta) {
                gtag('event', 'cta_click', {
                  event_category: 'conversion',
                  event_label: cta.textContent.trim().substring(0, 50),
                  value: 1
                });
              }
            });
            document.addEventListener('submit', function(e) {
              if (e.target.tagName === 'FORM') {
                gtag('event', 'form_submission', {
                  event_category: 'conversion',
                  event_label: e.target.action || window.location.pathname,
                  value: 1
                });
              }
            });
          `}
        </Script>
      </head>
      <body className="antialiased overflow-x-hidden pb-16 lg:pb-0">
        <NavbarWithBanner />
        <SchemaMarkup />
        {children}
        <Footer />
        <ChatWidget />
        <ExitIntentPopup />
        <SocialProofToast />
        <StickyBottomBar />
        <FloatingCTA />
        <MobileCallBar />
        <ScrollRevealCTA />
        <CornerOfferPeek />
        <TimedTopBar />

</body>
    </html>
  );
}
