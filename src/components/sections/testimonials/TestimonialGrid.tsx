"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, MapPin, Quote } from "lucide-react";
import { viewportConfig, staggerContainer, staggerItem } from "@/lib/animations";
import GlassLiftCard from "@/components/animations/glass-lift-card";
import { translations } from "@/lib/i18n/translations";

const reviews = translations.testimonials.reviews;

export function TestimonialGrid() {
  const [activeLocation, setActiveLocation] = useState("all");

  const locations = useMemo(() => {
    const locs = new Set(reviews.map((r) => r.location));
    return ["all", ...Array.from(locs)];
  }, []);

  const filteredReviews = useMemo(() => {
    if (activeLocation === "all") return reviews;
    return reviews.filter((r) => r.location === activeLocation);
  }, [activeLocation]);

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 15% 30%, rgba(0,159,227,0.04) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(59,214,245,0.03) 0%, transparent 60%)",
        }}
      />

      <div className="relative container-custom">
        {/* Filter pills */}
        <motion.div
          className="flex flex-wrap gap-2 justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
        >
          {locations.map((loc) => (
            <button
              key={loc}
              onClick={() => setActiveLocation(loc)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeLocation === loc
                  ? "bg-[var(--color-primary)] text-white shadow-md shadow-[var(--color-primary)]/20"
                  : "bg-[var(--color-surface)] text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:bg-[var(--color-primary)]/5 border border-[var(--color-border)]"
              }`}
            >
              {loc === "all" ? translations.testimonialsPage.filterAll : loc}
            </button>
          ))}
        </motion.div>

        {/* Masonry-style grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeLocation}
            className="columns-1 md:columns-2 lg:columns-3 gap-5 max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
          >
            {filteredReviews.map((review, i) => (
              <motion.div
                key={`${review.name}-${i}`}
                variants={staggerItem}
                className="break-inside-avoid mb-5"
              >
                <GlassLiftCard className="rounded-2xl">
                  <div className="bg-white border border-[var(--color-border)] rounded-2xl p-6 relative">
                    {/* Quote icon */}
                    <Quote className="w-8 h-8 text-[var(--color-primary)]/10 absolute top-4 right-4" />

                    {/* Stars */}
                    <div className="flex gap-0.5 mb-4">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    {/* Review text */}
                    <p className="text-sm text-[var(--color-foreground)] leading-relaxed mb-5">
                      &ldquo;{review.text}&rdquo;
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-3 pt-4 border-t border-[var(--color-border)]">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] flex items-center justify-center text-white text-sm font-bold">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[var(--color-foreground)]">{review.name}</p>
                        <p className="text-xs text-[var(--color-muted)] flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {review.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </GlassLiftCard>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
