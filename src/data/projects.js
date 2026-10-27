/**
 * Featured Design Projects Data
 * Pure JavaScript data source for the interactive portfolio gallery
 */

export const PROJECTS = [
  {
    id: 'aether-infinity',
    title: 'Aether Infinity · Next-Gen Wealth OS',
    subtitle: 'High-density fintech mobile application with real-time portfolio mechanics',
    category: 'Product Design',
    discipline: 'Mobile App / Design System / FinTech',
    year: '2026',
    client: 'Aether Financial AG (Zurich)',
    timeline: '5 Months',
    role: 'Lead Product Designer & Design Architect',
    featured: true,
    coverImage: '/src/assets/images/project_fintech_app_1793074942106.jpg',
    summary: 'A revolutionary cross-border wealth management experience built for private equity and digital assets. Crafted to balance dense financial telemetry with serene optical clarity.',
    challenge: 'Private wealth investors faced fragmented desktop dashboards with high cognitive overload and slow transaction workflows averaging 6.4 minutes.',
    solution: 'Designed an ambient, dark-mode native mobile OS with haptic micro-interactions, gesture-driven asset rebalancing, and instant frictionless transfers.',
    impactMetrics: [
      { label: 'Avg Workflow Time', value: '1.2m', note: 'Down from 6.4m' },
      { label: 'Weekly Active Rate', value: '88.4%', note: 'Industry avg 42%' },
      { label: 'Capital Onboarded', value: '$1.4B', note: 'Within 90 days' },
      { label: 'App Store Rating', value: '4.95', note: 'Over 12,000 reviews' }
    ],
    deliverables: [
      'Comprehensive Design System (180+ tokens)',
      'iOS & Android native design specifications',
      'Interactive prototype with live tactile feedback',
      'Biometric authentication UX flows'
    ],
    palette: [
      { name: 'Obsidian Slate', hex: '#0B0F14' },
      { name: 'Aurora Cyan', hex: '#2DD4BF' },
      { name: 'Iridescent Indigo', hex: '#6366F1' },
      { name: 'Surface Gray', hex: '#1E293B' },
      { name: 'Pure Frost', hex: '#F8FAFC' }
    ],
    prototypeStats: {
      activeBalance: '$32,150.80',
      change24h: '+4.5%',
      tier: 'Diamond Member',
      cardsCount: 3
    }
  },
  {
    id: 'aethel-botanicals',
    title: 'Aethel · Maison de Parfum',
    subtitle: 'Bespoke fragrance brand identity, tactile packaging, and spatial commerce',
    category: 'Brand Architecture',
    discipline: 'Brand Identity / Packaging / Art Direction',
    year: '2025',
    client: 'Aethel Fragrances (Grasse & London)',
    timeline: '4 Months',
    role: 'Art Director & Packaging Designer',
    featured: true,
    coverImage: '/src/assets/images/project_brand_identity_1793074942777.jpg',
    summary: 'An haute perfumery brand identity rooted in botanical alchemy and sustainable luxury. Encompassing custom typography, tactile blind debossing, and amber flacon design.',
    challenge: 'A legacy perfumery family needed to re-enter the ultra-luxury niche without falling into clinical modernism or dated Victorian tropes.',
    solution: 'Engineered a warm tactile identity with hand-illustrated wildflower engravings, unbleached linen textures, custom brass seal hardware, and museum-grade stationery.',
    impactMetrics: [
      { label: 'Retail Sell-Out', value: '100%', note: 'Initial 5,000 units' },
      { label: 'Editorial Features', value: '28+', note: 'Vogue, Wallpaper*, Monocle' },
      { label: 'Packaging Award', value: 'Gold', note: 'Pentawards Luxury 2025' },
      { label: 'D2C Conversion', value: '6.8%', note: '2.4x luxury benchmark' }
    ],
    deliverables: [
      'Custom bespoke serif display wordmark',
      'Amber flacon bottle & wooden cap technical CADs',
      'Textured stationery & wax-seal packaging suite',
      'Immersive digital commerce art direction'
    ],
    palette: [
      { name: 'Amber Resin', hex: '#D97706' },
      { name: 'Warm Parchment', hex: '#F5EFEB' },
      { name: 'Forest Oak', hex: '#292524' },
      { name: 'Antique Gold', hex: '#CA8A04' },
      { name: 'Pure Linen', hex: '#FAF7F5' }
    ],
    prototypeStats: {
      botanicalNotes: 'Wildflower & Aged Oak',
      harvestYear: '2025 Reserve',
      concentration: 'Extrait de Parfum (28%)',
      edition: 'Numbered Batch #07'
    }
  },
  {
    id: 'aethereal-audio',
    title: 'Aethereal · Spatial Sound Console',
    subtitle: 'Professional 3D binaural sound stage workstation for mixing engineers',
    category: 'Motion & Audio',
    discipline: 'Spatial UI / Web Audio / Hardware Ergonomics',
    year: '2025',
    client: 'Aethereal Audio Labs (Stockholm)',
    timeline: '6 Months',
    role: 'Principal UX & Interaction Designer',
    featured: true,
    coverImage: '/src/assets/images/project_spatial_audio_1793074943902.jpg',
    summary: 'A hybrid hardware-software spatial workstation designed for film composers and electronic artists to sculpt immersive Dolby Atmos & binaural soundscapes.',
    challenge: 'Spatial audio tools in conventional DAWs were buried under cryptic coordinate fields and 2D panners that interrupted the musical creative flow.',
    solution: 'Created an ergonomic 3D spatial field where audio sources are manipulated like physical acoustic objects in an intuitive virtual room with real-time spectrum feedback.',
    impactMetrics: [
      { label: 'Mix Setup Speed', value: '4x', note: 'From 40min to 10min' },
      { label: 'Latency Overhead', value: '< 2.1ms', note: 'Hardware-synced' },
      { label: 'Producer Adoption', value: '45k+', note: 'Across 62 countries' },
      { label: 'Sound on Sound', value: '5/5', note: 'Gear of the Year 2025' }
    ],
    deliverables: [
      '3D Soundstage viewport interface',
      'Custom rotary encoder hardware layout',
      'Multi-channel visual spectrum analyzer',
      'Real-time Web Audio API interactive engine'
    ],
    palette: [
      { name: 'Deep Nebula', hex: '#0A0C16' },
      { name: 'Sonic Violet', hex: '#818CF8' },
      { name: 'Electric Cyan', hex: '#38BDF8' },
      { name: 'Studio Gunmetal', hex: '#1E2235' },
      { name: 'Luminous Glow', hex: '#E0E7FF' }
    ],
    prototypeStats: {
      engineMode: 'Active 3D Binaural',
      channelsActive: 16,
      latency: '1.8ms buffer',
      frequencyRange: '10Hz - 48kHz'
    }
  },
  {
    id: 'brutalism-monograph',
    title: 'Paehler · Alpine Concrete Architecture',
    subtitle: 'Swiss typographic monograph and architectural exhibition catalog',
    category: 'Editorial & Print',
    discipline: 'Editorial Design / Grid Systems / Swiss Typography',
    year: '2024',
    client: 'Chur Architecture Museum (Graubünden)',
    timeline: '3 Months',
    role: 'Editorial Director & Book Designer',
    featured: true,
    coverImage: '/src/assets/images/project_architectural_monograph_1793074943701.jpg',
    summary: 'A 280-page hardcover architectural monograph documenting brutalist structures across the Swiss Alps. Built on a rigorous 12-column Swiss typographic grid.',
    challenge: 'Translating the tactile mass, raw board-marked concrete grain, and monumental scale of alpine pavilions into an ink-on-paper editorial format.',
    solution: 'Designed a high-contrast layout pairing duotone architectural photography with structural axonometric diagrams and balanced asymmetric whitespace.',
    impactMetrics: [
      { label: 'First Edition Print', value: '2,500', note: 'Sold out in 3 weeks' },
      { label: 'Museum Tour', value: '6 Cities', note: 'Zurich, Basel, Milan, Berlin' },
      { label: 'Typography Award', value: 'TDC 70', note: 'Type Directors Club NYC' },
      { label: 'Page Extent', value: '280 Pages', note: 'FSC Certified Fedrigoni Paper' }
    ],
    deliverables: [
      '280-page hardcover catalog layout',
      'Structural axonometric & cross-section technical drawings',
      'Exhibition typography & wall gallery signage',
      'Bespoke cloth-bound slipcase design'
    ],
    palette: [
      { name: 'Poured Concrete', hex: '#D4D4D8' },
      { name: 'Alpine Granite', hex: '#18181B' },
      { name: 'Draftsman Ink', hex: '#09090B' },
      { name: 'Uncoated Chalk', hex: '#FAFAFA' },
      { name: 'Architectural Ochre', hex: '#B45309' }
    ],
    prototypeStats: {
      gridSystem: '12-Column Swiss Modular',
      paperStock: 'Fedrigoni Arena 140gsm',
      binding: 'Exposed Section Thread Sewn',
      exhibitionScale: '1:100 Architectural Models'
    }
  }
];

