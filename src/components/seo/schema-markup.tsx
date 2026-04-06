'use client'

import { usePathname } from 'next/navigation'

const SITE_URL = 'https://pureaguaenterprise.com'
const BUSINESS_NAME = 'Pure Agua Enterprises'
const PHONE = '+14077732883'
const DATE_MODIFIED = '2026-03-18'

const SERVICE_AREAS = [
  'Kissimmee',
  'Orlando',
  'St. Cloud',
  'Celebration',
  'Poinciana',
  'Hunters Creek',
  'Ocoee',
  'Apopka',
  'Clermont',
  'Winter Haven',
  'Lakeland',
  'Haines City',
]

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  '@id': `${SITE_URL}/#business`,
  name: BUSINESS_NAME,
  description:
    'Pure Agua Enterprises is a family-owned water filtration company serving Kissimmee, Orlando, and Central Florida with whole-home water purification, reverse osmosis, and water softening systems. Get a free water test today.',
  url: SITE_URL,
  telephone: PHONE,
  email: 'info@pureaguaenterprise.com',
  priceRange: '$',
  image: `${SITE_URL}/images/og-image.png`,
  logo: `${SITE_URL}/images/pure-agua-logo.png`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '3705 Eagle Isle Circle',
    addressLocality: 'Kissimmee',
    addressRegion: 'FL',
    postalCode: '34746',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 28.2919,
    longitude: -81.4076,
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '200',
    bestRating: '5',
    worstRating: '1',
  },
  hasCredential: [
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'certification', name: 'NSF/ANSI 58 Certified Systems' },
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'certification', name: 'NSF/ANSI 61 Certified Systems' },
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'membership', name: 'WQA Member' },
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'license', name: 'FL State Licensed & Insured' },
  ],
  areaServed: SERVICE_AREAS.map((city) => ({
    '@type': 'City',
    name: city,
    containedInPlace: {
      '@type': 'State',
      name: 'Florida',
    },
  })),
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '08:00',
      closes: '14:00',
    },
  ],
  makesOffer: [
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Whole Home Water Filtration',
        description:
          'Complete point-of-entry water filtration systems removing chlorine, sediment, and contaminants at every faucet in your Central Florida home.',
        url: `${SITE_URL}/services/whole-home`,
        areaServed: SERVICE_AREAS.map((city) => ({ '@type': 'City', name: city })),
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Water Softening Systems',
        description:
          'Salt-based and salt-free water softening systems for Central Florida homes. Eliminates hard water mineral buildup and extends appliance lifespan.',
        url: `${SITE_URL}/services/water-softening`,
        areaServed: SERVICE_AREAS.map((city) => ({ '@type': 'City', name: city })),
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Reverse Osmosis Systems',
        description:
          'Multi-stage reverse osmosis drinking water systems removing up to 99% of contaminants including PFAS, lead, and arsenic.',
        url: `${SITE_URL}/services/reverse-osmosis`,
        areaServed: SERVICE_AREAS.map((city) => ({ '@type': 'City', name: city })),
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Well Water Treatment',
        description:
          'Custom well water treatment systems for Florida well water problems including iron, sulfur, bacteria, and sediment.',
        url: `${SITE_URL}/services/well-water`,
        areaServed: SERVICE_AREAS.map((city) => ({ '@type': 'City', name: city })),
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Free Water Testing',
        description:
          'Complimentary in-home water quality analysis measuring hardness, pH, iron, chlorine, TDS, and contaminants specific to your Central Florida water supply.',
        url: `${SITE_URL}/contact`,
        areaServed: SERVICE_AREAS.map((city) => ({ '@type': 'City', name: city })),
      },
    },
  ],
  sameAs: [
    'https://facebook.com',
    'https://instagram.com',
    'https://youtube.com',
    'https://www.google.com/maps/place/Pure+Agua+Enterprise',
  ],
  dateModified: DATE_MODIFIED,
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: BUSINESS_NAME,
  url: SITE_URL,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${SITE_URL}/?s={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
}

