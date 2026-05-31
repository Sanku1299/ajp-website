"use client";

import { motion } from 'framer-motion';

export default function Marquee({ items }: { items: string[] }) {
  const loop = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-black/[0.06] bg-[rgba(255,255,255,0.38)] py-5 backdrop-blur-sm">
      <motion.div
        className="flex w-max items-center gap-8 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
      >
        {loop.map((item, index) => (
          <div key={`${item}-${index}`} className="flex items-center gap-8">
            <span className="font-groove text-xs uppercase tracking-[0.42em] text-navy/70 md:text-sm">{item}</span>
            <span className="h-2 w-2 rounded-full bg-orange" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}