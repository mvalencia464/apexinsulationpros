// src/config/site.ts
// ─────────────────────────────────────────────────────────────
// Apex Insulation Pros — single source of truth for the site.
// ─────────────────────────────────────────────────────────────

const MEDIA = "https://media.stokeleads.com/apexinsulationpros";

export const SITE = {
  name: "Apex Insulation Pros",
  tagline: "Precision insulation for Florida homes and buildings",
  /** Primary line (St Augustine / First Coast). Central/SW: see `phoneAlt`. */
  phone: "(904) 574-7036",
  /** Alternate line — not shown sitewide until you wire a second number in UI */
  phoneAlt: "(863) 844-2490",
  email: "Info@apexinsulationpros.com",
  address: "517 Cherry Elm Dr, St Augustine, FL 32092",
  city: "St Augustine",
  state: "FL",
  /** Set when verified; hero hides license line if empty */
  licenseNumber: "",

  brandLogoUrl: `${MEDIA}/logo.avif`,

  palette: {
    deep: "#1A1A1A",
    surface: "#121212",
    panel: "#161616",
    panel2: "#1E1E1E",
    border: "rgba(0, 227, 253, 0.18)",
    accent: "#FF9100",
    accent2: "#00E3FD",
    gold: "#FFB547",
    text: "#F4F4F5",
    muted: "rgba(244, 244, 245, 0.7)",
  },

  r2Folder: "apexinsulationpros",

  businessHours: "Monday–Friday 7am–5pm · Saturday 8am–12pm",

  primaryContact: {
    name: "Austin Johnson",
    title: "Co-founder",
    image: `${MEDIA}/apex-9.avif`,
  },

  founders: [
    {
      name: "Austin Johnson",
      role: "Co-founder",
      headshot: `${MEDIA}/apex-9.avif`,
      placeholder: false,
    },
    {
      name: "Partner (name coming soon)",
      role: "Co-founder",
      headshot: `${MEDIA}/apex-6.avif`,
      placeholder: true,
    },
  ],

  foundersQuote:
    "Most companies just add more fluff to your attic. We diagnose the thermal leaks in your home's skin and seal them for good. We don't just insulate; we protect your wallet and your health.",

  foundersStory:
    "Apex Insulation Pros is owner-led by Austin Johnson and a co-founder partner, built for Florida's heat, humidity, and insurance-heavy repair cycles. We focus on attic and wall performance—not minimum-code shortcuts—with clear scopes and clean job sites from walkthrough to final inspection.",

  seoTitle: "Apex Insulation Pros | Spray Foam & Insulation | Jacksonville, Orlando, Tampa & St Augustine",
  seoDescription:
    "Spray foam, blown-in, radiant barrier, removal, and attic or wall insulation for residential, commercial, new construction, and multi-family across Northeast, Central, and Southwest Florida.",
  seoKeywords:
    "spray foam insulation Florida, blown in insulation removal, radiant barrier Jacksonville Orlando Tampa, attic insulation St Augustine, commercial insulation Florida, insurance insulation restoration",

  navLinks: [
    { label: "Services", href: "/#services" },
    { label: "Gallery", href: "/#gallery" },
    { label: "Service Areas", href: "/service-areas" },
    { label: "About", href: "/#about" },
    { label: "Reviews", href: "/#reviews" },
    { label: "Contact", href: "/contact" },
  ],

  hero: {
    heading: "Florida Insulation Done Right",
    subheading:
      "Spray foam, blown-in, radiant barriers, and professional removal across NE, Central, and SW Florida. We seal your envelope so HVAC stops fighting 150°F+ attic air.",
    ctaText: "Call for a Free Insulation Consultation",
    image: `${MEDIA}/apex-1.avif`,
    badges: [
      "Attic & wall specialists",
      "Residential · commercial · new construction",
      "Insurance-friendly documentation",
    ],
    trustItems: [
      { label: "Google & Facebook", value: "5-star service goal", detail: "We earn trust on every job." },
      { label: "Florida coverage", value: "Jacksonville · Orlando · Tampa", detail: "Plus surrounding NE, Central & SW markets." },
      { label: "Thermal focus", value: "Envelope-first", detail: "Diagnostics, not just more material." },
      { label: "Hours", value: "M–F 7–5", detail: "Sat 8–12 · St Augustine based" },
    ],
  },

  servicesHeading: "Insulation Services Across Florida",

  servicesIntro:
    "From spray foam to blown-in removal, we deliver insulation that matches Florida humidity, heat, and insurance-driven rebuilds.",

  servicesCtaLine:
    "Need a custom scope? We handle residential, commercial, new construction, and multi-family projects across our service regions.",

  services: [
    {
      slug: "spray-foam-insulation",
      title: "Spray Foam Insulation",
      shortDesc: "High-performance air sealing and R-value for attics, walls, and metal buildings.",
      fullDesc:
        "Closed- and open-cell spray foam options for Florida homes and commercial shells. We target air leakage planes, rim joists, roof decks, and wall cavities so conditioned air stays inside and attic extremes stay out of your ducts and rooms.",
      image: `${MEDIA}/apex-2.avif`,
      icon: "SF",
      highlights: [
        "Air-sealing-first installation",
        "Code-aware thickness and vent strategy",
        "New construction and retrofit",
      ],
    },
    {
      slug: "blown-in-insulation-removal",
      title: "Blown-In Insulation Removal",
      shortDesc: "Vacuum removal of dirty loose-fill before sanitation or re-insulation.",
      fullDesc:
        "Old blown-in can hold dust, allergens, and rodent dander. We remove it safely, contain dust, and prep the attic floor for sanitation and a clean reinstall—your home health reset before new material goes down.",
      image: `${MEDIA}/apex-7.avif`,
      icon: "BR",
      highlights: ["Contained vacuum removal", "Attic floor prep", "Ready for spray or new blown-in"],
    },
    {
      slug: "blown-in-insulation",
      title: "Blown-In Insulation",
      shortDesc: "Fresh loose-fill for attics and sloped ceilings with even coverage depth.",
      fullDesc:
        "When spray foam is not the right fit, we install new blown-in fiberglass or cellulose to depth targets that meet code and performance goals, with attention to chases, baffles, and hatch details.",
      image: `${MEDIA}/apex-11.avif`,
      icon: "BI",
      highlights: ["Depth-mapped coverage", "Works with radiant barrier plans", "Cost-effective upgrades"],
    },
    {
      slug: "radiant-barrier-insulation",
      title: "Radiant Barrier Insulation",
      shortDesc: "Reflective systems to cut radiant heat gain in vented attics.",
      fullDesc:
        "Radiant barriers reduce heat transfer from roof decks to living space in Florida's sun. We install foil-faced assemblies and hybrid strategies that pair with your existing or new insulation package.",
      image: `${MEDIA}/apex-5.avif`,
      icon: "RB",
      highlights: ["Ideal for hot inland attics", "Pairs with spray or blown-in", "Ventilation-aware layouts"],
    },
    {
      slug: "attic-wall-insulation",
      title: "Attic & Wall Insulation",
      shortDesc: "Targeted retrofits for hot rooms, bonus spaces, and open-wall access.",
      fullDesc:
        "Most crews stop at the attic. We retrofit wall cavities and tricky bonus rooms where Florida homes lose performance—precision filling at stud bays, knee walls, and shared ceiling planes.",
      image: `${MEDIA}/apex-6.avif`,
      icon: "AW",
      highlights: ["Wall cavity expertise", "Hot-room corrections", "Works with remodel openings"],
    },
    {
      slug: "residential-insulation",
      title: "Residential Insulation",
      shortDesc: "Whole-home packages for single-family homes and townhomes.",
      fullDesc:
        "Attic, crawl, rim, and wall packages sized for real occupancy—not generic square-foot guesses. Clear options from good-better-best with predictable energy and comfort outcomes.",
      image: `${MEDIA}/apex-8.avif`,
      icon: "RE",
      highlights: ["Single-family focus", "Clear written scopes", "Respect for living spaces"],
    },
    {
      slug: "commercial-insulation",
      title: "Commercial Insulation",
      shortDesc: "Metal buildings, retail shells, and multi-trade coordination.",
      fullDesc:
        "Spray foam for steel frames, roof decks, and conditioned warehouses. We coordinate lift windows, fire assemblies as specified, and GC schedules so your envelope hits commissioning dry and tight.",
      image: `${MEDIA}/apex-3.avif`,
      icon: "CO",
      highlights: ["Steel frame and deck experience", "GC-friendly scheduling", "Large-area crews"],
    },
    {
      slug: "new-construction-insulation",
      title: "New Construction Insulation",
      shortDesc: "Performance above minimum code for builders and owners.",
      fullDesc:
        "Pre-drywall foam and batt hybrid details, air barrier continuity, and blower-door-minded sequencing. We help owners avoid day-one high bills when builders spec only code-minimum insulation.",
      image: `${MEDIA}/apex-10.avif`,
      icon: "NC",
      highlights: ["Builder coordination", "Air barrier details", "Performance packages"],
    },
    {
      slug: "multi-family-insulation",
      title: "Multi-Family Insulation",
      shortDesc: "Podiums, wrap buildings, and repeating unit details.",
      fullDesc:
        "Shared walls, corridor ceilings, and attic commons need repeatable quality. We align specs across stacks and keep penetrations flashed so energy models and comfort targets survive turnover.",
      image: `${MEDIA}/apex-15.avif`,
      icon: "MF",
      highlights: ["Repeatable unit details", "Common-area attics", "Developer-friendly reporting"],
    },
    {
      slug: "insurance-insulation-restoration",
      title: "Insurance & Restoration Insulation",
      shortDesc: "Documentation and replacement scopes after storm or water loss.",
      fullDesc:
        "Hurricane and water damage often ruin insulation before drywall is touched. We photograph existing conditions, remove wet or contaminated material, and provide scopes carriers understand for reinsulation.",
      image: `${MEDIA}/apex-14.avif`,
      icon: "IN",
      highlights: ["Photo and moisture notes", "Removal + dry-down coordination", "Reinstall packages"],
    },
  ],

  about: {
    heading: "Local Insulation Pros. Not a Call Center.",
    body:
      "When you call Apex Insulation Pros, you reach a St Augustine–based team that understands Florida attics, humidity, and insurance timelines. We communicate clearly, recommend only what your envelope needs, and treat occupied homes with respect.",
    image: `${MEDIA}/apex-2.avif`,
    facts: [
      { label: "Coverage", value: "NE · Central · SW FL" },
      { label: "Focus", value: "Attic + wall" },
      { label: "Sectors", value: "Res · Comm · MF" },
      { label: "Base", value: "St Augustine" },
    ],
  },

  reviews: [
    {
      name: "Rachel T.",
      city: "Jacksonville, FL",
      stars: 5,
      text: "Our upstairs finally matches the thermostat. They explained where air was leaking and fixed the attic and knee walls without upselling us on things we did not need.",
    },
    {
      name: "Marcus D.",
      city: "Orlando, FL",
      stars: 5,
      text: "Blown-in removal was messy everywhere else we looked. Apex contained the dust, sanitized, and sprayed foam in three days. Huge difference in dust and allergies inside the house.",
    },
    {
      name: "Elena S.",
      city: "Tampa, FL",
      stars: 5,
      text: "Older bungalow with nasty loose-fill in the attic. They removed it, air-sealed, and added new insulation. Energy bill dropped the next full billing cycle.",
    },
    {
      name: "James P.",
      city: "St Augustine, FL",
      stars: 5,
      text: "Commercial metal building—crew was organized, on time, and the foam looks uniform. GC said they were the easiest trade that week.",
    },
    {
      name: "Priya N.",
      city: "Orange Park, FL",
      stars: 5,
      text: "Insurance job after a leak. Photos and scope were clear for our adjuster. Reinsulation was scheduled fast once approved.",
    },
    {
      name: "Chris L.",
      city: "Lakeland, FL",
      stars: 5,
      text: "New build upgrade from code-minimum batts to hybrid foam. Owner's rep said our blower door result was one of the best in the subdivision.",
    },
    {
      name: "Hannah W.",
      city: "Clearwater, FL",
      stars: 5,
      text: "Radiant barrier plus attic air sealing stopped the afternoon heat spike we felt every summer. Wish we had called sooner.",
    },
    {
      name: "Devon A.",
      city: "Gainesville, FL",
      stars: 5,
      text: "Straightforward quote, showed thermal photos, and delivered exactly what was written. No surprises on invoice.",
    },
  ],

  serviceAreas: [
    "Jacksonville & NE Florida",
    "Orlando & Central Florida",
    "Tampa & SW Florida",
    "St Augustine & First Coast",
  ],

  serviceAreaRegions: [
    {
      slug: "jacksonville-ne-florida",
      title: "Jacksonville & Northeast Florida",
      blurb:
        "Coastal humidity and salt-air exposure punish air barriers. We emphasize sealed roof decks, rim joists, and vapor-smart assemblies so HVAC is not fighting constant infiltration.",
      locations: ["Jacksonville", "St Augustine", "Orange Park", "Fernandina Beach", "Palm Coast", "Lake City"],
    },
    {
      slug: "orlando-central-florida",
      title: "Orlando & Central Florida",
      blurb:
        "Inland heat without coastal breeze makes attic ventilation and radiant control critical. We balance vent paths with insulation upgrades so upstairs zones stay stable.",
      locations: ["Orlando", "Kissimmee", "Sanford", "Lakeland", "Deltona", "Clermont"],
    },
    {
      slug: "tampa-southwest-florida",
      title: "Tampa & Southwest Florida",
      blurb:
        "Older homes and bungalows often need blown-in removal, moisture checks, and modern barriers before reinsulating. We plan for roof leaks and humidity-driven loads.",
      locations: ["Tampa", "Clearwater", "St Petersburg", "Brandon", "Sarasota", "Bradenton"],
    },
  ],

  map: {
    title: "Visit Our Base in St Augustine",
    subtitle: "Serving Jacksonville, Orlando, Tampa, and surrounding NE, Central, and SW Florida markets.",
    image: `${MEDIA}/static-map.avif`,
    link: "https://www.google.com/maps/search/?api=1&query=517+Cherry+Elm+Dr+St+Augustine+FL+32092",
  },

  galleryProjects: [
    { title: "Finished Attic Insulation", category: "Spray foam", image: `${MEDIA}/apex-1.avif` },
    { title: "Residential Attic Spraying", category: "Open cell", image: `${MEDIA}/apex-2.avif` },
    { title: "Commercial Steel Insulation", category: "Large shell", image: `${MEDIA}/apex-3.avif` },
    { title: "Vaulted Ceiling Finishing", category: "Trim & detail", image: `${MEDIA}/apex-5.avif` },
    { title: "Wall Cavity Insulation", category: "Precision fill", image: `${MEDIA}/apex-6.avif` },
    { title: "Insulation Removal", category: "Vacuum removal", image: `${MEDIA}/apex-7.avif` },
    { title: "Sealed Crawl Space", category: "Encapsulation", image: `${MEDIA}/apex-8.avif` },
    { title: "Full House Seal", category: "New construction", image: `${MEDIA}/apex-10.avif` },
    { title: "Spray Foam Texture", category: "Close-up", image: `${MEDIA}/apex-11.avif` },
    { title: "Equipment & Control", category: "Pro systems", image: `${MEDIA}/apex-13.avif` },
    { title: "Trimming Excess Foam", category: "Finish pass", image: `${MEDIA}/apex-14.avif` },
    { title: "Industrial Wall Spraying", category: "Commercial", image: `${MEDIA}/apex-15.avif` },
  ],

  splitFeature: {
    eyebrow: "Fast estimate promise",
    title: "Free Insulation Estimates With Under-24-Hour Follow-Up",
    description:
      "Tell us about comfort issues, high bills, or a new build timeline. We respond quickly with clear next steps—no pressure, no mystery line items.",
    image: `${MEDIA}/apex-12.avif`,
    buttonText: "Request my free estimate",
    buttonHref: "#contact",
  },

  processSteps: [
    { title: "Book a visit", description: "Schedule a consultation or attic walkthrough with an insulation specialist." },
    { title: "Get a clear scope", description: "Photos, measurements, and a written plan with material options and pricing." },
    { title: "Installation", description: "Contained removal (if needed), install, and quality checks on depth and air barrier details." },
    { title: "Final walkthrough", description: "We review completed work, cleanup, and care notes for your new assembly." },
  ],

  ctaBanner: {
    title: "Ready for a cooler, cleaner, more efficient home?",
    subtitle: "Call for insulation removal, spray foam, radiant barriers, and insurance-driven reinsulation across Florida.",
  },

  footerText: "© 2026 Apex Insulation Pros. Licensed & insured. St Augustine, FL.",

  social: {
    facebook: "",
    instagram: "",
    nextdoor: "",
  },
};

export type SiteConfig = typeof SITE;
