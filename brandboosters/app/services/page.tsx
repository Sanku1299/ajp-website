"use client";

import { motion } from 'framer-motion';
import { FaArrowRight, FaRegGem, FaPenNib, FaVideo, FaChartLine, FaLayerGroup, FaCode } from 'react-icons/fa6';
import DynamicImage from '@/components/dynamic-image';
import SectionHeading from '@/components/section-heading';
import { portfolioCategories } from '@/lib/portfolio-data';

const services = [
  { title: 'Branding', icon: FaRegGem, copy: 'Identity systems, brand voice, naming, and launch direction built to feel premium and durable.' },
  { title: 'Graphic Design', icon: FaPenNib, copy: 'Editorial graphics, social kits, campaign layouts, and brand-synced visual systems.' },
  { title: 'Video Editing', icon: FaVideo, copy: 'Cinematic cuts, motion titles, polished edits, and visual pacing for content that holds attention.' },
  { title: 'Website Development', icon: FaCode, copy: 'Next.js and Tailwind builds that blend performance, motion, and a refined user experience.' },
  { title: 'Digital Marketing', icon: FaChartLine, copy: 'Growth strategy, paid media support, and content plans that give the brand a clearer voice.' },
  { title: 'Content Creation', icon: FaLayerGroup, copy: 'Premium content systems for consistent output across campaigns, socials, and launches.' }
];

export default function ServicesPage() {
  const featuredImage = portfolioCategories.flatMap((category) => category.projects)[6]?.coverImage;

  return (
    <div className="mx-auto max-w-7xl px-4 pt-32 md:px-6 lg:pt-36">
      <section className="section-shell grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
        <div>
          <p className="font-groove text-[11px] uppercase tracking-[0.38em] text-black/80">Services</p>
          <h1 className="mt-4 max-w-3xl font-display text-[clamp(4rem,10vw,10rem)] uppercase leading-[0.9] tracking-[0.12em] text-navy">
            Sharp services for brands that want to move faster.
          </h1>
        </div>
        <div className="space-y-4">
          <div className="overflow-hidden rounded-[34px] border border-black/[0.06] bg-[rgba(255,255,255,0.45)] shadow-sm">
            <DynamicImage src={featuredImage} alt="BrandBoosters service visual" className="aspect-[4/3] w-full" />
          </div>
          <p className="max-w-2xl text-sm leading-8 text-black/82 md:text-base">
            Each offering is designed to work as part of a premium brand system, not as a disconnected deliverable. The result is cleaner execution and a more coherent audience experience.
          </p>
        </div>
      </section>

      <section className="section-shell mt-16 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: index * 0.04 }}
              className="group rounded-[30px] border border-black/[0.06] bg-[rgba(255,255,255,0.52)] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-glow md:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy text-white transition group-hover:bg-orange group-hover:text-dark">
                  <Icon className="text-2xl" />
                </div>
                <span className="font-groove text-[11px] uppercase tracking-[0.36em] text-black/55">0{index + 1}</span>
              </div>
              <h2 className="mt-8 font-display text-4xl uppercase leading-[0.92] tracking-[0.1em] text-navy">{service.title}</h2>
              <p className="mt-4 text-sm leading-7 text-black/80">{service.copy}</p>
              <div className="mt-8 inline-flex items-center gap-2 font-groove text-[11px] uppercase tracking-[0.28em] text-navy/70 transition group-hover:translate-x-1">
                Learn more <FaArrowRight />
              </div>
            </motion.article>
          );
        })}
      </section>

      <section className="section-shell mt-20 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div className="rounded-[36px] border border-black/[0.06] bg-[linear-gradient(180deg,#061B3A,#07111f)] p-6 text-white md:p-10">
          <SectionHeading
            eyebrow="Included in Every Project"
            title="A design language that stays consistent across the stack."
            dark
          />
          <p className="mt-8 text-sm leading-7 text-white/84">
            Discovery, creative direction, refinements, and launch support are all handled with the same visual standards. Nothing feels bolted on.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {[
            'Premium art direction',
            'Scroll storytelling',
            'Responsive layouts',
            'Motion-first details',
            'Performance-aware builds',
            'Launch-ready polish'
          ].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: index * 0.03 }}
              className="rounded-[24px] border border-black/[0.06] bg-[rgba(255,255,255,0.45)] px-5 py-6 text-sm font-medium text-navy shadow-sm"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section-shell mt-20 pb-24">
        <div className="rounded-[36px] bg-[linear-gradient(135deg,#e8e8e8,#d9d9d9)] px-6 py-12 md:px-10 md:py-16">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="font-groove text-[11px] uppercase tracking-[0.38em] text-black/80">Next step</p>
              <h2 className="mt-4 font-display text-5xl uppercase leading-[0.9] tracking-[0.12em] text-navy md:text-7xl">
                Need a custom scope?
              </h2>
            </div>
            <a href="/contact" className="inline-flex items-center gap-3 rounded-full bg-navy px-7 py-4 font-groove text-xs font-semibold uppercase tracking-[0.3em] text-white">
              Start a conversation <FaArrowRight />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}