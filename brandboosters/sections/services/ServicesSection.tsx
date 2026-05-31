"use client";

import { SectionShell } from '../../components/layout/SectionShell';

const services = ['Brand Strategy', 'Web Design', 'Motion Systems', 'Campaign Creative'];

export function ServicesSection() {
  return (
    <SectionShell className="py-20 md:py-28">
      <div className="grid gap-6 rounded-[36px] border border-black/[0.06] bg-white/60 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.08)] lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
        <div>
          <p className="font-groove text-[11px] uppercase tracking-[0.38em] text-black/72">Services</p>
          <h2 className="mt-4 font-display text-[clamp(2.6rem,7vw,5.4rem)] uppercase leading-[0.92] tracking-[0.1em] text-navy">
            A compact service stack with room to scale.
          </h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {services.map((service) => (
            <div key={service} className="rounded-[24px] border border-black/[0.06] bg-[linear-gradient(180deg,rgba(255,255,255,0.8),rgba(255,255,255,0.52))] p-5">
              <p className="font-display text-3xl uppercase tracking-[0.08em] text-on-light">{service}</p>
              <p className="mt-3 text-sm leading-7 text-black/76">Built as a modular block that can later connect to Builder.io or a CMS entry.</p>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
