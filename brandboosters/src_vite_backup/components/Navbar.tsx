import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/services', label: 'Services' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' }
];

export default function Navbar() {
  const location = useLocation();

  return (
    <motion.header
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6"
    >
      <div className="glass-panel container-laptop mx-auto flex items-center justify-between rounded-[26px] px-3 py-2 md:px-5 md:py-2.5">
        <Link to="/" className="group flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-navy text-sm font-semibold text-white shadow-glow md:h-10 md:w-10 md:text-base">
            BB
          </div>
          <div>
            <p className="font-display text-lg leading-none tracking-[0.14em] text-navy md:text-[1.2rem]">BRANDBOOSTERS</p>
            <p className="font-groove text-[9px] uppercase tracking-[0.24em] text-black/80 md:text-[10px] md:tracking-[0.28em]">We Build Brands. Not Just Ads.</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full bg-[rgba(255,255,255,0.34)] p-1 shadow-sm md:flex">
          {navItems.map((item) => {
            const active = location.pathname === item.href;
            return (
              <Link
                key={item.href}
                to={item.href}
                className={`relative rounded-full px-3 py-1.5 text-[14px] font-medium transition lg:px-3.5 ${active ? 'bg-navy text-white' : 'text-black/82 hover:bg-black/5 hover:text-navy'}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          to="/contact"
          className="group inline-flex items-center gap-2 rounded-full bg-orange px-4 py-2 font-groove text-[10px] font-semibold uppercase tracking-[0.2em] text-dark transition hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(255,159,10,0.28)]"
        >
          <span>Book a Call</span>
          <span className="transition group-hover:translate-x-1">↗</span>
        </Link>
      </div>
    </motion.header>
  );
}