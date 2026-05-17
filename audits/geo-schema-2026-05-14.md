# GEO Schema & Structured Data Audit — Pure Agua Enterprises

**Target:** https://pureaguaenterprise.com
**Audit Date:** 2026-05-14
**Source Repo:** `/Users/ezekiel/Desktop/SEOMAN/active-seo/pure-agua/`
**Production Status:** NXDOMAIN (DNS not yet configured). Audit performed on the source repo to assess what WILL render when deployed.

---

## Schema & Structured Data

**Schema Score: 71/100** (Good — strong foundation, several high-impact gaps)

### Detected Structured Data (from source)

**Schema source files:**
- `src/components/seo/schema-markup.tsx` — central injector mounted in `src/app/layout.tsx` on every route
- `src/app/blog/[slug]/page.tsx` — per-post Article schema

**Total schema types emitted across the site:** 8 distinct types
**Format:** JSON-LD exclusively (correct)
**Delivery:** `SchemaMarkup` is a client component (`'use client'` + `usePathname()`) but mounted inside the server-rendered `RootLayout`. In Next.js App Router with `output: "standalone"`, client components are still rendered to HTML on first paint via React Server Streaming, so the JSON-LD WILL appear in the initial HTML response. AI crawlers (GPTBot, ClaudeBot, PerplexityBot) that do not execute JS will still see it. Not a blocking risk.

| # | Type | Source | Routes | Valid JSON-LD | Rich Result Eligible |
|---|---|---|---|---|---|
| 1 | `HomeAndConstructionBusiness` (LocalBusiness subtype) | schema-markup.tsx | All | Yes | Yes (Local Business) |
| 2 | `WebSite` + `SearchAction` | schema-markup.tsx | All | Yes | Yes (Sitelinks Search Box) |
| 3 | `BreadcrumbList` | schema-markup.tsx | All non-home | Yes | Yes |
| 4 | `Service` | schema-markup.tsx | 4 service routes only | Yes | N/A (no rich result type) |
| 5 | `FAQPage` (16 variants) | schema-markup.tsx | 16 routes | Yes | RESTRICTED — see below |
| 6 | `HowTo` (3 variants) | schema-markup.tsx | 6 routes | Yes | REMOVED — see below |
| 7 | `CollectionPage` | schema-markup.tsx | /blog | Yes | N/A |
| 8 | `Article` | blog/[slug]/page.tsx | each blog post | Yes | Yes (Article) |

---

### Validation Results

#### LocalBusiness (`HomeAndConstructionBusiness`)
**Status:** Valid, comprehensive

| Property | Status | Notes |
|---|---|---|
| `@id` | OK | `https://pureaguaenterprise.com/#business` — anchor for cross-schema referencing |
| `name`, `description`, `url`, `telephone`, `email` | OK | All populated |
| `priceRange` | OK | `$` |
| `image`, `logo` | OK | Both absolute URLs |
| `address` (PostalAddress) | OK | Full street, city, state, zip, country |
| `geo` (GeoCoordinates) | OK | Lat 28.2919, Lng -81.4076 |
| `aggregateRating` | OK | 5.0 / 200 reviews — VERIFY this matches actual GBP data before launch |
| `hasCredential` (4 items) | OK | NSF/ANSI 58, NSF/ANSI 61, WQA member, FL Licensed |
| `areaServed` (12 cities) | OK | All cities wrapped as `City` with `containedInPlace` State |
| `openingHoursSpecification` | OK | Mon-Fri 8-6, Sat 8-2 |
| `makesOffer` (5 services) | OK | Each Offer wraps a Service with name/description/url/areaServed |
| `sameAs` (6 platforms) | Partial | Facebook, Instagram, YouTube, X, LinkedIn, Google Maps. MISSING Wikipedia, Wikidata, Crunchbase, BBB, Yelp |
| `dateModified` | OK | 2026-04-06 |
| `speakable` | MISSING | No `speakable` property anywhere |

#### WebSite + SearchAction
**Status:** Valid, but `SearchAction` target `/?s={search_term_string}` assumes WordPress-style query — site is Next.js with no `?s=` search route. This SearchAction will resolve to a 404. Either build the search route or remove the `potentialAction`.

#### BreadcrumbList
**Status:** Valid. Auto-generated from URL segments. Slug-to-name conversion is naive (`reverse-osmosis` → `Reverse Osmosis`) which works fine for current paths.

#### Service Schema
**Status:** Valid for 4 mapped service paths (`/services/whole-home`, `/services/water-softening`, `/services/reverse-osmosis`, `/services/well-water`). NOTE — these paths do NOT exist in the app router. Actual routes on disk are `/water-filtration`, `/water-softener`, `/reverse-osmosis`, `/well-water-treatment`, `/water-testing`. **Service schema is being emitted for URLs that don't exist, and missing from URLs that do.** Critical bug.

