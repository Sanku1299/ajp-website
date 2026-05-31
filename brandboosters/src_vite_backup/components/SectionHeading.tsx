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
        <h2 className={`fluid-display max-w-3xl font-display uppercase leading-[0.92] tracking-[0.08em] md:leading-[0.9] ${dark ? 'text-primary text-shadow-soft' : 'text-on-light'}`}>
          {title}
        </h2>
        {description ? <p className={`max-w-xl text-sm leading-7 md:max-w-2xl md:text-base ${dark ? 'text-secondary' : 'text-muted'}`}>{description}</p> : null}
      </div>
      {action ? <div>{action}</div> : null}
    </div>
  );
}