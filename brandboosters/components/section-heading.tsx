import { ReactNode } from 'react';

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  dark = false,
  action
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  dark?: boolean;
  action?: ReactNode;
}) {
  return (
    <div className={`flex flex-col gap-4 ${align === 'center' ? 'items-center text-center' : ''}`}>
      {eyebrow ? <p className={`font-groove text-[11px] uppercase tracking-[0.38em] ${dark ? 'text-secondary' : 'text-black/74'}`}>{eyebrow}</p> : null}
      <div className={`flex w-full flex-col gap-4 ${align === 'center' ? 'items-center' : ''}`}>
        <h2 className={`max-w-4xl font-display text-5xl uppercase leading-[0.88] tracking-[0.12em] md:text-7xl ${dark ? 'text-primary text-shadow-soft' : 'text-on-light'}`}>
          {title}
        </h2>
        {description ? <p className={`max-w-2xl text-sm leading-7 md:text-base ${dark ? 'text-secondary' : 'text-muted'}`}>{description}</p> : null}
      </div>
      {action ? <div>{action}</div> : null}
    </div>
  );
}