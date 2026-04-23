import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://pureaguaenterprise.com';
  const now = new Date('2026-04-05');

  return [
    { url: `${baseUrl}/`, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/services/water-softening`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/services/reverse-osmosis`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/services/well-water`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/services/whole-home`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/service-area`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/service-areas`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/testimonials`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/faq`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/before-after`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/gallery`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/financing`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/warranty`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/resources`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/blog/kissimmee-orlando-water-quality-guide`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/blog/kissimmee-orlando-water-quality`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/blog/hard-water-central-florida-floridan-aquifer`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/blog/well-water-kissimmee-orlando`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/blog/water-softener-complete-guide`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/blog/reverse-osmosis-benefits-orlando`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/blog/well-water-treatment-osceola-orange-county`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/blog/hard-water-damage-guide-central-florida`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/careers`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    // SEO landing pages
    { url: `${baseUrl}/water-softener`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/reverse-osmosis`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/water-filtration`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/water-testing`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/water-treatment`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/well-water-treatment`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    // Geo landing pages
    { url: `${baseUrl}/water-softener-in-florida`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    // New 2026-04 long-form articles
    { url: `${baseUrl}/blog/chloramine-vs-ozone-orlando-kissimmee-disinfection`, lastModified: new Date('2026-04-21'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog/sinkholes-karst-central-florida-wells`, lastModified: new Date('2026-04-20'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog/agua-kissimmee-orlando-guia-espanol`, lastModified: new Date('2026-04-19'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog/vacation-rental-water-quality-disney-area`, lastModified: new Date('2026-04-18'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog/pfas-central-florida-2026-orange-county`, lastModified: new Date('2026-04-17'), changeFrequency: 'monthly', priority: 0.8 },
  ];
}
