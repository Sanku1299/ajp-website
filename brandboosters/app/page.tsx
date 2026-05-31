"use client";

import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import DynamicImage from '@/components/dynamic-image';
import BentoServices from '@/components/bento-services';
import Marquee from '@/components/marquee';
import PortfolioStrip from '@/components/portfolio-strip';
import ProcessTimeline from '@/components/process-timeline';
import SectionHeading from '@/components/section-heading';
import Testimonials from '@/components/testimonials';
import { portfolioCategories } from '@/lib/portfolio-data';
import BuilderPage from '../components/builder/BuilderPage';

const trustWords = ['Branding', 'Design', 'Motion', 'Websites', 'Strategy', 'Marketing'];

export default function HomePage() {
  const heroRef = useRef<HTMLHeadingElement | null>(null);
  const subRef = useRef<HTMLParagraphElement | null>(null);
  const featuredProjects = portfolioCategories.flatMap((category) => category.projects).slice(0, 2);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const heroSpans = heroRef.current?.querySelectorAll('span');

      if (heroSpans) {
        gsap.fromTo(
          heroSpans,
          { yPercent: 120, opacity: 0, rotate: 6 },
          { yPercent: 0, opacity: 1, rotate: 0, duration: 1.15, stagger: 0.055, ease: 'power4.out', delay: 0.2 }
        );
      }

      gsap.fromTo(
        subRef.current,
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', delay: 0.55 }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <BuilderPage>
      <div>
      <section className="relative overflow-hidden px-4 pt-28 md:px-6 lg:pt-32">
        <div className="hero-grid relative mx-auto flex min-h-[calc(100vh-8rem)] max-w-7xl flex-col justify-between overflow-hidden rounded-[40px] border border-black/[0.06] bg-[linear-gradient(180deg,rgba(6,27,58,0.96),rgba(7,17,31,0.92))] px-5 py-8 text-white shadow-[0_40px_120px_rgba(7,17,31,0.28)] md:px-10 lg:px-14">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-[68%] bg-[linear-gradient(90deg,rgba(0,0,0,0.38),rgba(0,0,0,0.16)_45%,transparent_100%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_24%_22%,rgba(0,0,0,0.22),transparent_34%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.08),transparent_30%)]" />
          <div className="absolute right-6 top-10 hidden h-56 w-56 rounded-full border border-[rgba(219,219,219,0.2)] bg-[rgba(219,219,219,0.12)] blur-3xl animate-drift lg:block" />
          <div className="absolute left-6 top-24 h-28 w-28 rounded-full bg-orange/25 blur-3xl animate-floaty" />
          <div className="absolute bottom-12 right-20 h-40 w-40 rounded-full border border-orange/20 bg-orange/10 blur-2xl animate-floaty" />

          <div className="flex items-center justify-between gap-4 text-xs uppercase tracking-[0.34em] text-white/86">
            <span>BrandBoosters / Creative Agency</span>
            <span>Premium motion studio</span>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
            <div className="max-w-5xl">
              <h1 ref={heroRef} className="font-display text-[clamp(4.6rem,14vw,13rem)] uppercase leading-[0.88] tracking-[0.12em] text-[#F8F8F8] masked-text [text-shadow:0_4px_24px_rgba(0,0,0,0.24)]">
                {['WE', 'BUILD', 'BRANDS', 'THAT', 'MOVE.'].map((word) => (
                  <span key={word} className="inline-block pr-5 md:pr-8">{word}</span>
                ))}
              </h1>
              <p ref={subRef} className="mt-6 max-w-2xl font-groove text-sm leading-8 text-white/88 md:text-lg">
                We craft premium brands, cinematic motion, and scroll-led digital experiences that feel sharp, elevated, and impossible to ignore.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <motion.a
                  href="/portfolio"
                  whileHover={{ y: -3, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-3 rounded-full bg-orange px-7 py-4 font-groove text-xs font-semibold uppercase tracking-[0.32em] text-dark shadow-[0_18px_50px_rgba(255,159,10,0.28)]"
                >
                  View Portfolio <FaArrowRight />
                </motion.a>
                <motion.a
                  href="/contact"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-3 rounded-full border border-[rgba(219,219,219,0.3)] bg-[rgba(219,219,219,0.18)] px-7 py-4 font-groove text-xs font-semibold uppercase tracking-[0.32em] text-[#F8F8F8] backdrop-blur-md [text-shadow:0_2px_10px_rgba(0,0,0,0.22)]"
                >
                  Book Strategy Call
                </motion.a>
              </div>
            </div>

            <div className="relative flex min-h-[420px] items-end justify-center lg:justify-end">
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5.8, repeat: Infinity, ease: 'easeInOut' }}
                className="relative h-[420px] w-[320px] overflow-hidden rounded-[34px] border border-[rgba(219,219,219,0.2)] bg-[rgba(219,219,219,0.12)] p-4 shadow-[0_20px_80px_rgba(0,0,0,0.28)] backdrop-blur-md md:h-[480px] md:w-[380px]"
              >
                <DynamicImage
                  src={featuredProjects[0]?.coverImage}
                  alt={featuredProjects[0]?.title ?? 'Featured BrandBoosters project'}
                  className="h-full w-full rounded-[28px]"
                  imageClassName="transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-8 bottom-8 rounded-[24px] border border-[rgba(219,219,219,0.2)] bg-[linear-gradient(180deg,rgba(6,27,58,0.46),rgba(6,27,58,0.22))] px-5 py-4 text-white backdrop-blur-md">
                  <p className="font-groove text-[10px] uppercase tracking-[0.4em] text-white/86">Featured project</p>
                  <p className="mt-2 font-display text-3xl uppercase tracking-[0.12em]">{featuredProjects[0]?.title}</p>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[rgba(219,219,219,0.2)] pt-6 text-xs uppercase tracking-[0.34em] text-white/86">
            <span>Scroll to explore</span>
            <span>Available for select brand launches</span>
          </div>
        </div>
      </section>

      <Marquee items={trustWords} />

      <section className="section-shell mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
        <SectionHeading
          eyebrow="Services"
          title="Creative systems built to hold attention."
          description="The structure is minimal, but every block is designed to feel premium, layered, and visually deliberate."
        />
        <div className="mt-12">
          <BentoServices />
        </div>
      </section>

      <section className="section-shell mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
        <SectionHeading
          eyebrow="Portfolio"
          title="Selected work presented like a film sequence."
          description="A horizontal canvas gives each project room to breathe while preserving the motion-first feel."
        />
        <div className="mt-12">
          <PortfolioStrip />
        </div>
      </section>

      <section className="section-shell mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
        <SectionHeading
          eyebrow="Why BrandBoosters"
          title="Built for brands that want to feel like they already lead."
          description="A premium blend of strategy, design, and execution built around clarity, pace, and visual conviction."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {[
            ['Precision', 'Tight systems, clean hierarchy, and a refined visual cadence.'],
            ['Motion-first', 'Every reveal and transition feels cinematic, smooth, and controlled.'],
            ['Scalable', 'Reusable architecture designed to grow across campaigns and platforms.']
          ].map(([title, copy], index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, delay: index * 0.06 }}
              className="rounded-[28px] border border-black/[0.06] bg-[rgba(255,255,255,0.45)] p-6 shadow-sm"
            >
              <p className="font-display text-5xl uppercase tracking-[0.12em] text-orange">0{index + 1}</p>
              <h3 className="mt-8 font-display text-4xl uppercase tracking-[0.1em] text-navy">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-black/80">{copy}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section-shell mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
        <SectionHeading
          eyebrow="Process"
          title="A smooth system with visible momentum."
          description="The timeline grows with the scroll, matching the skill brief’s emphasis on cinematic storytelling and controlled movement."
        />
        <div className="mt-12">
          <ProcessTimeline />
        </div>
      </section>

      <section className="section-shell mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
        <SectionHeading
          eyebrow="Testimonials"
          title="Clients come for polish. They stay for clarity."
          description="Three compact cards keep the focus on language, trust, and premium presentation."
        />
        <div className="mt-12">
          <Testimonials />
        </div>
      </section>

      <section className="section-shell px-4 pb-20 md:px-6 md:pb-28">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[40px] border border-black/[0.06] bg-[linear-gradient(135deg,#061B3A,#0c274f_45%,#07111f)] px-6 py-14 text-white md:px-10 md:py-20 lg:px-14">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <p className="font-groove text-[11px] uppercase tracking-[0.38em] text-white/86">CTA Footer</p>
              <h2 className="mt-4 font-display text-[clamp(3.6rem,10vw,8rem)] uppercase leading-[0.9] tracking-[0.12em] text-white">
                LET’S BUILD
                <br />
                YOUR BRAND.
              </h2>
            </div>
            <div className="max-w-xl justify-self-start lg:justify-self-end">
              <p className="text-sm leading-7 text-white/84 md:text-base">
                If your brand needs a sharper point of view, a stronger motion system, and a digital presence that feels unmistakably premium, this is the starting line.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="/contact" className="rounded-full bg-orange px-6 py-4 font-groove text-xs font-semibold uppercase tracking-[0.28em] text-dark">
                  Start a Project
                </a>
                <a href="/services" className="rounded-full border border-[rgba(219,219,219,0.24)] bg-[rgba(219,219,219,0.12)] px-6 py-4 font-groove text-xs font-semibold uppercase tracking-[0.28em] text-white backdrop-blur-md">
                  Explore Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </BuilderPage>
  );
}