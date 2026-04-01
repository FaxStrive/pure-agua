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
  title: 'Page | Pure Agua Enterprises | Water Treatment Services',
  description: 'Pure Agua Enterprises serves your area with professional water treatment services. Contact us for a free estimate. Call 1799836455.',
  alternates: { canonical: '/' },
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
      <InlineCTA variant="banner" text="Ready to Improve Your Water?" message="Get a free, no-obligation water test and find out exactly what's in your water." />
      <Process />
      <SystemQuiz />
      <InlineCTA variant="button" text="Schedule Your Free Water Test" trustLine="500+ families served in Central Florida" />
      <AnnualSavings />
      <WaterBottleSavings />
      <InlineCTA variant="text" text="See how much you could save with clean water" />
      <AboutPreview />
      <SocialFeed />
      <InlineCTA variant="banner" text="Your Family Deserves Better Water" message="Professional installation with financing available. Call 407-773-2883." />
      <Testimonials />
      <FAQ />
      <CTA />
    </main>
  );
}
