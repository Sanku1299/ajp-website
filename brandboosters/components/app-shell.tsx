"use client";

import { AnimatePresence, motion } from 'framer-motion';
import Lenis from 'lenis';
import { usePathname } from 'next/navigation';
import { type ReactNode, useEffect, useMemo, useState } from 'react';
import SiteFooter from './site-footer';
import SiteHeader from './site-header';

export default function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      lerp: 0.07,
      smoothWheel: true,
      wheelMultiplier: 1.05
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    const move = (event: PointerEvent) => {
      setPointer({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('pointermove', move);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('pointermove', move);
      lenis.destroy();
    };
  }, []);

  const shellMotion = useMemo(
    () => ({
      initial: { opacity: 0, y: 14 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -14 },
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
    }),
    []
  );

  return (
    <>
      <div className="cursor-glow" style={{ left: pointer.x, top: pointer.y }} />
      <SiteHeader />
      <AnimatePresence mode="wait" initial={false}>
        <motion.main key={pathname} {...shellMotion} className="section-shell relative">
          {children}
        </motion.main>
      </AnimatePresence>
      <SiteFooter />
    </>
  );
}