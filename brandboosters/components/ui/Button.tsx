"use client";

import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '../../lib/utils/cn';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  tone?: 'primary' | 'secondary' | 'ghost';
};

const toneStyles: Record<NonNullable<ButtonProps['tone']>, string> = {
  primary: 'bg-navy text-white shadow-[0_18px_50px_rgba(6,27,58,0.18)]',
  secondary: 'border border-black/[0.08] bg-white/75 text-navy',
  ghost: 'bg-transparent text-navy'
};

export function Button({ children, className, tone = 'primary', type = 'button', ...props }: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-groove text-xs font-semibold uppercase tracking-[0.28em] transition duration-300 hover:-translate-y-0.5',
        toneStyles[tone],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
