"use client";

import { createContext, useContext, useState, useCallback } from "react";
import type { Language } from "./translations";
import { translations } from "./translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (section: string, key: string) => string;
  tArray: (section: string, key: string) => string[];
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  }, []);

  const t = useCallback(
    (section: string, key: string): string => {
      try {
        const sectionData = (translations as Record<string, unknown>)[section];
        if (!sectionData) return key;
        const entry = (sectionData as Record<string, unknown>)[key];
        if (!entry) return key;
        if (typeof entry === "object" && entry !== null && language in (entry as Record<string, string>)) {
          return (entry as Record<string, string>)[language];
        }
        return key;
      } catch {
        return key;
      }
    },
    [language]
  );

  const tArray = useCallback(
    (section: string, key: string): string[] => {
      try {
        const sectionData = (translations as Record<string, unknown>)[section];
        if (!sectionData) return [];
        const entry = (sectionData as Record<string, unknown>)[key];
        if (!entry) return [];
        if (typeof entry === "object" && entry !== null && language in (entry as Record<string, string[]>)) {
          return (entry as Record<string, string[]>)[language];
        }
        return [];
      } catch {
        return [];
      }
    },
    [language]
  );

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, tArray }}>
      {children}
    </LanguageContext.Provider>
  );
}

const defaultT = (section: string, key: string): string => {
  try {
    const sectionData = (translations as Record<string, unknown>)[section];
    if (!sectionData) return key;
    const entry = (sectionData as Record<string, unknown>)[key];
    if (!entry) return key;
    if (typeof entry === "object" && entry !== null && "en" in (entry as Record<string, string>)) {
      return (entry as Record<string, string>)["en"];
    }
    return key;
  } catch {
    return key;
  }
};

const fallback: LanguageContextType = {
  language: "en",
  setLanguage: () => {},
  t: defaultT,
  tArray: () => [],
};

export function useLanguage() {
  const context = useContext(LanguageContext);
  return context ?? fallback;
}
