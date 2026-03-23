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
