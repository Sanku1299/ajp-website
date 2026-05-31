"use client";

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { Button } from '../../components/ui/Button';
import { SectionShell } from '../../components/layout/SectionShell';
import { heroHighlights } from '../../data/site-content';

type HeroSectionProps = {
  eyebrow?: string;
  title: string;
  description: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  media?: ReactNode;
};

export function HeroSection({
  eyebrow = 'Branding / Marketing Agency',
  title,
  description,
  primaryCta = { label: 'Start a Project', href: '/contact' },
  secondaryCta = { label: 'View Portfolio', href: '/portfolio' },
  media
}: HeroSectionProps) {
  return (
    <SectionShell className="pt-28 md:pt-32">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="grid gap-10 overflow-hidden rounded-[40px] border border-black/[0.06] bg-[linear-gradient(180deg,#061B3A,#0b1730)] px-6 py-10 text-white shadow-[0_40px_120px_rgba(6,27,58,0.22)] lg:grid-cols-[1.2fr_0.8fr] lg:px-10 lg:py-14"
      >
        <div className="space-y-6">
          <p className="font-groove text-[11px] uppercase tracking-[0.38em] text-white/82">{eyebrow}</p>
          <h1 className="max-w-4xl font-display text-[clamp(3.8rem,10vw,8.5rem)] uppercase leading-[0.9] tracking-[0.1em] text-[#F8F8F8]">
            {title}
          </h1>
          <p className="max-w-2xl text-sm leading-8 text-white/84 md:text-base">{description}</p>
          <div className="flex flex-wrap gap-4">
            <a href={primaryCta.href} className="rounded-full bg-orange px-6 py-4 font-groove text-xs font-semibold uppercase tracking-[0.28em] text-dark">
              {primaryCta.label}
            </a>
            <a href={secondaryCta.href} className="rounded-full border border-[rgba(255,255,255,0.18)] bg-white/10 px-6 py-4 font-groove text-xs font-semibold uppercase tracking-[0.28em] text-white backdrop-blur-md">
              {secondaryCta.label}
            </a>
          </div>
          <div className="flex flex-wrap gap-3 pt-2">
            {heroHighlights.map((item) => (
              <span key={item} className="rounded-full border border-white/12 bg-white/8 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-white/78">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-stretch">
          {media ?? (
            <div className="flex min-h-[320px] w-full items-end rounded-[30px] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.14),rgba(255,255,255,0.04))] p-6">
              <div className="w-full rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.18),rgba(255,255,255,0.06))] p-5 backdrop-blur-md">
                <p className="font-groove text-[10px] uppercase tracking-[0.4em] text-white/72">Editable Section</p>
                <p className="mt-4 max-w-sm text-sm leading-7 text-white/84">
                  This card is intentionally simple so it can be replaced later by Builder.io content or a custom media slot.
                </p>
              </div>
            </div>
          )}
        </div>
      </motion.section>
    </SectionShell>
  );
}
