"use client";

import { motion } from "framer-motion";
import { Filter, Droplets, Waves, Pipette, Check } from "lucide-react";
import Image from "next/image";
import { viewportConfig } from "@/lib/animations";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translations } from "@/lib/i18n/translations";

const serviceIcons = [Filter, Droplets, Waves, Pipette];
const serviceIds = ["whole-home", "reverse-osmosis", "water-softening", "well-water"];
const serviceImages = [
  {
    src: "https://images.pexels.com/photos/327090/pexels-photo-327090.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Clean sparkling water being poured",
  },
  {
    src: "https://images.pexels.com/photos/6032817/pexels-photo-6032817.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Pouring purified drinking water",
  },
  {
    src: "https://images.pexels.com/photos/4262413/pexels-photo-4262413.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Family enjoying clean water at home",
  },
  {
    src: "https://images.pexels.com/photos/2962405/pexels-photo-2962405.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Well water treatment and filtration system",
  },
];

export function ServiceDetail() {
  const { language } = useLanguage();

  const services = translations.serviceDetail.services.map((s, i) => ({
    id: serviceIds[i],
    icon: serviceIcons[i],
    title: s.title[language],
    subtitle: s.subtitle[language],
    description: s.description[language],
    features: s.features[language],
    image: serviceImages[i].src,
    imageAlt: serviceImages[i].alt,
  }));

  return (
    <section className="relative py-24 lg:py-32 bg-[var(--color-surface)] overflow-hidden">
      <div className="relative container-custom">
        <div className="space-y-16 sm:space-y-24 lg:space-y-32">
          {services.map((service, index) => (
            <ServiceBlock key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceBlock({
  service,
  index,
}: {
  service: {
    id: string;
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    subtitle: string;
    description: string;
    features: readonly string[];
    image: string;
    imageAlt: string;
  };
  index: number;
}) {
  const isReversed = index % 2 === 1;

  return (
    <motion.div
      id={service.id}
      className="scroll-mt-24"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportConfig}
      transition={{ duration: 0.6 }}
    >
      <div
        className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
          isReversed ? "lg:grid-flow-dense" : ""
        }`}
      >
        {/* Image */}
        <div className={`relative ${isReversed ? "lg:col-start-2" : ""}`}>
          <div className="rounded-2xl overflow-hidden">
            <Image
              src={service.image}
              alt={service.imageAlt}
              width={800}
              height={600}
              className="w-full h-auto object-cover aspect-[4/3]"
            />
          </div>
        </div>

        {/* Content */}
        <div className={isReversed ? "lg:col-start-1" : ""}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-px bg-[var(--color-primary)]" />
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-primary)]">
              {service.subtitle}
            </span>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--color-foreground)] leading-tight mb-5">
            {service.title}
          </h2>
          <p className="text-[var(--color-muted)] leading-relaxed mb-8">
            {service.description}
          </p>

          <div className="grid sm:grid-cols-2 gap-3">
            {service.features.map((feature, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-2.5"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewportConfig}
                transition={{ delay: i * 0.05 }}
              >
                <div className="w-5 h-5 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-[var(--color-primary)]" />
                </div>
                <span className="text-sm text-[var(--color-foreground)]">
                  {feature}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
