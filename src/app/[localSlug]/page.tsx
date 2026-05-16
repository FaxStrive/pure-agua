import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  cities,
  services,
  localPages,
  getLocalPage,
  type LocalCity,
  type LocalService,
} from "@/lib/local-services";
import ImageCredit from "@/components/ImageCredit";

export function generateStaticParams() {
  return localPages.map((p) => ({ localSlug: p.slug }));
}

export const dynamicParams = false;

const SITE = "https://pureaguaenterprise.com";
const PHONE_DISPLAY = "(407) 512-8342";
const PHONE_TEL = "+14075128342";

export function generateMetadata({
  params,
}: {
  params: { localSlug: string };
}): Metadata {
  const page = getLocalPage(params.localSlug);
  if (!page) return { title: "Not Found" };

  const title = `${page.service.name} in ${page.city.name}, FL`;
  const description = `Professional ${page.service.shortName} for ${page.city.name}, Florida homes. Free in-home water test, transparent pricing, and a system sized to your actual water. Schedule with Pure Agua Enterprises.`;

  return {
    title,
    description,
    alternates: { canonical: `${SITE}/${page.slug}` },
    openGraph: {
      title: `${title} | Pure Agua Enterprises`,
      description,
      type: "article",
      url: `${SITE}/${page.slug}`,
      images: [{ url: page.service.heroImage, width: 1200, height: 630, alt: title }],
    },
  };
}

function buildFaqs(
  city: LocalCity,
  service: LocalService
): { q: string; a: string }[] {
  const cityName = city.name;

  if (service.slug === "water-softener") {
    return [
      {
        q: `Do I need a water softener in ${cityName}?`,
        a: `Most ${cityName} homes draw on Floridan Aquifer water, which the USGS classifies as very hard. If you see white scale on faucet aerators within a year, struggle to lather soap, or replace water heaters earlier than rated, a softener typically pays back through appliance lifespan, reduced detergent use, and lower energy cost on the water heater.`,
      },
      {
        q: `What size softener fits a typical ${cityName} home?`,
        a: `Most four-person ${cityName} households land in the 32,000 to 48,000 grain range. We size from a real water test (hardness in grains per gallon) plus your daily use, not a rule of thumb. Bigger is not always better, an oversized resin bed wastes salt and water and can channel.`,
      },
      {
        q: "Will softened water be safe to drink?",
        a: "Yes. A softener exchanges calcium and magnesium for a small amount of sodium. For households on a low-sodium diet, we usually pair the softener with an under-sink reverse osmosis system that removes the added sodium at the kitchen tap.",
      },
      {
        q: "How long does the install take?",
        a: `A typical drop-in softener install in ${cityName} runs three to five hours. We shut off water, plumb in the bypass and drain with code-compliant air gap, set the brine tank, program the head, and walk you through operation before we leave.`,
      },
    ];
  }

  if (service.slug === "whole-house-filtration") {
    return [
      {
        q: `What does a whole-house filter remove from ${cityName} city water?`,
        a: `For ${cityName} homes on municipal supply, a properly built whole-house carbon system targets chlorine or chloramine residual, taste and odor, sediment, and trace disinfection by-products. It does not remove dissolved minerals (that is the softener's job) and it does not remove dissolved solids to drinking-water quality (that is reverse osmosis).`,
      },
      {
        q: "How often do filters need changing?",
        a: `Sediment cartridges typically run six to twelve months in Central Florida. Catalytic carbon media in a backwashing tank commonly lasts five to seven years on chlorinated or chloraminated municipal supply. We document a replacement schedule on your invoice and reach out before the carbon bed is exhausted.`,
      },
      {
        q: `Do I need a whole-house filter if I already have city water in ${cityName}?`,
        a: "City water meets EPA primary standards, but disinfection by-products and chlorine taste are aesthetic and trace-exposure concerns the EPA does not regulate at the same threshold. A whole-house filter is about water you want to drink, shower in, and cook with, not water that is dangerous.",
      },
    ];
  }

  if (service.slug === "reverse-osmosis") {
    return [
      {
        q: `Why install reverse osmosis in ${cityName}?`,
        a: `Reverse osmosis is the only point-of-use technology that consistently removes dissolved solids, lead, arsenic, fluoride, nitrates, chloramines, and PFAS to bottled-water quality. For ${cityName} homes, that means crisp drinking water and clear ice from the same line, without buying plastic jugs.`,
      },
      {
        q: "How much water does an RO system waste?",
        a: "Older RO systems wasted four gallons to make one. Modern systems we install run closer to a one-to-one recovery thanks to permeate-pump or tankless designs. Over a year of typical kitchen use, the waste is comparable to one or two extra dishwasher cycles.",
      },
      {
        q: "Will an RO system run my refrigerator water and ice?",
        a: "In most cases, yes. We tee off the RO storage tank to feed the fridge ice maker and water dispenser when the run is short enough to maintain pressure. On longer runs we add a permeate pump.",
      },
      {
        q: "How often do filters need changing?",
        a: "Sediment and carbon pre-filters change every six to twelve months. The RO membrane itself typically lasts two to five years on Central Florida feed water, longer when a softener is installed upstream of the RO unit.",
      },
    ];
  }

  // well-water-treatment
  return [
    {
      q: `What are the most common well-water problems near ${cityName}?`,
      a: `Wells in rural ${city.county} and the rest of Central Florida commonly carry iron (orange staining), manganese (black staining), hydrogen sulfide (rotten-egg smell), low pH, and sediment. Some wells also need bacterial disinfection. A real test before sizing keeps you from buying a generic stack that will not fix your water.`,
    },
    {
      q: "How do you get rid of the rotten-egg smell?",
      a: "Hydrogen sulfide gas is most often removed with air-injection oxidation followed by a catalytic media bed. No chemical feed, no compressor, and no scheduled chemistry to mix. The system backwashes itself and refreshes the air pocket on a timed cycle.",
    },
    {
      q: "Can a softener handle iron from my well?",
      a: "Softeners can hold small amounts of clear iron, but they are the wrong tool when iron exceeds about 3 ppm or when hydrogen sulfide is present. The resin fouls quickly and the brine never fully removes the iron. We size air-injection iron and softener as separate stages when both are present.",
    },
    {
      q: "How often should I retest my well water?",
      a: "The Florida Department of Health recommends annual testing of private wells for bacteria, nitrates, and pH at minimum, with broader panels (iron, sulfur, hardness, arsenic) on a longer interval or after any change in taste, color, or odor.",
    },
  ];
}

