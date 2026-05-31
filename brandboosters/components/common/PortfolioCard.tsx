"use client";

import type { PortfolioCardData } from '../../types/portfolio';
import { cn } from '../../lib/utils/cn';
import { Button } from '../ui/Button';

type PortfolioCardProps = {
  project: PortfolioCardData;
  className?: string;
};

export function PortfolioCard({ project, className }: PortfolioCardProps) {
  return (
    <article
      className={cn(
        'overflow-hidden rounded-[28px] border border-black/[0.06] bg-[linear-gradient(180deg,rgba(255,255,255,0.82),rgba(255,255,255,0.62))] shadow-[0_26px_80px_rgba(6,27,58,0.1)]',
        className
      )}
    >
      <div className="aspect-[4/3] overflow-hidden bg-[linear-gradient(135deg,rgba(6,27,58,0.08),rgba(255,159,10,0.08))]">
        <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
      </div>
      <div className="space-y-5 p-5">
        <div className="flex items-center justify-between gap-4 text-xs uppercase tracking-[0.28em] text-black/60">
          <span>{project.category}</span>
          <span>{project.year ?? '2026'}</span>
        </div>
        <div>
          <h3 className="font-display text-4xl uppercase leading-[0.92] tracking-[0.1em] text-navy">{project.title}</h3>
          <p className="mt-4 text-sm leading-7 text-black/78">{project.summary}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {(project.tags ?? []).map((tag) => (
            <span key={tag} className="rounded-full border border-black/[0.08] bg-white/70 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-black/68">
              {tag}
            </span>
          ))}
        </div>
        <Button tone="secondary" className="w-full" onClick={() => window.open(project.href, '_self')}>
          View Project
        </Button>
      </div>
    </article>
  );
}
