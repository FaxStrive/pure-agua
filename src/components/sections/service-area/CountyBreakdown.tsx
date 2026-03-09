"use client";

import { motion } from "framer-motion";
import { MapPin, Droplets } from "lucide-react";
import { viewportConfig } from "@/lib/animations";
import { translations } from "@/lib/i18n/translations";

const counties = translations.serviceAreaPage.counties;

export function CountyBreakdown() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/county-breakdown-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[var(--color-dark)]/85" />
      </div>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 50% at 30% 30%, rgba(0,159,227,0.1) 0%, transparent 60%), radial-gradient(ellipse 40% 40% at 70% 70%, rgba(59,214,245,0.06) 0%, transparent 60%)",
        }}
      />

      <div className="relative container-custom z-10">
        <div className="max-w-4xl mx-auto space-y-16">
          {counties.map((county, i) => {
            const isEven = i % 2 === 0;

            return (
              <motion.div
                key={county.name}
                className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 items-start`}
                initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewportConfig}
                transition={{ duration: 0.6 }}
              >
                {/* County Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[var(--color-primary)]/20 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-xl lg:text-2xl font-bold text-white">
                      {county.name}
                    </h3>
                  </div>

                  <p className="text-white/60 leading-relaxed mb-5 text-sm">
                    {county.description}
                  </p>

                  {/* Cities */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {county.cities.map((city) => (
                      <span
                        key={city}
                        className="px-3 py-1 rounded-full bg-white/5 text-white/70 text-xs font-medium border border-white/10"
                      >
                        {city}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Water Quality Note */}
                <div className="flex-shrink-0 w-full lg:w-80">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <Droplets className="w-4 h-4 text-[var(--color-accent)]" />
                      <p className="text-xs font-semibold text-[var(--color-accent)] uppercase tracking-wider">
                        Local Water Quality
                      </p>
                    </div>
                    <p className="text-sm text-white/50 leading-relaxed">
                      {county.waterNote}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
