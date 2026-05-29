import React from 'react';

export function Ticker() {
  const items = [
    'Not left. Not right. Just anti wrong.',
    'Sarcasm is our weapon.',
    'Memes are our media.',
    'Youth is our power.',
    'Change is our agenda.',
  ];

  return (
    <div id="memes" className="mt-5 overflow-hidden border-y border-rust/45 bg-[#050d16] py-3">
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
