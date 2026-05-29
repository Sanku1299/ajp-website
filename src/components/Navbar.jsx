import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShieldAlert } from 'lucide-react';
import logoMascot from '../assets/logo-mascot.png';

export default function Navbar({ onJoinClick, onManifestoClick }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollToHero = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileOpen(false);
  };

  const scrollToManifesto = () => {
    onManifestoClick();
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 left-0 w-full z-40 backdrop-blur-md bg-brand-navy-dark/70 border-b border-white/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div 
          onClick={scrollToHero}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="relative">
            <img 
              src={logoMascot} 
              alt="AJP Logo" 
              className="w-10 h-10 object-contain drop-shadow-[0_4px_10px_rgba(0,0,0,0.6)]"
            />
            <div className="absolute inset-0 rounded-full bg-brand-orange/5 animate-ping pointer-events-none"></div>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-heading font-black text-xl tracking-wider text-white group-hover:text-brand-orange transition-colors">AJP</span>
            <span className="text-[9px] font-bold tracking-widest text-brand-orange uppercase">Anti Janta Party</span>
          </div>
        </div>

        {/* Desktop Navigation Link Items */}
        <nav className="hidden md:flex items-center gap-8 font-heading text-sm font-semibold uppercase tracking-wider text-slate-300">
          <button 
            onClick={scrollToHero}
            className="hover:text-brand-orange transition-colors cursor-pointer"
          >
            Home
          </button>
          <button 
            onClick={scrollToManifesto}
            className="hover:text-brand-orange transition-colors cursor-pointer"
          >
            Manifesto
          </button>
          <a 
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              scrollToHero();
            }}
            className="hover:text-brand-orange transition-colors cursor-pointer"
          >
            The Movement
          </a>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={onJoinClick}
            className="px-6 py-2.5 bg-brand-orange hover:bg-brand-orange-hover text-white font-heading font-bold text-xs uppercase tracking-wider rounded border border-transparent shadow-[0_0_15px_rgba(255,85,0,0.4)] hover:shadow-[0_0_25px_rgba(255,85,0,0.8)] transition-all duration-300 cursor-pointer"
          >
            Join The Resistance ⚡
          </motion.button>
        </div>

        {/* Mobile menu Toggle Button */}
        <button 
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white hover:text-brand-orange transition-colors p-1"
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-brand-navy-dark/95 border-b border-white/10 backdrop-blur-xl flex flex-col p-6 gap-5 md:hidden z-30"
          >
            <button 
              onClick={scrollToHero}
              className="text-left font-heading text-lg font-bold uppercase tracking-wider text-slate-200 hover:text-brand-orange py-2"
            >
              Home
            </button>
            <button 
              onClick={scrollToManifesto}
              className="text-left font-heading text-lg font-bold uppercase tracking-wider text-slate-200 hover:text-brand-orange py-2"
            >
              Manifesto
            </button>
            <button 
              onClick={() => { scrollToHero(); }}
              className="text-left font-heading text-lg font-bold uppercase tracking-wider text-slate-200 hover:text-brand-orange py-2"
            >
              The Movement
            </button>
            
            <div className="h-px bg-white/10 my-1"></div>

            <button 
              onClick={() => {
                setMobileOpen(false);
                onJoinClick();
              }}
              className="w-full py-3 bg-brand-orange text-white font-heading font-black text-center uppercase tracking-widest rounded shadow-[0_0_15px_rgba(255,85,0,0.3)]"
            >
              Join The Resistance ⚡
            </button>

            <div className="flex items-center gap-3 bg-brand-orange/5 border border-brand-orange/20 rounded p-4 mt-2">
              <ShieldAlert className="text-brand-orange shrink-0" size={20} />
              <p className="text-xs text-slate-400 leading-snug">
                Warning: This is a satirical youth movement. Sarcasm active 24/7.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
