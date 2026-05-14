// Attribution map for licensed images that require credit on the rendered page.
// Keyed by the public image path (without the /public prefix). Sourced from
// Wikimedia Commons under CC BY, CC BY-SA, CC0, or Public Domain.
//
// To add a credit: append an entry below and render with <ImageCredit src={...} />.

export type ImageCredit = {
  artist: string;
  license: string;
  sourceFile: string;
  sourceUrl: string;
};

export const IMAGE_CREDITS: Record<string, ImageCredit> = {
  "/images/blog-hero/water-softener-cost-central-florida-2026.jpg": {
    artist: "రవిచంద్ర",
    license: "CC BY-SA 4.0",
    sourceFile: "File:Water softener.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Water_softener.jpg",
  },
  "/images/blog-hero/why-orlando-water-smells-or-stains-2026.jpg": {
    artist: "Bbypnda",
    license: "CC BY-SA 3.0",
    sourceFile: "File:Hard Water Calcification.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Hard_Water_Calcification.jpg",
  },
  "/images/blog-hero/pfas-central-florida-2026.jpg": {
    artist: "US EPA",
    license: "Public domain",
    sourceFile: "File:Jar testing equipment for testing water quality.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Jar_testing_equipment_for_testing_water_quality._(15052115711).jpg",
  },
  "/images/service-hero/water-softener.jpg": {
    artist: "Des Blenkinsopp",
    license: "CC BY-SA 2.0",
    sourceFile: "File:Patmore Water Softeners (geograph 7138649).jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Patmore_Water_Softeners_-_geograph.org.uk_-_7138649.jpg",
  },
  "/images/service-hero/whole-house-filtration.jpg": {
    artist: "Cschirp",
    license: "CC BY-SA 3.0",
    sourceFile: "File:Wasserfilter mit Aktivkohle-Filterpatrone.JPG",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Wasserfilter_mit_Aktivkohle-Filterpatrone.JPG",
  },
  "/images/service-hero/reverse-osmosis.jpg": {
    artist: "Z22",
    license: "CC BY-SA 4.0",
    sourceFile: "File:Reverse osmosis system at Bedok NEWater Factory.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Reverse_osmosis_system_at_Bedok_NEWater_Factory.jpg",
  },
  "/images/service-hero/well-water-treatment.jpg": {
    artist: "KVDP",
    license: "Public domain",
    sourceFile: "File:Water well tank.JPG",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Water_well_tank.JPG",
  },
};

export function getImageCredit(src: string): ImageCredit | null {
  return IMAGE_CREDITS[src] ?? null;
}
