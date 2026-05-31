import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import DynamicGallery from '@/components/DynamicGallery';
import DynamicImage from '@/components/DynamicImage';
import { PortfolioCategory, PortfolioProject } from '@/data/portfolioData';

function MetricCard({ label, value, detail, dark = false }: { label: string; value: string; detail: string; dark?: boolean }) {
  return (
    <div className={`rounded-[26px] border p-5 ${dark ? 'border-[rgba(219,219,219,0.2)] bg-[rgba(219,219,219,0.12)] text-white' : 'border-black/[0.06] bg-[rgba(255,255,255,0.52)] text-navy'}`}>
      <p className={`font-groove text-[11px] uppercase tracking-[0.32em] ${dark ? 'text-white/76' : 'text-black/64'}`}>{label}</p>
      <p className="mt-5 font-display text-[clamp(2.4rem,3.5vw,4rem)] uppercase tracking-[0.08em]">{value}</p>
      <p className={`mt-3 text-sm leading-7 ${dark ? 'text-white/82' : 'text-black/80'}`}>{detail}</p>
    </div>
  );
}

export default function PortfolioCaseStudyView({ category, project }: { category: PortfolioCategory; project: PortfolioProject }) {
  const heroRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const heroParts = heroRef.current?.querySelectorAll('[data-animate]');
    if (heroParts) {
      gsap.fromTo(heroParts, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 1, stagger: 0.08, ease: 'power4.out' });
    }
  }, []);

  const darkHero = category.layout === 'cinematic' || category.layout === 'browser' || category.layout === 'analytics';

  return (
    <div className="container-laptop mx-auto px-4 pt-36 md:px-6 md:pt-40 lg:pt-44">
      <section ref={heroRef} className={`section-shell overflow-hidden rounded-[42px] border border-black/[0.06] ${darkHero ? 'bg-[linear-gradient(135deg,#061B3A,#05070d)] text-white' : 'bg-[linear-gradient(135deg,#e7e7e7,#d8d8d8)] text-navy'} px-6 py-10 md:px-10 md:py-14`}>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_34%),linear-gradient(135deg,rgba(0,0,0,0.22),transparent_46%)]" />
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p data-animate className={`font-groove text-[11px] uppercase tracking-[0.38em] ${darkHero ? 'text-white/92' : 'text-black/72'}`}>{category.label}</p>
            <h1 data-animate className={`mt-4 max-w-3xl fluid-display font-display uppercase leading-[0.92] tracking-[0.08em] ${darkHero ? 'text-[#F8F8F8] [text-shadow:0_4px_30px_rgba(0,0,0,0.12)]' : 'text-on-light'}`}>
              {project.title}
            </h1>
            <p data-animate className={`mt-6 max-w-2xl text-sm leading-8 ${darkHero ? 'text-white/92' : 'text-black/84'}`}>{project.summary}</p>
          </div>
          <div className="space-y-4">
            <div data-animate className={`rounded-[30px] border p-6 shadow-[0_25px_80px_rgba(0,0,0,0.1)] ${darkHero ? 'border-[rgba(219,219,219,0.2)] bg-[rgba(219,219,219,0.12)]' : 'border-[rgba(255,255,255,0.35)] bg-[rgba(255,255,255,0.58)]'}`}>
              <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.3em] opacity-90">
                <span>{project.client}</span>
                <span>•</span>
                <span>{project.year}</span>
              </div>
              <div className="mt-6 overflow-hidden rounded-[24px] border border-current/10 shadow-[0_16px_50px_rgba(0,0,0,0.12)]">
                <DynamicImage src={project.coverImage} alt={project.title} className="aspect-[4/3] w-full" />
              </div>
            </div>
            <div data-animate>
              <MetricCard label="Year" value={project.year} detail="Project delivered and refined" dark={darkHero} />
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell mt-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[34px] border border-black/[0.06] bg-[linear-gradient(180deg,rgba(255,255,255,0.72),rgba(255,255,255,0.5))] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.1)] md:p-8">
          <p className="font-groove text-[11px] uppercase tracking-[0.38em] text-black/72">Project overview</p>
          <p className="mt-4 text-sm leading-8 text-black/84">{project.problem}</p>
          <div className="mt-8 space-y-3">
            {project.goals.map((goal) => (
              <div key={goal} className="rounded-[18px] border border-black/[0.06] bg-[linear-gradient(180deg,#e8e8e8,#d9d9d9)] px-4 py-4 text-sm font-medium text-navy">
                {goal}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[34px] border border-[rgba(255,255,255,0.35)] bg-[linear-gradient(135deg,#061B3A,#0c2448)] p-6 text-white shadow-[0_24px_70px_rgba(0,0,0,0.18)] md:p-8">
          <p className="font-groove text-[11px] uppercase tracking-[0.38em] text-white/92">Challenges</p>
          <div className="mt-5 space-y-3">
            {project.challenges.map((challenge) => (
              <div key={challenge} className="rounded-[18px] border border-[rgba(219,219,219,0.24)] bg-[rgba(219,219,219,0.14)] px-4 py-4 text-sm leading-7 text-white/92">
                {challenge}
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-[24px] border border-[rgba(219,219,219,0.24)] bg-[rgba(219,219,219,0.14)] p-5 text-sm leading-7 text-white/92">
            {project.highlight}
          </div>
        </div>
      </section>

      <section className="section-shell mt-12 grid gap-6 lg:grid-cols-2">
        <div className="rounded-[34px] border border-black/[0.06] bg-[linear-gradient(180deg,rgba(255,255,255,0.72),rgba(255,255,255,0.5))] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.1)] md:p-8">
          <p className="font-groove text-[11px] uppercase tracking-[0.38em] text-black/72">Strategy</p>
          <div className="mt-6 space-y-4 text-sm leading-7 text-black/84">
            <p><span className="font-semibold text-navy">Marketing:</span> {project.strategy.marketing}</p>
            <p><span className="font-semibold text-navy">Design:</span> {project.strategy.design}</p>
            <p><span className="font-semibold text-navy">Growth:</span> {project.strategy.growth}</p>
            <p><span className="font-semibold text-navy">Content:</span> {project.strategy.content}</p>
          </div>
        </div>

        <div className="rounded-[34px] border border-black/[0.06] bg-[linear-gradient(180deg,rgba(255,255,255,0.72),rgba(255,255,255,0.5))] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.1)] md:p-8">
          <p className="font-groove text-[11px] uppercase tracking-[0.38em] text-black/72">Process</p>
          <div className="mt-6 space-y-4">
            {project.process.map((step, index) => (
              <div key={step.title} className="rounded-[20px] border border-black/[0.06] bg-[linear-gradient(180deg,#e8e8e8,#d9d9d9)] px-5 py-5">
                <p className="font-display text-[clamp(2rem,3vw,3rem)] uppercase tracking-[0.08em] text-orange">0{index + 1}</p>
                <h2 className="mt-4 fluid-card-title font-display uppercase tracking-[0.08em] text-navy">{step.title}</h2>
                <p className="mt-3 text-sm leading-7 text-black/82">{step.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell mt-12 space-y-6">
        <p className="font-groove text-[11px] uppercase tracking-[0.38em] text-black/72">Visual showcase</p>
        <DynamicGallery title={project.title} images={project.images} />
        <div className="grid gap-4 md:grid-cols-3">
          {project.visuals.map((visual, index) => (
            <motion.div
              key={visual.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65, delay: index * 0.04 }}
              className={`rounded-[30px] border border-[rgba(255,255,255,0.35)] p-5 shadow-[0_25px_80px_rgba(0,0,0,0.1)] ${index % 2 === 0 ? 'bg-[linear-gradient(135deg,#e8e8e8,#d7d7d7)]' : 'bg-[linear-gradient(180deg,#061B3A,#0a1730)] text-white'}`}
            >
              <h3 className={`fluid-card-title font-display uppercase tracking-[0.08em] ${index % 2 === 0 ? 'text-on-light' : 'text-primary text-shadow-soft'}`}>{visual.title}</h3>
              <p className={`mt-3 text-sm leading-7 ${index % 2 === 0 ? 'text-black/82' : 'text-white/92'}`}>{visual.copy}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section-shell mt-12 grid gap-4 md:grid-cols-3">
        {project.results.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, delay: index * 0.03 }}
          >
            <MetricCard label={metric.label} value={metric.value} detail={metric.detail} />
          </motion.div>
        ))}
      </section>

      <section className="section-shell mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div className="rounded-[34px] border border-black/[0.06] bg-[linear-gradient(180deg,rgba(255,255,255,0.72),rgba(255,255,255,0.5))] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.1)] md:p-8">
          <p className="font-groove text-[11px] uppercase tracking-[0.38em] text-black/72">Client testimonial</p>
          <blockquote className="mt-6 font-display text-[clamp(2.2rem,3.5vw,4.2rem)] uppercase leading-[0.96] tracking-[0.08em] text-on-light">
            “{project.testimonial.quote}”
          </blockquote>
          <p className="mt-6 text-sm uppercase tracking-[0.28em] text-black/72">
            {project.testimonial.author} • {project.testimonial.role}
          </p>
        </div>

        <div className="rounded-[34px] border border-[rgba(255,255,255,0.35)] bg-[linear-gradient(135deg,#061B3A,#07111f)] p-6 text-white shadow-[0_24px_70px_rgba(0,0,0,0.18)] md:p-8">
          <p className="font-groove text-[11px] uppercase tracking-[0.38em] text-white/92">Final CTA</p>
          <h2 className="mt-4 fluid-cta font-display uppercase leading-[0.92] tracking-[0.08em] text-primary text-shadow-soft">Let’s Build Your Brand</h2>
          <p className="mt-6 max-w-xl text-sm leading-8 text-white/92">This case study is part of a broader category system that scales into new campaigns, new assets, and the next stage of the brand.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/contact" className="rounded-full bg-orange px-6 py-4 font-groove text-xs font-semibold uppercase tracking-[0.28em] text-dark">
              Book Strategy Call
            </Link>
            <Link to={category.href} className="rounded-full border border-[rgba(219,219,219,0.24)] bg-[rgba(219,219,219,0.12)] px-6 py-4 font-groove text-xs font-semibold uppercase tracking-[0.28em] text-white">
              Back to category
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}