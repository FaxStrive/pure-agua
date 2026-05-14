# GEO and AI Citability

Last updated: 2026-05-14

## What shipped

- `speakable` cssSelector now points at `h1` and `[data-bluf]` on the homepage org schema. The same `data-bluf` attribute is wired into the lead paragraph of every pillar page and local-grid page.
- Pillar pages are structured around the 134–167-word passage-length sweet spot for AI citation: lead paragraph 60–80 words, each H2 section 200–350 words with internal coherence so any single section can be quoted standalone.
- Condition→action decision table on each pillar gives ChatGPT, Perplexity, and Google AIO a clean structured block to lift.
- "Call a professional if…" section on each pillar gives Gemini and Bing Copilot the kind of bullet decision-boundary content they preferentially cite.
- Article + FAQPage + BreadcrumbList schema with `@id` referencing the org gives every AI engine a clean entity graph to attach answers to.

## Known gaps

- **Brand mentions.** Pure Agua has limited presence on Reddit (`r/Orlando`, `r/Kissimmee`, `r/PlumbingRepair`) and no Wikipedia article. The 0.737 YouTube correlation cited in the GEO knowledge base argues for a small YouTube series of install-and-test videos.
- **sameAs.** This PR pruned the social URLs to one verified Google Maps URL. Re-adding Facebook, Instagram, YouTube, LinkedIn requires verifying each URL actually exists and represents the business. Track each verification with a screenshot in the commit message.
- **llms.txt.** Not present. Generate at `/llms.txt` with the org block, links to the three pillars, and the four service pages. Use `/geo llmstxt` to scaffold.

## Citability tests to run after merge

- Query each pillar page with `/geo citability <url>` to get a 0–100 score and rewrite suggestions.
- Run `/geo platforms <url>` on the homepage to score Google AIO, ChatGPT, Perplexity, Gemini, and Bing Copilot readiness individually.
- Run `/geo drift baseline pureaguaenterprise.com` after merge so we can measure the lift from this PR in the August 2026 monthly comparison.
