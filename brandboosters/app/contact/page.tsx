"use client";

import { motion } from 'framer-motion';
import { FaInstagram, FaLinkedinIn, FaBehance, FaMapLocationDot } from 'react-icons/fa6';
import SectionHeading from '@/components/section-heading';

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 pt-32 md:px-6 lg:pt-36">
      <section className="section-shell grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <div>
          <p className="font-groove text-[11px] uppercase tracking-[0.38em] text-black/80">Contact</p>
          <h1 className="mt-4 max-w-4xl font-display text-[clamp(4rem,10vw,10rem)] uppercase leading-[0.9] tracking-[0.12em] text-navy">
            Start something with range.
          </h1>
        </div>
        <p className="max-w-2xl text-sm leading-8 text-black/82 md:text-base">
          Share the brief, the launch window, and the feeling you want the brand to create. We’ll map the cleanest route from idea to execution.
        </p>
      </section>

      <section className="section-shell mt-16 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.form
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="rounded-[36px] border border-black/[0.08] bg-[rgba(255,255,255,0.3)] p-6 shadow-[0_24px_70px_rgba(6,27,58,0.08)] backdrop-blur-xl md:p-10"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {['Name', 'Email', 'Company', 'Timeline'].map((field) => (
              <label key={field} className="flex flex-col gap-2 text-sm text-black/76">
                <span className="font-groove text-[11px] uppercase tracking-[0.32em] text-black/64">{field}</span>
                <input className="rounded-[18px] border border-black/[0.06] bg-[rgba(255,255,255,0.45)] px-4 py-4 outline-none transition focus:border-orange" placeholder={`Your ${field.toLowerCase()}`} />
              </label>
            ))}
          </div>

          <label className="mt-4 flex flex-col gap-2 text-sm text-black/76">
            <span className="font-groove text-[11px] uppercase tracking-[0.32em] text-black/64">Project brief</span>
            <textarea rows={6} className="rounded-[22px] border border-black/[0.06] bg-[rgba(255,255,255,0.45)] px-4 py-4 outline-none transition focus:border-orange" placeholder="Tell us about the brand, scope, and the kind of experience you want to create." />
          </label>

          <button type="submit" className="mt-6 inline-flex items-center gap-3 rounded-full bg-navy px-7 py-4 font-groove text-xs font-semibold uppercase tracking-[0.3em] text-white">
            Send inquiry <span>↗</span>
          </button>
        </motion.form>

        <div className="grid gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="rounded-[36px] border border-black/[0.06] bg-[linear-gradient(180deg,#061B3A,#07111f)] p-6 text-white md:p-10"
          >
            <SectionHeading eyebrow="Studio" title="Glass, glow, and a calm premium feel." dark />
            <div className="mt-8 rounded-[28px] border border-[rgba(219,219,219,0.2)] bg-[rgba(219,219,219,0.12)] p-5">
              <p className="font-groove text-[11px] uppercase tracking-[0.34em] text-white/66">Map</p>
              <div className="mt-4 flex min-h-[220px] items-center justify-center rounded-[22px] border border-dashed border-[rgba(219,219,219,0.2)] bg-[radial-gradient(circle_at_50%_40%,rgba(255,159,10,0.18),transparent_28%),linear-gradient(180deg,rgba(219,219,219,0.12),rgba(219,219,219,0.04))] text-center">
                <div>
                  <FaMapLocationDot className="mx-auto text-4xl text-orange" />
                  <p className="mt-4 text-sm uppercase tracking-[0.28em] text-white/86">Google Map Embed</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              { icon: FaInstagram, label: 'Instagram' },
              { icon: FaLinkedinIn, label: 'LinkedIn' },
              { icon: FaBehance, label: 'Behance' }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={item.label}
                  href="#"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.04 }}
                  className="group rounded-[26px] border border-black/[0.06] bg-[rgba(255,255,255,0.45)] p-6 text-center shadow-sm"
                >
                  <Icon className="mx-auto text-2xl text-navy transition group-hover:-translate-y-1 group-hover:text-orange" />
                  <p className="mt-4 font-groove text-[11px] uppercase tracking-[0.32em] text-black/66">{item.label}</p>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-shell mt-20 pb-24">
        <SectionHeading eyebrow="Final note" title="We’ll reply with a clean next step." align="center" />
      </section>
    </div>
  );
}