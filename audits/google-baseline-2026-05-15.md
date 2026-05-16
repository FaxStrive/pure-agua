# Google PSI Baseline, pure-agua

Mobile strategy. Field data from CrUX when available, otherwise Lighthouse lab data.
Thresholds: LCP <=2.5s, INP <=200ms, CLS <=0.10.

## https://pure-agua.vercel.app/
- CrUX field data: none
- LCP: 9.47s (lab), Fail
- INP: 40ms (lab(TBT proxy)), Pass
- CLS: 0.041 (lab), Pass
- FCP (lab): 5.97s; TTFB (lab): 8ms
- Lighthouse Perf/SEO/A11y/BP: 58/100/86/96
- Top opportunities:
  - Reduce unused CSS

## Summary
- Pages tested: 1
- CWV pass count (all 3 metrics): 0/1
- CrUX field data available on any page: No (lab data only)
- Biggest cross-page fix opportunities:
  - Reduce unused CSS (1/1 pages)

_SEOMAN PSI baseline, 2026-05-15_