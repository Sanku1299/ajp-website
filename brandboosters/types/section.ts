// Section contracts used by the import registry and future Builder.io mapping.
import type { ComponentType } from 'react';

export type SectionKey = 'hero' | 'portfolio' | 'services' | 'testimonials' | 'contact';

export type SectionModule<P = Record<string, unknown>> = ComponentType<P>;

export type EditableSection = {
  id: string;
  type: SectionKey;
  props?: Record<string, unknown>;
};
