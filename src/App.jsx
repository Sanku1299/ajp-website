import React from 'react';
import {
  Ban,
  Brain,
  ChevronLeft,
  ChevronRight,
  CircleSlash,
  Flag,
  HandMetal,
  Instagram,
  Mail,
  Megaphone,
  MessageCircle,
  Play,
  Radio,
  Skull,
  Twitter,
  Users,
  Wifi,
  Youtube,
} from 'lucide-react';
import antRally from './assets/ant-rally.png';
import heroRally from './assets/hero-rally.png';
import logoMascot from './assets/logo-mascot.png';
import mascotClose from './assets/mascot-close.png';
import memeCat from './assets/meme-cat.png';
import memeJumle from './assets/meme-jumle.png';
import memeResume from './assets/meme-resume.png';
import memeWork from './assets/meme-work.png';

const navItems = ['Home', 'About', 'Manifesto', 'Missions', 'Memes', 'Merch', 'Join Us'];

const principles = [
  {
    icon: Users,
    title: 'With The People',
    text: 'Hum aapke saath hain.',
  },
  {
    icon: HandMetal,
    title: 'Against Corruption',
    text: 'Na khayenge, na khane denge.',
  },
  {
    icon: CircleSlash,
    title: 'Against Fake Promises',
    text: 'Ab bas. Bohot ho gaya.',
  },
  {
    icon: Skull,
    title: 'Against Toxic Politics',
    text: 'Waqt badlega, system bhi.',
  },
];

const missions = [
  {
    eyebrow: 'Mission 01',
    title: 'Emotional Support Leave',
    copy: 'Mental health > Toxic work culture',
    icon: Brain,
    tone: 'dark',
  },
  {
    eyebrow: 'Mission 02',
    title: 'Free Wifi For All',
    copy: "Internet is not luxury, it's a right.",
    icon: Wifi,
    tone: 'blue',
  },
  {
    eyebrow: 'Mission 03',
    title: 'Anti Overthinking Program',
    copy: 'Overthinking se azaadi, productivity ki guarantee.',
    icon: Brain,
    tone: 'orange',
  },
  {
    eyebrow: 'Mission 04',
    title: 'No More Fake Promises',
    copy: 'Jumle nahi, results chahiye!',
    icon: Ban,
    tone: 'dark',
  },
];

const memes = [
  {
    image: memeCat,
    alt: 'Meme card about needing experience for a job',
  },
  {
    image: memeResume,
    alt: 'Meme card about applying with the same resume',
  },
  {
    image: memeWork,
    alt: 'Meme card about working twenty four seven',
  },
  {
    image: memeJumle,
    alt: 'Meme card about monthly EMI',
  },
];

function Button({ children, variant = 'solid', className = '', icon: Icon }) {
  const base =
    'inline-flex h-11 items-center justify-center gap-2 border px-5 text-sm font-black uppercase tracking-wide transition duration-200 focus:outline-none focus:ring-2 focus:ring-rust focus:ring-offset-2 focus:ring-offset-coal';
  const styles =
    variant === 'solid'
      ? 'border-rust bg-rust text-white hover:bg-ember'
      : 'border-white/70 bg-white/5 text-white hover:border-rust hover:text-rust';

  return (
    <button className={`${base} ${styles} ${className}`} type="button">
      {children}
      {Icon && <Icon aria-hidden="true" className="h-4 w-4" strokeWidth={2.4} />}
    </button>
  );
}

