import Link from 'next/link';

const footerLinks = [
  { href: '/about', label: 'About' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/services', label: 'Services' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' }
];

export default function SiteFooter() {
  return (
    <footer className="section-shell border-t border-black/[0.06] bg-dark text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-12 md:px-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-xl">
          <p className="font-display text-4xl uppercase tracking-[0.22em] text-white md:text-6xl">BrandBoosters</p>
          <p className="mt-4 max-w-lg text-sm leading-7 text-white/84 md:text-base">
            A premium creative agency shaping brands, motion systems, and digital experiences that feel decisive, cinematic, and unmistakably modern.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full border border-[rgba(219,219,219,0.2)] bg-[rgba(219,219,219,0.12)] px-4 py-2 text-sm text-white/88 transition hover:border-orange/40 hover:bg-orange/10 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="border-t border-[rgba(219,219,219,0.2)] px-4 py-5 text-center text-xs uppercase tracking-[0.28em] text-white/76 md:px-6">
        BrandBoosters © 2026. Built to move brands forward.
      </div>
    </footer>
  );
}