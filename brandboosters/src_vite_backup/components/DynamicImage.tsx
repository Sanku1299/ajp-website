import { useMemo, useState } from 'react';

const fallbackDataUrl =
  'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1600"%3E%3Cdefs%3E%3ClinearGradient id="g" x1="0%25" y1="0%25" x2="100%25" y2="100%25"%3E%3Cstop offset="0%25" stop-color="%23061B3A"/%3E%3Cstop offset="100%25" stop-color="%23ff9f0a"/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width="1200" height="1600" fill="url(%23g)"/%3E%3Ccircle cx="300" cy="380" r="220" fill="rgba(255,255,255,0.12)"/%3E%3Ccircle cx="900" cy="1180" r="320" fill="rgba(255,255,255,0.10)"/%3E%3C/svg%3E';

const allowedHosts = new Set([
  'i.pinimg.com',
  'images.unsplash.com',
  'res.cloudinary.com',
  'ik.imagekit.io',
  'images.ctfassets.net',
  'images.pexels.com',
  'cdn.shopify.com'
]);

type DynamicImageProps = {
  src?: string | null;
  alt: string;
  className?: string;
  imageClassName?: string;
  fallbackSrc?: string;
  priority?: boolean;
  sizes?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  quality?: number;
  loading?: 'lazy' | 'eager';
};

function isOptimizableSource(src: string) {
  if (!src) {
    return false;
  }

  if (src.startsWith('/')) {
    return true;
  }

  try {
    return allowedHosts.has(new URL(src).hostname);
  } catch {
    return false;
  }
}

export default function DynamicImage({
  src,
  alt,
  className = '',
  imageClassName = '',
  fallbackSrc,
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw',
  fill = true,
  width,
  height,
  quality = 90,
  loading
}: DynamicImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const resolvedSrc = useMemo(() => {
    if (hasError) {
      return fallbackSrc ?? fallbackDataUrl;
    }

    return src || fallbackSrc || fallbackDataUrl;
  }, [fallbackSrc, hasError, src]);

  const useOptimized = isOptimizableSource(resolvedSrc);
  const imageStateClasses = loaded ? 'opacity-100 blur-0 scale-100' : 'opacity-0 blur-[10px] scale-[1.03]';

  return (
    <div className={`group relative overflow-hidden bg-[linear-gradient(135deg,rgba(6,27,58,0.12),rgba(255,159,10,0.12))] ${className}`}>
      <div className={`pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.22),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0))] transition-opacity duration-700 ${loaded ? 'opacity-0' : 'opacity-100'}`} />

      {fill ? (
        <img
          src={resolvedSrc}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          loading={loading ?? (priority ? 'eager' : 'lazy')}
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => setHasError(true)}
          className={`absolute inset-0 h-full w-full object-cover object-center transition duration-700 ease-out group-hover:scale-[1.04] ${imageStateClasses} ${imageClassName}`}
        />
      ) : useOptimized ? (
        <img
          src={resolvedSrc}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          loading={loading ?? (priority ? 'eager' : 'lazy')}
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => setHasError(true)}
          className={`h-full w-full object-cover object-center transition duration-700 ease-out group-hover:scale-[1.04] ${imageStateClasses} ${imageClassName}`}
        />
      ) : (
        <img
          src={resolvedSrc}
          alt={alt}
          loading={loading ?? (priority ? 'eager' : 'lazy')}
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => setHasError(true)}
          className={`h-full w-full object-cover object-center transition duration-700 ease-out group-hover:scale-[1.04] ${imageStateClasses} ${imageClassName}`}
        />
      )}
    </div>
  );
}