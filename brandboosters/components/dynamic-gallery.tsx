"use client";

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaXmark } from 'react-icons/fa6';
import DynamicImage from '@/components/dynamic-image';

type DynamicGalleryProps = {
  title: string;
  images: readonly string[];
};

export default function DynamicGallery({ title, images }: DynamicGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const activeImage = useMemo(() => {
    if (activeIndex === null) {
      return null;
    }

    return images[activeIndex] ?? null;
  }, [activeIndex, images]);

  useEffect(() => {
    if (activeIndex === null) {
      return undefined;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveIndex(null);
      }

      if (event.key === 'ArrowRight') {
        setActiveIndex((current) => (current === null ? 0 : (current + 1) % images.length));
      }

      if (event.key === 'ArrowLeft') {
        setActiveIndex((current) => (current === null ? 0 : (current - 1 + images.length) % images.length));
      }
    };

    window.addEventListener('keydown', onKeyDown);

    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeIndex, images.length]);

  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {images.map((image, index) => (
          <motion.button
            key={`${title}-${index}`}
            type="button"
            onClick={() => setActiveIndex(index)}
            whileHover={{ y: -6, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="group block w-full overflow-hidden rounded-[28px] border border-black/[0.06] bg-[rgba(255,255,255,0.42)] shadow-sm aspect-[4/5]"
          >
            <DynamicImage
              src={image}
              alt={`${title} gallery image ${index + 1}`}
              className="h-full w-full"
              imageClassName="transition-transform duration-700 group-hover:scale-105"
            />
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {activeImage ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/88 px-4 py-6 backdrop-blur-md"
            onClick={() => setActiveIndex(null)}
          >
            <motion.div
              initial={{ scale: 0.94, y: 16 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.94, y: 16 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="relative mx-auto flex h-[84vh] w-full max-w-6xl items-center justify-center overflow-hidden rounded-[32px] border border-[rgba(219,219,219,0.2)] bg-[rgba(219,219,219,0.12)] shadow-[0_30px_120px_rgba(0,0,0,0.45)]"
              onClick={(event) => event.stopPropagation()}
            >
              <DynamicImage
                src={activeImage}
                alt={`${title} fullscreen preview`}
                className="h-full w-full"
                imageClassName="object-contain"
                sizes="100vw"
              />

              <button
                type="button"
                onClick={() => setActiveIndex(null)}
                className="absolute right-4 top-4 inline-flex h-12 w-12 items-center justify-center rounded-full border border-[rgba(219,219,219,0.24)] bg-black/45 text-white transition hover:bg-black/60"
              >
                <FaXmark />
              </button>

              <button
                type="button"
                onClick={() => setActiveIndex((current) => (current === null ? 0 : (current - 1 + images.length) % images.length))}
                className="absolute left-4 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[rgba(219,219,219,0.24)] bg-black/35 text-white transition hover:bg-black/60"
              >
                <FaArrowLeft />
              </button>

              <button
                type="button"
                onClick={() => setActiveIndex((current) => (current === null ? 0 : (current + 1) % images.length))}
                className="absolute right-4 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[rgba(219,219,219,0.24)] bg-black/35 text-white transition hover:bg-black/60"
              >
                <FaArrowRight />
              </button>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}