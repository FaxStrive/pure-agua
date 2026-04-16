"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { trackPhoneConversion } from "@/lib/gtag";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/Logo";
import { useLanguage } from "@/lib/i18n/LanguageContext";

interface DropdownItem {
  href: string;
  label: string;
}

interface NavItem {
  href?: string;
  label: string;
  dropdown?: DropdownItem[];
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const { scrollY } = useScroll();
  const { t } = useLanguage();
  const pathname = usePathname();
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);

  const isHome = pathname === "/";

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const isTransparent = isHome && !isScrolled;

  const navItems: NavItem[] = [
    { href: "/", label: t("nav", "home") },
    {
      label: t("nav", "services"),
      dropdown: [
        { href: "/services/whole-home", label: t("common", "wholeHome") },
        { href: "/services/reverse-osmosis", label: t("common", "reverseOsmosis") },
        { href: "/services/water-softening", label: t("common", "waterSoftening") },
        { href: "/services/well-water", label: t("common", "wellWater") },
      ],
    },
    { href: "/about", label: t("common", "about") },
    { href: "/testimonials", label: t("nav", "testimonials") },
    { href: "/service-area", label: t("nav", "serviceArea") },
    { href: "/faq", label: t("nav", "faq") },
    { href: "/contact", label: t("nav", "contact") },
    { href: "/blog", label: "Blog" },
  ];

  const handleDropdownEnter = (label: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setOpenDropdown(label);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    };
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setMobileAccordion(null);
  }, [pathname]);

  return (
    <>
      <motion.header
        className={`z-50 transition-all duration-500 ${
          isTransparent
            ? "bg-transparent"
            : "bg-white/80 backdrop-blur-xl shadow-sm border-b border-[var(--color-primary)]/8"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <nav className="container-custom flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <Logo variant="horizontal" width={200} height={60} className="h-14 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown && handleDropdownEnter(item.label)}
                onMouseLeave={() => item.dropdown && handleDropdownLeave()}
              >
                {item.href ? (
                  <Link
                    href={item.href}
                    className={`px-3 py-2 text-sm font-medium transition-colors duration-300 rounded-lg ${
                      isTransparent
                        ? "text-white/90 hover:text-white hover:bg-white/10"
                        : "text-[var(--color-foreground)] hover:text-[var(--color-primary)] hover:bg-[var(--color-primary)]/5"
                    }`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors duration-300 rounded-lg ${
                      isTransparent
                        ? "text-white/90 hover:text-white hover:bg-white/10"
                        : "text-[var(--color-foreground)] hover:text-[var(--color-primary)] hover:bg-[var(--color-primary)]/5"
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        openDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                )}

                {/* Desktop dropdown */}
                <AnimatePresence>
                  {item.dropdown && openDropdown === item.label && (
                    <motion.div
                      className="absolute top-full left-0 pt-2"
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.15 }}
                    >
                      <div className="bg-white rounded-xl shadow-xl shadow-black/10 border border-black/[0.06] py-2 min-w-[220px]">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="block px-4 py-2.5 text-sm text-[var(--color-foreground)] hover:text-[var(--color-primary)] hover:bg-[var(--color-primary)]/5 transition-colors"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+14075128342"
              onClick={() => trackPhoneConversion()}
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                isTransparent
                  ? "text-white/70 hover:text-white"
                  : "text-[var(--color-muted)] hover:text-[var(--color-primary)]"
              }`}
            >
              <Phone className="w-4 h-4" />
              <span>{t("nav", "callUs")}</span>
            </a>

            <Link href="/contact">
              <Button className="bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] text-white rounded-full px-6 text-sm font-semibold shadow-lg shadow-[var(--color-primary)]/20 transition-all duration-300">
                {t("nav", "freeWaterTest")}
              </Button>
            </Link>
          </div>

          {/* Mobile toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileOpen(true)}
              className={`p-2 ${isTransparent ? "text-white" : "text-[var(--color-foreground)]"}`}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[60] bg-white overflow-y-auto"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="container-custom py-6">
              <div className="flex items-center justify-between mb-12">
                <Logo variant="horizontal" width={140} height={42} className="h-9 w-auto" />
                <button onClick={() => setMobileOpen(false)} className="p-2">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-2">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    {item.href ? (
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="block py-3 text-2xl sm:text-3xl font-bold text-[var(--color-foreground)] hover:text-[var(--color-primary)] transition-colors"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <div>
                        <button
                          onClick={() =>
                            setMobileAccordion(
                              mobileAccordion === item.label ? null : item.label
                            )
                          }
                          className="flex items-center justify-between w-full py-3 text-2xl sm:text-3xl font-bold text-[var(--color-foreground)] hover:text-[var(--color-primary)] transition-colors"
                        >
                          {item.label}
                          <ChevronDown
                            className={`w-6 h-6 transition-transform duration-200 ${
                              mobileAccordion === item.label ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {mobileAccordion === item.label && item.dropdown && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-4 pb-2 space-y-1">
                                {item.dropdown.map((subItem) => (
                                  <Link
                                    key={subItem.href}
                                    href={subItem.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="block py-2.5 text-lg text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors"
                                  >
                                    {subItem.label}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mt-12 pt-8 border-t border-[var(--color-border)]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <Link href="/contact" onClick={() => setMobileOpen(false)}>
                  <Button className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] text-white rounded-full py-6 text-lg font-semibold">
                    {t("nav", "freeWaterTest")}
                  </Button>
                </Link>
                <a
                  href="tel:+14075128342"
                  onClick={() => trackPhoneConversion()}
                  className="flex items-center justify-center gap-2 mt-4 text-[var(--color-muted)] font-medium"
                >
                  <Phone className="w-4 h-4" />
                  {t("nav", "callUs")}
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
