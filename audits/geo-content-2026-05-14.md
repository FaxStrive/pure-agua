# Pure Agua Enterprises — GEO Content Quality Audit (E-E-A-T)

**Site:** https://pureaguaenterprise.com
**Audit date:** 2026-05-14
**Framework:** 2026 E-E-A-T weights — Trustworthiness 30%, Authoritativeness 25%, Expertise 25%, Experience 20%
**Byline:** Pure Agua Enterprises Team (organization-style, no named individual)
**Audit method:** Source-code review against the deployed Next.js app (live URL was unreachable at audit time — `ECONNREFUSED` on both apex and www). Findings reflect the code that will render at next deploy.

---

## Content Score: 71/100 — Good (with two High-severity issues capping the ceiling)

| Dimension | Weight | Raw /25 | Weighted |
|---|---|---|---|
| Trustworthiness | 30% | 17 | 20.4 |
| Authoritativeness | 25% | 16 | 16.0 |
| Expertise | 25% | 21 | 21.0 |
| Experience | 20% | 17 | 13.6 |
| **Total E-E-A-T** | **100%** | — | **71.0 / 100** |

Two issues are dragging Trustworthiness below where the underlying content quality deserves: (1) a wrong phone number `+11799836455` repeated 29 times in the legacy `/content/articles/*.mdx` and `blog-posts.generated.json` tier, and (2) the `Carlos Rivera` ghost author still living in research files and roadmap notes. Both are easy to fix; until they are, every AI engine that crawls those files sees a NAP mismatch and an unverifiable author claim.

---

## E-E-A-T Assessment

### Trustworthiness — 17/25

| Signal | Status | Evidence |
|---|---|---|
| HTTPS | Pending verify | Site was offline at audit time; `next.config.mjs` and Netlify config are consistent with HTTPS |
| NAP consistency | **FAIL** | Org schema in `schema-markup.tsx` says `+14075128342` and address `3705 Eagle Isle Circle, Kissimmee, FL 34746`. 9 legacy MDX articles in `/content/articles/` plus 5 generated JSON posts publish `+11799836455` — a completely different number. 29 hits total. |
| Address visible | Pass | In schema, on contact page |
| Phone visible | Mixed | Correct in nav (`(407) 512-8342`) and schema, wrong in legacy articles |
| Privacy / Terms pages | Pass | `/privacy` and `/terms` routes exist |
| Editorial standards / sourcing | Partial | New pillars and 2026-05-14 articles cite USGS, EPA, WQRF, DOE, utility CCRs by name. Legacy MDX articles (pre-template) cite nothing. |
| Factual accuracy | Mixed | New content (pillars + 3 May-14 articles) is technically accurate and source-anchored. Legacy MDX repeats a single price band ("$1,500–$4,500") across three different services without justification. |
| Content dating | Pass | All blog posts in `blog-posts.ts` have `date` field. New articles dated 2026-05-14. Pillars carry "(2026)" in H1. |
| Affiliate / sponsor disclosure | N/A | No affiliate links detected — this is a service business, not a publisher |
| AggregateRating | Present | `5.0`, `reviewCount: 200` in schema. **Verify the 200 number can be substantiated by GBP review export before leaving in schema.** |
| Author identity | Pass on-site | Rendered site uses `Pure Agua Enterprises Team` everywhere. No `Carlos Rivera` reaches any rendered page. |
| Author identity in repo | **FAIL** | "Carlos Rivera" still appears in `research/article-fact-packs-2026-04-21.md` line 4 ("Owner: Carlos Rivera"), `seo-strategy/00-INDEX.md`, `seo-strategy/01-content-roadmap.md`, and `CLAUDE.md`. None of these ship to production, but they are the kind of artifact future agents (or human writers grepping for "owner") will re-introduce. Per project memory, this name is a prior-LLM fabrication and should be excised from the repo entirely. |

