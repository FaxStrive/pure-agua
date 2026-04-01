# SEO Audit Report

**Site:** Pure Agua Enterprises
**URL:** https://pureaguaenterprise.com
**Date:** 2026-03-31
**Mode:** Live Crawl
**Pages Analyzed:** 20
**Overall Score:** 68/100 -- Average

---

## Score Summary

| Category | Score | Max | Rating |
|----------|-------|-----|--------|
| Technical Foundation | 18 | 21 | Good |
| On-Page SEO | 19 | 28 | Fair |
| Structured Data | 11 | 21 | Needs Work |
| Open Graph / Social | 9 | 12 | Fair |
| Performance Signals | 15 | 24 | Fair |
| LLM / GEO Optimization | 19 | 27 | Fair |
| **TOTAL** | **68** | **100** | **Average** |

---

## Executive Summary

- **[HIGH]** Add FAQPage schema to pages with question headings
- **[HIGH]** Add H1 to 3 page(s)
- **[HIGH]** Fix NAP mismatch — phone number in schema does not match phone visible on page (hurts local rankings)
- **[HIGH]** Fix title tag lengths — must be 50-60 characters (industry standard for SERP display)
- **[HIGH]** Fix meta description lengths — must be 120-160 characters (industry standard for SERP display)

---

## 1. Technical Foundation -- 18/21

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
| Canonical tags on all pages | 2 | 0 | FAIL | 3/20 pages missing canonical tag |
| Clean URL structure | 1 | 1 | PASS |  |
| Favicon | 1 | 1 | PASS |  |
| Custom 404 page | 1 | 1 | PASS |  |
| Analytics tracking installed | 1 | 1 | PASS | Found: GTM |
| Mobile content parity (no critical content hidden) | 1 | 1 | PASS |  |
| All pages within 3 clicks of homepage | 1 | 1 | PASS |  |

## 2. On-Page SEO -- 19/28

| Check | Points | Earned | Status | Notes |
|-------|--------|--------|--------|-------|
| Unique title tags, correct length | 3 | 2 | FAIL | 17 page(s) with missing/bad-length titles |
| Unique meta descriptions, correct length | 3 | 2 | FAIL | 11 page(s) with missing/bad-length meta desc |
| Single H1 per page | 2 | 1 | FAIL | 3 page(s) missing H1 |
| Proper heading hierarchy (H1>H2>H3) | 2 | 2 | PASS |  |
| Alt text on all images | 2 | 2 | PASS |  |
| Image dimensions (CLS prevention) | 2 | 2 | PASS |  |
| Images use next/image component | 2 | 2 | PASS |  |
| No duplicate content across pages | 1 | 0 | FAIL | 106 page pair(s) with >50% content overlap: /about <> /before-after (80%); /about <> /careers (80%) |
| Internal linking with descriptive anchors | 2 | 2 | PASS |  |
| No orphan pages (all pages internally linked) | 1 | 0 | FAIL | 15 page(s) with no internal links pointing to them: /before-after, /blog/[slug], /careers... |
| External links have rel="noopener" | 1 | 1 | PASS |  |
| Content length meets threshold | 1 | 0 | FAIL | Homepage: 268 words (need 400+); 5 thin service page(s) |
| Primary keyword in title + H1 | 2 | 1 | FAIL | 16/20 pages have matching keywords in title and H1 |
| No plain text email addresses exposed | 1 | 1 | PASS |  |
| Top keywords present in title + meta description | 2 | 1 | FAIL | 14/20 pages have keyword alignment (70%) |
| Business address visible on page | 1 | 0 | FAIL | Business address not found in visible page content (footer/header). Only in schema is not enough. |

## 3. Structured Data -- 11/21

| Check | Points | Earned | Status | Notes |
|-------|--------|--------|--------|-------|
| LocalBusiness or subtype schema | 3 | 2 | FAIL | Found: LocalBusiness (use specific subtype for +1pt) |
| NAP in schema | 1 | 1 | PASS |  |
| NAP consistency (schema vs page) | 1 | 0 | FAIL | Schema phone +1-000-000-0000 not found in page content phones: 1799836455, 1407773288, (407) 773-288... |
| WebSite schema on homepage | 1 | 1 | PASS |  |
| BreadcrumbList on interior pages | 2 | 2 | PASS |  |
| FAQPage schema | 3 | 1 | FAIL | 2 page(s) have questions but no FAQPage schema |
| Service schema | 2 | 2 | PASS |  |
| Article schema | 1 | 0 | FAIL | No Article schema (may not have blog) |
| dateModified/datePublished in schemas | 1 | 1 | PASS |  |
| Schema validates (no parse errors) | 1 | 1 | PASS |  |
| GeoCoordinates in LocalBusiness | 1 | 0 | FAIL | No geo coordinates in LocalBusiness schema. Add latitude/longitude via .seo-config.json. |
| hasCertification in schema | 1 | 0 | FAIL | No certifications in schema. Add certifications via .seo-config.json. |
| HowTo schema | 1 | 0 | FAIL | 3 page(s) have step content but no HowTo schema |
| AggregateRating in schema | 1 | 0 | FAIL | No AggregateRating in schema. Add reviewRating/reviewCount via .seo-config.json. |
| VideoObject schema | 1 | 0 | FAIL | No VideoObject schema. Add YouTube video embeds to pages for video rich results. |

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

## 5. Performance Signals -- 15/24

