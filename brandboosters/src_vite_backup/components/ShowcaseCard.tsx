import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import DynamicImage from './DynamicImage';
import type { PortfolioProject } from '@/data/portfolioData';

type ShowcaseCardProps = {
  project: PortfolioProject;
  to: string;
  dark?: boolean;
};

export default function ShowcaseCard({ project, to, dark = false }: ShowcaseCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65 }}
      className={`group h-full overflow-hidden rounded-[32px] border shadow-[0_25px_80px_rgba(0,0,0,0.1)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(0,0,0,0.14)] ${dark ? 'border-[rgba(255,255,255,0.32)] bg-[linear-gradient(180deg,#061B3A,#05070d)] text-white' : 'border-black/[0.06] bg-[linear-gradient(180deg,rgba(255,255,255,0.76),rgba(255,255,255,0.54))] text-navy'}`}
    >
      <div className="flex h-full min-h-[560px] flex-col justify-between gap-5 p-5 md:p-6">
        <div className="overflow-hidden rounded-[26px] border border-current/10 shadow-[0_18px_50px_rgba(0,0,0,0.12)]">
          <DynamicImage src={project.coverImage} alt={project.title} className="aspect-[4/3] w-full" imageClassName="transition-transform duration-700 ease-out group-hover:scale-105" />
        </div>
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className={`font-groove text-[11px] uppercase tracking-[0.34em] ${dark ? 'text-white/88' : 'text-black/72'}`}>{project.client}</p>
            <h3 className={`mt-4 fluid-card-title font-display uppercase leading-[0.9] tracking-[0.08em] ${dark ? 'text-white text-shadow-soft' : 'text-on-light'}`}>{project.title}</h3>
          </div>
          <span className={`text-xs uppercase tracking-[0.28em] ${dark ? 'text-white/88' : 'text-black/68'}`}>{project.year}</span>
        </div>
        <p className={`max-w-[34ch] text-sm leading-7 ${dark ? 'text-white/90' : 'text-black/80'}`}>{project.summary}</p>
        <Link to={to} className={`inline-flex w-fit items-center gap-2 rounded-full border px-5 py-3 font-groove text-[11px] uppercase tracking-[0.28em] transition duration-500 ${dark ? 'border-white/20 bg-white/5 text-white/92 hover:border-white/35 hover:bg-white/10' : 'border-black/[0.08] bg-white/60 text-navy hover:border-black/[0.14] hover:bg-white'}`}>
          Open case study <span>↗</span>
        </Link>
      </div>
    </motion.article>
  );
}