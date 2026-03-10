"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Calendar, HelpCircle, Phone } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { trackPhoneConversion } from "@/lib/gtag";

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const actions = [
    {
      icon: Calendar,
      label: t("chatWidget", "scheduleTest"),
      href: "/contact",
      primary: true,
    },
    {
      icon: HelpCircle,
      label: t("chatWidget", "askQuestion"),
      href: "/contact",
      primary: false,
    },
    {
      icon: Phone,
      label: t("chatWidget", "callNow"),
      href: "tel:+14077732883",
      primary: false,
    },
  ];

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      {/* Chat popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute bottom-16 right-0 w-64 sm:w-72 bg-white rounded-2xl shadow-2xl shadow-black/10 border border-[var(--color-border)] overflow-hidden mb-2"
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Header */}
            <div className="bg-[var(--color-primary)] px-5 py-4">
              <p className="text-white font-semibold text-sm">
                {t("chatWidget", "title")}
              </p>
              <p className="text-white/70 text-xs mt-0.5">
                {t("chatWidget", "greeting")}
              </p>
            </div>

            {/* Actions */}
            <div className="p-3 space-y-2">
              {actions.map((action) => {
                const content = (
                  <div
                    className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-200 cursor-pointer ${
                      action.primary
                        ? "bg-[rgba(var(--color-primary-rgb),0.05)] hover:bg-[rgba(var(--color-primary-rgb),0.1)] border border-[rgba(var(--color-primary-rgb),0.15)]"
                        : "hover:bg-[var(--color-surface)] border border-transparent"
                    }`}
                  >
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                        action.primary
                          ? "bg-[var(--color-primary)] text-white"
                          : "bg-[rgba(var(--color-primary-rgb),0.08)] text-[var(--color-primary)]"
                      }`}
                    >
                      <action.icon className="w-4 h-4" />
                    </div>
                    <span
                      className={`text-sm font-medium ${
                        action.primary
                          ? "text-[var(--color-primary)]"
                          : "text-[var(--color-foreground)]"
                      }`}
                    >
                      {action.label}
                    </span>
                  </div>
                );

                if (action.href.startsWith("tel:") || action.href.startsWith("mailto:")) {
                  return (
                    <a key={action.label} href={action.href} onClick={() => { setIsOpen(false); if (action.href.startsWith("tel:")) trackPhoneConversion(); }}>
                      {content}
                    </a>
                  );
                }

                return (
                  <Link key={action.label} href={action.href} onClick={() => setIsOpen(false)}>
                    {content}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center shadow-lg shadow-[rgba(var(--color-primary-rgb),0.3)] hover:shadow-[rgba(var(--color-primary-rgb),0.5)] hover:bg-[var(--color-secondary)] transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        <AnimatePresence mode="wait" initial={false}>
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <MessageCircle className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
