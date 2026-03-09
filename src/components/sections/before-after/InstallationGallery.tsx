"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";
import { viewportConfig, staggerContainer, staggerItem } from "@/lib/animations";
import GlassLiftCard from "@/components/animations/glass-lift-card";
import { translations } from "@/lib/i18n/translations";

const installationPhotos = [
  {
    src: "https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Professional water filtration system installation",
    caption: "Whole-home system installation in Kissimmee",
  },
  {
    src: "https://images.pexels.com/photos/6419126/pexels-photo-6419126.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Under-sink reverse osmosis installation",
    caption: "RO system installed under kitchen sink",
  },
  {
    src: "https://images.pexels.com/photos/5591583/pexels-photo-5591583.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Water softener installation",
    caption: "Water softener installation in Orlando home",
  },
  {
    src: "https://images.pexels.com/photos/6419130/pexels-photo-6419130.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Well water treatment system",
    caption: "Well water treatment in Davenport",
  },
  {
    src: "https://images.pexels.com/photos/5591684/pexels-photo-5591684.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Clean water testing after installation",
    caption: "Post-installation water quality testing",
  },
  {
    src: "https://images.pexels.com/photos/6444201/pexels-photo-6444201.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Professional plumber working on filtration",
    caption: "Our technician completing an installation",
  },
];

export function InstallationGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const t = translations.beforeAfterPage.installationGallery;

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 70% 20%, rgba(59,214,245,0.04) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 20% 80%, rgba(0,159,227,0.03) 0%, transparent 60%)",
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

        {/* Photo Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {installationPhotos.map((photo, i) => (
            <motion.div key={i} variants={staggerItem}>
              <GlassLiftCard className="rounded-2xl">
                <motion.div
                  layoutId={`photo-${i}`}
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer group"
                  onClick={() => setSelectedIndex(i)}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-sm text-white font-medium">{photo.caption}</p>
                  </div>
                </motion.div>
              </GlassLiftCard>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
          >
            <motion.div
              layoutId={`photo-${selectedIndex}`}
              className="relative w-full max-w-4xl aspect-[4/3] rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={installationPhotos[selectedIndex].src}
                alt={installationPhotos[selectedIndex].alt}
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                <p className="text-white font-medium">{installationPhotos[selectedIndex].caption}</p>
              </div>
            </motion.div>

            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
