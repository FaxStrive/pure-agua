"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Mail } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { getTranslationArray } from "@/lib/i18n/getTranslationData";
import { viewportConfig, staggerContainer, staggerItem, blurReveal } from "@/lib/animations";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { WaterButton } from "@/components/ui/water-button";
import { TextAnimate } from "@/components/magicui/text-animate";

interface Position {
  title: string;
  type: string;
  location: string;
  description: string;
}

export function OpenPositions() {
  const { t } = useLanguage();

  const positions = getTranslationArray<Position>("careersPage", "positions");

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-[var(--color-surface)]" />
      <div className="absolute top-0 right-1/3 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(0,159,227,0.04) 0%, transparent 70%)" }} />
      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(59,214,245,0.03) 0%, transparent 70%)" }} />

      <div className="container-custom relative max-w-3xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={blurReveal.initial}
          whileInView={blurReveal.animate}
          viewport={viewportConfig}
          transition={blurReveal.transition}
        >
          <span className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-primary)] mb-4">
            <span className="w-8 h-px bg-[var(--color-primary)]" />
            {t("careersPage", "positionsLabel")}
          </span>
          <TextAnimate animation="blurInUp" by="word" as="h2" className="heading-md font-bold text-[var(--color-foreground)]">
            {t("careersPage", "positionsHeading")}
          </TextAnimate>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={viewportConfig}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {positions.map((pos, i) => (
              <motion.div key={i} variants={staggerItem}>
                <AccordionItem
                  value={`position-${i}`}
                  className="bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] px-6 data-[state=open]:shadow-md data-[state=open]:border-[var(--color-primary)]/20 transition-all"
                >
                  <AccordionTrigger className="py-5 hover:no-underline">
                    <div className="text-left">
                      <h3 className="font-bold text-[var(--color-foreground)] text-lg mb-1">
                        {pos.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-[var(--color-muted)]">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {pos.type}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {pos.location}
                        </span>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <p className="text-[var(--color-muted)] leading-relaxed mb-6">
                      {pos.description}
                    </p>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                      <a href="mailto:careers@pureaguafl.com">
                        <WaterButton className="px-6 py-2.5 text-sm">
                          <Mail className="w-4 h-4" />
                          {t("careersPage", "applyNow")}
                        </WaterButton>
                      </a>
                      <p className="text-xs text-[var(--color-muted)]">
                        {t("careersPage", "applyInstructions")} careers@pureaguafl.com
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        <motion.p
          className="text-center text-sm text-[var(--color-muted)] mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportConfig}
        >
          {t("careersPage", "noPositions")}
        </motion.p>
      </div>
    </section>
  );
}
