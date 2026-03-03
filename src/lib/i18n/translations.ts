export type Language = "en" | "es";

export const translations = {
  // Navigation
  nav: {
    home: { en: "Home", es: "Inicio" },
    about: { en: "About", es: "Nosotros" },
    services: { en: "Services", es: "Servicios" },
    contact: { en: "Contact", es: "Contacto" },
    callUs: { en: "Call Us", es: "Llamanos" },
    freeWaterTest: { en: "Free Water Test", es: "Prueba de Agua Gratis" },
  },

  // Hero
  hero: {
    badge: {
      en: "Family-Owned | 10+ Years Serving Central Florida",
      es: "Negocio Familiar | 10+ Anos Sirviendo a Florida Central",
    },
    headline1: { en: "Pure Water,", es: "Agua Pura," },
    headline2: { en: "Nothing Less.", es: "Nada Menos." },
    subheadline: {
      en: "Your family deserves crystal-clear water from every tap. We test, design, and install custom filtration systems for homes across Central Florida.",
      es: "Su familia merece agua cristalina de cada grifo. Probamos, disenamos e instalamos sistemas de filtracion personalizados para hogares en toda Florida Central.",
    },
    ctaPrimary: { en: "Get a Free Water Test", es: "Obtenga una Prueba Gratis" },
    ctaSecondary: { en: "Our Services", es: "Nuestros Servicios" },
    stats: {
      years: { en: "Years Experience", es: "Anos de Experiencia" },
      clients: { en: "Happy Clients", es: "Clientes Felices" },
      satisfaction: { en: "Satisfaction", es: "Satisfaccion" },
    },
    trustedQuality: { en: "Trusted Quality", es: "Calidad Confiable" },
    centralFlorida: { en: "Central Florida", es: "Florida Central" },
  },

  // Trust Signals
  trustSignals: {
    licensedInsured: { en: "Licensed & Insured", es: "Licenciado y Asegurado" },
    certifiedProfessionals: { en: "Certified Professionals", es: "Profesionales Certificados" },
    familyOwned: { en: "Family Owned", es: "Negocio Familiar" },
    personalService: { en: "Personal Service", es: "Servicio Personal" },
    tenYears: { en: "10+ Years", es: "10+ Anos" },
    industryExperience: { en: "Industry Experience", es: "Experiencia en la Industria" },
    fiveStarRated: { en: "5-Star Rated", es: "5 Estrellas" },
    byOurCustomers: { en: "By Our Customers", es: "Por Nuestros Clientes" },
    qualityGuaranteed: { en: "Lifetime Warranty", es: "Garantia de Por Vida" },
    onEveryInstall: { en: "On Every System", es: "En Cada Sistema" },
    freeWaterTests: { en: "Free Water Tests", es: "Pruebas de Agua Gratis" },
    noObligation: { en: "No Obligation", es: "Sin Compromiso" },
  },

  // Services
  services: {
    label: { en: "Our Services", es: "Nuestros Servicios" },
    heading: {
      en: "Complete Water Solutions for Your Home",
      es: "Soluciones Completas de Agua para Su Hogar",
    },
    subheading: {
      en: "From whole-home systems to drinking water purification, we design custom solutions that fit your water quality needs.",
      es: "Desde sistemas para toda la casa hasta purificacion de agua potable, disenamos soluciones personalizadas para sus necesidades.",
    },
    learnMore: { en: "Learn More", es: "Saber Mas" },
    wholeHome: {
      title: { en: "Whole Home Filtration", es: "Filtracion para Toda la Casa" },
      description: {
        en: "Complete water purification for every faucet in your home. Remove chlorine, sediment, and contaminants at the point of entry.",
        es: "Purificacion completa del agua para cada grifo de su hogar. Elimina cloro, sedimentos y contaminantes en el punto de entrada.",
      },
      features: {
        en: ["Point-of-Entry System", "All Faucets Protected", "Low Maintenance"],
        es: ["Sistema de Punto de Entrada", "Todos los Grifos Protegidos", "Bajo Mantenimiento"],
      },
    },
    reverseOsmosis: {
      title: { en: "Reverse Osmosis", es: "Osmosis Inversa" },
      description: {
        en: "Crystal-clear drinking water directly from your kitchen tap. Multi-stage filtration removes up to 99% of contaminants.",
        es: "Agua potable cristalina directamente de su grifo de cocina. La filtracion de multiples etapas elimina hasta el 99% de contaminantes.",
      },
      features: {
        en: ["99% Contaminant Removal", "Kitchen Installation", "Pure Taste"],
        es: ["99% de Eliminacion de Contaminantes", "Instalacion en Cocina", "Sabor Puro"],
      },
    },
    waterSoftening: {
      title: { en: "Water Softening", es: "Ablandamiento de Agua" },
      description: {
        en: "Say goodbye to hard water damage. Protect your pipes, appliances, and enjoy softer skin and hair throughout your home.",
        es: "Diga adios al dano del agua dura. Proteja sus tuberias, electrodomesticos y disfrute de piel y cabello mas suaves.",
      },
      features: {
        en: ["Scale Prevention", "Appliance Protection", "Softer Skin & Hair"],
        es: ["Prevencion de Sarro", "Proteccion de Electrodomesticos", "Piel y Cabello Mas Suaves"],
      },
    },
    wellWater: {
      title: { en: "Well Water Systems", es: "Sistemas de Agua de Pozo" },
      description: {
        en: "Specialized treatment for well water challenges including iron, sulfur, sediment, and bacteria. Custom-designed systems that turn problem well water into clean, safe water for your entire home.",
        es: "Tratamiento especializado para los desafios del agua de pozo incluyendo hierro, azufre, sedimentos y bacterias. Sistemas disenados a medida que convierten el agua de pozo problematica en agua limpia y segura para toda su casa.",
      },
      features: {
        en: ["Iron & Sulfur Removal", "Bacteria Treatment", "Sediment Filtration"],
        es: ["Eliminacion de Hierro y Azufre", "Tratamiento de Bacterias", "Filtracion de Sedimentos"],
      },
    },
  },

  // Process
  process: {
    label: { en: "How It Works", es: "Como Funciona" },
    heading: { en: "4 Simple Steps to Cleaner Water", es: "4 Pasos Simples para Agua Mas Limpia" },
    subheading: {
      en: "We make the process effortless. From your free test to enjoying pure water, here is how we help.",
      es: "Hacemos el proceso sin esfuerzo. Desde su prueba gratuita hasta disfrutar de agua pura, asi es como ayudamos.",
    },
    steps: [
      {
        title: { en: "Free Water Test", es: "Prueba de Agua Gratis" },
        description: {
          en: "We visit your home and test your water quality at no cost. Our comprehensive analysis identifies every contaminant affecting your family's water.",
          es: "Visitamos su hogar y analizamos la calidad de su agua sin costo. Nuestro analisis integral identifica cada contaminante que afecta el agua de su familia.",
        },
      },
      {
        title: { en: "Custom Recommendation", es: "Recomendacion Personalizada" },
        description: {
          en: "Based on your results, we design a personalized filtration system. No cookie-cutter solutions -- every home gets a unique plan.",
          es: "Basado en sus resultados, disenamos un sistema de filtracion personalizado. Sin soluciones genericas -- cada hogar recibe un plan unico.",
        },
      },
      {
        title: { en: "Expert Installation", es: "Instalacion Profesional" },
        description: {
          en: "Our certified technicians install your system efficiently, usually in just one day. We handle everything from start to finish.",
          es: "Nuestros tecnicos certificados instalan su sistema eficientemente, generalmente en un solo dia. Nos encargamos de todo de principio a fin.",
        },
      },
      {
        title: { en: "Enjoy Pure Water", es: "Disfrute Agua Pura" },
        description: {
          en: "Taste the difference from every faucet. We provide ongoing support and maintenance to keep your water crystal clear for years to come.",
          es: "Sienta la diferencia en cada grifo. Brindamos soporte continuo y mantenimiento para mantener su agua cristalina por anos.",
        },
      },
    ],
  },

  // About Preview
  aboutPreview: {
    label: { en: "About Us", es: "Sobre Nosotros" },
    heading: {
      en: "A Younger, Thriving Company Making a Difference",
      es: "Una Empresa Joven y Prospera Haciendo la Diferencia",
    },
    description: {
      en: "We are a family-owned business with hundreds of happy customers who have made the switch to cleaner water. We keep up with modern changes and are eager to make a difference in every home we serve.",
      es: "Somos un negocio familiar con cientos de clientes satisfechos que han cambiado a agua mas limpia. Nos mantenemos al dia con los cambios modernos y estamos ansiosos de hacer la diferencia en cada hogar que servimos.",
    },
    familyValues: {
      title: { en: "Family Values", es: "Valores Familiares" },
      description: {
        en: "We treat every home like it's our own. As a family-owned business, we understand what it means to care for yours.",
        es: "Tratamos cada hogar como si fuera el nuestro. Como negocio familiar, entendemos lo que significa cuidar el suyo.",
      },
    },
    communityFirst: {
      title: { en: "Community First", es: "Comunidad Primero" },
      description: {
        en: "Hundreds of Central Florida families have made the switch to cleaner water with our help.",
        es: "Cientos de familias de Florida Central han cambiado a agua mas limpia con nuestra ayuda.",
      },
    },
    localExperts: {
      title: { en: "Local Experts", es: "Expertos Locales" },
      description: {
        en: "We know Central Florida water. Hard water, chlorine, contaminants -- we've solved them all right here in your neighborhood.",
        es: "Conocemos el agua de Florida Central. Agua dura, cloro, contaminantes -- los hemos resuelto todos aqui en su vecindario.",
      },
    },
    learnMore: { en: "Learn More About Us", es: "Conozca Mas Sobre Nosotros" },
    yearsServing: { en: "Years Serving", es: "Anos Sirviendo" },
  },

  // Testimonials
  testimonials: {
    label: { en: "Testimonials", es: "Testimonios" },
    heading: { en: "What Our Customers Say", es: "Lo Que Dicen Nuestros Clientes" },
    subheading: {
      en: "Hundreds of happy families trust Pure Agua for their water quality needs.",
      es: "Cientos de familias felices confian en Pure Agua para sus necesidades de calidad de agua.",
    },
    reviews: [
      {
        name: "Maria R.",
        location: "Kissimmee, FL",
        text: {
          en: "We noticed the difference within the first week. The water tastes incredible and there is no more buildup on our fixtures. Pure Agua made the whole process so easy for our family.",
          es: "Notamos la diferencia en la primera semana. El agua sabe increible y ya no hay acumulacion en nuestros grifos. Pure Agua hizo todo el proceso muy facil para nuestra familia.",
        },
      },
      {
        name: "James T.",
        location: "Orlando, FL",
        text: {
          en: "After years of buying bottled water, we finally made the switch. The team was professional, quick to install, and the results speak for themselves. Our water has never been cleaner.",
          es: "Despues de anos comprando agua embotellada, finalmente hicimos el cambio. El equipo fue profesional, rapido en la instalacion, y los resultados hablan por si solos. Nuestra agua nunca ha estado mas limpia.",
        },
      },
      {
        name: "Sofia L.",
        location: "Kissimmee, FL",
        text: {
          en: "Being a new homeowner, I had no idea how bad our water was until the free test. Pure Agua explained everything clearly and installed a system that was perfect for our home. Highly recommend!",
          es: "Siendo nueva propietaria, no tenia idea de lo mala que era nuestra agua hasta la prueba gratuita. Pure Agua explico todo claramente e instalo un sistema perfecto para nuestro hogar. Altamente recomendado!",
        },
      },
      {
        name: "Carlos M.",
        location: "St. Cloud, FL",
        text: {
          en: "Our well water had a terrible sulfur smell for years. Pure Agua tested it and recommended the perfect system. The smell is completely gone and the water tastes fresh. Worth every penny.",
          es: "Nuestra agua de pozo tenia un terrible olor a azufre por anos. Pure Agua la analizo y recomendo el sistema perfecto. El olor desaparecio completamente y el agua sabe fresca. Vale cada centavo.",
        },
      },
      {
        name: "Linda P.",
        location: "Celebration, FL",
        text: {
          en: "I was tired of the white scale buildup on everything. Since Pure Agua installed our water softener, our glass shower doors stay crystal clear and my skin feels so much better.",
          es: "Estaba cansada de la acumulacion de sarro blanco en todo. Desde que Pure Agua instalo nuestro ablandador de agua, las puertas de vidrio de la ducha se mantienen cristalinas y mi piel se siente mucho mejor.",
        },
      },
      {
        name: "Roberto & Ana G.",
        location: "Davenport, FL",
        text: {
          en: "We have two young kids and wanted the safest water possible. The reverse osmosis system Pure Agua installed gives us peace of mind every single day. The installation was done in just a few hours.",
          es: "Tenemos dos ninos pequenos y queriamos el agua mas segura posible. El sistema de osmosis inversa que instalo Pure Agua nos da tranquilidad todos los dias. La instalacion se hizo en solo unas horas.",
        },
      },
      {
        name: "Deborah W.",
        location: "Apopka, FL",
        text: {
          en: "I called three companies before choosing Pure Agua. They were the most knowledgeable and the most honest. No pressure tactics, just straightforward advice and excellent work. My water quality has improved dramatically.",
          es: "Llame a tres companias antes de elegir Pure Agua. Fueron los mas conocedores y los mas honestos. Sin tacticas de presion, solo consejos directos y un trabajo excelente. La calidad de mi agua ha mejorado dramaticamente.",
        },
      },
      {
        name: "Michael S.",
        location: "Winter Haven, FL",
        text: {
          en: "The whole home filtration system has been a game changer. Our laundry is softer, the dishes come out spotless, and the drinking water tastes better than bottled. Pure Agua really knows their stuff.",
          es: "El sistema de filtracion para toda la casa ha sido un cambio total. Nuestra ropa sale mas suave, los platos salen impecables, y el agua potable sabe mejor que la embotellada. Pure Agua realmente sabe lo que hace.",
        },
      },
      {
        name: "Patricia H.",
        location: "Poinciana, FL",
        text: {
          en: "We have been customers for over two years now and the water quality has been consistently excellent. The maintenance service is convenient and the team always shows up on time. Could not be happier.",
          es: "Hemos sido clientes por mas de dos anos y la calidad del agua ha sido consistentemente excelente. El servicio de mantenimiento es conveniente y el equipo siempre llega a tiempo. No podriamos estar mas felices.",
        },
      },
      {
        name: "David & Karen R.",
        location: "Sanford, FL",
        text: {
          en: "Our well water was orange and full of iron. Pure Agua installed a well water treatment system and the difference is night and day. Crystal clear water from every faucet now. The lifetime warranty gives us total confidence.",
          es: "Nuestra agua de pozo era anaranjada y llena de hierro. Pure Agua instalo un sistema de tratamiento de agua de pozo y la diferencia es de noche y dia. Agua cristalina de cada grifo ahora. La garantia de por vida nos da total confianza.",
        },
      },
      {
        name: "Angela F.",
        location: "Lakeland, FL",
        text: {
          en: "From the free water test to the final installation, everything was smooth and professional. They explained every option without pushing us into anything expensive. Honest company with great results.",
          es: "Desde la prueba de agua gratuita hasta la instalacion final, todo fue fluido y profesional. Explicaron cada opcion sin presionarnos hacia nada costoso. Empresa honesta con excelentes resultados.",
        },
      },
    ],
  },

  // FAQ
  faq: {
    label: { en: "FAQ", es: "Preguntas Frecuentes" },
    heading: {
      en: "Common Questions About Water Filtration",
      es: "Preguntas Comunes Sobre Filtracion de Agua",
    },
    subheading: {
      en: "Have other questions? We are always happy to help. Reach out to our team and we will get back to you quickly.",
      es: "Tiene otras preguntas? Siempre estamos felices de ayudar. Contacte a nuestro equipo y le responderemos rapidamente.",
    },
    questions: [
      {
        question: {
          en: "What does the free water test include?",
          es: "Que incluye la prueba de agua gratuita?",
        },
        answer: {
          en: "Our comprehensive water test analyzes your home's water for hardness, chlorine levels, pH, iron, sediment, and other common Central Florida contaminants. We test water from multiple faucets to get a complete picture of your water quality. The test is completely free with no obligation to purchase.",
          es: "Nuestra prueba integral analiza el agua de su hogar para dureza, niveles de cloro, pH, hierro, sedimentos y otros contaminantes comunes de Florida Central. Analizamos agua de multiples grifos para obtener una imagen completa de la calidad de su agua. La prueba es completamente gratuita sin obligacion de compra.",
        },
      },
      {
        question: {
          en: "How long does installation take?",
          es: "Cuanto tiempo toma la instalacion?",
        },
        answer: {
          en: "Most installations are completed in a single day. Our certified technicians arrive prepared with everything needed and handle the entire process from start to finish. We also clean up after ourselves, so you can start enjoying pure water immediately.",
          es: "La mayoria de las instalaciones se completan en un solo dia. Nuestros tecnicos certificados llegan preparados con todo lo necesario y manejan todo el proceso de principio a fin. Tambien limpiamos despues, para que pueda comenzar a disfrutar de agua pura inmediatamente.",
        },
      },
      {
        question: {
          en: "Do you service well water and city water?",
          es: "Atienden agua de pozo y agua de la ciudad?",
        },
        answer: {
          en: "Yes! We design custom solutions for both city water and well water systems. Central Florida's city water often contains high chlorine and hard minerals, while well water can have iron, sulfur, and sediment issues. We address each situation with the right combination of filtration technology.",
          es: "Si! Disenamos soluciones personalizadas para sistemas de agua de la ciudad y agua de pozo. El agua de la ciudad de Florida Central a menudo contiene alto cloro y minerales duros, mientras que el agua de pozo puede tener problemas de hierro, azufre y sedimentos. Abordamos cada situacion con la combinacion correcta de tecnologia de filtracion.",
        },
      },
      {
        question: {
          en: "What areas do you serve in Central Florida?",
          es: "Que areas atienden en Florida Central?",
        },
        answer: {
          en: "We proudly serve a wide area across Central Florida including Kissimmee, Orlando, St. Cloud, Celebration, Davenport, Poinciana, Winter Garden, Apopka, Sanford, Winter Haven, Lakeland, Haines City, Clermont, Lake Nona, Winter Park, and Altamonte Springs. We cover Osceola, Orange, Polk, Seminole, and Lake counties. If you are unsure whether we cover your area, give us a call and we will let you know.",
          es: "Servimos con orgullo una amplia area en Florida Central incluyendo Kissimmee, Orlando, St. Cloud, Celebration, Davenport, Poinciana, Winter Garden, Apopka, Sanford, Winter Haven, Lakeland, Haines City, Clermont, Lake Nona, Winter Park y Altamonte Springs. Cubrimos los condados de Osceola, Orange, Polk, Seminole y Lake. Si no esta seguro de si cubrimos su area, llamenos y le informaremos.",
        },
      },
      {
        question: {
          en: "How much does a water filtration system cost?",
          es: "Cuanto cuesta un sistema de filtracion de agua?",
        },
        answer: {
          en: "Every home is different, which is why we provide custom quotes based on your specific water quality test results. We offer solutions for every budget, and we can discuss financing options to make clean water accessible for your family. Schedule a free water test to get your personalized recommendation.",
          es: "Cada hogar es diferente, por eso proporcionamos cotizaciones personalizadas basadas en los resultados de su prueba de calidad de agua. Ofrecemos soluciones para cada presupuesto, y podemos discutir opciones de financiamiento para hacer el agua limpia accesible para su familia. Programe una prueba de agua gratuita para obtener su recomendacion personalizada.",
        },
      },
      {
        question: {
          en: "Is maintenance required for the filtration system?",
          es: "Se requiere mantenimiento para el sistema de filtracion?",
        },
        answer: {
          en: "All filtration systems benefit from periodic maintenance to ensure optimal performance. We offer maintenance plans that include filter replacements and system checks. Our team will walk you through the maintenance schedule during installation so there are no surprises.",
          es: "Todos los sistemas de filtracion se benefician del mantenimiento periodico para asegurar un rendimiento optimo. Ofrecemos planes de mantenimiento que incluyen reemplazo de filtros y revisiones del sistema. Nuestro equipo le explicara el programa de mantenimiento durante la instalacion para que no haya sorpresas.",
        },
      },
    ],
  },

  // CTA
  cta: {
    label: { en: "Take the First Step", es: "De el Primer Paso" },
    heading: {
      en: "Ready for Cleaner, Healthier Water in Your Home?",
      es: "Listo para Agua Mas Limpia y Saludable en Su Hogar?",
    },
    description: {
      en: "Schedule your free water test today. No pressure, no obligation -- just an honest assessment of your water quality and how we can help.",
      es: "Programe su prueba de agua gratuita hoy. Sin presion, sin compromiso -- solo una evaluacion honesta de la calidad de su agua y como podemos ayudar.",
    },
    scheduleFree: { en: "Schedule Free Water Test", es: "Programe Prueba Gratuita" },
    callUs: { en: "Call Us Today", es: "Llamenos Hoy" },
  },

  // Footer
  footer: {
    tagline: {
      en: "Pure Water, Nothing Less. Family-owned water filtration experts serving Central Florida.",
      es: "Agua Pura, Nada Menos. Expertos en filtracion de agua de propiedad familiar sirviendo a Florida Central.",
    },
    company: { en: "Company", es: "Compania" },
    servicesLabel: { en: "Services", es: "Servicios" },
    contactLabel: { en: "Contact", es: "Contacto" },
    aboutUs: { en: "About Us", es: "Sobre Nosotros" },
    contactUs: { en: "Contact Us", es: "Contactenos" },
    wholeHomeFiltration: { en: "Whole Home Filtration", es: "Filtracion para Toda la Casa" },
    reverseOsmosis: { en: "Reverse Osmosis", es: "Osmosis Inversa" },
    waterSoftening: { en: "Water Softening", es: "Ablandamiento de Agua" },
    wellWaterSystems: { en: "Well Water Systems", es: "Sistemas de Agua de Pozo" },
    followUs: { en: "Follow Us", es: "Siguenos" },
    allRightsReserved: { en: "All rights reserved.", es: "Todos los derechos reservados." },
    servingCentralFlorida: {
      en: "Serving Central Florida with clean water solutions.",
      es: "Sirviendo a Florida Central con soluciones de agua limpia.",
    },
  },

  // About Hero
  aboutHero: {
    label: { en: "About Pure Agua Enterprises", es: "Sobre Pure Agua Enterprises" },
    headline1: { en: "A Family Committed to", es: "Una Familia Comprometida con" },
    headline2: { en: "Cleaner Water.", es: "Agua Mas Limpia." },
    description: {
      en: "We are a younger, thriving company that keeps up with modern changes and are eager to make a difference in every home we serve.",
      es: "Somos una empresa joven y prospera que se mantiene al dia con los cambios modernos y esta ansiosa de hacer la diferencia en cada hogar que servimos.",
    },
  },

  // Our Story
  ourStory: {
    label: { en: "Our Story", es: "Nuestra Historia" },
    heading: { en: "Built on Family, Driven by Quality", es: "Construido en Familia, Impulsado por la Calidad" },
    p1: {
      en: "Pure Agua Enterprises was born from a simple belief: every family deserves access to clean, pure water in their home. As a family-owned business based in Central Florida, we have spent over a decade making that belief a reality for hundreds of happy customers.",
      es: "Pure Agua Enterprises nacio de una creencia simple: cada familia merece acceso a agua limpia y pura en su hogar. Como un negocio familiar basado en Florida Central, hemos pasado mas de una decada haciendo esa creencia realidad para cientos de clientes felices.",
    },
    p2: {
      en: "We are not a faceless corporation. When you work with Pure Agua, you work with real people who care about the water your family drinks, cooks with, and bathes in. We take the time to understand your specific water challenges and design solutions that actually work.",
      es: "No somos una corporacion sin rostro. Cuando trabaja con Pure Agua, trabaja con personas reales que se preocupan por el agua que su familia bebe, cocina y se bana. Nos tomamos el tiempo para entender sus desafios especificos de agua y disenar soluciones que realmente funcionan.",
    },
    p3: {
      en: "What sets us apart is our commitment to staying current. Water quality challenges evolve, and so do we. We continuously invest in the latest filtration technologies and training to ensure our customers always get the best solutions available.",
      es: "Lo que nos distingue es nuestro compromiso de mantenernos actualizados. Los desafios de calidad del agua evolucionan, y nosotros tambien. Invertimos continuamente en las ultimas tecnologias de filtracion y capacitacion para asegurar que nuestros clientes siempre obtengan las mejores soluciones disponibles.",
    },
    familyOwned: { en: "Family Owned", es: "Negocio Familiar" },
    sinceDayOne: { en: "Since Day One", es: "Desde el Primer Dia" },
  },

  // Values
  values: {
    label: { en: "Our Values", es: "Nuestros Valores" },
    heading: { en: "What We Stand For", es: "Lo Que Defendemos" },
    subheading: {
      en: "These principles guide every decision we make and every system we install.",
      es: "Estos principios guian cada decision que tomamos y cada sistema que instalamos.",
    },
    items: [
      {
        title: { en: "Family First", es: "Familia Primero" },
        description: {
          en: "We treat every customer like family. Your home is personal, and so is our service.",
          es: "Tratamos a cada cliente como familia. Su hogar es personal, y tambien lo es nuestro servicio.",
        },
      },
      {
        title: { en: "Quality Guaranteed", es: "Calidad Garantizada" },
        description: {
          en: "We stand behind every installation with our lifetime warranty and ongoing support.",
          es: "Respaldamos cada instalacion con nuestra garantia de por vida y soporte continuo.",
        },
      },
      {
        title: { en: "Modern Solutions", es: "Soluciones Modernas" },
        description: {
          en: "We stay current with the latest filtration technology to give you the best results available.",
          es: "Nos mantenemos al dia con la ultima tecnologia de filtracion para darle los mejores resultados disponibles.",
        },
      },
      {
        title: { en: "Customer Focused", es: "Enfocado en el Cliente" },
        description: {
          en: "Hundreds of happy customers across Central Florida trust us with their water quality.",
          es: "Cientos de clientes felices en Florida Central confian en nosotros con su calidad de agua.",
        },
      },
      {
        title: { en: "Eco-Conscious", es: "Eco-Consciente" },
        description: {
          en: "Our systems reduce plastic bottle waste and use environmentally responsible filtration methods.",
          es: "Nuestros sistemas reducen los desechos de botellas plasticas y usan metodos de filtracion ambientalmente responsables.",
        },
      },
      {
        title: { en: "Expert Knowledge", es: "Conocimiento Experto" },
        description: {
          en: "Over a decade of hands-on experience solving Central Florida's unique water challenges.",
          es: "Mas de una decada de experiencia practica resolviendo los desafios unicos del agua de Florida Central.",
        },
      },
    ],
  },

  // Why Choose Us
  whyChooseUs: {
    label: { en: "Why Pure Agua", es: "Por Que Pure Agua" },
    heading: { en: "The Pure Agua Difference", es: "La Diferencia de Pure Agua" },
    description: {
      en: "We are not just another water filtration company. We are your neighbors, committed to delivering the cleanest water to every home in Central Florida. Here is what makes us different.",
      es: "No somos solo otra empresa de filtracion de agua. Somos sus vecinos, comprometidos a entregar el agua mas limpia a cada hogar en Florida Central. Esto es lo que nos hace diferentes.",
    },
    reasons: {
      en: [
        "Over 10 years serving Central Florida families",
        "Custom solutions designed for your specific water quality",
        "Free comprehensive water testing at no obligation",
        "Family-owned business with personal attention to every customer",
        "Modern technology and up-to-date filtration methods",
        "Hundreds of satisfied customers across Central Florida",
        "Professional installation completed in as little as one day",
        "Ongoing support and maintenance for your peace of mind",
        "Lifetime warranty on all system installations",
      ],
      es: [
        "Mas de 10 anos sirviendo a familias de Florida Central",
        "Soluciones personalizadas disenadas para su calidad de agua especifica",
        "Pruebas de agua integrales gratuitas sin compromiso",
        "Negocio familiar con atencion personal a cada cliente",
        "Tecnologia moderna y metodos de filtracion actualizados",
        "Cientos de clientes satisfechos en Florida Central",
        "Instalacion profesional completada en tan solo un dia",
        "Soporte continuo y mantenimiento para su tranquilidad",
        "Garantia de por vida en todas las instalaciones de sistemas",
      ],
    },
  },

  // Services Hero
  servicesHero: {
    label: { en: "Our Services", es: "Nuestros Servicios" },
    headline1: { en: "Custom Water Solutions", es: "Soluciones de Agua Personalizadas" },
    headline2: { en: "For Every Home.", es: "Para Cada Hogar." },
    description: {
      en: "From whole-home filtration to under-sink reverse osmosis, we design and install systems tailored to your water quality needs.",
      es: "Desde filtracion para toda la casa hasta osmosis inversa bajo el fregadero, disenamos e instalamos sistemas adaptados a sus necesidades de calidad de agua.",
    },
  },

  // Service Detail
  serviceDetail: {
    services: [
      {
        subtitle: { en: "Clean Water From Every Faucet", es: "Agua Limpia de Cada Grifo" },
        title: { en: "Whole Home Filtration", es: "Filtracion para Toda la Casa" },
        description: {
          en: "Our whole-home water filtration systems are installed at the point of entry, meaning every drop of water that enters your home is filtered. This protects your plumbing, appliances, and gives your family clean water for drinking, cooking, bathing, and laundry.",
          es: "Nuestros sistemas de filtracion para toda la casa se instalan en el punto de entrada, lo que significa que cada gota de agua que entra a su hogar es filtrada. Esto protege su plomeria, electrodomesticos, y le da a su familia agua limpia para beber, cocinar, banarse y lavar.",
        },
        features: {
          en: [
            "Point-of-entry installation treats all water in your home",
            "Removes chlorine, sediment, and common contaminants",
            "Protects pipes, water heaters, and appliances from scale",
            "Reduces soap and detergent usage by up to 40%",
            "Low maintenance with long-lasting filter media",
            "Professional installation typically completed in one day",
          ],
          es: [
            "La instalacion en punto de entrada trata toda el agua de su hogar",
            "Elimina cloro, sedimentos y contaminantes comunes",
            "Protege tuberias, calentadores de agua y electrodomesticos del sarro",
            "Reduce el uso de jabon y detergente hasta en un 40%",
            "Bajo mantenimiento con medios filtrantes de larga duracion",
            "Instalacion profesional tipicamente completada en un dia",
          ],
        },
      },
      {
        subtitle: { en: "Crystal-Clear Drinking Water", es: "Agua Potable Cristalina" },
        title: { en: "Reverse Osmosis Systems", es: "Sistemas de Osmosis Inversa" },
        description: {
          en: "Our under-sink reverse osmosis systems deliver the purest drinking water directly from your kitchen tap. Multi-stage filtration removes up to 99% of contaminants, including bacteria, heavy metals, and dissolved solids.",
          es: "Nuestros sistemas de osmosis inversa bajo el fregadero entregan el agua potable mas pura directamente de su grifo de cocina. La filtracion de multiples etapas elimina hasta el 99% de contaminantes, incluyendo bacterias, metales pesados y solidos disueltos.",
        },
        features: {
          en: [
            "Up to 99% contaminant removal including lead and arsenic",
            "Multi-stage filtration for superior water quality",
            "Installed under your kitchen sink for convenience",
            "Eliminates the need for bottled water",
            "Clean, fresh taste in every glass",
            "Periodic filter replacement keeps water quality optimal",
          ],
          es: [
            "Hasta 99% de eliminacion de contaminantes incluyendo plomo y arsenico",
            "Filtracion de multiples etapas para calidad de agua superior",
            "Instalado bajo su fregadero de cocina por conveniencia",
            "Elimina la necesidad de agua embotellada",
            "Sabor limpio y fresco en cada vaso",
            "El reemplazo periodico de filtros mantiene la calidad del agua optima",
          ],
        },
      },
      {
        subtitle: { en: "End Hard Water Problems", es: "Termine los Problemas de Agua Dura" },
        title: { en: "Water Softening", es: "Ablandamiento de Agua" },
        description: {
          en: "Hard water is one of the most common issues in Central Florida. Our water softening systems prevent scale buildup, protect your plumbing and appliances, and give you noticeably softer skin and hair.",
          es: "El agua dura es uno de los problemas mas comunes en Florida Central. Nuestros sistemas de ablandamiento de agua previenen la acumulacion de sarro, protegen su plomeria y electrodomesticos, y le dan piel y cabello notablemente mas suaves.",
        },
        features: {
          en: [
            "Prevents scale buildup in pipes and on fixtures",
            "Extends the life of water heaters and appliances",
            "Softer skin and healthier hair for the whole family",
            "Reduces spots on dishes and glassware",
            "Both salt-based and salt-free options available",
            "Customized to your water hardness levels",
          ],
          es: [
            "Previene la acumulacion de sarro en tuberias y grifos",
            "Extiende la vida de calentadores de agua y electrodomesticos",
            "Piel mas suave y cabello mas saludable para toda la familia",
            "Reduce manchas en platos y cristaleria",
            "Opciones con sal y sin sal disponibles",
            "Personalizado a sus niveles de dureza del agua",
          ],
        },
      },
      {
        subtitle: { en: "Specialized Well Water Treatment", es: "Tratamiento Especializado de Agua de Pozo" },
        title: { en: "Well Water Systems", es: "Sistemas de Agua de Pozo" },
        description: {
          en: "Florida well water comes with unique challenges -- iron staining, sulfur odors, sediment, and bacterial concerns. Our well water treatment systems are custom-designed to address your specific water issues, delivering clean, odor-free water throughout your entire home.",
          es: "El agua de pozo de Florida viene con desafios unicos -- manchas de hierro, olores de azufre, sedimentos y preocupaciones bacterianas. Nuestros sistemas de tratamiento de agua de pozo estan disenados a medida para abordar sus problemas especificos de agua, entregando agua limpia y sin olores en toda su casa.",
        },
        features: {
          en: [
            "Removes iron that causes orange staining on fixtures and laundry",
            "Eliminates sulfur and rotten egg odor from well water",
            "Multi-stage sediment filtration for crystal clear water",
            "UV and chemical-free bacteria treatment options",
            "Custom-designed based on your well water test results",
            "Lifetime warranty on all well water system installations",
          ],
          es: [
            "Elimina el hierro que causa manchas anaranjadas en grifos y ropa",
            "Elimina el azufre y el olor a huevo podrido del agua de pozo",
            "Filtracion de sedimentos de multiples etapas para agua cristalina",
            "Opciones de tratamiento de bacterias UV y sin quimicos",
            "Disenado a medida basado en los resultados de su prueba de agua de pozo",
            "Garantia de por vida en todas las instalaciones de sistemas de agua de pozo",
          ],
        },
      },
    ],
  },

  // Water Problems
  waterProblems: {
    label: { en: "Common Water Issues", es: "Problemas Comunes del Agua" },
    heading: { en: "Water Problems We Solve Every Day", es: "Problemas de Agua Que Resolvemos Cada Dia" },
    subheading: {
      en: "Central Florida has unique water quality challenges. We have the expertise and solutions to address every one of them.",
      es: "Florida Central tiene desafios unicos de calidad del agua. Tenemos la experiencia y soluciones para abordar cada uno de ellos.",
    },
    solution: { en: "Solution", es: "Solucion" },
    problems: [
      {
        title: { en: "Hard Water", es: "Agua Dura" },
        description: {
          en: "White buildup on faucets, spots on dishes, dry skin and hair. Central Florida water is notoriously hard.",
          es: "Acumulacion blanca en grifos, manchas en platos, piel y cabello secos. El agua de Florida Central es notoriamente dura.",
        },
        solution: { en: "Water Softening System", es: "Sistema de Ablandamiento de Agua" },
      },
      {
        title: { en: "Chlorine & Chemicals", es: "Cloro y Quimicos" },
        description: {
          en: "Unpleasant taste and smell from city water treatment. Can irritate skin and damage appliances over time.",
          es: "Sabor y olor desagradables del tratamiento del agua de la ciudad. Puede irritar la piel y danar electrodomesticos con el tiempo.",
        },
        solution: { en: "Whole Home Filtration", es: "Filtracion para Toda la Casa" },
      },
      {
        title: { en: "Bacteria & Contaminants", es: "Bacterias y Contaminantes" },
        description: {
          en: "Invisible threats in your water including bacteria, lead, and other harmful contaminants.",
          es: "Amenazas invisibles en su agua incluyendo bacterias, plomo y otros contaminantes daninos.",
        },
        solution: { en: "Reverse Osmosis System", es: "Sistema de Osmosis Inversa" },
      },
      {
        title: { en: "Iron & Sediment", es: "Hierro y Sedimentos" },
        description: {
          en: "Orange staining on sinks and laundry, gritty or discolored water, often from well water sources.",
          es: "Manchas anaranjadas en lavabos y ropa, agua arenosa o descolorida, a menudo de fuentes de agua de pozo.",
        },
        solution: { en: "Iron Filtration System", es: "Sistema de Filtracion de Hierro" },
      },
      {
        title: { en: "Sulfur Smell", es: "Olor a Azufre" },
        description: {
          en: "Rotten egg odor in your water, especially common in well water across Florida.",
          es: "Olor a huevo podrido en su agua, especialmente comun en agua de pozo en toda Florida.",
        },
        solution: { en: "Sulfur Removal System", es: "Sistema de Eliminacion de Azufre" },
      },
      {
        title: { en: "PFAS & PFOA", es: "PFAS y PFOA" },
        description: {
          en: "Emerging contaminants found in many Florida water supplies. Long-term health concerns require advanced filtration.",
          es: "Contaminantes emergentes encontrados en muchos suministros de agua de Florida. Las preocupaciones de salud a largo plazo requieren filtracion avanzada.",
        },
        solution: { en: "Advanced Filtration", es: "Filtracion Avanzada" },
      },
    ],
  },

  // Contact Hero
  contactHero: {
    label: { en: "Get In Touch", es: "Contactenos" },
    headline1: { en: "Schedule Your", es: "Programe Su" },
    headline2: { en: "Free Water Test.", es: "Prueba de Agua Gratis." },
    description: {
      en: "Ready for cleaner water? Fill out the form below or give us a call. We offer free, no-obligation water quality tests for homes across Central Florida.",
      es: "Listo para agua mas limpia? Complete el formulario a continuacion o llamenos. Ofrecemos pruebas de calidad de agua gratuitas y sin compromiso para hogares en toda Florida Central.",
    },
  },

  // Contact Form
  contactForm: {
    heading: { en: "We Would Love to Hear From You", es: "Nos Encantaria Saber de Usted" },
    description: {
      en: "Whether you want to schedule a free water test, have questions about our services, or need help with an existing system, we are here to help.",
      es: "Ya sea que quiera programar una prueba de agua gratuita, tenga preguntas sobre nuestros servicios, o necesite ayuda con un sistema existente, estamos aqui para ayudar.",
    },
    serviceArea: { en: "Service Area", es: "Area de Servicio" },
    emailUs: { en: "Email Us", es: "Envienos un Correo" },
    contactThrough: { en: "Contact us through the form", es: "Contactenos a traves del formulario" },
    respondWithin: { en: "We respond within 24 hours", es: "Respondemos dentro de 24 horas" },
    hours: { en: "Hours", es: "Horario" },
    monSat: { en: "Monday - Saturday: 9AM - 6PM", es: "Lunes - Sabado: 9AM - 6PM" },
    sunClosed: { en: "Sunday: Closed", es: "Domingo: Cerrado" },
    formTitle: { en: "Request a Free Water Test", es: "Solicite una Prueba de Agua Gratis" },
    fullName: { en: "Full Name", es: "Nombre Completo" },
    yourName: { en: "Your name", es: "Su nombre" },
    phone: { en: "Phone Number", es: "Numero de Telefono" },
    email: { en: "Email Address", es: "Correo Electronico" },
    serviceInterest: { en: "What service are you interested in?", es: "En que servicio esta interesado?" },
    selectService: { en: "Select a service", es: "Seleccione un servicio" },
    freeWaterTest: { en: "Free Water Test", es: "Prueba de Agua Gratis" },
    wholeHome: { en: "Whole Home Filtration", es: "Filtracion para Toda la Casa" },
    reverseOsmosisOpt: { en: "Reverse Osmosis", es: "Osmosis Inversa" },
    waterSofteningOpt: { en: "Water Softening", es: "Ablandamiento de Agua" },
    wellWaterOpt: { en: "Well Water Systems", es: "Sistemas de Agua de Pozo" },
    maintenance: { en: "System Maintenance", es: "Mantenimiento del Sistema" },
    other: { en: "Other", es: "Otro" },
    preferredDate: { en: "Preferred Date", es: "Fecha Preferida" },
    preferredTime: { en: "Preferred Time", es: "Hora Preferida" },
    selectTime: { en: "Select a time", es: "Seleccione una hora" },
    morning: { en: "Morning (9AM - 12PM)", es: "Manana (9AM - 12PM)" },
    afternoon: { en: "Afternoon (12PM - 3PM)", es: "Tarde (12PM - 3PM)" },
    evening: { en: "Late Afternoon (3PM - 6PM)", es: "Final de la Tarde (3PM - 6PM)" },
    message: { en: "Message", es: "Mensaje" },
    messagePlaceholder: {
      en: "Tell us about your water concerns or questions...",
      es: "Cuentenos sobre sus preocupaciones o preguntas sobre el agua...",
    },
    scheduleButton: { en: "Schedule Free Water Test", es: "Programe Prueba de Agua Gratis" },
    noObligationNote: {
      en: "No obligation. We will contact you within 24 hours.",
      es: "Sin compromiso. Le contactaremos dentro de 24 horas.",
    },
    successTitle: { en: "Message Sent!", es: "Mensaje Enviado!" },
    successMessage: {
      en: "Thank you for reaching out. We will get back to you within 24 hours to schedule your free water test.",
      es: "Gracias por contactarnos. Le responderemos dentro de 24 horas para programar su prueba de agua gratuita.",
    },
  },

  // Chat Widget
  chatWidget: {
    title: { en: "Need Help?", es: "Necesita Ayuda?" },
    subtitle: { en: "Chat with us", es: "Hable con nosotros" },
    greeting: {
      en: "Hi! How can we help you today?",
      es: "Hola! Como podemos ayudarle hoy?",
    },
    scheduleTest: { en: "Schedule a Water Test", es: "Programar una Prueba de Agua" },
    askQuestion: { en: "Ask a Question", es: "Hacer una Pregunta" },
    callNow: { en: "Call Us Now", es: "Llamenos Ahora" },
  },

  // Before/After
  beforeAfter: {
    label: { en: "See the Difference", es: "Vea la Diferencia" },
    heading: { en: "Before & After Water Filtration", es: "Antes y Despues de la Filtracion de Agua" },
    subheading: {
      en: "See the visible difference our filtration systems make in real Central Florida homes.",
      es: "Vea la diferencia visible que nuestros sistemas de filtracion hacen en hogares reales de Florida Central.",
    },
    before: { en: "Before", es: "Antes" },
    after: { en: "After", es: "Despues" },
    dragToCompare: { en: "Drag to compare", es: "Arrastre para comparar" },
  },

  // About Stats
  aboutStats: {
    homesServed: { en: "Homes Served", es: "Hogares Atendidos" },
    yearsExperience: { en: "Years Experience", es: "Anos de Experiencia" },
    satisfactionRate: { en: "Satisfaction Rate", es: "Tasa de Satisfaccion" },
    systemsInstalled: { en: "Systems Installed", es: "Sistemas Instalados" },
  },

  // Service Area
  serviceArea: {
    label: { en: "Service Area", es: "Area de Servicio" },
    heading: { en: "Serving Central Florida Families", es: "Sirviendo a Familias de Florida Central" },
    description: {
      en: "We proudly provide water filtration solutions across the greater Central Florida region. If you are in our service area, schedule your free water test today.",
      es: "Proporcionamos con orgullo soluciones de filtracion de agua en toda la region de Florida Central. Si esta en nuestra area de servicio, programe su prueba de agua gratuita hoy.",
    },
    areas: [
      { name: "Kissimmee", detail: { en: "Full Service Area", es: "Area de Servicio Completo" } },
      { name: "Orlando", detail: { en: "Full Service Area", es: "Area de Servicio Completo" } },
      { name: "St. Cloud", detail: { en: "Full Service Area", es: "Area de Servicio Completo" } },
      { name: "Celebration", detail: { en: "Full Service Area", es: "Area de Servicio Completo" } },
      { name: "Davenport", detail: { en: "Full Service Area", es: "Area de Servicio Completo" } },
      { name: "Winter Garden", detail: { en: "Full Service Area", es: "Area de Servicio Completo" } },
      { name: "Poinciana", detail: { en: "Full Service Area", es: "Area de Servicio Completo" } },
      { name: "Apopka", detail: { en: "Service Available", es: "Servicio Disponible" } },
      { name: "Sanford", detail: { en: "Service Available", es: "Servicio Disponible" } },
      { name: "Winter Haven", detail: { en: "Service Available", es: "Servicio Disponible" } },
      { name: "Lakeland", detail: { en: "Service Available", es: "Servicio Disponible" } },
      { name: "Haines City", detail: { en: "Service Available", es: "Servicio Disponible" } },
      { name: "Clermont", detail: { en: "Service Available", es: "Servicio Disponible" } },
      { name: "Lake Nona", detail: { en: "Service Available", es: "Servicio Disponible" } },
      { name: "Winter Park", detail: { en: "Service Available", es: "Servicio Disponible" } },
      { name: "Altamonte Springs", detail: { en: "Service Available", es: "Servicio Disponible" } },
    ],
    callForAvailability: { en: "Not listed? Call us to check availability in your area.", es: "No esta en la lista? Llamenos para verificar disponibilidad en su area." },
  },

  // Guarantee
  guarantee: {
    label: { en: "Our Guarantee", es: "Nuestra Garantia" },
    heading: { en: "We Stand Behind Every Installation", es: "Respaldamos Cada Instalacion" },
    description: {
      en: "When you choose Pure Agua, you are choosing a team that puts your family's water quality first. We are not satisfied until you are.",
      es: "Cuando elige Pure Agua, esta eligiendo un equipo que pone la calidad del agua de su familia primero. No estamos satisfechos hasta que usted lo este.",
    },
    items: [
      {
        title: { en: "Satisfaction Guaranteed", es: "Satisfaccion Garantizada" },
        description: { en: "If you are not happy with the results, we will make it right. Period.", es: "Si no esta contento con los resultados, lo haremos bien. Punto." },
      },
      {
        title: { en: "Professional Installation", es: "Instalacion Profesional" },
        description: { en: "Licensed, insured technicians with years of hands-on experience.", es: "Tecnicos licenciados y asegurados con anos de experiencia practica." },
      },
      {
        title: { en: "Ongoing Support", es: "Soporte Continuo" },
        description: { en: "We do not disappear after the install. Maintenance plans and support are always available.", es: "No desaparecemos despues de la instalacion. Los planes de mantenimiento y soporte siempre estan disponibles." },
      },
      {
        title: { en: "Lifetime Warranty", es: "Garantia de Por Vida" },
        description: { en: "Every system we install is backed by our lifetime warranty. We stand behind the quality of our products and workmanship for as long as you own your home.", es: "Cada sistema que instalamos esta respaldado por nuestra garantia de por vida. Respaldamos la calidad de nuestros productos y mano de obra mientras sea dueno de su hogar." },
      },
    ],
  },

  // Common
  common: {
    home: { en: "Home", es: "Inicio" },
    about: { en: "About", es: "Nosotros" },
    services: { en: "Services", es: "Servicios" },
    contact: { en: "Contact", es: "Contacto" },
    gallery: { en: "Gallery", es: "Galeria" },
    warranty: { en: "Warranty", es: "Garantia" },
    financing: { en: "Financing", es: "Financiamiento" },
    resources: { en: "Resources", es: "Recursos" },
    careers: { en: "Careers", es: "Carreras" },
    allServices: { en: "All Services", es: "Todos los Servicios" },
    company: { en: "Company", es: "Empresa" },
    support: { en: "Support", es: "Soporte" },
    wholeHome: { en: "Whole Home Filtration", es: "Filtracion para Toda la Casa" },
    reverseOsmosis: { en: "Reverse Osmosis", es: "Osmosis Inversa" },
    waterSoftening: { en: "Water Softening", es: "Ablandamiento de Agua" },
    wellWater: { en: "Well Water Systems", es: "Sistemas de Agua de Pozo" },
    learnMore: { en: "Learn More", es: "Saber Mas" },
    getStarted: { en: "Get Started", es: "Comenzar" },
    viewAll: { en: "View All", es: "Ver Todo" },
    scheduleTest: { en: "Schedule Free Water Test", es: "Programe Prueba de Agua Gratis" },
  },

  // ============================
  // INDIVIDUAL SERVICE PAGES
  // ============================

  // Whole Home Filtration Page
  wholeHomePage: {
    heroLabel: { en: "Whole Home Filtration", es: "Filtracion para Toda la Casa" },
    heroHeadline1: { en: "Clean Water From", es: "Agua Limpia Desde" },
    heroHeadline2: { en: "Every Faucet.", es: "Cada Grifo." },
    heroDescription: {
      en: "Our point-of-entry systems filter every drop of water that enters your home, protecting your family, pipes, and appliances.",
      es: "Nuestros sistemas de punto de entrada filtran cada gota de agua que ingresa a su hogar, protegiendo a su familia, tuberias y electrodomesticos.",
    },
    featuresLabel: { en: "Key Benefits", es: "Beneficios Clave" },
    featuresHeading: { en: "Why Whole Home Filtration?", es: "Por Que Filtracion para Toda la Casa?" },
    features: [
      {
        title: { en: "Every Faucet Protected", es: "Cada Grifo Protegido" },
        description: { en: "Point-of-entry installation means all water in your home is filtered before it reaches any tap, shower, or appliance.", es: "La instalacion en punto de entrada significa que toda el agua de su hogar se filtra antes de llegar a cualquier grifo, ducha o electrodomestico." },
      },
      {
        title: { en: "Chlorine Removal", es: "Eliminacion de Cloro" },
        description: { en: "Remove the harsh chlorine taste and smell from city water for better tasting and smelling water throughout your home.", es: "Elimine el sabor y olor fuerte del cloro del agua de la ciudad para agua con mejor sabor y olor en toda su casa." },
      },
      {
        title: { en: "Appliance Protection", es: "Proteccion de Electrodomesticos" },
        description: { en: "Filtered water extends the life of water heaters, dishwashers, and washing machines by preventing scale and sediment buildup.", es: "El agua filtrada extiende la vida de calentadores de agua, lavavajillas y lavadoras al prevenir la acumulacion de sarro y sedimentos." },
      },
      {
        title: { en: "Better Skin & Hair", es: "Mejor Piel y Cabello" },
        description: { en: "Without chlorine and contaminants, your skin stays moisturized and your hair stays healthier after every shower.", es: "Sin cloro ni contaminantes, su piel se mantiene hidratada y su cabello mas saludable despues de cada ducha." },
      },
      {
        title: { en: "Low Maintenance", es: "Bajo Mantenimiento" },
        description: { en: "Our systems use long-lasting filter media that only needs to be replaced every 5-7 years, making upkeep simple.", es: "Nuestros sistemas usan medios filtrantes de larga duracion que solo necesitan reemplazarse cada 5-7 anos, haciendo el mantenimiento simple." },
      },
      {
        title: { en: "Cost Savings", es: "Ahorro de Costos" },
        description: { en: "Reduce spending on bottled water, cleaning products, and appliance repairs. Most families save hundreds per year.", es: "Reduzca gastos en agua embotellada, productos de limpieza y reparaciones de electrodomesticos. La mayoria de las familias ahorran cientos por ano." },
      },
    ],
    processLabel: { en: "Installation Process", es: "Proceso de Instalacion" },
    processHeading: { en: "How We Install Your System", es: "Como Instalamos Su Sistema" },
    processSteps: [
      {
        title: { en: "Water Quality Test", es: "Prueba de Calidad de Agua" },
        description: { en: "We test your water to identify exactly what contaminants need to be addressed.", es: "Probamos su agua para identificar exactamente que contaminantes necesitan ser tratados." },
      },
      {
        title: { en: "System Design", es: "Diseno del Sistema" },
        description: { en: "Based on your results, we design a custom filtration system sized for your home.", es: "Basado en sus resultados, disenamos un sistema de filtracion personalizado para su hogar." },
      },
      {
        title: { en: "Professional Install", es: "Instalacion Profesional" },
        description: { en: "Our certified technicians install your system in one day with minimal disruption.", es: "Nuestros tecnicos certificados instalan su sistema en un dia con minima interrupcion." },
      },
      {
        title: { en: "Quality Assurance", es: "Aseguramiento de Calidad" },
        description: { en: "We test the water again after installation to confirm your system is working perfectly.", es: "Probamos el agua de nuevo despues de la instalacion para confirmar que su sistema funciona perfectamente." },
      },
    ],
    faq: [
      {
        question: { en: "How long does installation take?", es: "Cuanto tiempo toma la instalacion?" },
        answer: { en: "Most whole-home filtration systems are installed in 4-6 hours. Our technicians handle everything from start to finish, and you will have filtered water the same day.", es: "La mayoria de los sistemas de filtracion para toda la casa se instalan en 4-6 horas. Nuestros tecnicos se encargan de todo de principio a fin, y tendra agua filtrada el mismo dia." },
      },
      {
        question: { en: "How often do filters need to be changed?", es: "Con que frecuencia se deben cambiar los filtros?" },
        answer: { en: "Our whole-home systems use high-capacity filter media that typically lasts 5-7 years before needing replacement, depending on water usage and quality.", es: "Nuestros sistemas para toda la casa usan medios filtrantes de alta capacidad que tipicamente duran 5-7 anos antes de necesitar reemplazo, dependiendo del uso y calidad del agua." },
      },
      {
        question: { en: "Will it affect my water pressure?", es: "Afectara mi presion de agua?" },
        answer: { en: "No. Our systems are designed to maintain optimal water pressure throughout your home. You will not notice any decrease in flow.", es: "No. Nuestros sistemas estan disenados para mantener la presion optima del agua en toda su casa. No notara ninguna disminucion en el flujo." },
      },
    ],
  },

  // Reverse Osmosis Page
  reverseOsmosisPage: {
    heroLabel: { en: "Reverse Osmosis", es: "Osmosis Inversa" },
    heroHeadline1: { en: "The Purest Drinking", es: "El Agua Potable" },
    heroHeadline2: { en: "Water Possible.", es: "Mas Pura Posible." },
    heroDescription: {
      en: "Multi-stage filtration removes up to 99% of contaminants, giving your family crystal-clear water directly from the tap.",
      es: "La filtracion de multiples etapas elimina hasta el 99% de los contaminantes, dandole a su familia agua cristalina directamente del grifo.",
    },
    featuresLabel: { en: "Why Choose RO", es: "Por Que Elegir OI" },
    featuresHeading: { en: "Superior Drinking Water Quality", es: "Calidad Superior de Agua Potable" },
    features: [
      {
        title: { en: "99% Contaminant Removal", es: "99% de Eliminacion de Contaminantes" },
        description: { en: "Reverse osmosis removes up to 99% of dissolved solids, lead, arsenic, fluoride, chlorine, and other harmful substances.", es: "La osmosis inversa elimina hasta el 99% de solidos disueltos, plomo, arsenico, fluoruro, cloro y otras sustancias daninas." },
      },
      {
        title: { en: "Better Than Bottled", es: "Mejor que Embotellada" },
        description: { en: "RO water is purer than most bottled water brands. Save money and eliminate plastic waste from your household.", es: "El agua de OI es mas pura que la mayoria de las marcas de agua embotellada. Ahorre dinero y elimine los desechos plasticos de su hogar." },
      },
      {
        title: { en: "Multi-Stage Filtration", es: "Filtracion de Multiples Etapas" },
        description: { en: "Our systems use 4-5 stages of filtration including sediment, carbon, and the RO membrane for comprehensive purification.", es: "Nuestros sistemas usan 4-5 etapas de filtracion incluyendo sedimentos, carbon y la membrana de OI para una purificacion integral." },
      },
      {
        title: { en: "Crystal-Clear Ice", es: "Hielo Cristalino" },
        description: { en: "Connect to your refrigerator ice maker for perfectly clear, great-tasting ice cubes every time.", es: "Conecte a la maquina de hielo de su refrigerador para cubos de hielo perfectamente claros y de gran sabor cada vez." },
      },
      {
        title: { en: "Perfect for Cooking", es: "Perfecto para Cocinar" },
        description: { en: "Pure water means better tasting coffee, tea, soups, and everything you cook. Taste the difference in every recipe.", es: "El agua pura significa cafe, te, sopas y todo lo que cocine con mejor sabor. Sienta la diferencia en cada receta." },
      },
      {
        title: { en: "Compact Design", es: "Diseno Compacto" },
        description: { en: "Installed neatly under your kitchen sink with a dedicated faucet. No counter space needed.", es: "Instalado ordenadamente bajo su fregadero de cocina con un grifo dedicado. No necesita espacio en el mostrador." },
      },
    ],
    processLabel: { en: "How It Works", es: "Como Funciona" },
    processHeading: { en: "The RO Purification Process", es: "El Proceso de Purificacion OI" },
    processSteps: [
      {
        title: { en: "Pre-Filtration", es: "Pre-Filtracion" },
        description: { en: "Water passes through sediment and carbon filters to remove larger particles and chlorine.", es: "El agua pasa a traves de filtros de sedimentos y carbon para eliminar particulas mas grandes y cloro." },
      },
      {
        title: { en: "RO Membrane", es: "Membrana OI" },
        description: { en: "The semipermeable membrane removes up to 99% of dissolved contaminants at the molecular level.", es: "La membrana semipermeable elimina hasta el 99% de contaminantes disueltos a nivel molecular." },
      },
      {
        title: { en: "Post-Filtration", es: "Post-Filtracion" },
        description: { en: "A final carbon polish ensures the purest taste before water reaches your dedicated faucet.", es: "Un pulido final de carbon asegura el sabor mas puro antes de que el agua llegue a su grifo dedicado." },
      },
    ],
    faq: [
      {
        question: { en: "How much water does the system waste?", es: "Cuanta agua desperdicia el sistema?" },
        answer: { en: "Modern RO systems are much more efficient than older models. Our systems have a 3:1 or better ratio, meaning only 3 gallons are used to produce 1 gallon of pure water. The waste water can be redirected for irrigation.", es: "Los sistemas modernos de OI son mucho mas eficientes que los modelos antiguos. Nuestros sistemas tienen una relacion de 3:1 o mejor, lo que significa que solo se usan 3 galones para producir 1 galon de agua pura. El agua residual puede redirigirse para riego." },
      },
      {
        question: { en: "How often are filter changes needed?", es: "Con que frecuencia se necesitan cambios de filtro?" },
        answer: { en: "Pre and post filters should be changed every 6-12 months, while the RO membrane lasts 2-3 years. We offer maintenance plans to handle this for you.", es: "Los filtros pre y post deben cambiarse cada 6-12 meses, mientras que la membrana de OI dura 2-3 anos. Ofrecemos planes de mantenimiento para encargarnos de esto por usted." },
      },
      {
        question: { en: "Does RO remove minerals I need?", es: "La OI elimina minerales que necesito?" },
        answer: { en: "While RO does remove some beneficial minerals, you get far more minerals from food than water. We also offer remineralization filters that add back healthy minerals for those who prefer it.", es: "Aunque la OI elimina algunos minerales beneficiosos, usted obtiene muchos mas minerales de los alimentos que del agua. Tambien ofrecemos filtros de remineralizacion que agregan minerales saludables para quienes lo prefieran." },
      },
    ],
  },

  // Water Softening Page
  waterSofteningPage: {
    heroLabel: { en: "Water Softening", es: "Ablandamiento de Agua" },
    heroHeadline1: { en: "End Hard Water", es: "Termine los Problemas" },
    heroHeadline2: { en: "Problems Forever.", es: "de Agua Dura." },
    heroDescription: {
      en: "Protect your home from scale buildup, extend the life of your appliances, and enjoy noticeably softer skin and hair.",
      es: "Proteja su hogar de la acumulacion de sarro, extienda la vida de sus electrodomesticos y disfrute de piel y cabello notablemente mas suaves.",
    },
    featuresLabel: { en: "Before & After", es: "Antes y Despues" },
    featuresHeading: { en: "Life Without Hard Water", es: "La Vida Sin Agua Dura" },
    beforeAfterItems: [
      {
        before: { en: "White crusty buildup on faucets and showerheads", es: "Acumulacion blanca y costrosa en grifos y duchas" },
        after: { en: "Sparkling clean fixtures that stay spotless longer", es: "Grifos brillantes que se mantienen limpios por mas tiempo" },
      },
      {
        before: { en: "Spots and film on dishes and glassware", es: "Manchas y pelicula en platos y cristaleria" },
        after: { en: "Crystal-clear glasses straight from the dishwasher", es: "Vasos cristalinos directo del lavavajillas" },
      },
      {
        before: { en: "Dry, itchy skin and brittle hair after showers", es: "Piel seca y con picazon y cabello fragil despues de duchas" },
        after: { en: "Softer skin and silkier, healthier hair every day", es: "Piel mas suave y cabello mas sedoso y saludable cada dia" },
      },
      {
        before: { en: "Scale buildup reducing water heater efficiency", es: "Acumulacion de sarro reduciendo la eficiencia del calentador de agua" },
        after: { en: "Appliances running at peak efficiency, lasting years longer", es: "Electrodomesticos funcionando con maxima eficiencia, durando anos mas" },
      },
      {
        before: { en: "Using extra soap and detergent for laundry", es: "Usando jabon y detergente extra para la ropa" },
        after: { en: "Up to 50% less soap needed, softer and brighter clothes", es: "Hasta 50% menos jabon necesario, ropa mas suave y brillante" },
      },
      {
        before: { en: "Faded, stiff laundry even with premium detergent", es: "Ropa descolorida y rigida incluso con detergente premium" },
        after: { en: "Brighter colors and softer fabrics load after load", es: "Colores mas brillantes y telas mas suaves carga tras carga" },
      },
    ],
    processLabel: { en: "Installation Process", es: "Proceso de Instalacion" },
    processHeading: { en: "Getting Started Is Easy", es: "Comenzar Es Facil" },
    processSteps: [
      {
        title: { en: "Hardness Test", es: "Prueba de Dureza" },
        description: { en: "We test your water to measure exact hardness levels and determine the right system size.", es: "Probamos su agua para medir los niveles exactos de dureza y determinar el tamano correcto del sistema." },
      },
      {
        title: { en: "System Selection", es: "Seleccion del Sistema" },
        description: { en: "Choose between salt-based and salt-free options based on your needs and preferences.", es: "Elija entre opciones con sal y sin sal basadas en sus necesidades y preferencias." },
      },
      {
        title: { en: "Same-Day Install", es: "Instalacion el Mismo Dia" },
        description: { en: "Professional installation completed in just a few hours with immediate results.", es: "Instalacion profesional completada en solo unas horas con resultados inmediatos." },
      },
    ],
    faq: [
      {
        question: { en: "Salt-based vs salt-free: which is better?", es: "Con sal vs sin sal: cual es mejor?" },
        answer: { en: "Salt-based softeners are the gold standard for true water softening and are best for very hard water. Salt-free conditioners prevent scale but do not technically soften water. We help you choose based on your hardness levels, health considerations, and preferences.", es: "Los ablandadores con sal son el estandar de oro para el verdadero ablandamiento del agua y son mejores para agua muy dura. Los acondicionadores sin sal previenen el sarro pero no ablandan tecnicamente el agua. Le ayudamos a elegir basado en sus niveles de dureza, consideraciones de salud y preferencias." },
      },
      {
        question: { en: "Will soft water feel slippery?", es: "El agua blanda se sentira resbalosa?" },
        answer: { en: "Some people notice a silky feeling at first, which is actually your natural skin oils being preserved instead of stripped by hard water minerals. Most people love the feeling once they adjust, usually within a week.", es: "Algunas personas notan una sensacion sedosa al principio, que en realidad son los aceites naturales de su piel siendo preservados en lugar de eliminados por los minerales del agua dura. La mayoria de las personas aman la sensacion una vez que se ajustan, generalmente dentro de una semana." },
      },
      {
        question: { en: "How much salt does it use?", es: "Cuanta sal usa?" },
        answer: { en: "A typical household uses one 40-pound bag of salt per month, costing roughly $5-7. Modern high-efficiency systems use even less. We set up delivery schedules so you never have to think about it.", es: "Un hogar tipico usa una bolsa de 40 libras de sal por mes, costando aproximadamente $5-7. Los sistemas modernos de alta eficiencia usan aun menos. Configuramos horarios de entrega para que nunca tenga que pensar en ello." },
      },
    ],
  },

  // Well Water Page
  wellWaterPage: {
    heroLabel: { en: "Well Water Treatment", es: "Tratamiento de Agua de Pozo" },
    heroHeadline1: { en: "Solve Well Water", es: "Resuelva los Problemas" },
    heroHeadline2: { en: "Challenges.", es: "del Agua de Pozo." },
    heroDescription: {
      en: "Custom-designed treatment systems for iron, sulfur, bacteria, and sediment issues common in Florida well water.",
      es: "Sistemas de tratamiento disenados a medida para problemas de hierro, azufre, bacterias y sedimentos comunes en el agua de pozo de Florida.",
    },
    featuresLabel: { en: "Common Issues", es: "Problemas Comunes" },
    featuresHeading: { en: "Well Water Problems We Solve", es: "Problemas de Agua de Pozo Que Resolvemos" },
    problems: [
      {
        problem: { en: "Orange/rust stains on fixtures, laundry, and toilets", es: "Manchas anaranjadas/oxido en grifos, ropa y sanitarios" },
        solution: { en: "Our iron filtration systems remove dissolved and particulate iron, eliminating stains at the source.", es: "Nuestros sistemas de filtracion de hierro eliminan el hierro disuelto y particulado, eliminando las manchas en la fuente." },
        cause: { en: "High Iron Content", es: "Alto Contenido de Hierro" },
      },
      {
        problem: { en: "Rotten egg smell coming from every tap", es: "Olor a huevo podrido proveniente de cada grifo" },
        solution: { en: "Hydrogen sulfide removal systems eliminate the odor completely, giving you fresh, clean-smelling water.", es: "Los sistemas de eliminacion de sulfuro de hidrogeno eliminan el olor completamente, dandole agua fresca y con olor limpio." },
        cause: { en: "Sulfur / Hydrogen Sulfide", es: "Azufre / Sulfuro de Hidrogeno" },
      },
      {
        problem: { en: "Cloudy water, grit in faucet screens, clogged filters", es: "Agua turbia, arenilla en filtros de grifos, filtros tapados" },
        solution: { en: "Multi-stage sediment filtration captures particles of all sizes for consistently clear water.", es: "La filtracion de sedimentos de multiples etapas captura particulas de todos los tamanos para agua consistentemente clara." },
        cause: { en: "Sediment & Turbidity", es: "Sedimentos y Turbidez" },
      },
      {
        problem: { en: "Unsafe bacteria levels found in water testing", es: "Niveles inseguros de bacterias encontrados en pruebas de agua" },
        solution: { en: "UV sterilization and advanced treatment options provide chemical-free bacteria elimination, keeping your family safe.", es: "La esterilizacion UV y opciones de tratamiento avanzado proporcionan eliminacion de bacterias sin quimicos, manteniendo a su familia segura." },
        cause: { en: "Bacteria & Pathogens", es: "Bacterias y Patogenos" },
      },
    ],
    processLabel: { en: "Our Approach", es: "Nuestro Enfoque" },
    processHeading: { en: "Well Water Treatment Process", es: "Proceso de Tratamiento de Agua de Pozo" },
    processSteps: [
      {
        title: { en: "Comprehensive Well Test", es: "Prueba Integral del Pozo" },
        description: { en: "We perform a thorough water analysis testing for iron, sulfur, pH, bacteria, hardness, and more.", es: "Realizamos un analisis exhaustivo del agua probando hierro, azufre, pH, bacterias, dureza y mas." },
      },
      {
        title: { en: "Custom System Design", es: "Diseno de Sistema Personalizado" },
        description: { en: "Every well is different. We design a multi-stage treatment system specific to your well water issues.", es: "Cada pozo es diferente. Disenamos un sistema de tratamiento de multiples etapas especifico para los problemas de su agua de pozo." },
      },
      {
        title: { en: "Expert Installation", es: "Instalacion Experta" },
        description: { en: "Professional installation with proper sizing, plumbing, and system configuration for optimal results.", es: "Instalacion profesional con dimensionamiento adecuado, plomeria y configuracion del sistema para resultados optimos." },
      },
      {
        title: { en: "Ongoing Monitoring", es: "Monitoreo Continuo" },
        description: { en: "We schedule periodic testing to ensure your system continues to deliver clean water as conditions change.", es: "Programamos pruebas periodicas para asegurar que su sistema continue entregando agua limpia a medida que las condiciones cambian." },
      },
    ],
    faq: [
      {
        question: { en: "Can one system handle multiple well water issues?", es: "Un solo sistema puede manejar multiples problemas de agua de pozo?" },
        answer: { en: "Yes! Most of our well water installations are multi-stage systems that address iron, sulfur, sediment, and hardness all in one integrated solution. This is more effective and cost-efficient than separate systems.", es: "Si! La mayoria de nuestras instalaciones de agua de pozo son sistemas de multiples etapas que abordan hierro, azufre, sedimentos y dureza todo en una solucion integrada. Esto es mas efectivo y eficiente en costos que sistemas separados." },
      },
      {
        question: { en: "How do I know if my well water is safe?", es: "Como se si mi agua de pozo es segura?" },
        answer: { en: "The only way to know is through professional testing. Florida does not regulate private well water quality, so it is the homeowner's responsibility. We offer free well water testing to identify any health or quality concerns.", es: "La unica forma de saber es a traves de pruebas profesionales. Florida no regula la calidad del agua de pozo privado, por lo que es responsabilidad del propietario. Ofrecemos pruebas gratuitas de agua de pozo para identificar cualquier preocupacion de salud o calidad." },
      },
      {
        question: { en: "What if my well water quality changes over time?", es: "Que pasa si la calidad de mi agua de pozo cambia con el tiempo?" },
        answer: { en: "Well water can change due to seasonal variations, drought, construction nearby, or aquifer changes. Our systems are designed with flexibility to be adjusted, and we recommend annual testing to stay ahead of any changes.", es: "El agua de pozo puede cambiar debido a variaciones estacionales, sequia, construccion cercana o cambios en el acuifero. Nuestros sistemas estan disenados con flexibilidad para ser ajustados, y recomendamos pruebas anuales para adelantarse a cualquier cambio." },
      },
    ],
  },

  // Related Services
  relatedServices: {
    label: { en: "Related Services", es: "Servicios Relacionados" },
    heading: { en: "Explore Our Other Solutions", es: "Explore Nuestras Otras Soluciones" },
  },

  // ============================
  // GALLERY PAGE
  // ============================
  galleryPage: {
    heroLabel: { en: "Our Work", es: "Nuestro Trabajo" },
    heroHeadline1: { en: "See Our Work", es: "Vea Nuestro Trabajo" },
    heroHeadline2: { en: "In Action.", es: "En Accion." },
    heroDescription: {
      en: "Browse real installations, before and after transformations, and our team at work across Central Florida homes.",
      es: "Explore instalaciones reales, transformaciones de antes y despues, y nuestro equipo trabajando en hogares de Florida Central.",
    },
    filterAll: { en: "All", es: "Todo" },
    filterInstallations: { en: "Installations", es: "Instalaciones" },
    filterBeforeAfter: { en: "Before & After", es: "Antes y Despues" },
    filterTeam: { en: "Our Team", es: "Nuestro Equipo" },
    clientReplaceNote: { en: "Photos shown are representative. Actual project photos coming soon.", es: "Las fotos mostradas son representativas. Fotos reales de proyectos proximamente." },
  },

  // ============================
  // WARRANTY PAGE
  // ============================
  warrantyPage: {
    heroLabel: { en: "Warranty Information", es: "Informacion de Garantia" },
    heroHeadline1: { en: "Lifetime Warranty", es: "Garantia de" },
    heroHeadline2: { en: "Peace of Mind.", es: "Por Vida." },
    heroDescription: {
      en: "Every system we install is backed by our comprehensive lifetime warranty. We stand behind our work because we believe in it.",
      es: "Cada sistema que instalamos esta respaldado por nuestra garantia integral de por vida. Respaldamos nuestro trabajo porque creemos en el.",
    },
    coverageLabel: { en: "What Is Covered", es: "Que Esta Cubierto" },
    coverageHeading: { en: "Warranty Coverage Details", es: "Detalles de Cobertura de Garantia" },
    covered: [
      { en: "All filtration system components and tanks", es: "Todos los componentes del sistema de filtracion y tanques" },
      { en: "Control valves and electronic controls", es: "Valvulas de control y controles electronicos" },
      { en: "Filter media and internal parts", es: "Medios filtrantes y partes internas" },
      { en: "Installation workmanship and plumbing connections", es: "Mano de obra de instalacion y conexiones de plomeria" },
      { en: "System performance to specified levels", es: "Rendimiento del sistema a niveles especificados" },
      { en: "Annual maintenance inspections", es: "Inspecciones de mantenimiento anuales" },
    ],
    notCovered: [
      { en: "Damage from misuse, neglect, or unauthorized modifications", es: "Danos por mal uso, negligencia o modificaciones no autorizadas" },
      { en: "Consumable items (salt, pre-filters on scheduled replacement)", es: "Articulos consumibles (sal, pre-filtros en reemplazo programado)" },
      { en: "Damage from natural disasters, floods, or acts of God", es: "Danos por desastres naturales, inundaciones o actos de fuerza mayor" },
      { en: "Systems moved to a different location without our assistance", es: "Sistemas movidos a una ubicacion diferente sin nuestra asistencia" },
    ],
    processLabel: { en: "Warranty Claims", es: "Reclamos de Garantia" },
    processHeading: { en: "How to File a Warranty Claim", es: "Como Presentar un Reclamo de Garantia" },
    processSteps: [
      {
        title: { en: "Contact Us", es: "Contactenos" },
        description: { en: "Call us or fill out the contact form describing the issue with your system.", es: "Llamenos o complete el formulario de contacto describiendo el problema con su sistema." },
      },
      {
        title: { en: "Diagnosis Visit", es: "Visita de Diagnostico" },
        description: { en: "A technician will visit your home to inspect the system and identify the issue.", es: "Un tecnico visitara su hogar para inspeccionar el sistema e identificar el problema." },
      },
      {
        title: { en: "Repair or Replace", es: "Reparar o Reemplazar" },
        description: { en: "We repair or replace any covered components at no cost to you.", es: "Reparamos o reemplazamos cualquier componente cubierto sin costo para usted." },
      },
      {
        title: { en: "Follow-Up Test", es: "Prueba de Seguimiento" },
        description: { en: "We test your water after service to confirm everything is working perfectly.", es: "Probamos su agua despues del servicio para confirmar que todo funciona perfectamente." },
      },
    ],
    faq: [
      {
        question: { en: "How long is the warranty valid?", es: "Cuanto tiempo es valida la garantia?" },
        answer: { en: "Our lifetime warranty covers your system for as long as you own your home. If you sell your home, the warranty transfers to the new homeowner.", es: "Nuestra garantia de por vida cubre su sistema mientras sea dueno de su hogar. Si vende su casa, la garantia se transfiere al nuevo propietario." },
      },
      {
        question: { en: "Is the warranty transferable?", es: "La garantia es transferible?" },
        answer: { en: "Yes, our warranty transfers to the new homeowner if you sell your home. Simply contact us with the new owner's information and we will update the records.", es: "Si, nuestra garantia se transfiere al nuevo propietario si vende su casa. Simplemente contactenos con la informacion del nuevo propietario y actualizaremos los registros." },
      },
      {
        question: { en: "Do I need to register my warranty?", es: "Necesito registrar mi garantia?" },
        answer: { en: "No separate registration is needed. Your warranty is automatically activated upon installation. We keep detailed records of every system we install.", es: "No se necesita registro por separado. Su garantia se activa automaticamente al momento de la instalacion. Mantenemos registros detallados de cada sistema que instalamos." },
      },
    ],
  },

  // ============================
  // FINANCING PAGE
  // ============================
  financingPage: {
    heroLabel: { en: "Financing Options", es: "Opciones de Financiamiento" },
    heroHeadline1: { en: "Affordable Clean", es: "Agua Limpia" },
    heroHeadline2: { en: "Water Solutions.", es: "Asequible." },
    heroDescription: {
      en: "We believe every family deserves clean water. Flexible financing options make it easy to get started with no money down.",
      es: "Creemos que cada familia merece agua limpia. Las opciones de financiamiento flexibles hacen facil comenzar sin pago inicial.",
    },
    optionsLabel: { en: "Financing Plans", es: "Planes de Financiamiento" },
    optionsHeading: { en: "Choose the Plan That Works for You", es: "Elija el Plan Que Funcione Para Usted" },
    plans: [
      {
        name: { en: "0% Introductory", es: "0% Introductorio" },
        rate: "0%",
        term: { en: "12 months", es: "12 meses" },
        description: { en: "Pay zero interest when paid in full within 12 months. Perfect for smaller systems.", es: "Pague cero intereses cuando se pague en su totalidad dentro de 12 meses. Perfecto para sistemas mas pequenos." },
        features: {
          en: ["No interest for 12 months", "No down payment required", "Easy monthly payments", "Available on all systems"],
          es: ["Sin intereses por 12 meses", "No requiere pago inicial", "Pagos mensuales faciles", "Disponible en todos los sistemas"],
        },
      },
      {
        name: { en: "Low Monthly Payment", es: "Pago Mensual Bajo" },
        rate: "5.99%",
        term: { en: "60 months", es: "60 meses" },
        description: { en: "Spread the cost over 5 years with a low fixed rate. Ideal for whole-home systems.", es: "Distribuya el costo en 5 anos con una tasa fija baja. Ideal para sistemas para toda la casa." },
        features: {
          en: ["Fixed 5.99% APR", "60-month term", "Payments as low as $45/mo", "No prepayment penalty"],
          es: ["5.99% APR fijo", "Plazo de 60 meses", "Pagos desde $45/mes", "Sin penalidad por pago anticipado"],
        },
        popular: true,
      },
      {
        name: { en: "Extended Term", es: "Plazo Extendido" },
        rate: "7.99%",
        term: { en: "84 months", es: "84 meses" },
        description: { en: "The lowest possible monthly payment stretched over 7 years. Great for premium systems.", es: "El pago mensual mas bajo posible distribuido en 7 anos. Ideal para sistemas premium." },
        features: {
          en: ["Fixed 7.99% APR", "84-month term", "Lowest monthly payments", "No prepayment penalty"],
          es: ["7.99% APR fijo", "Plazo de 84 meses", "Los pagos mensuales mas bajos", "Sin penalidad por pago anticipado"],
        },
      },
    ],
    calculatorLabel: { en: "Payment Calculator", es: "Calculadora de Pagos" },
    calculatorHeading: { en: "Estimate Your Monthly Payment", es: "Estime Su Pago Mensual" },
    systemPrice: { en: "System Price", es: "Precio del Sistema" },
    interestRate: { en: "Interest Rate", es: "Tasa de Interes" },
    loanTerm: { en: "Loan Term (months)", es: "Plazo del Prestamo (meses)" },
    monthlyPayment: { en: "Estimated Monthly Payment", es: "Pago Mensual Estimado" },
    perMonth: { en: "/month", es: "/mes" },
    totalCost: { en: "Total Cost", es: "Costo Total" },
    totalInterest: { en: "Total Interest", es: "Interes Total" },
    processLabel: { en: "How to Apply", es: "Como Aplicar" },
    processHeading: { en: "Simple Application Process", es: "Proceso de Aplicacion Simple" },
    processSteps: [
      {
        title: { en: "Free Consultation", es: "Consulta Gratuita" },
        description: { en: "Schedule your free water test and get a system recommendation with pricing.", es: "Programe su prueba de agua gratuita y obtenga una recomendacion de sistema con precios." },
      },
      {
        title: { en: "Quick Application", es: "Aplicacion Rapida" },
        description: { en: "Our simple financing application takes just minutes and you get an answer fast.", es: "Nuestra aplicacion de financiamiento simple toma solo minutos y obtiene una respuesta rapida." },
      },
      {
        title: { en: "Enjoy Clean Water", es: "Disfrute Agua Limpia" },
        description: { en: "Once approved, we schedule your installation and you start enjoying clean water right away.", es: "Una vez aprobado, programamos su instalacion y comienza a disfrutar agua limpia de inmediato." },
      },
    ],
  },

  // ============================
  // RESOURCES PAGE
  // ============================
  resourcesPage: {
    heroLabel: { en: "Water Education", es: "Educacion sobre el Agua" },
    heroHeadline1: { en: "Water Quality", es: "Recursos de" },
    heroHeadline2: { en: "Resources.", es: "Calidad del Agua." },
    heroDescription: {
      en: "Learn about water quality, filtration technology, and how to keep your family's water clean and safe.",
      es: "Aprenda sobre calidad del agua, tecnologia de filtracion y como mantener el agua de su familia limpia y segura.",
    },
    articlesLabel: { en: "Articles", es: "Articulos" },
    articlesHeading: { en: "Educational Articles", es: "Articulos Educativos" },
    filterAll: { en: "All Topics", es: "Todos los Temas" },
    filterQuality: { en: "Water Quality", es: "Calidad del Agua" },
    filterMaintenance: { en: "Maintenance", es: "Mantenimiento" },
    filterEducation: { en: "Education", es: "Educacion" },
    readMore: { en: "Read More", es: "Leer Mas" },
    articles: [
      {
        title: { en: "Understanding Your Water Test Results", es: "Entendiendo los Resultados de Su Prueba de Agua" },
        excerpt: { en: "Learn what each measurement means and what levels are considered safe for your family.", es: "Aprenda que significa cada medicion y que niveles se consideran seguros para su familia." },
        category: { en: "Water Quality", es: "Calidad del Agua" },
      },
      {
        title: { en: "The Hidden Dangers of Hard Water", es: "Los Peligros Ocultos del Agua Dura" },
        excerpt: { en: "Discover how hard water damages your home, appliances, and health over time.", es: "Descubra como el agua dura dana su hogar, electrodomesticos y salud con el tiempo." },
        category: { en: "Education", es: "Educacion" },
      },
      {
        title: { en: "Maintaining Your Water Filtration System", es: "Mantenimiento de Su Sistema de Filtracion de Agua" },
        excerpt: { en: "Simple maintenance tips to keep your filtration system running at peak performance for years.", es: "Consejos simples de mantenimiento para mantener su sistema de filtracion funcionando al maximo rendimiento por anos." },
        category: { en: "Maintenance", es: "Mantenimiento" },
      },
      {
        title: { en: "PFAS in Florida Water: What You Need to Know", es: "PFAS en el Agua de Florida: Lo Que Necesita Saber" },
        excerpt: { en: "An overview of emerging contaminants in Florida water supplies and how to protect your family.", es: "Una descripcion general de los contaminantes emergentes en los suministros de agua de Florida y como proteger a su familia." },
        category: { en: "Water Quality", es: "Calidad del Agua" },
      },
      {
        title: { en: "Well Water vs City Water: Key Differences", es: "Agua de Pozo vs Agua de Ciudad: Diferencias Clave" },
        excerpt: { en: "Understanding the unique challenges and treatment needs for well water versus municipal water.", es: "Entendiendo los desafios unicos y necesidades de tratamiento del agua de pozo versus agua municipal." },
        category: { en: "Education", es: "Educacion" },
      },
      {
        title: { en: "When to Replace Your RO Filters", es: "Cuando Reemplazar Sus Filtros de OI" },
        excerpt: { en: "A guide to filter replacement schedules and signs that your RO system needs maintenance.", es: "Una guia de programas de reemplazo de filtros y senales de que su sistema de OI necesita mantenimiento." },
        category: { en: "Maintenance", es: "Mantenimiento" },
      },
    ],
    guidesLabel: { en: "Free Guides", es: "Guias Gratuitas" },
    guidesHeading: { en: "Downloadable Resources", es: "Recursos Descargables" },
    guides: [
      {
        title: { en: "Central Florida Water Quality Report", es: "Reporte de Calidad de Agua de Florida Central" },
        description: { en: "A comprehensive overview of water quality issues specific to Central Florida.", es: "Una descripcion completa de problemas de calidad del agua especificos de Florida Central." },
      },
      {
        title: { en: "Home Water Filtration Buyer's Guide", es: "Guia del Comprador de Filtracion de Agua para el Hogar" },
        description: { en: "Everything you need to know before purchasing a water filtration system.", es: "Todo lo que necesita saber antes de comprar un sistema de filtracion de agua." },
      },
      {
        title: { en: "Water Softener Maintenance Checklist", es: "Lista de Verificacion de Mantenimiento de Ablandador de Agua" },
        description: { en: "Keep your water softener running smoothly with this printable maintenance guide.", es: "Mantenga su ablandador de agua funcionando sin problemas con esta guia de mantenimiento imprimible." },
      },
    ],
    downloadPdf: { en: "Download PDF", es: "Descargar PDF" },
    knowledgeLabel: { en: "Knowledge Base", es: "Base de Conocimiento" },
    knowledgeHeading: { en: "Frequently Asked Questions", es: "Preguntas Frecuentes" },
  },

  // ============================
  // CAREERS PAGE
  // ============================
  careersPage: {
    heroLabel: { en: "Join Our Team", es: "Unase a Nuestro Equipo" },
    heroHeadline1: { en: "Build a Career", es: "Construya una Carrera" },
    heroHeadline2: { en: "That Matters.", es: "Que Importa." },
    heroDescription: {
      en: "Join a growing, family-owned company that is making a real difference in Central Florida homes. We are looking for passionate people.",
      es: "Unase a una empresa familiar en crecimiento que esta haciendo una diferencia real en los hogares de Florida Central. Buscamos personas apasionadas.",
    },
    cultureLabel: { en: "Our Culture", es: "Nuestra Cultura" },
    cultureHeading: { en: "Why Work at Pure Agua?", es: "Por Que Trabajar en Pure Agua?" },
    cultureDescription: {
      en: "At Pure Agua, you are not just an employee, you are family. We believe in treating our team with the same care we give our customers. We are a young, thriving company with a mission to improve water quality for every Central Florida family. If you are passionate about making a difference and want to grow with us, we would love to hear from you.",
      es: "En Pure Agua, usted no es solo un empleado, es familia. Creemos en tratar a nuestro equipo con el mismo cuidado que damos a nuestros clientes. Somos una empresa joven y prospera con la mision de mejorar la calidad del agua para cada familia de Florida Central. Si le apasiona hacer la diferencia y quiere crecer con nosotros, nos encantaria saber de usted.",
    },
    benefitsLabel: { en: "Benefits", es: "Beneficios" },
    benefitsHeading: { en: "What We Offer", es: "Lo Que Ofrecemos" },
    benefits: [
      {
        title: { en: "Competitive Pay", es: "Pago Competitivo" },
        description: { en: "Above-market compensation with performance bonuses and regular raises.", es: "Compensacion por encima del mercado con bonos por rendimiento y aumentos regulares." },
      },
      {
        title: { en: "Training & Growth", es: "Capacitacion y Crecimiento" },
        description: { en: "Paid certifications, ongoing training, and clear career advancement paths.", es: "Certificaciones pagadas, capacitacion continua y caminos claros de avance profesional." },
      },
      {
        title: { en: "Health Benefits", es: "Beneficios de Salud" },
        description: { en: "Medical, dental, and vision coverage for you and your family.", es: "Cobertura medica, dental y de vision para usted y su familia." },
      },
      {
        title: { en: "Paid Time Off", es: "Tiempo Libre Pagado" },
        description: { en: "Generous PTO policy plus paid holidays so you can recharge and spend time with family.", es: "Politica generosa de PTO mas dias festivos pagados para que pueda recargar y pasar tiempo con la familia." },
      },
      {
        title: { en: "Company Vehicle", es: "Vehiculo de la Empresa" },
        description: { en: "Service technicians receive a fully equipped company vehicle for work.", es: "Los tecnicos de servicio reciben un vehiculo de la empresa completamente equipado para el trabajo." },
      },
      {
        title: { en: "Family Environment", es: "Ambiente Familiar" },
        description: { en: "Small team culture where your contributions are valued and your voice is heard.", es: "Cultura de equipo pequeno donde sus contribuciones son valoradas y su voz es escuchada." },
      },
    ],
    positionsLabel: { en: "Open Positions", es: "Posiciones Abiertas" },
    positionsHeading: { en: "Current Openings", es: "Vacantes Actuales" },
    positions: [
      {
        title: { en: "Water Treatment Technician", es: "Tecnico de Tratamiento de Agua" },
        type: { en: "Full-Time", es: "Tiempo Completo" },
        location: { en: "Kissimmee, FL", es: "Kissimmee, FL" },
        description: { en: "Install, maintain, and service residential water treatment systems. Must have a valid driver's license and be comfortable working in residential homes. Previous plumbing or water treatment experience preferred but we will train the right candidate.", es: "Instalar, mantener y dar servicio a sistemas residenciales de tratamiento de agua. Debe tener una licencia de conducir valida y sentirse comodo trabajando en hogares residenciales. Se prefiere experiencia previa en plomeria o tratamiento de agua pero capacitaremos al candidato adecuado." },
      },
      {
        title: { en: "Sales Representative", es: "Representante de Ventas" },
        type: { en: "Full-Time", es: "Tiempo Completo" },
        location: { en: "Central Florida", es: "Florida Central" },
        description: { en: "Conduct in-home water quality consultations and present solutions to homeowners. Strong communication skills required. We provide leads, training, and a proven sales process. Bilingual English/Spanish strongly preferred.", es: "Realizar consultas de calidad de agua en el hogar y presentar soluciones a propietarios. Se requieren fuertes habilidades de comunicacion. Proporcionamos prospectos, capacitacion y un proceso de ventas probado. Bilingue Ingles/Espanol fuertemente preferido." },
      },
      {
        title: { en: "Customer Service Coordinator", es: "Coordinador de Servicio al Cliente" },
        type: { en: "Full-Time", es: "Tiempo Completo" },
        location: { en: "Kissimmee, FL", es: "Kissimmee, FL" },
        description: { en: "Schedule appointments, handle customer inquiries, and coordinate service visits. Must be organized, friendly, and bilingual in English and Spanish. This is an office-based role with flexible hours.", es: "Programar citas, manejar consultas de clientes y coordinar visitas de servicio. Debe ser organizado, amigable y bilingue en Ingles y Espanol. Este es un rol basado en oficina con horario flexible." },
      },
    ],
    applyNow: { en: "Apply Now", es: "Aplicar Ahora" },
    applyInstructions: {
      en: "To apply, please send your resume and a brief introduction to:",
      es: "Para aplicar, por favor envie su curriculum y una breve introduccion a:",
    },
    noPositions: {
      en: "No openings right now? We are always looking for great people. Send us your resume and we will keep you in mind.",
      es: "No hay vacantes ahora? Siempre buscamos personas excelentes. Envienos su curriculum y lo tendremos en cuenta.",
    },
  },

  // Promo Banner
  promoBanner: {
    text: {
      en: "Spring Special: $50 Off Any Filtration System - Limited Time!",
      es: "Especial de Primavera: $50 de Descuento en Cualquier Sistema de Filtracion - Tiempo Limitado!",
    },
  },

  // Exit Intent Popup
  exitPopup: {
    title: { en: "Wait! Your Free Water Test Is Waiting", es: "Espere! Su Prueba de Agua Gratis Le Espera" },
    description: {
      en: "Find out what is really in your water. Schedule a free, no-obligation water test today.",
      es: "Descubra lo que realmente hay en su agua. Programe una prueba de agua gratis y sin compromiso hoy.",
    },
    namePlaceholder: { en: "Your name", es: "Su nombre" },
    phonePlaceholder: { en: "Phone number", es: "Numero de telefono" },
    cta: { en: "Claim My Free Water Test", es: "Reclamar Mi Prueba de Agua Gratis" },
    dismiss: { en: "No thanks, I'll keep my hard water", es: "No gracias, me quedo con mi agua dura" },
    successTitle: { en: "You're all set!", es: "Todo listo!" },
    successMessage: { en: "We'll call you within 24 hours to schedule your test.", es: "Le llamaremos dentro de 24 horas para programar su prueba." },
  },

  // Sticky Bottom Bar (mobile)
  stickyBar: {
    label: { en: "Free Water Test", es: "Prueba Gratis" },
    callNow: { en: "Call Now", es: "Llamar" },
    bookOnline: { en: "Book Online", es: "Reservar" },
  },

  // Social Proof Toasts
  socialProof: {
    from: { en: "from", es: "de" },
    kissimmee: { en: "Kissimmee", es: "Kissimmee" },
    orlando: { en: "Orlando", es: "Orlando" },
    stCloud: { en: "St. Cloud", es: "St. Cloud" },
    winterPark: { en: "Winter Park", es: "Winter Park" },
    scheduledTest: { en: "just scheduled a water test", es: "acaba de programar una prueba de agua" },
    installedSystem: { en: "had a system installed", es: "tuvo un sistema instalado" },
    leftReview: { en: "left a 5-star review", es: "dejo una resena de 5 estrellas" },
    minutesAgo3: { en: "3 minutes ago", es: "hace 3 minutos" },
    minutesAgo8: { en: "8 minutes ago", es: "hace 8 minutos" },
    minutesAgo12: { en: "12 minutes ago", es: "hace 12 minutos" },
    minutesAgo45: { en: "45 minutes ago", es: "hace 45 minutos" },
    hoursAgo1: { en: "1 hour ago", es: "hace 1 hora" },
    hoursAgo2: { en: "2 hours ago", es: "hace 2 horas" },
  },

  // Floating CTA (desktop service pages)
  floatingCta: {
    label: { en: "Get Free Quote", es: "Cotizacion Gratis" },
    heading: { en: "Get a Free Quote Today", es: "Obtenga una Cotizacion Gratis Hoy" },
    callUs: { en: "Call Us Now", es: "Llamenos Ahora" },
    bookNow: { en: "Book Online", es: "Reservar en Linea" },
  },
} as const;

export type TranslationKey = keyof typeof translations;
