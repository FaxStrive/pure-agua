"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import Link from "next/link";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import MagneticWrapper from "@/components/animations/magnetic-wrapper";
import { translations } from "@/lib/i18n/translations";
import { trackPhoneConversion } from "@/lib/gtag";

export function FAQContactCTA() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });
  const t = translations.faqPage.contactCta;

  return (
    <section ref={ref} className="relative py-20 lg:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[var(--color-dark)]" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 20% 50%, rgba(0,159,227,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 50% at 80% 30%, rgba(59,214,245,0.08) 0%, transparent 60%)",
        }}
      />
      {/* Flowing diagonal accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(160deg, transparent 40%, rgba(59,214,245,0.04) 50%, transparent 60%)",
        }}
      />

      <div className="relative container-custom text-center z-10">
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
            {t.heading}
          </h2>
          <p className="text-lg text-white/60 mb-10 leading-relaxed">
            {t.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <MagneticWrapper strength={0.3}>
              <Link href="/contact">
                <ShimmerButton
                  shimmerColor="#3BD6F5"
                  background="white"
                  borderRadius="100px"
                  glowColor="rgba(255,255,255,0.2)"
                  className="!text-[var(--color-dark)] text-sm font-semibold px-8 py-4 group"
                >
                  {t.email}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </ShimmerButton>
              </Link>
            </MagneticWrapper>

            <a href="tel:+14077732883" onClick={() => trackPhoneConversion()}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-full px-8 py-4 text-sm font-semibold border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                {t.phone}
              </motion.div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
