export type PortfolioCategoryKey =
  | 'digital-marketing'
  | 'graphic-design'
  | 'video-editing'
  | 'web-development'
  | 'branding'
  | 'content-creation';

export type PortfolioProject = {
  category: PortfolioCategoryKey;
  slug: string;
  title: string;
  client: string;
  year: string;
  coverImage: string;
  images: readonly string[];
  summary: string;
  problem: string;
  goals: string[];
  challenges: string[];
  strategy: {
    marketing: string;
    design: string;
    growth: string;
    content: string;
  };
  process: { title: string; copy: string }[];
  visuals: { title: string; copy: string }[];
  results: { label: string; value: string; detail: string }[];
  testimonial: { quote: string; author: string; role: string };
  highlight: string;
};

export type PortfolioCategory = {
  key: PortfolioCategoryKey;
  label: string;
  href: string;
  tone: string;
  intro: string;
  layout: 'analytics' | 'masonry' | 'cinematic' | 'browser' | 'editorial' | 'social';
  summary: string;
  projects: PortfolioProject[];
  comingSoon?: {
    headline: string;
    subtext: string;
  };
};

const imageSets = {
  cafe: {
    coverImage: 'https://i.pinimg.com/originals/90/01/ed/9001ed1a052e1388f69e626634568072.png',
    images: [
      'https://i.pinimg.com/originals/90/fc/77/90fc773072c4131727a9f6ed5331dfc0.png',
      'https://i.pinimg.com/originals/f6/53/27/f65327d48da3a44e0df28ec580c24c67.png',
      'https://i.pinimg.com/736x/09/74/17/097417544cc83f2fa90da7646ed45e2d.jpg'
    ]
  },
  clinic: {
    coverImage: 'https://i.pinimg.com/originals/83/e2/e8/83e2e8374323ce457cdad49660a9e0f0.jpg',
    images: [
      'https://i.pinimg.com/originals/77/0b/0f/770b0fcfc3183574e4d295d932dd1dde.png',
      'https://i.pinimg.com/1200x/53/dd/0e/53dd0e17824d448062949f9bb398cb1a.jpg',
      'https://i.pinimg.com/originals/96/ff/26/96ff263ac83c03281aa2fc2e2fdbb081.jpg'
    ]
  },
  identity: {
    coverImage: 'https://i.pinimg.com/originals/5c/e2/55/5ce255f8d6f19cb57c4855e5b8084ac0.png',
    images: [
      'https://i.pinimg.com/originals/a6/d6/8f/a6d68f7fbe77c27e0850af3b9a061a39.png',
      'https://i.pinimg.com/originals/8c/6c/c3/8c6cc38c3a2dcda5fee7d69c96c81edf.png',
      'https://i.pinimg.com/originals/c3/a4/54/c3a45493ee28100715180c4c52be5fcb.png'
    ]
  },
  eddiesLiquor: {
    coverImage: 'https://i.pinimg.com/1200x/50/a2/2e/50a22e837006da916ae1ffefef79abfa.jpg',
    images: [
      'https://i.pinimg.com/1200x/a9/f4/42/a9f442ac47468f0b67ddf0cb86725851.jpg',
      'https://i.pinimg.com/originals/5c/ce/6b/5cce6b751d464cd509b382a5f77b67f7.jpg',
      'https://i.pinimg.com/originals/66/28/5e/66285e531a83ddf66d4a3fae7f413724.jpg'
    ]
  },

  motion: {
    coverImage: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1400&q=80',
    images: [
      'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=1400&q=80'
    ]
  },
  teaser: {
    coverImage: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1400&q=80',
    images: [
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1515372039744-b8f5b5bd3a63?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1485163819542-13adeb5e0068?auto=format&fit=crop&w=1400&q=80'
    ]
  },
  restaurant: {
    coverImage: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=80',
    images: [
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1508424757105-b6d5ad9329d0?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1400&q=80'
    ]
  },
  startup: {
    coverImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80',
    images: [
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1400&q=80'
    ]
  },
  salon: {
    coverImage: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1400&q=80',
    images: [
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1515688594390-b649af70d282?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=80'
    ]
  },
  refresh: {
    coverImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80',
    images: [
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80'
    ]
  },
  social: {
    coverImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80',
    images: [
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1400&q=80'
    ]
  },
  creator: {
    coverImage: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=80',
    images: [
      'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1515372039744-b8f5b5bd3a63?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1400&q=80'
    ]
  }
  ,
  architecture: {
    coverImage: 'https://i.pinimg.com/originals/06/0a/77/060a77b7c1ddcb8f6c28bf8d2e902074.png',
    images: [
      'https://i.pinimg.com/originals/90/f7/d7/90f7d702765e60083129e6be8eee7505.png',
      'https://i.pinimg.com/originals/f6/a5/cd/f6a5cdfd9fd9907df6a1eee4dae4fc95.png',
      'https://i.pinimg.com/originals/f3/1c/bb/f31cbb04dfa7d991c08e2e8e874d87bf.png'
    ]
  }
} as const;

