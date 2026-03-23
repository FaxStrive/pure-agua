# SEO Audit Report

**Site:** Pure Agua Enterprises
**URL:** https://pureaguaenterprise.com
**Date:** 2026-03-23
**Mode:** Live Crawl
**Pages Analyzed:** 20
**Overall Score:** 74/100 -- Above Average

---

## Score Summary

| Category | Score | Max | Rating |
|----------|-------|-----|--------|
| Technical Foundation | 16 | 19 | Good |
| On-Page SEO | 14 | 25 | Needs Work |
| Structured Data | 12 | 16 | Fair |
| Open Graph / Social | 9 | 12 | Fair |
| Performance Signals | 13 | 18 | Fair |
| LLM / GEO Optimization | 17 | 20 | Good |
| **TOTAL** | **74** | **100** | **Above Average** |

---

## Executive Summary

- **[HIGH]** Add FAQPage schema to pages with question headings
- **[HIGH]** Fix 1 duplicate title(s)
- **[HIGH]** Add H1 to 3 page(s)
- **[HIGH]** Fix NAP mismatch — phone number in schema does not match phone visible on page (hurts local rankings)
- **[HIGH]** Fix title tag lengths — must be 50-60 characters (industry standard for SERP display)

---

## 1. Technical Foundation -- 16/19

| Check | Points | Earned | Status | Notes |
|-------|--------|--------|--------|-------|
| HTTPS | 2 | 2 | PASS |  |
| Viewport meta tag | 1 | 1 | PASS |  |
| HTML lang attribute | 1 | 1 | PASS |  |
| Charset declaration | 1 | 1 | PASS |  |
| robots.txt valid | 2 | 2 | PASS |  |
| XML sitemap exists | 2 | 2 | PASS | Dynamic sitemap.ts |
| Sitemap in robots.txt | 1 | 1 | PASS |  |
| No broken internal links | 2 | 2 | PASS |  |
| Canonical tags on all pages | 2 | 0 | FAIL | 4/20 pages missing canonical tag |
| Clean URL structure | 1 | 1 | PASS |  |
| Favicon | 1 | 1 | PASS |  |
| Custom 404 page | 1 | 1 | PASS |  |
| Analytics tracking installed | 1 | 1 | PASS | Found: GTM |

## 2. On-Page SEO -- 14/25

| Check | Points | Earned | Status | Notes |
|-------|--------|--------|--------|-------|
| Unique title tags, correct length | 3 | 1 | FAIL | 16 page(s) with missing/bad-length titles; 1 duplicate title(s) |
| Unique meta descriptions, correct length | 3 | 1 | FAIL | 12 page(s) with missing/bad-length meta desc; 1 duplicate meta desc(s) |
| Single H1 per page | 2 | 1 | FAIL | 3 page(s) missing H1 |
| Proper heading hierarchy (H1>H2>H3) | 2 | 1 | FAIL | 1 page(s) have H3 without H2 |
| Alt text on all images | 2 | 2 | PASS |  |
| Image dimensions (CLS prevention) | 2 | 2 | PASS |  |
| Internal linking with descriptive anchors | 2 | 2 | PASS |  |
| No orphan pages (all pages internally linked) | 1 | 0 | FAIL | 15 page(s) with no internal links pointing to them: /before-after, /blog/[slug], /careers... |
| External links have rel="noopener" | 1 | 1 | PASS |  |
| Content length meets threshold | 1 | 0 | FAIL | Homepage: 195 words (need 400+); 5 thin service page(s) |
| Primary keyword in title + H1 | 2 | 1 | FAIL | 16/20 pages have matching keywords in title and H1 |
| No plain text email addresses exposed | 1 | 1 | PASS |  |
| Top keywords present in title + meta description | 2 | 1 | FAIL | 14/20 pages have keyword alignment (70%) |
| Business address visible on page | 1 | 0 | FAIL | Business address not found in visible page content (footer/header). Only in schema is not enough. |

## 3. Structured Data -- 12/16

