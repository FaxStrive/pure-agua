"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { viewportConfig } from "@/lib/animations";

export function CultureSection() {
  const { t } = useLanguage();

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-white" />
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,159,227,0.03) 0%, transparent 70%)",
        }}
      />

      <div className="container-custom relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-primary)] mb-4">
              <span className="w-8 h-px bg-[var(--color-primary)]" />
              {t("careersPage", "cultureLabel")}
            </span>
            <h2 className="heading-md font-bold text-[var(--color-foreground)] mb-6">
              {t("careersPage", "cultureHeading")}
            </h2>
            <p className="text-[var(--color-muted)] leading-relaxed">
              {t("careersPage", "cultureDescription")}
            </p>
          </motion.div>

          <motion.div
            className="relative aspect-[4/3] rounded-2xl overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Pure Agua team culture"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-dark)]/20 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
