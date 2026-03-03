"use client";

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
    </main>
  );
}
