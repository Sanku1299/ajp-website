"use client";

import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import PortfolioIndexView from '@/components/portfolio-index-view';
import { portfolioCategories } from '@/lib/portfolio-data';

export default function PortfolioPage() {
  const [previewHref, setPreviewHref] = useState<string | null>(null);
  const previewProject = useMemo(() => {
    if (!previewHref) return null;
    const [, categoryKey, slug] = previewHref.split('/').filter(Boolean);
    return portfolioCategories.find((category) => category.key === categoryKey)?.projects.find((project) => project.slug === slug) ?? null;
  }, [previewHref]);

  return (
    <>
      <PortfolioIndexView onPreview={setPreviewHref} />

      <AnimatePresence>
        {previewHref && previewProject ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-[rgba(7,17,31,0.88)] px-4 backdrop-blur-md"
            onClick={() => setPreviewHref(null)}
          >
            <motion.div
              initial={{ scale: 0.94, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.94, y: 20 }}
              transition={{ duration: 0.35 }}
              onClick={(event) => event.stopPropagation()}
              className="w-full max-w-4xl rounded-[36px] border border-[rgba(255,255,255,0.35)] bg-[linear-gradient(135deg,#061B3A,#04070f)] p-6 text-white shadow-[0_30px_100px_rgba(0,0,0,0.35)] md:p-10"
            >
              <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p className="font-groove text-[11px] uppercase tracking-[0.38em] text-white/92">Fullscreen preview</p>
                  <h2 className="mt-4 font-display text-5xl uppercase tracking-[0.12em] text-primary text-shadow-soft md:text-7xl">{previewProject.title}</h2>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-white/92">{previewProject.summary}</p>
                </div>
                <Link href={previewHref} className="inline-flex items-center gap-2 rounded-full bg-orange px-6 py-3 font-groove text-xs font-semibold uppercase tracking-[0.28em] text-dark">
                  Open case study
                  <span>↗</span>
                </Link>
              </div>
              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {['Animated visual preview', 'Category navigation', 'Story-driven presentation'].map((item) => (
                  <div key={item} className="rounded-[24px] border border-[rgba(255,255,255,0.35)] bg-[rgba(255,255,255,0.12)] px-5 py-6 text-sm text-white/92 shadow-[0_16px_50px_rgba(0,0,0,0.12)]">
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}