# Technical SEO

Last updated: 2026-05-14

## What shipped

- Org schema unified under `@id: https://pureaguaenterprise.com/#organization`. Mirror block in `src/app/layout.tsx` (server-rendered, AI-crawler-safe) and the client `SchemaMarkup` component in `src/components/seo/schema-markup.tsx`. Both now use `["HomeAndConstructionBusiness","Plumber"]` and carry a `speakable` block targeting `h1` and `[data-bluf]`.
- `hasCredential` retained (NSF/ANSI 58, NSF/ANSI 61, WQA member, FL licensed). Verify with the live business before claiming the same in marketing copy.
- `sameAs` reduced to the verified Google Maps URL only. Social URLs that could not be verified during the audit were removed; re-add each one when verified by following the actual link.
- `areaServed` expanded from 12 to 23 Central Florida cities to match the local-grid coverage.
- Service schema on local-grid pages references the org via `provider: { "@id": "...#organization" }` instead of inlining a partial duplicate.
- `BreadcrumbList` schema rendered on every local and pillar page.

## Known follow-ups

- The existing layout has `export const dynamic = "force-dynamic";` on the root layout, which forces every route to render on demand. Consider moving to static rendering for the local-grid and pillar pages now that they have `generateStaticParams` + `dynamicParams = false`.
- The `[localSlug]` root-level dynamic segment relies on `dynamicParams = false` + `generateStaticParams` to prevent it from shadowing 404s on unintended slugs. Verified at build time that the 80 paths are static. If new top-level static routes are added later, they win automatically.
- Some legacy `HowTo` schemas remain in `schema-markup.tsx`. Google deprecated HowTo rich results in September 2023; the schema is harmless but consider pruning at the next refactor.
- `FAQPage` schema is published on multiple non-government pages. Google's August 2023 restriction limits FAQ rich results to government and healthcare sites for SERP display, but the schema itself remains valuable for AI engines and is fine to keep.

## Core Web Vitals notes

- Hero images on new pillar pages reference `/images/service-hero/*.jpg`. Placeholders ship at 1600×900 JPEG; replace with real licensed photographs and consider serving WebP via the Next.js image loader (currently `unoptimized: true`).
- `force-dynamic` in the root layout will hurt LCP on pages that have no business being dynamic; address in the next technical pass.
