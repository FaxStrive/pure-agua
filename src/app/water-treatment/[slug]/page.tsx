import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { pillars, getPillar } from "@/lib/pillars";

export function generateStaticParams() {
  return pillars.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

const SITE = "https://pureaguaenterprise.com";
const PHONE_DISPLAY = "(407) 512-8342";
const PHONE_TEL = "+14075128342";
const DATE_MODIFIED = "2026-05-14";
const AUTHOR_BYLINE = "Pure Agua Enterprises Team";

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const pillar = getPillar(params.slug);
  if (!pillar) return { title: "Not Found" };

  return {
    title: pillar.metaTitle,
    description: pillar.metaDescription,
    alternates: { canonical: `${SITE}/water-treatment/${pillar.slug}` },
    openGraph: {
      title: pillar.metaTitle,
      description: pillar.metaDescription,
      type: "article",
      url: `${SITE}/water-treatment/${pillar.slug}`,
      images: [
        { url: pillar.heroImage, width: 1200, height: 630, alt: pillar.h1 },
      ],
    },
  };
}

export default function PillarPage({
  params,
}: {
  params: { slug: string };
}) {
  const pillar = getPillar(params.slug);
  if (!pillar) notFound();

  const url = `${SITE}/water-treatment/${pillar.slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline: pillar.h1,
    description: pillar.metaDescription,
    datePublished: DATE_MODIFIED,
    dateModified: DATE_MODIFIED,
    author: {
      "@type": "Organization",
      name: AUTHOR_BYLINE,
      url: SITE,
    },
    publisher: { "@id": `${SITE}/#organization` },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    image: `${SITE}${pillar.heroImage}`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      {
        "@type": "ListItem",
        position: 2,
        name: "Water Treatment",
        item: `${SITE}/water-treatment`,
      },
      { "@type": "ListItem", position: 3, name: pillar.title, item: url },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: pillar.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main>
        <section
          className="relative pt-36 pb-16 px-6 overflow-hidden"
          style={{
            background:
              "linear-gradient(145deg, #0c4a6e 0%, #0e7490 35%, #0891b2 75%, #06b6d4 100%)",
          }}
        >
          <div className="max-w-6xl mx-auto relative z-10">
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-white/60 text-sm mb-6"
            >
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>›</span>
              <Link href="/water-treatment" className="hover:text-white transition-colors">
                Water Treatment
              </Link>
              <span>›</span>
              <span className="text-white">{pillar.title}</span>
            </nav>

            <h1 className="font-bold text-white leading-[1.1] tracking-tight text-3xl sm:text-4xl md:text-5xl mb-6 max-w-4xl">
              {pillar.h1}
            </h1>

            <p
              data-bluf
              className="text-white/85 leading-relaxed text-base md:text-lg max-w-3xl mb-8"
            >
              {pillar.bluf}
            </p>

            <p className="text-white/60 text-sm">
              By {AUTHOR_BYLINE} &middot; Updated {DATE_MODIFIED}
            </p>

            <div className="flex flex-wrap gap-3 mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-cyan-700 font-bold hover:bg-white/90 transition-all"
              >
                Get a Free Water Test
              </Link>
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/10 transition-all"
              >
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </section>

        <article className="py-14 md:py-16 px-6">
          <div className="max-w-3xl mx-auto prose prose-lg prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4 prose-p:text-slate-700 prose-a:text-cyan-700">
            {/* Decision table */}
            <h2>Recommended fix by condition</h2>
            <div className="not-prose overflow-x-auto my-6">
              <table className="w-full text-left text-sm border border-slate-200 rounded-lg overflow-hidden">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="px-4 py-3 font-bold text-slate-900">If this is your situation</th>
                    <th className="px-4 py-3 font-bold text-slate-900">Recommended method</th>
                  </tr>
                </thead>
                <tbody>
                  {pillar.decision.map((row, i) => (
                    <tr key={i} className="border-t border-slate-200">
                      <td className="px-4 py-3 text-slate-700">{row.condition}</td>
                      <td className="px-4 py-3 text-slate-900 font-medium">{row.action}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Body sections */}
            {pillar.sections.map((s, i) => (
              <section key={i}>
                <h2>{s.h2}</h2>
                <div dangerouslySetInnerHTML={{ __html: `<p>${s.body}</p>` }} />
              </section>
            ))}

            {/* Call a professional if */}
            <h2>Call a professional if&hellip;</h2>
            <ul>
              {pillar.callPro.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
            <p>
              Any one of these signals is worth a free in-home water test. Pure
              Agua tests for hardness, iron, sulfur, pH, TDS, and chlorine or
              chloramine residual, explains what we found, and gives a written
              quote. No high-pressure sales. <Link href="/contact">Schedule a free water test</Link>{" "}
              or call <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>.
            </p>

            {/* FAQs */}
            <h2>Frequently asked questions</h2>
            <div className="not-prose space-y-4">
              {pillar.faqs.map((faq, i) => (
                <details
                  key={i}
                  className="group bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-cyan-400 hover:shadow-md transition-all"
                >
                  <summary className="cursor-pointer px-6 py-4 font-bold text-slate-900 hover:bg-slate-50 transition-colors">
                    {faq.q}
                  </summary>
                  <div className="px-6 pb-4 pt-2 text-slate-700 leading-relaxed border-t border-slate-200">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>

            {/* Final CTA */}
            <section className="not-prose mt-12 mb-16 rounded-2xl bg-gradient-to-br from-cyan-700 to-blue-800 p-8 text-white">
              <h2 className="font-bold text-2xl md:text-3xl mb-3 text-white">
                Ready to fix the water at your Central Florida home?
              </h2>
              <p className="text-white/90 mb-5">
                Free in-home water test. No high-pressure sales. A written
                quote with the system sized for your home.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-cyan-700 font-bold hover:bg-white/90 transition-all"
                >
                  Schedule a Free Water Test
                </Link>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/30 text-white font-semibold hover:bg-white/10 transition-all"
                >
                  {PHONE_DISPLAY}
                </a>
              </div>
            </section>
          </div>
        </article>
      </main>
    </>
  );
}
