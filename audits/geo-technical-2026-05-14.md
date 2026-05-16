# GEO Technical Audit — Pure Agua Enterprises

**Target:** https://pureaguaenterprise.com
**Audit type:** GEO Technical (SSR, AI crawlers, llms.txt, CWV, security, canonical, schema-pathway)
**Date:** 2026-05-14
**Auditor:** SEOMAN geo-technical

---

## Technical Score: 58/100 — Fair (held down by P0 DNS finding)

> **P0 / CRITICAL — Production domain does not resolve.** `pureaguaenterprise.com` returns `NXDOMAIN` from public DNS. Neither apex nor `www.` resolve. The canonical URL declared in `layout.tsx` (`metadataBase: https://pureaguaenterprise.com`), referenced in robots.txt, llms.txt, sitemap.ts, JSON-LD `@id`, every Org schema field, and every internal sitemap entry, points to a domain that is currently unreachable. Until DNS is configured at the registrar and the Vercel/Netlify production deployment is bound to it, **no AI crawler, no Googlebot, and no human can reach the canonical URL.** This single issue caps the effective technical score regardless of how clean the code is. Score below reflects the **code-as-shipped** quality (what will be served once DNS is live); the live-domain score is **0/100 until DNS resolves.**

Vercel preview `https://pure-agua-6h12l67ed-fax-strive.vercel.app/` returns **401 (Vercel SSO wall)**, so AI crawlers cannot reach the preview either. All findings below are derived from static analysis of the source repo at `/Users/ezekiel/Desktop/SEOMAN/active-seo/pure-agua/`.

### Score Breakdown

| Category | Score | Weight | Weighted | Status |
|---|---|---|---|---|
| Server-Side Rendering | 85/100 | 25% | 21.3 | Good |
| Meta Tags & Indexability | 85/100 | 15% | 12.8 | Good |
| Crawlability (robots/sitemap/llms.txt) | 55/100 | 15% | 8.3 | Fair (P0 DNS, AI crawler blocks) |
| Security Headers | 70/100 | 10% | 7.0 | Fair (Netlify-only; CSP/HSTS missing) |
| Core Web Vitals Risk | 55/100 | 10% | 5.5 | Medium risk |
| Mobile Optimization | 85/100 | 10% | 8.5 | Good |
| URL Structure | 90/100 | 5% | 4.5 | Excellent |
| Response & Status | 0/100 | 5% | 0.0 | CRITICAL — DNS NXDOMAIN |
| Additional Checks | 80/100 | 5% | 4.0 | Good |
| **Total** | | | **71.9** | rounded **58/100** after P0 DNS penalty (-14) |

---

## 1. Response Headers & Status — CRITICAL

| Check | Result |
|---|---|
| DNS resolution (apex) | `NXDOMAIN` — Host not found |
| DNS resolution (www) | `NXDOMAIN` |
| HTTPS reachable | No (cannot resolve) |
| Vercel preview | 401 (Vercel SSO authentication wall) |

**Implication for AI crawlers:** GPTBot, ClaudeBot, PerplexityBot, Google-Extended, OAI-SearchBot, Applebot-Extended and Googlebot all receive the same NXDOMAIN error. The site does not exist on the public internet. No content can be indexed, cited, or crawled.

**Fix:** Confirm domain registration at registrar (GoDaddy/Namecheap/Cloudflare/etc), add A/AAAA records pointing to Vercel (`76.76.21.21`) or Netlify, and add `www` CNAME. Verify with `dig pureaguaenterprise.com` and `dig www.pureaguaenterprise.com`. Until then every other GEO/SEO investment on this site is dormant.

---

## 2. Server-Side Rendering Assessment

**Status:** LOW-to-MEDIUM risk (once domain resolves)
**Rendering Type:** SSR (forced) — `export const dynamic = "force-dynamic"` in `layout.tsx:71`
**Framework:** Next.js 14.2.15 App Router + React 18, deployed via Netlify Next.js plugin (`netlify.toml`) with `output: "standalone"` (`next.config.mjs`).

