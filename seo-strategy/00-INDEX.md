# Pure Agua Enterprises SEO/GEO Strategy Index

Last updated: 2026-05-14
Branch shipped: `phase3-local-2026-05-14`

## Documents

- [01-content-roadmap.md](./01-content-roadmap.md), pillar pages, blog backlog, next 90 days
- [02-technical.md](./02-technical.md), schema, performance, AI crawler access
- [03-local.md](./03-local.md), city grid, CCR enrichment status, NAP
- [04-geo.md](./04-geo.md), AI citability, brand mentions, sameAs work
- [05-entity.md](./05-entity.md), Wikidata / Knowledge Graph buildout plan

## What shipped in this PR

- Org schema upgraded to `["HomeAndConstructionBusiness","Plumber"]` with `@id: /#organization`, `speakable`, and 23-city `areaServed` block.
- 3 pillar pages at `/water-treatment/[slug]` covering Central Florida hard water, Florida well water, and reverse osmosis drinking water (1,800–2,500 words each, condition→action table, FAQ, schema).
- 3 long-form blog articles using the Leaf Home template playbooks (Cost-of-X, Diagnostic, Regulation/Contaminant), 2,200–2,500 words each.
- Local grid: 20 Central FL cities × 4 services = 80 dynamic pages at `/{service-slug}-in-{city-slug}-fl` with Service + BreadcrumbList + FAQPage schema.
- Sitemap rebuilt to include pillars + new blog URLs + every local-grid URL.
- 4 service-hero + 3 blog-hero images placed under `public/images/` and mirrored to `~/Desktop/seoman-image-library/pure-agua/` (placeholders for this PR; Wikimedia direct downloads failed at request time; tracked in `01-content-roadmap.md`).

## Byline used

`Pure Agua Enterprises Team` (Organization-style). Real owner identity could not be verified from on-site content during the audit; the existing blog posts use a name (`Carlos Rivera`) that does not appear anywhere on the rendered About page or in schema. Flag for Luke: confirm whether Carlos Rivera is the real owner or a legacy placeholder. If placeholder, the existing blog posts should be migrated to the team byline in a follow-up.
