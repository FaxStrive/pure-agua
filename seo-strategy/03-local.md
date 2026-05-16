# Local SEO and the City Grid

Last updated: 2026-05-14

## City list (20)

Kissimmee, Orlando, St. Cloud, Winter Park, Altamonte Springs, Lake Mary, Sanford, Oviedo, Apopka, Winter Garden, Ocoee, Clermont, Davenport, Haines City, Lakeland, Winter Haven, Deltona, DeLand, Leesburg, Mount Dora.

All within the 50-mile service radius from Kissimmee (HQ at 3705 Eagle Isle Circle, Kissimmee FL 34746).

## Services per city (4)

- `water-softener` → `/water-softener-in-{city}-fl`
- `whole-house-filtration` → `/whole-house-filtration-in-{city}-fl`
- `reverse-osmosis` → `/reverse-osmosis-in-{city}-fl`
- `well-water-treatment` → `/well-water-treatment-in-{city}-fl`

20 × 4 = 80 pages live.

## CCR enrichment status

This PR ships **note-only CCR data for all 20 cities**. Every city's `ccr.url` points to the utility's water-quality landing page; the structured-number fields (`chlorineRaa`, `tthmRaa`, `haa5Raa`, `fluoride`, `nitrate`, `lead90th`, `copper90th`, `sodium`) are intentionally left undefined. The page template renders a narrative fallback ("pull the latest CCR from the utility") when numbers are absent and a Water Quality at a Glance panel when they are present.

**Why note-only this PR:** Florida utilities post CCRs as PDFs at varying URLs. Verifying every number for 20 cities exceeds the scope of a one-PR push without risking fabrication. CCR enrichment is the Tier 2 follow-up PR.

## Tier 2 CCR follow-up plan

For each of the 20 cities:

1. Pull the most recent CCR PDF from the utility website.
2. Extract verbatim numbers using `pdftotext -layout`.
3. Populate `ccr.reportYear`, `ccr.dataYear`, `ccr.chlorineRaa`, `ccr.tthmRaa`, `ccr.haa5Raa`, `ccr.fluoride`, `ccr.nitrate`, `ccr.lead90th`, `ccr.copper90th`, `ccr.sodium`, and `ccr.note`.
4. Re-verify utility name and any PWSID against the FL DEP source-water portal.
5. Commit per-city updates with the source PDF URL in the commit message for auditability.

Priority order for Tier 2: Orlando (OUC), Kissimmee (Toho), Lakeland, Sanford, Apopka. These are the highest-traffic cities for organic acquisition.

## NAP

- Name: Pure Agua Enterprises
- Address: 3705 Eagle Isle Circle, Kissimmee, FL 34746
- Phone: (407) 512-8342

NAP is consistent across `layout.tsx` inline schema, `SchemaMarkup` component, footer, and contact page. Verified during this PR.

## GBP next steps

- Confirm Google Business Profile listing has the same NAP and the full 23-city `areaServed` block once enabled.
- Photos: replace the GBP gallery with proprietary install photography from the upcoming shoot.
- Categories: primary should be "Water filter supplier"; secondary "Water softening equipment supplier" and "Water treatment plant" if available.