| Check | Points | Earned | Status | Notes |
|-------|--------|--------|--------|-------|
| LocalBusiness or subtype schema | 3 | 3 | PASS | Found: HomeAndConstructionBusiness |
| NAP in schema | 1 | 1 | PASS |  |
| NAP consistency (schema vs page) | 1 | 0 | FAIL | Schema phone +1-000-000-0000 not found in page content phones: 1407773288, (407) 773-2883 |
| WebSite schema on homepage | 1 | 1 | PASS |  |
| BreadcrumbList on interior pages | 2 | 2 | PASS |  |
| FAQPage schema | 3 | 1 | FAIL | 2 page(s) have questions but no FAQPage schema |
| Service schema | 2 | 2 | PASS |  |
| Article schema | 1 | 0 | FAIL | No Article schema (may not have blog) |
| dateModified/datePublished in schemas | 1 | 1 | PASS |  |
| Schema validates (no parse errors) | 1 | 1 | PASS |  |

## 4. Open Graph / Social -- 9/12

| Check | Points | Earned | Status | Notes |
|-------|--------|--------|--------|-------|
| og:title on all pages | 2 | 2 | PASS |  |
| og:description on all pages | 2 | 2 | PASS |  |
| og:image on all pages | 2 | 2 | PASS |  |
| og:url on all pages | 1 | 1 | PASS |  |
| og:type set | 1 | 1 | PASS |  |
| Twitter/X card tags | 1 | 1 | PASS |  |
| og:image:alt | 1 | 0 | FAIL | og:image:alt missing |
| Social profile links on site | 2 | 0 | FAIL | Missing: facebook, instagram, twitter, linkedin, youtube |

## 5. Performance Signals -- 13/18

| Check | Points | Earned | Status | Notes |
|-------|--------|--------|--------|-------|
| LCP image preloaded | 3 | 3 | PASS |  |
| INP < 200ms | 3 | 1 | FAIL | Requires real user measurement (PageSpeed Insights) |
| CLS: images have width/height | 3 | 3 | PASS |  |
| Resource hints (preconnect/dns-prefetch) | 2 | 2 | PASS |  |
| Font loading optimized | 2 | 2 | PASS |  |
| No render-blocking JS in <head> | 2 | 2 | PASS |  |
| Bing sitemap submitted (Bing verification) | 2 | 0 | FAIL | No Bing site verification found (add msvalidate.01 meta tag or BingSiteAuth.xml) |
| Minimal inline styles | 1 | 0 | FAIL | 31 inline style attributes found across pages (move to CSS classes) |

## 6. LLM / GEO Optimization -- 17/20

| Check | Points | Earned | Status | Notes |
|-------|--------|--------|--------|-------|
| llms.txt well-formed | 2 | 2 | PASS | 5 links |
| llms-full.txt extended context file | 1 | 1 | PASS |  |
| FAQ with query-matched headings | 3 | 3 | PASS | 2 page(s) with question headings |
| Citation-ready answer blocks | 2 | 2 | PASS |  |
| Statistics with citations | 2 | 2 | PASS |  |
| Named authors with credentials | 2 | 0 | FAIL | No named authors detected |
| Content freshness (dateModified) | 2 | 2 | PASS |  |
| Semantic HTML elements | 2 | 2 | PASS |  |
| Comparison tables | 1 | 0 | FAIL | No comparison tables found |
| Direct answer in first 100 words | 1 | 1 | PASS |  |
| AI crawler rules optimized | 2 | 2 | PASS |  |

---

## Page-by-Page Summary

