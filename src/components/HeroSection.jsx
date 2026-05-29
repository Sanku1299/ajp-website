import { motion } from 'framer-motion';
import { Play, Shield } from 'lucide-react';
import heroRally from '../assets/hero-rally.png';

export default function HeroSection({ onJoinClick, onWatchClick }) {
  // Animation presets
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 100, damping: 15 } 
    }
  };

  return (
    <section className="relative w-full min-h-[calc(100vh-80px)] flex items-center bg-[#020617] overflow-hidden py-12 md:py-20">
      
      {/* 1. Dark Vignette Overlays & Atmospheric Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_30%,_rgba(11,20,38,0.6)_0%,_rgba(2,6,23,1)_80%)] z-0"></div>
      <div className="cinematic-vignette"></div>
      <div className="section-vignette-bottom"></div>

      {/* Grid overlay for cyberpunk digital texture */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,_transparent_1px),_linear-gradient(90deg,_rgba(255,255,255,0.015)_1px,_transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0"></div>

      {/* Ambient Orange Smoke Flare in the top-left and center */}
      <div className="absolute top-[20%] left-[-10%] w-[300px] h-[300px] bg-brand-orange/10 rounded-full blur-[80px] pointer-events-none"></div>
      <div className="absolute bottom-[10%] right-[30%] w-[400px] h-[400px] bg-brand-orange/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        
        {/* 2. Left Column: Cinematic Statement Copy & CTAs */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-start text-left relative"
        >
          {/* Movement Badge */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center gap-2 px-3 py-1 bg-brand-orange/10 border border-brand-orange/30 rounded text-brand-orange font-heading text-xs font-black uppercase tracking-widest mb-6"
          >
            <Shield size={14} className="animate-pulse" />
            REBEL YOUTH ALLIANCE
          </motion.div>

          {/* Large Left-Aligned Heading with High Contrast */}
          <motion.h1 
            variants={itemVariants}
            className="font-heading text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] text-white select-none"
          >
            NOT AGAINST <br />
            <span className="text-outline-white">THE PEOPLE.</span> <br />
            <span className="bg-gradient-to-r from-brand-orange via-orange-400 to-yellow-500 bg-clip-text text-fill-transparent drop-shadow-[0_0_35px_rgba(255,85,0,0.35)]">
              AGAINST THE <br className="hidden md:inline" /> PROBLEMS.
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p 
            variants={itemVariants}
            className="mt-6 text-base md:text-xl text-slate-300 max-w-xl font-medium leading-relaxed"
          >
            A satirical youth movement using memes, cinematography & raw digital activism to dismantle local issues, toxic workspace culture, and empty political jumlas.
          </motion.p>

          {/* Two CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="mt-8 flex flex-wrap gap-4 w-full sm:w-auto"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 85, 0, 0.9)" }}
              whileTap={{ scale: 0.97 }}
              onClick={onJoinClick}
              className="px-8 py-4 bg-brand-orange text-white font-heading font-black text-sm uppercase tracking-wider rounded border-2 border-transparent shadow-[0_0_20px_rgba(255,85,0,0.5)] cursor-pointer transition-all duration-200 w-full sm:w-auto"
            >
              JOIN THE RESISTANCE 🐜
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, borderColor: "#FFFFFF", backgroundColor: "rgba(255,255,255,0.05)" }}
              whileTap={{ scale: 0.97 }}
              onClick={onWatchClick}
              className="px-8 py-4 border-2 border-white/30 text-white font-heading font-black text-sm uppercase tracking-wider rounded flex items-center justify-center gap-3 cursor-pointer transition-all duration-200 w-full sm:w-auto"
            >
              WATCH PROTEST <Play size={16} fill="currentColor" />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* 3. Right Column: Mascot Backlight & Protest Crowds */}
        <div className="lg:col-span-5 flex justify-center items-center relative h-[380px] md:h-[500px]">
          
          {/* Strong Orange Backlight Behind Mascot */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mascot-backlight"></div>

          {/* Protest Silhouette / Smoke Backdrop circles */}
          <div className="absolute w-[280px] md:w-[380px] h-[280px] md:h-[380px] rounded-full border border-brand-orange/10 z-0"></div>
          <div className="absolute w-[360px] md:w-[460px] h-[360px] md:h-[460px] rounded-full border border-brand-orange/5 z-0"></div>

          {/* Mascot Image (Leader Ant standing at Podium) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.85, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 70, damping: 20, delay: 0.4 }}
            className="relative z-10 w-full max-w-[320px] md:max-w-[420px] select-none pointer-events-none"
          >
            <img 
              src={heroRally} 
              alt="Leader Ant Mascot AJP" 
              className="w-full h-auto object-contain filter drop-shadow-[0_0_40px_rgba(255,85,0,0.3)] animate-float-slow"
            />
          </motion.div>

          {/* Interactive Floating Protest Cards representing the angry crowd */}
          {/* Card 1: Left side */}
          <motion.div
            initial={{ opacity: 0, x: -30, rotate: -15 }}
            animate={{ opacity: 1, x: 0, rotate: -8 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="absolute top-[35%] left-[-4%] md:left-[-12%] bg-black border-2 border-brand-orange text-white px-3 md:px-4 py-2 font-heading font-black text-[10px] md:text-xs tracking-wide uppercase shadow-[5px_5px_0_rgba(0,0,0,0.8)] z-20 flex flex-col items-center"
          >
            <span>DEGREE HAI</span>
            <span className="text-brand-orange font-black">JOB KAHAN HAI?</span>
            {/* Wooden Stick indicator */}
            <div className="w-[3px] h-4 bg-brand-orange/50 mt-2"></div>
          </motion.div>

          {/* Card 2: Right side Top */}
          <motion.div
            initial={{ opacity: 0, x: 30, rotate: 12 }}
            animate={{ opacity: 1, x: 0, rotate: 6 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="absolute top-[18%] right-[-4%] md:right-[-10%] bg-black border border-white text-white px-3 md:px-4 py-2 font-heading font-bold text-[9px] md:text-[10px] tracking-wide uppercase shadow-[4px_4px_0_rgba(0,0,0,0.8)] z-20 flex flex-col items-center"
          >
            <span>KAAM DO</span>
            <span className="text-slate-400">NAAM NAHI!</span>
            <div className="w-[2px] h-3 bg-white/40 mt-1.5"></div>
          </motion.div>

          {/* Card 3: Right side Bottom */}
          <motion.div
            initial={{ opacity: 0, y: 30, rotate: -5 }}
            animate={{ opacity: 1, y: 0, rotate: -2 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            className="absolute bottom-[18%] right-[0%] md:right-[-4%] bg-black border-2 border-brand-orange text-white px-3 md:px-4 py-2 font-heading font-black text-[9px] md:text-[10px] tracking-wide uppercase shadow-[4px_4px_0_rgba(0,0,0,0.8)] z-20 flex flex-col items-center"
          >
            <span className="text-brand-orange">JUMLE LOAD</span>
            <span>NAHI HOTE BRO!</span>
            <div className="w-[3px] h-3.5 bg-brand-orange/50 mt-1.5"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
