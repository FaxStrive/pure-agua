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
    default: "Pure Agua Enterprises | Central Florida Water Filtration",
    template: "%s | Pure Agua Enterprises",
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
      </head>
      <body className="antialiased overflow-x-hidden">
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

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "LocalBusiness",
                    "name": "Pure Agua Enterprises",
                    "description": "Pure Agua Enterprises provides professional water filtration, water softeners, and reverse osmosis systems . Clean, healthy water for your home or business.",
                    "url": "https://pureaguaenterprise.com",
                    "telephone": "1799836455",
                    "priceRange": "$$",
                    "image": "https://pureaguaenterprise.com/images/og-image.png",
                    "address": {
                              "@type": "PostalAddress",
                              "streetAddress": {},
                              "addressLocality": "",
                              "addressRegion": "",
                              "postalCode": "",
                              "addressCountry": "US"
                    },
                    "areaServed": [
                              {
                                        "@type": "City",
                                        "name": "Florida"
                              }
                    ],
                    "openingHoursSpecification": [
                              {
                                        "@type": "OpeningHoursSpecification",
                                        "dayOfWeek": [
                                                  "Monday",
                                                  "Tuesday",
                                                  "Wednesday",
                                                  "Thursday",
                                                  "Friday"
                                        ],
                                        "opens": "08:00",
                                        "closes": "18:00"
                              },
                              {
                                        "@type": "OpeningHoursSpecification",
                                        "dayOfWeek": [
                                                  "Saturday"
                                        ],
                                        "opens": "08:00",
                                        "closes": "14:00"
                              }
                    ],
                    "makesOffer": [
                              {
                                        "@type": "Offer",
                                        "itemOffered": {
                                                  "@type": "Service",
                                                  "name": "Water Softener",
                                                  "description": "Professional Water Softener services in ."
                                        }
                              },
                              {
                                        "@type": "Offer",
                                        "itemOffered": {
                                                  "@type": "Service",
                                                  "name": "Reverse Osmosis",
                                                  "description": "Professional Reverse Osmosis services in ."
                                        }
                              },
                              {
                                        "@type": "Offer",
                                        "itemOffered": {
                                                  "@type": "Service",
                                                  "name": "Water Filtration",
                                                  "description": "Professional Water Filtration services in ."
                                        }
                              },
                              {
                                        "@type": "Offer",
                                        "itemOffered": {
                                                  "@type": "Service",
                                                  "name": "Water Testing",
                                                  "description": "Professional Water Testing services in ."
                                        }
                              },
                              {
                                        "@type": "Offer",
                                        "itemOffered": {
                                                  "@type": "Service",
                                                  "name": "Water Treatment",
                                                  "description": "Professional Water Treatment services in ."
                                        }
                              },
                              {
                                        "@type": "Offer",
                                        "itemOffered": {
                                                  "@type": "Service",
                                                  "name": "Well Water Treatment",
                                                  "description": "Professional Well Water Treatment services in ."
                                        }
                              }
                    ]
          }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "WebSite",
                    "name": "Pure Agua Enterprises",
                    "url": "https://pureaguaenterprise.com",
                    "potentialAction": {
                              "@type": "SearchAction",
                              "target": "https://pureaguaenterprise.com/?s={search_term_string}",
                              "query-input": "required name=search_term_string"
                    }
          }),
          }}
        />
</body>
    </html>
  );
}
