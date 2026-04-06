# SEO Audit Report

**Site:** Pure Agua Enterprises
**URL:** https://pureaguaenterprise.com
**Date:** 2026-04-06
**Mode:** Live Crawl
**Pages Analyzed:** 28
**Overall Score:** 74/100 -- Above Average

---

## Score Summary

| Category | Score | Max | Rating |
|----------|-------|-----|--------|
| Technical Foundation | 19 | 21 | Good |
| On-Page SEO | 27 | 38 | Fair |
| Structured Data | 14 | 23 | Fair |
| Open Graph / Social | 10 | 12 | Good |
| Performance Signals | 21 | 29 | Fair |
| LLM / GEO Optimization | 26 | 32 | Good |
| **TOTAL** | **74** | **100** | **Above Average** |

---

## Executive Summary

- **[HIGH]** Add FAQPage schema to pages with question headings
- **[HIGH]** Fix NAP mismatch — phone number in schema does not match phone visible on page (hurts local rankings)
- **[HIGH]** Fix title tag lengths — must be 50-60 characters (industry standard for SERP display)
- **[HIGH]** Fix meta description lengths — must be 120-160 characters (industry standard for SERP display)
- **[HIGH]** Wrap all phone numbers in tel: links for click-to-call on mobile

---

## 1. Technical Foundation -- 19/21

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
| Canonical tags on all pages | 2 | 1 | FAIL | 1/28 pages missing canonical tag |
| Clean URL structure | 1 | 1 | PASS |  |
| Favicon | 1 | 1 | PASS |  |
| Custom 404 page | 1 | 1 | PASS |  |
| Analytics tracking installed | 1 | 1 | PASS | Found: GTM |
| Mobile content parity (no critical content hidden) | 1 | 1 | PASS |  |
| All pages within 3 clicks of homepage | 1 | 1 | PASS |  |

## 2. On-Page SEO -- 27/38

| Check | Points | Earned | Status | Notes |
|-------|--------|--------|--------|-------|
| Unique title tags, correct length | 3 | 2 | FAIL | 27 page(s) with missing/bad-length titles |
| Unique meta descriptions, correct length | 3 | 2 | FAIL | 1 page(s) with missing/bad-length meta desc |
| Single H1 per page | 2 | 2 | PASS |  |
| Proper heading hierarchy (H1>H2>H3) | 2 | 2 | PASS |  |
| Alt text on all images | 2 | 2 | PASS |  |
| Image dimensions (CLS prevention) | 2 | 2 | PASS |  |
| Images use next/image component | 2 | 2 | PASS |  |
| No duplicate content across pages | 1 | 0 | FAIL | 15 page pair(s) with >50% content overlap: /reverse-osmosis <> /water-filtration (79%); /reverse-osm... |
| Internal linking with descriptive anchors | 2 | 2 | PASS |  |
| No orphan pages (all pages internally linked) | 1 | 0 | FAIL | 15 page(s) with no internal links pointing to them: /before-after, /blog/[slug], /careers... |
| External links have rel="noopener" | 1 | 1 | PASS |  |
| Content length meets threshold | 1 | 0 | FAIL | Homepage: 253 words (need 400+); 13 thin service page(s) |
| Primary keyword in title + H1 | 2 | 1 | FAIL | 26/28 pages have matching keywords in title and H1 |
| No plain text email addresses exposed | 1 | 0 | FAIL | 1 email(s) exposed in plain text: careers@pureaguafl.com |
| Top keywords present in title + meta description | 2 | 2 | PASS |  |
| Business address visible on page | 1 | 0 | FAIL | Business address not found in visible page content (footer/header). Only in schema is not enough. |
| E-E-A-T: License number visible | 2 | 2 | PASS |  |
| E-E-A-T: Years in business stated | 1 | 1 | PASS |  |
| Pages have sufficient internal links (min 2) | 1 | 0 | FAIL | 16 page(s) have fewer than 2 internal links — isolated pages receive less link equity: /about, /befo... |
| Service pages cross-link to related services | 1 | 1 | PASS | 12 service page(s) found |
| Blog posts link to relevant service pages | 1 | 0 | FAIL | Blog posts do not link to service pages — add contextual links from blog content to service pages to... |
| Breadcrumb navigation implemented | 1 | 1 | PASS | 1 page(s) have breadcrumb nav |
| No thin content pages (min 300 words) | 1 | 0 | FAIL | 24 page(s) have fewer than 300 words — thin content rarely ranks well: /, /about, /before-after... |
| Pages have heading structure (H2/H3) | 1 | 1 | PASS |  |
| Content-to-code ratio (text vs. HTML/JS) | 1 | 1 | PASS | 28 pages with ratio data |

