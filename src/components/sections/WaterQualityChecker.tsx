"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  AlertTriangle,
  Lock,
  ArrowRight,
  Shield,
  CheckCircle,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/lib/i18n/LanguageContext";

interface Contaminant {
  name: string;
  detected: string;
  ewgGuideline: string;
  legalLimit: string;
  timesOver: number;
  healthRisk: string;
}

interface WaterData {
  utility: string;
  populationServed: string;
  source: string;
  contaminants: Contaminant[];
  totalContaminants: number;
}

// Real contaminant data based on EWG findings for Central Florida utilities
const centralFloridaData: Record<string, WaterData> = {
  // Toho Water Authority - serves most of Kissimmee/St. Cloud area
  toho: {
    utility: "Toho Water Authority",
    populationServed: "110,102",
    source: "Groundwater",
    totalContaminants: 11,
    contaminants: [
      {
        name: "Haloacetic acids (HAA5)",
        detected: "29.3 ppb",
        ewgGuideline: "0.1 ppb",
        legalLimit: "60 ppb",
        timesOver: 293,
        healthRisk: "Cancer",
      },
      {
        name: "Haloacetic acids (HAA9)",
        detected: "32.9 ppb",
        ewgGuideline: "0.06 ppb",
        legalLimit: "No legal limit",
        timesOver: 548,
        healthRisk: "Cancer",
      },
      {
        name: "Total trihalomethanes (TTHMs)",
        detected: "49.3 ppb",
        ewgGuideline: "0.15 ppb",
        legalLimit: "80 ppb",
        timesOver: 328,
        healthRisk: "Cancer",
      },
      {
        name: "Chlorate",
        detected: "269.7 ppb",
        ewgGuideline: "210 ppb",
        legalLimit: "No legal limit",
        timesOver: 1.3,
        healthRisk: "Thyroid function",
      },
      {
        name: "Chromium (hexavalent)",
        detected: "0.00708 ppb",
        ewgGuideline: "0.02 ppb",
        legalLimit: "No specific limit",
        timesOver: 0,
        healthRisk: "Cancer",
      },
      {
        name: "Barium",
        detected: "13.7 ppb",
        ewgGuideline: "700 ppb",
        legalLimit: "2000 ppb",
        timesOver: 0,
        healthRisk: "Cardiovascular",
      },
      {
        name: "Fluoride",
        detected: "0.244 ppm",
        ewgGuideline: "N/A",
        legalLimit: "4 ppm",
        timesOver: 0,
        healthRisk: "Dental/Bone health",
      },
      {
        name: "Manganese",
        detected: "0.698 ppb",
        ewgGuideline: "100 ppb",
        legalLimit: "No legal limit",
        timesOver: 0,
        healthRisk: "Neurological",
      },
      {
        name: "Strontium",
        detected: "0.558 ppb",
        ewgGuideline: "1,500 ppb",
        legalLimit: "No legal limit",
        timesOver: 0,
        healthRisk: "Bone health",
      },
      {
        name: "Vanadium",
        detected: "0.0833 ppb",
        ewgGuideline: "21 ppb",
        legalLimit: "No legal limit",
        timesOver: 0,
        healthRisk: "Developmental",
      },
      {
        name: "Molybdenum",
        detected: "4.06 ppb",
        ewgGuideline: "40 ppb",
        legalLimit: "No legal limit",
        timesOver: 0,
        healthRisk: "Metabolic",
      },
    ],
  },
  // Orlando Utilities Commission
  ouc: {
    utility: "Orlando Utilities Commission",
    populationServed: "312,472",
    source: "Groundwater",
    totalContaminants: 10,
    contaminants: [
      {
        name: "Haloacetic acids (HAA5)",
        detected: "25.1 ppb",
        ewgGuideline: "0.1 ppb",
        legalLimit: "60 ppb",
        timesOver: 251,
        healthRisk: "Cancer",
      },
      {
        name: "Total trihalomethanes (TTHMs)",
        detected: "42.7 ppb",
        ewgGuideline: "0.15 ppb",
        legalLimit: "80 ppb",
        timesOver: 284,
        healthRisk: "Cancer",
      },
      {
        name: "Haloacetic acids (HAA9)",
        detected: "28.4 ppb",
        ewgGuideline: "0.06 ppb",
        legalLimit: "No legal limit",
        timesOver: 473,
        healthRisk: "Cancer",
      },
      {
        name: "Chlorate",
        detected: "184 ppb",
        ewgGuideline: "210 ppb",
        legalLimit: "No legal limit",
        timesOver: 0,
        healthRisk: "Thyroid function",
      },
      {
        name: "Chromium (hexavalent)",
        detected: "0.0112 ppb",
        ewgGuideline: "0.02 ppb",
        legalLimit: "No specific limit",
        timesOver: 0,
        healthRisk: "Cancer",
      },
      {
        name: "Barium",
        detected: "18.2 ppb",
        ewgGuideline: "700 ppb",
        legalLimit: "2000 ppb",
        timesOver: 0,
        healthRisk: "Cardiovascular",
      },
      {
        name: "Fluoride",
        detected: "0.72 ppm",
        ewgGuideline: "N/A",
        legalLimit: "4 ppm",
        timesOver: 0,
        healthRisk: "Dental/Bone health",
      },
      {
        name: "Manganese",
        detected: "1.2 ppb",
        ewgGuideline: "100 ppb",
        legalLimit: "No legal limit",
        timesOver: 0,
        healthRisk: "Neurological",
      },
      {
        name: "Strontium",
        detected: "0.84 ppb",
        ewgGuideline: "1,500 ppb",
        legalLimit: "No legal limit",
        timesOver: 0,
        healthRisk: "Bone health",
      },
      {
        name: "Vanadium",
        detected: "0.112 ppb",
        ewgGuideline: "21 ppb",
        legalLimit: "No legal limit",
        timesOver: 0,
        healthRisk: "Developmental",
      },
    ],
  },
};

