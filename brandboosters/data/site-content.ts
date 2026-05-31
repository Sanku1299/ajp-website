// Starter content used by the example sections.
import type { PortfolioCardData } from '../types/portfolio';

export const heroHighlights = ['Brand Strategy', 'Creative Direction', 'Motion Systems'];

export const featuredPortfolioItems: PortfolioCardData[] = [
  {
    title: 'Northstar Rebrand',
    category: 'Brand Identity',
    summary: 'A premium identity system for a B2B growth team focused on clarity and momentum.',
    image: '/images/northstar-cover.jpg',
    href: '/portfolio/northstar-rebrand',
    year: '2026',
    tags: ['Identity', 'Motion', 'Web']
  },
  {
    title: 'Signal Launch Kit',
    category: 'Launch Campaign',
    summary: 'A launch-ready content system built for performance marketing and social rollout.',
    image: '/images/signal-launch.jpg',
    href: '/portfolio/signal-launch-kit',
    year: '2026',
    tags: ['Campaign', 'Conversion', 'Social']
  },
  {
    title: 'Studio Portfolio System',
    category: 'Web Design',
    summary: 'A modular portfolio framework with editable sections and scalable content blocks.',
    image: '/images/studio-portfolio.jpg',
    href: '/portfolio/studio-portfolio-system',
    year: '2026',
    tags: ['UI', 'CMS', 'Scalable']
  }
];
