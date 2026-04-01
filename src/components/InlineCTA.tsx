"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";

interface InlineCTAProps {
  variant: "banner" | "button" | "text";
  text: string;
  message?: string;
  phone?: string;
  trustLine?: string;
  href?: string;
}

export default function InlineCTA({
  variant,
  text,
  message,
  phone = "407-773-2883",
  trustLine,
  href = "/contact",
}: InlineCTAProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  if (variant === "banner") {
    return (
      <div ref={ref} className="container-custom py-4">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-[var(--color-dark)] via-[var(--color-primary)] to-[var(--color-dark)] px-8 py-10 md:py-12"
        >
          <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-white/5 blur-[80px] pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-10">
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                {text}
              </h3>
              {message && (
                <p className="text-sm md:text-base text-white/80 leading-relaxed">
                  {message}
                </p>
              )}
              {trustLine && (
                <p className="mt-2 text-sm font-semibold text-white/90">
                  {trustLine}
                </p>
              )}
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 flex-shrink-0">
              <Link
                href={href}
                className="inline-flex items-center gap-2 bg-white text-[var(--color-dark)] font-semibold px-6 py-3.5 rounded-xl hover:bg-gray-100 transition-colors shadow-lg text-sm"
              >
                Schedule Free Test
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`tel:+1${phone.replace(/[^0-9]/g, "")}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                {phone}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  if (variant === "button") {
    return (
      <div ref={ref} className="py-8 text-center">
        <Link
          href={href}
          className="group inline-flex items-center gap-2 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] text-white font-semibold px-8 py-4 rounded-full hover:scale-105 transition-all shadow-lg text-sm"
        >
          {text}
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
        {trustLine && (
          <p className="text-[var(--color-text-secondary)] text-xs mt-2">
            {trustLine}
          </p>
        )}
      </div>
    );
  }

  // text variant
  return (
    <div ref={ref} className="py-4 text-center">
      <Link
        href={href}
        className="inline-flex items-center gap-1 text-[var(--color-primary)] font-semibold hover:text-[var(--color-primary-dark)] transition-colors group text-sm"
      >
        {text}
        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
}
