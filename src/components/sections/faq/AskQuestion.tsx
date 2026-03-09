"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import MagneticWrapper from "@/components/animations/magnetic-wrapper";

export function AskQuestion() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section ref={ref} className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(0,159,227,0.04) 0%, transparent 60%)",
        }}
      />

      <div className="relative container-custom">
        <div className="max-w-2xl mx-auto">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span
              className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold text-[var(--color-primary)] mb-4"
              style={{ backgroundColor: "rgba(var(--color-primary-rgb, 0,159,227), 0.08)" }}
            >
              Have a Different Question?
            </span>
            <h2 className="text-2xl lg:text-3xl font-bold text-[var(--color-foreground)] leading-tight mb-3">
              Ask Us Anything
            </h2>
            <p className="text-[var(--color-muted)] leading-relaxed">
              Can&apos;t find what you&apos;re looking for? Send us your question and we&apos;ll get back to you within 24 hours.
            </p>
          </motion.div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white border border-[var(--color-border)] rounded-2xl p-10 text-center shadow-lg"
            >
              <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-[var(--color-foreground)] mb-2">
                Question Received!
              </h3>
              <p className="text-[var(--color-muted)] text-sm">
                We&apos;ll get back to you within 24 hours. Check your email for our response.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 text-sm font-medium text-[var(--color-primary)] hover:underline"
              >
                Ask another question
              </button>
            </motion.div>
          ) : (
            <motion.form
              onSubmit={handleSubmit}
              className="bg-white border border-[var(--color-border)] rounded-2xl p-6 sm:p-8 shadow-lg space-y-5"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="faq-name" className="block text-sm font-medium text-[var(--color-foreground)] mb-1.5">
                    Name
                  </label>
                  <input
                    id="faq-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] text-sm text-[var(--color-foreground)] placeholder:text-[var(--color-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)] transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="faq-email" className="block text-sm font-medium text-[var(--color-foreground)] mb-1.5">
                    Email
                  </label>
                  <input
                    id="faq-email"
                    name="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] text-sm text-[var(--color-foreground)] placeholder:text-[var(--color-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)] transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="faq-phone" className="block text-sm font-medium text-[var(--color-foreground)] mb-1.5">
                  Phone <span className="text-[var(--color-muted)] font-normal">(optional)</span>
                </label>
                <input
                  id="faq-phone"
                  name="phone"
                  type="tel"
                  placeholder="(407) 000-0000"
                  className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] text-sm text-[var(--color-foreground)] placeholder:text-[var(--color-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)] transition-all"
                />
              </div>

              <div>
                <label htmlFor="faq-question" className="block text-sm font-medium text-[var(--color-foreground)] mb-1.5">
                  Your Question
                </label>
                <textarea
                  id="faq-question"
                  name="question"
                  required
                  rows={4}
                  placeholder="What would you like to know about our water filtration services?"
                  className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] text-sm text-[var(--color-foreground)] placeholder:text-[var(--color-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)] transition-all resize-none"
                />
              </div>

              <MagneticWrapper strength={0.2}>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] text-white rounded-full py-6 text-sm font-semibold transition-all duration-300 group"
                >
                  Send Your Question
                  <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </MagneticWrapper>

              <p className="text-xs text-[var(--color-muted)] text-center">
                We typically respond within 24 hours. Your information is kept private.
              </p>
            </motion.form>
          )}
        </div>
      </div>
    </section>
  );
}
