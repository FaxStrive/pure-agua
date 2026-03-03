"use client";

import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { viewportConfig } from "@/lib/animations";
import { useLanguage } from "@/lib/i18n/LanguageContext";

interface ComparisonItem {
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
  label: { en: string; es: string };
}

const comparisons: ComparisonItem[] = [
  {
    beforeImage: "",
    afterImage: "",
    beforeAlt: "Before water filtration - client photo needed",
    afterAlt: "After water filtration - client photo needed",
    label: {
      en: "Before & After Water Filtration",
      es: "Antes y Despues de Filtracion de Agua",
    },
  },
  {
    beforeImage: "",
    afterImage: "",
    beforeAlt: "Before well water treatment - client photo needed",
    afterAlt: "After well water treatment - client photo needed",
    label: {
      en: "Well Water Treatment Results",
      es: "Resultados de Tratamiento de Agua de Pozo",
    },
  },
];

function Slider({ comparison }: { comparison: ComparisonItem }) {
  const { language, t } = useLanguage();
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
    (e: React.MouseEvent) => {
      if (isDragging) handleMove(e.clientX);
    },
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
    <div className="space-y-4">
      <div
        ref={containerRef}
        className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden cursor-col-resize select-none"
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
          {comparison.afterImage ? (
            <Image
              src={comparison.afterImage}
              alt={comparison.afterAlt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          ) : (
            <div className="w-full h-full bg-[var(--color-primary)]/10 flex items-center justify-center">
              <div className="text-center p-6">
                <p className="text-lg font-semibold text-[var(--color-primary)]">[AFTER Photo]</p>
                <p className="text-sm text-[var(--color-muted)] mt-2">Client to provide after photo</p>
              </div>
            </div>
          )}
        </div>

        {/* Before image (clipped) */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          {comparison.beforeImage ? (
            <Image
              src={comparison.beforeImage}
              alt={comparison.beforeAlt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <div className="text-center p-6">
                <p className="text-lg font-semibold text-gray-600">[BEFORE Photo]</p>
                <p className="text-sm text-gray-400 mt-2">Client to provide before photo</p>
              </div>
            </div>
          )}
        </div>

        {/* Labels */}
        <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-sm text-white text-xs font-semibold">
          {t("beforeAfter", "before")}
        </div>
        <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-[var(--color-primary)] text-white text-xs font-semibold">
          {t("beforeAfter", "after")}
        </div>

        {/* Divider */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_8px_rgba(0,0,0,0.3)] z-10 pointer-events-none"
          style={{ left: `${position}%` }}
        />

        {/* Handle */}
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-20"
          style={{ left: `${position}%` }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
        >
          <div className="w-12 h-12 sm:w-10 sm:h-10 rounded-full bg-white shadow-xl shadow-black/20 flex items-center justify-center cursor-col-resize border-2 border-[var(--color-primary)]">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="text-[var(--color-primary)]"
            >
              <path
                d="M4 8L1 5M4 8L1 11M4 8H12M12 8L15 5M12 8L15 11"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      <p className="text-center text-sm text-[var(--color-muted)]">
        {comparison.label[language]} &middot;{" "}
        <span className="text-[var(--color-primary)]">
          {t("beforeAfter", "dragToCompare")}
        </span>
      </p>
    </div>
  );
}

export function BeforeAfter() {
  const { t } = useLanguage();

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="relative container-custom">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-px bg-[var(--color-primary)]" />
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-primary)]">
              {t("beforeAfter", "label")}
            </span>
            <div className="w-10 h-px bg-[var(--color-primary)]" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--color-foreground)] leading-tight mb-5">
            {t("beforeAfter", "heading")}
          </h2>
          <p className="text-lg text-[var(--color-muted)] leading-relaxed">
            {t("beforeAfter", "subheading")}
          </p>
        </motion.div>

        {/* Slider */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {comparisons.map((comparison, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
            >
              <Slider comparison={comparison} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
