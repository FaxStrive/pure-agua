"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Shield, Clock, Star, Users, Droplets, GlassWater, Waves, FlaskConical, Check } from "lucide-react";
import { InnerPageHero } from "@/components/sections/shared/InnerPageHero";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translations } from "@/lib/i18n/translations";
import { viewportConfig } from "@/lib/animations";
import { NumberTicker } from "@/components/magicui/number-ticker";
import GlassLiftCard from "@/components/animations/glass-lift-card";
import { WaterEdge } from "@/components/animations/water-edge";
import WaterCaustics from "@/components/animations/water-caustics";
import { WaterButton } from "@/components/ui/water-button";
import { slideRevealLeft, slideRevealRight } from "@/lib/animations";

import InlineCTABanner from "@/components/conversion/InlineCTABanner";
import { Guarantee } from "@/components/sections/services/Guarantee";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";

const serviceIcons = [Droplets, GlassWater, Waves, FlaskConical];
const serviceIds = ["whole-home", "reverse-osmosis", "water-softening", "well-water"];
const serviceImages = [
  { src: "https://images.pexels.com/photos/2339722/pexels-photo-2339722.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Whole home water filtration" },
  { src: "https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Reverse osmosis purified water" },
  { src: "https://images.pexels.com/photos/1556704/pexels-photo-1556704.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Water softening system" },
  { src: "https://images.pexels.com/photos/2962405/pexels-photo-2962405.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Well water treatment" },
];

const whyReasons = [
  { icon: Shield, title: { en: "Licensed & Insured", es: "Licencia y Seguro" }, desc: { en: "Fully licensed Florida contractor with comprehensive liability coverage.", es: "Contratista de Florida con licencia completa y cobertura integral." } },
  { icon: Clock, title: { en: "Same-Day Service", es: "Servicio el Mismo Dia" }, desc: { en: "Fast response times with most installations completed in under 3 hours.", es: "Tiempos de respuesta rapidos con la mayoria de instalaciones en menos de 3 horas." } },
  { icon: Star, title: { en: "5-Star Rated", es: "5 Estrellas" }, desc: { en: "Consistently rated 5 stars by our Central Florida customers.", es: "Consistentemente calificados con 5 estrellas por nuestros clientes." } },
  { icon: Users, title: { en: "Family Owned", es: "Empresa Familiar" }, desc: { en: "Local, family-owned business serving Central Florida communities.", es: "Negocio familiar local que sirve a las comunidades del centro de Florida." } },
];