## 3. Structured Data -- 14/23

| Check | Points | Earned | Status | Notes |
|-------|--------|--------|--------|-------|
| LocalBusiness or subtype schema | 3 | 3 | PASS | Found: HomeAndConstructionBusiness |
| NAP in schema | 1 | 1 | PASS |  |
| NAP consistency (schema vs page) | 1 | 0 | FAIL | Schema phone +1-000-000-0000 not found in page content phones: (407) 773-2883, 407-773-2883, 1407773... |
| WebSite schema on homepage | 1 | 1 | PASS |  |
| BreadcrumbList on interior pages | 2 | 2 | PASS |  |
| FAQPage schema | 3 | 1 | FAIL | 9 page(s) have questions but no FAQPage schema |
| Service schema | 2 | 2 | PASS |  |
| Article schema | 1 | 0 | FAIL | No Article schema (may not have blog) |
| dateModified/datePublished in schemas | 1 | 1 | PASS |  |
| Schema validates (no parse errors) | 1 | 1 | PASS |  |
| GeoCoordinates in LocalBusiness | 1 | 0 | FAIL | No geo coordinates in LocalBusiness schema. Add latitude/longitude via .seo-config.json. |
| hasCertification in schema | 1 | 0 | FAIL | No certifications in schema. Add certifications via .seo-config.json. |
| HowTo schema | 1 | 0 | FAIL | 9 page(s) have step content but no HowTo schema |
| AggregateRating in schema | 1 | 0 | FAIL | No AggregateRating in schema. Add reviewRating/reviewCount via .seo-config.json. |
| VideoObject schema | 1 | 0 | FAIL | No VideoObject schema. Add YouTube video embeds to pages for video rich results. |
| E-E-A-T: Team/author bios configured | 2 | 2 | PASS |  |

## 4. Open Graph / Social -- 10/12

| Check | Points | Earned | Status | Notes |
|-------|--------|--------|--------|-------|
| og:title on all pages | 2 | 2 | PASS |  |
| og:description on all pages | 2 | 2 | PASS |  |
| og:image on all pages | 2 | 2 | PASS |  |
| og:url on all pages | 1 | 1 | PASS |  |
| og:type set | 1 | 1 | PASS |  |
| Twitter/X card tags | 1 | 1 | PASS |  |
| og:image:alt | 1 | 1 | PASS |  |
| Social profile links on site | 2 | 0 | FAIL | Missing: facebook, instagram, twitter, linkedin, youtube |

## 5. Performance Signals -- 21/29

| Check | Points | Earned | Status | Notes |
|-------|--------|--------|--------|-------|
| LCP image preloaded | 3 | 3 | PASS |  |
| INP < 200ms | 3 | 1 | FAIL | Requires real user measurement (PageSpeed Insights) |
| CLS: images have width/height | 3 | 3 | PASS |  |
| Resource hints (preconnect/dns-prefetch) | 2 | 2 | PASS |  |
| Font loading optimized | 2 | 2 | PASS |  |
| No render-blocking JS in <head> | 2 | 2 | PASS |  |
| Bing sitemap submitted (Bing verification) | 2 | 2 | PASS |  |
| Minimal inline styles | 1 | 0 | FAIL | 36 inline style attributes found across pages (move to CSS classes) |
| Click-to-call (phone numbers in tel: links) | 1 | 0 | FAIL | 29 phone number(s) not wrapped in tel: links |
| GA4 conversion event tracking | 2 | 2 | PASS | Events: conversion, phone_click, cta_click, form_submission |
| Call tracking configured | 1 | 0 | FAIL | Phone numbers found but no call tracking (CallRail, CallTrackingMetrics, Marchex, WhatConverts). Can... |
| Form submission tracking | 1 | 0 | FAIL | 1 form(s) without analytics event on submit. Add gtag("event", "form_submit") or dataLayer.push in o... |
| Conversion funnel (CTA on all pages) | 1 | 0 | FAIL | Dead-end pages without CTA: /blog, /blog/[slug], /faq, /water-filtration, /water-softener (+1 more) |
| Image alt text quality (descriptive, not filename) | 1 | 1 | PASS |  |
| Images use modern formats (WebP/AVIF) | 1 | 0 | FAIL | 1 image(s) use legacy formats (JPG/PNG) — convert to WebP or AVIF for 25-50% smaller file sizes |
| Image filenames are descriptive (not IMG_1234) | 1 | 1 | PASS |  |
| Below-fold images use lazy loading | 1 | 1 | PASS |  |
| Image SEO overall (alt + format + filename + lazy) | 1 | 1 | PASS | 3 total images audited |

