"use client";

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import DynamicImage from '@/components/dynamic-image';
import SectionHeading from '@/components/section-heading';

const posts = [
  { title: 'Why minimal brands often feel more expensive', category: 'Strategy', featured: true, copy: 'A clearer hierarchy, less noise, and stronger motion discipline can radically improve brand perception.', coverImage: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1400&q=80' },
  { title: 'How to build cinematic scroll flow in Next.js', category: 'Motion', featured: false, copy: 'A practical breakdown of sticky sections, layered transitions, and pacing.', coverImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80' },
  { title: 'The premium design cues clients notice first', category: 'Design', featured: false, copy: 'Typography, whitespace, and color tension do more heavy lifting than most teams expect.', coverImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80' },
  { title: 'What makes a marketing site feel future-facing', category: 'Growth', featured: false, copy: 'The answer is usually restraint, consistency, and clean technical execution.', coverImage: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1400&q=80' }
];

const categories = ['All', 'Strategy', 'Motion', 'Design', 'Growth'];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = useMemo(
    () => (activeCategory === 'All' ? posts : posts.filter((post) => post.category === activeCategory)),
    [activeCategory]
  );

  const featured = posts.find((post) => post.featured) ?? posts[0];

  return (
    <div className="mx-auto max-w-7xl px-4 pt-32 md:px-6 lg:pt-36">
      <section className="section-shell grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-end">
        <div>
          <p className="font-groove text-[11px] uppercase tracking-[0.38em] text-black/80">Blog</p>
          <h1 className="mt-4 max-w-4xl font-display text-[clamp(4rem,10vw,10rem)] uppercase leading-[0.9] tracking-[0.12em] text-navy">
            Minimal editorial writing for modern brands.
          </h1>
        </div>
        <p className="max-w-2xl text-sm leading-8 text-black/82 md:text-base">
          The blog keeps a clean editorial format with category filtering, a featured story, and motion that supports the reading experience instead of distracting from it.
        </p>
      </section>

      <section className="section-shell mt-12 flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`rounded-full border px-5 py-3 text-sm transition ${activeCategory === category ? 'border-navy bg-navy text-white' : 'border-black/[0.06] bg-[rgba(255,255,255,0.45)] text-black/82 hover:bg-black/5'}`}
          >
            {category}
          </button>
        ))}
      </section>

      <section className="section-shell mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="rounded-[36px] border border-black/[0.06] bg-[linear-gradient(135deg,#061B3A,#08101f)] p-6 text-white md:p-10"
        >
          <p className="font-groove text-[11px] uppercase tracking-[0.38em] text-white/86">Featured article</p>
          <h2 className="mt-4 max-w-xl font-display text-5xl uppercase leading-[0.92] tracking-[0.12em] md:text-7xl">{featured.title}</h2>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-white/86">{featured.copy}</p>
          <div className="mt-8 overflow-hidden rounded-[28px] border border-[rgba(219,219,219,0.2)]">
            <DynamicImage src={featured.coverImage} alt={featured.title} className="aspect-[16/10] w-full" />
          </div>
        </motion.article>

        <div className="grid gap-4">
          {filtered.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: index * 0.03 }}
              className="group rounded-[28px] border border-black/[0.06] bg-[rgba(255,255,255,0.52)] p-6 shadow-sm transition hover:-translate-y-1 hover:bg-[rgba(255,255,255,0.6)]"
            >
              <div className="overflow-hidden rounded-[22px] border border-black/[0.06]">
                <DynamicImage src={post.coverImage} alt={post.title} className="aspect-[16/10] w-full" imageClassName="transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="flex items-start justify-between gap-4">
                <p className="font-groove text-[11px] uppercase tracking-[0.35em] text-black/64">{post.category}</p>
                <span className="transition group-hover:translate-x-1">↗</span>
              </div>
              <h3 className="mt-8 font-display text-4xl uppercase leading-[0.92] tracking-[0.1em] text-navy">{post.title}</h3>
              <p className="mt-4 text-sm leading-7 text-black/80">{post.copy}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section-shell mt-20 pb-24">
        <SectionHeading eyebrow="Reading note" title="Compact articles. Premium layout. No clutter." align="center" />
      </section>
    </div>
  );
}