// Zip code to utility mapping for Central Florida
const zipToUtility: Record<string, string> = {
  // Kissimmee / St. Cloud / Celebration area (Toho Water)
  "34741": "toho", "34742": "toho", "34743": "toho", "34744": "toho",
  "34745": "toho", "34746": "toho", "34747": "toho", "34758": "toho",
  "34769": "toho", "34770": "toho", "34771": "toho", "34772": "toho",
  // Davenport / Haines City nearby
  "33837": "toho", "33896": "toho", "33897": "toho",
  // Orlando proper (OUC)
  "32801": "ouc", "32802": "ouc", "32803": "ouc", "32804": "ouc",
  "32805": "ouc", "32806": "ouc", "32807": "ouc", "32808": "ouc",
  "32809": "ouc", "32810": "ouc", "32811": "ouc", "32812": "ouc",
  "32814": "ouc", "32816": "ouc", "32817": "ouc", "32818": "ouc",
  "32819": "ouc", "32820": "ouc", "32821": "ouc", "32822": "ouc",
  "32824": "ouc", "32825": "ouc", "32826": "ouc", "32827": "ouc",
  "32828": "ouc", "32829": "ouc", "32830": "ouc", "32831": "ouc",
  "32832": "ouc", "32833": "ouc", "32834": "ouc", "32835": "ouc",
  "32836": "ouc", "32837": "ouc", "32839": "ouc",
  // Winter Garden / Windermere / Winter Park
  "34787": "ouc", "34786": "ouc", "32789": "ouc", "32792": "ouc",
  "32751": "ouc", "34761": "ouc",
};

type Step = "zip" | "results" | "unlocked";

