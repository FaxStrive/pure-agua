"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, User, Mail, Phone, FileText, Briefcase, ChevronDown } from "lucide-react";
import { viewportConfig, staggerContainer, staggerItem, blurReveal } from "@/lib/animations";
import { TextAnimate } from "@/components/magicui/text-animate";
import { WaterButton } from "@/components/ui/water-button";
import WaterCaustics from "@/components/animations/water-caustics";

const POSITIONS = [
  { value: "sales-rep", label: "Sales Representative" },
  { value: "hr", label: "Human Resources" },
  { value: "installer-tech", label: "Installer / Service Technician" },
  { value: "other", label: "Other" },
];

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  position: string;
  experience: string;
  message: string;
}

const initialFormData: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  position: "",
  experience: "",
  message: "",
};

export function ApplicationForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");

    try {
      const res = await fetch("/api/careers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          position:
            POSITIONS.find((p) => p.value === formData.position)?.label ||
            formData.position,
        }),
      });

      if (!res.ok) throw new Error("Submission failed");

      setSending(false);
      setSubmitted(true);
    } catch {
      setSending(false);
      setError(
        "Something went wrong. Please try again or email us directly at info@pureaguaenterprise.com"
      );
    }
  };

  const inputClasses =
    "w-full rounded-xl border border-[var(--color-border)] bg-white px-4 py-3.5 text-[var(--color-foreground)] placeholder:text-[var(--color-text-muted)] outline-none transition-all duration-300 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/10 hover:border-[var(--color-primary)]/30";

  const labelClasses =
    "flex items-center gap-2 text-sm font-medium text-[var(--color-foreground)] mb-2";

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background treatment */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[var(--color-surface)] to-white" />
      <div
        className="absolute top-1/4 -right-20 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0,159,227,0.04) 0%, rgba(59,214,245,0.02) 40%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(8,73,120,0.03) 0%, transparent 70%)",
        }}
      />
      <WaterCaustics variant="light" speed={16} className="opacity-40" />

      <div className="relative container-custom">
        {/* Section header */}
        <motion.div
          className="text-center mb-14"
          initial={blurReveal.initial}
          whileInView={blurReveal.animate}
          viewport={viewportConfig}
          transition={blurReveal.transition}
        >
          <span className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-primary)] mb-4">
            <span className="w-8 h-px bg-[var(--color-primary)]" />
            Apply Today
          </span>
          <TextAnimate
            animation="blurInUp"
            by="word"
            as="h2"
            className="heading-md font-bold text-[var(--color-foreground)] mb-4"
          >
            Start Your Application
          </TextAnimate>
          <p className="text-[var(--color-muted)] max-w-xl mx-auto leading-relaxed">
            Fill out the form below and our team will review your application.
            We will get back to you within 48 hours.
          </p>
        </motion.div>

        {/* Form card */}
        <motion.div
          className="max-w-2xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={viewportConfig}
        >
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="bg-white rounded-2xl border border-[var(--color-border)] shadow-xl shadow-black/[0.03] p-12 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 12 }}
                >
                  <CheckCircle className="w-16 h-16 text-[var(--color-success)] mx-auto mb-6" />
                </motion.div>
                <h3 className="text-2xl font-bold text-[var(--color-foreground)] mb-3">
                  Application Sent!
                </h3>
                <p className="text-[var(--color-muted)] mb-8 leading-relaxed">
                  Thank you for your interest in joining the Pure Agua team.
                  We will review your application and reach out within 48 hours.
                </p>
                <WaterButton
                  onClick={() => {
                    setSubmitted(false);
                    setFormData(initialFormData);
                  }}
                  className="px-8 py-3"
                >
                  Submit Another Application
                </WaterButton>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                className="bg-white rounded-2xl border border-[var(--color-border)] shadow-xl shadow-black/[0.03] p-8 lg:p-10"
              >
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  {/* Position selector */}
                  <motion.div variants={staggerItem}>
                    <label htmlFor="position" className={labelClasses}>
                      <Briefcase className="w-4 h-4 text-[var(--color-primary)]" />
                      Position You Are Applying For
                    </label>
                    <div className="relative">
                      <select
                        id="position"
                        name="position"
                        required
                        value={formData.position}
                        onChange={handleChange}
                        className={`${inputClasses} appearance-none cursor-pointer pr-10`}
                      >
                        <option value="" disabled>
                          Select a position...
                        </option>
                        {POSITIONS.map((pos) => (
                          <option key={pos.value} value={pos.value}>
                            {pos.label}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-muted)] pointer-events-none" />
                    </div>
                  </motion.div>

                  {/* Name row */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <motion.div variants={staggerItem}>
                      <label htmlFor="firstName" className={labelClasses}>
                        <User className="w-4 h-4 text-[var(--color-primary)]" />
                        First Name
                      </label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        placeholder="John"
                        value={formData.firstName}
                        onChange={handleChange}
                        className={inputClasses}
                      />
                    </motion.div>

                    <motion.div variants={staggerItem}>
                      <label htmlFor="lastName" className={labelClasses}>
                        <User className="w-4 h-4 text-[var(--color-primary)]" />
                        Last Name
                      </label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={handleChange}
                        className={inputClasses}
                      />
                    </motion.div>
                  </div>

                  {/* Contact row */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <motion.div variants={staggerItem}>
                      <label htmlFor="email" className={labelClasses}>
                        <Mail className="w-4 h-4 text-[var(--color-primary)]" />
                        Email Address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className={inputClasses}
                      />
                    </motion.div>

                    <motion.div variants={staggerItem}>
                      <label htmlFor="phone" className={labelClasses}>
                        <Phone className="w-4 h-4 text-[var(--color-primary)]" />
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="(407) 555-0123"
                        value={formData.phone}
                        onChange={handleChange}
                        className={inputClasses}
                      />
                    </motion.div>
                  </div>

                  {/* Experience */}
                  <motion.div variants={staggerItem}>
                    <label htmlFor="experience" className={labelClasses}>
                      <FileText className="w-4 h-4 text-[var(--color-primary)]" />
                      Years of Relevant Experience
                    </label>
                    <div className="relative">
                      <select
                        id="experience"
                        name="experience"
                        required
                        value={formData.experience}
                        onChange={handleChange}
                        className={`${inputClasses} appearance-none cursor-pointer pr-10`}
                      >
                        <option value="" disabled>
                          Select experience level...
                        </option>
                        <option value="0-1">Less than 1 year</option>
                        <option value="1-3">1 - 3 years</option>
                        <option value="3-5">3 - 5 years</option>
                        <option value="5+">5+ years</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-muted)] pointer-events-none" />
                    </div>
                  </motion.div>

                  {/* Message */}
                  <motion.div variants={staggerItem}>
                    <label htmlFor="message" className={labelClasses}>
                      <FileText className="w-4 h-4 text-[var(--color-primary)]" />
                      Tell Us About Yourself
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Share your relevant experience, why you want to join Pure Agua, and anything else you would like us to know..."
                      value={formData.message}
                      onChange={handleChange}
                      className={`${inputClasses} resize-none`}
                    />
                  </motion.div>

                  {/* Error message */}
                  {error && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-600 text-sm text-center bg-red-50 rounded-xl px-4 py-3"
                    >
                      {error}
                    </motion.p>
                  )}

                  {/* Submit */}
                  <motion.div variants={staggerItem} className="pt-2">
                    <WaterButton
                      type="submit"
                      disabled={sending}
                      className="w-full px-8 py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {sending ? (
                        <span className="flex items-center gap-2">
                          <motion.span
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                            className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full"
                          />
                          Sending...
                        </span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Submit Application
                        </>
                      )}
                    </WaterButton>
                    <p className="text-xs text-[var(--color-muted)] text-center mt-4">
                      Your information is sent directly to our hiring team at info@pureaguaenterprise.com
                    </p>
                  </motion.div>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
