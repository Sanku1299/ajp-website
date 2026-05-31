import { motion } from 'framer-motion';
import type { PortfolioCategory, PortfolioProject } from '@/data/portfolioData';
import ShowcaseCard from './ShowcaseCard';

type PortfolioGridProps = {
  projects: PortfolioProject[];
  baseHref: string;
  dark?: boolean;
  layout: PortfolioCategory['layout'];
  comingSoon?: PortfolioCategory['comingSoon'];
};

export default function PortfolioGrid({ projects, baseHref, dark = false, layout, comingSoon }: PortfolioGridProps) {
  if (projects.length === 0) {
    const placeholderCount = 2;

    return (
      <div className="grid gap-6 md:grid-cols-2">
        {Array.from({ length: placeholderCount }).map((_, index) => (
          <motion.article
            key={`coming-soon-${index}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: index * 0.06 }}
            className="group h-full overflow-hidden rounded-[32px] border border-black/[0.06] bg-[linear-gradient(180deg,rgba(255,255,255,0.78),rgba(255,255,255,0.54))] p-5 shadow-[0_25px_80px_rgba(0,0,0,0.1)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(0,0,0,0.14)]"
          >
            <div className="flex h-full min-h-[560px] flex-col justify-between gap-5">
              <div className="rounded-[26px] border border-black/[0.06] bg-[linear-gradient(135deg,rgba(6,27,58,0.08),rgba(255,159,10,0.08))] p-4">
                <div className="rounded-[22px] border border-black/[0.05] bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.48),transparent_35%),linear-gradient(180deg,rgba(255,255,255,0.42),rgba(255,255,255,0.16))] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.4)]">
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full border border-black/[0.08] bg-[rgba(255,255,255,0.72)] px-3 py-1 font-groove text-[10px] uppercase tracking-[0.3em] text-black/68">
                      Launching Soon
                    </span>
                    <span className="rounded-full border border-black/[0.08] bg-[rgba(255,255,255,0.55)] px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-black/60">
                      Preview
                    </span>
                  </div>
                  <div className="mt-6 grid grid-cols-3 gap-3 opacity-70 blur-[1px]">
                    <div className="h-24 rounded-[18px] bg-[linear-gradient(180deg,rgba(255,255,255,0.76),rgba(255,255,255,0.18))]" />
                    <div className="h-24 rounded-[18px] bg-[linear-gradient(180deg,rgba(255,255,255,0.48),rgba(255,255,255,0.1))]" />
                    <div className="h-24 rounded-[18px] bg-[linear-gradient(180deg,rgba(6,27,58,0.14),rgba(255,255,255,0.08))]" />
                  </div>
                </div>
              </div>

              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className={`${dark ? 'text-white/88' : 'text-black/72'} font-groove text-[11px] uppercase tracking-[0.34em]`}>
                    {comingSoon?.headline ?? 'Coming Soon'}
                  </p>
                  <h3 className={`${dark ? 'text-white text-shadow-soft' : 'text-on-light'} mt-4 fluid-card-title font-display uppercase leading-[0.9] tracking-[0.08em]`}>
                    Coming Soon
                  </h3>
                </div>
                <span className={`${dark ? 'text-white/88' : 'text-black/68'} text-xs uppercase tracking-[0.28em]`}>
                  02
                </span>
              </div>

              <p className={`${dark ? 'text-white/90' : 'text-black/80'} max-w-[34ch] text-sm leading-7`}>
                {comingSoon?.subtext ?? 'Premium projects are in development and will be added here soon.'}
              </p>

              <div className="flex flex-wrap gap-2">
                {['Launching Soon', 'Editorial Build', 'Premium Placeholder'].map((pill) => (
                  <span key={pill} className="rounded-full border border-black/[0.06] bg-[rgba(255,255,255,0.6)] px-3 py-2 font-groove text-[10px] uppercase tracking-[0.28em] text-black/68">
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {projects.map((project) => (
        <ShowcaseCard key={project.slug} project={project} to={`${baseHref}/${project.slug}`} dark={dark} />
      ))}
    </div>
  );
}