function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
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

        <Button className="hidden sm:inline-flex" icon={Flag}>
          Join The Movement
        </Button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative isolate min-h-[720px] overflow-hidden bg-coal pt-28">
      <div
        className="absolute inset-y-0 right-0 z-0 w-full bg-cover bg-center opacity-90 md:w-[70%] md:bg-right-top"
        style={{ backgroundImage: `url(${heroRally})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_67%_28%,rgba(241,90,8,.25),transparent_18rem),linear-gradient(90deg,#06111c_0%,rgba(6,17,28,.96)_29%,rgba(6,17,28,.54)_62%,rgba(6,17,28,.86)_100%)]" />
      <div className="noise-overlay absolute inset-0 z-0 opacity-45" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-8 px-5 pb-8 pt-16 sm:px-8 lg:grid-cols-[minmax(0,540px)_1fr] lg:px-10 lg:pt-24">
        <div className="max-w-xl">
          <h1 className="stacked-title font-display text-[4.6rem] uppercase leading-[.88] text-bone sm:text-[5.7rem] lg:text-[6.4rem]">
            Not Against
            <span>The People.</span>
            <strong>Against The Problems.</strong>
          </h1>
          <p className="mt-6 max-w-md text-lg font-semibold leading-snug text-white/92 sm:text-xl">
            A satirical youth movement using memes, movies & madness to fight real issues.
          </p>
          <div className="mt-7 flex flex-wrap gap-4">
            <Button icon={Flag}>Join The Movement</Button>
            <Button variant="ghost" icon={Play}>
              Watch Trailer
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function PrincipleStrip() {
  return (
    <section className="relative z-20 -mt-16 px-5 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-px border border-white/5 bg-white/5 p-px shadow-orange md:grid-cols-2 lg:grid-cols-4">
        {principles.map(({ icon: Icon, title, text }) => (
          <article className="flex items-center gap-4 bg-ink/95 px-7 py-5" key={title}>
            <Icon className="h-10 w-10 flex-none text-rust" strokeWidth={2.4} aria-hidden="true" />
            <div>
              <h2 className="font-display text-xl uppercase leading-none text-rust">{title}</h2>
              <p className="mt-1 text-sm font-medium text-white/90">{text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="px-5 pt-3 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-3 lg:grid-cols-[1.25fr_.75fr]">
        <article className="panel relative min-h-[360px] overflow-hidden p-7 sm:p-8">
          <img
            className="absolute bottom-0 right-0 h-full w-[58%] object-cover object-center opacity-90 max-md:opacity-35"
            src={mascotClose}
            alt="AJP ant mascot wearing sunglasses and a hoodie"
          />
          <div className="relative z-10 max-w-md">
            <p className="section-kicker">Who We Are?</p>
            <h2 className="font-display text-5xl uppercase leading-[.95] text-bone sm:text-6xl">
              We Are The
              <span className="block text-rust">Anti Janta Party</span>
            </h2>
            <p className="mt-5 text-base font-medium leading-relaxed text-white/88">
              AJP is a modern, internet-powered youth movement. Funny outside. Real message inside.
            </p>
            <p className="mt-4 text-base font-medium leading-relaxed text-white/82">
              We use satire, memes, cinematic storytelling & digital culture to highlight public frustration, unemployment
              & toxic politics.
            </p>
            <Button className="mt-6" variant="ghost">
              Read Our Story
            </Button>
          </div>
        </article>

        <article className="panel relative min-h-[360px] overflow-hidden p-7 sm:p-8">
          <img className="absolute inset-0 h-full w-full object-cover opacity-80" src={antRally} alt="" />
          <div className="absolute inset-0 bg-gradient-to-r from-coal/92 via-coal/58 to-transparent" />
          <div className="relative max-w-xs">
            <p className="section-kicker">Our Mascot</p>
            <h2 className="font-display text-6xl uppercase text-bone">The Ant</h2>
            <p className="mt-6 text-base font-semibold leading-relaxed text-white/88">
              Small but powerful.
              <br />
              We work together.
              <br />
              We never stop.
              <br />
              We are underestimated,
              <br />
              but unstoppable together.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}

function MissionCard({ mission }) {
  const Icon = mission.icon;
  const tone =
    mission.tone === 'orange'
      ? 'border-rust bg-rust text-coal'
      : mission.tone === 'blue'
        ? 'border-sky-700/70 bg-[#09243e] text-bone'
        : 'border-rust/50 bg-[#081727] text-bone';

  return (
    <article className={`mission-card ${tone}`}>
      <p className="text-center text-xs font-black uppercase tracking-wide opacity-90">{mission.eyebrow}</p>
      <h3 className="mt-5 min-h-[5.2rem] text-center font-display text-4xl uppercase leading-[.9]">{mission.title}</h3>
      <Icon className="mx-auto mt-6 h-16 w-16 opacity-90" strokeWidth={2.2} aria-hidden="true" />
      <p className="mt-8 text-center text-sm font-semibold leading-snug opacity-90">{mission.copy}</p>
    </article>
  );
}

function ManifestoSection() {
  return (
    <section id="manifesto" className="px-5 pt-3 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-3 lg:grid-cols-[.9fr_repeat(4,1fr)]">
        <article className="panel p-7">
          <p className="section-kicker">Our Manifesto</p>
          <h2 className="font-display text-5xl uppercase leading-[.94] text-bone">
            Sachai Ke Saath,
            <span className="block text-rust">Thoda Mazaak</span>
          </h2>
          <p className="mt-5 text-base font-medium leading-relaxed text-white/86">
            Serious problems. Satirical solutions. Because rona to sabko aata hai, hum hasta hua system change karenge.
          </p>
          <Button className="mt-7" variant="ghost">
            Explore Manifesto
          </Button>
        </article>
        {missions.map((mission) => (
          <MissionCard key={mission.title} mission={mission} />
        ))}
      </div>
    </section>
  );
}

function Ticker() {
  const items = [
    'Not left. Not right. Just anti wrong.',
    'Sarcasm is our weapon.',
    'Memes are our media.',
    'Youth is our power.',
    'Change is our agenda.',
  ];

  return (
    <div className="mt-5 overflow-hidden border-y border-rust/45 bg-[#050d16] py-3">
      <div className="ticker-track flex min-w-max items-center gap-10 font-display text-lg uppercase text-rust">
        {[...items, ...items].map((item, index) => (
          <span className="flex items-center gap-10" key={`${item}-${index}`}>
            {item}
            <span className="h-1.5 w-1.5 rounded-full bg-rust" />
          </span>
        ))}
      </div>
    </div>
  );
}

function MemesSection() {
  return (
    <section id="memes" className="px-5 py-4 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-[210px_1fr]">
        <aside className="panel p-6">
          <p className="section-kicker">Memes &gt; Movement</p>
          <h2 className="font-display text-5xl uppercase leading-[.92] text-bone">
            Laugh. Share.
            <span className="block text-rust">Aware.</span>
          </h2>
          <p className="mt-5 text-base font-medium leading-relaxed text-white/84">
            Memes are the new posters. And the internet is our battlefield.
          </p>
          <Button className="mt-5" variant="ghost">
            Check Memes
          </Button>
        </aside>

        <div className="relative">
          <button className="slider-arrow left-0" type="button" aria-label="Previous memes">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {memes.map((meme) => (
              <article className="meme-card" key={meme.alt}>
                <img className="h-full w-full object-cover" src={meme.image} alt={meme.alt} />
              </article>
            ))}
          </div>
          <button className="slider-arrow right-0" type="button" aria-label="Next memes">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
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

export default function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-coal text-white">
      <Header />
      <Hero />
      <PrincipleStrip />
      <AboutSection />
      <ManifestoSection />
      <Ticker />
      <MemesSection />
      <Footer />
    </main>
  );
}
