import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import DynamicImage from './DynamicImage';

type HeroSectionProps = {
  eyebrow?: string;
  title: string;
  subtitle: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
  featuredImage?: string;
  featuredTitle?: string;
  featureMeta?: string;
};

export default function HeroSection({
  eyebrow = 'BrandBoosters / Creative Agency',
  title,
  subtitle,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  featuredImage,
  featuredTitle,
  featureMeta = 'Featured project'
}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden px-4 pt-24 md:px-6 lg:pt-28">
      <div className="hero-grid container-laptop relative mx-auto flex min-h-[min(84vh,760px)] flex-col justify-between overflow-hidden rounded-[40px] border border-black/[0.06] bg-[linear-gradient(180deg,rgba(6,27,58,0.96),rgba(7,17,31,0.92))] px-5 py-8 text-white shadow-[0_40px_120px_rgba(7,17,31,0.28)] md:px-10 lg:px-12">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-[68%] bg-[linear-gradient(90deg,rgba(0,0,0,0.38),rgba(0,0,0,0.16)_45%,transparent_100%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_24%_22%,rgba(0,0,0,0.22),transparent_34%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.08),transparent_30%)]" />
        <div className="absolute right-6 top-10 hidden h-56 w-56 rounded-full border border-[rgba(219,219,219,0.2)] bg-[rgba(219,219,219,0.12)] blur-3xl animate-drift lg:block" />
        <div className="absolute left-6 top-24 h-28 w-28 rounded-full bg-orange/25 blur-3xl animate-floaty" />
        <div className="absolute bottom-12 right-20 h-40 w-40 rounded-full border border-orange/20 bg-orange/10 blur-2xl animate-floaty" />

        <div className="flex items-center justify-between gap-4 text-xs uppercase tracking-[0.34em] text-white/86">
          <span>{eyebrow}</span>
          <span>Premium motion studio</span>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
          <div className="max-w-5xl">
            <h1 className="fluid-display-xl font-display uppercase leading-[0.9] tracking-[0.1em] text-[#F8F8F8] masked-text [text-shadow:0_4px_24px_rgba(0,0,0,0.24)]">
              {title.split(' ').map((word) => (
                <span key={word} className="inline-block pr-5 md:pr-8">{word}</span>
              ))}
            </h1>
            <p className="mt-6 max-w-2xl font-groove text-sm leading-8 text-white/88 md:text-lg">
              {subtitle}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <motion.div whileHover={{ y: -3, scale: 1.01 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to={primaryHref}
                  className="inline-flex items-center gap-3 rounded-full bg-orange px-7 py-4 font-groove text-xs font-semibold uppercase tracking-[0.32em] text-dark shadow-[0_18px_50px_rgba(255,159,10,0.28)]"
                >
                  {primaryLabel} <FaArrowRight />
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to={secondaryHref}
                  className="inline-flex items-center gap-3 rounded-full border border-[rgba(219,219,219,0.3)] bg-[rgba(219,219,219,0.18)] px-7 py-4 font-groove text-xs font-semibold uppercase tracking-[0.32em] text-[#F8F8F8] backdrop-blur-md [text-shadow:0_2px_10px_rgba(0,0,0,0.22)]"
                >
                  {secondaryLabel}
                </Link>
              </motion.div>
            </div>
          </div>

          {featuredImage ? (
            <div className="relative flex min-h-[360px] items-end justify-center lg:justify-end">
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5.8, repeat: Infinity, ease: 'easeInOut' }}
                className="relative h-[360px] w-[280px] overflow-hidden rounded-[34px] border border-[rgba(219,219,219,0.2)] bg-[rgba(219,219,219,0.12)] p-4 shadow-[0_20px_80px_rgba(0,0,0,0.28)] backdrop-blur-md xl:h-[440px] xl:w-[340px]"
              >
                <DynamicImage
                  src={featuredImage}
                  alt={featuredTitle ?? 'Featured project'}
                  className="h-full w-full rounded-[28px]"
                  imageClassName="transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-8 bottom-8 rounded-[24px] border border-[rgba(219,219,219,0.2)] bg-[linear-gradient(180deg,rgba(6,27,58,0.46),rgba(6,27,58,0.22))] px-5 py-4 text-white backdrop-blur-md">
                  <p className="font-groove text-[10px] uppercase tracking-[0.4em] text-white/86">{featureMeta}</p>
                  <p className="mt-2 font-display text-[clamp(1.8rem,2.8vw,3rem)] uppercase tracking-[0.08em]">{featuredTitle}</p>
                </div>
              </motion.div>
            </div>
          ) : null}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[rgba(219,219,219,0.2)] pt-6 text-xs uppercase tracking-[0.34em] text-white/86">
          <span>Scroll to explore</span>
          <span>Available for select brand launches</span>
        </div>
      </div>
    </section>
  );
}