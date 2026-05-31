import { motion } from 'framer-motion';

const steps = [
  { step: '01', title: 'Strategy', copy: 'We define the brand point of view, audience, and opportunity space.' },
  { step: '02', title: 'Design', copy: 'We shape the visual language, layout direction, and motion system.' },
  { step: '03', title: 'Development', copy: 'We build the site with polished interactions and responsive precision.' },
  { step: '04', title: 'Launch', copy: 'We deploy the experience, refine polish, and ensure a smooth rollout.' },
  { step: '05', title: 'Growth', copy: 'We evolve the asset with performance insights, campaigns, and iteration.' }
];

export default function ProcessTimeline({ dark = false }: { dark?: boolean }) {
  return (
    <div className="relative">
      <div className={`absolute left-4 top-8 hidden h-[calc(100%-4rem)] w-px bg-gradient-to-b ${dark ? 'from-white/35 via-white/10 to-transparent' : 'from-navy/30 via-navy/10 to-transparent'} md:block`} />
      <div className="space-y-4 md:pl-12">
        {steps.map((item, index) => (
          <motion.article
            key={item.step}
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, delay: index * 0.06 }}
            className={`rounded-[28px] border p-6 ${dark ? 'border-[rgba(219,219,219,0.2)] bg-[rgba(219,219,219,0.12)] text-white' : 'border-black/[0.06] bg-[rgba(255,255,255,0.45)] text-navy'} md:p-8`}
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div className="flex items-start gap-4">
                <div className={`mt-1 h-3 w-3 rounded-full ${dark ? 'bg-orange' : 'bg-navy'}`} />
                <div>
                  <p className="font-groove text-[11px] uppercase tracking-[0.38em] opacity-60">{item.step}</p>
                  <h3 className="fluid-card-title font-display uppercase tracking-[0.08em]">{item.title}</h3>
                </div>
              </div>
              <p className={`max-w-md text-sm leading-7 ${dark ? 'text-white/84' : 'text-black/80'}`}>{item.copy}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}