**SSR signals confirmed:**
- App Router with server components (default for `page.tsx`, `layout.tsx`).
- `force-dynamic` mode guarantees every request is rendered server-side (no static HTML cache, no client-only hydration gap for content).
- Full meta tags rendered via Next `Metadata` API in `layout.tsx:30-69` and per-page (e.g., `page.tsx:19-35`).
- Inline JSON-LD is server-rendered (`dangerouslySetInnerHTML` in `<head>`), so AI crawlers see structured data without executing JS.
- `__NEXT_DATA__` will be present in initial HTML response.
- Body is composed of server components (`<Hero/>`, `<Stats/>`, `<Services/>`, `<FAQ/>`, etc.) which output substantive HTML pre-hydration.

**Watch-outs:**
- `force-dynamic` disables ISR and full-route caching. Every request hits the origin. For a marketing site this raises TTFB risk and increases edge cost. Recommend switching to `revalidate = 3600` (ISR) once DNS is live; preserves SSR for crawlers while caching at the edge.
- Several conversion components (`<ExitIntentPopup/>`, `<SocialProofToast/>`, `<StickyBottomBar/>`, `<FloatingCTA/>`, `<MobileCallBar/>`, `<ScrollRevealCTA/>`, `<CornerOfferPeek/>`, `<TimedTopBar/>`) are client components that ship JS to every page. None block content visibility for crawlers, but they inflate bundle size.

**Verdict:** SSR posture is good for AI visibility. Score 85/100.

---

## 3. Crawlability — robots.txt, AI crawlers, sitemap, llms.txt

### robots.txt (`/public/robots.txt`) — 14-AI-crawler matrix

| Crawler | Directive | Correct for GEO? |
|---|---|---|
| `*` (default) | Allow / with /api/, /admin/, ?sort=, ?filter=, ?ref= disallowed | OK |
| **GPTBot** | Disallow / | **WRONG — blocks OpenAI training. Acceptable IF Luke intends to opt out of training, but this also impacts citation indirectly. Recommend keep Allow if goal is AI citation.** |
| **ChatGPT-User** | Allow / | Correct (user-triggered fetches) |
| **OAI-SearchBot** | Allow / | Correct (powers ChatGPT search citations) |
| **ClaudeBot** | Disallow / | **WRONG for GEO — this is Anthropic's primary training+context crawler. Blocking it removes the site from Claude's knowledge.** |
| **anthropic-ai** | Disallow / | Same — blocks Anthropic. Recommend Allow for GEO. |
| **Claude-Web** | Not listed | Missing — defaults to `*` (allow). OK by default but better to explicitly Allow. |
| **Claude-User** | Allow / | Correct |
| **Claude-SearchBot** | Allow / | Correct (newer Anthropic search bot) |
| **PerplexityBot** | Allow / | Correct (Perplexity index crawler) |
| **Perplexity-User** | Allow / | Correct |
| **Google-Extended** | Allow / | Correct (Gemini training + AI Overviews grounding) |
| **Applebot-Extended** | Allow / | Correct |
| **Bytespider** | Not listed | Missing — defaults to `*` (allow). ByteDance/TikTok. Add explicit Disallow if Luke wants to block; otherwise leave. |
| **CCBot** | Disallow / | Correct if blocking Common Crawl training data |
| **Meta-ExternalAgent** | Disallow / | Blocks Meta AI / Llama training |
| **Amazonbot** | Disallow / | Blocks Alexa/Rufus training |
| **cohere-ai** | Disallow / | Blocks Cohere training |
| **Diffbot** | Disallow / | Blocks Diffbot Knowledge Graph |
| **DuckAssistBot** | Not listed | Missing. Add Allow for DDG AI answers. |
| **FacebookBot** | Not listed | Missing. Distinct from Meta-ExternalAgent. |
| **ImagesiftBot** | Not listed | Missing. |
| **Omgilibot** | Not listed | Missing. |

**Sitemap directive:** `Sitemap: https://pureaguaenterprise.com/sitemap.xml` — references unresolvable domain (P0 inherited).

**llms.txt reference:** Comment-only at end of robots.txt; not a directive. OK.

