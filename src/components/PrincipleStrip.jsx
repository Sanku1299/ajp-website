import React from 'react';
import { principles } from './data';

export function PrincipleStrip() {
  return (
    <section className="relative z-20 -mt-16 px-5 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-px border border-white/5 bg-white/5 p-px shadow-orange md:grid-cols-2 lg:grid-cols-4">
        {principles.map(({ icon: Icon, title, text }) => (
          <article className="flex items-center gap-4 bg-ink/95 px-7 py-5" key={title}>
            <Icon className="h-10 w-10 flex-none text-rust" strokeWidth={2.4} aria-hidden="true" />
            <div>
              <h2 className="font-display text-xl uppercase leading-none text-rust">{title}</h2>
              <p className="mt-1 text-sm font-medium text-white/90">{text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
