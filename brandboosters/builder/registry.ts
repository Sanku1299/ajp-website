// Builder-to-section mapping used to enable drag-and-drop section rendering later.
import { sectionRegistry } from '../sections';
import type { SectionKey } from '../types/section';

export const builderRegistry: Record<SectionKey, keyof typeof sectionRegistry> = {
  hero: 'hero',
  portfolio: 'portfolio',
  services: 'services',
  testimonials: 'testimonials',
  contact: 'contact'
};

export function resolveBuilderSection(sectionKey: SectionKey) {
  return sectionRegistry[builderRegistry[sectionKey]];
}
