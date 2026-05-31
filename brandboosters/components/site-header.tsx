"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/services', label: 'Services' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' }
];

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <motion.header
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6"
    >
      <div className="glass-panel mx-auto flex max-w-7xl items-center justify-between rounded-[28px] px-4 py-3 md:px-6">
        <Link href="/" className="group flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-navy text-lg font-semibold text-white shadow-glow">
            BB
          </div>
          <div>
            <p className="font-display text-2xl leading-none tracking-[0.18em] text-navy">BRANDBOOSTERS</p>
            <p className="font-groove text-[11px] uppercase tracking-[0.35em] text-black/80">We Build Brands. Not Just Ads.</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full bg-[rgba(255,255,255,0.34)] p-1 shadow-sm md:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition ${active ? 'bg-navy text-white' : 'text-black/82 hover:bg-black/5 hover:text-navy'}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className="group inline-flex items-center gap-2 rounded-full bg-orange px-5 py-3 font-groove text-xs font-semibold uppercase tracking-[0.24em] text-dark transition hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(255,159,10,0.28)]"
        >
          <span>Book a Call</span>
          <span className="transition group-hover:translate-x-1">↗</span>
        </Link>
      </div>
    </motion.header>
  );
}