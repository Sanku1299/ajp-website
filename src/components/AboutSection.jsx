import React from 'react';
import mascotClose from '../assets/mascot-close.png';
import antRally from '../assets/ant-rally.png';
import { Button } from './Button';

export function AboutSection() {
  return (
    <section id="about" className="px-5 pt-3 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-3 lg:grid-cols-[1.25fr_.75fr]">
        <article className="panel relative min-h-[360px] overflow-hidden p-7 sm:p-8">
          <img
            className="absolute bottom-0 right-0 h-full object-cover object-center opacity-90 max-md:opacity-35"
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
