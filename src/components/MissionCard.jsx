import React from 'react';

export function MissionCard({ mission }) {
  const Icon = mission.icon;
  const tone =
    mission.tone === 'orange'
      ? 'border-rust bg-rust text-coal'
      : mission.tone === 'blue'
        ? 'border-sky-700/70 bg-[#09243e] text-bone'
        : 'border-rust/50 bg-[#081727] text-bone';

  return (
    <article className={`mission-card ${tone}`}>
      <p className="text-center text-xs font-black uppercase tracking-wide opacity-90">{mission.eyebrow}</p>
      <h3 className="mt-5 min-h-[5.2rem] text-center font-display text-4xl uppercase leading-[.9]">{mission.title}</h3>
      <Icon className="mx-auto mt-6 h-16 w-16 opacity-90" strokeWidth={2.2} aria-hidden="true" />
      <p className="mt-8 text-center text-sm font-semibold leading-snug opacity-90">{mission.copy}</p>
    </article>
  );
}