export const portfolioCategories: PortfolioCategory[] = [
  {
    key: 'digital-marketing',
    label: 'Digital Marketing',
    href: '/portfolio/digital-marketing',
    tone: 'from-[#061B3A] via-[#0A2348] to-[#04070f]',
    intro: 'Analytics-led campaigns with premium motion and crisp KPI storytelling.',
    layout: 'analytics',
    summary: 'Growth systems, ad narratives, retention flows, and performance dashboards designed to feel editorial instead of spreadsheet-heavy.',
    projects: [
      {
        category: 'digital-marketing',
        slug: 'cafe-growth-campaign',
        title: 'Cafe Growth Campaign',
        client: 'Luma Cafe',
        year: '2025',
        ...imageSets.cafe,
        summary: 'A local growth engine that mixed paid social, content hooks, and offer design to turn discovery into repeat visits.',
        problem: 'The cafe had strong product quality but weak local visibility and low repeat traffic.',
        goals: ['Increase nearby awareness', 'Improve weekly repeat visits', 'Grow seasonal offers'],
        challenges: ['Fragmented ad performance', 'No consistent content rhythm', 'Weak local differentiation'],
        strategy: {
          marketing: 'Built a neighborhood-first campaign with geo-targeted paid ads and referral offers.',
          design: 'Used warm premium visuals and bold typography to make every post feel curated.',
          growth: 'Connected short-form promotions to reservation, loyalty, and retention flows.',
          content: 'Created a weekly content cadence around drink drops, chef moments, and community stories.'
        },
        process: [
          { title: 'Audit', copy: 'Reviewed current channels, customer paths, and offer structure.' },
          { title: 'Launch', copy: 'Rolled out paid search, social, and local content simultaneously.' },
          { title: 'Optimize', copy: 'Shifted budget into the highest-intent creatives and time windows.' }
        ],
        visuals: [
          { title: 'KPI Dashboard', copy: 'A dashboard-style hero showing reach, bookings, and repeat rate.' },
          { title: 'Campaign Panels', copy: 'Premium ad mockups with warm cinematic food imagery.' },
          { title: 'Offer Cards', copy: 'Promotion layouts built for fast scanning and high retention.' }
        ],
        results: [
          { label: 'Bookings', value: '+48%', detail: 'Increase in reservation volume over 8 weeks' },
          { label: 'Repeat Visits', value: '+31%', detail: 'Growth in returning local customers' },
          { label: 'CTR', value: '4.8%', detail: 'Above-category campaign engagement' }
        ],
        testimonial: {
          quote: 'The campaign felt premium from the first week. We finally had a system that looked as good as the product tasted.',
          author: 'Nadia Rahman',
          role: 'Founder, Luma Cafe'
        },
        highlight: 'Paid media, local reach, loyalty.'
      },
      {
        category: 'digital-marketing',
        slug: 'lilac-cafe-growth-system',
        title: 'Lilac Cafe Growth System',
        client: 'Lilac Cafe',
        year: '2025',
        ...imageSets.clinic,
        summary: 'A premium customer acquisition and branding system designed for a modern luxury café focused on foot traffic, community engagement, and repeat customers.',
        problem: 'Lilac Cafe needed stronger brand positioning and a more premium customer experience both online and in-store.',
        goals: ['Increase walk-in customers', 'Improve Instagram engagement', 'Build premium café identity', 'Increase repeat visitors'],
        challenges: ['Weak local brand visibility', 'Inconsistent social media presence', 'Low customer retention', 'Generic café positioning'],
        strategy: {
          marketing: 'Focused on Instagram-driven campaigns, local discovery, and lifestyle-focused content.',
          design: 'Created a warm premium visual identity with elegant café storytelling and refined typography.',
          growth: 'Implemented loyalty offers, event campaigns, and customer retention funnels.',
          content: 'Produced cinematic café photography, menu highlights, and lifestyle reels.'
        },
        process: [
          { title: 'Research', copy: 'Analyzed customer behavior, local café competitors, and audience preferences.' },
          { title: 'Build', copy: 'Designed premium landing pages, menu showcases, and social media campaigns.' },
          { title: 'Scale', copy: 'Expanded reach through influencer collaborations, local ads, and seasonal campaigns.' }
        ],
        visuals: [
          { title: '107K+ Organic Views', copy: 'Reels that reached beyond followers and turned content into discovery.' },
          { title: 'Creative Food Campaigns', copy: 'Scroll-stopping social media graphics built for modern café branding.' },
          { title: 'Sales Growth Strategy', copy: 'Creative campaigns and performance-driven content designed to boost reach, orders, and revenue.' }
        ],
        results: [
          { label: 'Foot Traffic', value: '+41%', detail: 'Increase in walk-in customers' },
          { label: 'Engagement', value: '+63%', detail: 'Growth in Instagram interactions' },
          { label: 'Return Customers', value: '+28%', detail: 'Increase in repeat customer visits' }
        ],
        testimonial: {
          quote: 'The new visual identity and local campaigns made our café feel like a destination. We saw immediate increases in visits and a more engaged community.',
          author: 'Maya Arora',
          role: 'Owner, Lilac Cafe'
        },
        highlight: 'Local discovery, loyalty, premium identity.'
      }
    ]
  },
  {
    key: 'graphic-design',
    label: 'Graphic Designing',
    href: '/portfolio/graphic-design',
    tone: 'from-[#F7F7F5] via-[#EFEDE5] to-[#D9D5C8]',
    intro: 'Visual-heavy creative systems with packaging, typography, and campaign mockups.',
    layout: 'masonry',
    summary: 'Editorial graphics, identity spreads, and bold visual grids that make each thumbnail feel like a collectible object.',
    projects: [
      {
        category: 'graphic-design',
        slug: 'luxury-brand-identity',
        title: 'Luxury Brand Identity',
        client: 'Maison Vale',
        year: '2026',
        ...imageSets.identity,
        summary: 'A refined identity system balancing fashion-level restraint with tactile brand details.',
        problem: 'The brand lacked a coherent visual language across print, social, and packaging.',
        goals: ['Define a premium identity', 'Create a modular grid', 'Unify assets across formats'],
        challenges: ['Inconsistent typography', 'Weak packaging hierarchy', 'Generic social templates'],
        strategy: {
          marketing: 'Presented the brand as a premium lifestyle label through visual consistency.',
          design: 'Built a monochrome system with one warm accent and strong typographic structure.',
          growth: 'Set up reusable campaign assets to reduce design turnaround time.',
          content: 'Designed launch sets, editorial mockups, and social-first visual assets.'
        },
        process: [
          { title: 'Direction', copy: 'Established tone, type scale, and image treatment rules.' },
          { title: 'Systems', copy: 'Built layouts for packaging, social, and campaign print.' },
          { title: 'Rollout', copy: 'Applied the system across launch assets and brand touchpoints.' }
        ],
        visuals: [
          { title: 'Identity Grid', copy: 'Logo system and spacing rules laid out like a premium editorial spread.' },
          { title: 'Packaging Mockups', copy: 'Luxury boxes and sleeves with soft shadow depth.' },
          { title: 'Campaign Tiles', copy: 'High-contrast visual tiles for launch announcements.' }
        ],
        results: [
          { label: 'Asset Consistency', value: '+100%', detail: 'All launch materials aligned to one visual system' },
          { label: 'Time Saved', value: '41%', detail: 'Faster asset production after system rollout' },
          { label: 'Social Saves', value: '+24%', detail: 'Higher engagement from more collectible graphics' }
        ],
        testimonial: {
          quote: 'It finally feels like one brand, not a collection of separate designs. The system is elegant and easy to use.',
          author: 'Camille Hart',
          role: 'Creative Director, Maison Vale'
        },
        highlight: 'Identity, packaging, type systems.'
      },
      {
        category: 'graphic-design',
        slug: 'eddies-liquor-campaign',
        title: "Eddie's Liquor 'N' More Campaign",
        client: "Eddie's Liquor 'N' More",
        year: '2025',
        ...imageSets.eddiesLiquor,
        summary: 'A cinematic liquor-store campaign blending whiskey, wine, and premium retail storytelling into a polished social-first visual system.',
        problem: 'The store needed a sharper premium identity that could stand out in a crowded retail market and make its promotional offers feel more elevated.',
        goals: ['Increase in-store awareness', 'Improve weekly social engagement', 'Promote premium bottle selections', 'Strengthen brand perception'],
        challenges: ['Competitive local market', 'Undifferentiated retail messaging', 'Mixed product categories', 'Need for a more premium visual tone'],
        strategy: {
          marketing: 'Positioned the store as a destination for curated whiskey, wine, and limited-run bottle drops through refined campaign storytelling.',
          design: 'Built a dark luxe visual language with editorial type, reflective highlights, and rich contrast to evoke a high-end bottle shop experience.',
          growth: 'Designed a repeatable promotion system for weekly specials, holiday features, and new-arrival spotlights across social channels.',
          content: 'Created cinematic social assets, product highlights, and retail promo layouts that felt more like premium liquor advertising than standard store marketing.'
        },
        process: [
          { title: 'Positioning', copy: 'Defined the store as a premium retail destination with a stronger visual point of view.' },
          { title: 'Campaign Design', copy: 'Developed modular layouts for whiskey features, wine promotions, and seasonal bottle spotlights.' },
          { title: 'Rollout', copy: 'Applied the system across social, in-store promo graphics, and launch announcements.' }
        ],
        visuals: [
          { title: 'Bottle Spotlight', copy: 'Hero layouts for premium whiskey and wine promotions with rich, cinematic framing.' },
          { title: 'Promo Cards', copy: 'Social tiles designed to make weekly offers feel elevated and collectible.' },
          { title: 'Retail Atmosphere', copy: 'Dark, polished campaign visuals that brought a luxury retail mood to the store.' }
        ],
        results: [
          { label: 'Campaign Reach', value: '+57%', detail: 'More visibility across social and local audience channels' },
          { label: 'Store Visits', value: '+33%', detail: 'Lift in foot traffic during campaign weeks' },
          { label: 'Engagement Rate', value: '+46%', detail: 'Stronger interaction with premium product posts' }
        ],
        testimonial: {
          quote: 'The campaign made the store feel like a premium brand, not just a liquor shop. Customers immediately noticed the difference online and in person.',
          author: 'Marcus Vale',
          role: 'Owner, Eddie\'s Liquor \'N\' More'
        },
        highlight: 'Whiskey campaigns, wine promotions, luxury retail storytelling.'
      }
    ]
  },
  {
    key: 'video-editing',
    label: 'Video Editing',
    href: '/portfolio/video-editing',
    tone: 'from-[#05070d] via-[#0b1018] to-[#1d2634]',
    intro: 'Cinematic reel showcases, dark motion layouts, and premium preview systems.',
    layout: 'cinematic',
    summary: 'Dynamic edits, reel pacing, and video storytelling designed to feel like short-form film sequences.',
    projects: [
      {
        category: 'video-editing',
        slug: 'real-estate-reel-campaign',
        title: 'Real Estate Reel Campaign',
        client: 'Altitude Homes',
        year: '2026',
        ...imageSets.motion,
        summary: 'A cinematic reel system used to turn listings into high-conviction social content.',
        problem: 'Property content looked flat and failed to communicate premium value online.',
        goals: ['Increase reel engagement', 'Boost listing interest', 'Improve lead quality'],
        challenges: ['Static footage', 'Low retention', 'Weak brand rhythm'],
        strategy: {
          marketing: 'Built a reel framework around opening hooks, movement, and closing CTAs.',
          design: 'Applied a dark luxe grade and elegant titles to support premium listings.',
          growth: 'Connected video performance to landing-page and inquiry conversion data.',
          content: 'Created a repeatable edit template for new property drops and launch teasers.'
        },
        process: [
          { title: 'Footage Map', copy: 'Sorted clips by hero moments, movement, and detail shots.' },
          { title: 'Edit Flow', copy: 'Built pacing around strong opening hooks and smooth transitions.' },
          { title: 'Distribution', copy: 'Optimized versions for reels, stories, and paid placements.' }
        ],
        visuals: [
          { title: 'Reel Preview', copy: 'A dark cinematic video frame with motion titles.' },
          { title: 'Listing Cuts', copy: 'Vertical edits showing architectural detail and flow.' },
          { title: 'CTA End Cards', copy: 'Closing frames for inquiries and booking.' }
        ],
        results: [
          { label: 'Retention', value: '+44%', detail: 'Longer watch times across primary reels' },
          { label: 'Inquiries', value: '+28%', detail: 'More qualified leads from video traffic' },
          { label: 'Saves', value: '+36%', detail: 'Stronger engagement on teaser content' }
        ],
        testimonial: {
          quote: 'The edits made our listings feel like launches. That shift changed how buyers reacted to the content.',
          author: 'Rowan Bell',
          role: 'Marketing Lead, Altitude Homes'
        },
        highlight: 'Reels, dark grade, vertical motion.'
      },
      {
        category: 'video-editing',
        slug: 'product-teaser-film',
        title: 'Product Teaser Film',
        client: 'Nexa Audio',
        year: '2025',
        ...imageSets.teaser,
        summary: 'A premium short film for a product launch built to feel tactile, sleek, and deeply shareable.',
        problem: 'The launch video lacked the energy required to create anticipation.',
        goals: ['Create excitement', 'Improve launch recall', 'Strengthen premium perception'],
        challenges: ['Limited footage', 'Broad audience', 'Short attention window'],
        strategy: {
          marketing: 'Structured the teaser around emotional reveals and feature payoff.',
          design: 'Used dark contrast, glowing highlights, and restrained text overlays.',
          growth: 'Delivered cutdowns for social, paid, and landing page use.',
          content: 'Produced teaser, reveal, and feature-focused versions.'
        },
        process: [
          { title: 'Storyboard', copy: 'Planned reveal beats and visual tension.' },
          { title: 'Edit', copy: 'Layered pacing, sound, and titles around the product reveal.' },
          { title: 'Deliver', copy: 'Exported platform-specific cuts for launch week.' }
        ],
        visuals: [
          { title: 'Reveal Frames', copy: 'Premium close-ups with cinematic lighting.' },
          { title: 'Motion Titles', copy: 'Minimal typography over deep dark visuals.' },
          { title: 'Sound Sync', copy: 'Beat-matched transitions for stronger recall.' }
        ],
        results: [
          { label: 'Launch Reach', value: '+41%', detail: 'Reach growth during launch week' },
          { label: 'CTR', value: '5.1%', detail: 'Higher click-through on teaser ads' },
          { label: 'Shares', value: '+33%', detail: 'Increased repost rate from launch content' }
        ],
        testimonial: {
          quote: 'The teaser changed the launch tone completely. It felt more premium, more deliberate, and much more shareable.',
          author: 'Alya Stone',
          role: 'Brand Manager, Nexa Audio'
        },
        highlight: 'Teaser pacing, sound, premium reveal.'
      }
    ]
  },
  {
    key: 'web-development',
    label: 'Website Development',
    href: '/portfolio/web-development',
    tone: 'from-[#061B3A] via-[#122f5d] to-[#dfe7ef]',
    intro: 'Browser mockups, scroll storytelling, and interactive device-frame builds.',
    layout: 'browser',
    summary: 'Fast, premium, and responsive websites that combine clean architecture with motion-led presentation.',
    projects: [
      {
        category: 'web-development',
        slug: 'restaurant-website-redesign',
        title: 'Restaurant Website Redesign',
        client: 'Nori Table',
        year: '2026',
        ...imageSets.restaurant,
        summary: 'A refined website build that elevated reservations, menu discovery, and chef storytelling.',
        problem: 'The old site looked dated and buried key booking actions.',
        goals: ['Increase reservations', 'Improve menu browsing', 'Create stronger brand presence'],
        challenges: ['Slow load times', 'Weak mobile UX', 'Low conversion clarity'],
        strategy: {
          marketing: 'Turned the site into a conversion-focused brand experience with clear reservation paths.',
          design: 'Used glass panels, cinematic imagery, and a high-contrast hierarchy.',
          growth: 'Optimized mobile flow and booking placements.',
          content: 'Structured chef stories, menu snapshots, and feature blocks.'
        },
        process: [
          { title: 'Architecture', copy: 'Mapped navigation, story flow, and key conversion points.' },
          { title: 'Visual Build', copy: 'Designed responsive sections with motion-led reveals.' },
          { title: 'Launch', copy: 'Fine-tuned performance and interaction timing.' }
        ],
        visuals: [
          { title: 'Browser Mockup', copy: 'Full-screen desktop frame showing the redesigned homepage.' },
          { title: 'Menu Preview', copy: 'Elegant menu cards with clear hierarchy.' },
          { title: 'Reservation Flow', copy: 'A calm conversion path with fewer distractions.' }
        ],
        results: [
          { label: 'Reservations', value: '+37%', detail: 'Lift after redesign launch' },
          { label: 'Mobile Conversion', value: '+29%', detail: 'Better performance on mobile devices' },
          { label: 'Bounce Rate', value: '-18%', detail: 'Reduced drop-off from homepage' }
        ],
        testimonial: {
          quote: 'The site now feels like the restaurant itself: premium, calm, and intentional. Bookings became easier almost immediately.',
          author: 'Sophia Laurent',
          role: 'Owner, Nori Table'
        },
        highlight: 'Browser flow, reservations, mobile UX.'
      },
      {
        category: 'web-development',
        slug: 'maxo-architecture-platform',
        title: 'Luxury Architecture Website Redesign',
        client: 'MAXO Architects',
        year: '2026',
        ...imageSets.architecture,
        summary: 'A cinematic architecture platform crafted to showcase modern spatial design, premium residential projects, and immersive visual storytelling.',

        problem: 'The studio needed a refined digital presence that matched the sophistication and architectural precision of its real-world projects.',

        goals: [
          'Elevate premium brand perception',
          'Showcase architectural projects through immersive storytelling',
          'Improve mobile browsing experience',
          'Create a modern luxury portfolio experience'
        ],

        challenges: [
          'Presenting large-scale projects without visual clutter',
          'Balancing minimalism with detailed project storytelling',
          'Maintaining fast performance with high-resolution imagery'
        ],

        strategy: {
          marketing: 'Positioned the website as a digital architecture journal that builds trust through visual authority and spatial storytelling.',

          design: 'Used editorial layouts, cinematic whitespace, monochrome palettes, and immersive fullscreen imagery inspired by luxury architecture publications.',

          growth: 'Optimized navigation flow, mobile responsiveness, and inquiry touchpoints to increase premium client engagement.',

          content: 'Structured project showcases around architectural philosophy, material details, spatial experience, and visual narratives.'
        },

        process: [
          {
            title: 'Spatial Discovery',
            copy: 'Mapped the studio’s design language, project hierarchy, and luxury positioning strategy.'
          },

          {
            title: 'Editorial System',
            copy: 'Built a refined visual system using modular grids, architectural spacing, and immersive transitions.'
          },

          {
            title: 'Experience Refinement',
            copy: 'Optimized scrolling behavior, gallery interactions, and responsive layouts for a premium browsing experience.'
          }
        ],

        visuals: [
          {
            title: 'Fullscreen Architecture Showcase',
            copy: 'Large cinematic project imagery designed to create a gallery-like browsing experience.'
          },

          {
            title: 'Editorial Project Layouts',
            copy: 'Minimal typography and modular grids used to highlight architectural detail and spatial composition.'
          },

          {
            title: 'Immersive Mobile Experience',
            copy: 'Responsive layouts crafted to preserve luxury presentation across all screen sizes.'
          }
        ],

        results: [
          {
            label: 'Client Inquiries',
            value: '+41%',
            detail: 'Increase in premium residential project inquiries after launch'
          },

          {
            label: 'Engagement Time',
            value: '+36%',
            detail: 'Users spent longer exploring architecture case studies and galleries'
          },

          {
            label: 'Brand Perception',
            value: 'Elevated',
            detail: 'The redesigned experience strengthened the studio’s luxury positioning'
          }
        ],

        testimonial: {
          quote: 'The website now reflects the same precision, calmness, and sophistication that define our architectural work. Every interaction feels intentional.',

          author: 'Max Patel',

          role: 'Founder, MAXO Architects'
        },

        highlight: 'Editorial architecture storytelling, cinematic galleries, luxury digital experience.'
      }
    ]
  },
  {
    key: 'branding',
    label: 'Branding',
    href: '/portfolio/branding',
    tone: 'from-[#F7F7F5] via-[#faf8f2] to-[#efe4d3]',
    intro: 'Logo systems, typography shows, packaging mockups, and identity storytelling.',
    layout: 'editorial',
    summary: 'Premium identity systems with tactile applications and a clear brand point of view.',
    projects: [],
    comingSoon: {
      headline: 'Brand Identity Systems Coming Soon',
      subtext: 'Strategic identity design, visual systems, and premium brand direction projects are currently in development.'
    }
  },
  {
    key: 'content-creation',
    label: 'Content Creation',
    href: '/portfolio/content-creation',
    tone: 'from-[#07111F] via-[#101b2d] to-[#f4f2ed]',
    intro: 'Social grids, carousel structures, and content systems built for consistent output.',
    layout: 'social',
    summary: 'Content frameworks that combine premium social design with repeatable systems for everyday brand growth.',
    projects: [],
    comingSoon: {
      headline: 'Content Systems Coming Soon',
      subtext: 'Social-first campaigns, cinematic content direction, and motion-led storytelling projects will be added soon.'
    }
  }
];

export function getCategory(categoryKey: PortfolioCategoryKey) {
  return portfolioCategories.find((category) => category.key === categoryKey);
}

export function getProject(categoryKey: PortfolioCategoryKey, slug: string) {
  return getCategory(categoryKey)?.projects.find((project) => project.slug === slug);
}
