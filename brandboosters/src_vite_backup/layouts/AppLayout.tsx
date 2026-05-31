import { AnimatePresence, motion } from 'framer-motion';
import { type ReactNode, useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { useLenisScroll } from '@/hooks/useLenisScroll';

export default function AppLayout({ children }: { children: ReactNode }) {
  const location = useLocation();
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  useLenisScroll();

  useEffect(() => {
    const move = (event: PointerEvent) => setPointer({ x: event.clientX, y: event.clientY });
    window.addEventListener('pointermove', move);
    return () => window.removeEventListener('pointermove', move);
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
      <Navbar />
      <AnimatePresence mode="wait" initial={false}>
        <motion.main key={location.pathname} {...shellMotion} className="section-shell relative">
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </>
  );
}