"use client";

import { useRef, useCallback } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  useAnimationFrame,
} from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translations } from "@/lib/i18n/translations";
import MagneticWrapper from "@/components/animations/magnetic-wrapper";

// Floating orb that drifts using useAnimationFrame
function FloatingOrb({
  color,
  size,
  initialX,
  initialY,
  speedX,
  speedY,
  opacity,
}: {
  color: string;
  size: number;
  initialX: number;
  initialY: number;
  speedX: number;
  speedY: number;
  opacity: number;
}) {
  const x = useMotionValue(initialX);
  const y = useMotionValue(initialY);

  useAnimationFrame((t) => {
    x.set(initialX + Math.sin(t * speedX * 0.0005) * 40);
    y.set(initialY + Math.cos(t * speedY * 0.0004) * 30);
  });

  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        opacity,
        x,
        y,
        translateX: "-50%",
        translateY: "-50%",
        filter: "blur(1px)",
      }}
    />
  );
}

export function Hero() {
  const { t } = useLanguage();
  const heroRef = useRef<HTMLDivElement>(null);

  // --- Scroll-based effects (existing) ---
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.55, 0.75]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  // --- Mouse-tracked parallax ---
  const rawMouseX = useMotionValue(0);
  const rawMouseY = useMotionValue(0);
  const mouseX = useSpring(rawMouseX, { stiffness: 80, damping: 20 });
  const mouseY = useSpring(rawMouseY, { stiffness: 80, damping: 20 });

  // Derived transforms for each layer
  const overlayX = useTransform(mouseX, (v) => v * -0.01);
  const overlayY = useTransform(mouseY, (v) => v * -0.01);
  const contentMouseX = useTransform(mouseX, (v) => v * 0.015);
  const contentMouseY = useTransform(mouseY, (v) => v * 0.01);
  const statsX = useTransform(mouseX, (v) => v * -0.008);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = heroRef.current?.getBoundingClientRect();
      if (!rect) return;
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      rawMouseX.set(e.clientX - cx);
      rawMouseY.set(e.clientY - cy);
    },
    [rawMouseX, rawMouseY]
  );

  const handleMouseLeave = useCallback(() => {
    rawMouseX.set(0);
    rawMouseY.set(0);
  }, [rawMouseX, rawMouseY]);

  // --- Per-word headline split ---
  const headline1 = t("hero", "headline1") as string;
  const headline2 = t("hero", "headline2") as string;
  const words1 = headline1.split(" ");
  const words2 = headline2.split(" ");

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden -mt-20"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Full-bleed looping video background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="https://images.pexels.com/photos/1556704/pexels-photo-1556704.jpeg?auto=compress&cs=tinysrgb&w=1920"
        >
          <source src="/videos/hero-water.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Floating light orbs - behind overlays, in front of video */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Orb 1 - top-left, primary blue */}
        <FloatingOrb
          color="rgba(8, 73, 120, 0.55)"
          size={600}
          initialX={200}
          initialY={200}
          speedX={1.0}
          speedY={0.7}
          opacity={0.07}
        />
        {/* Orb 2 - right-center, accent cyan */}
        <FloatingOrb
          color="rgba(0, 168, 204, 0.6)"
          size={500}
          initialX={900}
          initialY={350}
          speedX={0.6}
          speedY={1.1}
          opacity={0.06}
        />
        {/* Orb 3 - bottom-center, lighter blue */}
        <FloatingOrb
          color="rgba(56, 143, 195, 0.5)"
          size={400}
          initialX={550}
          initialY={550}
          speedX={1.3}
          speedY={0.5}
          opacity={0.05}
        />
      </div>

      {/* Dark overlay gradient - stronger at bottom (scroll + mouse parallax) */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(
            180deg,
            rgba(8, 73, 120, 0.6) 0%,
            rgba(8, 73, 120, 0.45) 40%,
            rgba(8, 73, 120, 0.7) 100%
          )`,
          opacity: overlayOpacity,
          x: overlayX,
          y: overlayY,
        }}
      />

      {/* Additional gradient for text readability */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(
            135deg,
            rgba(0, 0, 0, 0.3) 0%,
            transparent 50%,
            rgba(0, 0, 0, 0.1) 100%
          )`,
        }}
      />

      {/* Content - scroll y + mouse parallax combined */}
      <motion.div
        className="relative container-custom pt-32 pb-24 sm:pt-40 sm:pb-32 lg:pt-48 lg:pb-40"
        style={{ y: contentY, x: contentMouseX }}
      >
        <motion.div className="max-w-3xl" style={{ y: contentMouseY }}>
          {/* Eyebrow */}
          <motion.div
            className="flex items-center gap-3 mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="w-12 h-px bg-white/50" />
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-white/80">
              {t("hero", "badge")}
            </span>
          </motion.div>

          {/* Headline - per-word blur-fade stagger */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1] tracking-tight mb-6 sm:mb-8">
            {/* Line 1 */}
            <span className="block">
              {words1.map((word, i) => (
                <motion.span
                  key={`l1-${i}`}
                  className="inline-block mr-[0.25em]"
                  initial={{ opacity: 0, filter: "blur(6px)", y: 8 }}
                  animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  transition={{
                    delay: 0.5 + i * 0.06,
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </span>
            {/* Line 2 - accent colored */}
            <span className="block text-[var(--color-accent)]">
              {words2.map((word, i) => (
                <motion.span
                  key={`l2-${i}`}
                  className="inline-block mr-[0.25em]"
                  initial={{ opacity: 0, filter: "blur(6px)", y: 8 }}
                  animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  transition={{
                    delay: 0.5 + words1.length * 0.06 + i * 0.06,
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </h1>

          {/* Subheadline */}
          <motion.p
            className="text-lg md:text-xl text-white/75 max-w-xl leading-relaxed mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            {t("hero", "subheadline")}
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
          >
            <MagneticWrapper strength={0.3}>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-white text-[var(--color-dark)] hover:bg-white/90 rounded-full px-6 sm:px-10 py-4 sm:py-6 text-sm sm:text-base font-semibold shadow-2xl shadow-black/20 transition-all duration-300 group w-full sm:w-auto"
                >
                  {t("hero", "ctaPrimary")}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </MagneticWrapper>
            <Link href="/services/whole-home">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-6 sm:px-10 py-4 sm:py-6 text-sm sm:text-base font-semibold border-white/30 !bg-transparent !text-white hover:!bg-white/10 hover:border-white/50 transition-all duration-300 w-full sm:w-auto"
              >
                {t("hero", "ctaSecondary")}
              </Button>
            </Link>
          </motion.div>

          {/* Stats bar - counter-movement on mouse */}
          <motion.div
            className="flex items-center gap-4 sm:gap-8 md:gap-14"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            style={{ x: statsX }}
          >
            {[
              { value: "10+", label: translations.hero.stats.years },
              { value: "500+", label: translations.hero.stats.clients },
              { value: "100%", label: translations.hero.stats.satisfaction },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-3">
                {i > 0 && (
                  <div className="w-px h-6 sm:h-10 bg-white/20 -ml-2 sm:-ml-4 md:-ml-7 mr-0" />
                )}
                <div>
                  <span className="text-xl sm:text-2xl md:text-4xl font-bold text-white">
                    {stat.value}
                  </span>
                  <span className="block text-xs text-white/60 mt-1 uppercase tracking-wider">
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom fade to white */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2"
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <div className="w-1 h-2 rounded-full bg-white/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
