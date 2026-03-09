"use client";

import { useState, useMemo, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { viewportConfig, staggerContainer, staggerItem } from "@/lib/animations";
import { translations } from "@/lib/i18n/translations";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const categories = translations.beforeAfterPage.categories;
type CategoryKey = keyof typeof categories;

interface SliderItem {
  beforeImage: string;
  afterImage: string;
  title: string;
  description: string;
  category: string;
}

const sliderItems: SliderItem[] = [
  {
    beforeImage: "/images/before-after/before-dirty-water.jpg",
    afterImage: "/images/before-after/after-clear-water.jpg",
    title: "Tap Water Clarity",
    description: "City water before and after whole-home carbon filtration",
    category: "tapWater",
  },
  {
    beforeImage: "/images/before-after/before-old-faucet.jpg",
    afterImage: "/images/before-after/after-clean-faucet.jpg",
    title: "Hard Water Scale Removal",
    description: "Hard water scale buildup vs. after water softener installation",
    category: "scale",
  },
  {
    beforeImage: "https://images.pexels.com/photos/6444260/pexels-photo-6444260.jpeg?auto=compress&cs=tinysrgb&w=800",
    afterImage: "https://images.pexels.com/photos/1346347/pexels-photo-1346347.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Well Water Iron Removal",
    description: "Orange well water transformed to crystal clear",
    category: "wellWater",
  },
  {
    beforeImage: "https://images.pexels.com/photos/5591581/pexels-photo-5591581.jpeg?auto=compress&cs=tinysrgb&w=800",
    afterImage: "https://images.pexels.com/photos/1458671/pexels-photo-1458671.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Kitchen Sink Water",
    description: "Chlorinated city water vs. reverse osmosis filtered water",
    category: "tapWater",
  },
  {
    beforeImage: "https://images.pexels.com/photos/6197933/pexels-photo-6197933.jpeg?auto=compress&cs=tinysrgb&w=800",
    afterImage: "https://images.pexels.com/photos/6585618/pexels-photo-6585618.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Faucet Deposits",
    description: "White calcium deposits eliminated with water softening",
    category: "scale",
  },
  {
    beforeImage: "https://images.pexels.com/photos/6444345/pexels-photo-6444345.jpeg?auto=compress&cs=tinysrgb&w=800",
    afterImage: "https://images.pexels.com/photos/1719656/pexels-photo-1719656.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Well Water Sulfur Treatment",
    description: "Sulfur-contaminated well water treated with our Watershield system",
    category: "wellWater",
  },
];

function Slider({ item }: { item: SliderItem }) {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(percentage);
  }, []);

  const handleMouseDown = useCallback(() => setIsDragging(true), []);
  const handleMouseUp = useCallback(() => setIsDragging(false), []);
  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => { if (isDragging) handleMove(e.clientX); },
    [isDragging, handleMove]
  );
  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => handleMove(e.touches[0].clientX),
    [handleMove]
  );
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") setPosition((p) => Math.max(0, p - 2));
    if (e.key === "ArrowRight") setPosition((p) => Math.min(100, p + 2));
  }, []);

  return (
    <div className="space-y-3">
      <div
        ref={containerRef}
        className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden cursor-col-resize select-none border border-[var(--color-border)]"
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseUp}
        role="slider"
        aria-label={t("beforeAfter", "dragToCompare")}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(position)}
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        {/* After image (full, behind) */}
        <div className="absolute inset-0">
          <Image src={item.afterImage} alt={`After: ${item.title}`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
        </div>
        {/* Before image (clipped) */}
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
          <Image src={item.beforeImage} alt={`Before: ${item.title}`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
        </div>
        {/* Labels */}
        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-xs font-semibold">
          {t("beforeAfter", "before")}
        </div>
        <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[var(--color-primary)] text-white text-xs font-semibold">
          {t("beforeAfter", "after")}
        </div>
        {/* Divider */}
        <div className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_8px_rgba(0,0,0,0.3)] z-10 pointer-events-none" style={{ left: `${position}%` }} />
        {/* Handle */}
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-20"
          style={{ left: `${position}%` }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
        >
          <div className="w-10 h-10 rounded-full bg-white shadow-xl shadow-black/20 flex items-center justify-center cursor-col-resize border-2 border-[var(--color-primary)]">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="text-[var(--color-primary)]">
              <path d="M4 8L1 5M4 8L1 11M4 8H12M12 8L15 5M12 8L15 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="text-center">
        <p className="text-sm font-semibold text-[var(--color-foreground)]">{item.title}</p>
        <p className="text-xs text-[var(--color-muted)]">{item.description}</p>
      </div>
    </div>
  );
}

export function BeforeAfterGallery() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("all");

  const filteredItems = useMemo(() => {
    if (activeCategory === "all") return sliderItems;
    return sliderItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const categoryKeys = Object.keys(categories) as CategoryKey[];

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 40% at 20% 30%, rgba(0,159,227,0.04) 0%, transparent 60%), radial-gradient(ellipse 50% 50% at 85% 70%, rgba(59,214,245,0.03) 0%, transparent 60%)",
        }}
      />

      <div className="relative container-custom">
        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap gap-2 justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
        >
          {categoryKeys.map((key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === key
                  ? "bg-[var(--color-primary)] text-white shadow-md shadow-[var(--color-primary)]/20"
                  : "bg-[var(--color-surface)] text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:bg-[var(--color-primary)]/5 border border-[var(--color-border)]"
              }`}
            >
              {categories[key]}
            </button>
          ))}
        </motion.div>

        {/* Slider Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
          >
            {filteredItems.map((item, i) => (
              <motion.div key={`${item.title}-${i}`} variants={staggerItem}>
                <Slider item={item} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
