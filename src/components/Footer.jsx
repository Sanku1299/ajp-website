import React from 'react';
import { Flag, Instagram, Twitter, Youtube, MessageCircle, Mail, Radio } from 'lucide-react';
import { Button } from './Button';

export function Footer() {
  return (
    <footer id="join-us" className="border-t border-rust/35 bg-[#050c14] px-5 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-8 py-8 md:grid-cols-[1fr_1fr_.8fr] md:items-center">
        <div>
          <h2 className="font-display text-5xl uppercase leading-[.92] text-bone">
            Tu Hai Na,
            <span className="block text-rust">Toh System Hai</span>
          </h2>
          <p className="mt-3 text-base font-medium text-white/84">Join AJP. Because silence is also a problem.</p>
          <Button className="mt-4" icon={Flag}>
            Join The Movement
          </Button>
        </div>

        <form className="border-l border-white/15 pl-0 md:pl-10">
          <label className="font-display text-2xl uppercase text-bone" htmlFor="email">
            Stay Updated. Stay Rebellious.
          </label>
          <p className="mt-1 text-sm text-smoke">Get memes, movement updates & mission alerts.</p>
          <div className="mt-4 flex max-w-lg gap-2">
            <div className="relative flex-1">
              <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/45" />
              <input
                className="h-11 w-full border border-white/25 bg-coal/70 pl-10 pr-4 text-sm text-white outline-none transition placeholder:text-white/40 focus:border-rust"
                id="email"
                name="email"
                placeholder="Enter your email"
                type="email"
              />
            </div>
            <Button className="px-4">Subscribe</Button>
          </div>
        </form>

        <div className="relative min-h-28 overflow-hidden md:text-right">
          <p className="font-display text-xl uppercase text-rust">Follow Us</p>
          <div className="mt-4 flex gap-4 md:justify-end">
            {[Instagram, Twitter, Youtube, MessageCircle].map((Icon, index) => (
              <a
                className="grid h-9 w-9 place-items-center border border-white/15 bg-white/5 text-white transition hover:border-rust hover:text-rust"
                href="#join-us"
                key={index}
                aria-label="Social profile"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </a>
            ))}
          </div>
          <Radio className="absolute -bottom-16 right-0 h-44 w-44 text-white/[.04]" strokeWidth={1.2} />
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col gap-2 border-t border-white/10 py-3 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Anti Janta Party (AJP). All Rights Reserved.</p>
        <p>Not Against The People. Against The Problems.</p>
        <p>Made with memes & madness.</p>
      </div>
    </footer>
  );
}
