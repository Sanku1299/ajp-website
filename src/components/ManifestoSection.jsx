import React from 'react';
import { missions } from './data';
import { Button } from './Button';
import { MissionCard } from './MissionCard';

export function ManifestoSection() {
  return (
    <section id="manifesto" className="px-5 pt-3 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-3 lg:grid-cols-[.9fr_repeat(4,1fr)]">
        <article className="panel p-7">
          <p className="section-kicker">Our Manifesto</p>
          <h2 className="font-display text-5xl uppercase leading-[.94] text-bone">
            Sachai Ke Saath,
            <span className="block text-rust">Thoda Mazaak</span>
          </h2>
          <p className="mt-5 text-base font-medium leading-relaxed text-white/86">
            Serious problems. Satirical solutions. Because rona to sabko aata hai, hum hasta hua system change karenge.
          </p>
          <Button className="mt-7" variant="ghost">
            Explore Manifesto
          </Button>
        </article>
        {missions.map((mission) => (
          <MissionCard key={mission.title} mission={mission} />
        ))}
      </div>
    </section>
  );
}
