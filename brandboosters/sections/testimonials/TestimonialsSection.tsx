"use client";

import { SectionShell } from '../../components/layout/SectionShell';

const testimonials = [
  {
    quote: 'The system feels premium, but more importantly it feels organized and easy to evolve.',
    name: 'Studio Director'
  },
  {
    quote: 'Every section is modular, so we can scale the site without redesigning the whole structure.',
    name: 'Brand Lead'
  },
  {
    quote: 'The motion, spacing, and hierarchy give the agency site a confident editorial tone.',
    name: 'Marketing Partner'
  }
];

export function TestimonialsSection() {
  return (
    <SectionShell className="py-20 md:py-28">
      <div className="mb-10 max-w-3xl">
        <p className="font-groove text-[11px] uppercase tracking-[0.38em] text-black/72">Testimonials</p>
        <h2 className="mt-4 font-display text-[clamp(2.6rem,7vw,5.4rem)] uppercase leading-[0.92] tracking-[0.1em] text-navy">
          Trust signals presented with a clean editorial rhythm.
        </h2>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {testimonials.map((item) => (
          <blockquote key={item.name} className="rounded-[28px] border border-black/[0.06] bg-white/70 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.06)]">
            <p className="text-sm leading-7 text-black/82">{item.quote}</p>
            <footer className="mt-6 font-groove text-[11px] uppercase tracking-[0.3em] text-black/56">{item.name}</footer>
          </blockquote>
        ))}
      </div>
    </SectionShell>
  );
}
