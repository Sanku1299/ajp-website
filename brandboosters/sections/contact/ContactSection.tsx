"use client";

import { Button } from '../../components/ui/Button';
import { SectionShell } from '../../components/layout/SectionShell';

export function ContactSection() {
  return (
    <SectionShell className="py-20 md:py-28">
      <div className="grid gap-8 overflow-hidden rounded-[36px] bg-[linear-gradient(135deg,#061B3A,#0b1730)] px-6 py-10 text-white shadow-[0_40px_120px_rgba(6,27,58,0.22)] lg:grid-cols-[1fr_auto] lg:items-center lg:px-10 lg:py-14">
        <div className="max-w-3xl">
          <p className="font-groove text-[11px] uppercase tracking-[0.38em] text-white/82">Contact</p>
          <h2 className="mt-4 font-display text-[clamp(2.6rem,7vw,5.6rem)] uppercase leading-[0.92] tracking-[0.1em] text-white">
            Ready for the next premium launch.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/84 md:text-base">
            This section is set up to become a contact form, booking CTA, or Builder.io editable block without changing the overall layout system.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <a href="/contact" className="rounded-full bg-orange px-6 py-4 font-groove text-xs font-semibold uppercase tracking-[0.28em] text-dark">
            Contact Us
          </a>
          <Button tone="secondary" className="border-white/12 bg-white/10 text-white">
            View Services
          </Button>
        </div>
      </div>
    </SectionShell>
  );
}