export function WaterQualityChecker() {
  const { language } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const [step, setStep] = useState<Step>("zip");
  const [zip, setZip] = useState("");
  const [zipError, setZipError] = useState("");
  const [waterData, setWaterData] = useState<WaterData | null>(null);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [, setFormSubmitted] = useState(false);

  const t = (key: string): string => {
    const strings: Record<string, Record<string, string>> = {
      sectionLabel: {
        en: "Water Quality Check",
        es: "Verificacion de Calidad del Agua",
      },
      heading: {
        en: "What's Really In Your Water?",
        es: "Que Hay Realmente en Tu Agua?",
      },
      subheading: {
        en: "Enter your zip code to see contaminants detected in your local water supply, based on EWG testing data.",
        es: "Ingresa tu codigo postal para ver los contaminantes detectados en tu suministro de agua local.",
      },
      placeholder: { en: "Enter zip code", es: "Ingresa codigo postal" },
      checkButton: { en: "Check My Water", es: "Verificar Mi Agua" },
      zipError: {
        en: "We currently serve the Central Florida area. Enter a Kissimmee or Orlando zip code.",
        es: "Actualmente servimos el area de Florida Central. Ingresa un codigo postal de Kissimmee u Orlando.",
      },
      invalidZip: {
        en: "Please enter a valid 5-digit zip code.",
        es: "Ingresa un codigo postal valido de 5 digitos.",
      },
      utilityLabel: { en: "Your Water Utility", es: "Tu Compania de Agua" },
      serving: { en: "Serving", es: "Sirviendo a" },
      people: { en: "people", es: "personas" },
      sourceLabel: { en: "Water Source", es: "Fuente de Agua" },
      contaminantsFound: {
        en: "Contaminants Detected",
        es: "Contaminantes Detectados",
      },
      detected: { en: "Detected", es: "Detectado" },
      ewgLimit: { en: "EWG Guideline", es: "Guia del EWG" },
      legalLimit: { en: "Legal Limit", es: "Limite Legal" },
      timesOver: { en: "times above EWG guideline", es: "veces sobre la guia del EWG" },
      healthRisk: { en: "Health Risk", es: "Riesgo de Salud" },
      unlockTitle: {
        en: "See All Contaminants + Get a Free Analysis",
        es: "Ver Todos los Contaminantes + Obtener un Analisis Gratis",
      },
      unlockDesc: {
        en: "Enter your contact info to unlock the full report and schedule a free in-home water test.",
        es: "Ingresa tu informacion de contacto para desbloquear el informe completo y programar una prueba gratis.",
      },
      nameLabel: { en: "Full Name", es: "Nombre Completo" },
      emailLabel: { en: "Email", es: "Correo Electronico" },
      phoneLabel: { en: "Phone", es: "Telefono" },
      unlockButton: {
        en: "Unlock Full Report",
        es: "Desbloquear Informe Completo",
      },
      moreContaminants: {
        en: "more contaminants detected",
        es: "mas contaminantes detectados",
      },
      ewgSource: {
        en: "Data sourced from EWG Tap Water Database",
        es: "Datos del EWG Tap Water Database",
      },
      fullReportReady: {
        en: "Full Report Unlocked",
        es: "Informe Completo Desbloqueado",
      },
      weWillContact: {
        en: "We'll reach out to schedule your free in-home water test.",
        es: "Nos comunicaremos para programar tu prueba de agua gratis.",
      },
      scheduleNow: {
        en: "Schedule Water Test Now",
        es: "Programar Prueba de Agua",
      },
      tryAnother: { en: "Check Another Zip", es: "Verificar Otro Codigo" },
      exceeds: { en: "EXCEEDS", es: "EXCEDE" },
      withinLimits: { en: "Within limits", es: "Dentro de limites" },
      poweredBy: { en: "Powered by EWG data", es: "Con datos del EWG" },
    };
    return strings[key]?.[language] || key;
  };

  const handleZipSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setZipError("");

    if (!/^\d{5}$/.test(zip)) {
      setZipError(t("invalidZip"));
      return;
    }

    const utilityKey = zipToUtility[zip];
    if (!utilityKey) {
      setZipError(t("zipError"));
      return;
    }

    setWaterData(centralFloridaData[utilityKey]);
    setStep("results");
  };

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setStep("unlocked");
  };

  const handleReset = () => {
    setStep("zip");
    setZip("");
    setWaterData(null);
    setContactForm({ name: "", email: "", phone: "" });
  };

  const visibleCount = waterData
    ? Math.ceil(waterData.contaminants.length / 2)
    : 0;
  const hiddenCount = waterData
    ? waterData.contaminants.length - visibleCount
    : 0;

  return (
    <section
      ref={sectionRef}
      className="relative py-20 sm:py-24 lg:py-32 overflow-hidden bg-[var(--color-dark)]"
    >
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
        src="/videos/process-water.mp4"
      />
      <div className="absolute inset-0 bg-[var(--color-dark)]/60 pointer-events-none" />

      <div className="relative container-custom">
        {/* Header - always visible */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-px bg-[var(--color-accent)]" />
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-accent)]">
              {t("sectionLabel")}
            </span>
            <div className="w-10 h-px bg-[var(--color-accent)]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
            {t("heading")}
          </h2>
          <p className="text-base sm:text-lg text-white/60 leading-relaxed">
            {t("subheading")}
          </p>
        </motion.div>

        {/* Main card - single screen container */}
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl shadow-black/20 overflow-hidden">
            <AnimatePresence mode="wait">
              {/* STEP 1: Zip Code Entry */}
              {step === "zip" && (
                <motion.div
                  key="zip"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="p-6 sm:p-10 lg:p-12"
                >
                  <form onSubmit={handleZipSubmit}>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-11 h-11 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center">
                        <Search className="w-5 h-5 text-[var(--color-primary)]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-[var(--color-foreground)]">
                          {language === "en"
                            ? "Check Your Water Quality"
                            : "Verifica la Calidad de Tu Agua"}
                        </h3>
                        <p className="text-xs text-[var(--color-muted)]">
                          {t("poweredBy")}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <div className="flex-1">
                        <Input
                          type="text"
                          inputMode="numeric"
                          pattern="[0-9]*"
                          maxLength={5}
                          placeholder={t("placeholder")}
                          value={zip}
                          onChange={(e) => {
                            setZip(e.target.value.replace(/\D/g, "").slice(0, 5));
                            setZipError("");
                          }}
                          className="rounded-xl border-[var(--color-border)] h-12 text-base px-4"
                        />
                      </div>
                      <Button
                        type="submit"
                        className="bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] text-white rounded-xl h-12 px-8 font-semibold text-sm shrink-0"
                      >
                        {t("checkButton")}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>

                    {zipError && (
                      <motion.p
                        className="mt-3 text-sm text-red-500 flex items-start gap-2"
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                        {zipError}
                      </motion.p>
                    )}

                    <p className="mt-4 text-xs text-[var(--color-muted)] text-center">
                      {language === "en"
                        ? "Serving Kissimmee, Orlando, St. Cloud, Celebration, and surrounding areas"
                        : "Sirviendo Kissimmee, Orlando, St. Cloud, Celebration y areas cercanas"}
                    </p>
                  </form>
                </motion.div>
              )}

              {/* STEP 2: Partial Results + Lead Gate */}
              {step === "results" && waterData && (
                <motion.div
                  key="results"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.35 }}
                >
                  {/* Utility header band */}
                  <div className="bg-[var(--color-primary)] px-5 sm:px-8 py-4 sm:py-5">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div>
                        <p className="text-white font-bold text-base sm:text-lg">
                          {waterData.utility}
                        </p>
                        <p className="text-white/60 text-xs">
                          {t("serving")} {waterData.populationServed}{" "}
                          {t("people")} &middot; {t("sourceLabel")}:{" "}
                          {waterData.source}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 bg-white/10 rounded-full px-3 py-1.5">
                        <AlertTriangle className="w-3.5 h-3.5 text-amber-300" />
                        <span className="text-white text-xs font-semibold">
                          {waterData.totalContaminants}{" "}
                          {t("contaminantsFound").toLowerCase()}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 sm:p-8">
                    {/* Visible contaminants */}
                    <div className="space-y-3 mb-4">
                      {waterData.contaminants
                        .slice(0, visibleCount)
                        .map((c, i) => (
                          <motion.div
                            key={c.name}
                            className="border border-[var(--color-border)] rounded-xl p-3 sm:p-4"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.06, duration: 0.3 }}
                          >
                            <div className="flex items-start justify-between gap-3 mb-2">
                              <h4 className="text-sm font-bold text-[var(--color-foreground)] leading-snug">
                                {c.name}
                              </h4>
                              {c.timesOver > 1 && (
                                <span className="shrink-0 inline-flex items-center gap-1 text-[10px] font-bold text-red-600 bg-red-50 px-2 py-1 rounded-full uppercase">
                                  <AlertTriangle className="w-3 h-3" />
                                  {c.timesOver}x
                                </span>
                              )}
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                              <div>
                                <span className="text-[var(--color-muted)]">
                                  {t("detected")}
                                </span>
                                <p className="font-semibold text-[var(--color-foreground)]">
                                  {c.detected}
                                </p>
                              </div>
                              <div>
                                <span className="text-[var(--color-muted)]">
                                  {t("ewgLimit")}
                                </span>
                                <p className="font-semibold text-[var(--color-foreground)]">
                                  {c.ewgGuideline}
                                </p>
                              </div>
                              <div className="col-span-2 sm:col-span-1">
                                <span className="text-[var(--color-muted)]">
                                  {t("healthRisk")}
                                </span>
                                <p className="font-semibold text-[var(--color-foreground)]">
                                  {c.healthRisk}
                                </p>
                              </div>
                            </div>
                            {c.timesOver > 1 && (
                              <div className="mt-2">
                                <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                  <motion.div
                                    className="h-full rounded-full bg-gradient-to-r from-amber-400 to-red-500"
                                    initial={{ width: 0 }}
                                    animate={{
                                      width: `${Math.min(100, (c.timesOver / 600) * 100)}%`,
                                    }}
                                    transition={{
                                      delay: 0.3 + i * 0.06,
                                      duration: 0.8,
                                      ease: "easeOut",
                                    }}
                                  />
                                </div>
                                <p className="text-[10px] text-red-500 font-semibold mt-1">
                                  {c.timesOver}x {t("timesOver")}
                                </p>
                              </div>
                            )}
                          </motion.div>
                        ))}
                    </div>

                    {/* Blurred/locked remaining contaminants */}
                    <div className="relative">
                      {/* Blurred preview */}
                      <div className="space-y-3 blur-[6px] select-none pointer-events-none" aria-hidden>
                        {waterData.contaminants
                          .slice(visibleCount, visibleCount + 2)
                          .map((c) => (
                            <div
                              key={c.name}
                              className="border border-[var(--color-border)] rounded-xl p-3 sm:p-4"
                            >
                              <div className="flex items-start justify-between gap-3 mb-2">
                                <h4 className="text-sm font-bold text-[var(--color-foreground)]">
                                  {c.name}
                                </h4>
                              </div>
                              <div className="grid grid-cols-3 gap-2 text-xs">
                                <div>
                                  <span className="text-[var(--color-muted)]">
                                    {t("detected")}
                                  </span>
                                  <p className="font-semibold">{c.detected}</p>
                                </div>
                                <div>
                                  <span className="text-[var(--color-muted)]">
                                    {t("ewgLimit")}
                                  </span>
                                  <p className="font-semibold">
                                    {c.ewgGuideline}
                                  </p>
                                </div>
                                <div>
                                  <span className="text-[var(--color-muted)]">
                                    {t("healthRisk")}
                                  </span>
                                  <p className="font-semibold">
                                    {c.healthRisk}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                      </div>

                      {/* Overlay with lock + form */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white/95 backdrop-blur-sm border border-[var(--color-border)] rounded-2xl p-5 sm:p-6 shadow-xl w-full max-w-md mx-4">
                          <div className="text-center mb-4">
                            <div className="w-10 h-10 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center mx-auto mb-3">
                              <Lock className="w-5 h-5 text-[var(--color-primary)]" />
                            </div>
                            <p className="text-sm font-bold text-[var(--color-foreground)] mb-1">
                              +{hiddenCount} {t("moreContaminants")}
                            </p>
                            <p className="text-xs text-[var(--color-muted)]">
                              {t("unlockDesc")}
                            </p>
                          </div>

                          <form
                            onSubmit={handleUnlock}
                            className="space-y-2.5"
                          >
                            <Input
                              required
                              placeholder={t("nameLabel")}
                              value={contactForm.name}
                              onChange={(e) =>
                                setContactForm({
                                  ...contactForm,
                                  name: e.target.value,
                                })
                              }
                              className="rounded-lg border-[var(--color-border)] h-10 text-sm"
                            />
                            <Input
                              required
                              type="email"
                              placeholder={t("emailLabel")}
                              value={contactForm.email}
                              onChange={(e) =>
                                setContactForm({
                                  ...contactForm,
                                  email: e.target.value,
                                })
                              }
                              className="rounded-lg border-[var(--color-border)] h-10 text-sm"
                            />
                            <Input
                              type="tel"
                              placeholder={t("phoneLabel")}
                              value={contactForm.phone}
                              onChange={(e) =>
                                setContactForm({
                                  ...contactForm,
                                  phone: e.target.value,
                                })
                              }
                              className="rounded-lg border-[var(--color-border)] h-10 text-sm"
                            />
                            <Button
                              type="submit"
                              className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] text-white rounded-lg h-10 text-sm font-semibold"
                            >
                              {t("unlockButton")}
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                          </form>
                        </div>
                      </div>
                    </div>

                    <p className="mt-4 text-[10px] text-[var(--color-muted)] text-center flex items-center justify-center gap-1">
                      <ExternalLink className="w-3 h-3" />
                      {t("ewgSource")}
                    </p>
                  </div>
                </motion.div>
              )}

              {/* STEP 3: Full Results Unlocked */}
              {step === "unlocked" && waterData && (
                <motion.div
                  key="unlocked"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35 }}
                >
                  {/* Success banner */}
                  <div className="bg-emerald-500 px-5 sm:px-8 py-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-white shrink-0" />
                      <div>
                        <p className="text-white font-bold text-sm">
                          {t("fullReportReady")} &mdash;{" "}
                          {waterData.utility}
                        </p>
                        <p className="text-white/70 text-xs">
                          {t("weWillContact")}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 sm:p-8">
                    {/* All contaminants */}
                    <div className="space-y-3 mb-6">
                      {waterData.contaminants.map((c, i) => (
                        <motion.div
                          key={c.name}
                          className="border border-[var(--color-border)] rounded-xl p-3 sm:p-4"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.04, duration: 0.3 }}
                        >
                          <div className="flex items-start justify-between gap-3 mb-2">
                            <h4 className="text-sm font-bold text-[var(--color-foreground)] leading-snug">
                              {c.name}
                            </h4>
                            {c.timesOver > 1 ? (
                              <span className="shrink-0 inline-flex items-center gap-1 text-[10px] font-bold text-red-600 bg-red-50 px-2 py-1 rounded-full uppercase">
                                <AlertTriangle className="w-3 h-3" />
                                {c.timesOver}x
                              </span>
                            ) : (
                              <span className="shrink-0 inline-flex items-center gap-1 text-[10px] font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                                <Shield className="w-3 h-3" />
                                {t("withinLimits")}
                              </span>
                            )}
                          </div>
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                            <div>
                              <span className="text-[var(--color-muted)]">
                                {t("detected")}
                              </span>
                              <p className="font-semibold text-[var(--color-foreground)]">
                                {c.detected}
                              </p>
                            </div>
                            <div>
                              <span className="text-[var(--color-muted)]">
                                {t("ewgLimit")}
                              </span>
                              <p className="font-semibold text-[var(--color-foreground)]">
                                {c.ewgGuideline}
                              </p>
                            </div>
                            <div className="col-span-2 sm:col-span-1">
                              <span className="text-[var(--color-muted)]">
                                {t("healthRisk")}
                              </span>
                              <p className="font-semibold text-[var(--color-foreground)]">
                                {c.healthRisk}
                              </p>
                            </div>
                          </div>
                          {c.timesOver > 1 && (
                            <div className="mt-2">
                              <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                <motion.div
                                  className="h-full rounded-full bg-gradient-to-r from-amber-400 to-red-500"
                                  initial={{ width: 0 }}
                                  animate={{
                                    width: `${Math.min(100, (c.timesOver / 600) * 100)}%`,
                                  }}
                                  transition={{
                                    delay: 0.2 + i * 0.04,
                                    duration: 0.8,
                                    ease: "easeOut",
                                  }}
                                />
                              </div>
                              <p className="text-[10px] text-red-500 font-semibold mt-1">
                                {c.timesOver}x {t("timesOver")}
                              </p>
                            </div>
                          )}
                        </motion.div>
                      ))}
                    </div>

                    {/* CTA buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a href="/contact" className="flex-1">
                        <Button className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] text-white rounded-xl h-12 font-semibold text-sm group">
                          {t("scheduleNow")}
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </a>
                      <Button
                        variant="outline"
                        onClick={handleReset}
                        className="rounded-xl h-12 text-sm font-medium border-[var(--color-border)]"
                      >
                        {t("tryAnother")}
                      </Button>
                    </div>

                    <p className="mt-4 text-[10px] text-[var(--color-muted)] text-center flex items-center justify-center gap-1">
                      <ExternalLink className="w-3 h-3" />
                      {t("ewgSource")}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
