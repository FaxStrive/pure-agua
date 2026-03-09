"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";
import MagneticWrapper from "@/components/animations/magnetic-wrapper";
import { translations } from "@/lib/i18n/translations";

export function GoogleReviewsCTA() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const t = translations.testimonialsPage.googleCta;

  return (
    <section ref={ref} className="relative py-16 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(0,159,227,0.05) 0%, transparent 60%)",
        }}
      />

      <div className="relative container-custom">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Google stars */}
          <div className="flex justify-center gap-1 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-8 h-8 fill-amber-400 text-amber-400" />
            ))}
          </div>

          <h3 className="text-2xl lg:text-3xl font-bold text-[var(--color-foreground)] mb-3">
            {t.heading}
          </h3>
          <p className="text-[var(--color-muted)] mb-8">
            {t.description}
          </p>

          <MagneticWrapper strength={0.3}>
            <a
              href="https://www.google.com/maps/place/Pure+Agua+Enterprise"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[var(--color-primary)] text-white font-semibold text-sm hover:bg-[var(--color-secondary)] transition-colors shadow-lg shadow-[var(--color-primary)]/20"
            >
              {t.buttonText}
              <ExternalLink className="w-4 h-4" />
            </a>
          </MagneticWrapper>
        </motion.div>
      </div>
    </section>
  );
}
