/**
 * Pure Agua local service-area pages: ~20 Central Florida cities x 4 services.
 *
 * SOURCING DISCIPLINE
 * --------------------
 * Every locale-specific number that appears in this file must trace to a
 * named source URL on a utility, USGS, or government property. When a
 * city-specific CCR figure could not be verified at write time, the field
 * is left undefined and the page falls back to sourced regional language
 * for that field. The Florida Department of Environmental Protection and
 * individual utilities post Consumer Confidence Reports yearly; pulling
 * the latest CCR is a Tier-2 enrichment task tracked in
 * /seo-strategy/03-local.md.
 *
 * HARDNESS CONTEXT
 * --------------------
 * Central Florida draws almost universally from the Floridan Aquifer. USGS
 * groundwater hardness mapping classifies most of the region as very hard
 * (>180 mg/L as CaCO3, roughly >10 grains per gallon). Local utility
 * blending and surface-water dilution shifts the finished-water number,
 * which is why we always test on site before sizing a softener.
 */

export type CcrData = {
  /** PDF or HTML URL of the CCR document, or the utility water-quality page. */
  url: string;
  /** Year the CCR was published. */
  reportYear?: number;
  /** Calendar year the data covers. */
  dataYear?: number;
  /** Treatment plant or source description as printed in the CCR. */
  treatmentPlant?: string;
  /** Free chlorine or chloramine maximum monitoring period average (mg/L). */
  chlorineMpa?: number;
  /** Free chlorine or chloramine running annual average (mg/L). */
  chlorineRaa?: number;
  /** TTHM running annual average (ppb). */
  tthmRaa?: number;
  /** TTHM range low and high (ppb). */
  tthmRange?: [number, number];
  /** HAA5 running annual average (ppb). */
  haa5Raa?: number;
  /** HAA5 range low and high (ppb). */
  haa5Range?: [number, number];
  /** Fluoride highest value (ppm). */
  fluoride?: number;
  /** Nitrate highest value (ppm as N). */
  nitrate?: number;
  /** Lead 90th percentile (ppb). */
  lead90th?: number;
  leadPeriod?: string;
  /** Copper 90th percentile (ppm). */
  copper90th?: number;
  copperPeriod?: string;
  sodium?: number;
  note?: string;
};

export type LocalCity = {
  slug: string;
  name: string;
  county: string;
  population: string;
  populationSource: string;
  utility: string;
  utilitySource: string;
  waterSource: string;
  hardness: string;
  hardnessSource: string;
  notableContaminants: { item: string; source: string }[];
  zipCodes: string[];
  neighborhoods: string[];
  ccr?: CcrData;
};

export type LocalService = {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  scopeOfWork: string[];
  relatedServicePage: string;
  relatedPillar: string;
  relatedBlog: { slug: string; title: string }[];
  heroImage: string;
};

export type LocalPage = {
  slug: string;
  city: LocalCity;
  service: LocalService;
};

// -----------------------------------------------------------------------------
// SHARED REGIONAL SOURCES
// -----------------------------------------------------------------------------

const USGS_HARDNESS_MAP = "https://www.usgs.gov/mission-areas/water-resources/science/hardness-water";
const FL_DEP_SDWP = "https://floridadep.gov/water/source-drinking-water";
const FL_DOH_WELLS = "https://www.floridahealth.gov/environmental-health/private-well-testing/";
const FL_FLORIDAN_AQUIFER = "https://www.usgs.gov/mission-areas/water-resources/science/floridan-aquifer-system";

// -----------------------------------------------------------------------------
// CITIES
// -----------------------------------------------------------------------------

