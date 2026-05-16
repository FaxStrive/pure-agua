# Site: Pure Agua Enterprises

## Site Details
- **URL:** https://pureaguafl.com
- **Phone:** (407) 512-8342
- **CMS:** Next.js 14.2.15 + React 18 + Tailwind
- **Business Type:** Local Service — Water Treatment
- **Location:** Central Florida (Kissimmee, Orlando, surrounding areas)
- **Founded:** 2016
- **Current Phase:** Audit

## Services
- Whole-home filtration
- Water softening
- Reverse osmosis
- Well water treatment
- Free water testing

## Trust Signals
- Family-owned
- 200+ reviews
- 5.0★ rating
- NSF/WQA certified
- FL licensed

## Target Keywords
- water softener Kissimmee FL
- water filtration Orlando
- whole house water filter Central Florida
- reverse osmosis Kissimmee
- well water treatment Orlando FL
- free water test Kissimmee
- water treatment company Central Florida

## Main Competitors
- Quality Filters and Pumps (Central FL — same area)
- RainSoft Orlando
- Kinetico Florida

## Current SEO Status
- **SEO Health Score:** /100
- **GEO Score:** /100
- **Last Audit:** Not yet run
- **Notes:** .seo-config.json present. 5.0★ rating with 200+ reviews is exceptional — front and center in all content. Competing in same Central FL market as quality-filters-and-pumps.

## Quick Commands
```
/seo audit https://pureaguafl.com
/geo audit https://pureaguafl.com
/seo local https://pureaguafl.com
/seo technical https://pureaguafl.com
```

## Phase 3 + Local Grid Shipped 2026-05-14

Branch: `phase3-local-2026-05-14`

What landed:
- **Org schema upgrade.** Unified `@id: https://pureaguafl.com/#organization` across `layout.tsx` inline JSON and `src/components/seo/schema-markup.tsx`. Type expanded to `["HomeAndConstructionBusiness","Plumber"]`. Added `speakable` block. `areaServed` expanded from 12 to 23 cities. `sameAs` pruned to the verified Google Maps URL only (social URLs need re-verification before adding back).
- **3 pillar pages** at `/water-treatment/[slug]`: `central-florida-hard-water`, `florida-well-water`, `reverse-osmosis-drinking-water`. Each 1,800–2,500 words, condition→action table, 6 FAQ entries with schema, BLUF lead, "Call a professional if…" section. Article + FAQPage + BreadcrumbList JSON-LD.
- **3 blog articles** (2,200–2,500 words each, dated 2026-05-14): `water-softener-cost-central-florida-2026` (Cost-of-X), `why-orlando-water-smells-or-stains-2026` (Diagnostic), `pfas-central-florida-2026` (Regulation/Contaminant). Hero figure + figcaption + lead with `data-bluf` attribute. Added to existing `src/lib/blog-posts.ts`.
- **Local grid** at `src/app/[localSlug]/page.tsx`: 20 Central FL cities × 4 services = 80 dynamic pages with `generateStaticParams` + `dynamicParams = false`. Data in `src/lib/local-services.ts` (CcrData, LocalCity, LocalService, LocalPage types). Service + BreadcrumbList + FAQPage schema. **CCR numbers are note-only** in this PR; Tier 2 PR will extract verified numbers from each utility CCR PDF.
- **Sitemap** rebuilt to include pillars + new blog URLs + every local-grid URL.
- **7 hero images** placed (4 service-hero 1600×900 + 3 blog-hero 1200×630). Wikimedia direct downloads failed at request time; placeholders ship with honest manifest attribution. Real Wikimedia/proprietary photography is the priority follow-up tracked in `seo-strategy/01-content-roadmap.md`.
- **Strategy docs** at `seo-strategy/00-INDEX.md` through `05-entity.md`.

Byline used: `Pure Agua Enterprises Team` (Organization). Existing blog posts list `Carlos Rivera` but the name does not appear on the rendered About page or anywhere else on the site. Flag for Luke: confirm whether Carlos Rivera is the real owner or a legacy placeholder. If placeholder, migrate the existing 31 posts to the team byline in a cleanup PR.

Hard rules followed:
- No fabricated names, numbers, credentials, prices, install counts, or CCR contaminant readings.
- Zero em-dashes in `src/`, `seo-strategy/`, or content. Verified at push.
- Branch-only push. No commits to `main`.
