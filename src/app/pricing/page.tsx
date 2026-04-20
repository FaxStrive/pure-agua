import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Water Treatment Pricing — Kissimmee & Central Florida | Pure Agua',
  description: 'Transparent pricing for water softeners, whole-house filtration, and reverse osmosis in Kissimmee, Orlando, and Central Florida. Pure Agua Enterprise. 5.0★ 200+ reviews. Free water test.',
  alternates: { canonical: 'https://pureaguaenterprise.com/pricing' },
}

const pricingSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How much does a water softener cost in Kissimmee or Orlando?', acceptedAnswer: { '@type': 'Answer', text: 'Water softener installation in Kissimmee and Orlando typically costs $1,200-$3,500 for a standard residential system. Central Florida water (5-15 GPG in city water areas, harder in some well water areas) requires proper sizing. Pure Agua Enterprise provides a free in-home water test and precise written quote before any commitment. Call (407) 512-8342.' } },
    { '@type': 'Question', name: 'Does Pure Agua offer financing?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Pure Agua Enterprise offers financing options for qualified customers across Central Florida. Ask about financing when scheduling your free water test at (407) 512-8342.' } },
  ],
}

const items = [
  { service: 'Free In-Home Water Test', range: 'Always Free', desc: 'Professional water test for hardness, chlorine, pH, iron, TDS across Kissimmee, Orlando, and Central Florida. Same-day results, no obligation. 5.0★ 200+ reviews.' },
  { service: 'Water Softener Installation', range: '$1,200 – $3,500', desc: 'NSF/ANSI 58 certified systems. Sized to your Central FL water hardness. WQA certified installation. FL licensed. 5.0★ rated service.' },
  { service: 'Whole-House Filtration', range: '$1,500 – $4,000', desc: 'Multi-stage NSF-certified filtration removing chlorine, sediment, PFAS, and contaminants at every faucet in your Kissimmee or Orlando home.' },
  { service: 'Reverse Osmosis System', range: '$600 – $1,400', desc: 'Under-sink RO for drinking water. NSF/ANSI 58 certified. Removes lead, arsenic, fluoride, nitrates from Central FL tap water.' },
  { service: 'Well Water Treatment', range: '$1,500 – $5,000', desc: 'Custom multi-stage systems for iron, sulfur, bacteria, hardness in Central FL well water. Free comprehensive well water test included.' },
  { service: 'Combination System', range: '$2,500 – $6,000', desc: 'Softener + filtration bundle. Complete home water protection for Kissimmee and Orlando homes. Most popular choice.' },
]

export default function PricingPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }} />

      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-900 to-teal-800 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Water Treatment Pricing</h1>
          <p className="text-xl text-blue-100 max-w-2xl mb-8">Transparent pricing for Kissimmee, Orlando, and Central Florida homeowners. Family-owned, FL licensed, 5.0★ 200+ reviews. Every quote follows a free in-home water test.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 font-bold rounded-full hover:bg-blue-50 transition-all">Get Free Water Test + Quote</Link>
            <a href="tel:+14075128342" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-colors">Call (407) 512-8342</a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="space-y-5">
            {items.map((item) => (
              <div key={item.service} className="p-6 md:p-8 border border-gray-200 rounded-2xl hover:border-blue-200 hover:shadow-sm transition-all">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-1">{item.service}</h2>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="text-2xl font-bold text-blue-700">{item.range}</span>
                    {item.range !== 'Always Free' && <span className="block text-sm text-gray-500 text-right">installed</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-blue-50 rounded-2xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Always Included</h2>
            <ul className="space-y-2 text-gray-700">
              {['Free in-home water test (hardness, chlorine, pH, iron, TDS)', 'Written quote before any work begins', 'NSF/ANSI 58 + NSF/ANSI 61 certified systems', 'WQA certified installation', 'FL licensed and insured', '5.0★ rated — 200+ Google reviews', 'Family-owned, Central Florida based since 2016'].map((i) => (
                <li key={i} className="flex items-start gap-2"><span className="text-blue-700 font-bold">✓</span><span>{i}</span></li>
              ))}
            </ul>
          </div>

          <div className="mt-12 p-8 bg-gradient-to-br from-blue-900 to-teal-800 rounded-2xl text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Get Your Exact Price</h2>
            <p className="text-blue-100 mb-6 max-w-xl mx-auto">5.0★ 200+ reviews · Family-owned · NSF certified · WQA certified · FL licensed · Free water test</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 font-bold rounded-full hover:bg-blue-50 transition-all">Schedule Free Water Test</Link>
              <a href="tel:+14075128342" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 border border-white/30 transition-colors">Call (407) 512-8342</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