#### Trustworthiness details
- The schema-markup component is unusually strong for a local service site: organization `@id`, areaServed array of 23 cities, `hasCredential` block citing NSF/ANSI 58, NSF/ANSI 61, WQA membership, FL license, GeoCoordinates, full opening hours. This is the kind of trust scaffolding AI engines look for.
- The legacy MDX phone-number bug is the single biggest trust hit in this audit. AI crawlers reading those files will surface a number that goes nowhere when prospects call it.
- The CCR-data pattern in `local-services.ts` is exemplary: the file header explicitly states "Every locale-specific number must trace to a named source URL. When a city-specific CCR figure could not be verified at write time, the field is left undefined." That note alone signals editorial discipline to a careful reader.

### Authoritativeness — 16/25

| Signal | Status | Evidence |
|---|---|---|
| About page | Partial | Page exists, renders OurStory, Values, WhyChooseUs, Testimonials, ServiceAreaBanner. Copy is generic ("born from a simple belief"). No named founder, no story specifics, no photo (placeholder reads "Family Photo Here — Client to provide"). |
| Credentials | Pass in schema, missing on page | NSF/ANSI 58 and 61, WQA membership, FL license appear in `hasCredential` schema. They do not appear in the visible About copy. |
| External citations | Strong (new content) | New pillars and 2026-05-14 articles cite USGS, EPA, Florida DOH, WQRF, DOE, named utilities. Legacy MDX articles cite nothing. |
| sameAs links | Weak | Schema currently includes only the verified Google Maps URL. Social profiles were pruned in the 2026-05-14 PR pending verification. |
| Topical breadth | Strong | 3 pillar pages (hard water / well / RO), 13 blog posts, 80 local-grid pages (20 cities × 4 services), service pages for filtration / softener / RO / testing / well water |
| Hub-and-spoke architecture | Pass | Pillars at `/water-treatment/[slug]` link out to specific blog posts and city pages. Blog posts reverse-link to pillars. Local pages link to relevant pillar. |
| Recognition / awards | Weak | None visible. The "200+ reviews, 5.0★" claim in schema is the only third-party validation surfaced. |
| Brand presence (LinkedIn, YouTube, Wikipedia) | Unknown | Cannot verify from source review. The `geo brands` skill should run this separately. |

#### Authoritativeness details
- This site is a textbook regional water-treatment operator with a strong topical footprint but minimal external entity presence. Schema scaffolding is in place; the gap is the actual link inventory at `sameAs`.
- The About page is the weakest link in the authoritativeness picture. Three generic paragraphs and a "Family Photo Here" placeholder are well below where the rest of the site is now. A real founder story, a license number, and an NSF/WQA membership badge image would move this score 4–5 points by themselves.

### Expertise — 21/25

| Signal | Status | Evidence |
|---|---|---|
| Technical depth (new content) | Strong | Pillar pages discuss Floridan Aquifer karst chemistry, USGS hardness brackets (gpg vs mg/L as CaCO3), demand-initiated regeneration math, resin crosslink grades (8% vs 10% for chloramine), TAC scale-reduction percentages, AIO iron pretreatment thresholds (3 ppm), sodium addition math (7.5 mg/L per gpg removed) |
| Methodology transparency | Pass | The sizing formula `(hardness gpg + 4 gpg per ppm iron) × daily gallons = grains/day, target 3–7 day regen` appears in two pillars and the 2026-05-14 cost article. Same formula, same numbers — internally consistent. |
| Nuance / edge cases | Pass | Pillars explicitly call out where TAC is and isn't appropriate, where magnetic descalers fail, when iron pretreatment is required, when softeners are the wrong tool |
| Industry vocabulary | Pass | Catalytic carbon vs GAC, demand-initiated regeneration, brine air gap, NSF/ANSI 58 vs 61, MCL, TTHM, HAA5, AIO — used correctly throughout |
| Author byline | Pass | All 13 blog posts in `src/lib/blog-posts.ts` carry `"Pure Agua Enterprises Team"` |
| Person schema for author | Missing | No `Person` schema for an individual expert. The organization byline is intentional, but a `Person` entry for a named NSF/WQA-certified technician with a bio paragraph would strengthen this. |
| External author presence | N/A | Organization byline, by design |
| Surface-level vs deep | Strong | Pillar pages average 2,200+ words with no fluff. The 2026-05-14 cost article includes a line-by-line install breakdown rather than a single round number. |

