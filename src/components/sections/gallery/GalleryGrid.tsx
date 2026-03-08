"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { viewportConfig, scaleUpReveal } from "@/lib/animations";

type Category = "all" | "installations" | "before-after" | "team";

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  category: Category;
  caption: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/6444260/pexels-photo-6444260.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Whole home filtration system installed",
    category: "installations",
    caption: "Whole home filtration system - Kissimmee, FL",
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/6444368/pexels-photo-6444368.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Water softener installation",
    category: "installations",
    caption: "Water softener installation - Orlando, FL",
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Clean filtered water glass",
    category: "before-after",
    caption: "Crystal clear water after RO installation",
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/6032817/pexels-photo-6032817.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Pure water pouring",
    category: "before-after",
    caption: "Before and after whole home filtration",
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/4262413/pexels-photo-4262413.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Happy family with clean water",
    category: "team",
    caption: "Satisfied customers in St. Cloud, FL",
  },
  {
    id: 6,
    src: "https://images.pexels.com/photos/2339722/pexels-photo-2339722.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Water filtration equipment",
    category: "installations",
    caption: "Multi-stage well water treatment system",
  },
  {
    id: 7,
    src: "https://images.pexels.com/photos/6489083/pexels-photo-6489083.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Water system maintenance",
    category: "installations",
    caption: "Reverse osmosis under-sink installation",
  },
  {
    id: 8,
    src: "https://images.pexels.com/photos/2499417/pexels-photo-2499417.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Well water treatment",
    category: "before-after",
    caption: "Well water before and after iron removal",
  },
  {
    id: 9,
    src: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Team at work",
    category: "team",
    caption: "Our installation team on site",
  },
];

export function GalleryGrid() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<Category>("all");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filters: { key: Category; label: string }[] = [
    { key: "all", label: t("galleryPage", "filterAll") },
    { key: "installations", label: t("galleryPage", "filterInstallations") },
    { key: "before-after", label: t("galleryPage", "filterBeforeAfter") },
    { key: "team", label: t("galleryPage", "filterTeam") },
  ];

  const filtered = activeFilter === "all"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeFilter);

  const navigate = useCallback((dir: -1 | 1) => {
    if (selectedIndex === null) return;
    const newIndex = selectedIndex + dir;
    if (newIndex >= 0 && newIndex < filtered.length) {
      setSelectedIndex(newIndex);
    }
  }, [selectedIndex, filtered.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowLeft") navigate(-1);
      if (e.key === "ArrowRight") navigate(1);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, navigate]);

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-[var(--color-surface)]" />
      <div className="absolute -bottom-32 -left-32 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(8,73,120,0.04) 0%, transparent 70%)" }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(160deg, transparent 0%, rgba(59,214,245,0.02) 60%, transparent 100%)" }} />

      <div className="container-custom relative">
        {/* Filters */}
        <motion.div
          className="flex flex-wrap gap-2 justify-center mb-10"
          initial={scaleUpReveal.initial}
          whileInView={scaleUpReveal.animate}
          viewport={viewportConfig}
          transition={scaleUpReveal.transition}
        >
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => { setActiveFilter(filter.key); setSelectedIndex(null); }}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.key
                  ? "bg-[var(--color-primary)] text-white shadow-md shadow-[var(--color-primary)]/20"
                  : "bg-[var(--color-surface)] text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:bg-[var(--color-primary)]/5"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group"
                onClick={() => setSelectedIndex(i)}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-sm font-medium">
                    {item.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Client replacement note */}
        <motion.p
          className="text-center text-sm text-[var(--color-muted)] mt-8 italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportConfig}
        >
          {t("galleryPage", "clientReplaceNote")}
        </motion.p>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && filtered[selectedIndex] && (
          <motion.div
            className="fixed inset-0 z-[70] bg-black/90 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white p-2 z-10"
              onClick={() => setSelectedIndex(null)}
            >
              <X className="w-8 h-8" />
            </button>

            {selectedIndex > 0 && (
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2 z-10"
                onClick={(e) => { e.stopPropagation(); navigate(-1); }}
              >
                <ChevronLeft className="w-10 h-10" />
              </button>
            )}

            {selectedIndex < filtered.length - 1 && (
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2 z-10"
                onClick={(e) => { e.stopPropagation(); navigate(1); }}
              >
                <ChevronRight className="w-10 h-10" />
              </button>
            )}

            <motion.div
              key={filtered[selectedIndex].id}
              className="relative w-[90vw] h-[80vh] max-w-5xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filtered[selectedIndex].src.replace("w=800", "w=1920")}
                alt={filtered[selectedIndex].alt}
                fill
                className="object-contain"
                sizes="90vw"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white text-lg font-medium">
                  {filtered[selectedIndex].caption}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
