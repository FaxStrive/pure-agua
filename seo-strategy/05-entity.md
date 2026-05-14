# Entity Buildout

Last updated: 2026-05-14

## Why entity work matters

Google Knowledge Graph and Wikidata are the two primary entity-resolution sources for AI engines deciding whether to surface a brand. A clean entity record at both increases the chance that ChatGPT, Perplexity, and Gemini name Pure Agua Enterprises specifically (rather than describing it generically) when asked about Central Florida water treatment.

## Status today

- **Google Knowledge Graph:** Not visible in branded SERPs as of 2026-05-14. The business has a Google Business Profile (referenced in `sameAs`) but no Knowledge Panel.
- **Wikidata:** No entity record located.
- **Wikipedia:** No article. Notability threshold for a Wikipedia article on a single-location water-treatment business is high; this is not the right starting place.

## 90-day plan

1. **Verify GBP.** Confirm the Google Business Profile is verified, categories are correct ("Water filter supplier" primary), service area covers the 23-city `areaServed` block, and the website link points to the canonical https URL.
2. **Wikidata entry.** Create a Wikidata entity for "Pure Agua Enterprises" with `instance of: business`, `country: United States`, `headquarters location: Kissimmee, Florida`, `inception: 2016`, `industry: water treatment`, `official website: https://pureaguaenterprise.com`. Cross-reference the entity from the website via `sameAs` once the Wikidata QID is assigned.
3. **GBP review velocity.** 200+ Google reviews at 5.0★ is the existing trust signal. Maintain a steady 4–8 new reviews per month via post-install follow-up.
4. **Trade-association profiles.** Verify or create Water Quality Association (WQA) member profile if claimed. Add direct URL to `sameAs` only after verification.
5. **Local citations.** BBB (if member), Angi, HomeAdvisor, Nextdoor business profile. Each adds an authoritative `sameAs` candidate.

## What to avoid

- Inventing Wikipedia citations or padding Wikidata with unsourced claims.
- Adding `sameAs` URLs that point at competitor-named or generic profiles.
- Claiming credentials (NSF/ANSI 58 certified installer, WQA member, etc.) that cannot be substantiated with a certification number.
