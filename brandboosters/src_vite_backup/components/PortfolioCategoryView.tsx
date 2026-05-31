import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useMemo } from 'react';
import DynamicImage from '@/components/DynamicImage';
import PortfolioGrid from '@/components/PortfolioGrid';
import { PortfolioCategory, portfolioCategories } from '@/data/portfolioData';

export default function PortfolioCategoryView({ category }: { category: PortfolioCategory }) {
  const otherCategories = useMemo(() => portfolioCategories.filter((item) => item.key !== category.key).slice(0, 3), [category.key]);
  const hasProjects = category.projects.length > 0;

  return (
    <div className="container-laptop mx-auto px-4 pt-36 md:px-6 md:pt-40 lg:pt-44">
      <section className={`section-shell relative overflow-hidden rounded-[40px] border border-black/[0.06] bg-gradient-to-br ${category.tone} px-6 py-10 text-white shadow-[0_28px_90px_rgba(0,0,0,0.12)] md:px-10 md:py-14`}>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_34%),linear-gradient(135deg,rgba(0,0,0,0.24),transparent_45%)]" />
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div className="relative">
            <p className="font-groove text-[11px] uppercase tracking-[0.38em] text-white/92">{category.label}</p>
            <h1 className="mt-4 max-w-3xl fluid-display font-display uppercase leading-[0.92] tracking-[0.08em] text-[#F8F8F8] [text-shadow:0_4px_30px_rgba(0,0,0,0.12)]">
              {category.comingSoon?.headline ?? (category.layout === 'analytics' ? 'Numbers in motion.' : category.layout === 'masonry' ? 'Visual systems.' : category.layout === 'cinematic' ? 'Motion with depth.' : category.layout === 'browser' ? 'Web experiences.' : category.layout === 'editorial' ? 'Identity stories.' : 'Content engines.')}
            </h1>
          </div>
          <div className="relative space-y-4">
            <div className="overflow-hidden rounded-[30px] border border-[rgba(255,255,255,0.35)] bg-[rgba(255,255,255,0.5)] shadow-[0_25px_80px_rgba(0,0,0,0.14)]">
              {hasProjects ? (
                <DynamicImage src={category.projects[0]?.coverImage} alt={category.projects[0]?.title ?? category.label} className="aspect-[4/3] w-full" />
              ) : (
                <div className="relative aspect-[4/3] overflow-hidden bg-[linear-gradient(135deg,rgba(6,27,58,0.16),rgba(255,159,10,0.16))] p-5">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.42),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.2),transparent_28%)]" />
                  <div className="relative flex h-full flex-col justify-between rounded-[24px] border border-white/30 bg-[rgba(255,255,255,0.12)] p-5 backdrop-blur-[12px]">
                    <div className="flex items-center justify-between gap-3">
                      <span className="rounded-full border border-white/30 bg-[rgba(255,255,255,0.14)] px-3 py-1 font-groove text-[10px] uppercase tracking-[0.28em] text-white/90">
                        Launching Soon
                      </span>
                      <span className="text-xs uppercase tracking-[0.28em] text-white/70">Premium Preview</span>
                    </div>
                    <div className="grid grid-cols-3 gap-3 opacity-85">
                      <div className="h-24 rounded-[18px] bg-[linear-gradient(180deg,rgba(255,255,255,0.78),rgba(255,255,255,0.18))] blur-[1px]" />
                      <div className="h-24 rounded-[18px] bg-[linear-gradient(180deg,rgba(255,255,255,0.42),rgba(255,255,255,0.08))] blur-[1px]" />
                      <div className="h-24 rounded-[18px] bg-[linear-gradient(180deg,rgba(6,27,58,0.18),rgba(255,255,255,0.1))] blur-[1px]" />
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="max-w-xl rounded-[28px] border border-[rgba(78,60,38,0.08)] bg-[rgba(247,245,240,0.78)] px-5 py-5 text-[15px] font-medium leading-8 text-[#24324A] shadow-[0_18px_55px_rgba(0,0,0,0.08)] backdrop-blur-[10px]">
              {category.summary}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell mt-12 grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
        <div className="rounded-[34px] border border-black/[0.06] bg-[linear-gradient(180deg,rgba(255,255,255,0.7),rgba(255,255,255,0.5))] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.1)] md:p-8">
          <p className="font-groove text-[11px] uppercase tracking-[0.38em] text-black/72">Category brief</p>
          <p className="mt-4 text-sm leading-7 text-black/82">{category.intro}</p>
          <div className="mt-8 space-y-3">
            {['Premium listing page', 'Category-specific layout', 'Dynamic case study pages'].map((item) => (
              <div key={item} className="rounded-[18px] border border-black/[0.06] bg-[linear-gradient(180deg,#e7e7e7,#d8d8d8)] px-4 py-4 text-sm font-medium text-navy">
                {item}
              </div>
            ))}
          </div>
        </div>

        <PortfolioGrid projects={category.projects} baseHref={category.href} dark={category.layout === 'cinematic'} layout={category.layout} comingSoon={category.comingSoon} />
      </section>

      <section className="section-shell mt-14 pb-20 lg:mt-16 lg:pb-24">
        <div className="rounded-[36px] border border-black/[0.06] bg-[linear-gradient(180deg,rgba(255,255,255,0.72),rgba(255,255,255,0.5))] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.1)] md:p-10">
          <p className="font-groove text-[11px] uppercase tracking-[0.38em] text-black/72">Related categories</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {otherCategories.map((item) => (
              <Link key={item.key} to={item.href} className="rounded-full border border-black/[0.06] bg-[linear-gradient(180deg,#e8e8e8,#d9d9d9)] px-4 py-3 text-sm text-black/84 transition hover:-translate-y-0.5 hover:text-navy">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}