const SERVICE_PAGE_MAP: Record<string, { name: string; description: string; url: string }> = {
  '/services/whole-home': {
    name: 'Whole Home Water Filtration',
    description:
      'Complete point-of-entry water filtration removing chlorine, sediment, VOCs, and other contaminants at every tap. Professional installation in Kissimmee, Orlando, and Central Florida.',
    url: `${SITE_URL}/services/whole-home`,
  },
  '/services/water-softening': {
    name: 'Water Softening Systems',
    description:
      'Salt-based and salt-free water softeners for Central Florida homes. Eliminates hard water scale, extends appliance life by up to 50%, and reduces soap use by up to 75%.',
    url: `${SITE_URL}/services/water-softening`,
  },
  '/services/reverse-osmosis': {
    name: 'Reverse Osmosis Drinking Water Systems',
    description:
      'Multi-stage reverse osmosis systems removing up to 99% of dissolved contaminants including PFAS, lead, arsenic, fluoride, and nitrates. Under-sink installation with dedicated faucet.',
    url: `${SITE_URL}/services/reverse-osmosis`,
  },
  '/services/well-water': {
    name: 'Well Water Treatment Systems',
    description:
      'Comprehensive well water treatment for Florida properties addressing iron, hydrogen sulfide, bacteria, manganese, sediment, and pH imbalance with lifetime warranty.',
    url: `${SITE_URL}/services/well-water`,
  },
}

