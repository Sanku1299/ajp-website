import React from 'react';
import { Toaster } from 'sonner';
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
      <Toaster theme="dark" position="bottom-right" />
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
