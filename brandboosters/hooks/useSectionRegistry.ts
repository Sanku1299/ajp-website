"use client";

import { useMemo } from 'react';
import { getSectionComponent, sectionRegistry } from '../sections';
import type { SectionKey } from '../types/section';

export function useSectionRegistry() {
  const registry = useMemo(() => sectionRegistry, []);

  return {
    registry,
    getSectionComponent: (sectionKey: SectionKey) => getSectionComponent(sectionKey)
  };
}