**Net GEO posture on robots.txt:**
The training-vs-search-citation split is sophisticated and shows intent. However, **ClaudeBot Disallow** is the single biggest GEO mistake on this file — Claude's training cycle is the only path to baseline citation knowledge for Claude/Anthropic surfaces; blocking it does not prevent Anthropic from re-fetching at query time (that's Claude-User) but it does prevent the model from "knowing about" the brand pre-query. Same logic applies to GPTBot for ChatGPT's main training. **Recommend flipping GPTBot and ClaudeBot to Allow if AI citation is the goal.** Score: 55/100 (Disallows hurt; missing entries hurt; sitemap URL broken).

### llms.txt (`/public/llms.txt`)

- **Present.** Valid `# H1` title + `>` summary block.
- Sections: About, Services (only links to `/services`), Service Areas (8 cities), FAQ (5 Q&As with 40-60 word answers — well-aligned to the 134-167 word citation passage guidance), Contact, All Pages, Machine-Readable Versions.
- **Phone mismatch:** llms.txt says `(407) 773-2883`; `layout.tsx` and `CLAUDE.md` say `(407) 512-8342`. **Inconsistency — fix to one canonical number.** This is the kind of contradiction the C01 veto check would flag.
- All URLs reference `https://pureaguaenterprise.com/...` — inherits P0.
- Companion files exist: `/public/llms-full.txt`, `/public/llms-qa.json`. Good for layered discovery.

Score on llms.txt itself: 75/100. Loses points for phone inconsistency and thin Services section (only one bullet).

### Sitemap (`/src/app/sitemap.ts`)

- Next.js dynamic sitemap (TypeScript). 81 lines of static entries + dynamic generation for local-grid pages and pillars.
- Includes pillars at `/water-treatment/*`, blog posts, 80 local-grid pages (20 cities × 4 services), static informational pages.
- All `lastmod` timestamps set to `new Date('2026-05-14')` — **risk: every URL has the same lastmod**, which dilutes the freshness signal. Older blog posts list pre-2026-05-14 lastmod individually (good pattern, used inconsistently).
- `priority` values reasonable (1.0 home → 0.3 legal).
- Cannot validate served XML output until DNS resolves.

Score on sitemap: 75/100. Loses points for uniform `lastmod` and unreachable URL host.

---

## 4. Meta Tags & Indexability

| Tag | Status | Notes |
|---|---|---|
| `<title>` | Present, templated (`%s \| Pure Agua`) | Default 56 chars, on brand |
| `<meta description>` | Present, 192 chars (slightly over 160 ideal) | Trim to ~155 for SERP truncation |
| Canonical | `metadataBase` set + per-page `alternates.canonical: '/'` | Correct |
| Robots | `index:true, follow:true` | Correct |
| Viewport | Inherited from Next default | Present |
| `<html lang="en">` | Present (layout.tsx:79) | Correct |
| Open Graph | Complete (title, description, type=website, locale, url, siteName, image 1200×630, alt) | Excellent |
| Twitter Card | Complete (summary_large_image) | Excellent |
| hreflang | Not present | OK — single-locale site. Note `agua-kissimmee-orlando-guia-espanol` blog post is in Spanish; if Spanish content grows, add `hreflang` and an `es` locale. |
| `metadataBase` | `https://pureaguaenterprise.com` | Inherits P0 |

**Issues:**
1. **Bing site verification stub:** `<meta name="msvalidate.01" content="BING_VERIFICATION_ID_HERE" />` at `layout.tsx:88` — placeholder string. Either fill it with the real ID from Bing Webmaster Tools or remove. Currently it's a public marker of "incomplete setup."
2. Description on home page (`page.tsx:21`) is 175 chars — a touch long.

Score: 85/100.

---

## 5. Security Headers

Source: `netlify.toml:38-45`. Applied by Netlify edge for all paths.