export function ServicesOverviewClient() {
  const { t, language } = useLanguage();

  const services = translations.serviceDetail?.services?.map((s, i) => ({
    id: serviceIds[i],
    icon: serviceIcons[i],
    title: s.title[language],
    subtitle: s.subtitle[language],
    description: s.description[language],
    features: s.features[language],
    image: serviceImages[i].src,
    imageAlt: serviceImages[i].alt,
  })) || [];

  return (
    <>
      <InnerPageHero
        image="https://images.pexels.com/photos/2339722/pexels-photo-2339722.jpeg?auto=compress&cs=tinysrgb&w=1920"
        imageAlt="Water filtration services"
        label={t("servicesHero", "label")}
        headline1={t("servicesHero", "headline1")}
        headline2={t("servicesHero", "headline2")}
        description={t("servicesHero", "description")}
        variant="gradient"
        ctaText={t("nav", "freeWaterTest")}
        ctaHref="/contact"
        breadcrumbs={[
          { label: t("common", "home"), href: "/" },
          { label: t("common", "services") },
        ]}
      />

      {/* Bento-Style Service Grid */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(160deg, rgba(0,159,227,0.03) 0%, transparent 40%, rgba(59,214,245,0.02) 100%)" }} />

        <div className="container-custom relative">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-10 h-px bg-[var(--color-primary)]" />
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-primary)]">
                {t("services", "label")}
              </span>
              <div className="w-10 h-px bg-[var(--color-primary)]" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[var(--color-foreground)] leading-tight mb-5">
              {t("services", "heading")}
            </h2>
            <p className="text-lg text-[var(--color-muted)] max-w-2xl mx-auto leading-relaxed">
              {t("services", "subheading")}
            </p>
          </motion.div>

          {/* Bento grid: 2 large + 2 medium */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, i) => {
              const Icon = service.icon;
              const isLarge = i < 2;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportConfig}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                >
                  <Link href={`/services/${service.id}`} className="block group">
                    <GlassLiftCard className="rounded-2xl">
                      <WaterEdge borderRadius="1rem">
                        <div className={`relative rounded-2xl overflow-hidden ${isLarge ? "aspect-[16/10]" : "aspect-[16/9]"}`}>
                          <Image
                            src={service.image}
                            alt={service.imageAlt}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-dark)] via-[var(--color-dark)]/40 to-transparent" />

                          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-xs font-semibold text-[var(--color-dark)]">
                              {t("services", "learnMore")}
                            </span>
                            <ArrowRight className="w-3 h-3 text-[var(--color-primary)]" />
                          </div>

                          <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                            <div className="flex items-center gap-3 mb-3">
                              <div className="w-9 h-9 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center">
                                <Icon className="w-5 h-5 text-white" />
                              </div>
                              <span className="text-xs font-medium uppercase tracking-wider text-white/60">{service.subtitle}</span>
                            </div>
                            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">{service.title}</h3>
                            <p className="text-sm text-white/70 leading-relaxed line-clamp-2 max-w-md mb-4">{service.description}</p>
                            <div className="flex items-center gap-2 text-white/80 text-sm font-medium group-hover:gap-3 transition-all duration-300">
                              {t("services", "learnMore")}
                              <ArrowRight className="w-4 h-4" />
                            </div>
                          </div>
                        </div>
                      </WaterEdge>
                    </GlassLiftCard>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Scroll Strip */}
      <StatsScroll language={language} />

      {/* Inline CTA */}
      <InlineCTABanner
        headline={language === "es" ? "No esta seguro que sistema necesita?" : "Not Sure Which System You Need?"}
        subtext={language === "es" ? "Nuestros expertos analizaran su agua y recomendaran la solucion perfecta." : "Our experts will analyze your water and recommend the perfect solution."}
        buttonText={language === "es" ? "Consulta Gratuita" : "Free Consultation"}
        variant="gradient"
      />

      {/* Why Choose Us */}
      <WhyChooseSection language={language} />

      {/* Service Details - Alternating layout */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[var(--color-surface)]" />
        <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(170deg, transparent 0%, rgba(0,159,227,0.02) 50%, transparent 100%)" }} />

        <div className="container-custom relative space-y-20 lg:space-y-28">
          {services.map((service, i) => {
            const isReversed = i % 2 === 1;
            return (
              <motion.div
                key={service.id}
                id={service.id}
                className="scroll-mt-24"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportConfig}
                transition={{ duration: 0.6 }}
              >
                <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${isReversed ? "lg:grid-flow-dense" : ""}`}>
                  <motion.div
                    className={`relative ${isReversed ? "lg:col-start-2" : ""}`}
                    initial={{ opacity: 0, x: isReversed ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={viewportConfig}
                    transition={{ duration: 0.7 }}
                  >
                    <div className="rounded-2xl overflow-hidden shadow-2xl shadow-[var(--color-primary)]/10">
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        width={800}
                        height={600}
                        className="w-full h-auto object-cover aspect-[4/3]"
                      />
                    </div>
                  </motion.div>

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
                    <div className="grid sm:grid-cols-2 gap-3 mb-8">
                      {service.features.map((feature, fi) => (
                        <motion.div
                          key={fi}
                          className="flex items-start gap-2.5"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={viewportConfig}
                          transition={{ delay: fi * 0.05 }}
                        >
                          <div className="w-5 h-5 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-[var(--color-primary)]" />
                          </div>
                          <span className="text-sm text-[var(--color-foreground)]">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                    <Link href={`/services/${service.id}`}>
                      <WaterButton className="text-sm font-semibold px-6 py-3">
                        {t("services", "learnMore")}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </WaterButton>
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <Guarantee />
      <Testimonials />
      <CTA />
    </>
  );
}

/* -------- Sub-components -------- */

function StatsScroll({ language }: { language: "en" | "es" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const stats = [
    { value: 500, suffix: "+", label: language === "es" ? "Sistemas Instalados" : "Systems Installed" },
    { value: 10, suffix: "+", label: language === "es" ? "Anos Experiencia" : "Years Experience" },
    { value: 4, suffix: "", label: language === "es" ? "Tipos de Sistemas" : "System Types" },
    { value: 100, suffix: "%", label: language === "es" ? "Satisfaccion" : "Satisfaction" },
  ];

  return (
    <section ref={ref} className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-primary)]" />
      <WaterCaustics variant="dark" speed={8} />
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <p className="text-3xl md:text-4xl font-bold text-white mb-1">
                {isInView ? <NumberTicker value={stat.value} delay={0.2 + i * 0.15} /> : "0"}
                {stat.suffix}
              </p>
              <p className="text-sm text-white/70">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseSection({ language }: { language: "en" | "es" }) {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(155deg, transparent 0%, rgba(59,214,245,0.03) 60%, transparent 100%)" }} />

      <div className="container-custom relative">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
        >
          <span className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-primary)] mb-4">
            <span className="w-8 h-px bg-[var(--color-primary)]" />
            {language === "es" ? "Por Que Elegirnos" : "Why Choose Us"}
            <span className="w-8 h-px bg-[var(--color-primary)]" />
          </span>
          <h2 className="heading-md font-bold text-[var(--color-foreground)]">
            {language === "es" ? "La Diferencia Pure Agua" : "The Pure Agua Difference"}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyReasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={i}
                initial={i % 2 === 0 ? slideRevealLeft.initial : slideRevealRight.initial}
                whileInView={i % 2 === 0 ? slideRevealLeft.animate : slideRevealRight.animate}
                viewport={viewportConfig}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <GlassLiftCard className="rounded-2xl h-full">
                  <div className="relative p-6 rounded-2xl bg-white border border-[var(--color-border)] h-full group hover:shadow-md hover:border-[var(--color-primary)]/15 transition-all duration-300 text-center">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-accent)]/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-[var(--color-primary)]" />
                    </div>
                    <h3 className="text-base font-bold text-[var(--color-foreground)] mb-2">{reason.title[language]}</h3>
                    <p className="text-sm text-[var(--color-muted)] leading-relaxed">{reason.desc[language]}</p>
                  </div>
                </GlassLiftCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
