import { translations } from "./translations";
import type { Language } from "./translations";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnySection = Record<string, any>;

export function getTranslationSection(section: string): AnySection | null {
  const data = (translations as Record<string, unknown>)[section];
  if (!data || typeof data !== "object") return null;
  return data as AnySection;
}

export function getTranslationArray<T>(section: string, key: string): T[] {
  const sectionData = getTranslationSection(section);
  if (!sectionData) return [];
  const arr = sectionData[key];
  if (!Array.isArray(arr)) return [];
  return arr as T[];
}

export interface LocalizedString {
  en: string;
  es: string;
}

export function localized(item: LocalizedString, language: Language): string {
  return item[language] || item.en;
}
