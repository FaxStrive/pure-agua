"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Play } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { translations } from "@/lib/i18n/translations";

const placeholders = [
  { name: "Coming Soon", location: "Kissimmee, FL" },
  { name: "Coming Soon", location: "Orlando, FL" },
  { name: "Coming Soon", location: "St. Cloud, FL" },
];

export function VideoTestimonials() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const t = translations.testimonialsPage.videoSection;

  return (
    <section ref={ref} className="relative py-20 lg:py-28 overflow-hidden">
      {/* Dark background */}
      <div className="absolute inset-0 bg-[var(--color-dark)]" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 70% 40%, rgba(0,159,227,0.1) 0%, transparent 60%), radial-gradient(ellipse 40% 40% at 20% 70%, rgba(59,214,245,0.06) 0%, transparent 60%)",
        }}
      />

      <div className="relative container-custom z-10">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold text-[var(--color-accent)] bg-[var(--color-accent)]/10 mb-4">
            {t.label}
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
            {t.heading}
          </h2>
          <p className="text-lg text-white/50 leading-relaxed">
            {t.subheading}
          </p>
        </motion.div>

        {/* Placeholder Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {placeholders.map((item) => (
            <motion.div key={item.location} variants={staggerItem}>
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-white/5 border border-white/10">
                {/* Play button */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                  <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                    <Play className="w-6 h-6 text-white/40 ml-1" />
                  </div>
                  <p className="text-white/40 text-sm font-medium">{item.name}</p>
                  <p className="text-white/20 text-xs">{item.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <p className="text-center text-white/30 text-sm mt-8">
          Video testimonials coming soon. Contact us to share your story.
        </p>
      </div>
    </section>
  );
}