export default function LocalServicePage({
  params,
}: {
  params: { localSlug: string };
}) {
  const page = getLocalPage(params.localSlug);
  if (!page) notFound();

  const { city, service } = page;
  const url = `${SITE}/${page.slug}`;
  const title = `${service.name} in ${city.name}, FL`;
  const faqs = buildFaqs(city, service);

  const siblingCity = cities.find((c) => c.slug !== city.slug)!;
  const siblingService = services.find((s) => s.slug !== service.slug)!;
  const siblingCityPage = `/${service.slug}-in-${siblingCity.slug}`;
  const siblingServicePage = `/${siblingService.slug}-in-${city.slug}`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      {
        "@type": "ListItem",
        position: 2,
        name: service.name,
        item: `${SITE}${service.relatedServicePage}`,
      },
      { "@type": "ListItem", position: 3, name: title, item: url },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: title,
    description: service.description,
    serviceType: service.name,
    provider: { "@id": `${SITE}/#organization` },
    areaServed: {
      "@type": "City",
      name: `${city.name}, FL`,
      address: {
        "@type": "PostalAddress",
        addressLocality: city.name,
        addressRegion: "FL",
        addressCountry: "US",
      },
    },
    offers: {
      "@type": "Offer",
      url: `${SITE}${service.relatedServicePage}`,
      availability: "https://schema.org/InStock",
    },
    url,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main>
        {/* Hero */}
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
              <Link
                href={service.relatedServicePage}
                className="hover:text-white transition-colors"
              >
                {service.name}
              </Link>
              <span>›</span>
              <span className="text-white">{city.name}, FL</span>
            </nav>

            <h1 className="font-bold text-white leading-[1.1] tracking-tight text-3xl sm:text-4xl md:text-5xl mb-6 max-w-4xl">
              {title}
            </h1>

            <p
              data-bluf
              className="text-white/85 leading-relaxed text-base md:text-lg max-w-3xl mb-8"
            >
              Pure Agua Enterprises installs {service.shortName} for homes
              across {city.name}, Florida and the surrounding {city.county}.
              Every job starts with a free in-home water test and a system
              sized to your actual water, not a generic spec sheet. We are a
              family-owned Central Florida company serving homeowners since
              2016, with a 5.0-star rating across more than 200 verified Google
              reviews.
            </p>

            <div className="flex flex-wrap gap-3">
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

        {/* Body */}
        <section className="py-14 md:py-16 px-6">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <h2 className="font-bold text-3xl md:text-4xl text-slate-900 mt-2 mb-4">
              Why {city.name} Homes Need {service.name}
            </h2>
            <p>
              {city.name} ({city.population}, in {city.county}) is served by{" "}
              <a href={city.utilitySource} target="_blank" rel="noopener noreferrer">
                {city.utility}
              </a>
              . Drinking water comes from {city.waterSource}. Hardness at the
              tap is {city.hardness}.
            </p>

            {city.ccr && (city.ccr.chlorineRaa !== undefined ||
              city.ccr.tthmRaa !== undefined ||
              city.ccr.haa5Raa !== undefined ||
              city.ccr.fluoride !== undefined ||
              city.ccr.nitrate !== undefined ||
              city.ccr.lead90th !== undefined ||
              city.ccr.copper90th !== undefined ||
              city.ccr.sodium !== undefined) && (
              <aside className="not-prose my-6 rounded-2xl border-2 border-cyan-200 bg-cyan-50/60 p-5">
                <h3 className="font-bold text-base text-slate-900 m-0 mb-3">
                  {city.name} Water Quality at a Glance
                  {city.ccr.reportYear && city.ccr.dataYear && (
                    <span className="block text-xs font-medium text-slate-600 mt-1">
                      From the {city.ccr.reportYear} Consumer Confidence Report covering calendar year {city.ccr.dataYear}
                    </span>
                  )}
                </h3>
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
                  {city.ccr.chlorineRaa !== undefined && (
                    <div className="flex justify-between border-b border-cyan-100 py-1.5">
                      <dt className="text-slate-700">Chlorine residual (RAA)</dt>
                      <dd className="text-slate-900 font-semibold">
                        {city.ccr.chlorineRaa} mg/L
                      </dd>
                    </div>
                  )}
                  {city.ccr.tthmRaa !== undefined && (
                    <div className="flex justify-between border-b border-cyan-100 py-1.5">
                      <dt className="text-slate-700">TTHM (RAA)</dt>
                      <dd className="text-slate-900 font-semibold">
                        {city.ccr.tthmRaa} ppb
                      </dd>
                    </div>
                  )}
                  {city.ccr.haa5Raa !== undefined && (
                    <div className="flex justify-between border-b border-cyan-100 py-1.5">
                      <dt className="text-slate-700">HAA5 (RAA)</dt>
                      <dd className="text-slate-900 font-semibold">
                        {city.ccr.haa5Raa} ppb
                      </dd>
                    </div>
                  )}
                  {city.ccr.fluoride !== undefined && (
                    <div className="flex justify-between border-b border-cyan-100 py-1.5">
                      <dt className="text-slate-700">Fluoride</dt>
                      <dd className="text-slate-900 font-semibold">
                        {city.ccr.fluoride} ppm
                      </dd>
                    </div>
                  )}
                  {city.ccr.nitrate !== undefined && (
                    <div className="flex justify-between border-b border-cyan-100 py-1.5">
                      <dt className="text-slate-700">Nitrate</dt>
                      <dd className="text-slate-900 font-semibold">
                        {city.ccr.nitrate} ppm
                      </dd>
                    </div>
                  )}
                </dl>
                {city.ccr.note && (
                  <p className="text-xs text-slate-600 mt-3 mb-0 leading-relaxed italic">
                    {city.ccr.note}
                  </p>
                )}
                <p className="text-xs text-slate-600 mt-2 mb-0">
                  Source:{" "}
                  <a
                    href={city.ccr.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-700 underline"
                  >
                    {city.utility} water-quality page
                  </a>
                  .
                </p>
              </aside>
            )}

            {city.ccr &&
              city.ccr.chlorineRaa === undefined &&
              city.ccr.tthmRaa === undefined && (
                <p className="text-sm text-slate-600 italic">
                  Source numbers are pulled from the most recent{" "}
                  <a
                    href={city.ccr.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-700 underline"
                  >
                    {city.utility} Consumer Confidence Report
                  </a>
                  . {city.ccr.note}
                </p>
              )}

            <p>
              For most {city.name} homeowners that means visible scale on
              faucet aerators and showerheads within a year, water heaters that
              fail earlier than rated, and detergent and soap that never quite
              lather. A properly sized {service.shortName} treats the water
              that arrives at every fixture in the house, not just the kitchen
              tap. For the regional context behind these recommendations, see
              our <Link href={service.relatedPillar}>full water-treatment guide</Link>.
            </p>

            <h2 className="font-bold text-3xl md:text-4xl text-slate-900 mt-12 mb-4">
              How Our {service.name} Works
            </h2>
            <p>{service.description}</p>
            <p>
              Every install starts with a real water test. We do not size off
              a utility average. The Central Florida distribution loop carries
              seasonal variation, and the actual water at your kitchen sink
              may differ from the headline numbers in any utility&apos;s annual
              Consumer Confidence Report. For deeper background, read{" "}
              <Link href={`/blog/${service.relatedBlog[0].slug}`}>
                {service.relatedBlog[0].title}
              </Link>{" "}
              or our{" "}
              <Link href={service.relatedServicePage}>
                {service.name} service page
              </Link>
              .
            </p>

            <h2 className="font-bold text-3xl md:text-4xl text-slate-900 mt-12 mb-4">
              What&apos;s Included in a Pure Agua Install
            </h2>
            <ul className="not-prose space-y-2 my-4">
              {service.scopeOfWork.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-cyan-600 mt-1 flex-shrink-0">✓</span>
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
            <p>
              For more on materials and equipment selection across our full
              service lineup, see our <Link href="/about">company overview</Link>{" "}
              and the related{" "}
              <Link href={`/blog/${service.relatedBlog[1].slug}`}>
                {service.relatedBlog[1].title}
              </Link>
              .
            </p>

            <h2 className="font-bold text-3xl md:text-4xl text-slate-900 mt-12 mb-4">
              Call a professional if&hellip;
            </h2>
            <ul>
              <li>Your water leaves orange or black staining on fixtures, laundry, or sinks.</li>
              <li>You can smell sulfur or chlorine at the kitchen tap.</li>
              <li>You replaced a water heater in the last five years and the new one is already failing.</li>
              <li>You are on a private well and have not had a full bacteria, nitrate, and metals panel run in the last 12 months.</li>
              <li>You are buying bottled water in your {city.name} home for daily drinking and cooking.</li>
            </ul>
            <p>
              Any one of those signals is worth a free in-home water test from
              Pure Agua. We test, explain what we found, and give a written
              quote. No high-pressure sales.
            </p>

            <h2 className="font-bold text-3xl md:text-4xl text-slate-900 mt-12 mb-4">
              {city.name}-Specific Considerations
            </h2>
            <p>
              {city.name} sits in {city.county}. The water you drink, cook
              with, and shower in is treated by {city.utility} (see the{" "}
              <a href={city.utilitySource} target="_blank" rel="noopener noreferrer">
                utility&apos;s water-quality page
              </a>
              ).
            </p>
            <p>Notable local water-quality details:</p>
            <ul>
              {city.notableContaminants.map((c, i) => (
                <li key={i}>
                  {c.item} (
                  <a href={c.source} target="_blank" rel="noopener noreferrer">
                    source
                  </a>
                  )
                </li>
              ))}
            </ul>
            <p>
              For the most current numbers (chlorine or chloramine residual,
              trihalomethanes, hardness, lead and copper at the tap), pull{" "}
              {city.name}&apos;s latest Consumer Confidence Report directly
              from{" "}
              <a href={city.utilitySource} target="_blank" rel="noopener noreferrer">
                the utility
              </a>
              . We bring a fresh on-site test to every consultation.
            </p>

            <h2 className="font-bold text-3xl md:text-4xl text-slate-900 mt-12 mb-4">
              Service Area: {city.name} Neighborhoods and ZIPs
            </h2>
            <p>
              We install for homeowners across {city.name}. Common
              neighborhoods we serve include {city.neighborhoods.join(", ")},
              plus the broader {city.county} area. Primary ZIP codes:{" "}
              {city.zipCodes.join(", ")}. Outside this list? We likely still
              serve you, most of the Central Florida metro is in our standard
              service zone. <Link href="/contact">Schedule a free water test</Link>{" "}
              or call <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>.
            </p>

            <p>
              Looking at a neighboring city or a different system? See{" "}
              <Link href={siblingCityPage}>
                {service.name} in {siblingCity.name}, FL
              </Link>{" "}
              or{" "}
              <Link href={siblingServicePage}>
                {siblingService.name} in {city.name}, FL
              </Link>
              .
            </p>

            <h2 className="font-bold text-3xl md:text-4xl text-slate-900 mt-12 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="not-prose space-y-4">
              {faqs.map((faq, i) => (
                <details
                  key={i}
                  className="group bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-cyan-400 hover:shadow-md transition-all"
                >
                  <summary className="cursor-pointer px-6 py-4 font-bold text-slate-900 flex items-center justify-between hover:bg-slate-50 transition-colors">
                    <h3 className="text-lg m-0">{faq.q}</h3>
                  </summary>
                  <div className="px-6 pb-4 pt-2 text-slate-700 leading-relaxed border-t border-slate-200">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>

            <section className="not-prose mt-12 mb-16 rounded-2xl bg-gradient-to-br from-cyan-700 to-blue-800 p-8 text-white">
              <h2 className="font-bold text-2xl md:text-3xl mb-3">
                Ready to fix the water at your {city.name} home?
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

            <ImageCredit src={page.service.heroImage} className="mt-8" />
          </div>
        </section>
      </main>
    </>
  );
}
