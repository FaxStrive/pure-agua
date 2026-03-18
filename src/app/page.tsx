"use client";

import { Hero } from "@/components/sections/Hero";
import { TrustBadgeBar } from "@/components/sections/shared/TrustBadgeBar";
import { Stats } from "@/components/sections/Stats";
import { WaterQualityChecker } from "@/components/sections/WaterQualityChecker";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { SystemQuiz } from "@/components/sections/shared/SystemQuiz";
import { WaterBottleSavings } from "@/components/sections/WaterBottleSavings";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { SocialFeed } from "@/components/sections/shared/SocialFeed";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pure Agua Enterprises | Central Florida Water Filtration',
  description: 'Central Florida\'s trusted water filtration experts. Family-owned, serving Kissimmee and Orlando with whole-home filtration, reverse osmosis, and water softening. Get a free water test today.',
  alternates: {
    canonical: 'https://pureaguaenterprise.com',
  },
  openGraph: {
    title: 'Pure Agua Enterprises | Central Florida Water Filtration',
    description: 'Family-owned water filtration experts serving Kissimmee and Orlando, FL. Free in-home water test included.',
    url: 'https://pureaguaenterprise.com',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'Pure Agua Enterprises - Central Florida Water Filtration' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pure Agua Enterprises | Central Florida Water Filtration',
    description: 'Family-owned water filtration experts. Free in-home water test in Kissimmee and Orlando, FL.',
    images: ['/images/og-image.png'],
  },
};


export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What water treatment services does Pure Agua Enterprises offer?","acceptedAnswer":{"@type":"Answer","text":"Pure Agua Enterprises offers water filtration, water softeners, reverse osmosis systems, and water testing in your area."}},{"@type":"Question","name":"How do I know if I need a water softener?","acceptedAnswer":{"@type":"Answer","text":"Signs you need a water softener include hard water deposits on faucets, dry skin after bathing, and spots on dishes. Contact us for a free water test."}},{"@type":"Question","name":"How long does installation take?","acceptedAnswer":{"@type":"Answer","text":"Most water treatment system installations take 2–4 hours. Our technicians work efficiently to minimize disruption to your home."}}]}) }}
      />
      <Hero />
      <TrustBadgeBar />
      <Stats />
      <WaterQualityChecker />
      <Services />
      <Process />
      <SystemQuiz />
      <WaterBottleSavings />
      <AboutPreview />
      <SocialFeed />
      <Testimonials />
      <FAQ />
      <CTA />
    </main>
  );
}