#### FAQPage (16 variants)
**Status:** Valid JSON-LD. RESTRICTED by Google (Aug 2023) — rich results only shown for government and health-authority sites. For Pure Agua, FAQPage will not generate FAQ rich snippets in Google SERPs. Still useful for AI model Q&A comprehension. Recommendation: keep but do not expect SERP benefit.

#### HowTo (3 variants)
**Status:** Valid JSON-LD. **REMOVED from Google rich results Sept 2023.** Provides zero search benefit. Per project schema rules in `/Users/ezekiel/Desktop/SEOMAN/CLAUDE.md`: "HowTo: deprecated Sept 2023 — never recommend." Recommendation: REMOVE all 3 HowTo schemas and the `HOWTO_MAP` to reduce page weight.

#### Article (blog posts)
**Status:** Valid but minimal.

| Property | Status | Notes |
|---|---|---|
| `headline`, `description`, `datePublished`, `dateModified` | OK | Both dates identical — `dateModified` should reflect actual updates |
| `author` | DEGRADED | Set to `Organization` (Pure Agua Enterprises), not a `Person`. Acceptable per client byline rule (owner identity withheld, "Pure Agua Enterprises Team" byline). Google accepts Organization-as-author. |
| `publisher` (Organization + logo) | OK | |
| `mainEntityOfPage` | OK | |
| `image` | DEGRADED | Every post uses the shared `/images/og-image.png`. Each article needs a dedicated hero per the FaxStrive blog-article template (`/public/images/blog-hero/{slug}.jpg`). |
| `articleSection`, `wordCount`, `keywords` | MISSING | |
| `@id` reference to `#business` or `#website` | MISSING | Article should `isPartOf` the WebSite and reference publisher by `@id` |
| `speakable` | MISSING | |

---

### GEO-Critical Schema Assessment

| Schema | Status | GEO Impact | Notes |
|---|---|---|---|
| Organization / LocalBusiness `@id` | Present | Critical | `@id` anchor present — good for cross-schema linking |
| `sameAs` (entity linking) | Partial | Critical | 6 platforms, all social. Missing Wikipedia, Wikidata, BBB, Yelp, Angi, HomeAdvisor |
| `hasCredential` | Present | High | 4 credentials — NSF/ANSI 58, NSF/ANSI 61, WQA, FL License. Strong E-E-A-T signal |
| `areaServed` | Present | High | 12 cities with containedInPlace State |
| Person schema (author) | INTENTIONALLY ABSENT | N/A | Per client rule, owner identity withheld. Organization-as-author is correct fallback. Do NOT add a fabricated Person. |
| Article + dateModified | Present | High | `dateModified === datePublished` — should drift when content actually updates |
| `speakable` | MISSING | Medium | Not present anywhere. High-value GEO signal not used |
| BreadcrumbList | Present | Low | Valid |
| WebSite + SearchAction | Present | Low | Broken `target` URL — search endpoint does not exist |
| Service schema | BROKEN MAPPING | High | Mapped to `/services/*` paths that don't exist. Real service URLs have no Service schema. |

---

### sameAs Entity Linking

**Current sameAs links found on LocalBusiness:** 6

| Platform | Linked | URL |
|---|---|---|
| Wikipedia | No | Not linked |
| Wikidata | No | Not linked |
| LinkedIn | Yes | https://www.linkedin.com/company/pureaguaenterprise |
| YouTube | Yes | https://www.youtube.com/@pureaguaenterprise |
| Crunchbase | No | Not linked |
| Twitter/X | Yes | https://x.com/pureaguafl |
| Facebook | Yes | https://www.facebook.com/pureaguaenterprise |
| Instagram | Yes | https://www.instagram.com/pureaguaenterprise |
| Google Maps / GBP | Yes | https://www.google.com/maps/place/Pure+Agua+Enterprise |
| BBB | No | Not linked — high-value for local trades |
| Yelp | No | Not linked — high-value for local |
| Angi / HomeAdvisor | No | Not linked |
| GitHub | N/A | Not applicable for water-treatment business |

**Verify each linked URL actually resolves before launch** — fabricated profile URLs are worse than absent ones.

---

### Deprecated / Restricted Schemas Found

| Schema | Status | Count | Recommendation |
|---|---|---|---|
| `HowTo` | REMOVED Sept 2023 | 3 templates, applied on 6 routes | REMOVE — zero search benefit, adds page weight, contradicts project rules |
| `FAQPage` | RESTRICTED Aug 2023 | 16 variants | Keep for AI semantic value. Do not expect Google rich-result eligibility. |

---

### JavaScript Rendering Risk

**Schema Delivery Method:** Server-rendered HTML (via Next.js App Router server streaming of a `'use client'` component inside a server `RootLayout`).

