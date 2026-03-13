"use client";

import Script from "next/script";
import { ContactHero } from "@/components/sections/contact/ContactHero";
import { ContactForm } from "@/components/sections/contact/ContactForm";
import { ServiceArea } from "@/components/sections/contact/ServiceArea";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";

export default function ContactPageClient() {
  return (
    <main>
      <ContactHero />
      <ContactForm />
      <ServiceArea />
      <Testimonials />
      <FAQ />
      <Script
        src="https://widgets.leadconnectorhq.com/loader.js"
        data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
        data-widget-id="69b357730eb19904b6471bcf"
        strategy="lazyOnload"
      />
    </main>
  );
}
