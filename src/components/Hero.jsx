import React from 'react';
import { Flag, Play } from 'lucide-react';
import heroRally from '../assets/hero-rally.png';
import { Button } from './Button';

export function Hero() {
  return (
    <section id="home" className="relative isolate min-h-[720px] overflow-hidden bg-coal pt-28">
      <div
        className="absolute inset-y-0 right-0 z-0 w-full bg-cover bg-center opacity-90 md:w-[70%] md:bg-right-top"
        style={{ backgroundImage: `url(${heroRally})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_67%_28%,rgba(241,90,8,.25),transparent_18rem),linear-gradient(90deg,#06111c_0%,rgba(6,17,28,.96)_29%,rgba(6,17,28,.54)_62%,rgba(6,17,28,.86)_100%)]" />
      <div className="noise-overlay absolute inset-0 z-0 opacity-45" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-8 px-5 pb-8 sm:px-8 lg:grid-cols-[minmax(0,540px)_1fr] lg:px-10">
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
            <Button
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
            <Button variant="ghost" icon={Play}>
              Watch Trailer
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