export const CATEGORIES = [
  'All Works',
  'Product Design',
  'Brand Architecture',
  'Motion & Audio',
  'Editorial & Print'
];

export const DESIGNER_INFO = {
  name: 'Suresh Dangaura',
  alias: 'Aetheria Studio',
  role: 'Senior Product Designer & Art Director',
  tagline: 'Crafting deliberate digital systems, tactile brand identities, and high-impact digital experiences.',
  location: 'San Francisco · Tokyo · Remote',
  availability: 'Available for Select Q1/Q2 Engagements',
  experienceYears: '8+',
  shippedProducts: '40+',
  awardsWon: '14',
  recommendationRate: '99.4%',
  bio: 'With over eight years of experience bridging deep product architecture with expressive visual craft, I help venture-backed founders and legacy institutions build products that are fast, intuitive, and visually unforgettable.',
  capabilities: [
    {
      num: '01',
      title: 'Design Systems & Token Architecture',
      description: 'Building multi-platform design tokens, accessible component libraries, and scalable design infrastructure across React, Tailwind, and native iOS.'
    },
    {
      num: '02',
      title: 'Digital Product Design & UX',
      description: 'End-to-end UX flow architecture, complex data visualizations, financial interfaces, and high-conversion SaaS workflows.'
    },
    {
      num: '03',
      title: 'Brand Identity & Art Direction',
      description: 'Comprehensive brand marks, bespoke typography, luxury packaging, high-fidelity 3D assets, and cohesive visual identities.'
    },
    {
      num: '04',
      title: 'Motion, Spatial & Prototyping',
      description: 'Micro-interaction physics, tactile haptics, WebGL/3D spatial layouts, and production-ready code prototypes for engineering handoff.'
    }
  ],
  tools: [
    'Figma',
    'React',
    'Tailwind CSS',
    'Framer Motion',
    'Three.js',
    'Principle',
    'Cinema 4D',
    'Git & Next.js'
  ],
  testimonials: [
    {
      quote: 'Working with Suresh was transformative. He completely reimagined our core product architecture and delivered a design system that our engineering team was able to ship in half the anticipated timeframe. The user feedback has been universally stellar.',
      author: 'Marcus Lindqvist',
      title: 'VP of Product',
      organization: 'Aether Financial AG'
    },
    {
      quote: 'Rarely do you find an art director who pairs profound visual elegance with uncompromising technical rigor. The packaging and identity created for our perfume house achieved immediate international recognition.',
      author: 'Camille de Grasse',
      title: 'Creative Director & Founder',
      organization: 'Aethel Fragrances'
    }
  ]
};
