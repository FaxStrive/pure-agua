import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'All Florida Water Treatment Service Areas',
  description: 'Find Pure Agua water treatment services in your Florida city. Water filtration, softeners, and reverse osmosis. Free testing available.',
  alternates: {
    canonical: 'https://pureaguaenterprise.com/service-areas',
  },
  openGraph: {
    title: 'All Florida Water Treatment Service Areas | Pure Agua',
    description: 'Water filtration and treatment services across Florida. Find your city and schedule a free water test.',
    url: 'https://pureaguaenterprise.com/service-areas',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'Pure Agua Enterprises Service Areas Across Florida' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'All Florida Water Treatment Service Areas | Pure Agua',
    description: 'Find Pure Agua water treatment services in your Florida city. Water filtration, softeners, and reverse osmosis. Free testing available.',
    images: ['/images/og-image.png'],
  },
};

const areas = [
  {
    "slug": "water-softener-in-florida",
    "city": "Water Softener In Florida",
    "state": "",
    "href": "/water-softener-in-florida"
  },
  {
    "slug": "reverse-osmosis-in-florida",
    "city": "Reverse Osmosis In Florida",
    "state": "",
    "href": "/reverse-osmosis-in-florida"
  },
  {
    "slug": "water-filtration-in-florida",
    "city": "Water Filtration In Florida",
    "state": "",
    "href": "/water-filtration-in-florida"
  },
  {
    "slug": "water-testing-in-florida",
    "city": "Water Testing In Florida",
    "state": "",
    "href": "/water-testing-in-florida"
  },
  {
    "slug": "water-treatment-in-florida",
    "city": "Water Treatment In Florida",
    "state": "",
    "href": "/water-treatment-in-florida"
  },
  {
    "slug": "well-water-treatment-in-florida",
    "city": "Well Water Treatment In Florida",
    "state": "",
    "href": "/well-water-treatment-in-florida"
  }
];

export default function ServiceAreasPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6">Service Areas</h1>
      <p className="text-lg text-gray-700 mb-6">
        Pure Agua Enterprises proudly serves homeowners and businesses across Central Florida with professional water treatment solutions. Whether you need a water softener to combat Florida&apos;s notoriously hard water, a reverse osmosis system for pure drinking water, or comprehensive well water treatment, our certified technicians are ready to help.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        We provide free in-home water testing in Kissimmee, Orlando, St. Cloud, Celebration, Poinciana, and surrounding communities. Every consultation includes a detailed water quality report and a written estimate with no obligation. Our service area continues to expand as more Florida families discover the difference that professionally treated water makes.
      </p>
      <p className="text-lg text-gray-700 mb-10">
        Select a service below to learn more about what Pure Agua offers in your area, or <Link href="/contact" className="text-blue-600 hover:underline font-semibold">contact us directly</Link> to schedule your free water test. You can also call us at <a href="tel:+14075128342" className="text-blue-600 hover:underline font-semibold">(407) 512-8342</a>.
      </p>

      <h2 className="text-2xl font-bold mb-6">Our Services Across Florida</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12">
        {areas.map((area) => (
          <li key={area.slug}>
            <Link
              href={area.href}
              className="block p-4 border rounded-lg hover:bg-gray-50 transition"
            >
              {area.city}{area.state ? `, ${area.state}` : ''}
            </Link>
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold mb-4">Cities We Serve in Central Florida</h2>
      <p className="text-gray-700 mb-6">
        Our primary service area covers Osceola, Orange, Polk, Seminole, and Lake counties. We regularly serve Kissimmee, Orlando, St. Cloud, Celebration, Poinciana, Hunters Creek, Ocoee, Apopka, Clermont, Winter Haven, Lakeland, and Haines City. If your city is not listed, call us — we likely serve your area too.
      </p>

      <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
        <h2 className="text-2xl font-bold mb-3">Schedule Your Free Water Test</h2>
        <p className="text-gray-700 mb-5">
          Not sure which service is right for you? Our certified technicians will test your water at no charge and recommend the best solution for your home. No sales pressure, no obligation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
          >
            Get Your Free Water Test
          </Link>
          <a
            href="tel:+14075128342"
            className="inline-block border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center"
          >
            Call (407) 512-8342
          </a>
        </div>
      </div>
    </main>
  );
}
