import type { Metadata } from 'next';
import { Bebas_Neue, Inter, Space_Grotesk } from 'next/font/google';
import AppShell from '@/components/app-shell';
import './globals.css';

const bebas = Bebas_Neue({ subsets: ['latin'], weight: '400', variable: '--font-bebas' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'BrandBoosters | Premium Creative Agency',
  description: 'BrandBoosters builds modern brands, motion systems, and premium digital experiences.',
  metadataBase: new URL('https://brandboosters.example')
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${bebas.variable} ${spaceGrotesk.variable} ${inter.variable} scroll-smooth`}>
      <body className="bg-background">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}