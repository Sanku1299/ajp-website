import { motion } from 'framer-motion';
import { portfolioCategories } from '@/data/portfolioData';
import HeroSection from '@/components/HeroSection';
import Marquee from '@/components/Marquee';
import BentoServices from '@/components/BentoServices';
import PortfolioStrip from '@/components/PortfolioStrip';
import ProcessTimeline from '@/components/ProcessTimeline';
import SectionHeading from '@/components/SectionHeading';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';

const trustWords = ['Branding', 'Design', 'Motion', 'Websites', 'Strategy', 'Marketing'];

export default function HomePage() {
  const featuredProjects = portfolioCategories.flatMap((category) => category.projects).slice(0, 2);

  return (
    <div>
      <HeroSection
        title="WE BUILD BRANDS THAT MOVE."
        subtitle="We craft premium brands, cinematic motion, and scroll-led digital experiences that feel sharp, elevated, and impossible to ignore."
        primaryHref="/portfolio"
        primaryLabel="View Portfolio"
        secondaryHref="/contact"
        secondaryLabel="Book Strategy Call"
        featuredImage={featuredProjects[0]?.coverImage}
        featuredTitle={featuredProjects[0]?.title}
      />

      <Marquee items={trustWords} />

      <section className="section-shell container-laptop mx-auto px-4 py-16 md:px-6 md:py-20 lg:py-24">
        <SectionHeading eyebrow="Services" title="Creative systems built to hold attention." description="The structure is minimal, but every block is designed to feel premium, layered, and visually deliberate." />
        <div className="mt-12">
          <BentoServices />
        </div>
      </section>

      <section className="section-shell container-laptop mx-auto px-4 py-16 md:px-6 md:py-20 lg:py-24">
        <SectionHeading eyebrow="Portfolio" title="Selected work presented like a film sequence." description="A horizontal canvas gives each project room to breathe while preserving the motion-first feel." />
        <div className="mt-12">
          <PortfolioStrip />
        </div>
      </section>

      <section className="section-shell container-laptop mx-auto px-4 py-16 md:px-6 md:py-20 lg:py-24">
        <SectionHeading eyebrow="Why BrandBoosters" title="Built for brands that want to feel like they already lead." description="A premium blend of strategy, design, and execution built around clarity, pace, and visual conviction." />
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
              <p className="font-display text-[clamp(2.4rem,3.4vw,4rem)] uppercase tracking-[0.08em] text-orange">0{index + 1}</p>
              <h3 className="mt-8 font-display text-4xl uppercase tracking-[0.1em] text-navy">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-black/80">{copy}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section-shell container-laptop mx-auto px-4 py-16 md:px-6 md:py-20 lg:py-24">
        <SectionHeading eyebrow="Process" title="A smooth system with visible momentum." description="The timeline grows with the scroll, matching the skill brief’s emphasis on cinematic storytelling and controlled movement." />
        <div className="mt-12">
          <ProcessTimeline />
        </div>
      </section>

      <section className="section-shell container-laptop mx-auto px-4 py-16 md:px-6 md:py-20 lg:py-24">
        <SectionHeading eyebrow="Testimonials" title="Clients come for polish. They stay for clarity." description="Three compact cards keep the focus on language, trust, and premium presentation." />
        <div className="mt-12">
          <Testimonials />
        </div>
      </section>

      <CTASection
        title="LET’S BUILD YOUR BRAND."
        description="If your brand needs a sharper point of view, a stronger motion system, and a digital presence that feels unmistakably premium, this is the starting line."
        primaryHref="/contact"
        primaryLabel="Start a Project"
        secondaryHref="/services"
        secondaryLabel="Explore Services"
      />
    </div>
  );
}