| Page | Score | Title (chars) | Meta Desc (chars) | H1 | Alt | Words | Issues |
|------|-------|--------------|-------------------|-------|-----|-------|--------|
| / | 19/25 | 56ch | 206ch | OK | OK | 195 | desc 206ch, no canonical |
| /about | 20/25 | 56ch | 166ch | OK | - | 20 | desc 166ch, thin |
| /before-after | 17/25 | 70ch | 174ch | OK | - | 14 | title 70ch, desc 174ch, thin |
| /blog | 22/25 | 42ch | 137ch | OK | - | 1214 | title 42ch |
| /blog/[slug] | 17/25 | 56ch | 206ch | NONE | - | 1212 | desc 206ch, no H1, no canonical |
| /careers | 23/25 | 55ch | 137ch | OK | - | 22 | thin |
| /contact | 20/25 | 76ch | 132ch | OK | - | 18 | title 76ch, thin |
| /faq | 20/25 | 68ch | 152ch | OK | - | 23 | title 68ch, thin |
| /financing | 17/25 | 65ch | 167ch | OK | - | 22 | title 65ch, desc 167ch, thin |
| /gallery | 17/25 | 68ch | 179ch | OK | - | 27 | title 68ch, desc 179ch, thin |
| /privacy | 15/25 | 62ch | 145ch | NONE | - | 5 | title 62ch, no H1, no canonical, thin |
| /resources | 20/25 | 71ch | 158ch | OK | - | 22 | title 71ch, thin |
| /service-area | 17/25 | 78ch | 176ch | OK | - | 27 | title 78ch, desc 176ch, thin |
| /services/reverse-osmosis | 17/25 | 71ch | 168ch | OK | - | 14 | title 71ch, desc 168ch, thin |
| /services/water-softening | 17/25 | 71ch | 171ch | OK | - | 29 | title 71ch, desc 171ch, thin |
| /services/well-water | 17/25 | 68ch | 176ch | OK | - | 24 | title 68ch, desc 176ch, thin |
| /services/whole-home | 17/25 | 75ch | 178ch | OK | - | 23 | title 75ch, desc 178ch, thin |
| /terms | 15/25 | 64ch | 146ch | NONE | - | 5 | title 64ch, no H1, no canonical, thin |
| /testimonials | 20/25 | 64ch | 154ch | OK | - | 24 | title 64ch, thin |
| /warranty | 17/25 | 65ch | 178ch | OK | - | 28 | title 65ch, desc 178ch, thin |

**Page Score Stats:** avg 18/25, min 15/25, max 23/25, 12 page(s) below 18/25 threshold

---

## Content Gaps

**Found:** Services overview page, About page, Contact page, FAQ page, Reviews / Testimonials, Pricing / Financing, Service area pages, Blog / Resources, Privacy policy, Terms of service

**Missing:**
- Certifications page
- Process / How it works
- Individual city pages

---

## Priority Fix List

### HIGH

1. **[Structured Data]** Add FAQPage schema to pages with question headings
2. **[On-Page]** Fix 1 duplicate title(s)
3. **[On-Page]** Add H1 to 3 page(s)
4. **[Structured Data]** Fix NAP mismatch — phone number in schema does not match phone visible on page (hurts local rankings)
5. **[On-Page]** Fix title tag lengths — must be 50-60 characters (industry standard for SERP display)
6. **[On-Page]** Fix meta description lengths — must be 120-160 characters (industry standard for SERP display)
### MEDIUM

7. **[Performance]** Add Bing site verification (msvalidate.01 meta tag or BingSiteAuth.xml) and submit sitemap to Bing Webmaster Tools
8. **[On-Page]** Align title tags and meta descriptions with top page keywords for better ranking
9. **[On-Page]** Add business address to footer or contact section (visible text, not just schema)
10. **[On-Page]** Add internal links to orphan pages — these pages have no links pointing to them from other pages
11. **[OG/Social]** Add social profile links to footer (Missing: facebook, instagram, twitter, linkedin, youtube)
### LOW

12. **[Performance]** Move inline styles to CSS classes or Tailwind utilities
13. **[LLM/GEO]** Add comparison tables to service pages
14. **[LLM/GEO]** Add named authors with credentials
---

## External Audit Estimate (SEOptimer-style)

| Category | Est. Grade | Our Score |
|----------|-----------|----------|
| Overall | **C** | 74/100 |
| On-Page SEO | D | 56% |
| Usability | C+ | 77% |
| Performance | C- | 72% |
| Social | C | 75% |

*Note: External audit tools may differ. This is an estimate based on our internal scoring.*

---

*Generated by Fax Strive SEO Bot v3.0*
*Run again after applying fixes to measure improvement*