const FAQ_SCHEMAS: Record<string, object> = {
  '/': {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    dateModified: DATE_MODIFIED,
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What water treatment services does Pure Agua Enterprises offer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pure Agua Enterprises offers whole-home water filtration, water softening systems (salt-based and salt-free), reverse osmosis drinking water systems, and well water treatment. All services include free in-home water testing and professional installation in Kissimmee, Orlando, and Central Florida.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I know if I need a water softener in Central Florida?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Central Florida has some of the hardest water in the US, averaging 15-25 grains per gallon (gpg) according to the USGS. Signs you need a softener include white scale on faucets, water spots on dishes, dry skin after bathing, and premature appliance failure. Pure Agua offers free water testing to measure your hardness level.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are there PFAS chemicals in Central Florida water?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. PFAS (per- and polyfluoroalkyl substances) have been detected in several Central Florida water supplies. The EPA set enforceable limits for PFOA and PFOS at 4 parts per trillion in 2024. Pure Agua reverse osmosis systems achieve 90%+ PFAS reduction, as confirmed by NSF International testing.',
        },
      },
    ],
  },
  '/services/water-softening': {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    dateModified: DATE_MODIFIED,
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How hard is the water in Kissimmee and Orlando?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Osceola and Orange County water typically measures 15-25 grains per gallon (gpg), classified as "very hard" by USGS standards. The national average is just 10-12 gpg. This extreme hardness accelerates scale buildup in pipes, causes appliances to fail 30-50% earlier, and requires 2x more soap than soft water regions.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between salt-based and salt-free water softeners?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Salt-based softeners use ion exchange to physically remove calcium and magnesium from water, producing truly soft water. Salt-free conditioners change the mineral structure to prevent scale without removing minerals — they do not soften water. For Central Florida\'s extreme hardness (15-25 gpg), salt-based systems are typically more effective.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much can a water softener save me in Central Florida?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Water Quality Research Foundation estimates annual savings of $479 for a family of four with a water softener. In Central Florida where hardness is 2x the national average, savings can be higher through reduced soap use (up to 75% less), lower water heating costs (up to 29% savings per U.S. DOE), and extended appliance lifespan.',
        },
      },
    ],
  },
  '/services/reverse-osmosis': {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    dateModified: DATE_MODIFIED,
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What does a reverse osmosis system remove from drinking water?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Reverse osmosis removes 95-99% of total dissolved solids including lead, arsenic, fluoride, nitrates, PFAS/PFOS, chlorine, chloramines, sodium, and hundreds of other contaminants. The membrane has pores of 0.0001 microns, smaller than most water contaminants and even some viruses.',
        },
      },
      {
        '@type': 'Question',
        name: 'How often do reverse osmosis filters need to be replaced?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pre-filters and post-filters in an RO system typically need replacement every 6-12 months. The RO membrane itself lasts 2-5 years depending on water quality and usage. Pure Agua offers annual maintenance plans to keep your system performing at peak efficiency.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is reverse osmosis water safe to drink daily?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Reverse osmosis water is safe and recommended by many health professionals. The WHO notes that demineralized water lacks minerals, but these are easily obtained through a balanced diet. Many RO systems include a remineralization stage that adds beneficial calcium and magnesium back to the purified water.',
        },
      },
    ],
  },
  '/services/well-water': {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    dateModified: DATE_MODIFIED,
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What are common well water problems in Central Florida?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Central Florida well water commonly contains iron (causing orange staining), hydrogen sulfide (rotten egg smell), manganese (black staining), sediment, bacteria, and high hardness. The USGS notes Florida aquifers can have naturally elevated levels of arsenic and radon. A comprehensive water test identifies your specific contaminants before treatment is designed.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does well water in Florida need to be treated?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most Florida well water requires treatment. The Florida Department of Health recommends testing private wells annually for bacteria, nitrates, and pH at minimum. Additional testing for iron, sulfur, hardness, and arsenic is advisable. Pure Agua provides comprehensive well water testing and designs custom treatment systems for your specific results.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you get rid of sulfur smell in well water?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Hydrogen sulfide (rotten egg odor) in well water is removed through oxidation filtration, aeration, or chlorination followed by carbon filtration. The appropriate method depends on the sulfur concentration and whether bacteria are present. Pure Agua tests your well water and installs the correct chemical-free or chemical treatment system for your situation.',
        },
      },
    ],
  },
  '/services/whole-home': {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    dateModified: DATE_MODIFIED,
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What does a whole home water filter remove?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A whole-home (point-of-entry) water filter treats all water entering your home, typically removing chlorine, chloramines, sediment, VOCs (volatile organic compounds), and certain disinfection byproducts. Advanced systems also target heavy metals and PFAS. The result is filtered water at every tap, not just the kitchen sink.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need a whole home filter if I have city water in Florida?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'City water in Florida is treated with chlorine or chloramines, which react with organic matter to form disinfection byproducts (DBPs). A 2023 Environmental Working Group analysis found PFAS chemicals in several Florida municipal supplies. A whole-home carbon filter removes chlorine taste and odor while reducing DBP exposure at every faucet and shower.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does a whole home water filtration system last?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Quality whole-home filtration systems typically last 10-20 years with proper maintenance. Filter media (carbon, sediment) requires replacement every 6-12 months depending on water usage and quality. Pure Agua systems come with a lifetime warranty on the control valve and tank, with annual service available.',
        },
      },
    ],
  },
  '/faq': {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    dateModified: DATE_MODIFIED,
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How hard is the water in Central Florida?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Central Florida has some of the hardest water in the United States. Osceola County (Kissimmee) and Orange County (Orlando) water typically measures 15-25 grains per gallon (gpg), classified as "very hard" to "extremely hard" by USGS standards. The national average is 10-12 gpg. This extreme hardness damages pipes, appliances, and causes dry skin and hair.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does water filtration system installation take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most Pure Agua water filtration system installations take 2-4 hours. A whole-home system typically takes 3-4 hours. Under-sink reverse osmosis installation takes 1-2 hours. Our licensed technicians handle all plumbing connections and system startup, and you have filtered water the same day.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does Pure Agua offer a warranty on water treatment systems?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Pure Agua Enterprises offers a lifetime warranty on the control valve and pressure tank for all whole-home systems. Reverse osmosis membrane warranty is 2 years. All installations are backed by a workmanship guarantee. Annual maintenance plans are available to keep systems performing at peak efficiency.',
        },
      },
    ],
  },
  '/contact': {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    dateModified: DATE_MODIFIED,
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How do I schedule a free water test with Pure Agua?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Call (407) 773-2883 or fill out the online contact form to schedule a complimentary in-home water test. A certified technician will visit your home to test for hardness, chlorine, TDS, iron, sulfur, pH, and other contaminants common in Central Florida water. There is no obligation and no sales pressure.',
        },
      },
      {
        '@type': 'Question',
        name: 'What areas does Pure Agua Enterprises serve?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pure Agua serves homeowners throughout Kissimmee, Orlando, St. Cloud, Celebration, Poinciana, Hunters Creek, Ocoee, Apopka, Clermont, Winter Haven, Lakeland, Haines City, and surrounding communities in Osceola, Orange, Polk, Seminole, and Lake counties.',
        },
      },
      {
        '@type': 'Question',
        name: 'What happens during the free water test appointment?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our certified technician visits your home, tests your water using professional equipment, and provides a detailed water quality report. You receive a written estimate for any recommended treatment solutions. The entire process takes about 30-45 minutes.',
        },
      },
    ],
  },
  '/financing': {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    dateModified: DATE_MODIFIED,
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Does Pure Agua offer financing for water filtration systems?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Pure Agua Enterprises offers flexible financing plans for qualifying homeowners, including options with 0% introductory rates and no money down. Financing is available for all water filtration systems including whole-home filters, water softeners, and reverse osmosis systems.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are the payment options for water treatment installation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pure Agua accepts cash, check, credit card, and offers financing plans. Financing options include 0% introductory APR plans with terms up to 60 months for qualifying applicants. Contact us for a free quote and to discuss the payment option that works best for your budget.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does a water filtration system cost in Central Florida?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Water filtration system costs vary by type and home size. Water softeners typically range from $1,500 to $4,500 installed. Reverse osmosis systems range from $300 to $3,000. Whole-home filtration systems range from $800 to $5,000. Pure Agua provides free in-home estimates with transparent, written pricing.',
        },
      },
    ],
  },
  '/warranty': {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    dateModified: DATE_MODIFIED,
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What does the Pure Agua lifetime warranty cover?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Pure Agua lifetime warranty covers the control valve and pressure tank on all whole-home water filtration and softening systems. This means the core mechanical components of your system are protected for as long as you own your home. Reverse osmosis membranes carry a 2-year warranty.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I file a warranty claim with Pure Agua?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Call (407) 773-2883 to initiate a warranty claim. Our team will schedule a service visit, diagnose the issue, and repair or replace covered components at no charge. Most warranty service calls are completed within 24-48 hours of the initial request.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does Pure Agua offer maintenance plans for water systems?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Annual maintenance plans are available to keep your water treatment system performing at peak efficiency. Plans include filter replacements, system inspections, water quality retesting, and priority scheduling for service calls. Regular maintenance extends system life and maintains water quality.',
        },
      },
    ],
  },
  '/about': {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    dateModified: DATE_MODIFIED,
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Who owns Pure Agua Enterprises?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pure Agua Enterprises is a family-owned and operated water treatment company headquartered in Kissimmee, FL. Founded in 2016, the company has grown into one of Central Florida\'s most trusted names in residential water filtration, serving Orlando, Kissimmee, and surrounding communities.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is Pure Agua Enterprises licensed and certified?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Pure Agua is fully licensed and insured in Florida. Our systems meet NSF/ANSI Standard 58 and Standard 61 requirements, and we are members of the Water Quality Association (WQA). We also hold an EPA WaterSense certification. All technicians carry current state-required certifications.',
        },
      },
      {
        '@type': 'Question',
        name: 'What brands does Pure Agua install?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pure Agua installs Watershield brand water filtration systems, chosen for their reliability, efficiency, and long service life. The Watershield product line includes carbon filters, reverse osmosis systems, water softeners (salt-based and salt-free), and sulfur removal systems.',
        },
      },
    ],
  },
  '/testimonials': {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    dateModified: DATE_MODIFIED,
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How many reviews does Pure Agua Enterprises have?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pure Agua Enterprises maintains a perfect 5.0-star rating across more than 200 verified Google reviews from homeowners throughout Kissimmee, Orlando, St. Cloud, Celebration, Poinciana, and the greater Central Florida area.',
        },
      },
      {
        '@type': 'Question',
        name: 'What do customers say about Pure Agua?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Customers consistently highlight the transparency of our process, the professionalism of our technicians, and the noticeable improvement in water quality from the first day. Many mention the free in-home water test, honest pricing with no hidden costs, and responsive customer service as key reasons they chose Pure Agua.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does Pure Agua have a satisfaction guarantee?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Every Pure Agua installation is backed by a workmanship guarantee and a lifetime warranty on the control valve and tank. We stand behind our work and are committed to ensuring every customer is completely satisfied with their water quality results.',
        },
      },
    ],
  },
}

