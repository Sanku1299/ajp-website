import { motion } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';
import DynamicImage from '@/components/DynamicImage';
import { portfolioCategories } from '@/data/portfolioData';

const milestones = [
  { year: '2019', title: 'The agency takes shape', copy: 'A small team of strategists and designers starts building brands with a more editorial, motion-aware sensibility.' },
  { year: '2022', title: 'The system gets sharper', copy: 'We refine our process around performance, motion clarity, and better presentation across digital touchpoints.' },
  { year: '2026', title: 'Premium creative partner', copy: 'BrandBoosters becomes a full-stack agency focused on branding, web, campaigns, and cinematic digital experiences.' }
];

export default function AboutPage() {
  const featuredImage = portfolioCategories.flatMap((category) => category.projects)[2]?.coverImage;

  return (
    <div className="container-laptop mx-auto px-4 pt-36 md:px-6 md:pt-40 lg:pt-44">
      <section className="section-shell grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
        <div>
          <p className="font-groove text-[11px] uppercase tracking-[0.38em] text-black/80">About</p>
          <h1 className="mt-4 max-w-3xl fluid-display-lg font-display uppercase leading-[0.92] tracking-[0.08em] text-navy">
            A brand studio built around motion, restraint, and clarity.
          </h1>
        </div>
        <div className="space-y-4">
          <div className="overflow-hidden rounded-[34px] border border-black/[0.06] bg-[rgba(255,255,255,0.45)] shadow-sm">
            <DynamicImage src={featuredImage} alt="BrandBoosters studio visual" className="aspect-[4/3] w-full" />
          </div>
          <p className="max-w-2xl text-sm leading-8 text-black/82 md:text-base">
            BrandBoosters exists to make modern brands feel more intentional. We use minimalist structure, confident typography, and premium motion language to create digital experiences that are easy to remember and hard to ignore.
          </p>
        </div>
      </section>

      <section className="section-shell mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4 lg:mt-16">
        {[
          ['Mission', 'Make brands feel sharper, more desirable, and more aligned with the audience they want to attract.'],
          ['Vision', 'Build a studio known for futuristic presentation, clean systems, and premium execution.'],
          ['Process', 'Collaborative, cinematic, and iterative with design decisions grounded in performance.'],
          ['Principle', 'No clutter. No generic motion. Every detail should feel intentional and elevated.']
        ].map(([title, copy], index) => (
          <motion.article
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: index * 0.05 }}
            className="rounded-[28px] border border-black/[0.06] bg-[rgba(255,255,255,0.45)] p-6 shadow-sm"
          >
            <p className="font-groove text-[11px] uppercase tracking-[0.36em] text-black/64">0{index + 1}</p>
            <h2 className="mt-8 fluid-card-title font-display uppercase tracking-[0.08em] text-navy">{title}</h2>
            <p className="mt-4 text-sm leading-7 text-black/80">{copy}</p>
          </motion.article>
        ))}
      </section>

      <section className="section-shell mt-16 grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start lg:mt-18">
        <div className="rounded-[36px] border border-black/[0.06] bg-[linear-gradient(180deg,#061B3A,#07111f)] p-6 text-white md:p-10">
          <SectionHeading eyebrow="Company Story" title="We care about the feeling before the funnel." description="A premium agency should look like it understands the brand before it starts explaining the work." dark />
          <p className="mt-8 max-w-xl text-sm leading-7 text-white/84">
            Our approach is editorial and structured. We combine large type, premium spacing, and calm motion to build confidence instead of noise.
          </p>
        </div>

        <div className="space-y-4">
          {milestones.map((item, index) => (
            <motion.article
              key={item.year}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.7, delay: index * 0.05 }}
              className="rounded-[28px] border border-black/[0.06] bg-[rgba(255,255,255,0.45)] p-6 shadow-sm md:p-8"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <p className="font-display text-[clamp(2.6rem,4vw,4.5rem)] uppercase tracking-[0.08em] text-orange">{item.year}</p>
                <div className="max-w-xl">
                  <h3 className="font-display text-4xl uppercase tracking-[0.1em] text-navy">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-black/80">{item.copy}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section-shell mt-16 pb-20 lg:mt-18 lg:pb-24">
        <SectionHeading eyebrow="Why BrandBoosters" title="A premium look with a disciplined process." description="The work feels high-end because the system is disciplined: it balances whitespace, motion restraint, and strong visual hierarchy." align="center" />
      </section>
    </div>
  );
}