| Header | Status | Value |
|---|---|---|
| HTTPS | Will be enforced by Netlify/Vercel auto-HTTPS | Pending DNS |
| **HSTS** | **MISSING** | Add `Strict-Transport-Security: max-age=31536000; includeSubDomains; preload` |
| **CSP** | **MISSING** | Recommend at minimum `Content-Security-Policy: upgrade-insecure-requests` |
| X-Frame-Options | Present | `DENY` |
| X-Content-Type-Options | Present | `nosniff` |
| Referrer-Policy | Present | `strict-origin-when-cross-origin` |
| Permissions-Policy | Present | `camera=(), microphone=(), geolocation=()` |

**Deductions:** no HSTS (-10), no CSP (-10). The Permissions-Policy could also be tightened (`browsing-topics=(), interest-cohort=()` to opt out of FLoC/Topics).

Note: `netlify.toml` will not apply if the production deployment ends up on Vercel (Vercel previews are 401-walled, hinting at Vercel as target). If on Vercel, add a `vercel.json` headers block or middleware to mirror these — otherwise the security headers are dead config.

Score: 70/100.

---

## 6. Core Web Vitals Risk Assessment (Static Analysis)

| Vital | Risk | Indicators |
|---|---|---|
| **LCP** | Medium | `<link rel="preload" as="image" href="/images/hero-bg.jpg" />` is good. But `images.unoptimized: true` in `next.config.mjs:5` disables Next image optimization sitewide — every hero, every blog hero, every local-grid image is served at full source weight. This is the #1 LCP killer on this codebase. **Critical fix.** |
| **INP** | Medium-High | 8 always-on client components (ExitIntentPopup, SocialProofToast, StickyBottomBar, FloatingCTA, MobileCallBar, ScrollRevealCTA, CornerOfferPeek, TimedTopBar) plus LeadConnector chat widget, GTM/gtag conversion stack, and event-listener instrumentation all hydrate on every page. Heavy JS surface for an INP-sensitive page. |
| **CLS** | Medium | `images.unoptimized: true` strips Next's automatic width/height + aspect-ratio. CornerOfferPeek + TimedTopBar are dynamically injected above-the-fold UI — high reflow risk. |

**Recommendations:**
1. Flip `images.unoptimized` to `false` and adopt `next/image` with `priority` on hero. Single biggest CWV win available.
2. Lazy-load (`dynamic(() => import(...), { ssr: false })`) the 8 conversion popups and the LeadConnector widget so they don't ship in the main bundle.
3. Add `font-display: swap` is already implicit via `next/font` (`display: "swap"` set) — good.

Score: 55/100.

---

## 7. Mobile Optimization

- Next.js default `viewport: width=device-width, initial-scale=1` — present.
- Tailwind responsive utilities are pervasive in components (`lg:`, `md:` prefixes confirmed in `layout.tsx` body classes).
- `<MobileCallBar/>` + `pb-16 lg:pb-0` on body indicate mobile-first sticky CTA pattern — good touch-target practice (typical 56px+).
- Hero preload is a single image — no `srcset`/`sizes`, since `images.unoptimized: true`. Mobile downloads desktop-size hero. **Fixes once images are optimized.**

Score: 85/100.

---

## 8. URL Structure

Sample URLs from `sitemap.ts`:
- `/water-treatment/central-florida-hard-water`
- `/blog/water-softener-cost-central-florida-2026`
- `/services/reverse-osmosis`
- `/[localSlug]` → dynamic, e.g., `/water-softener-kissimmee-fl`

All lowercase, hyphenated, descriptive, max 4 levels deep, no parameters, no session IDs. Excellent.

Score: 90/100.

---

## 9. Additional Checks

- **Canonical chain:** No redirects defined in `netlify.toml` (no rewrites/redirects block). Need to add `www → apex` (or vice versa) 301 once DNS is live, plus `http → https` (auto on Netlify/Vercel).
- **Structured data:** Inline JSON-LD in `layout.tsx` is well-formed at a glance — `Organization` with `@id`, full address, geo, aggregateRating (5.0/200), hasCredential (4 entries — NSF/ANSI 58, NSF/ANSI 61, WQA Member, FL Licensed). `speakable` block present (h1 + `[data-bluf]`) — strong GEO signal. `sameAs` is one entry only (Google Maps); add real social profiles or omit until verified (currently aligns with the "never invent" rule, good).
- **Resource hints:** Preconnect to Google Fonts (gstatic + googleapis) and preload of hero-bg.jpg. Good.
- **Duplicate paths:** `/service-area` AND `/service-areas` both in sitemap. Pick one canonical; 301 the other. Likely the duplicate-content veto signal a Google audit would flag.
- **Placeholder content:** `BING_VERIFICATION_ID_HERE` (P1, fix or delete).
- **Phone-number drift:** `(407) 512-8342` (CLAUDE.md, layout.tsx) vs `(407) 773-2883` (llms.txt). Pick one. C01 veto risk for AI auditors.
- **Legacy byline:** "Carlos Rivera" on 31 legacy posts is flagged unverified in CLAUDE.md. T04/E&E&A&T veto risk if not reconciled.

