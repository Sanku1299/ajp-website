// Section registry for reusable, editable page blocks.
import { HeroSection } from './hero/HeroSection';
import { PortfolioSection } from './portfolio/PortfolioSection';
import { ServicesSection } from './services/ServicesSection';
import { TestimonialsSection } from './testimonials/TestimonialsSection';
import { ContactSection } from './contact/ContactSection';
import type { SectionKey, SectionModule } from '../types/section';

export const sectionRegistry: Record<SectionKey, SectionModule<any>> = {
  hero: HeroSection,
  portfolio: PortfolioSection,
  services: ServicesSection,
  testimonials: TestimonialsSection,
  contact: ContactSection
};

export function getSectionComponent(sectionKey: SectionKey) {
  return sectionRegistry[sectionKey];
}