function getBreadcrumbs(pathname: string) {
  if (pathname === '/') return null
  const segments = pathname.split('/').filter(Boolean)
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      ...segments.map((seg: string, i: number) => ({
        '@type': 'ListItem',
        position: i + 2,
        name: seg
          .replace(/-/g, ' ')
          .replace(/\b\w/g, (c: string) => c.toUpperCase()),
        item: `${SITE_URL}/${segments.slice(0, i + 1).join('/')}`,
      })),
    ],
  }
}

function getServiceSchema(pathname: string) {
  const serviceData = SERVICE_PAGE_MAP[pathname]
  if (!serviceData) return null
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${serviceData.url}/#service`,
    name: serviceData.name,
    description: serviceData.description,
    url: serviceData.url,
    dateModified: DATE_MODIFIED,
    provider: {
      '@type': 'HomeAndConstructionBusiness',
      '@id': `${SITE_URL}/#business`,
      name: BUSINESS_NAME,
      url: SITE_URL,
      telephone: PHONE,
    },
    areaServed: SERVICE_AREAS.map((city) => ({
      '@type': 'City',
      name: city,
    })),
  }
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Get Clean Water for Your Central Florida Home',
  description:
    'Pure Agua Enterprises makes it easy to get professional water filtration installed in your home in four simple steps.',
  totalTime: 'P1D',
  estimatedCost: {
    '@type': 'MonetaryAmount',
    currency: 'USD',
    value: '0',
  },
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Schedule a Free Water Test',
      text: 'Call (407) 773-2883 or fill out our contact form to schedule a complimentary in-home water quality analysis. We test for hardness, pH, iron, chlorine, TDS, and other contaminants specific to your Central Florida water supply.',
      url: `${SITE_URL}/contact`,
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Receive a Personalized Recommendation',
      text: 'Based on your water test results, our certified technician will explain exactly what is in your water and recommend the right filtration system for your home and budget.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Professional Installation',
      text: 'Our licensed and insured technicians install your water treatment system, typically in 2-4 hours. We handle all plumbing connections and system startup so you have filtered water the same day.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Enjoy Clean Water for Life',
      text: 'With your new water filtration system installed and backed by our lifetime warranty, enjoy pure, healthy water at every faucet in your home. Annual maintenance plans available.',
    },
  ],
}

export default function SchemaMarkup() {
  const pathname = usePathname() || '/'
  const schemas: object[] = []

  // LocalBusiness + WebSite on every page for consistent entity signals
  schemas.push(localBusinessSchema, websiteSchema)

  const breadcrumbs = getBreadcrumbs(pathname)
  if (breadcrumbs) schemas.push(breadcrumbs)

  const service = getServiceSchema(pathname)
  if (service) schemas.push(service)

  const faq = FAQ_SCHEMAS[pathname]
  if (faq) schemas.push(faq)

  // HowTo on homepage and contact page where process steps are rendered
  if (pathname === '/' || pathname === '/contact') {
    schemas.push(howToSchema)
  }

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}
