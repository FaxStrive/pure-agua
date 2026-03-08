"use client";

import { translations } from "./translations";

/**
 * English-only translation utilities.
 * Kept as a hook export so 67+ files don't need import-path changes.
 */

function t(section: string, key: string): string {
  try {
    const sectionData = (translations as Record<string, unknown>)[section];
    if (!sectionData) return key;
    const entry = (sectionData as Record<string, unknown>)[key];
    if (!entry) return key;
    if (typeof entry === "string") return entry;
    return key;
  } catch {
    return key;
  }
}

function tArray(section: string, key: string): string[] {
  try {
    const sectionData = (translations as Record<string, unknown>)[section];
    if (!sectionData) return [];
    const entry = (sectionData as Record<string, unknown>)[key];
    if (!entry) return [];
    if (Array.isArray(entry)) return entry as string[];
    return [];
  } catch {
    return [];
  }
}

export function useLanguage() {
  return { t, tArray };
}

// Keep LanguageProvider as a passthrough so any wrapper usage doesn't break
export function LanguageProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
