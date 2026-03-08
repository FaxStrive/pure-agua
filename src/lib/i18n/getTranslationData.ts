import { translations } from "./translations";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnySection = Record<string, any>;

/** Kept for backward compat -- 10+ files import this type. Now just a string. */
export type LocalizedString = string;

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

/**
 * Returns a plain string from a translation entry.
 * Now that translations are flat English strings, this is a simple passthrough.
 */
export function localized(item: string): string {
  return item;
}
