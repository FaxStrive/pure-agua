"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import MagneticWrapper from "@/components/animations/magnetic-wrapper";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const { t, language } = useLanguage();

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.pexels.com/photos/1435752/pexels-photo-1435752.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Clean water"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, rgba(8, 73, 120, 0.92) 0%, rgba(0, 159, 227, 0.85) 100%)",
          }}
        />
      </div>

      {/* Mesh gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 80% 30%, rgba(255,255,255,0.08) 0%, transparent 70%), radial-gradient(ellipse 50% 60% at 20% 70%, rgba(59,214,245,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative container-custom text-center z-10">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight mb-6">
            {t("cta", "heading")}
          </h2>

          <p className="text-lg text-white/75 max-w-xl mx-auto mb-12 leading-relaxed">
            {t("cta", "description")}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <MagneticWrapper strength={0.3}>
              <Link href="/contact">
                <ShimmerButton
                  shimmerColor="#3BD6F5"
                  background="white"
                  borderRadius="100px"
                  className="!text-[var(--color-dark)] text-sm sm:text-base font-semibold px-6 sm:px-10 py-4 sm:py-5 shadow-2xl shadow-black/20"
                >
                  {t("cta", "scheduleFree")}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </ShimmerButton>
              </Link>
            </MagneticWrapper>
            <a href="tel:+1">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-full px-6 sm:px-10 py-4 sm:py-5 text-sm sm:text-base font-semibold border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                {t("cta", "callUs")}
              </motion.div>
            </a>
          </div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-6 mt-10 text-white/50 text-sm"
          >
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
              {language === "es" ? "Gratis, Sin Compromiso" : "Free, No Obligation"}
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
              {language === "es" ? "Instalacion Profesional" : "Professional Installation"}
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
              {language === "es" ? "Garantia Total" : "100% Satisfaction Guaranteed"}
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
