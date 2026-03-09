"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { viewportConfig, staggerContainer, staggerItem } from "@/lib/animations";
import GlassLiftCard from "@/components/animations/glass-lift-card";
import { translations } from "@/lib/i18n/translations";

const t = translations.serviceAreaPage.cityGrid;
const counties = translations.serviceAreaPage.counties;

// Flatten all cities from all counties
const allCities = counties.flatMap((county) =>
  county.cities.map((city) => ({
    name: city,
    county: county.name.replace(" County", ""),
  }))
);

export function CityGrid() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 80% 20%, rgba(59,214,245,0.04) 0%, transparent 60%), radial-gradient(ellipse 50% 50% at 20% 70%, rgba(0,159,227,0.03) 0%, transparent 60%)",
        }}
      />

      <div className="relative container-custom">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold text-[var(--color-primary)] mb-4" style={{ backgroundColor: "rgba(var(--color-primary-rgb, 0,159,227), 0.08)" }}>
            {t.label}
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--color-foreground)] leading-tight mb-4">
            {t.heading}
          </h2>
          <p className="text-lg text-[var(--color-muted)] leading-relaxed">
            {t.subheading}
          </p>
        </motion.div>

        {/* City Cards Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {allCities.map((city) => (
            <motion.div key={city.name} variants={staggerItem}>
              <GlassLiftCard className="rounded-xl">
                <div className="bg-white border border-[var(--color-border)] rounded-xl px-4 py-3.5 flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-[var(--color-primary)] flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-[var(--color-foreground)] truncate">
                      {city.name}
                    </p>
                    <p className="text-xs text-[var(--color-muted)]">{city.county}</p>
                  </div>
                </div>
              </GlassLiftCard>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          className="text-center text-sm text-[var(--color-muted)] mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportConfig}
          transition={{ delay: 0.5 }}
        >
          {translations.serviceArea.callForAvailability}
        </motion.p>
      </div>
    </section>
  );
}
