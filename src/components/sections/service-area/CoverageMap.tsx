"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { MapPin, Droplets, ChevronRight } from "lucide-react";
import dynamic from "next/dynamic";
import { translations } from "@/lib/i18n/translations";

const t = translations.serviceAreaPage.mapSection;
const counties = translations.serviceAreaPage.counties;

// FIPS code to county name mapping
const fipsToName: Record<string, string> = {
  "12097": "Osceola County",
  "12095": "Orange County",
  "12105": "Polk County",
  "12117": "Seminole County",
  "12069": "Lake County",
};

// County brand colors for the map polygons
const countyColors: Record<string, string> = {
  "Osceola County": "#009FE3",
  "Orange County": "#0077b6",
  "Polk County": "#00b4d8",
  "Seminole County": "#0096c7",
  "Lake County": "#48cae4",
};

// Leaflet must be loaded client-side only
const LeafletMap = dynamic(() => import("./LeafletMap"), { ssr: false });

export function CoverageMap() {
  const [activeCounty, setActiveCounty] = useState<string | null>(null);
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const activeData = activeCounty
    ? counties.find((c) => c.name === activeCounty)
    : null;

  return (
    <section ref={ref} className="relative py-20 lg:py-28 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 50% at 30% 50%, rgba(0,159,227,0.05) 0%, transparent 60%), radial-gradient(ellipse 40% 40% at 75% 30%, rgba(59,214,245,0.03) 0%, transparent 60%)",
        }}
      />

      <div className="relative container-custom">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span
            className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold text-[var(--color-primary)] mb-4"
            style={{ backgroundColor: "rgba(var(--color-primary-rgb, 0,159,227), 0.08)" }}
          >
            {t.label}
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--color-foreground)] leading-tight mb-4">
            {t.heading}
          </h2>
          <p className="text-lg text-[var(--color-muted)] leading-relaxed">
            {t.subheading}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-start max-w-6xl mx-auto">
          {/* Interactive Map */}
          <motion.div
            className="lg:col-span-3 relative rounded-2xl overflow-hidden shadow-xl border border-[var(--color-border)]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="aspect-[4/3] relative bg-[#f2efe6]">
              <LeafletMap
                activeCounty={activeCounty}
                onCountyClick={setActiveCounty}
                fipsToName={fipsToName}
                countyColors={countyColors}
              />
            </div>
          </motion.div>

          {/* County Info Panel */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <AnimatePresence mode="wait">
              {activeData ? (
                <motion.div
                  key={activeData.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white border border-[var(--color-border)] rounded-2xl p-6 shadow-lg"
                >
                  <button
                    onClick={() => setActiveCounty(null)}
                    className="text-xs text-[var(--color-primary)] font-medium mb-3 hover:underline"
                  >
                    ← All counties
                  </button>
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${countyColors[activeData.name]}20` }}
                    >
                      <MapPin className="w-5 h-5" style={{ color: countyColors[activeData.name] }} />
                    </div>
                    <h3 className="text-lg font-bold text-[var(--color-foreground)]">
                      {activeData.name}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-4">
                    {activeData.description}
                  </p>
                  <div className="bg-[var(--color-primary)]/5 rounded-xl p-4 mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Droplets className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                      <p className="text-xs font-semibold text-[var(--color-primary)] uppercase tracking-wider">
                        Local Water Quality
                      </p>
                    </div>
                    <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                      {activeData.waterNote}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[var(--color-foreground)] uppercase tracking-wider mb-2">
                      Cities Served
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {activeData.cities.map((city) => (
                        <span
                          key={city}
                          className="px-2.5 py-1 rounded-full bg-[var(--color-surface)] text-xs font-medium text-[var(--color-foreground)] border border-[var(--color-border)]"
                        >
                          {city}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="list"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-2"
                >
                  {counties.map((county, i) => (
                    <motion.button
                      key={county.name}
                      onClick={() => setActiveCounty(county.name)}
                      className="w-full text-left bg-white border border-[var(--color-border)] rounded-xl px-5 py-4 hover:border-[var(--color-primary)]/30 hover:shadow-md transition-all duration-200 group"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 + i * 0.08 }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div
                            className="w-8 h-8 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform"
                            style={{ backgroundColor: `${countyColors[county.name]}15` }}
                          >
                            <MapPin className="w-4 h-4" style={{ color: countyColors[county.name] }} />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-[var(--color-foreground)]">
                              {county.name}
                            </p>
                            <p className="text-xs text-[var(--color-muted)]">
                              {county.cities.length} cities served
                            </p>
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-[var(--color-muted)] group-hover:text-[var(--color-primary)] transition-colors" />
                      </div>
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
