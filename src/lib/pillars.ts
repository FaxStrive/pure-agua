export type Pillar = {
  slug: string;
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  bluf: string;
  heroImage: string;
  /** Sections rendered as H2 blocks. Each section is 200 to 350 words. */
  sections: { h2: string; body: string }[];
  /** Condition to action table rows (rendered as a real table). */
  decision: { condition: string; action: string }[];
  /** "Call a professional if" bullets. */
  callPro: string[];
  faqs: { q: string; a: string }[];
};

const BLUF_HARD_WATER = `Central Florida sits on the Floridan Aquifer, and the USGS classifies most groundwater across Orange, Osceola, Seminole, Polk, Lake, and Volusia counties as very hard. The right fix depends on whether you are on city water or a private well, what your water actually tests at, and whether you also have iron or sulfur in the line.`;

const BLUF_WELL = `Florida private wells draw straight from the Floridan or surficial aquifer with no municipal treatment between the well and your tap. Iron, manganese, hydrogen sulfide, low pH, sediment, and sometimes bacteria are yours to handle. The Florida Department of Health recommends annual bacterial and nitrate testing on every private well in the state.`;

const BLUF_RO = `Reverse osmosis is the point-of-use technology that consistently removes dissolved solids, lead, arsenic, fluoride, nitrates, chloramines, and PFAS to bottled-water quality. For Central Florida homes on chloraminated city supply or a well with elevated TDS, an under-sink RO at the kitchen tap outperforms pitcher filters by an order of magnitude.`;

