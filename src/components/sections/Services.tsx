"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { viewportConfig, blurReveal, slideRevealLeft, slideRevealRight } from "@/lib/animations";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translations } from "@/lib/i18n/translations";
import GlassLiftCard from "@/components/animations/glass-lift-card";
import { WaterEdge } from "@/components/animations/water-edge";

const serviceImages = [
  {
    src: "/images/whole-home-shower.jpg",
    alt: "Woman enjoying clean filtered shower water",
  },
  {
    src: "/images/ro-kitchen-sink.jpg",
    alt: "Father and son enjoying clean drinking water",
  },
  {
    src: "/images/water-softening-salt.jpg",
    alt: "Adding salt to water softening system",
  },
  {
    src: "/images/well-water-pipe.jpg",
    alt: "Well water flowing from pipe in rural setting",
  },
];

const serviceIds = ["whole-home", "reverse-osmosis", "water-softening", "well-water"];

export function Services() {
  const { t, language } = useLanguage();

  const services = [
    {
      ...serviceImages[0],
      id: serviceIds[0],
      title: translations.services.wholeHome.title[language],
      description: translations.services.wholeHome.description[language],
    },
    {
      ...serviceImages[1],
      id: serviceIds[1],
      title: translations.services.reverseOsmosis.title[language],
      description: translations.services.reverseOsmosis.description[language],
    },
    {
      ...serviceImages[2],
      id: serviceIds[2],
      title: translations.services.waterSoftening.title[language],
      description: translations.services.waterSoftening.description[language],
    },
    {
      ...serviceImages[3],
      id: serviceIds[3],
      title: translations.services.wellWater.title[language],
      description: translations.services.wellWater.description[language],
    },
  ];

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Diagonal sweep background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(160deg, rgba(0,159,227,0.03) 0%, transparent 40%, rgba(59,214,245,0.02) 100%)",
          }}
        />
        {/* Flowing SVG accent */}
        <svg className="absolute bottom-0 left-0 w-full h-32 opacity-[0.04]" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,60 C360,100 720,20 1080,60 C1260,80 1380,40 1440,50 L1440,120 L0,120Z" fill="var(--color-primary)" />
        </svg>
      </div>

      <div className="container-custom relative z-10">
        {/* Header - blurReveal */}
        <motion.div
          className="max-w-2xl mb-16"
          initial={blurReveal.initial}
          whileInView={blurReveal.animate}
          viewport={viewportConfig}
          transition={blurReveal.transition}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-px bg-[var(--color-primary)]" />
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-primary)]">
              {t("services", "label")}
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[var(--color-foreground)] leading-tight mb-5">
            {t("services", "heading")}
          </h2>
          <p className="text-lg text-[var(--color-muted)] leading-relaxed">
            {t("services", "subheading")}
          </p>
        </motion.div>

        {/* Service Cards - GlassLiftCard + WaterEdge, alternating slide reveals */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const slideDir = i % 2 === 0 ? slideRevealLeft : slideRevealRight;
            return (
              <motion.div
                key={service.id}
                className="group relative"
                initial={slideDir.initial}
                whileInView={slideDir.animate}
                viewport={viewportConfig}
                transition={{ ...slideDir.transition, delay: i * 0.1 }}
              >
                <Link href={`/services/${service.id}`} className="block">
                  <GlassLiftCard className="rounded-2xl">
                    <WaterEdge borderRadius="1rem">
                      <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[3/4]">
                        <Image
                          src={service.src}
                          alt={service.alt}
                          fill
                          className="object-cover transition-transform duration-700 ease-out group-hover:-translate-y-2"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-dark)] via-transparent to-transparent opacity-60" />

                        {/* Hover overlay badge */}
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="text-xs font-semibold text-[var(--color-dark)]">
                            {t("services", "learnMore")}
                          </span>
                          <ArrowRight className="w-3 h-3 text-[var(--color-primary)]" />
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <h3 className="text-2xl font-bold text-white mb-2">
                            {service.title}
                          </h3>
                          <div className="flex items-center gap-2 text-white/80 text-sm font-medium">
                            <span className="transition-transform duration-300 ease-out group-hover:-translate-x-1">
                              {t("services", "learnMore")}
                            </span>
                            <ArrowRight className="w-4 h-4 opacity-0 scale-75 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:scale-100" />
                          </div>
                        </div>
                      </div>
                    </WaterEdge>
                  </GlassLiftCard>

                  <p className="text-sm text-[var(--color-muted)] leading-relaxed line-clamp-2 mt-4">
                    {service.description}
                  </p>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
