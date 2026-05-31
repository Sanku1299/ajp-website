// Builder.io configuration placeholder for future visual editing.
export const builderConfig = {
  publicApiKey: process.env.NEXT_PUBLIC_BUILDER_PUBLIC_API_KEY ?? '',
  modelName: 'page',
  enableLivePreview: true,
  editableSections: ['hero', 'portfolio', 'services', 'testimonials', 'contact'] as const
} as const;
