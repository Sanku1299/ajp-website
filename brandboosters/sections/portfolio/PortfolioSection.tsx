"use client";

import { motion } from 'framer-motion';
import { PortfolioCard } from '../../components/common/PortfolioCard';
import { SectionShell } from '../../components/layout/SectionShell';
import { featuredPortfolioItems } from '../../data/site-content';

export function PortfolioSection() {
  return (
    <SectionShell className="py-20 md:py-28">
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-groove text-[11px] uppercase tracking-[0.38em] text-black/72">Selected Work</p>
          <h2 className="mt-4 max-w-3xl font-display text-[clamp(2.8rem,7vw,6rem)] uppercase leading-[0.92] tracking-[0.1em] text-navy">
            Premium portfolio cards ready for drag-and-drop layouts.
          </h2>
        </div>
        <p className="max-w-xl text-sm leading-7 text-black/76 md:text-base">
          Each card is modular, reusable, and simple to wire into a CMS or Builder.io section later.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {featuredPortfolioItems.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.06 }}
          >
            <PortfolioCard project={project} />
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
}
