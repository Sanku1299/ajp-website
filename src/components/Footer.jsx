import React, { useState } from 'react';
import { Flag, Mail } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from './Button';
import followBg from '../assets/follow-bg5.png';
import instaIcon from '../assets/insta.png';
import twitterIcon from '../assets/twitter.png';
import redditIcon from '../assets/reddit.png';

const socialLinks = [
  { name: 'Instagram', src: instaIcon, label: '@antijantaparty' },
  { name: 'X', src: twitterIcon, label: '@AntiJantaParty' },
  { name: 'Reddit', src: redditIcon, label: 'r/AntiJantaParty' },
];

export function Footer() {
  const [email, setEmail] = useState('');

  const validateEmail = (emailValue) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(emailValue);
  };

  const handleSubscribe = () => {
    if (!email.trim()) {
      toast.error('Please enter email');
      return;
    }

    if (!validateEmail(email)) {
      toast.error('Please enter a valid email');
      return;
    }

    toast.success('Subscribe successfully!');
    setEmail('');
  };

  return (
    <footer id="join-us" className="border-t border-rust/35 bg-[#050c14] px-5 sm:px-8 lg:px-10">
      <div
        className="mx-auto grid max-w-7xl gap-8 py-8 md:grid-cols-[1fr_1fr_.8fr] md:items-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to right, rgb(5,12,20) 0%, rgba(5,12,20,0) 30%, rgba(5,12,20,0) 80%, rgb(5,12,20) 100%), url(${followBg})`,
          backgroundPosition: 'right center',
          backgroundSize: 'auto 100%',
          backgroundRepeat: 'no-repeat',
        }}
      >
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSubscribe()}
              />
            </div>
            <Button className="px-4" onClick={handleSubscribe}>
              Subscribe
            </Button>
          </div>
        </form>

        <div
          className="relative min-h-[220px] overflow-hidden rounded-3xl bg-no-repeat md:text-right"
        >
          <div className="relative z-10 flex h-full flex-col justify-center px-5  md:px-6">
            <p className="font-display text-2xl uppercase text-rust">Follow Us</p>
            <div className="mt-6 flex flex-col gap-5 md:items-end">
              {socialLinks.map(({ name, src, label }) => (
                <a
                  className="flex items-center gap-4 text-white transition hover:text-rust"
                  href="#join-us"
                  key={name}
                  aria-label={`Follow on ${name}`}
                >
                  <img src={src} alt={name} className="h-14 w-14 object-contain" />
                  <span className="text-base font-medium md:text-right">{label}</span>
                </a>
              ))}
            </div>
          </div>
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
