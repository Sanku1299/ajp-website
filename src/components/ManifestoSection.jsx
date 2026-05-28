import { motion } from 'framer-motion';
import { Brain, Wifi, Ban } from 'lucide-react';

export default function ManifestoSection() {
  const cards = [
    {
      id: 1,
      mission: "MISSION 01",
      title: "EMOTIONAL SUPPORT LEAVE",
      description: "Mental health > Toxic work culture",
      icon: Brain,
      theme: "dark",
      glowColor: "rgba(255, 85, 0, 0.15)",
    },
    {
      id: 2,
      mission: "MISSION 02",
      title: "FREE WIFI FOR ALL",
      description: "Internet is not luxury, it's a right.",
      icon: Wifi,
      theme: "dark",
      glowColor: "rgba(255, 85, 0, 0.15)",
    },
    {
      id: 3,
      mission: "MISSION 03",
      title: "ANTI OVERTHINKING PROGRAM",
      description: "Overthinking se azaadi, productivity ki guarantee.",
      icon: Brain,
      theme: "orange",
      glowColor: "rgba(0, 0, 0, 0.15)",
    },
    {
      id: 4,
      mission: "MISSION 04",
      title: "NO MORE FAKE PROMISES",
      description: "Jumle nahi, results chahiye!",
      icon: Ban,
      theme: "dark",
      glowColor: "rgba(255, 85, 0, 0.15)",
    },
  ];

  return (
    <section className="relative w-full bg-[#020617] overflow-hidden border-t border-b border-white/10">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-orange/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <div className="w-full mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-white/10 min-h-[650px]">
          
          {/* Column 1: Manifesto Intro */}
          <div className="p-8 md:p-10 flex flex-col justify-between bg-brand-navy-main/20">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-brand-orange">
                OUR MANIFESTO
              </span>
              <h2 className="mt-6 font-heading text-4xl lg:text-5xl font-black uppercase tracking-tighter leading-[0.95] text-white">
                SACHAI <br />
                KE <br />
                SAATH, <br />
                <span className="text-brand-orange">THODA <br />
                MAZAAK</span>
              </h2>
            </div>
            
            <div className="mt-8 mb-8">
              <p className="text-sm font-medium leading-relaxed text-slate-300">
                Serious problems. Satirical solutions. Because rona to sabko aata hai, hum hasta hua system change karenge.
              </p>
            </div>

            <div>
              <a 
                href="#explore"
                onClick={(e) => e.preventDefault()}
                className="inline-block w-full py-3 border border-brand-orange/45 text-brand-orange font-heading font-black text-xs text-center uppercase tracking-widest hover:bg-brand-orange hover:text-white transition-all duration-300 cursor-pointer"
              >
                EXPLORE MANIFESTO
              </a>
            </div>
          </div>

          {/* Columns 2-5: Mission Cards */}
          {cards.map((card) => {
            const Icon = card.icon;
            const isOrange = card.theme === 'orange';

            return (
              <motion.div
                key={card.id}
                whileHover={{ 
                  backgroundColor: isOrange ? '#FF5500' : 'rgba(255, 85, 0, 0.03)',
                  boxShadow: `inset 0 0 20px ${card.glowColor}`,
                }}
                transition={{ duration: 0.2 }}
                className={`p-8 md:p-10 flex flex-col justify-between items-center transition-all duration-300 ${
                  isOrange 
                    ? 'bg-brand-orange text-[#020617]' 
                    : 'bg-transparent text-white'
                }`}
              >
                {/* Top Label */}
                <span className={`text-[10px] font-black uppercase tracking-widest ${
                  isOrange ? 'text-black/60' : 'text-slate-400'
                }`}>
                  {card.mission}
                </span>

                {/* Upper Middle: Title */}
                <h3 className={`font-heading text-2xl lg:text-3xl font-black uppercase tracking-tight text-center leading-[1.05] max-w-[200px] mt-6 ${
                  isOrange ? 'text-[#020617]' : 'text-white'
                }`}>
                  {card.title}
                </h3>

                {/* Center: Icon */}
                <div className="my-10 flex items-center justify-center">
                  <Icon 
                    size={48} 
                    strokeWidth={1.5}
                    className={isOrange ? 'text-[#020617]' : 'text-white'} 
                  />
                </div>

                {/* Bottom Description */}
                <p className={`text-xs lg:text-sm font-medium text-center leading-relaxed max-w-[180px] mb-4 ${
                  isOrange ? 'text-[#020617]/80' : 'text-slate-400'
                }`}>
                  {card.description}
                </p>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
