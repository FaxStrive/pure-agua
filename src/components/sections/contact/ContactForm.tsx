"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Clock, Send, ArrowRight, Calendar } from "lucide-react";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { viewportConfig } from "@/lib/animations";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { TextAnimate } from "@/components/magicui/text-animate";
import WaterCaustics from "@/components/animations/water-caustics";

export function ContactForm() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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

  const getMinDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split("T")[0];
  };

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

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {submitted ? (
              <motion.div
                className="bg-white rounded-2xl p-12 border border-[var(--color-border)] shadow-xl shadow-black/[0.03] text-center"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-16 h-16 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center mx-auto mb-6">
                  <Send className="w-8 h-8 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-2xl font-bold text-[var(--color-foreground)] mb-3">
                  {t("contactForm", "successTitle")}
                </h3>
                <p className="text-[var(--color-muted)] max-w-sm mx-auto">
                  {t("contactForm", "successMessage")}
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl p-5 sm:p-8 lg:p-10 border border-[var(--color-border)] shadow-xl shadow-black/[0.03]"
              >
                <div className="flex items-center gap-3 mb-8">
                  <Calendar className="w-5 h-5 text-[var(--color-primary)]" />
                  <h3 className="text-xl font-bold text-[var(--color-foreground)]">
                    {t("contactForm", "formTitle")}
                  </h3>
                </div>

                <div className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-[var(--color-foreground)] mb-2">
                        {t("contactForm", "fullName")}
                      </label>
                      <Input
                        required
                        placeholder={t("contactForm", "yourName")}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="rounded-xl border-[var(--color-border)]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--color-foreground)] mb-2">
                        {t("contactForm", "phone")}
                      </label>
                      <Input
                        type="tel"
                        placeholder="(555) 123-4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="rounded-xl border-[var(--color-border)]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--color-foreground)] mb-2">
                      {t("contactForm", "email")}
                    </label>
                    <Input
                      required
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="rounded-xl border-[var(--color-border)]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--color-foreground)] mb-2">
                      {t("contactForm", "serviceInterest")}
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="flex h-10 w-full rounded-xl border border-[var(--color-border)] bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)]"
                    >
                      <option value="">{t("contactForm", "selectService")}</option>
                      <option value="water-test">{t("contactForm", "freeWaterTest")}</option>
                      <option value="whole-home">{t("contactForm", "wholeHome")}</option>
                      <option value="reverse-osmosis">{t("contactForm", "reverseOsmosisOpt")}</option>
                      <option value="water-softening">{t("contactForm", "waterSofteningOpt")}</option>
                      <option value="well-water">{t("contactForm", "wellWaterOpt")}</option>
                      <option value="maintenance">{t("contactForm", "maintenance")}</option>
                      <option value="other">{t("contactForm", "other")}</option>
                    </select>
                  </div>

                  {/* Booking */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-[var(--color-foreground)] mb-2">
                        {t("contactForm", "preferredDate")}
                      </label>
                      <Input
                        type="date"
                        min={getMinDate()}
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="rounded-xl border-[var(--color-border)]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--color-foreground)] mb-2">
                        {t("contactForm", "preferredTime")}
                      </label>
                      <select
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="flex h-10 w-full rounded-xl border border-[var(--color-border)] bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)]"
                      >
                        <option value="">{t("contactForm", "selectTime")}</option>
                        <option value="morning">{t("contactForm", "morning")}</option>
                        <option value="afternoon">{t("contactForm", "afternoon")}</option>
                        <option value="evening">{t("contactForm", "evening")}</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--color-foreground)] mb-2">
                      {t("contactForm", "message")}
                    </label>
                    <Textarea
                      placeholder={t("contactForm", "messagePlaceholder")}
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="rounded-xl border-[var(--color-border)] resize-none"
                    />
                  </div>

                  <ShimmerButton type="submit" className="w-full py-6 text-base font-semibold">
                    <span className="flex items-center justify-center gap-2 text-white">
                      {t("contactForm", "scheduleButton")}
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </ShimmerButton>

                  <p className="text-xs text-center text-[var(--color-muted)]">
                    {t("contactForm", "noObligationNote")}
                  </p>
                  <p className="text-[11px] text-center text-[var(--color-muted)] leading-relaxed">
                    By submitting your phone number, you consent to receive text messages from Pure Agua Enterprises. Message and data rates may apply. Reply STOP to unsubscribe. See our{" "}
                    <a href="/privacy" className="underline hover:text-[var(--color-primary)]">Privacy Policy</a> and{" "}
                    <a href="/terms" className="underline hover:text-[var(--color-primary)]">Terms of Service</a>.
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
