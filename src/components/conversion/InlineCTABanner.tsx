"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";
import { WaterButton } from "@/components/ui/water-button";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import MagneticWrapper from "@/components/animations/magnetic-wrapper";
import { NumberTicker } from "@/components/magicui/number-ticker";

interface InlineCTABannerProps {
  headline?: string;
  subtext?: string;
  buttonText?: string;
  buttonHref?: string;
  showPhone?: boolean;
  variant?: "gradient" | "accent" | "subtle";
}

export default function InlineCTABanner({
  headline = "Ready to Improve Your Water?",
  subtext = "Get a free, no-obligation water test and find out exactly what's in your water.",
  buttonText = "Schedule Free Water Test",
  buttonHref = "/contact",
  showPhone = true,
  variant = "gradient",
}: InlineCTABannerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const { t } = useLanguage();

  const bgClass =
    variant === "gradient"
      ? "bg-gradient-to-r from-[var(--color-dark)] via-[var(--color-primary)] to-[var(--color-dark)]"
      : variant === "accent"
      ? "bg-gradient-to-r from-[var(--color-accent-dark)] via-[var(--color-accent)] to-[var(--color-accent-dark)]"
      : "bg-[var(--color-primary-50)]";

  const textColor = variant === "subtle" ? "text-[var(--color-text)]" : "text-white";
  const subtextColor =
    variant === "subtle" ? "text-[var(--color-text-secondary)]" : "text-white/80";

  return (
    <div ref={ref} className="container-custom py-4">
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`relative rounded-2xl overflow-hidden ${bgClass} px-8 py-10 md:py-12`}
      >
        {variant !== "subtle" && (
          <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-white/5 blur-[80px] pointer-events-none" />
        )}

        <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-10">
          <div className="flex-1 text-center md:text-left">
            <h3 className={`text-xl md:text-2xl font-bold ${textColor} mb-2 flex items-center gap-2.5 justify-center md:justify-start`}>
              <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
              </span>
              {headline}
            </h3>
            <p className={`text-sm md:text-base ${subtextColor} leading-relaxed`}>
              {subtext}
            </p>
            <p className={`mt-2 text-sm font-semibold ${variant === "subtle" ? "text-[var(--color-primary)]" : "text-white/90"}`}>
              <NumberTicker value={500} className="font-bold" />+ families served in Central Florida
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 flex-shrink-0">
            <MagneticWrapper strength={0.3}>
              <Link href={buttonHref}>
                <WaterButton
                  fillColor={variant === "subtle" ? "var(--color-primary)" : "white"}
                  className={`text-sm font-semibold px-6 py-3.5 ${
                    variant === "subtle"
                      ? "border-[var(--color-primary)] text-[var(--color-primary)]"
                      : "border-white text-white"
                  }`}
                >
                  {buttonText}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </WaterButton>
              </Link>
            </MagneticWrapper>
            {showPhone && (
              <a
                href="tel:+14077732883"
                className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${
                  variant === "subtle"
                    ? "text-[var(--color-text-muted)] hover:text-[var(--color-primary)]"
                    : "text-white/70 hover:text-white"
                }`}
              >
                <Phone className="w-4 h-4" />
                {t("nav", "phone") || "Call Us"}
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