export const pillars: Pillar[] = [
  {
    slug: "central-florida-hard-water",
    title: "Central Florida Hard Water: A Homeowner's Guide",
    h1: "Central Florida Hard Water: A Homeowner's Guide (2026)",
    metaTitle: "Central Florida Hard Water Guide | Pure Agua",
    metaDescription:
      "Hard water in Kissimmee, Orlando, and the rest of Central Florida explained. Hardness ranges, treatment options, and when to call a professional. Pure Agua.",
    bluf: BLUF_HARD_WATER,
    heroImage: "/images/service-hero/water-softener.jpg",
    sections: [
      {
        h2: "Why Central Florida water is so hard",
        body: `The Floridan Aquifer system, mapped by the USGS, underlies all of Central Florida and supplies most municipal and private wells in the region. The aquifer is hosted in karst limestone, which dissolves slowly into the groundwater and loads it with calcium and magnesium carbonates. Those two minerals are what "hardness" measures. Toho Water Authority, Orlando Utilities Commission, City of Sanford, and the rest of the regional utilities all draw on this same source, blend it across plants, and apply some combination of softening, blending, and chloramine disinfection before it reaches your meter. The result is finished water that is still classified as moderately hard to very hard in nearly every Central Florida service area by USGS criteria. On private wells the number is typically higher because there is no municipal blending in between the limestone and your kitchen tap. Hardness is not regulated by the EPA, so utilities are not required to report a hardness number on the Consumer Confidence Report. We test on site before sizing any softener, and we recommend you do too if you are sizing your own.`,
      },
      {
        h2: "Reading your hardness number",
        body: `Hardness is reported two ways: in grains per gallon (gpg) and in milligrams per liter as calcium carbonate (mg/L as CaCO3). One grain per gallon equals about 17.1 mg/L. The USGS uses these brackets: soft (0 to 60 mg/L, or 0 to 3.5 gpg), moderately hard (61 to 120 mg/L, or 3.6 to 7 gpg), hard (121 to 180 mg/L, or 7.1 to 10.5 gpg), and very hard (over 180 mg/L, or over 10.5 gpg). Most Central Florida finished water lands in the very hard band, often between 10 and 20 gpg at the tap. Anything above 7 gpg is worth softening for appliance protection, and anything above 10 gpg is the point at which a softener typically pays for itself in extended appliance life and reduced detergent use. Run a real test before buying a softener. DIY test strips give you a ballpark; a professional test plus an iron and pH reading gives you the data you need to size correctly.`,
      },
      {
        h2: "Recommended fix by water type",
        body: `Three different starting conditions drive three different recommendations. If you are on municipal supply with hardness in the 7 to 12 gpg range and no iron, a single-tank metered demand-initiated softener is usually enough, paired with a whole-house catalytic carbon filter for chlorine or chloramine taste and trace disinfection by-products. If you are on municipal supply with hardness above 15 gpg, the same stack still works, but the softener resin volume goes up (commonly 48,000 grain or a 64,000-grain dual-tank for high-use households). If you are on a private well with hardness plus iron above 1 ppm or hydrogen sulfide above 0.3 ppm, you need an air-injection iron and sulfur filter upstream of the softener so the iron does not foul the resin. For drinking water specifically, an under-sink reverse osmosis system at the kitchen tap removes the residual sodium added by the softener and gives you bottled-water quality for ice and beverages.`,
      },
      {
        h2: "What a properly sized softener looks like",
        body: `Sizing is the single most common mistake in residential water treatment. The math is: (hardness in gpg + 4 gpg per ppm of iron) multiplied by daily water use in gallons equals grains per day treated. A typical four-person Central Florida household uses 200 to 320 gallons per day. At 15 gpg with no iron and 280 gpd, that is 4,200 grains per day. Size the resin so the system regenerates every 3 to 7 days. A 32,000-grain softener at that load regenerates roughly weekly, which is ideal. Oversizing seems safe but actually causes the resin bed to channel, where water finds the path of least resistance and bypasses treatment. Undersizing burns through salt and water with constant regeneration cycles. A correctly sized system uses 30 to 40% less salt and water than the wrong size, and that is before you compare a modern demand-initiated head to an old timer head.`,
      },
      {
        h2: "Salt-free conditioners: what they actually do",
        body: `Template-assisted crystallization (TAC) systems and nucleation-assisted crystallization (NAC) systems are sold across Central Florida as "salt-free softeners." They are not softeners. They do not remove calcium and magnesium from water. What they do is convert dissolved hardness minerals into microscopic suspended crystals that pass through plumbing without scaling. Independent testing by the Water Quality Research Foundation has reported scale reduction in the 80 to 90% range for TAC under controlled conditions, versus essentially complete hardness removal for ion exchange. TAC does nothing for soap lather, skin and hair feel, or the sodium content of your water. It is a legitimate option if you want scale reduction without salt regeneration, brine discharge, or a softener loop, but it is not equivalent to a real softener. Be skeptical of marketing that claims otherwise. For Central Florida hardness above about 25 gpg, TAC effectiveness drops noticeably.</p><p>For homes that need scale prevention only and have municipal restrictions on softener discharge, TAC has a place. For homes that want soft water for laundry, skin, hair, and appliance protection, ion exchange is still the right tool.`,
      },
      {
        h2: "Whole-house carbon for chloramine and chlorine",
        body: `Toho Water Authority and OUC both use chloramines as the residual disinfectant. Chloramine is more stable in the distribution loop than free chlorine and produces fewer trihalomethane and haloacetic acid by-products, but it is harder to remove at the home. A standard granular activated carbon (GAC) bed takes considerably longer to reduce chloramines than free chlorine. Catalytic carbon is the right media for chloramine reduction and is what we install on Central Florida municipal supply. Sizing is by service line and household use, not bedroom count. The cartridge or media life depends on chlorine or chloramine residual and how much water you run through it, but five to seven years on the carbon media is typical for a properly sized residential backwashing tank. A standalone whole-house carbon system does not soften the water, does not remove dissolved minerals, and does not produce drinking-water-quality output at every fixture. It removes taste, odor, residual disinfectant, and trace disinfection by-products at every faucet, including the shower.`,
      },
      {
        h2: "Cost ranges in the Central Florida market",
        body: `Installed pricing in the Orlando and Kissimmee market for 2026 sits in industry-standard ranges. A metered demand-initiated softener (32,000 grain, single tank) installed runs $1,800 to $3,800 depending on plumbing, salt-tank type, and whether the brine line and drain need a long run. A whole-house catalytic carbon system runs $1,500 to $3,500 installed. A combined softener + whole-house carbon stack typically runs $3,000 to $6,000 installed. Under-sink reverse osmosis systems run $400 to $1,200 installed for a quality four- to five-stage unit, plus a dedicated faucet drill. Iron and sulfur air-injection systems for well water run $1,800 to $3,500 installed. These are professional-install ranges with permits, code-compliant air gaps, and warranty work, not DIY component prices. We provide written quotes after the free in-home water test so you see the actual number for your home, not a brochure range.`,
      },
      {
        h2: "What to do next",
        body: `The right starting point is a real water test. Pure Agua brings a calibrated kit to your home, tests for hardness, iron, sulfur, pH, TDS, and free or combined chlorine, and walks you through what we find. No obligation. If you want to read deeper before you book a test, our <a href="/water-treatment/florida-well-water">Florida well water guide</a> covers the well-specific stack, and our <a href="/water-treatment/reverse-osmosis-drinking-water">reverse osmosis guide</a> covers point-of-use drinking water in detail. Our <a href="/blog/water-softener-complete-guide">complete water softener guide</a> and <a href="/blog/water-softener-cost-central-florida-2026">2026 cost article</a> add detail on softener sizing and market pricing. If you are in <a href="/water-softener-in-kissimmee-fl">Kissimmee</a>, <a href="/water-softener-in-orlando-fl">Orlando</a>, or any of the other 18 Central Florida cities we serve, we have a local page with the utility data we have on file and the install scope we run for your service area.`,
      },
    ],
    decision: [
      { condition: "Municipal supply, hardness 7 to 12 gpg, no iron", action: "Single-tank metered softener + whole-house catalytic carbon" },
      { condition: "Municipal supply, hardness above 15 gpg, no iron", action: "48,000-grain softener (or 64,000 dual-tank) + catalytic carbon" },
      { condition: "Private well, hardness plus iron above 1 ppm", action: "Air-injection iron and sulfur filter upstream of a softener" },
      { condition: "Private well, hydrogen sulfide smell at the tap", action: "Air-injection oxidation + catalytic media (no chemical feed)" },
      { condition: "Any house with bottled-water habit at the kitchen", action: "Under-sink reverse osmosis at the kitchen tap" },
      { condition: "Low pH well water under 6.8", action: "Acid neutralizer upstream of the softener" },
    ],
    callPro: [
      "Your water heater anode rod is consumed in under two years",
      "Faucet aerators clog with scale inside 12 months",
      "Laundry comes out gray or stiff even with extra detergent",
      "Skin feels filmy after a shower or hair tangles more than before you moved in",
      "You see orange or black staining on fixtures, dishes, or laundry",
      "You smell sulfur (rotten eggs) at the tap, particularly on the hot side",
      "Your home is on a private well and you have not run a full bacteria, nitrate, and metals panel in the last 12 months",
    ],
    faqs: [
      { q: "Is Central Florida water harder than the rest of the state?", a: "Yes, in most service areas. The Floridan Aquifer is a karst limestone formation that loads groundwater with calcium and magnesium. Most Central Florida municipal and private supplies are classified as very hard by USGS criteria, with finished water commonly between 10 and 20 grains per gallon." },
      { q: "Will a water softener add a lot of sodium to my drinking water?", a: "A small amount. Ion exchange replaces hardness ions with sodium at roughly 30 mg of sodium per grain of hardness removed per liter. For a household on a low-sodium diet, we typically pair the softener with under-sink reverse osmosis at the kitchen tap, which removes the sodium added by the softener." },
      { q: "Do I need a whole-house filter if I already have a softener?", a: "They do different jobs. A softener removes calcium and magnesium. A whole-house catalytic carbon filter removes chlorine or chloramine taste, odor, and trace disinfection by-products. Most Central Florida homes on municipal supply benefit from both, installed in series with the carbon upstream of the softener to protect the softener resin." },
      { q: "How long does a water softener last in Central Florida?", a: "A quality demand-initiated softener with regular salt fills lasts 12 to 20 years. The resin itself lasts 8 to 15 years before capacity declines noticeably. The control valve and tank typically last longer than the resin. Carbon media in a whole-house tank typically lasts five to seven years on municipal supply." },
      { q: "What about salt-free water conditioners?", a: "Template-assisted crystallization (TAC) systems reduce scale formation without removing hardness, but they are not softeners. They do nothing for soap lather, skin and hair feel, or the dissolved sodium content. Independent testing puts scale reduction in the 80 to 90% range under controlled conditions. For homes that just want scale prevention without salt, they are a legitimate option. For homes that want soft water, ion exchange is the right tool." },
      { q: "How much does a Central Florida softener install cost?", a: "Industry-standard installed ranges in the Orlando and Kissimmee market are $1,800 to $3,800 for a metered single-tank softener, $1,500 to $3,500 for a whole-house catalytic carbon system, and $3,000 to $6,000 for a combined stack. We give a written quote after a free in-home water test so you see your number, not a brochure range." },
    ],
  },
  {
    slug: "florida-well-water",
    title: "Florida Well Water Treatment: A Homeowner's Guide",
    h1: "Florida Well Water: The 2026 Homeowner's Treatment Guide",
    metaTitle: "Florida Well Water Treatment Guide | Pure Agua",
    metaDescription:
      "Iron, sulfur, manganese, pH, and bacteria in Florida private wells. How to test, what to treat first, and when to call a pro. Pure Agua Enterprises.",
    bluf: BLUF_WELL,
    heroImage: "/images/service-hero/well-water-treatment.jpg",
    sections: [
      {
        h2: "What is in Florida well water",
        body: `The Florida Department of Health publishes annual guidance on private well testing. The headline list of common contaminants in Florida well water includes total coliform and E. coli bacteria, nitrates, iron, manganese, hydrogen sulfide, low pH (acidic water), hardness, sediment, and in some regions arsenic and radon. Not every well has every issue. Iron and sulfur dominate the symptom list because they produce visible staining and obvious smell. Bacteria and nitrates are the invisible ones, and they are the two FDOH recommends every well owner test for annually. The USGS Floridan Aquifer system reports also document elevated arsenic in certain pockets of Florida groundwater, particularly where the aquifer has been disturbed by aquifer storage and recovery operations or industrial activity. A real well test panel runs 10 to 14 analytes and is the only honest way to start. Visual symptoms tell you something is wrong, but they cannot tell you which contaminants are present or at what concentrations.`,
      },
      {
        h2: "The five-step well water diagnostic",
        body: `Step one is to look. Orange staining points to ferrous iron above 0.3 ppm. Black staining points to manganese above 0.05 ppm or sulfur bacteria. Step two is to smell. A rotten-egg odor at the hot tap is hydrogen sulfide gas, almost always biological in origin (sulfate-reducing bacteria in the anaerobic zone of the well). Step three is to feel. Slippery water after soap typically points to softening already in place, or to high pH; squeaky water after soap typically points to high hardness. Step four is to taste. Metallic taste is iron or copper, salty is sodium or chloride above background, bitter is often magnesium. Step five is to test. A standard well panel covers bacteria, nitrate, nitrite, iron, manganese, hardness, pH, hydrogen sulfide, TDS, and chloride. Add arsenic if you live near former agricultural land, radon if you live in north-central Florida, and pesticides if your well is shallow and your area was farmed in the last 50 years. We bring a calibrated test kit on every well consultation.`,
      },
      {
        h2: "Iron and sulfur: the most common Central Florida well problem",
        body: `If your well has iron above 0.3 ppm and any detectable hydrogen sulfide, the first stage of treatment is an air-injection oxidation (AIO) system. The system maintains a pocket of air at the top of a treatment tank. As water passes up through the air pocket, dissolved ferrous iron oxidizes to ferric iron particles and hydrogen sulfide oxidizes to elemental sulfur. The oxidized particles are then trapped in a catalytic media bed (commonly Birm or Katalox Light) below the air pocket. The system backwashes itself on a timed cycle, flushing the trapped particles to a code-compliant drain and refreshing the air pocket. No chemical feed. No compressor. No scheduled chemistry to mix. AIO works for iron up to roughly 10 ppm and hydrogen sulfide up to roughly 5 ppm. Beyond those concentrations, you move to a chemical oxidation stage (chlorine injection or hydrogen peroxide) followed by a contact tank and a backwashing carbon filter. For Central Florida wells the AIO range covers the vast majority of cases.`,
      },
      {
        h2: "Low pH water: an acid neutralizer is not optional",
        body: `Florida well water often comes out below pH 6.8. The EPA secondary standard for pH is 6.5 to 8.5. Anything below 6.8 is corrosive to copper plumbing and the anode rod of your water heater. The fix is a calcite neutralizer, a backwashing tank filled with calcium carbonate (limestone) media. Water flowing up through the bed dissolves a tiny amount of calcium carbonate, raising pH and slightly increasing hardness. The bed needs media added every 12 to 18 months as it consumes itself slowly. An acid neutralizer is placed upstream of the softener so the softener sees water in the 7.0 to 7.5 pH range. If you skip this step on a low-pH well, you will replace fittings, water heaters, and (eventually) copper pipes much earlier than the rated life. We test pH on every well consultation and quote a neutralizer when it is needed, not as an upsell when it is not.`,
      },
      {
        h2: "Bacteria, nitrates, and UV",
        body: `Florida Department of Health recommends every private well owner test for bacteria and nitrates annually. Total coliform indicates a pathway for surface contamination into the well. E. coli specifically indicates fecal contamination. Either is a treatment trigger. The standard approach is shock chlorination of the well, then UV disinfection downstream of all other treatment as a continuous safeguard. UV does not remove anything from the water; it inactivates microorganisms by damaging their DNA so they cannot reproduce. UV lamps last 9 to 12 months and the quartz sleeve needs annual cleaning. UV requires clear water to be effective, which is why UV always goes after iron, sulfur, and sediment treatment in the stack. Nitrate is a separate issue, typically from agricultural runoff or septic systems. Nitrate above 10 ppm exceeds the EPA MCL and is removed by reverse osmosis at the point of use or by anion exchange at the point of entry.`,
      },
      {
        h2: "Putting the stack together",
        body: `A typical Central Florida well-water treatment stack, in order from well pump to fixtures: sediment filter (50 to 5 micron stepwise), acid neutralizer (if pH is low), air-injection iron and sulfur filter, water softener, UV disinfection (if bacteria are present), and an under-sink reverse osmosis system at the kitchen for drinking water. Not every stack has every stage. A well with no iron, no sulfur, and normal pH may only need a softener and an under-sink RO. A well with bad iron and bacteria needs the full stack. We size each stage from the test, not a generic build sheet. Wrong-size sequencing is the most common reason a homeowner ends up unhappy with a well treatment system; right-size sequencing is the difference between a stack that quietly does its job for 15 years and a stack that needs a service call every six months.`,
      },
      {
        h2: "What it costs",
        body: `Installed pricing in the Central Florida market for 2026 sits in industry-standard ranges: acid neutralizer $1,200 to $2,200; air-injection iron and sulfur filter $1,800 to $3,500; whole-house carbon $1,500 to $3,500; softener $1,800 to $3,800; UV disinfection $700 to $1,500; under-sink RO $400 to $1,200. A full well stack with sediment + neutralizer + AIO + softener + UV + RO is commonly $5,500 to $9,500 installed depending on the home, the plumbing, and the contaminant load. The Florida Department of Health and local county health departments offer guidance on private well systems, and some counties offer subsidized testing through their environmental health programs.`,
      },
      {
        h2: "Next steps for well owners",
        body: `Start with the test. Pure Agua brings a calibrated kit to the well, tests on site, and walks you through what we find. We do not size a stack from a phone call or a photo. For deeper background, our <a href="/water-treatment/central-florida-hard-water">Central Florida hard water guide</a> covers softening in detail, and our <a href="/water-treatment/reverse-osmosis-drinking-water">reverse osmosis guide</a> covers point-of-use drinking water. Our <a href="/blog/well-water-treatment-osceola-orange-county">well water treatment article</a> and the <a href="/blog/why-orlando-water-smells-or-stains-2026">diagnostic article on staining and odor</a> walk through real examples. If you are on a well anywhere in <a href="/well-water-treatment-in-kissimmee-fl">Osceola</a>, <a href="/well-water-treatment-in-orlando-fl">Orange</a>, Polk, Lake, Seminole, or Volusia county, we have a local page with the install scope for your area.`,
      },
    ],
    decision: [
      { condition: "Orange staining on fixtures and laundry", action: "Test for iron; air-injection iron filter if above 0.3 ppm" },
      { condition: "Black staining on fixtures or fittings", action: "Test for manganese and sulfur bacteria; AIO + catalytic media" },
      { condition: "Rotten-egg smell, strongest on hot tap", action: "Air-injection oxidation, no chemical feed" },
      { condition: "Blue or green stains around copper fittings", action: "Test pH; install calcite neutralizer if below 6.8" },
      { condition: "Total coliform or E. coli detected", action: "Shock chlorinate the well; install UV downstream of all treatment" },
      { condition: "Nitrate above 10 ppm", action: "Under-sink RO for drinking water, plus investigate well cap and septic distance" },
      { condition: "No recent test, no obvious symptom", action: "Run the standard 10-analyte panel before assuming anything is fine" },
    ],
    callPro: [
      "You have never had a bacteria or nitrate panel run on the well",
      "You see orange or black staining anywhere in the home",
      "You smell sulfur on the hot tap",
      "Your water tests below pH 6.8",
      "Your well is shallow (less than 50 feet) or near a septic field",
      "You have an infant or someone immunocompromised in the household and no UV is installed",
      "You inherited the well with the house and have no documentation on what was installed when",
    ],
    faqs: [
      { q: "How often should a Florida private well be tested?", a: "The Florida Department of Health recommends annual testing for total coliform bacteria and nitrate at minimum. Broader panels (iron, manganese, hardness, pH, hydrogen sulfide, arsenic) on a longer interval, and any time taste, color, or odor changes. After any well repair or septic-system work, retest before drinking from the tap." },
      { q: "Why does my well water smell like rotten eggs?", a: "Hydrogen sulfide gas produced by sulfate-reducing bacteria in the anaerobic zone of the aquifer. The smell is strongest on the hot tap because heat drives the gas out of solution. Air-injection oxidation followed by catalytic media is the standard fix and does not require any ongoing chemical feed." },
      { q: "Can I install a softener instead of an iron filter?", a: "Softeners can hold small amounts of clear iron (up to about 3 ppm), but they are the wrong tool when iron exceeds 3 ppm or when any hydrogen sulfide is present. The resin fouls quickly and the brine never fully restores it. Iron filter upstream of the softener is the right sequence." },
      { q: "What does an acid neutralizer do?", a: "It raises the pH of low-pH well water by passing it through a bed of calcium carbonate (calcite) media. The media consumes itself slowly, raising pH and slightly increasing hardness. It protects copper plumbing and the water heater anode rod from accelerated corrosion. Required for any Central Florida well below pH 6.8." },
      { q: "Is UV disinfection always necessary on well water?", a: "Not always. UV is required when bacteria are detected in a well-water test, or as a continuous safeguard on a vulnerable well (shallow, near septic, with surface-water pathways). UV requires clear water to be effective, so it always goes downstream of iron, sulfur, and sediment treatment in the stack." },
      { q: "How much does a full well-water treatment system cost?", a: "Industry-standard installed ranges in the Central Florida market for a full stack (sediment, neutralizer, AIO iron and sulfur, softener, UV, and under-sink RO) run $5,500 to $9,500. Partial stacks are scoped to the test. Pure Agua provides a written quote after a free on-site water test." },
    ],
  },
  {
    slug: "reverse-osmosis-drinking-water",
    title: "Reverse Osmosis Drinking Water in Central Florida",
    h1: "Reverse Osmosis Drinking Water in Central Florida (2026)",
    metaTitle: "Reverse Osmosis Drinking Water in Central FL | Pure Agua",
    metaDescription:
      "Under-sink reverse osmosis for Central Florida homes. What it removes (PFAS, chloramines, TDS), what it costs, and how to install it right.",
    bluf: BLUF_RO,
    heroImage: "/images/service-hero/reverse-osmosis.jpg",
    sections: [
      {
        h2: "What reverse osmosis actually removes",
        body: `Reverse osmosis is a pressure-driven membrane separation process. Tap water at line pressure (typically 50 to 80 psi in Central Florida municipal supply) is pushed against a semi-permeable membrane with pores around 0.0001 microns. Water molecules pass through; dissolved solids, ions, and organic molecules above that size are rejected to a waste line. NSF/ANSI Standard 58 is the certification that covers RO systems for point-of-use treatment. A certified Standard 58 system reduces TDS by 95 to 99%, including lead, arsenic, fluoride, nitrate, sodium, sulfate, chloramines, and many pesticide and pharmaceutical residues. The EPA's April 2024 PFAS National Primary Drinking Water Regulation set enforceable Maximum Contaminant Levels for PFOA and PFOS at 4 ppt (parts per trillion). NSF International testing has confirmed RO membranes achieve over 90% PFAS reduction. RO is the only point-of-use technology that consistently handles PFAS at NSF/ANSI 58 levels.`,
      },
      {
        h2: "Why RO matters for Central Florida specifically",
        body: `OUC and Toho Water Authority both chloraminate the finished water. Chloramine is more stable in the distribution loop than free chlorine, which is a benefit for the utility but a problem for taste and for the home reverse-osmosis stage. Standard granular activated carbon (GAC) is slow at reducing chloramines; catalytic carbon is the right media. A four- or five-stage RO system pairs a sediment pre-filter, two carbon stages (one catalytic, one polishing GAC), the RO membrane, and a final polishing carbon post-filter. The result at the dedicated tap is water with a TDS reading typically between 5 and 25 ppm, compared to municipal-supply TDS of 200 to 500 ppm in much of Central Florida. RO water has neither the chloramine taste of municipal supply nor the mineral grit of well water. For ice, it makes crystal-clear cubes. For coffee and tea, it changes the cup noticeably. For households that have been buying bottled water, it ends the habit.`,
      },
      {
        h2: "What about the minerals?",
        body: `RO removes calcium and magnesium along with everything else. The World Health Organization noted in a 2005 review (Health Risks from Drinking Demineralised Water) that long-term consumption of fully demineralized water is not ideal because it lacks the trace minerals found in mineral-rich source water. The same review noted that the minerals removed by RO are easily obtained from food, and that re-mineralization is straightforward where it matters. Most modern RO systems can be specified with a re-mineralization post-filter that adds a small amount of calcium and magnesium back at the polishing stage. The output TDS rises slightly (typically to the 30 to 60 ppm range), the taste is rounder, and the nutritional argument goes away. We offer re-mineralization as an option on every RO install; for households that prefer the cleaner taste of pure RO output, we leave it off.`,
      },
      {
        h2: "Wastewater: the real number",
        body: `RO has a reputation for wasting water. Older systems sent four to six gallons of reject water to drain per gallon of permeate produced. Modern systems we install run closer to one to one through a permeate-pump design, or as low as half-to-one through a tankless RO with an internal booster pump. Over a year of typical kitchen use (a family of four uses roughly 15 to 25 gallons of permeate per week for drinking, cooking, and ice), the reject volume on a modern system is comparable to one or two extra dishwasher cycles. The reject line ties into the same drain as the dishwasher with a code-compliant air gap. The waste is not zero, and there is no honest argument that it is, but the volume on a modern system is small enough that the bottled-water replacement math comes out heavily in favor of the RO.`,
      },
      {
        h2: "Sizing and installation",
        body: `Most under-sink RO systems are rated by membrane production at standard test conditions (50 psi, 77 F, 500 ppm TDS feed). A 50 GPD membrane is the most common residential size; a 75 GPD membrane is better for larger households or where the fridge ice maker pulls heavily. Storage tank size matters too: a 3-gallon tank holds enough permeate for routine kitchen use; for households that fill water bottles or run the ice maker hard, a 4-gallon tank is more comfortable. Installation is under the kitchen sink, plumbed into the cold-water line with a saddle valve or angle-stop tee. The reject line ties into the disposal or the drain tailpiece above the trap. A dedicated faucet is drilled into the sink deck (or fitted to an existing air-gap hole if the sink has one). The fridge line is teed off the storage tank with a 1/4-inch line. A typical install runs 90 minutes to two hours.`,
      },
      {
        h2: "Maintenance schedule",
        body: `Sediment and carbon pre-filters change every six to twelve months. The pre-filter schedule is what protects the membrane; running pre-filters past their life lets chlorine or chloramine reach the membrane and damage it. The RO membrane itself typically lasts two to five years on Central Florida feed water, longer when a softener is installed upstream and feeds the RO with already-softened water. A post-filter (polishing GAC) changes every 12 months. The storage tank bladder pressure should be checked annually and re-charged if it has dropped (typical fill pressure is 7 psi when the tank is empty). The dedicated faucet does not need maintenance. Whole annual service typically runs $80 to $150 for filters and labor; membrane replacement runs $80 to $150 every two to five years. Pure Agua offers an annual service plan that schedules the filter changes and includes a TDS reading at every visit.`,
      },
      {
        h2: "Common mistakes (and how to avoid them)",
        body: `The most common RO mistake is installing on raw well water without a softener upstream. RO membranes foul fast when the feed water is hard, iron-bearing, or sulfide-bearing. On a well, soften first and remove iron and sulfur first; the RO is the polish, not the workhorse. The second most common mistake is sizing too small a storage tank for the kitchen's actual demand. If the ice maker fills the storage tank faster than the membrane can refill it, the household gets stuck waiting for water. The third is letting pre-filters run past their replacement date. Pre-filters cost $20 to $40; replacement membranes cost $80 to $150 and a fouled membrane can fail in months instead of years. The fourth is buying an "alkaline" or "hydrogen" RO unit at a 3x markup over a standard NSF 58-certified system. The water-quality literature does not support alkaline drinking water claims; a re-mineralization post-filter on a standard RO gives you the taste benefit without the markup.`,
      },
      {
        h2: "Next steps",
        body: `If you are in Central Florida and you have a bottled-water habit, an RO at the kitchen tap pays for itself inside 12 to 24 months on bottled-water savings alone. We test the feed water, scope the install, and quote in writing. For deeper background, our <a href="/water-treatment/central-florida-hard-water">hard water guide</a> covers the upstream softening question, and our <a href="/water-treatment/florida-well-water">well water guide</a> covers the well-stack sequencing. The <a href="/blog/pfas-central-florida-2026">PFAS article</a> covers the 2024 EPA rule in detail. We install in <a href="/reverse-osmosis-in-kissimmee-fl">Kissimmee</a>, <a href="/reverse-osmosis-in-orlando-fl">Orlando</a>, and 18 other Central Florida cities.`,
      },
    ],
    decision: [
      { condition: "Buying bottled water for daily drinking", action: "Under-sink RO at the kitchen tap (pays back in 12 to 24 months)" },
      { condition: "Concerned about PFAS in municipal supply", action: "NSF/ANSI 58 certified RO (90%+ PFAS reduction confirmed by NSF testing)" },
      { condition: "Already have a softener, want sodium out of drinking water", action: "Under-sink RO downstream of the softener at the kitchen tap" },
      { condition: "Heavy ice-maker or water-bottle use in the household", action: "75 GPD membrane + 4-gallon storage tank + permeate pump" },
      { condition: "Well water with iron and sulfur", action: "Treat the well first (AIO + softener), then add RO at the kitchen" },
      { condition: "Want a rounder taste than pure RO output", action: "Add a re-mineralization post-filter to the RO stack" },
    ],
    callPro: [
      "Your municipal supply is chloraminated and the taste at the tap has not improved with a pitcher filter",
      "You have heard about PFAS in Central Florida and want a real treatment, not a press release",
      "You are buying bottled water for daily drinking and your monthly bottled-water spend is over $25",
      "Your existing RO is more than five years old and has never had a membrane change",
      "You have a fridge ice maker that fills slowly or makes cloudy ice",
      "You want a kitchen filtration system that handles lead, arsenic, fluoride, and nitrates in a single stage",
    ],
    faqs: [
      { q: "Does reverse osmosis remove PFAS?", a: "Yes. NSF International testing has documented over 90% PFAS reduction across NSF/ANSI 58 certified RO systems. The EPA's April 2024 PFAS rule set enforceable MCLs for PFOA and PFOS at 4 ppt; RO is the only point-of-use technology that reliably treats below those levels." },
      { q: "How much water does an RO system waste?", a: "Older systems wasted four to six gallons per gallon produced. Modern systems we install run closer to one to one, or down to half-to-one through tankless RO. Over a year of typical kitchen use the waste is comparable to one or two extra dishwasher cycles." },
      { q: "Is RO water bad for you because the minerals are removed?", a: "No. The WHO has documented that the minerals removed by RO are easily obtained from food. If you prefer a rounder taste, a re-mineralization post-filter adds a small amount of calcium and magnesium back at the polishing stage. We offer it as a standard option." },
      { q: "Can I install RO on well water?", a: "Yes, but treat the well first. RO membranes foul quickly on raw well water with iron, sulfur, or high hardness. Soften and remove iron and sulfur upstream; the RO is the polishing stage, not the workhorse." },
      { q: "How often do RO filters need changing?", a: "Sediment and carbon pre-filters every six to twelve months. The membrane every two to five years (longer when fed softened water). A polishing post-filter every 12 months. Pure Agua offers an annual service plan that handles the schedule." },
      { q: "Will an RO system feed my refrigerator ice maker?", a: "In most cases yes. We tee off the storage tank to feed the fridge water dispenser and ice maker when the run is short enough to maintain pressure. On longer runs we add a permeate pump. Plan on a 4-gallon storage tank if the ice maker is the primary draw." },
    ],
  },
];

export function getPillar(slug: string): Pillar | undefined {
  return pillars.find((p) => p.slug === slug);
}
