"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TextAnimate } from "@/components/magicui/text-animate";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import MagneticWrapper from "@/components/animations/magnetic-wrapper";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface InnerPageHeroProps {
  image: string;
  imageAlt: string;
  label: string;
  headline1: string;
  headline2: string;
  description?: string;
  breadcrumbs: Breadcrumb[];
  variant?: "primary" | "accent" | "gradient";
  videoSrc?: string;
  ctaText?: string;
  ctaHref?: string;
}

export function InnerPageHero({
  image,
  imageAlt,
  label,
  headline1,
  headline2,
  description,
  breadcrumbs,
  variant = "primary",
  videoSrc,
  ctaText,
  ctaHref = "/contact",
}: InnerPageHeroProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const gradientOverlay =
    variant === "accent"
      ? "linear-gradient(135deg, rgba(59, 214, 245, 0.85) 0%, rgba(0, 159, 227, 0.75) 100%)"
      : variant === "gradient"
      ? "linear-gradient(160deg, rgba(2, 27, 48, 0.92) 0%, rgba(8, 73, 120, 0.85) 40%, rgba(0, 159, 227, 0.75) 100%)"
      : "linear-gradient(135deg, rgba(8, 73, 120, 0.88) 0%, rgba(0, 159, 227, 0.75) 100%)";

  return (
    <section ref={ref} className="relative h-[60vh] min-h-[400px] max-h-[550px] overflow-hidden">
      {/* Background: video or image */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        {videoSrc ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
            src={videoSrc}
          />
        ) : (
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        )}
        <div className="absolute inset-0" style={{ background: gradientOverlay }} />
      </motion.div>

      {/* Diagonal sweep overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(155deg, rgba(255,255,255,0.06) 0%, transparent 40%, rgba(59,214,245,0.04) 100%)",
        }}
      />

      <div className="relative h-full flex items-end pb-10 sm:pb-16 lg:pb-20 z-10">
        <div className="container-custom">
          {/* Breadcrumbs */}
          <motion.div
            className="flex items-center gap-2 text-sm text-white/60 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <span>/</span>}
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-white transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white">{crumb.label}</span>
                )}
              </span>
            ))}
          </motion.div>

          <div className="max-w-2xl">
            {/* Label */}
            <motion.div
              className="flex items-center gap-3 mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-10 h-px bg-white/40" />
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-white/70">
                {label}
              </span>
            </motion.div>

            {/* TextAnimate headline */}
            <TextAnimate
              animation="blurInUp"
              by="word"
              as="h1"
              delay={0.2}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-2"
            >
              {headline1}
            </TextAnimate>
            <TextAnimate
              animation="blurInUp"
              by="word"
              as="p"
              delay={0.4}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[var(--color-accent)] leading-tight mb-4 sm:mb-6"
            >
              {headline2}
            </TextAnimate>

            {description && (
              <motion.p
                className="text-lg text-white/70 max-w-xl leading-relaxed mb-6"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                {description}
              </motion.p>
            )}

            {ctaText && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <MagneticWrapper strength={0.3}>
                  <Link href={ctaHref}>
                    <ShimmerButton
                      shimmerColor="#3BD6F5"
                      background="var(--color-accent)"
                      borderRadius="12px"
                      glowColor="rgba(59, 214, 245, 0.25)"
                      className="text-sm font-semibold px-6 py-3 group"
                    >
                      {ctaText}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </ShimmerButton>
                  </Link>
                </MagneticWrapper>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  );
}