## 6. LLM / GEO Optimization -- 26/32

| Check | Points | Earned | Status | Notes |
|-------|--------|--------|--------|-------|
| llms.txt well-formed | 2 | 2 | PASS | 5 links |
| llms-full.txt extended context file | 1 | 1 | PASS |  |
| FAQ with query-matched headings | 3 | 3 | PASS | 9 page(s) with question headings |
| Citation-ready answer blocks | 2 | 2 | PASS |  |
| Statistics with citations | 2 | 2 | PASS |  |
| Named authors with credentials | 2 | 0 | FAIL | No named authors detected |
| Content freshness (dateModified) | 2 | 2 | PASS |  |
| Semantic HTML elements | 2 | 2 | PASS |  |
| Comparison tables | 1 | 0 | FAIL | No comparison tables found |
| Direct answer in first 100 words | 1 | 1 | PASS |  |
| AI crawler rules optimized | 2 | 2 | PASS |  |
| Entity density (brand/org/product names) | 2 | 2 | PASS | Avg 18 entities/page |
| Passage-level section length (134-250 words) | 1 | 0 | FAIL | Sections too thin: avg 50 words (need 134+). Expand content under each H2/H3. |
| BLUF: keyword in first 100 words after H1 | 1 | 1 | PASS | 28/28 pages have BLUF |
| Content freshness (files updated within 180 days) | 1 | 1 | PASS |  |
| Multimodal content (text + images + video + schema + tables + lists) | 1 | 0 | FAIL | Pages average only 1.8 content types (need 3+: text, images, video, structured data, tables, lists) |
| E-E-A-T: Business certifications listed | 2 | 2 | PASS |  |
| E-E-A-T: Transparent pricing data | 2 | 2 | PASS |  |
| E-E-A-T: Project photos documented | 1 | 1 | PASS |  |

---

## Page-by-Page Summary

| Page | Score | Title (chars) | Meta Desc (chars) | H1 | Alt | Words | Issues |
|------|-------|--------------|-------------------|-------|-----|-------|--------|
| / | 21/25 | 77ch | 160ch | OK | OK | 253 | title 77ch |
| /about | 20/25 | 76ch | 133ch | OK | - | 21 | title 76ch, thin |
| /before-after | 20/25 | 74ch | 132ch | OK | - | 15 | title 74ch, thin |
| /blog | 22/25 | 77ch | 137ch | OK | - | 1241 | title 77ch |
| /blog/[slug] | 20/25 | 56ch | 206ch | OK | - | 1239 | desc 206ch, no canonical |
| /careers | 20/25 | 75ch | 137ch | OK | - | 24 | title 75ch, thin |
| /contact | 20/25 | 75ch | 147ch | OK | - | 20 | title 75ch, thin |
| /faq | 20/25 | 76ch | 152ch | OK | - | 24 | title 76ch, thin |
| /financing | 20/25 | 75ch | 132ch | OK | - | 25 | title 75ch, thin |
| /gallery | 20/25 | 75ch | 136ch | OK | - | 24 | title 75ch, thin |
| /privacy | 20/25 | 74ch | 145ch | OK | - | 14 | title 74ch, thin |
| /resources | 20/25 | 74ch | 158ch | OK | - | 23 | title 74ch, thin |
| /reverse-osmosis | 21/25 | 75ch | 130ch | OK | - | 244 | title 75ch |
| /service-area | 20/25 | 74ch | 132ch | OK | - | 27 | title 74ch, thin |
| /service-areas | 20/25 | 77ch | 135ch | OK | - | 36 | title 77ch, thin |
| /services/reverse-osmosis | 20/25 | 74ch | 141ch | OK | - | 17 | title 74ch, thin |
| /services/water-softening | 20/25 | 76ch | 142ch | OK | - | 26 | title 76ch, thin |
| /services/well-water | 20/25 | 75ch | 143ch | OK | - | 28 | title 75ch, thin |
| /services/whole-home | 20/25 | 76ch | 140ch | OK | - | 25 | title 76ch, thin |
| /terms | 20/25 | 74ch | 146ch | OK | - | 8 | title 74ch, thin |
| /testimonials | 20/25 | 75ch | 154ch | OK | - | 27 | title 75ch, thin |
| /warranty | 20/25 | 74ch | 137ch | OK | - | 25 | title 74ch, thin |
| /water-filtration | 21/25 | 74ch | 139ch | OK | - | 249 | title 74ch |
| /water-softener | 21/25 | 74ch | 135ch | OK | - | 245 | title 74ch |
| /water-softener-in-florida | 21/25 | 75ch | 150ch | OK | - | 212 | title 75ch |
| /water-testing | 21/25 | 74ch | 133ch | OK | - | 240 | title 74ch |
| /water-treatment | 21/25 | 76ch | 137ch | OK | - | 245 | title 76ch |
| /well-water-treatment | 21/25 | 75ch | 135ch | OK | - | 246 | title 75ch |

