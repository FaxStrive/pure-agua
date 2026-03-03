"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Star, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { WaterButton } from "@/components/ui/water-button";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translations } from "@/lib/i18n/translations";

export function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const { t, language } = useLanguage();
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(0);

  const testimonials = translations.testimonials.reviews.map((r) => ({
    name: r.name,
    location: r.location,
    text: r.text[language],
    rating: 5,
  }));

  const paginate = useCallback(
    (dir: number) => {
      setDirection(dir);
      setActive((prev) => (prev + dir + testimonials.length) % testimonials.length);
    },
    [testimonials.length]
  );

  // Auto-advance every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => paginate(1), 6000);
    return () => clearInterval(timer);
  }, [paginate]);

  const current = testimonials[active];

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
    }),
  };

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">
      {/* Background - video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/cta-water.mp4"
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, rgba(8,73,120,0.92) 0%, rgba(8,73,120,0.88) 100%)",
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 items-center">
          {/* Left - heading + nav */}
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium uppercase tracking-[0.15em] text-[var(--color-accent)] mb-6"
              style={{ backgroundColor: "rgba(59,214,245,0.1)" }}
            >
              {t("testimonials", "label")}
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-6"
            >
              {t("testimonials", "heading")}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-white/50 mb-10 leading-relaxed"
            >
              {language === "es"
                ? "Escuche de familias reales en el Centro de Florida que transformaron su agua."
                : "Hear from real Central Florida families who transformed their water."}
            </motion.p>

            {/* Navigation arrows + dots */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-4"
            >
              <button
                onClick={() => paginate(-1)}
                className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors duration-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => paginate(1)}
                className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors duration-300"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 ml-4">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setDirection(i > active ? 1 : -1);
                      setActive(i);
                    }}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      i === active
                        ? "w-8 bg-[var(--color-accent)]"
                        : "w-3 bg-white/20 hover:bg-white/40"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right - featured testimonial card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-3xl bg-white/[0.05] backdrop-blur-sm border border-white/10 p-6 sm:p-8 md:p-12 min-h-[260px] sm:min-h-[300px] flex flex-col justify-between overflow-hidden">
              {/* Large decorative quote */}
              <span
                className="absolute -top-4 -left-2 text-[10rem] font-black leading-none select-none pointer-events-none text-[var(--color-accent)]/[0.07]"
                aria-hidden="true"
              >
                &ldquo;
              </span>

              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={active}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="relative z-10"
                >
                  {/* Stars */}
                  <div className="flex items-center gap-1 mb-6">
                    {Array.from({ length: current.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Quote text */}
                  <p className="text-base sm:text-xl md:text-2xl text-white/90 leading-relaxed mb-8 font-light">
                    &ldquo;{current.text}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/20 flex items-center justify-center">
                      <span className="text-lg font-bold text-[var(--color-accent)]">
                        {current.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-white">{current.name}</p>
                      <p className="text-sm text-white/40">{current.location}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-14"
        >
          <Link href="/contact">
            <WaterButton
              fillColor="var(--color-accent)"
              className="text-base font-semibold px-8 py-4 border-[var(--color-accent)] text-[var(--color-accent)]"
            >
              {language === "es" ? "Unase a Nuestros Clientes Felices" : "Join Our Happy Customers"}
              <ArrowRight className="w-5 h-5 ml-2" />
            </WaterButton>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
