import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'NSF/ANSI 58/61, WQA & FL Licensed | Pure Agua Enterprise',
  description: 'Pure Agua Enterprise holds NSF/ANSI 58, NSF/ANSI 61, WQA certification, and a Florida contractor license. 5.0★ 200+ reviews. Family-owned Kissimmee, FL.',
  alternates: { canonical: 'https://pureaguaenterprise.com/certifications' },
}

const certSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What certifications does Pure Agua Enterprise hold?', acceptedAnswer: { '@type': 'Answer', text: 'Pure Agua Enterprise holds NSF/ANSI 58 certification (reverse osmosis systems), NSF/ANSI 61 certification (drinking water system components — material safety), WQA (Water Quality Association) membership, and a Florida contractor license. The company is family-owned and has served Central Florida since 2016 with a 5.0★ rating and 200+ Google reviews.' } },
  ],
}

const certs = [
  { name: 'NSF/ANSI 58', what: 'Reverse Osmosis Systems', means: 'NSF/ANSI 58 certifies that reverse osmosis systems remove contaminants — lead, arsenic, nitrates, fluoride, chloramine, chromium — to the levels claimed, and that all materials in contact with drinking water are safe. For Kissimmee and Central Florida homeowners, this is the key certification that separates verified RO systems from marketing claims.' },
  { name: 'NSF/ANSI 61', what: 'Drinking Water System Components — Material Safety', means: 'NSF/ANSI 61 certifies that all materials and components in contact with drinking water don\'t leach contaminants above health-based thresholds. This applies to pipes, fittings, valves, and hardware used in Pure Agua\'s installations — not just the treatment media itself.' },
  { name: 'WQA Member', what: 'Water Quality Association', means: 'Pure Agua Enterprise is a WQA (Water Quality Association) member. WQA is the leading professional organization for US water treatment specialists. WQA membership requires adherence to a code of professional ethics and access to ongoing technical education in water chemistry and treatment technologies.' },
  { name: 'FL Licensed & Insured', what: 'Florida Contractor License', means: 'Pure Agua Enterprise holds a Florida contractor license covering water treatment system installation in Kissimmee, Orlando, and all of Central Florida. All work is fully insured. Licensing documentation is provided before any work begins.' },
  { name: '5.0★ — 200+ Reviews', what: 'Customer Satisfaction Record', means: 'Pure Agua Enterprise maintains a 5.0★ Google rating from 200+ verified customer reviews — a perfect score across a significant number of reviews in Central Florida. This rating reflects consistent installation quality and customer service from founding in 2016 through today.' },
]

export default function CertificationsPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(certSchema) }} />

      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-900 to-teal-800 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <nav className="text-sm text-blue-200 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white">Pure Agua Enterprise</Link><span className="mx-2">/</span>
            <span className="text-white">Certifications</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Certifications & Standards</h1>
          <p className="text-xl text-blue-100 max-w-2xl mb-6">Pure Agua Enterprise holds NSF/ANSI 58 and 61 certifications, WQA membership, and a Florida contractor license. Family-owned since 2016 with a perfect 5.0★ rating.</p>
          <div className="flex flex-wrap gap-3">
            {['NSF/ANSI 58', 'NSF/ANSI 61', 'WQA Member', 'FL Licensed', '5.0★ 200+ Reviews'].map((c) => (
              <span key={c} className="px-4 py-2 bg-white/15 text-white text-sm font-bold rounded-full">{c}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-8">
            {certs.map((cert) => (
              <div key={cert.name} className="p-6 md:p-8 border border-gray-200 rounded-2xl">
                <div className="flex items-start gap-5 mb-4">
                  <div className="w-16 h-16 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-blue-700 text-xs text-center leading-tight px-1">{cert.name.split(' ').slice(0,2).join(' ')}</span>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">{cert.name}</h2>
                    <p className="text-sm text-blue-600 font-semibold">{cert.what}</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">{cert.means}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-gradient-to-br from-blue-900 to-teal-800 rounded-2xl text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Certified Water Treatment for Central Florida</h2>
            <p className="text-blue-100 mb-6 max-w-xl mx-auto">NSF/ANSI 58 + 61 · WQA certified · FL licensed · 5.0★ 200+ reviews · Family-owned Kissimmee · Free water test</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 font-bold rounded-full hover:bg-blue-50 transition-all">Get Free Water Test</Link>
              <a href="tel:+14075128342" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 border border-white/30 transition-colors">Call (407) 512-8342</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