| Check | Points | Earned | Status | Notes |
|-------|--------|--------|--------|-------|
| LCP image preloaded | 3 | 3 | PASS |  |
| INP < 200ms | 3 | 1 | FAIL | Requires real user measurement (PageSpeed Insights) |
| CLS: images have width/height | 3 | 3 | PASS |  |
| Resource hints (preconnect/dns-prefetch) | 2 | 2 | PASS |  |
| Font loading optimized | 2 | 2 | PASS |  |
| No render-blocking JS in <head> | 2 | 2 | PASS |  |
| Bing sitemap submitted (Bing verification) | 2 | 0 | FAIL | No Bing site verification found (add msvalidate.01 meta tag or BingSiteAuth.xml) |
| Minimal inline styles | 1 | 0 | FAIL | 36 inline style attributes found across pages (move to CSS classes) |
| Click-to-call (phone numbers in tel: links) | 1 | 0 | FAIL | 2 phone number(s) not wrapped in tel: links |
| GA4 conversion event tracking | 2 | 2 | PASS | Events: conversion |
| Call tracking configured | 1 | 0 | FAIL | Phone numbers found but no call tracking (CallRail, CallTrackingMetrics, Marchex, WhatConverts). Can... |
| Form submission tracking | 1 | 0 | FAIL | 1 form(s) without analytics event on submit. Add gtag("event", "form_submit") or dataLayer.push in o... |
| Conversion funnel (CTA on all pages) | 1 | 0 | FAIL | Dead-end pages without CTA: /about, /before-after, /blog, /blog/[slug], /careers (+13 more) |

## 6. LLM / GEO Optimization -- 19/27

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
| Entity density (brand/org/product names) | 2 | 1 | FAIL | Avg 10 entities/page |
| Passage-level section length (134-250 words) | 1 | 0 | FAIL | Sections too thin: avg 118 words (need 134+). Expand content under each H2/H3. |
| BLUF: keyword in first 100 words after H1 | 1 | 0 | FAIL | Only 15% of pages have primary keyword in first 100 words after H1. Lead with a declarative answer. |
| Content freshness (files updated within 180 days) | 1 | 1 | PASS | Oldest page: 12 days |
| Multimodal content (text + images + video + schema + tables + lists) | 1 | 0 | FAIL | Pages average only 1.4 content types (need 3+: text, images, video, structured data, tables, lists) |

---

## Page-by-Page Summary

| Page | Score | Title (chars) | Meta Desc (chars) | H1 | Alt | Words | Issues |
|------|-------|--------------|-------------------|-------|-----|-------|--------|
| / | 21/25 | 79ch | 131ch | OK | OK | 268 | title 79ch |
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
2. **[On-Page]** Add H1 to 3 page(s)
3. **[Structured Data]** Fix NAP mismatch — phone number in schema does not match phone visible on page (hurts local rankings)
4. **[On-Page]** Fix title tag lengths — must be 50-60 characters (industry standard for SERP display)
5. **[On-Page]** Fix meta description lengths — must be 120-160 characters (industry standard for SERP display)
6. **[Performance]** Wrap all phone numbers in tel: links for click-to-call on mobile
7. **[On-Page]** Fix duplicate content — multiple pages have >50% content overlap, risking cannibalization
### MEDIUM

8. **[Performance]** Add Bing site verification (msvalidate.01 meta tag or BingSiteAuth.xml) and submit sitemap to Bing Webmaster Tools
9. **[On-Page]** Align title tags and meta descriptions with top page keywords for better ranking
10. **[On-Page]** Add business address to footer or contact section (visible text, not just schema)
11. **[On-Page]** Add internal links to orphan pages — these pages have no links pointing to them from other pages
12. **[OG/Social]** Add social profile links to footer (Missing: facebook, instagram, twitter, linkedin, youtube)
13. **[LLM/GEO]** Increase entity density: mention brand names, certifications, standards, and product names more frequently in content
14. **[LLM/GEO]** Optimize section lengths: each H2/H3 section should be 134-250 words for ideal LLM citation extraction
15. **[LLM/GEO]** Add BLUF (Bottom Line Up Front): include primary keyword in a declarative statement within first 100 words after H1
16. **[Structured Data]** Add GeoCoordinates to LocalBusiness schema via .seo-config.json (latitude/longitude)
17. **[Structured Data]** Add business certifications to schema via .seo-config.json
18. **[Structured Data]** Add AggregateRating to schema via .seo-config.json (reviewRating/reviewCount)
19. **[Performance]** Install call tracking (CallRail, CallTrackingMetrics) to measure phone call conversions and attribute calls to marketing channels
20. **[Performance]** Add analytics event firing on form submissions — forms exist but have no conversion tracking in onSubmit handlers
21. **[Performance]** Fix conversion funnel dead-ends: Dead-end pages without CTA: /about, /before-after, /blog, /blog/[slug], /careers (+13 more)
22. **[Performance]** 60-80% of calls go unanswered during peak hours. Consider adding: (1) after-hours answering service, (2) AI voice agent for 24/7 coverage, (3) callback request form, (4) SMS text-back automation.
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
| Overall | **D+** | 68/100 |
| On-Page SEO | C | 68% |
| Usability | C- | 72% |
| Performance | D | 63% |
| Social | C | 75% |

*Note: External audit tools may differ. This is an estimate based on our internal scoring.*

---

*Generated by Fax Strive SEO Bot v3.0*
*Run again after applying fixes to measure improvement*
