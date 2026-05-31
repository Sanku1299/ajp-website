"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import DynamicImage from '@/components/dynamic-image';
import { portfolioCategories } from '@/lib/portfolio-data';

type PortfolioIndexProps = {
  onPreview?: (href: string) => void;
};

export default function PortfolioIndexView({ onPreview }: PortfolioIndexProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | (typeof portfolioCategories)[number]['key']>('all');

  const cards = useMemo(() => {
    return activeCategory === 'all'
      ? portfolioCategories
      : portfolioCategories.filter((category) => category.key === activeCategory);
  }, [activeCategory]);

  return (
    <div className="mx-auto max-w-7xl px-4 pt-32 md:px-6 lg:pt-36">
      <section className="section-shell grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-end">
        <div>
          <p className="font-groove text-[11px] uppercase tracking-[0.38em] text-black/80">Portfolio</p>
          <h1 className="mt-4 max-w-4xl font-display text-[clamp(4rem,10vw,10rem)] uppercase leading-[0.9] tracking-[0.12em] text-on-light">
            A structured portfolio system with category depth.
          </h1>
        </div>
        <p className="max-w-2xl text-sm leading-8 text-black/82 md:text-base">
          Filter by category, preview projects with a modal, and move into dedicated category pages or full case studies with one click.
        </p>
      </section>

      <section className="section-shell mt-12 flex flex-wrap gap-3">
        {['all', ...portfolioCategories.map((category) => category.key)].map((category) => {
          const active = activeCategory === category;
          const label = category === 'all' ? 'All Work' : portfolioCategories.find((item) => item.key === category)?.label ?? category;
          return (
            <button
              key={category}
              onClick={() => setActiveCategory(category as typeof activeCategory)}
              className={`rounded-full border px-5 py-3 text-sm transition ${active ? 'border-navy bg-navy text-white' : 'border-black/[0.06] bg-[rgba(255,255,255,0.45)] text-black/82 hover:bg-black/5'}`}
            >
              {label}
            </button>
          );
        })}
      </section>

      <section className="section-shell mt-10 space-y-8">
        {cards.map((category, index) => (
          <motion.article
            key={category.key}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: index * 0.05 }}
            className="overflow-hidden rounded-[38px] border border-black/[0.06] bg-[linear-gradient(180deg,rgba(255,255,255,0.58),rgba(255,255,255,0.42))] shadow-[0_26px_80px_rgba(6,27,58,0.1)]"
          >
            <div className={`relative overflow-hidden bg-gradient-to-br ${category.tone} px-6 py-8 text-white md:px-10 md:py-12`}>
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_35%),linear-gradient(135deg,rgba(0,0,0,0.2),transparent_42%)]" />
              <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div className="relative max-w-3xl">
                  <p className="font-groove text-[11px] uppercase tracking-[0.38em] text-white/92">{category.label}</p>
                  <h2 className="mt-4 font-display text-5xl uppercase leading-[0.9] tracking-[0.12em] text-[#F8F8F8] [text-shadow:0_4px_30px_rgba(0,0,0,0.12)] md:text-7xl">
                    {category.layout === 'analytics' ? 'Growth visuals.' : category.layout === 'masonry' ? 'Creative grids.' : category.layout === 'cinematic' ? 'Dark motion stories.' : category.layout === 'browser' ? 'Browser-led storytelling.' : category.layout === 'editorial' ? 'Identity storytelling.' : 'Social-first systems.'}
                  </h2>
                </div>
                <div className="relative max-w-md text-sm leading-7 text-white/92 [text-shadow:0_2px_12px_rgba(0,0,0,0.1)]">{category.summary}</div>
              </div>
            </div>

            <div className="px-6 py-8 md:px-10 md:py-10">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <p className="max-w-2xl text-sm leading-7 text-black/80">{category.intro}</p>
                <Link href={category.href} className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 font-groove text-xs font-semibold uppercase tracking-[0.28em] text-white">
                  Open category
                  <span>↗</span>
                </Link>
              </div>

              <div className={`mt-8 grid gap-4 ${category.layout === 'analytics' ? 'md:grid-cols-3' : category.layout === 'masonry' ? 'md:grid-cols-3 md:auto-rows-[190px]' : category.layout === 'cinematic' ? 'md:grid-cols-2' : category.layout === 'browser' ? 'md:grid-cols-2' : category.layout === 'editorial' ? 'md:grid-cols-2' : 'md:grid-cols-3'}`}>
                {category.projects.length > 0 ? (
                  category.projects.map((project, projectIndex) => (
                    <motion.button
                      key={project.slug}
                      onClick={() => onPreview?.(`${category.href}/${project.slug}`)}
                      whileHover={{ y: -4, scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      className={`group text-left rounded-[28px] border border-[rgba(255,255,255,0.35)] bg-[linear-gradient(180deg,rgba(255,255,255,0.72),rgba(255,255,255,0.52))] p-5 shadow-[0_25px_80px_rgba(0,0,0,0.1)] transition hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(0,0,0,0.14)] ${
                        category.layout === 'analytics' && projectIndex === 0 ? 'md:col-span-2' : ''
                      } ${category.layout === 'masonry' && projectIndex === 0 ? 'md:row-span-2' : ''} ${category.layout === 'cinematic' ? 'bg-[linear-gradient(180deg,#061B3A,#08101f)] text-white' : ''}`}
                    >
                      <div className={`flex h-full flex-col justify-between gap-6 ${category.layout === 'browser' ? 'min-h-[260px]' : 'min-h-[200px]'}`}>
                        <div className="overflow-hidden rounded-[22px] border border-current/10 shadow-[0_16px_40px_rgba(0,0,0,0.12)]">
                          <DynamicImage
                            src={project.coverImage}
                            alt={project.title}
                            className={category.layout === 'cinematic' ? 'aspect-[4/3] w-full' : 'aspect-[16/10] w-full'}
                            imageClassName="transition-transform duration-700 group-hover:scale-105"
                          />
                        </div>
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className={`font-groove text-[11px] uppercase tracking-[0.34em] ${category.layout === 'cinematic' ? 'text-white/88' : 'text-black/72'}`}>{project.client}</p>
                            <h3 className={`mt-4 font-display text-4xl uppercase leading-[0.9] tracking-[0.1em] ${category.layout === 'cinematic' ? 'text-white text-shadow-soft' : 'text-on-light'}`}>{project.title}</h3>
                          </div>
                          <span className={`text-xs uppercase tracking-[0.28em] ${category.layout === 'cinematic' ? 'text-white/88' : 'text-black/68'}`}>{project.year}</span>
                        </div>
                        <p className={`text-sm leading-7 ${category.layout === 'cinematic' ? 'text-white/92' : 'text-black/82'}`}>{project.summary}</p>
                      </div>
                    </motion.button>
                  ))
                ) : (
                  Array.from({ length: category.layout === 'editorial' ? 2 : 3 }).map((_, placeholderIndex) => (
                    <motion.article
                      key={`${category.key}-coming-soon-${placeholderIndex}`}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.6, delay: placeholderIndex * 0.06 }}
                      className="group rounded-[28px] border border-black/[0.06] bg-[linear-gradient(180deg,rgba(255,255,255,0.76),rgba(255,255,255,0.52))] p-5 shadow-[0_25px_80px_rgba(0,0,0,0.1)] transition hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(0,0,0,0.14)]"
                    >
                      <div className={`flex h-full flex-col justify-between gap-5 ${category.layout === 'browser' ? 'min-h-[260px]' : 'min-h-[200px]'}`}>
                        <div className="overflow-hidden rounded-[22px] border border-black/[0.06] bg-[linear-gradient(135deg,rgba(6,27,58,0.08),rgba(255,159,10,0.08))] p-4">
                          <div className="rounded-[18px] border border-black/[0.05] bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.55),transparent_35%),linear-gradient(180deg,rgba(255,255,255,0.3),rgba(255,255,255,0.12))] p-4 backdrop-blur-[10px]">
                            <div className="flex items-center justify-between gap-3">
                              <span className="rounded-full border border-black/[0.08] bg-[rgba(255,255,255,0.72)] px-3 py-1 font-groove text-[10px] uppercase tracking-[0.28em] text-black/68">
                                Launching Soon
                              </span>
                              <span className="text-[10px] uppercase tracking-[0.24em] text-black/58">Preview</span>
                            </div>
                            <div className="mt-6 grid grid-cols-3 gap-3 opacity-75 blur-[1px]">
                              <div className="h-20 rounded-[16px] bg-[linear-gradient(180deg,rgba(255,255,255,0.8),rgba(255,255,255,0.18))]" />
                              <div className="h-20 rounded-[16px] bg-[linear-gradient(180deg,rgba(255,255,255,0.52),rgba(255,255,255,0.08))]" />
                              <div className="h-20 rounded-[16px] bg-[linear-gradient(180deg,rgba(6,27,58,0.14),rgba(255,255,255,0.1))]" />
                            </div>
                          </div>
                        </div>
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="font-groove text-[11px] uppercase tracking-[0.34em] text-black/72">{category.comingSoon?.headline ?? 'Launching Soon'}</p>
                            <h3 className="mt-4 font-display text-4xl uppercase leading-[0.9] tracking-[0.1em] text-on-light">Coming Soon</h3>
                          </div>
                          <span className="text-xs uppercase tracking-[0.28em] text-black/68">{category.layout === 'social' ? '03' : '02'}</span>
                        </div>
                        <p className="text-sm leading-7 text-black/82">{category.comingSoon?.subtext ?? 'Premium projects are in development and will be added here soon.'}</p>
                      </div>
                    </motion.article>
                  ))
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </section>
    </div>
  );
}
