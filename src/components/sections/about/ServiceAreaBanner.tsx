"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { viewportConfig } from "@/lib/animations";

const areas = [
  "Orlando",
  "Kissimmee",
  "Davenport",
  "Clermont",
  "Winter Garden",
  "Windermere",
  "Lake Nona",
  "St. Cloud",
];

export function ServiceAreaBanner() {
  return (
    <section className="relative py-16 lg:py-20 overflow-hidden bg-white">
      {/* Subtle background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(0,159,227,0.04) 0%, transparent 60%)" }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(59,214,245,0.03) 0%, transparent 60%)" }}
        />
      </div>

      <div className="relative container-custom z-10">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
        >
          <h3 className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-primary)] mb-3">
            Proudly Serving Central Florida
          </h3>
          <p className="text-[var(--color-dark)]/60 text-base max-w-lg mx-auto">
            Bringing clean, safe water to homes across the greater Orlando area and surrounding communities.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 lg:gap-4">
          {areas.map((area, i) => (
            <motion.div
              key={area}
              className="flex items-center gap-2 bg-[var(--color-surface)] border border-[var(--color-primary)]/[0.08] rounded-full px-5 py-2.5"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={viewportConfig}
              transition={{ delay: i * 0.05, duration: 0.4, type: "spring", stiffness: 150 }}
            >
              <MapPin className="w-3.5 h-3.5 text-[var(--color-primary)]" />
              <span className="text-sm font-medium text-[var(--color-dark)]">{area}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
