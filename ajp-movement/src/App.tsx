import { useState, useRef } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ManifestoSection from './components/ManifestoSection';
import TrailerModal from './components/TrailerModal';
import { X, Terminal } from 'lucide-react';

export default function App() {
  // Modal toggle states
  const [trailerOpen, setTrailerOpen] = useState(false);
  const [joinOpen, setJoinOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);

  // Manifesto Section reference for smooth scroll
  const manifestoRef = useRef<HTMLDivElement>(null);

  const scrollToManifesto = () => {
    manifestoRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleJoinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      setIsRegistered(true);
      setTimeout(() => {
        setIsRegistered(false);
        setJoinOpen(false);
        setUsername('');
      }, 2500);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#020617] text-white flex flex-col justify-start">
      {/* Cinematic Film-Grain Texture Overlay (covers entire page) */}
      <div className="gritty-overlay"></div>

      {/* Sticky Glassmorphic Navbar */}
      <Navbar 
        onJoinClick={() => setJoinOpen(true)} 
        onManifestoClick={scrollToManifesto} 
      />

      {/* 2-Section Page Layout */}
      <main className="flex-1">
        {/* Section 1: Hero Banner */}
        <HeroSection 
          onJoinClick={() => setJoinOpen(true)} 
          onWatchClick={() => setTrailerOpen(true)} 
        />

        {/* Section 2: Manifesto Cards Grid */}
        <div ref={manifestoRef}>
          <ManifestoSection />
        </div>
      </main>

      {/* Cinematic Watch Trailer Modal overlay */}
      {trailerOpen && (
        <TrailerModal onClose={() => setTrailerOpen(false)} />
      )}

      {/* Resistance Join Card custom modal overlay */}
      {joinOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md px-4"
          onClick={() => setJoinOpen(false)}
        >
          <div 
            className="w-full max-w-md bg-brand-navy-card/90 border border-brand-orange/30 p-8 rounded-lg shadow-[0_0_50px_rgba(255,85,0,0.3)] relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              className="absolute top-4 right-4 text-slate-400 hover:text-brand-orange transition-colors cursor-pointer"
              onClick={() => setJoinOpen(false)}
            >
              <X size={20} />
            </button>

            {/* Header */}
            <h3 className="font-heading text-2xl font-black uppercase text-brand-orange flex items-center gap-3 mb-2">
              <Terminal size={22} className="animate-pulse" />
              Recruit Enrollment
            </h3>
            
            {!isRegistered ? (
              <>
                <p className="text-slate-300 text-sm font-medium leading-relaxed mb-6">
                  Enter your alias to join the AJP digital resistance alliance.
                </p>
                <form onSubmit={handleJoinSubmit} className="flex flex-col gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase font-heading tracking-widest text-slate-400">Alias/Rebel Name</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g. Saurabh Dev" 
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="bg-black/50 border border-white/10 hover:border-brand-orange/40 focus:border-brand-orange rounded p-3 text-white text-sm outline-none transition-all"
                      autoFocus
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="w-full py-3 bg-brand-orange hover:bg-brand-orange-hover text-white font-heading font-black text-xs uppercase tracking-wider rounded shadow-[0_0_15px_rgba(255,85,0,0.2)] hover:shadow-[0_0_25px_rgba(255,85,0,0.6)] transition-all cursor-pointer"
                  >
                    Initiate Connection ⚡
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-6 flex flex-col items-center gap-4">
                <span className="text-4xl">🫡</span>
                <h4 className="font-heading text-lg font-bold text-white uppercase">Alias Accepted</h4>
                <p className="text-slate-400 text-xs">
                  Rebel <span className="text-brand-orange font-bold font-heading">{username}</span> added to the movement logs. Standby for orders.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
