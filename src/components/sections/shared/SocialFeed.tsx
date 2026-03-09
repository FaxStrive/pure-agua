"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";
import MagneticWrapper from "@/components/animations/magnetic-wrapper";
import { translations } from "@/lib/i18n/translations";

const t = translations.socialFeed;

// Top reviews to highlight
const featuredReviews = translations.testimonials.reviews.slice(0, 3);

export function SocialFeed() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="relative py-16 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0,159,227,0.03) 0%, transparent 60%)",
        }}
      />

      <div className="relative container-custom">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {/* Google logo + stars */}
          <div className="flex items-center justify-center gap-3 mb-3">
            <svg className="w-6 h-6" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-lg font-bold text-[var(--color-foreground)]">5.0</span>
          </div>
          <h3 className="text-2xl font-bold text-[var(--color-foreground)] mb-1">
            {t.heading}
          </h3>
          <p className="text-sm text-[var(--color-muted)]">{t.description}</p>
        </motion.div>

        {/* Featured reviews */}
        <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto mb-8">
          {featuredReviews.map((review, i) => (
            <motion.div
              key={review.name}
              className="bg-white border border-[var(--color-border)] rounded-xl p-5"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
            >
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-sm text-[var(--color-foreground)] leading-relaxed mb-3 line-clamp-3">
                &ldquo;{review.text}&rdquo;
              </p>
              <p className="text-xs font-semibold text-[var(--color-muted)]">
                {review.name} - {review.location}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <MagneticWrapper strength={0.2}>
            <a
              href="https://www.google.com/maps/place/Pure+Agua+Enterprise"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] hover:text-[var(--color-secondary)] transition-colors"
            >
              {t.viewAll}
              <ExternalLink className="w-4 h-4" />
            </a>
          </MagneticWrapper>
        </div>
      </div>
    </section>
  );
}
