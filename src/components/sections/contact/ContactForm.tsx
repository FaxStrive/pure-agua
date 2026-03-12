"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Clock } from "lucide-react";
import { viewportConfig } from "@/lib/animations";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { TextAnimate } from "@/components/magicui/text-animate";
import WaterCaustics from "@/components/animations/water-caustics";

export function ContactForm() {
  const { t } = useLanguage();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const contactInfo = [
    {
      icon: MapPin,
      title: t("contactForm", "serviceArea"),
      details: ["Kissimmee, Orlando, St. Cloud", "Davenport, Lakeland, Sanford", "All of Central Florida"],
    },
    {
      icon: Mail,
      title: t("contactForm", "emailUs"),
      details: [t("contactForm", "contactThrough"), t("contactForm", "respondWithin")],
    },
    {
      icon: Clock,
      title: t("contactForm", "hours"),
      details: [t("contactForm", "monSat"), t("contactForm", "sunClosed")],
    },
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-[var(--color-surface)] overflow-hidden">
      {/* Section backgrounds */}
      <div className="absolute -top-20 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(8,73,120,0.03) 0%, transparent 70%)" }} />
      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(0,159,227,0.02) 0%, transparent 70%)" }} />
      <WaterCaustics variant="light" speed={14} className="opacity-60" />

      <div className="relative container-custom">
        <div className="grid lg:grid-cols-[1fr,1.4fr] gap-10 lg:gap-16">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-px bg-[var(--color-primary)]" />
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-primary)]">
                {t("contactForm", "heading")}
              </span>
            </div>

            <TextAnimate animation="blurInUp" by="word" as="h2" className="text-3xl lg:text-4xl font-bold text-[var(--color-foreground)] leading-tight mb-5">
              {t("contactForm", "heading")}
            </TextAnimate>
            <p className="text-[var(--color-muted)] leading-relaxed mb-10">
              {t("contactForm", "description")}
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, i) => (
                <motion.div
                  key={info.title}
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportConfig}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/5 flex items-center justify-center shrink-0">
                    <info.icon className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--color-foreground)] mb-1">
                      {info.title}
                    </h3>
                    {info.details.map((detail, j) => (
                      <p key={j} className="text-sm text-[var(--color-muted)]">
                        {detail}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - GHL Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl border border-[var(--color-border)] shadow-xl shadow-black/[0.03] overflow-hidden">
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/6vhJcN0hXPNf8gLJN1nZ"
                style={{ width: "100%", height: "727px", border: "none", borderRadius: "3px" }}
                id="inline-6vhJcN0hXPNf8gLJN1nZ"
                data-layout='{"id":"INLINE"}'
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="A2P Compliant Form"
                data-height="727"
                data-layout-iframe-id="inline-6vhJcN0hXPNf8gLJN1nZ"
                data-form-id="6vhJcN0hXPNf8gLJN1nZ"
                title="A2P Compliant Form"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
