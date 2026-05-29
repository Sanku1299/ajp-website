import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { memes } from './data';
import { Button } from './Button';

export function MemesSection() {
  return (
    <section className="px-5 py-4 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-[210px_1fr]">
        <aside>
          <p className="section-kicker">Memes &gt; Movement</p>
          <h2 className="font-display text-3xl uppercase leading-[.92] text-bone">
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
