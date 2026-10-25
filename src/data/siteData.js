/**
 * Centralized site data for ParkShare
 * All content, links, team info, statistics, URLs and configurations are defined here.
 */

export const siteData = {
  startup: {
    name: "ParkShare",
    tagline: "Share · Park · Go",
    heroHeadline: "Find nearby parking. Share your unused space.",
    heroSubtext: "ParkShare connects drivers with authorized unused parking spaces. Reserve, park and pay only for the time you use.",
    description: "A smart, reservable peer-to-peer parking marketplace connecting drivers with authorized unused private spaces across Greater Mumbai.",
    institution: "Sardar Patel Institute of Technology (SPIT)",
    campus: "Munshi Nagar, Andheri (West), Mumbai 400058",
    academicContext: "Academic startup project of F.Y. MCA students for the Entrepreneurship and IPR course (Experiment 9: Venture Creation)",
    foundedYear: "2026",
    contactEmail: "prathamesh.andhale25@spit.ac.in",
    fullAddress: "Sardar Patel Institute of Technology, Munshi Nagar, Andheri (West), Mumbai - 400058",
  },

  // Editable URLs - Updated automatically during deployment
  urls: {
    repoUrl: "https://github.com/Prathamesh-Andhale/parkshare",
    liveUrl: "https://Prathamesh-Andhale.github.io/parkshare/",
    videoUrl: "", // Paste Google Drive share/preview link here (e.g., https://drive.google.com/file/d/FILE_ID/view)
    docs: {
      startupProfilePdf: "docs/StartupProfile.pdf",
      brochurePdf: "docs/Brochure.pdf",
      bmcPdf: "docs/BMC.pdf",
    }
  },

  // Key Mumbai mobility stats
  stats: [
    {
      value: "14,57,377",
      label: "Registered cars in Greater Mumbai",
      source: "31 March 2025, Maharashtra Transport Department",
      highlight: "Heavy density pressure on curbside parking"
    },
    {
      value: "₹25 – ₹60",
      label: "Per hour introductory pricing",
      source: "Market competitive peer-to-peer rate",
      highlight: "Pay strictly for actual duration parked"
    },
    {
      value: "63.2%",
      label: "Average congestion level in Mumbai",
      source: "2025 TomTom Traffic Index",
      highlight: "Over 20+ mins wasted cruising for parking"
    }
  ],

  // 4 Core Value Propositions
  valueCards: [
    {
      id: "privacy-first",
      title: "Privacy First",
      subtitle: "Approximate location until deposit",
      description: "Only the general radius (approx. 400m) is visible during browsing. Exact address, society gate, and navigation reveal strictly after the refundable deposit is held.",
      badge: "Gated Reveal"
    },
    {
      id: "refundable-deposit",
      title: "Refundable Security Deposit",
      subtitle: "₹300 – ₹500 escrow hold",
      description: "A modest safety hold ensures space reservations are honoured. Promptly credited back upon timely checkout with zero hidden cancellation penalties.",
      badge: "Escrow Protected"
    },
    {
      id: "live-proof",
      title: "Live Arrival & Departure Proof",
      subtitle: "Photo, GPS & timestamp verification",
      description: "Drivers snap a live vehicle photo verified with device GPS coordinates and server timestamp when parking and leaving. Complete accountability for both parties.",
      badge: "Tamper-Proof"
    },
    {
      id: "flexible-billing",
      title: "Flexible Duration Billing",
      subtitle: "Pay only for actual time used",
      description: "No rigid full-day or arbitrary minimum hourly traps. A real-time timer tracks your stay down to the minute so you only pay for what you actually use.",
      badge: "Fair Metering"
    }
  ],

  // Audience Segments
  audiences: {
    drivers: {
      title: "For Drivers",
      subtitle: "Never cruise the block searching for a spot again",
      points: [
        "Guaranteed, reservable parking spaces near your destination before arrival",
        "Transparent pricing from ₹25–₹60/hr with no surge gouging",
        "Hassle-free navigation directly to authorized society/private slots",
        "Digital receipt and photo timestamp trail for complete parking safety"
      ]
    },
    providers: {
      title: "For Parking Providers",
      subtitle: "Monetize your vacant driveway, stilt, or society parking slot",
      points: [
        "Zero hardware investment: no IoT barriers, sensors, or smart locks required",
        "Set your own custom availability schedules (weekdays 9am–6pm, weekends, etc.)",
        "Vetted drivers with verified ID, phone, vehicle plates, and security deposits",
        "Automated UPI payouts deposited directly into your bank account"
      ]
    }
  },

  // 7-Step Vertical Timeline for How It Works
  howItWorksSteps: [
    {
      step: 1,
      title: "Search by Approximate Distance",
      description: "Enter your destination in Mumbai. ParkShare displays available verified spaces with distance radius (e.g. 'approx. 400 m away') and hourly rates without compromising homeowner privacy."
    },
    {
      step: 2,
      title: "Select Space & Pay Refundable Deposit",
      description: "Pick the best spot for your vehicle size and authorize a refundable security deposit of ₹300–₹500 via UPI/card to secure your reservation window."
    },
    {
      step: 3,
      title: "Exact Location & Navigation Revealed",
      description: "Once the deposit is authorized, the exact building name, wing, slot number, provider instructions, and turn-by-turn navigation are unlocked."
    },
    {
      step: 4,
      title: "Tap 'I Have Arrived'",
      description: "Upon parking in the designated slot, tap arrival. The app captures a live photo of your parked car with device GPS coordinates and an unalterable timestamp."
    },
    {
      step: 5,
      title: "Parking Timer & Running Charge",
      description: "Your session active timer starts ticking. You can view running parking fees in real time with automated notifications before your slot availability expires."
    },
    {
      step: 6,
      title: "Tap 'I Am Leaving'",
      description: "When ready to depart, tap departure and take a quick departure photo confirming the slot is vacated cleanly. The timestamp precisely stops the meter."
    },
    {
      step: 7,
      title: "Final Fee Settlement & Deposit Refund",
      description: "The actual parking duration is computed. The parking fee and modest platform fee are deducted, and your security deposit is instantly released."
    }
  ],

  // Team
  team: [
    {
      name: "Prathamesh Andhale",
      id: "2025510002",
      role: "Team Lead & Full-stack Development",
      initials: "PA",
      bio: "F.Y. MCA student at SPIT focusing on system architecture, web platforms, and mobile-first application delivery.",
    },
    {
      name: "Swapnil Bhiungade",
      id: "2025510007",
      role: "Product & Research",
      initials: "SB",
      bio: "F.Y. MCA student at SPIT leading urban mobility market studies, pricing algorithms, and parking demand mapping.",
    },
    {
      name: "Vedant Bhushette",
      id: "2025510008",
      role: "Design & Business Analysis",
      initials: "VB",
      bio: "F.Y. MCA student at SPIT shaping UI/UX design systems, user journey validation, and unit economics modelling.",
    },
    {
      name: "Dev Tayade",
      id: "2025510064",
      role: "Operations & Documentation",
      initials: "DT",
      bio: "F.Y. MCA student at SPIT directing regulatory compliance research, provider onboarding workflows, and operational safety.",
    }
  ],

  // Mission, Vision, Story, Values
  mission: "Reduce the time, fuel waste, and stress of urban parking in dense Indian cities while empowering authorized space providers to monetize dormant capacity safely.",
  vision: "To build India's most trusted, technology-enabled peer-to-peer parking marketplace, beginning with a high-density Greater Mumbai pilot.",
  story: "The idea for ParkShare was born directly from the daily commute in Mumbai: watching private stilt parking and residential driveways sit idle during office hours while drivers circle congested Andheri and Bandra streets for 30 minutes burning fuel. By combining transaction-gated privacy with live photo-GPS proof, we created a frictionless bridge between unused private capacity and urban drivers.",
  
  values: [
    { name: "Trust", desc: "Two-way accountability through verified photo/GPS timestamps and mutual security deposits." },
    { name: "Privacy", desc: "Provider locations and society details are strictly gated until a deposit commitment is made." },
    { name: "Fairness", desc: "Drivers pay strictly for the actual duration parked; providers receive fair, guaranteed payouts." },
    { name: "Convenience", desc: "Zero hardware required for hosts; seamless instant UPI booking and navigation for drivers." }
  ],

  // Milestones
  milestones: [
    { phase: "01", title: "Idea & Patent Survey", status: "Completed", desc: "Investigated prior art, urban mobility patents, and P2P parking models across global & Indian metros." },
    { phase: "02", title: "Market Analysis", status: "Completed", desc: "Analyzed Mumbai RTO data (14.5L+ cars) and TomTom 2025 congestion index (63.2%) for corridor selection." },
    { phase: "03", title: "Business Model Canvas", status: "Completed", desc: "Formulated the 9-block business model, pricing elasticity, unit economics, and provider acquisition." },
    { phase: "04", title: "Prototype & Live Site", status: "Active Practical", desc: "Interactive 7-step PWA prototype, downloadable startup profile, brochure, and investor deck." }
  ],

  // Business Model Canvas 9 Blocks
  bmc: {
    keyPartners: {
      title: "Key Partners",
      items: [
        "UPI & Payment Gateways (Razorpay, Cashfree) for instant holds and automated refunds",
        "Maps & Geolocation Services (MapmyIndia, Google Maps API) for routing & geofencing",
        "Authorized Space Providers (residential societies, standalone bungalows, clinics, retail shops, offices)",
        "Cloud & Verification Partners (AWS/Firebase for storage and tamper-proof timestamping)",
        "Legal, Insurance & Compliance Advisors for municipal regulations and liability frameworks"
      ]
    },
    keyActivities: {
      title: "Key Activities",
      items: [
        "Onboarding & verifying parking spaces and host authorization documents",
        "Running seamless search, booking, location gating, and payment flows",
        "Capturing & validating live photo, GPS, and timestamp evidence",
        "Managing automated deposit holds, duration calculations, and refund processing",
        "Handling customer support, dispute resolution, and fraud prevention"
      ]
    },
    keyResources: {
      title: "Key Resources",
      items: [
        "Cross-platform mobile and responsive web application with secure REST APIs",
        "Geolocation, geofencing, and camera-proof verification engine",
        "Escrow-like micro-deposit and payment settlement infrastructure",
        "Network of vetted, verified residential and commercial parking spots",
        "Brand reputation, operational safety protocols, and customer care workflows"
      ]
    },
    valuePropositions: {
      title: "Value Propositions",
      items: [
        "Drivers: Nearby reservable parking on demand; transparent ₹25–₹60/hr pricing; zero cruising stress",
        "Privacy-First: Exact location gated until ₹300–₹500 refundable deposit is confirmed",
        "Live Proof: Tamper-proof photo, GPS, and timestamp trail protecting both host and driver",
        "Actual-Duration Billing: Pay strictly for minutes parked without unfair hourly rounding",
        "Providers: Passive monthly earnings from idle spaces with zero hardware or sensor expense"
      ]
    },
    customerRelationships: {
      title: "Customer Relationships",
      items: [
        "Self-service, intuitive mobile interface with instant notifications",
        "Frictionless host onboarding with clear slot management tools",
        "In-app live chat and dispute support backed by photographic timestamps",
        "Mutual rating system building trusted community standing",
        "Clear, transparent violation penalty terms agreed upon booking"
      ]
    },
    channels: {
      title: "Channels",
      items: [
        "Mobile App (Android/iOS) and Progressive Web Application (PWA)",
        "Provider Web Portal for society secretaries and multi-slot owners",
        "Hyperlocal digital marketing targeted around dense transit & commercial hubs",
        "Driver referral codes and provider onboarding bonuses",
        "Physical QR stands & banners at society gates, commercial plazas, and clinics"
      ]
    },
    customerSegments: {
      title: "Customer Segments",
      items: [
        "Urban car drivers seeking reliable short-duration parking in congested pockets",
        "Office commuters, hospital visitors, shoppers, restaurant patrons, and event attendees",
        "Supply: Homeowners, bungalow owners, and small shopkeepers with vacant driveways/stilts",
        "Later Phase: Housing societies (CHSs) with surplus visitor parking & commercial lots"
      ]
    },
    costStructure: {
      title: "Cost Structure",
      items: [
        "Core engineering, product design, and operations team salaries",
        "User & provider acquisition, hyperlocal awareness marketing, and brand collateral",
        "Cloud hosting, database infrastructure, and photo storage fees",
        "Maps & navigation API licensing fees (Google Maps / MapmyIndia)",
        "Payment gateway transaction fees, escrow banking charges, and legal/insurance costs"
      ]
    },
    revenueStreams: {
      title: "Revenue Streams",
      items: [
        "~15% commission fee per completed parking transaction",
        "Modest convenience/service fee charged to drivers per booking (₹5–₹10)",
        "Premium provider subscription tiers (featured listings, multi-slot analytics)",
        "Forfeited violation fees and late overstay penalty commissions",
        "Targeted local automotive and mobility advertising partnerships"
      ]
    }
  },

  // Unit Economics
  unitEconomics: {
    hourlyRate: "₹50",
    avgDuration: "1.5 hours",
    avgBookingValue: "₹75.00",
    takeRate: "15%",
    commissionPerBooking: "₹11.25",
    driverFee: "₹5.00",
    netRevenuePerBooking: "₹16.25",
    monthlyVolumeTarget: "60,000 bookings",
    projectedMonthlyRevenue: "₹6.75 Lakh commission (excl. driver fees)",
    disclaimer: "Illustrative unit economics, subject to validation during the Greater Mumbai pilot phase."
  },

  // Competitive Comparison
  competition: {
    summary: "While legacy players focus on commercial lots, ParkShare taps into distributed private driveways with transaction-gated security.",
    competitors: [
      { name: "Park+", focus: "FASTag, society access & commercial malls", limitation: "Limited peer-to-peer residential driveway inventory" },
      { name: "Get My Parking", focus: "B2B enterprise digitization for smart parking operators", limitation: "Enterprise hardware heavy; no consumer P2P sharing" },
      { name: "ParkSmart", focus: "IoT sensor-based parking automation", limitation: "Requires hardware retrofitting per space" },
      { name: "Municipal Pay & Park (MCGM)", focus: "Street-side curbside parking", limitation: "Unpredictable availability, cash-heavy, zero reservations" }
    ],
    ourEdge: "ParkShare unlocks distributed, zero-hardware private supply with gated privacy, escrow deposits, and live photo-GPS timestamps."
  },

  // Why ParkShare is Different
  differentiators: [
    { title: "Transaction-Gated Location Reveal", desc: "Protects host privacy by withholding exact apartment/bungalow addresses until an escrow deposit is committed." },
    { title: "Live Arrival & Departure Proof", desc: "Mandatory camera and GPS logging prevents disputes over vehicle damage, overstay, or phantom bookings." },
    { title: "Actual-Duration Billing", desc: "Drivers are metered down to the minute rather than paying for wasted half-hours or round-up charges." },
    { title: "Deposit-Based Accountability", desc: "Pre-authorized ₹300–₹500 refundable deposits incentivize punctual departure and respect for host premises." },
    { title: "Zero Hardware Dependency", desc: "Hosts list in 3 minutes without purchasing expensive IoT locks, boom barriers, or sensors." }
  ],

  // Roadmap
  roadmap: [
    { period: "6 Months", milestone: "Andheri & BKC Pilot", target: "1–2 dense Mumbai clusters; 300–500 active verified parking spaces; 10,000 completed bookings." },
    { period: "2 Years", milestone: "Greater Mumbai Expansion", target: "Coverage across Bandra, Lower Parel, Dadar, Powai & South Mumbai; 3,000+ active spaces." },
    { period: "3 Years", milestone: "MMR & Pune Corridor", target: "Scale into Thane, Navi Mumbai, and Pune metropolitan regions; pilot commercial society integrations." },
    { period: "5 Years", milestone: "Pan-India Metros", target: "Expand into Bengaluru, Delhi-NCR, and Hyderabad; corporate campus parking optimization." }
  ],

  // Academic IP Note
  ipNote: "IP documents (patent, trade mark and copyright forms) were prepared as part of an academic exercise for the Entrepreneurship and IPR course at SPIT Mumbai. Nothing has been filed, granted or registered."
}
