"use client";

import { motion } from "framer-motion";
import { Shield, Droplets, Users, Wrench, Award, HeartHandshake } from "lucide-react";
import Link from "next/link";
import { viewportConfig } from "@/lib/animations";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { WaterButton } from "@/components/ui/water-button";
import { TextAnimate } from "@/components/magicui/text-animate";

const differentiators = [
  {
    icon: Users,
    title: "Family Owned",
    description: "Over 10 years serving Central Florida families with personal attention to every customer.",
  },
  {
    icon: Droplets,
    title: "Free Water Testing",
    description: "Comprehensive water analysis at no cost or obligation to identify your specific needs.",
  },
  {
    icon: Wrench,
    title: "Custom Solutions",
    description: "Systems designed specifically for your water quality -- never one-size-fits-all.",
  },
  {
    icon: Shield,
    title: "Lifetime Warranty",
    description: "Every installation backed by our lifetime warranty for complete peace of mind.",
  },
  {
    icon: Award,
    title: "Same-Day Install",
    description: "Professional installation completed in as little as one day with immediate results.",
  },
  {
    icon: HeartHandshake,
    title: "Ongoing Support",
    description: "Continued maintenance and support long after installation to keep your water pure.",
  },
];

export function WhyChooseUs() {
  const { t } = useLanguage();

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-[var(--color-dark)]">
      {/* Video background */}
      <div className="absolute inset-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="/videos/whole-home-process-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[var(--color-dark)]/[0.94]" />
      </div>

      <div className="relative container-custom z-10">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-px bg-[var(--color-accent)]" />
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-accent)]">
              {t("whyChooseUs", "label")}
            </span>
            <div className="w-10 h-px bg-[var(--color-accent)]" />
          </div>
          <TextAnimate animation="blurInUp" by="word" as="h2" className="text-3xl lg:text-5xl font-bold text-white leading-tight mb-6">
            {t("whyChooseUs", "heading")}
          </TextAnimate>
          <p className="text-lg text-white/60 leading-relaxed">
            {t("whyChooseUs", "description")}
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 mb-14">
          {differentiators.map((item, i) => (
            <motion.div
              key={i}
              className="group relative bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] rounded-2xl p-6 lg:p-8 hover:bg-white/[0.08] hover:border-white/[0.15] transition-all duration-500"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ delay: i * 0.08, duration: 0.5, type: "spring", stiffness: 120 }}
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center mb-5 group-hover:bg-[var(--color-accent)]/20 transition-colors duration-500">
                <item.icon className="w-6 h-6 text-[var(--color-accent)]" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ delay: 0.5 }}
        >
          <Link href="/contact">
            <WaterButton
              fillColor="var(--color-accent)"
              className="px-8 py-3 text-sm border-[var(--color-accent)] text-[var(--color-accent)]"
            >
              {t("nav", "freeWaterTest")}
            </WaterButton>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
