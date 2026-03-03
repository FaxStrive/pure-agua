"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function ServicesHero() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section ref={ref} className="relative h-[60vh] min-h-[400px] max-h-[550px] overflow-hidden">
      {/* Background image with parallax */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <Image
          src="https://images.pexels.com/photos/2339722/pexels-photo-2339722.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Water filtration system"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, rgba(8, 73, 120, 0.85) 0%, rgba(0, 159, 227, 0.7) 100%)`,
          }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative h-full flex items-end pb-10 sm:pb-16 lg:pb-20">
        <div className="container-custom">
          {/* Breadcrumb */}
          <motion.div
            className="flex items-center gap-2 text-sm text-white/60 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Link href="/" className="hover:text-white transition-colors">
              {t("common", "home")}
            </Link>
            <span>/</span>
            <span className="text-white">{t("common", "services")}</span>
          </motion.div>

          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-px bg-white/40" />
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-white/70">
                {t("servicesHero", "label")}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6">
              {t("servicesHero", "headline1")}
              <br />
              <span className="text-[var(--color-accent)]">
                {t("servicesHero", "headline2")}
              </span>
            </h1>
            <p className="text-lg text-white/70 max-w-xl leading-relaxed">
              {t("servicesHero", "description")}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--color-surface)] to-transparent" />
    </section>
  );
}
