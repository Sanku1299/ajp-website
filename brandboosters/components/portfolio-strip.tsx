"use client";

import { motion } from 'framer-motion';
import DynamicImage from '@/components/dynamic-image';
import { portfolioCategories } from '@/lib/portfolio-data';

const cases = portfolioCategories.flatMap((category) => category.projects).slice(0, 4);

export default function PortfolioStrip() {
  return (
    <div className="overflow-hidden rounded-[36px] border border-[rgba(255,255,255,0.18)] bg-[linear-gradient(135deg,#07111F,#061B3A)] p-4 shadow-[0_28px_90px_rgba(0,0,0,0.14)] md:p-6">
      <motion.div
        className="flex gap-4 md:gap-6"
        animate={{ x: ['0%', '-55%'] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
      >
        {[...cases, ...cases].map((item, index) => (
          <article
            key={`${item.title}-${index}`}
            className="group min-h-[360px] w-[82vw] shrink-0 rounded-[30px] p-6 text-white md:w-[52vw] lg:w-[38vw]"
          >
            <div className="flex h-full flex-col justify-between overflow-hidden rounded-[26px] border border-[rgba(255,255,255,0.35)] bg-[linear-gradient(135deg,#061B3A,#05070d)] p-5 shadow-[0_25px_80px_rgba(0,0,0,0.12)] backdrop-blur-[6px] md:p-7">
              <div className="overflow-hidden rounded-[24px] border border-[rgba(255,255,255,0.35)] shadow-[0_16px_50px_rgba(0,0,0,0.14)]">
                <DynamicImage
                  src={item.coverImage}
                  alt={item.title}
                  className="aspect-[16/10] w-full"
                  imageClassName="transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.32em] text-white/92">
                <span>Case Study 0{(index % cases.length) + 1}</span>
                <span>Featured</span>
              </div>
              <div>
                <p className="font-display text-5xl uppercase leading-[0.9] tracking-[0.1em] text-primary text-shadow-soft md:text-7xl">{item.title}</p>
                <p className="mt-4 max-w-xs text-sm leading-7 text-white/92">{item.highlight}</p>
              </div>
              <div className="flex items-end justify-between">
                <p className="text-xs uppercase tracking-[0.34em] text-white/92">Scroll-driven presentation</p>
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[rgba(255,255,255,0.35)] bg-[rgba(255,255,255,0.12)] text-xl">↗</div>
              </div>
            </div>
          </article>
        ))}
      </motion.div>
    </div>
  );
}