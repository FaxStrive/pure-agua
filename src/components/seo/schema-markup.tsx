'use client'

import { usePathname } from 'next/navigation'

const SITE_URL = 'https://pureaguaenterprise.com'
const BUSINESS_NAME = 'Pure Agua Enterprises'
const PHONE = '+14077732883'
const DATE_MODIFIED = '2026-04-06'

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
    'https://www.facebook.com/pureaguaenterprise',
    'https://www.instagram.com/pureaguaenterprise',
    'https://www.youtube.com/@pureaguaenterprise',
    'https://x.com/pureaguafl',
    'https://www.linkedin.com/company/pureaguaenterprise',
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

const homeFaqSchema = {
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
}

const waterSofteningFaqSchema = {
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
}

const reverseOsmosisFaqSchema = {
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
}

const wellWaterFaqSchema = {
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
}

const wholeHomeFaqSchema = {
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
}

const faqPageFaqSchema = {
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
}

const contactFaqSchema = {
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
}

const financingFaqSchema = {
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
}

const warrantyFaqSchema = {
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
}

const aboutFaqSchema = {
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
}

const testimonialsFaqSchema = {
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
}

const serviceAreaFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  dateModified: DATE_MODIFIED,
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where does Pure Agua Enterprises offer water treatment services?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pure Agua serves Kissimmee, Orlando, St. Cloud, Celebration, Poinciana, Hunters Creek, Ocoee, Apopka, Clermont, Winter Haven, Lakeland, and Haines City across Osceola, Orange, Polk, Seminole, and Lake counties in Central Florida.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Pure Agua do free water tests outside Kissimmee and Orlando?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Free in-home water testing is available throughout our entire service area including St. Cloud, Celebration, Poinciana, Winter Haven, Lakeland, and other Central Florida communities. Call (407) 773-2883 to confirm service availability at your address.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does water quality vary across different Central Florida cities?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Water quality differs significantly by location and source. Municipal water in Kissimmee and Orlando tends to be very hard (15-25 gpg) with chlorine. Well water in rural Polk and Lake counties often has iron, sulfur, and bacteria. Pure Agua customizes treatment based on your specific water test results.',
      },
    },
  ],
}

const galleryFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  dateModified: DATE_MODIFIED,
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does a water filtration system installation look like?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A typical whole-home water filtration installation includes mounting the system near the main water line entry point (usually in the garage), connecting pre-filters and post-filters, and running a bypass valve. The process takes 2-4 hours and is completed by a licensed technician.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where in the home is a water softener installed?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Water softeners are typically installed in the garage or utility room near the main water line and a drain. The system includes a resin tank and a brine tank. Our technicians ensure the installation is neat, accessible for maintenance, and does not interfere with your daily routine.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I see examples of Pure Agua installations before scheduling?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Our installation gallery features photos of completed water filtration, softener, reverse osmosis, and well water treatment projects across Kissimmee, Orlando, and Central Florida. Browse real examples to see the quality of our workmanship before scheduling your free water test.',
      },
    },
  ],
}

const beforeAfterFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  dateModified: DATE_MODIFIED,
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does water quality improve after installing a filtration system?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most Central Florida homes see TDS (total dissolved solids) drop from 200-500 ppm to under 30 ppm with reverse osmosis, and hardness drop from 15-25 gpg to near zero with a water softener. Before-and-after water test results are provided with every installation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will I notice a difference in water quality immediately?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Most customers notice improved water taste, reduced chlorine smell, and softer-feeling water within the first day. Over weeks, you will also see less scale buildup on fixtures, cleaner dishes, and softer skin and hair.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Pure Agua provide before-and-after water test results?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Every Pure Agua installation includes a pre-installation water test and a post-installation verification test. You receive documented results showing the measurable improvement in your water quality, including TDS, hardness, chlorine, and other contaminant levels.',
      },
    },
  ],
}

const resourcesFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  dateModified: DATE_MODIFIED,
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How can I test my home water quality in Central Florida?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most accurate way is to schedule a free in-home water test with Pure Agua. Our certified technician uses professional equipment to measure hardness, TDS, pH, chlorine, iron, sulfur, and other contaminants specific to your water source. DIY test strips provide basic readings but lack the precision of professional testing.',
      },
    },
    {
      '@type': 'Question',
      name: 'What maintenance does a water filtration system need?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Water softeners need salt replenishment every 4-8 weeks and annual brine tank cleaning. Whole-home carbon filters need media replacement every 6-12 months. Reverse osmosis systems need filter changes every 6-12 months and membrane replacement every 2-5 years. Pure Agua offers annual maintenance plans.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Central Florida tap water safe to drink?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Central Florida municipal water meets EPA safety standards but contains chlorine, chloramines, and often elevated TDS levels (200-500 ppm). PFAS chemicals have been detected in some supplies. While technically safe, many homeowners choose additional filtration for better taste and reduced contaminant exposure.',
      },
    },
  ],
}

const careersFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  dateModified: DATE_MODIFIED,
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What career opportunities does Pure Agua Enterprises offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pure Agua hires water treatment technicians, sales representatives, and customer service coordinators in Central Florida. We offer competitive pay, training and certification support, and the opportunity to help families improve their water quality.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need experience to work as a water treatment technician?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Prior plumbing or water treatment experience is preferred but not required. Pure Agua provides on-the-job training and supports employees in obtaining industry certifications. A valid Florida driver license and reliable transportation are required.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I apply for a job at Pure Agua Enterprises?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Send your resume to careers@pureaguafl.com or call (407) 773-2883 to inquire about current openings. Include your relevant experience and availability. We review applications promptly and contact qualified candidates for interviews.',
      },
    },
  ],
}

const FAQ_SCHEMAS: Record<string, object> = {
  '/': homeFaqSchema,
  '/services/water-softening': waterSofteningFaqSchema,
  '/services/reverse-osmosis': reverseOsmosisFaqSchema,
  '/services/well-water': wellWaterFaqSchema,
  '/services/whole-home': wholeHomeFaqSchema,
  '/faq': faqPageFaqSchema,
  '/contact': contactFaqSchema,
  '/financing': financingFaqSchema,
  '/warranty': warrantyFaqSchema,
  '/about': aboutFaqSchema,
  '/testimonials': testimonialsFaqSchema,
  '/service-area': serviceAreaFaqSchema,
  '/service-areas': serviceAreaFaqSchema,
  '/gallery': galleryFaqSchema,
  '/before-after': beforeAfterFaqSchema,
  '/resources': resourcesFaqSchema,
  '/careers': careersFaqSchema,
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

const wholeHomeHowToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Install a Whole Home Water Filtration System',
  description:
    'Steps to getting a whole-home water filtration system installed in your Central Florida home by Pure Agua Enterprises.',
  totalTime: 'P1D',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Schedule a Free Water Test',
      text: 'Call (407) 773-2883 to schedule a free in-home water quality test. Our technician tests for chlorine, TDS, hardness, sediment, and other contaminants specific to your water source.',
      url: `${SITE_URL}/contact`,
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Review Your Custom Treatment Plan',
      text: 'Based on your water test results and household size, we recommend the right whole-home filtration system. You receive a written estimate with transparent pricing.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Professional Installation',
      text: 'A licensed Pure Agua technician installs the filtration system at your main water line entry point, typically in the garage. Installation takes 3-4 hours.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Post-Installation Verification',
      text: 'After installation, we test your water again to confirm contaminant reduction. You receive before-and-after results and a maintenance schedule for your system.',
    },
  ],
}

const waterSofteningHowToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Get a Water Softener Installed in Central Florida',
  description:
    'Steps to solving hard water problems in your Central Florida home with a professional water softener installation by Pure Agua.',
  totalTime: 'P1D',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Test Your Water Hardness',
      text: 'Schedule a free water test to measure your hardness level in grains per gallon (gpg). Central Florida averages 15-25 gpg, classified as very hard by USGS standards.',
      url: `${SITE_URL}/contact`,
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Choose Salt-Based or Salt-Free',
      text: 'Based on your hardness level and preferences, choose between a salt-based ion exchange softener (best for extreme hardness) or a salt-free conditioner (scale prevention without salt).',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Professional Installation',
      text: 'Our licensed technician installs your water softener near the main water line and a drain, typically in the garage or utility room. Installation takes 2-3 hours.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Enjoy Soft Water',
      text: 'Experience softer skin, cleaner dishes, less soap usage, and extended appliance lifespan. Your system is backed by a lifetime warranty on the control valve and tank.',
    },
  ],
}

const HOWTO_MAP: Record<string, object> = {
  '/': howToSchema,
  '/contact': howToSchema,
  '/services/whole-home': wholeHomeHowToSchema,
  '/services/water-softening': waterSofteningHowToSchema,
  '/services/reverse-osmosis': howToSchema,
  '/services/well-water': howToSchema,
}

const articleCollectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Water Quality Blog',
  description: 'Expert guides on water quality, filtration technology, and maintenance for Central Florida homeowners.',
  url: `${SITE_URL}/blog`,
  isPartOf: {
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
  },
  publisher: {
    '@type': 'Organization',
    name: BUSINESS_NAME,
    url: SITE_URL,
  },
}

export default function SchemaMarkup() {
  const pathname = usePathname() || '/'
  const schemas: object[] = []

  schemas.push(localBusinessSchema, websiteSchema)

  const breadcrumbs = getBreadcrumbs(pathname)
  if (breadcrumbs) schemas.push(breadcrumbs)

  const service = getServiceSchema(pathname)
  if (service) schemas.push(service)

  const faq = FAQ_SCHEMAS[pathname]
  if (faq) schemas.push(faq)

  const howTo = HOWTO_MAP[pathname]
  if (howTo) schemas.push(howTo)

  if (pathname === '/blog') {
    schemas.push(articleCollectionSchema)
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
