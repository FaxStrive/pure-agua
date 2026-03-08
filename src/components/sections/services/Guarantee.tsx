"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, ArrowRight, Phone } from "lucide-react";
import Link from "next/link";
import { WaterButton } from "@/components/ui/water-button";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function Guarantee() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const { t } = useLanguage();

  return (
    <section ref={sectionRef} className="relative py-20 md:py-28 overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-dark)] to-[#021B30]" />

      {/* Mesh gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 50% 60% at 75% 25%, rgba(16,185,129,0.08) 0%, transparent 70%), radial-gradient(ellipse 40% 50% at 25% 75%, rgba(59,214,245,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, type: "spring", stiffness: 180 }}
          className="mx-auto w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mb-5"
        >
          <Shield className="w-8 h-8 text-emerald-400" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5"
        >
          {"Our "}
          <span className="text-[var(--color-accent)]">
            {"Guarantee"}
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {t("guarantee", "description")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/contact">
            <WaterButton
              fillColor="var(--color-accent)"
              className="text-base font-semibold px-8 py-4 border-[var(--color-accent)] text-[var(--color-accent)]"
            >
              {"Schedule Free Water Test"}
              <ArrowRight className="w-5 h-5 ml-2" />
            </WaterButton>
          </Link>
          <a
            href="tel:+14077732883"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors font-medium"
          >
            <Phone className="w-5 h-5" />
            {"Or call us"}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
