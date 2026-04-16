import { Hero } from "@/components/sections/Hero";
import { TrustBadgeBar } from "@/components/sections/shared/TrustBadgeBar";
import { Stats } from "@/components/sections/Stats";
import { WaterQualityChecker } from "@/components/sections/WaterQualityChecker";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { SystemQuiz } from "@/components/sections/shared/SystemQuiz";
import { AnnualSavings } from "@/components/sections/AnnualSavings";
import { WaterBottleSavings } from "@/components/sections/WaterBottleSavings";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { SocialFeed } from "@/components/sections/shared/SocialFeed";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import InlineCTA from "@/components/InlineCTA";

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Water Filtration & Softeners Kissimmee FL',
  description: 'Pure Agua Enterprises provides water filtration, softeners, and reverse osmosis in Kissimmee and Orlando FL. Free in-home water test. Call (407) 512-8342 today.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Water Filtration & Softeners Kissimmee FL | Pure Agua',
    description: 'Family-owned water filtration experts serving Kissimmee and Orlando. Free in-home water test available.',
    url: 'https://pureaguaenterprise.com',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'Pure Agua Enterprises - Central Florida Water Filtration and Softener Experts' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Water Filtration & Softeners Kissimmee FL | Pure Agua',
    description: 'Family-owned water filtration experts in Kissimmee and Orlando FL. Free in-home water test. Call (407) 512-8342.',
    images: ['/images/og-image.png'],
  },
};




export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBadgeBar />
      <Stats />
      <WaterQualityChecker />
      <Services />
      <InlineCTA variant="banner" text="Ready to Improve Your Water?" message="Get a free, no-obligation water test and find out exactly what's in your water." />
      <Process />
      <SystemQuiz />
      <InlineCTA variant="button" text="Schedule Your Free Water Test" trustLine="500+ families served in Central Florida" />
      <AnnualSavings />
      <WaterBottleSavings />
      <InlineCTA variant="text" text="See how much you could save with clean water" />
      <AboutPreview />
      <SocialFeed />
      <InlineCTA variant="banner" text="Your Family Deserves Better Water" message="Professional installation with financing available. Call 407-512-8342." />
      <Testimonials />
      <FAQ />
      <CTA />
    </main>
  );
}