export const cities: LocalCity[] = [
  {
    slug: "kissimmee-fl",
    name: "Kissimmee",
    county: "Osceola County",
    population: "approximately 79,000 residents",
    populationSource: "https://www.census.gov/quickfacts/kissimmeecityflorida",
    utility: "Toho Water Authority",
    utilitySource: "https://www.tohowater.com/your-water/water-quality",
    waterSource: "Upper Floridan Aquifer groundwater treated at Toho Water Authority facilities",
    hardness:
      "consistently very hard, typical of Floridan Aquifer groundwater that passes through limestone formations (USGS classifies most Central Florida groundwater as very hard, above 180 mg/L as CaCO3)",
    hardnessSource: USGS_HARDNESS_MAP,
    notableContaminants: [
      { item: "calcium and magnesium hardness from the limestone aquifer", source: USGS_HARDNESS_MAP },
      { item: "chloramines used by Toho Water Authority as the residual disinfectant", source: "https://www.tohowater.com/your-water/water-quality" },
      { item: "trace disinfection by-products (trihalomethanes and haloacetic acids) within EPA limits", source: "https://www.tohowater.com/your-water/water-quality" },
    ],
    zipCodes: ["34741", "34743", "34744", "34746", "34747", "34758", "34759"],
    neighborhoods: ["Buenaventura Lakes", "Poinciana", "Celebration", "Lakeside", "Mill Run"],
    ccr: {
      url: "https://www.tohowater.com/your-water/water-quality",
      note: "Toho Water Authority publishes annual Consumer Confidence Reports on its water-quality page. Pull the most recent CCR before scheduling a softener install so the system is sized to current finished-water numbers.",
    },
  },
  {
    slug: "orlando-fl",
    name: "Orlando",
    county: "Orange County",
    population: "approximately 320,000 residents",
    populationSource: "https://www.census.gov/quickfacts/orlandocityflorida",
    utility: "Orlando Utilities Commission (OUC)",
    utilitySource: "https://www.ouc.com/environment-community/water/water-quality",
    waterSource: "Upper Floridan Aquifer treated at OUC water treatment plants, with portions of the supply receiving reverse osmosis at the Southern Water Treatment Plant",
    hardness:
      "moderately hard to very hard, depending on which OUC plant serves your service address (the Southern plant uses reverse osmosis on a portion of supply, producing a softer blend)",
    hardnessSource: "https://www.ouc.com/environment-community/water/water-quality",
    notableContaminants: [
      { item: "chloramines used by OUC as the residual disinfectant", source: "https://www.ouc.com/environment-community/water/water-quality" },
      { item: "trihalomethane and haloacetic acid disinfection by-products tracked in the annual CCR", source: "https://www.ouc.com/environment-community/water/water-quality" },
      { item: "PFAS monitoring data published in OUC reports; EPA finalized a 4 ppt MCL for PFOA and PFOS in April 2024", source: "https://www.epa.gov/sdwa/and-polyfluoroalkyl-substances-pfas" },
    ],
    zipCodes: ["32801", "32803", "32804", "32805", "32806", "32807", "32808", "32809", "32810", "32811", "32812", "32814", "32819", "32822", "32824", "32825", "32827", "32828", "32829", "32832", "32835", "32836", "32837", "32839"],
    neighborhoods: ["Downtown", "Lake Nona", "Baldwin Park", "College Park", "MetroWest", "Dr. Phillips", "Audubon Park"],
    ccr: {
      url: "https://www.ouc.com/environment-community/water/water-quality",
      note: "OUC publishes annual Consumer Confidence Reports for each water-treatment plant. Pull the report for the plant serving your service address before sizing point-of-entry filtration.",
    },
  },
  {
    slug: "st-cloud-fl",
    name: "St. Cloud",
    county: "Osceola County",
    population: "approximately 65,000 residents",
    populationSource: "https://www.census.gov/quickfacts/stcloudcityflorida",
    utility: "City of St. Cloud Utilities",
    utilitySource: "https://www.stcloud.org/489/Water-Wastewater",
    waterSource: "Upper Floridan Aquifer groundwater treated at St. Cloud municipal water-treatment facilities",
    hardness:
      "very hard, typical of central Osceola County Floridan Aquifer supply",
    hardnessSource: USGS_HARDNESS_MAP,
    notableContaminants: [
      { item: "hardness from limestone-aquifer source water", source: USGS_HARDNESS_MAP },
      { item: "residual disinfectant per the city water-quality program", source: "https://www.stcloud.org/489/Water-Wastewater" },
    ],
    zipCodes: ["34769", "34771", "34772", "34773"],
    neighborhoods: ["Downtown St. Cloud", "Stevens Plantation", "Anthem Park", "Narcoossee corridor"],
    ccr: {
      url: "https://www.stcloud.org/489/Water-Wastewater",
      note: "The City of St. Cloud Utilities posts the annual CCR on its Water and Wastewater page.",
    },
  },
  {
    slug: "winter-park-fl",
    name: "Winter Park",
    county: "Orange County",
    population: "approximately 30,000 residents",
    populationSource: "https://www.census.gov/quickfacts/winterparkcityflorida",
    utility: "City of Winter Park Utilities",
    utilitySource: "https://cityofwinterpark.org/departments/water-and-sewer/",
    waterSource: "Upper Floridan Aquifer groundwater treated at Winter Park water treatment plants",
    hardness: "very hard, consistent with the rest of Orange County Floridan-Aquifer supply",
    hardnessSource: USGS_HARDNESS_MAP,
    notableContaminants: [
      { item: "calcium and magnesium hardness", source: USGS_HARDNESS_MAP },
      { item: "residual disinfectant from city treatment", source: "https://cityofwinterpark.org/departments/water-and-sewer/" },
    ],
    zipCodes: ["32789", "32792"],
    neighborhoods: ["Hannibal Square", "Olde Town", "Windsong", "Lake Killarney"],
    ccr: { url: "https://cityofwinterpark.org/departments/water-and-sewer/" },
  },
  {
    slug: "altamonte-springs-fl",
    name: "Altamonte Springs",
    county: "Seminole County",
    population: "approximately 45,000 residents",
    populationSource: "https://www.census.gov/quickfacts/altamontespringscityflorida",
    utility: "City of Altamonte Springs Public Works",
    utilitySource: "https://www.altamonte.org/267/Water-Treatment",
    waterSource: "Upper Floridan Aquifer groundwater treated at the Regional Water Reclamation Facility complex",
    hardness: "moderately hard to very hard, typical of Seminole County Floridan Aquifer supply",
    hardnessSource: USGS_HARDNESS_MAP,
    notableContaminants: [
      { item: "calcium and magnesium hardness from limestone aquifer", source: USGS_HARDNESS_MAP },
      { item: "city-treated residual disinfectant", source: "https://www.altamonte.org/267/Water-Treatment" },
    ],
    zipCodes: ["32701", "32714"],
    neighborhoods: ["Cranes Roost", "Sanlando Springs area", "Spring Oaks"],
    ccr: { url: "https://www.altamonte.org/267/Water-Treatment" },
  },
  {
    slug: "lake-mary-fl",
    name: "Lake Mary",
    county: "Seminole County",
    population: "approximately 16,000 residents",
    populationSource: "https://www.census.gov/quickfacts/lakemarycityflorida",
    utility: "City of Lake Mary Public Works",
    utilitySource: "https://www.lakemaryfl.com/161/Public-Works",
    waterSource: "Upper Floridan Aquifer groundwater treated at City of Lake Mary water plants",
    hardness:
      "moderately hard, with localized variation across the city's Floridan-Aquifer well field (USGS notes pockets of softer water across northern Seminole County)",
    hardnessSource: USGS_HARDNESS_MAP,
    notableContaminants: [
      { item: "hardness from Floridan Aquifer source water", source: USGS_HARDNESS_MAP },
      { item: "city residual disinfectant", source: "https://www.lakemaryfl.com/161/Public-Works" },
    ],
    zipCodes: ["32746"],
    neighborhoods: ["Heathrow", "Lake Mary Boulevard corridor", "Timacuan"],
    ccr: { url: "https://www.lakemaryfl.com/161/Public-Works" },
  },
  {
    slug: "sanford-fl",
    name: "Sanford",
    county: "Seminole County",
    population: "approximately 63,000 residents",
    populationSource: "https://www.census.gov/quickfacts/sanfordcityflorida",
    utility: "City of Sanford Utility Services",
    utilitySource: "https://www.sanfordfl.gov/departments/utility-services",
    waterSource: "Upper Floridan Aquifer groundwater treated at City of Sanford water plants",
    hardness: "very hard, typical of Seminole County Floridan Aquifer supply",
    hardnessSource: USGS_HARDNESS_MAP,
    notableContaminants: [
      { item: "hardness from limestone aquifer", source: USGS_HARDNESS_MAP },
      { item: "city residual disinfectant", source: "https://www.sanfordfl.gov/departments/utility-services" },
    ],
    zipCodes: ["32771", "32773"],
    neighborhoods: ["Historic Goldsboro", "Mayfair", "Lake Forest"],
    ccr: { url: "https://www.sanfordfl.gov/departments/utility-services" },
  },
  {
    slug: "oviedo-fl",
    name: "Oviedo",
    county: "Seminole County",
    population: "approximately 42,000 residents",
    populationSource: "https://www.census.gov/quickfacts/oviedocityflorida",
    utility: "City of Oviedo Public Works",
    utilitySource: "https://www.cityofoviedo.net/210/Water-Sewer-Utilities",
    waterSource: "Upper Floridan Aquifer groundwater treated by the City of Oviedo",
    hardness: "very hard, typical of Seminole County Floridan Aquifer supply",
    hardnessSource: USGS_HARDNESS_MAP,
    notableContaminants: [
      { item: "hardness from Floridan Aquifer source water", source: USGS_HARDNESS_MAP },
      { item: "residual disinfectant per the city utilities program", source: "https://www.cityofoviedo.net/210/Water-Sewer-Utilities" },
    ],
    zipCodes: ["32765", "32766"],
    neighborhoods: ["Alafaya Woods", "Oviedo on the Park", "Tuscawilla edge"],
    ccr: { url: "https://www.cityofoviedo.net/210/Water-Sewer-Utilities" },
  },
  {
    slug: "apopka-fl",
    name: "Apopka",
    county: "Orange County",
    population: "approximately 56,000 residents",
    populationSource: "https://www.census.gov/quickfacts/apopkacityflorida",
    utility: "City of Apopka Public Services",
    utilitySource: "https://www.apopka.gov/175/Public-Services",
    waterSource: "Upper Floridan Aquifer groundwater treated at City of Apopka water plants",
    hardness: "very hard, typical of northwest Orange County Floridan Aquifer supply",
    hardnessSource: USGS_HARDNESS_MAP,
    notableContaminants: [
      { item: "hardness from limestone aquifer", source: USGS_HARDNESS_MAP },
      { item: "residual disinfectant per the city utilities program", source: "https://www.apopka.gov/175/Public-Services" },
    ],
    zipCodes: ["32703", "32712"],
    neighborhoods: ["Rock Springs Ridge", "Errol Estate", "Wekiva Run"],
    ccr: { url: "https://www.apopka.gov/175/Public-Services" },
  },
  {
    slug: "winter-garden-fl",
    name: "Winter Garden",
    county: "Orange County",
    population: "approximately 49,000 residents",
    populationSource: "https://www.census.gov/quickfacts/wintergardencityflorida",
    utility: "City of Winter Garden Utility Services",
    utilitySource: "https://www.cwgdn.com/166/Utility-Services",
    waterSource: "Upper Floridan Aquifer groundwater treated by the City of Winter Garden",
    hardness: "very hard, typical of west Orange County Floridan Aquifer supply",
    hardnessSource: USGS_HARDNESS_MAP,
    notableContaminants: [
      { item: "hardness from limestone aquifer", source: USGS_HARDNESS_MAP },
      { item: "city-treated residual disinfectant", source: "https://www.cwgdn.com/166/Utility-Services" },
    ],
    zipCodes: ["34787"],
    neighborhoods: ["Plant Street", "Stoneybrook West", "Independence"],
    ccr: { url: "https://www.cwgdn.com/166/Utility-Services" },
  },
  {
    slug: "ocoee-fl",
    name: "Ocoee",
    county: "Orange County",
    population: "approximately 49,000 residents",
    populationSource: "https://www.census.gov/quickfacts/ocoeecityflorida",
    utility: "City of Ocoee Utilities Department",
    utilitySource: "https://www.ocoee.org/186/Utilities",
    waterSource: "Upper Floridan Aquifer groundwater treated by the City of Ocoee",
    hardness: "very hard, typical of west Orange County Floridan Aquifer supply",
    hardnessSource: USGS_HARDNESS_MAP,
    notableContaminants: [
      { item: "hardness from limestone aquifer", source: USGS_HARDNESS_MAP },
      { item: "residual disinfectant per the city utilities program", source: "https://www.ocoee.org/186/Utilities" },
    ],
    zipCodes: ["34761"],
    neighborhoods: ["Forest Lake", "West Orange", "Prairie Lake"],
    ccr: { url: "https://www.ocoee.org/186/Utilities" },
  },
  {
    slug: "clermont-fl",
    name: "Clermont",
    county: "Lake County",
    population: "approximately 47,000 residents",
    populationSource: "https://www.census.gov/quickfacts/clermontcityflorida",
    utility: "City of Clermont Environmental Services",
    utilitySource: "https://www.clermontfl.gov/departments/environmental-services",
    waterSource: "Upper Floridan Aquifer groundwater treated by the City of Clermont",
    hardness: "very hard, typical of south Lake County Floridan Aquifer supply",
    hardnessSource: USGS_HARDNESS_MAP,
    notableContaminants: [
      { item: "hardness from limestone aquifer", source: USGS_HARDNESS_MAP },
      { item: "city-treated residual disinfectant", source: "https://www.clermontfl.gov/departments/environmental-services" },
    ],
    zipCodes: ["34711", "34714", "34715"],
    neighborhoods: ["Kings Ridge", "Highland Ranch", "Lost Lake"],
    ccr: { url: "https://www.clermontfl.gov/departments/environmental-services" },
  },
  {
    slug: "davenport-fl",
    name: "Davenport",
    county: "Polk County",
    population: "approximately 13,000 residents",
    populationSource: "https://www.census.gov/quickfacts/davenportcityflorida",
    utility: "City of Davenport Utilities",
    utilitySource: "https://www.davenportfl.gov/departments/utilities",
    waterSource: "Upper Floridan Aquifer groundwater treated by the City of Davenport",
    hardness: "very hard, typical of north Polk County Floridan Aquifer supply",
    hardnessSource: USGS_HARDNESS_MAP,
    notableContaminants: [
      { item: "hardness from limestone aquifer", source: USGS_HARDNESS_MAP },
      { item: "city-treated residual disinfectant", source: "https://www.davenportfl.gov/departments/utilities" },
    ],
    zipCodes: ["33837", "33896", "33897"],
    neighborhoods: ["ChampionsGate", "Providence", "Loma Linda"],
    ccr: { url: "https://www.davenportfl.gov/departments/utilities" },
  },
  {
    slug: "haines-city-fl",
    name: "Haines City",
    county: "Polk County",
    population: "approximately 30,000 residents",
    populationSource: "https://www.census.gov/quickfacts/hainescitycityflorida",
    utility: "City of Haines City Utilities",
    utilitySource: "https://www.hainescity.com/Departments/Utilities",
    waterSource: "Upper Floridan Aquifer groundwater treated by the City of Haines City",
    hardness: "very hard, typical of central Polk County Floridan Aquifer supply",
    hardnessSource: USGS_HARDNESS_MAP,
    notableContaminants: [
      { item: "hardness from limestone aquifer", source: USGS_HARDNESS_MAP },
      { item: "city-treated residual disinfectant", source: "https://www.hainescity.com/Departments/Utilities" },
    ],
    zipCodes: ["33844", "33845"],
    neighborhoods: ["Sweetwater", "Randa Ridge", "Calabay Parc"],
    ccr: { url: "https://www.hainescity.com/Departments/Utilities" },
  },
  {
    slug: "lakeland-fl",
    name: "Lakeland",
    county: "Polk County",
    population: "approximately 117,000 residents",
    populationSource: "https://www.census.gov/quickfacts/lakelandcityflorida",
    utility: "Lakeland Water Utilities",
    utilitySource: "https://www.lakelandgov.net/departments/water-utilities/",
    waterSource: "Upper Floridan Aquifer groundwater treated at the T.B. Williams and C. Wayne Combee water treatment plants",
    hardness: "very hard, typical of central Polk County Floridan Aquifer supply",
    hardnessSource: USGS_HARDNESS_MAP,
    notableContaminants: [
      { item: "hardness from limestone aquifer", source: USGS_HARDNESS_MAP },
      { item: "residual disinfectant per Lakeland Water Utilities", source: "https://www.lakelandgov.net/departments/water-utilities/" },
      { item: "trihalomethane and haloacetic acid disinfection by-products tracked in the annual CCR", source: "https://www.lakelandgov.net/departments/water-utilities/" },
    ],
    zipCodes: ["33801", "33803", "33805", "33809", "33810", "33811", "33812", "33813"],
    neighborhoods: ["Dixieland", "Lake Hollingsworth", "Lakeside Village", "South Lakeland"],
    ccr: { url: "https://www.lakelandgov.net/departments/water-utilities/" },
  },
  {
    slug: "winter-haven-fl",
    name: "Winter Haven",
    county: "Polk County",
    population: "approximately 56,000 residents",
    populationSource: "https://www.census.gov/quickfacts/winterhavencityflorida",
    utility: "City of Winter Haven Water Department",
    utilitySource: "https://www.mywinterhaven.com/department/water/",
    waterSource: "Upper Floridan Aquifer groundwater treated by the City of Winter Haven",
    hardness: "very hard, typical of central Polk County Floridan Aquifer supply",
    hardnessSource: USGS_HARDNESS_MAP,
    notableContaminants: [
      { item: "hardness from limestone aquifer", source: USGS_HARDNESS_MAP },
      { item: "city-treated residual disinfectant", source: "https://www.mywinterhaven.com/department/water/" },
    ],
    zipCodes: ["33880", "33881", "33884"],
    neighborhoods: ["Lake Region", "Cypresswood", "Garden Grove"],
    ccr: { url: "https://www.mywinterhaven.com/department/water/" },
  },
  {
    slug: "deltona-fl",
    name: "Deltona",
    county: "Volusia County",
    population: "approximately 95,000 residents",
    populationSource: "https://www.census.gov/quickfacts/deltonacityflorida",
    utility: "City of Deltona Water (operated under contract with Veolia)",
    utilitySource: "https://www.deltonafl.gov/departments/public-works/water",
    waterSource: "Upper Floridan Aquifer groundwater treated at Deltona water plants",
    hardness: "very hard, typical of southwest Volusia County Floridan Aquifer supply",
    hardnessSource: USGS_HARDNESS_MAP,
    notableContaminants: [
      { item: "hardness from limestone aquifer", source: USGS_HARDNESS_MAP },
      { item: "city-treated residual disinfectant", source: "https://www.deltonafl.gov/departments/public-works/water" },
    ],
    zipCodes: ["32725", "32738"],
    neighborhoods: ["Deltona Lakes", "Lake Helen edge", "Saxon Boulevard corridor"],
    ccr: { url: "https://www.deltonafl.gov/departments/public-works/water" },
  },
  {
    slug: "deland-fl",
    name: "DeLand",
    county: "Volusia County",
    population: "approximately 38,000 residents",
    populationSource: "https://www.census.gov/quickfacts/delandcityflorida",
    utility: "City of DeLand Public Services",
    utilitySource: "https://www.deland.org/departments/public-services-1/water-treatment",
    waterSource: "Upper Floridan Aquifer groundwater treated at City of DeLand water plants",
    hardness: "very hard, typical of west Volusia County Floridan Aquifer supply",
    hardnessSource: USGS_HARDNESS_MAP,
    notableContaminants: [
      { item: "hardness from limestone aquifer", source: USGS_HARDNESS_MAP },
      { item: "city-treated residual disinfectant", source: "https://www.deland.org/departments/public-services-1/water-treatment" },
    ],
    zipCodes: ["32720", "32724"],
    neighborhoods: ["Downtown DeLand", "Stetson University area", "Victoria Park"],
    ccr: { url: "https://www.deland.org/departments/public-services-1/water-treatment" },
  },
  {
    slug: "leesburg-fl",
    name: "Leesburg",
    county: "Lake County",
    population: "approximately 27,000 residents",
    populationSource: "https://www.census.gov/quickfacts/leesburgcityflorida",
    utility: "City of Leesburg Environmental Services",
    utilitySource: "https://www.leesburgflorida.gov/departments/environmental_services/water.php",
    waterSource: "Upper Floridan Aquifer groundwater treated by the City of Leesburg",
    hardness: "very hard, typical of central Lake County Floridan Aquifer supply",
    hardnessSource: USGS_HARDNESS_MAP,
    notableContaminants: [
      { item: "hardness from limestone aquifer", source: USGS_HARDNESS_MAP },
      { item: "city-treated residual disinfectant", source: "https://www.leesburgflorida.gov/departments/environmental_services/water.php" },
    ],
    zipCodes: ["34748", "34788"],
    neighborhoods: ["Royal Highlands area", "Lake Griffin edge", "Pennbrooke"],
    ccr: { url: "https://www.leesburgflorida.gov/departments/environmental_services/water.php" },
  },
  {
    slug: "mount-dora-fl",
    name: "Mount Dora",
    county: "Lake County",
    population: "approximately 16,000 residents",
    populationSource: "https://www.census.gov/quickfacts/mountdoracityflorida",
    utility: "City of Mount Dora Public Works",
    utilitySource: "https://www.cityofmountdora.com/289/Water-Wastewater",
    waterSource: "Upper Floridan Aquifer groundwater treated by the City of Mount Dora",
    hardness: "very hard, typical of east Lake County Floridan Aquifer supply",
    hardnessSource: USGS_HARDNESS_MAP,
    notableContaminants: [
      { item: "hardness from limestone aquifer", source: USGS_HARDNESS_MAP },
      { item: "city-treated residual disinfectant", source: "https://www.cityofmountdora.com/289/Water-Wastewater" },
    ],
    zipCodes: ["32757"],
    neighborhoods: ["Historic Downtown", "Mount Dora Country Club", "Lakes of Mount Dora"],
    ccr: { url: "https://www.cityofmountdora.com/289/Water-Wastewater" },
  },
];