**Page Score Stats:** avg 20/25, min 20/25, max 22/25, 0 page(s) below 18/25 threshold

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
2. **[Structured Data]** Fix NAP mismatch — phone number in schema does not match phone visible on page (hurts local rankings)
3. **[On-Page]** Fix title tag lengths — must be 50-60 characters (industry standard for SERP display)
4. **[On-Page]** Fix meta description lengths — must be 120-160 characters (industry standard for SERP display)
5. **[Performance]** Wrap all phone numbers in tel: links for click-to-call on mobile
6. **[On-Page]** Fix duplicate content — multiple pages have >50% content overlap, risking cannibalization
7. **[On-Page]** Expand thin content pages — pages with fewer than 300 words rarely rank for competitive terms. Add service details, process steps, FAQs, cost information, and local context.
### MEDIUM

8. **[On-Page]** Remove or obfuscate plain text email addresses to prevent spam scraping
9. **[On-Page]** Add business address to footer or contact section (visible text, not just schema)
10. **[On-Page]** Add internal links to orphan pages — these pages have no links pointing to them from other pages
11. **[OG/Social]** Add social profile links to footer (Missing: facebook, instagram, twitter, linkedin, youtube)
12. **[LLM/GEO]** Optimize section lengths: each H2/H3 section should be 134-250 words for ideal LLM citation extraction
13. **[Structured Data]** Add GeoCoordinates to LocalBusiness schema via .seo-config.json (latitude/longitude)
14. **[Structured Data]** Add business certifications to schema via .seo-config.json
15. **[Structured Data]** Add AggregateRating to schema via .seo-config.json (reviewRating/reviewCount)
16. **[Performance]** Install call tracking (CallRail, CallTrackingMetrics) to measure phone call conversions and attribute calls to marketing channels
17. **[Performance]** Add analytics event firing on form submissions — forms exist but have no conversion tracking in onSubmit handlers
18. **[Performance]** Fix conversion funnel dead-ends: Dead-end pages without CTA: /blog, /blog/[slug], /faq, /water-filtration, /water-softener (+1 more)
19. **[Performance]** 60-80% of calls go unanswered during peak hours. Consider adding: (1) after-hours answering service, (2) AI voice agent for 24/7 coverage, (3) callback request form, (4) SMS text-back automation.
20. **[Performance]** Convert images from JPG/PNG to WebP or AVIF format — modern formats are 25-50% smaller with same visual quality, improving page speed scores
21. **[On-Page]** Add internal links to isolated pages — pages with fewer than 2 internal links receive less link equity and are harder for crawlers to discover and prioritize
22. **[On-Page]** Add links from blog posts to relevant service pages — topical cluster architecture channels blog traffic to conversion pages and signals content authority to Google
### LOW

23. **[Performance]** Move inline styles to CSS classes or Tailwind utilities
24. **[LLM/GEO]** Add more content types per page: include tables, lists, images, video embeds, and structured data for multimodal richness
25. **[LLM/GEO]** Add comparison tables to service pages
26. **[Structured Data]** Add HowTo schema to pages with step-by-step content (process, how-it-works)
27. **[Structured Data]** Add VideoObject schema to pages with YouTube embeds for video rich results
28. **[LLM/GEO]** Add named authors with credentials
---

## External Audit Estimate (SEOptimer-style)

| Category | Est. Grade | Our Score |
|----------|-----------|----------|
| Overall | **C** | 74/100 |
| On-Page SEO | C+ | 71% |
| Usability | C+ | 79% |
| Performance | C- | 72% |
| Social | B | 83% |

*Note: External audit tools may differ. This is an estimate based on our internal scoring.*

---

*Generated by Fax Strive SEO Bot v3.0*
*Run again after applying fixes to measure improvement*
