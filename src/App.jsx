import React from 'react';
import {
  Header,
  Hero,
  PrincipleStrip,
  AboutSection,
  ManifestoSection,
  Ticker,
  MemesSection,
  Footer,
} from './components';

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