// -----------------------------------------------------------------------------
// SERVICES
// -----------------------------------------------------------------------------

export const services: LocalService[] = [
  {
    slug: "water-softener",
    name: "Water Softener Installation",
    shortName: "water softener installation",
    description:
      "Salt-based ion-exchange softener installation sized to your home, your hardness, and your daily water use. Removes the calcium and magnesium that scale water heaters, dishwashers, ice makers, and fixtures across Central Florida homes.",
    scopeOfWork: [
      "On-site water test (hardness in grains per gallon, iron, pH) before sizing",
      "Right-sized resin tank for the household, commonly 32,000 to 48,000 grain for a four-person home",
      "Brine tank installed alongside the softener with safety float",
      "Bypass valve plumbed in for service and resin rebed",
      "Drain line tied to the nearest approved drain with code-compliant air gap",
      "Demand-initiated regeneration programmed to your hardness and water use",
      "Walk-through with the homeowner, salt type recommendation, and written warranty",
    ],
    relatedServicePage: "/services/water-softening",
    relatedPillar: "/water-treatment/central-florida-hard-water",
    relatedBlog: [
      { slug: "water-softener-complete-guide", title: "The Complete Guide to Water Softeners" },
      { slug: "water-softener-cost-central-florida-2026", title: "Water Softener Cost in Central Florida (2026)" },
    ],
    heroImage: "/images/service-hero/water-softener.jpg",
  },
  {
    slug: "whole-house-filtration",
    name: "Whole-House Water Filtration",
    shortName: "whole-house filtration",
    description:
      "Point-of-entry filtration that treats every fixture in the home: chlorine and chloramine taste, sediment, and trace disinfection by-products at the kitchen tap, shower, laundry, and ice maker. Sized to your service line and water test, not a one-size-spec sheet.",
    scopeOfWork: [
      "Pre-install water test, including chlorine, sediment, pH, and TDS",
      "Sediment pre-filter sized to your service line",
      "Catalytic carbon tank for chlorine, chloramine, and disinfection by-product reduction",
      "Bypass valve, pressure gauges, and clean-out installed at the manifold",
      "All connections sweated or PEX-crimped to Florida plumbing code",
      "Post-install flush, pressure test, and walk-through",
      "Cartridge and media replacement schedule documented",
    ],
    relatedServicePage: "/services/whole-home",
    relatedPillar: "/water-treatment/central-florida-hard-water",
    relatedBlog: [
      { slug: "kissimmee-orlando-water-quality-guide", title: "Kissimmee and Orlando Water Quality" },
      { slug: "why-orlando-water-smells-or-stains-2026", title: "Why Does My Orlando Water Smell or Stain?" },
    ],
    heroImage: "/images/service-hero/whole-house-filtration.jpg",
  },
  {
    slug: "reverse-osmosis",
    name: "Reverse Osmosis System Installation",
    shortName: "reverse osmosis installation",
    description:
      "Under-sink reverse osmosis for drinking water and ice. Removes up to 99% of dissolved solids including lead, arsenic, fluoride, nitrates, chloramines, and PFAS to bottled-water quality at the kitchen tap, without the plastic.",
    scopeOfWork: [
      "Pre-install TDS reading and tap-water test",
      "Four- to five-stage RO unit installed under the kitchen sink",
      "Dedicated RO faucet drilled or fitted to existing air-gap hole",
      "Pressurized storage tank leak-tested",
      "Refrigerator and ice-maker line tied in when reachable",
      "System sanitized and post-install TDS documented (typical RO output 5 to 25 ppm)",
      "Filter and membrane replacement schedule documented",
    ],
    relatedServicePage: "/services/reverse-osmosis",
    relatedPillar: "/water-treatment/reverse-osmosis-drinking-water",
    relatedBlog: [
      { slug: "reverse-osmosis-benefits-orlando", title: "Why Every Orlando Family Should Have Reverse Osmosis" },
      { slug: "pfas-central-florida-2026", title: "PFAS in Central Florida Drinking Water (2026)" },
    ],
    heroImage: "/images/service-hero/reverse-osmosis.jpg",
  },
  {
    slug: "well-water-treatment",
    name: "Well Water Treatment",
    shortName: "well water treatment",
    description:
      "Custom well-water treatment for Central Florida properties. Air-injection oxidation systems strip iron, manganese, and hydrogen sulfide. Acid neutralizers correct low pH. UV disinfection handles bacteria where needed. Built around your well-water test, not a generic stack.",
    scopeOfWork: [
      "Comprehensive well test (iron, manganese, hydrogen sulfide, pH, bacteria, hardness)",
      "Air-injection oxidation tank sized to your flow rate and contaminant load",
      "Catalytic media bed (Birm, Katalox Light, or equivalent) for iron and sulfur",
      "Acid neutralizer when pH is below 6.8",
      "Optional UV disinfection downstream when bacteria are present",
      "Backwash drain plumbed to code with proper air gap",
      "Six-month follow-up to verify air pocket, media, and discharge clarity",
    ],
    relatedServicePage: "/services/well-water",
    relatedPillar: "/water-treatment/florida-well-water",
    relatedBlog: [
      { slug: "well-water-treatment-osceola-orange-county", title: "Well Water Treatment in Osceola and Orange County" },
      { slug: "why-orlando-water-smells-or-stains-2026", title: "Why Does My Orlando Water Smell or Stain?" },
    ],
    heroImage: "/images/service-hero/well-water-treatment.jpg",
  },
];

// -----------------------------------------------------------------------------
// PAGES (cartesian product of cities x services)
// -----------------------------------------------------------------------------

function buildPages(): LocalPage[] {
  const pages: LocalPage[] = [];
  for (const service of services) {
    for (const city of cities) {
      pages.push({
        slug: `${service.slug}-in-${city.slug}`,
        city,
        service,
      });
    }
  }
  return pages;
}

export const localPages: LocalPage[] = buildPages();

export function getLocalPage(slug: string): LocalPage | undefined {
  return localPages.find((p) => p.slug === slug);
}

// Exported for reference by /seo-strategy/03-local.md.
export const REGIONAL_SOURCES = {
  USGS_HARDNESS_MAP,
  FL_DEP_SDWP,
  FL_DOH_WELLS,
  FL_FLORIDAN_AQUIFER,
};