**Risk Assessment:** Low. AI crawlers without JS execution (GPTBot, ClaudeBot, PerplexityBot, Bingbot variants) will receive the JSON-LD blocks in the initial HTML response because Next.js renders client components to HTML on first paint. Verify post-launch with `curl -A "GPTBot" https://pureaguaenterprise.com | grep "application/ld+json"`.

**Caveat:** `usePathname()` resolves at render-time. SSG pages get the path baked in. Dynamic/ISR pages get the path at request render. Either way, schema lands in the initial HTML. No action required, but worth re-testing after first deploy.

---

### Critical Bugs Found

1. **Service schema URL mismatch (HIGH).** `SERVICE_PAGE_MAP` keys are `/services/whole-home`, `/services/water-softening`, `/services/reverse-osmosis`, `/services/well-water`. Actual app router paths are `/water-filtration`, `/water-softener`, `/reverse-osmosis`, `/well-water-treatment`. Service schema currently renders on ZERO pages. Also, `/water-testing` has no Service entry at all.

2. **Broken SearchAction target.** `target: ${SITE_URL}/?s={search_term_string}` resolves to a 404 — site has no `?s=` search route.

3. **`makesOffer` URLs point to non-existent paths.** Each Offer's `itemOffered.url` references `/services/whole-home` etc., which 404.

4. **`/sitemap.xml` SearchAction URL template** would surface broken `?s=` URLs to Google if it ever crawls AI agents looking for the search action.

---

### Recommended JSON-LD Fixes & Additions

#### Fix 1 — Correct the `SERVICE_PAGE_MAP` to real routes

```typescript
const SERVICE_PAGE_MAP: Record<string, { name: string; description: string; url: string }> = {
  '/water-filtration': { name: 'Whole Home Water Filtration', description: '...', url: `${SITE_URL}/water-filtration` },
  '/water-softener': { name: 'Water Softening Systems', description: '...', url: `${SITE_URL}/water-softener` },
  '/reverse-osmosis': { name: 'Reverse Osmosis Drinking Water Systems', description: '...', url: `${SITE_URL}/reverse-osmosis` },
  '/well-water-treatment': { name: 'Well Water Treatment Systems', description: '...', url: `${SITE_URL}/well-water-treatment` },
  '/water-testing': { name: 'Free Water Testing', description: '...', url: `${SITE_URL}/water-testing` },
  '/water-treatment': { name: 'Residential Water Treatment', description: '...', url: `${SITE_URL}/water-treatment` },
  '/water-softener-in-florida': { name: 'Water Softener Installation in Florida', description: '...', url: `${SITE_URL}/water-softener-in-florida` },
};
```

Also update `makesOffer` URLs and `FAQ_SCHEMAS` / `HOWTO_MAP` keys to the same real paths.

#### Fix 2 — Remove HowTo entirely

Delete `howToSchema`, `wholeHomeHowToSchema`, `waterSofteningHowToSchema`, `HOWTO_MAP`, and the corresponding push in the `SchemaMarkup` component.

#### Fix 3 — Fix or remove WebSite SearchAction

Either implement a `/search?q=` route or remove `potentialAction`. Suggested removal until search is built:

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://pureaguaenterprise.com/#website",
  "name": "Pure Agua Enterprises",
  "url": "https://pureaguaenterprise.com",
  "publisher": { "@id": "https://pureaguaenterprise.com/#business" },
  "inLanguage": "en-US"
}
```

#### Fix 4 — Add `speakable` to LocalBusiness and Article

```json
{
  "@type": "HomeAndConstructionBusiness",
  "@id": "https://pureaguaenterprise.com/#business",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["[data-bluf]", ".hero-tagline", "h1"]
  }
}
```

For Article:

```json
{
  "@type": "Article",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["[data-bluf]", ".article-faq dt", ".article-faq dd"]
  }
}
```

This requires adding `data-bluf` attributes to the lead paragraph of each page per the FaxStrive blog-article template.

#### Fix 5 — Expand `sameAs` for local-trades entity linking

```json
"sameAs": [
  "https://www.facebook.com/pureaguaenterprise",
  "https://www.instagram.com/pureaguaenterprise",
  "https://www.youtube.com/@pureaguaenterprise",
  "https://x.com/pureaguafl",
  "https://www.linkedin.com/company/pureaguaenterprise",
  "https://www.google.com/maps/place/Pure+Agua+Enterprise",
  "[ADD: BBB profile URL if accredited]",
  "[ADD: Yelp business URL]",
  "[ADD: Angi / Angie's List profile URL]",
  "[ADD: HomeAdvisor profile URL]",
  "[ADD: NextDoor business page URL]",
  "[ADD: Wikidata Q-number URL once entity created]"
]
```

VERIFY every URL resolves before launching. Do not fabricate.

#### Fix 6 — Strengthen Article schema with @id graph linking

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": "https://pureaguaenterprise.com/blog/[slug]#article",
  "isPartOf": { "@id": "https://pureaguaenterprise.com/#website" },
  "publisher": { "@id": "https://pureaguaenterprise.com/#business" },
  "author": {
    "@type": "Organization",
    "@id": "https://pureaguaenterprise.com/#business",
    "name": "Pure Agua Enterprises"
  },
  "headline": "[post title]",
  "description": "[post excerpt]",
  "datePublished": "[post.date ISO 8601]",
  "dateModified": "[post.lastModified ISO 8601 — must differ from datePublished when content changes]",
  "image": "https://pureaguaenterprise.com/images/blog-hero/[slug].jpg",
  "mainEntityOfPage": { "@id": "https://pureaguaenterprise.com/blog/[slug]" },
  "articleSection": "[post.category]",
  "wordCount": "[REPLACE: integer]",
  "keywords": "[REPLACE: comma-separated tags]",
  "inLanguage": "en-US",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["[data-bluf]"]
  }
}
```

