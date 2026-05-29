import React from 'react';
import { Flag } from 'lucide-react';
import logoMascot from '../assets/logo-mascot.png';
import { Button } from './Button';
import { navItems } from './data';

export function Header() {
  return (
    <header className="sticky inset-x-0 top-0 z-30 bg-[#06111c]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
        <a className="group flex items-center gap-3" href="#home" aria-label="AJP home">
          <img className="h-16 w-14 object-contain drop-shadow-[0_8px_20px_rgba(0,0,0,.6)]" src={logoMascot} alt="" />
          <div className="leading-none">
            <div className="font-display text-5xl uppercase text-rust drop-shadow">AJP</div>
            <div className="-mt-1 text-sm font-black uppercase text-white">Anti Janta Party</div>
          </div>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a
              className={`nav-link ${item === 'Home' ? 'text-rust after:scale-x-100' : 'text-white/90'}`}
              href={`#${item.toLowerCase().replaceAll(' ', '-')}`}
              key={item}
            >
              {item}
            </a>
          ))}
        </nav>

        <Button
          className="hidden sm:inline-flex"
          icon={Flag}
          onClick={() => {
            const target = document.getElementById('join-us');
            if (target) {
              target.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          Join The Movement
        </Button>
      </div>
    </header>
  );
}
