# Lane C, Content Refresh Audit
**Site:** Pure Agua Enterprises (Vercel preview https://pure-agua.vercel.app)
**Date:** 2026-05-15
**Auditor scope:** Title tags, meta descriptions, content freshness, E-E-A-T signals, sitewide metatag patterns, top-10 refresh playbook.
**Research only.** No source files edited, no PR opened.

> Domain note: `pureaguaenterprise.com` is NOT registered (per the site CLAUDE.md, 2026-05-15 WHOIS). All SEO equity currently routes to the Vercel preview. Domain must be purchased and pointed before any of these refreshes accrue. Also: `netlify.toml` lives in the repo and conflicts with Vercel deploy, the audit assumes Vercel is the live deploy target.

> Warranty note: pure-agua CLAUDE.md and several site pages say "lifetime warranty." The on-site warranty language is consistent across pages. Audit proposals retain "lifetime warranty" as written. If that framing is inaccurate, flag before any rewrite ships (see Solomon precedent).

---

## 1. Content Inventory

### Articles (14 blog posts in `src/lib/blog-posts.ts`, 12 MDX files in `content/articles/`)

| # | Slug | Title | Word Count | Date |
|---|---|---|---|---|
| 1 | kissimmee-orlando-water-quality-guide | Kissimmee and Orlando Water Quality: What's Actually in Your Tap Water | n/a (data-file only, no mdx) | 2026-01-12 |
| 2 | water-softener-complete-guide | The Complete Guide to Water Softeners | n/a | 2026-01-25 |
| 3 | reverse-osmosis-benefits-orlando | Why Every Orlando Family Should Have Reverse Osmosis Drinking Water | n/a | 2026-02-03 |
| 4 | well-water-treatment-osceola-orange-county | Well Water Treatment in Osceola and Orange County: Your Complete Guide | n/a | 2026-02-14 |
| 5 | hard-water-damage-guide-central-florida | The True Cost of Hard Water: What Central Florida Homeowners Are Paying Without Knowing It | n/a | 2026-02-25 |
| 6 | kissimmee-orlando-water-quality | Kissimmee and Orlando Water Quality: OUC, KUA, and What Central Florida Residents Need to Know | 1,545 | 2026-04-15 |
| 7 | hard-water-central-florida-floridan-aquifer | The Floridan Aquifer and Hard Water in Central Florida: What It Costs You and How to Fix It | 2,089 | 2026-04-15 |
| 8 | well-water-kissimmee-orlando | Well Water in Kissimmee and Orlando: Problems, Testing, and Treatment for Central Florida | 2,340 | 2026-04-15 |
| 9 | chloramine-vs-ozone-orlando-kissimmee-disinfection | Chloramine vs. Ozone: How Your Central Florida Utility Actually Disinfects Your Water | n/a | 2026-04-21 |
| 10 | sinkholes-karst-central-florida-wells | Sinkholes, Karst Geology, and Your Central Florida Well | n/a | 2026-04-20 |
| 11 | agua-kissimmee-orlando-guia-espanol | Agua de Kissimmee y Orlando, Guía en Español | n/a | 2026-04-19 |
| 12 | vacation-rental-water-quality-disney-area | Vacation Rental Water Quality Near Disney | n/a | 2026-04-18 |
| 13 | pfas-central-florida-2026-orange-county | PFAS in Central Florida Water: Orange County's $4.5M Remediation Plan | n/a | 2026-04-17 |
| 14 | central-florida-whole-house-water-install-2026 | Central FL Whole-House Install 2026: Day-of Guide | n/a | 2026-05-15 |

### Cost-Guide Articles (templated, identical meta pattern, MDX only)

| Slug | Word Count | Date |
|---|---|---|
| reverse-osmosis-cost-florida | 719 | 2026-04-01 |
| water-filtration-cost-florida | 719 | 2026-02-10 |
| water-softener-cost-florida | 719 | 2026-02-24 |
| water-testing-cost-florida | 719 | 2026-01-27 |
| water-treatment-cost-florida | 719 | 2026-03-24 |
| well-water-treatment-cost-florida | 741 | 2026-03-10 |
| summer-water-guide-florida | 414 | 2026-04-06 |
| winter-water-tips-florida | 411 | 2025-12-20 |
| water-softener-vs-water-conditioner | 598 | 2026-01-13 |

Note: data-file (`src/lib/blog-posts.ts`) and MDX inventory drift, 14 entries in the data file, 12 MDX files, with overlapping slugs. Worth de-duping in a separate sweep.

### Core / Conversion Pages (from `src/app/`)

| Path | Current Title | Description present? |
|---|---|---|
| / (home) | Water Filtration & Softeners Kissimmee FL | yes |
| /about | About Us - Family-Owned Water Experts FL | yes |
| /contact | Contact Us - Schedule a Free Water Test | yes |
| /faq | Water Filtration Questions & Answers FAQ | yes |
| /pricing | Water Treatment Pricing — Kissimmee & Central Florida \| Pure Agua | yes (em-dash in title) |
| /certifications | NSF/ANSI 58/61, WQA & FL Licensed \| Pure Agua Enterprise | yes |
| /service-area (singular) | Service Areas - Kissimmee & Orlando FL | yes |
| /service-areas (plural) | All Florida Water Treatment Service Areas | yes |
| /water-softener | Water Softener Installation Orlando FL | yes |
| /water-filtration | Whole Home Water Filtration Systems FL | yes |
| /reverse-osmosis | Reverse Osmosis Water Systems Kissimmee | yes |
| /water-testing | Free Water Testing Kissimmee & Orlando | yes |
| /water-treatment | Water Treatment Services in Kissimmee FL | yes |
| /well-water-treatment | Well Water Treatment in Central Florida | yes |
| /water-softener-in-florida | Best Water Softener Services in Florida | yes |
| /services/water-softening | Water Softener Systems for FL Hard Water | yes |
| /services/whole-home | Whole Home Water Filtration in Kissimmee | yes |
| /services/reverse-osmosis | Reverse Osmosis Drinking Water Systems | yes |
| /services/well-water | Well Water Treatment Systems in Florida | yes |
| /warranty | Lifetime Warranty on All Water Systems | yes |
| /financing | Water Filtration System Financing Plans | yes |

Note: pure-agua has TWO parallel service hierarchies, `/water-softener`, `/water-filtration`, `/reverse-osmosis`, `/well-water-treatment` at root AND `/services/water-softening`, `/services/whole-home`, `/services/reverse-osmosis`, `/services/well-water`. This is the highest-priority architectural finding in this site, see Section 6.

---

## 2. Per-Page Scoring (1 low to 5 excellent)

Rubric matches Solomon audit: Title (keyword, length, differentiator), Meta (CTA, location, no duplication), Freshness (year, dated stats, recent regulation), E-E-A-T (local specifics, named agencies, sources, schema).

### Articles (data-file blog inventory)

| Slug | Title | Meta | Fresh | EEAT | Agg |
|---|---|---|---|---|---|
| kissimmee-orlando-water-quality-guide | 4 | 3 | 2 | 3 | 12 |
| water-softener-complete-guide | 3 | 3 | 2 | 3 | 11 |
| reverse-osmosis-benefits-orlando | 4 | 3 | 3 | 3 | 13 |
| well-water-treatment-osceola-orange-county | 4 | 3 | 3 | 3 | 13 |
| hard-water-damage-guide-central-florida | 4 | 3 | 3 | 3 | 13 |
| kissimmee-orlando-water-quality | 5 | 4 | 4 | 4 | 17 |
| hard-water-central-florida-floridan-aquifer | 5 | 4 | 4 | 4 | 17 |
| well-water-kissimmee-orlando | 5 | 4 | 4 | 4 | 17 |
| chloramine-vs-ozone-orlando-kissimmee-disinfection | 5 | 5 | 5 | 4 | 19 |
| sinkholes-karst-central-florida-wells | 5 | 5 | 5 | 5 | 20 |
| agua-kissimmee-orlando-guia-espanol | 4 | 4 | 4 | 4 | 16 |
| vacation-rental-water-quality-disney-area | 5 | 5 | 5 | 5 | 20 |
| pfas-central-florida-2026-orange-county | 5 | 5 | 5 | 5 | 20 |
| central-florida-whole-house-water-install-2026 | 4 | 4 | 5 | 4 | 17 |

### Cost-Guide Articles (templated)

All 7 cost-guide MDX articles ship identical meta description templates (only the service name swaps). Title quality is acceptable for "How much does X cost in FL" queries, but meta is duplicate-meta-risk. All score: Title 4, Meta 1 (templated), Fresh 2, EEAT 2 = Agg 9.

### Core / Service / Hub

| Path | Title | Meta | Fresh | EEAT | Agg |
|---|---|---|---|---|---|
| / | 3 | 4 | 3 | 3 | 13 |
| /about | 3 | 3 | 2 | 3 | 11 |
| /contact | 3 | 3 | 3 | 3 | 12 |
| /faq | 3 | 3 | 2 | 3 | 11 |
| /pricing | 3 | 4 | 4 | 3 | 14 (title has em-dash, see Section 6) |
| /certifications | 5 | 5 | 4 | 5 | 19 |
| /service-area | 3 | 3 | 2 | 3 | 11 |
| /service-areas | 2 | 3 | 2 | 2 | 9 |
| /water-softener | 4 | 4 | 3 | 3 | 14 |
| /water-filtration | 3 | 4 | 3 | 3 | 13 |
| /reverse-osmosis | 4 | 4 | 3 | 3 | 14 |
| /water-testing | 4 | 4 | 3 | 3 | 14 |
| /water-treatment | 4 | 4 | 3 | 3 | 14 |
| /well-water-treatment | 4 | 4 | 3 | 4 | 15 |
| /water-softener-in-florida | 2 | 2 | 2 | 2 | 8 |
| /services/water-softening | 3 | 4 | 3 | 3 | 13 |
| /services/whole-home | 4 | 4 | 3 | 3 | 14 |
| /services/reverse-osmosis | 3 | 4 | 3 | 3 | 13 |
| /services/well-water | 4 | 4 | 3 | 3 | 14 |
| /warranty | 4 | 3 | 2 | 3 | 12 |
| /financing | 3 | 3 | 3 | 3 | 12 |

---

## 3. Top-10 Refresh Candidates

| Rank | Page | Why |
|---|---|---|
| 1 | /water-softener-in-florida AND duplicate-route question | Title "Best Water Softener Services in Florida" is generic and the page duplicates ground covered by `/water-softener` and `/services/water-softening`. Strong canonical or merge decision is the single biggest sitewide quick win. |
| 2 | /service-areas (plural) | Title "All Florida Water Treatment Service Areas" claims "all FL" but Pure Agua serves Central FL. Misleading promise to crawlers and users, fixing the geo scope clarifies the entire location architecture. |
| 3 | /pricing | Title contains an em-dash (CLAUDE.md hard rule violation). High commercial intent. |
| 4 | / (home) | Title "Water Filtration & Softeners Kissimmee FL" is solid but undifferentiated and misses the 5.0-star/200-review trust signal that is the single biggest GBP differentiator vs Quality Filters and Pumps. |
| 5 | /water-filtration | "Whole Home Water Filtration Systems FL" is generic, no Kissimmee/Orlando city geo in title. High commercial intent. |
| 6 | /about | Author identity opportunity. Author "Carlos Rivera" appears on three articles but is not surfaced on /about. Title misses any author signal. |
| 7 | /reverse-osmosis | Title good but meta misses the PFAS-removal angle (now a top differentiator after the 2026 PFAS NPDWR, see article #13). |
| 8 | /services/water-softening | Sister page to /water-softener, identical commercial intent, duplicate route problem. |
| 9 | /articles/water-softener-cost-florida and the 6 sibling cost-guide MDX articles | All 7 cost articles ship byte-identical meta templates. Refresh the template, get 7 page lifts. |
| 10 | /articles/well-water-treatment-osceola-orange-county | High-intent local query "well water Osceola Orange County." Older 2026-02-14 article that predates the newer 2026-04-15 `/well-water-kissimmee-orlando` companion piece. Refresh and link them tightly. |

---

## 4. Proposed New Title + Meta (Top 10)

All proposals: ≤60 char titles, ≤160 char metas, NO em-dashes (—), en-dashes only in numeric ranges. All trust-signal claims pulled from CLAUDE.md only.

**1. /water-softener-in-florida (decision: canonical to /water-softener)**
- Recommended: 301 redirect to `/water-softener` OR add `<link rel="canonical" href="/water-softener" />`. Title and meta only matter if the page stays live.
- If kept: Title `Florida Water Softener Installation, Pure Agua FL` (49 chars). Meta `Water softener installation across Florida by Pure Agua Enterprises. NSF/WQA certified, family-owned, 200+ reviews. Free in-home water test, call (407) 512-8342.` (157 chars).

**2. /service-areas**
- Title: `Central Florida Service Areas, Pure Agua Enterprise` (51 chars)
- Meta: `Pure Agua Enterprises installs water softeners, filtration, and reverse osmosis across Kissimmee, Orlando, Saint Cloud, Celebration, and Central FL. Free water test.` (165 chars, trim to: ending `Central FL. Free water test.` to fit 160)

**3. /pricing** (em-dash removal)
- Title: `Water Treatment Pricing, Kissimmee and Central Florida` (54 chars)
- Meta: `Transparent pricing for water softeners, whole-house filtration, and reverse osmosis in Kissimmee and Orlando. 5.0 star, 200 plus reviews. Free water test.` (158 chars)

**4. / (home)**
- Title: `Water Treatment in Kissimmee and Orlando FL, 5.0 Star` (54 chars)
- Meta: `Pure Agua Enterprises installs water softeners, whole-home filtration, and reverse osmosis across Central Florida. 5.0 star rating, 200 plus reviews. Free water test.` (164 chars, trim final clause)

**5. /water-filtration**
- Title: `Whole-Home Water Filtration in Kissimmee and Orlando` (52 chars)
- Meta: `Whole-home water filtration installed across Central Florida. Removes chlorine, chloramine, sediment, and PFAS. NSF certified, lifetime warranty. Call (407) 512-8342.` (165 chars, trim)

**6. /about**
- Title: `About Pure Agua, Family-Owned Central FL Since 2016` (51 chars)
- Meta: `Family-owned Central Florida water treatment company, founded 2016. NSF/WQA certified, FL licensed. 200 plus reviews, 5.0 star rating. Free in-home water test.` (157 chars)

**7. /reverse-osmosis**
- Title: `Reverse Osmosis Drinking Water in Kissimmee and Orlando` (55 chars)
- Meta: `Under-sink reverse osmosis systems installed across Central Florida. Removes 99 percent of contaminants including PFAS, lead, and chloramine. Free water test.` (159 chars)

**8. /services/water-softening (or canonicalize to /water-softener)**
- Recommendation: pick one canonical URL, add `<link rel="canonical">` from the duplicate to it. Sister pair `/services/whole-home` vs `/water-filtration`, `/services/reverse-osmosis` vs `/reverse-osmosis`, and `/services/well-water` vs `/well-water-treatment` all have the same problem.
- If kept independent: Title `Hard Water Softener Systems for Florida Homes` (45 chars). Meta `Salt-based and salt-free water softeners for Central Florida. NSF certified, lifetime warranty, free in-home hardness test. Call Pure Agua, (407) 512-8342.` (157 chars)

**9. Cost-Guide MDX articles (replace the identical meta on all 7)**
- Title pattern (already OK, keep as is): `How Much Does {Service} Cost in Florida?`
- Meta variants (rotate two so not byte-identical):
  - Variant A: `{Service} pricing for Central Florida homeowners. Kissimmee and Orlando install costs, what drives the quote, financing options, and free in-home water test.` (160 chars)
  - Variant B: `Real {Service} costs in Kissimmee, Orlando, and Central FL. Equipment range, install costs, financing, and how Pure Agua Enterprises sizes the right system.` (159 chars)

**10. /articles/well-water-treatment-osceola-orange-county**
- Title: `Well Water Treatment in Osceola and Orange County FL` (52 chars)
- Meta: `Iron, sulfur, and bacteria are the three biggest Central Florida well water problems. See 2026 treatment costs, the right system order, and the WMD permit basics.` (162 chars, trim)

---

## 5. Per-Page Refresh Playbook

### 1. /water-softener-in-florida (architecture decision)
- Decide: keep, merge, or 301 to `/water-softener`. Same call applies to `/services/water-softening`. The same problem repeats for filtration, RO, and well water.
- Recommended: keep `/water-softener` (root, has full content), 301 the duplicates, set canonical headers explicitly.
- If split for SEO breadth, add explicit `alternates.canonical` to make the canonical relationship clear.

### 2. /service-areas
- Rewrite to scope to Central FL truth (Kissimmee, Orlando, Saint Cloud, Celebration, Osceola, Orange, Polk counties).
- Replace the misleading "All Florida" framing.
- Add per-city anchor blocks with one-paragraph blurbs.
- Add `Service` schema with `areaServed` enumerated.

### 3. /pricing
- Replace em-dash in title (CLAUDE.md hard rule).
- Add an "Updated 2026-05" stamp.
- Add 4-6 FAQ entries with FAQPage schema.
- Add hardness/iron/PFAS-by-area context (pull from articles 7, 8, 13).

### 4. / (home)
- Rewrite title to lead with location + service.
- Add a "Service Cities" H2 block.
- Add `LocalBusiness` schema with `aggregateRating: 5.0`, `reviewCount: 200+` (only if number can be substantiated from GBP, do not invent precise count).
- Add author/owner identity block: "Family-owned since 2016" (per CLAUDE.md).
- Remove the 5 em-dashes from the home page copy if any (see Section 6 sweep).

### 5. /water-filtration
- Rewrite title and meta to add city.
- Add hardness/contaminant table by Central FL area.
- Add Product schema for the named system.
- Add 4-6 FAQs (chlorine, chloramine, PFAS, sediment, well iron).
- Cross-link the 5 most relevant articles (PFAS, Floridan aquifer, chloramine vs ozone).

### 6. /about
- Add `Person` schema for Carlos Rivera (already attested as author on 3 articles).
- Add founder/owner identity if separate from Carlos (CLAUDE.md says "Family-owned since 2016", the named person needs confirmation, do not invent).
- Add WQA/NSF certificate IDs (request from owner, do not invent).
- Strengthen meta to mention 5.0 star, 200 plus reviews.

### 7. /reverse-osmosis
- Add PFAS-removal angle to title and meta.
- Add 4-stage product schema, named system.
- Cross-link to /articles/pfas-central-florida-2026-orange-county.
- Add comparison FAQ vs pitcher and vs whole-home carbon.

### 8. /services/* (the 4 duplicate-route service pages)
- Architectural decision per Section 4.1.
- If kept, add explicit canonical to the root-level twin.
- Either way, add `BreadcrumbList` schema.

### 9. Cost-guide MDX articles (×7)
- Replace the duplicate-meta template (Variant A or B per Section 4.9).
- Add price range tables (sizes, install scope, financing) so the 719-word stubs become 1,200-1,500 word answers.
- Add `dateModified` to Article schema.
- Refresh author from "Pure Agua Enterprises Team" to Carlos Rivera (already the named author on 3 longer articles).

### 10. /articles/well-water-treatment-osceola-orange-county
- Rewrite title with county names in title slot.
- Add 2026 update section (sinkhole/karst context from article #10, Floridan aquifer detail from article #7).
- Cross-link to /articles/well-water-kissimmee-orlando (the newer 2,340-word companion).
- Add `dateModified` and FAQ block.

---

## 6. Sitewide Metatag and Pattern Findings

**Critical**
- **Duplicate-route architecture for all 4 services.** `/water-softener` AND `/services/water-softening`, `/water-filtration` AND `/services/whole-home`, `/reverse-osmosis` AND `/services/reverse-osmosis`, `/well-water-treatment` AND `/services/well-water`, plus `/water-softener-in-florida` overlapping with both. Every service has 2-3 routes serving overlapping content. No `alternates.canonical` set on any of them per spot-check. This is the single biggest sitewide risk for keyword cannibalization. Decide canonical + 301 the duplicates.
- **Domain not registered.** `pureaguaenterprise.com` does not exist (per CLAUDE.md 2026-05-15 WHOIS). All SEO equity routes to Vercel preview. Register domain before any of these refreshes ship.
- **Trust-signal language drift.** The site uses "lifetime warranty" copy widely. Verify with owner before any rewrite ships, given the precedent set on the Solomon site (where "lifetime warranty" was inaccurate vs the on-site framing). Do not auto-trust the existing copy without an owner check.

**High**
- **Em-dashes in shipped meta and copy.** CLAUDE.md hard rule violated.
  - `/pricing` title contains em-dash: `Water Treatment Pricing — Kissimmee & Central Florida | Pure Agua`.
  - Em-dash sweep found 361 em-dash occurrences across `src/` + `content/` (235 in src/, 126 in content/). Audit before any future rewrite ships.
  - Offender files include /water-softener, /service-areas, /water-filtration, /faq, /about, /well-water-treatment, /blog, /reverse-osmosis, /certifications, /water-testing, /water-treatment, /pricing, /water-softener-in-florida.
- **Cost-Guide MDX articles ship byte-identical meta description templates.** 7 articles (RO, water filtration, water softener, water testing, water treatment, well water treatment, plus the seasonal pair) share `"{Service} pricing guide for Florida homeowners. Pure Agua Enterprises breaks down costs, factors that affect pricing, and how to get the best value."` with only the service name swapped. Duplicate-meta GSC warning risk.
- **Two services pages with different titles target same query.** `/water-softener` ("Water Softener Installation Orlando FL") and `/services/water-softening` ("Water Softener Systems for FL Hard Water") will compete in the same SERP.
- **Service-areas page misclaims "All Florida."** Title `All Florida Water Treatment Service Areas` is geographically inaccurate. Pure Agua serves Central FL.

**Medium**
- **Data-file vs MDX inventory drift.** `src/lib/blog-posts.ts` lists 14 blog posts, `content/articles/` ships 12 MDX files, with at least 3 slugs in the data file that have no MDX (water-softener-complete-guide, reverse-osmosis-benefits-orlando, hard-water-damage-guide-central-florida, kissimmee-orlando-water-quality-guide) AND some MDX files (the 7 cost guides + 2 seasonal) that may not appear in the data file. Verify the actual `/blog/[slug]` resolution path before publishing any rewrite.
- **Author byline inconsistency.** Long-form articles credit Carlos Rivera. Cost-guide MDX files credit "Pure Agua Enterprises Team". Mixed authorship hurts E-E-A-T scoring. Pick one named author or two named experts and apply consistently.
- **`netlify.toml` present in a Vercel-deployed repo.** Audit and remove (clean up note from CLAUDE.md). Not a metatag issue but a deploy-hygiene issue that affects audit-tool accuracy.
- **OG image coverage.** Spot-check showed some articles lack `images:` field in OG metadata. Sweep before next refresh ships; deliver per-article hero images at `/public/images/blog-hero/{slug}.jpg` per the FaxStrive blog template.

**Low**
- **Older articles (2026-01 and 2026-02 batch) lack `dateModified`.** Cheap freshness lift across roughly 5 articles.
- **`/services/*` layout duplicates child metadata.** When the child route exports its own metadata it overrides; spot-check before assuming inheritance.
- **`/water-softener-in-florida` title `Best Water Softener Services in Florida`** is the only "best in {state}" framing on the site and reads as low-quality marketing language. Drop or rewrite per Section 4.1.

---

_SEOMAN Lane C audit batch 2, 2026-05-15_