Note: keeps Organization-as-author per the client byline rule. Do NOT introduce a Person.

#### Fix 7 — Add Service schema to all real service pages

After Fix 1, also push a per-page `Service` schema with `provider: { "@id": "https://pureaguaenterprise.com/#business" }` referencing the business by `@id` instead of duplicating fields.

---

### Schema Score Breakdown

| Component | Earned / Max | Notes |
|---|---|---|
| Organization/LocalBusiness | 18 / 20 | Present + sameAs to 6 platforms; loses 2 for missing Wikipedia/Wikidata/local-trade directories |
| Article schema (blog) | 10 / 15 | Present, but dateModified === datePublished, no @id graph linking, shared hero image |
| Person schema for author | N/A | Intentionally absent per client rule — NOT penalized |
| sameAs completeness | 9 / 15 | 6 platforms, but no Wikipedia/Wikidata, no BBB/Yelp/Angi for local trades |
| speakable | 0 / 10 | Missing everywhere |
| BreadcrumbList | 5 / 5 | Valid |
| WebSite + SearchAction | 2 / 5 | Present but SearchAction target is broken |
| No deprecated schemas | 0 / 5 | 3 HowTo schemas present (REMOVED Sept 2023) |
| JSON-LD format | 5 / 5 | 100% JSON-LD |
| Validation (no errors) | 2 / 5 | Service URL mismatch + broken SearchAction target = real validation issues |
| GEO bonuses (hasCredential, areaServed, @id anchoring) | 20 / 20 | Strong — `@id` anchor, 4 credentials, 12 areas served, makesOffer |
| **Total** | **71 / 100** | Person-schema component (15 pts) reallocated to GEO bonuses given the client byline rule |

---

### Priority Actions

1. **[CRITICAL]** Fix `SERVICE_PAGE_MAP`, `FAQ_SCHEMAS`, `HOWTO_MAP`, and `makesOffer.itemOffered.url` to point at the REAL app router paths (`/water-filtration`, `/water-softener`, `/reverse-osmosis`, `/well-water-treatment`, `/water-testing`, `/water-treatment`). Currently the Service schema renders on zero pages and Offer URLs all 404.
2. **[CRITICAL]** Remove all 3 HowTo schemas and the `HOWTO_MAP`. They were removed from Google rich results in Sept 2023 and violate the project's no-HowTo rule.
3. **[HIGH]** Fix or remove the `SearchAction` `target` URL. The current `?s={search_term_string}` template resolves to a 404.
4. **[HIGH]** Verify the `aggregateRating` (5.0 / 200 reviews) matches actual GBP review counts before launch. AggregateRating in schema must be backed by visible on-page review aggregation per Google guidelines.
5. **[HIGH]** Add `speakable` to LocalBusiness and Article schemas. Requires adding `data-bluf` attributes to lead paragraphs per the FaxStrive blog-article template.
6. **[HIGH]** Per-blog-post unique hero image. Replace the shared `/images/og-image.png` with `/public/images/blog-hero/{slug}.jpg` as the template requires.
7. **[MEDIUM]** Expand `sameAs` with BBB, Yelp, Angi, HomeAdvisor, NextDoor, and (once available) Wikidata. Verify every URL resolves.
8. **[MEDIUM]** Wire Article schema into the entity graph: `@id`, `isPartOf: { "@id": "...#website" }`, `publisher: { "@id": "...#business" }`. Add `wordCount`, `articleSection`, `keywords`, and a real `dateModified`.
9. **[MEDIUM]** Add a Service schema entry for `/water-testing` (currently absent from both `SERVICE_PAGE_MAP` and `makesOffer` paths).
10. **[LOW]** Validate the schema using Google's Rich Results Test and Schema.org Validator on the staging URL before DNS goes live.

---

_SEOMAN geo-schema audit, 2026-05-14_