#### Expertise details
The new 2026-05-14 content (3 pillars + 3 articles) is professionally written by someone who has actually sized softeners. The use of specific resin grades (8% vs 10% crosslink), the discussion of why standard GAC fails on chloramines and catalytic is required, the explicit "(hardness + 4 per ppm iron) × daily gallons" sizing formula — these are not signals an LLM produces by default. The 12 legacy MDX articles in `/content/articles/` are at a much lower expertise grade (templated H2 structure, generic FAQ answers, cost ranges that don't differ between water-filtration-cost / water-softener-cost / RO-cost). The expertise floor is high; the expertise floor below the pillars is medium.

### Experience — 17/25

| Signal | Status | Evidence |
|---|---|---|
| First-hand operational detail | Strong (new content) | "We schedule installs in morning blocks and finish the same day." "Florida ranches with the softener mounted outside under a weather cover routinely land in the upper third of the range." This is operator voice. |
| Original data / proprietary numbers | Partial | Sizing formula and install breakdown are proprietary in the sense that they reflect actual install economics. No proprietary water-quality dataset is published. |
| Case studies | None | No named-customer case studies on site. Before/After gallery exists but copy was not reviewed. |
| Process documentation | Pass | "What is in the $1,800 to $3,800 single-tank install" line-item breakdown is real operator detail. |
| Before/after comparisons | Likely Pass | `/before-after` and `BeforeAfterGallery.tsx` exist; quality of imagery not assessed in this audit |
| Failure / challenge discussion | Pass | "The three cost mistakes" section in the 2026-05-14 cost article. "We do not install or recommend magnetic descalers." These are credible operator opinions. |
| Founder / team photography | **MISSING** | About page has placeholder "Family Photo Here — Client to provide". This is the single biggest missing experience signal on the site. |
| Specific names, dates, places | Strong | Toho Water Authority, OUC, City of Sanford, Floridan Aquifer, named counties (Orange/Osceola/Seminole/Polk/Lake/Volusia), specific resin volumes (32k / 48k / 64k grain), specific NSF/ANSI numbers, specific FL DOH well-test guidance — all named correctly |

#### Experience details
The signal of an actual local installer comes through in the new content. What is missing is the photographic and human-face proof. Without real team photos, license numbers visible on the site, NSF/WQA badge images, and a few named-customer case studies (with permission), the Experience score is capped. Add those and this score moves to 22–23/25.

---

## Content Metrics (sampled across 3 pillars + 3 May-14 articles + about + 1 legacy article)

| Metric | Value | Assessment |
|---|---|---|
| Word count (new pillars) | 2,000 – 2,500 each | Long-form, appropriate for topic |
| Word count (May-14 articles) | ~2,200 – 2,500 each | Per blog-article-template spec |
| Word count (legacy MDX) | 400 – 700 each | **Thin** vs the 2,200 standard the site has now adopted |
| Readability (Flesch, est.) | ~50–55 | Fairly difficult — appropriate for technical home-improvement audience |
| Avg paragraph length | 60 – 110 words | Good for web; some pillar paragraphs push 140+ but stay readable |
| Heading hierarchy | Clean | Pillars use one H1, 7–8 H2s, no skipped levels |
| Internal links per page (new pillars) | 6 – 15 | At target |
| External citations per page (new pillars/articles) | 3 – 6 named sources | Strong (USGS, EPA, FL DOH, WQRF, DOE, utilities) |
| Images with alt text | Pass on new content | The 2026-05-14 articles include `<figure>` with descriptive alt + figcaption with Wikimedia attribution. Hero image placeholders flagged in CLAUDE.md for replacement. |

### Heading structure (sample — `/water-treatment/central-florida-hard-water`)
```
H1: Central Florida Hard Water: A Homeowner's Guide (2026)
  H2: Why Central Florida water is so hard
  H2: Reading your hardness number
  H2: Recommended fix by water type
  H2: What a properly sized softener looks like
  H2: Salt-free conditioners: what they actually do
  H2: Whole-house carbon for chloramine and chlorine
  H2: Cost ranges in the Central Florida market
  H2: What to do next
```
Clean hierarchy, descriptive headings, scene-set openings per template.

---

## AI Content Assessment

**Assessment (new pillars + May-14 articles): Highly Likely Human-Written or Heavily Edited.**

**Assessment (legacy MDX in `/content/articles/`): Likely AI with Light Editing.**

| Indicator | New content | Legacy MDX |
|---|---|---|
| Generic phrasing | Low | High ("Understanding the cost of X is essential before making any decisions") |
| Lack of specifics | Low | High (same $1,500–$4,500 band across three different services) |
| No original data | False — operator voice and sizing math present | True |
| Hedging overload | Low | Moderate |
| No authorial voice | Voice is present ("We test on site") | Mostly absent |
| Templated structure | Intentional template, well-executed | Repeated template across services with content largely identical |

The May-14 PR did the right thing by building new content to the editorial template rather than refreshing the legacy MDX in place. The legacy MDX should be either rewritten or retired before the next AI crawl pass; running them alongside the new content dilutes the topical authority of the site.

---

## Topical Authority — Strong

- **Breadth:** 3 pillar pages, 13 blog posts, 80 local-grid pages (20 cities × 4 services), 7 service pages. Coverage spans hardness, well water, RO, softeners, filtration, testing, financing, FAQ.
- **Internal linking:** Pillars link to 3–5 blog posts and 2–3 local pages each. Blog posts reverse-link to relevant pillar. Local pages link to a relevant pillar.
- **Hub-and-spoke structure:** Present and intentional. Pillars are the hubs; blog articles and local pages are the spokes.
- **Coverage gaps:**
  - No content on chloramine vs chlorine for skin/hair specifically (high-volume Central FL query)
  - No content on softener salt comparison (pellet vs solar vs evolution / potassium chloride for sodium-sensitive households)
  - No PFAS-specific drinking-water article that goes deeper than the May-14 PFAS pillar
  - No comparison content vs the named competitors (RainSoft, Kinetico, Quality Filters and Pumps) — opportunity for `/seo-competitor-pages`

---

## Content Freshness

- **Pillars:** Created 2026-05-14, dated `(2026)` in H1.
- **2026-05-14 articles:** Dated 2026-05-14.
- **Legacy blog posts in `blog-posts.ts`:** Dated 2026-01-12 through 2026-02-24.
- **Legacy MDX in `/content/articles/`:** Dated 2026-02-24. Carry `Last updated: April 2026` `<time>` tags but the underlying content has not actually been updated.
- **Time sensitivity:** Medium-high. Cost ranges, EPA PFAS MCLs, and utility chloramine practices change. The site is appropriately dated for 2026.
- **Freshness assessment:** Current. The site does not currently have stale content. The risk is the legacy MDX going stale because no one owns it.

---

## Top 10 Findings

| # | Severity | Finding |
|---|---|---|
| 1 | **CRITICAL** | Wrong phone number `+11799836455` appears 29 times across 9 legacy MDX articles in `/content/articles/` and 5 entries in `src/lib/blog-posts.generated.json`. The correct number is `(407) 512-8342` / `+14075128342`. This is a NAP-consistency failure that directly damages trust signals to both Google and AI crawlers. |
| 2 | **CRITICAL** | "Carlos Rivera" (legacy LLM fabrication, per project memory) still lives in `research/article-fact-packs-2026-04-21.md`, `seo-strategy/00-INDEX.md`, `seo-strategy/01-content-roadmap.md`, and `CLAUDE.md`. The name does not reach any rendered page, but it is the kind of repo artifact future agents will re-surface. Excise from repo. |
| 3 | **HIGH** | About page renders a placeholder image labeled "Family Photo Here — Client to provide". No founder identity, no team photography, no visible license number. Single biggest Experience-score gap on the site. |
| 4 | **HIGH** | Legacy `/content/articles/*.mdx` (12 files, 400–700 words each) are templated, low-expertise, and inconsistent with the rest of the site's standard. They should be either rewritten to the blog-article-template or unpublished. Leaving them alongside the new content dilutes topical authority. |
| 5 | **HIGH** | NSF/ANSI 58, NSF/ANSI 61, WQA member, FL licensed claims appear in `hasCredential` schema but are not surfaced visibly anywhere on the rendered site. Schema-only credentials are weaker than schema + visible badge + license number. |
| 6 | **MEDIUM** | `sameAs` schema currently contains only the Google Maps URL. Social profiles were pruned in the May-14 PR pending verification. Verify and re-add Facebook, Instagram, LinkedIn, BBB profile URLs. |
| 7 | **MEDIUM** | OurStory copy in `translations.ts` is generic ("born from a simple belief"). No specific founding story, no year, no Central Florida origin moment. Rewrite to match the editorial discipline of the May-14 content. |
| 8 | **MEDIUM** | `aggregateRating` claims `reviewCount: 200` and `ratingValue: 5.0`. Verify against current GBP review export. If the live count is lower, adjust the schema to the truthful number before next crawl. |
| 9 | **MEDIUM** | No named-customer case studies on site (before/after gallery may have some — not assessed). Adding 3 named installs with hardness numbers, system installed, and outcome would lift Experience score 2–3 points. |
| 10 | **LOW** | No `Person` schema for any technician. The organization byline is intentional and correct, but a `Person` schema for a named NSF/WQA-certified team member with a bio would strengthen Expertise signals without contradicting the team-byline strategy. |

---

## Top 5 Fixes (in priority order)

1. **Phone-number sweep across `/content/articles/` and `blog-posts.generated.json`.** Replace every `+11799836455` with `(407) 512-8342`. 14 files, mechanical edit. Should ship the same day this audit lands. Verify by re-running `grep -r '\+11799836455' .` until zero hits.

2. **Excise "Carlos Rivera" from the repo entirely.** Edit `research/article-fact-packs-2026-04-21.md`, `seo-strategy/00-INDEX.md`, `seo-strategy/01-content-roadmap.md`, and `CLAUDE.md` to replace the name with `Pure Agua Enterprises Team` or with a neutral note ("Owner identity withheld at client request"). This closes the door on future agents re-introducing the fabrication.

3. **About-page rebuild.** Real team photograph (or a credible illustrated alternative). Specific founding-year story. FL license number visible. NSF/ANSI 58, NSF/ANSI 61, WQA badge images displayed. Three lines on why family-owned matters in this market. This is a single content-edit PR — no new components needed; the About sections already render.

4. **Legacy MDX cleanup.** For each of the 12 files in `/content/articles/`, decide: rewrite to the blog-article-template (2,200–2,500 words, real sourcing, BLUF, condition→action table, FAQ-with-schema) or unpublish via sitemap removal and `noindex`. Recommend rewriting 4 (the cost articles, since they are the highest-intent), unpublishing the other 8 until rewrites are queued.

5. **Visible credential surfacing.** Add a small "Credentials" strip to the About page and the Footer: "NSF/ANSI 58 & 61 certified systems · WQA member · Florida-licensed plumbing contractor #[NUMBER]". This costs one design row. Pair the schema claim with on-page proof so AI engines can extract both signals from the same page.

---

## Sign-off

This audit covers content quality and E-E-A-T signals only. Adjacent passes still owed:
- `/seo technical` for SSR / Core Web Vitals
- `/geo crawlers` for AI-crawler robots.txt coverage
- `/geo brands` for external entity presence
- `/seo local` for GBP, citation, and review-intelligence detail

_SEOMAN geo-content audit, 2026-05-14_