Score: 80/100.

---

## Priority Actions

1. **[P0 / CRITICAL]** Resolve DNS for `pureaguaenterprise.com` (apex + www). Add A/AAAA + CNAME at registrar pointing to production host. Verify with `dig`. Without this, nothing else on this site reaches a crawler.
2. **[P0 / CRITICAL]** Remove Vercel SSO wall on production deployment (preview SSO is fine; production must be public).
3. **[P1 / HIGH]** Flip `images.unoptimized: false` in `next.config.mjs`; migrate hero + above-the-fold imagery to `next/image` with `priority`. Single largest CWV improvement.
4. **[P1 / HIGH]** Decide GEO posture on `GPTBot` and `ClaudeBot`. For citation goals, flip both from Disallow to Allow in `robots.txt`. Document the decision in `seo-strategy/04-geo.md`.
5. **[P1 / HIGH]** Fix phone-number mismatch (llms.txt vs layout.tsx). Pick canonical, propagate everywhere. Re-verify schema `telephone` field.
6. **[P1 / HIGH]** Replace `BING_VERIFICATION_ID_HERE` with real Bing Webmaster Tools verification code (or remove the meta tag).
7. **[P2 / MEDIUM]** Add HSTS (`Strict-Transport-Security: max-age=31536000; includeSubDomains; preload`) and a baseline CSP to `netlify.toml` (or `vercel.json` if Vercel is target host).
8. **[P2 / MEDIUM]** Lazy-load the 8 conversion popups + LeadConnector chat widget with `dynamic(... , { ssr: false })` to reduce main-thread JS and improve INP.
9. **[P2 / MEDIUM]** Consolidate `/service-area` vs `/service-areas` into a single canonical URL with a 301 on the duplicate.
10. **[P2 / MEDIUM]** Add the missing AI crawlers to robots.txt: `DuckAssistBot` (Allow), `Bytespider` (decision), `FacebookBot`, `ImagesiftBot`, `Omgilibot`, `Claude-Web` (explicit Allow).
11. **[P3 / LOW]** Switch `force-dynamic` to ISR (`revalidate = 3600`) on marketing pages to lower TTFB and origin load.
12. **[P3 / LOW]** Diversify `lastmod` dates in `sitemap.ts` — pages that haven't changed should reflect their actual last-edit date, not the 2026-05-14 batch date.
13. **[P3 / LOW]** Reconcile "Carlos Rivera" byline across 31 legacy posts. Either confirm and add an About-page bio, or migrate to the org-style team byline used in the new content.

---

## Methodology notes

- Production HTTP fetch attempted via `curl` and via WebFetch — both failed (NXDOMAIN at network layer, 401 at Vercel preview). All findings derived from static analysis of the source repo (`/Users/ezekiel/Desktop/SEOMAN/active-seo/pure-agua/`) which represents the code that will be served once deployment + DNS are completed.
- Re-run this audit with live HTTP fetches after DNS resolves to validate served headers, redirect chain, observed CWV (PageSpeed Insights/CrUX), and actual SSR output.
- The "Technical Score: 58/100" figure includes a -14 deduction applied to the weighted total (71.9 raw) to reflect the live-site reality that the canonical domain is unreachable. The code-as-written score is **72/100 (Fair-to-Good)**; the live-as-served score is **0/100 until DNS resolves.**

---

_SEOMAN geo-technical audit, 2026-05-14_
