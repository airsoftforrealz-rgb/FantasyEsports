import './globals.css';
import { Providers } from '@/components/layout/providers';
import { Header } from '@/components/layout/header';
import { RosterPanel } from '@/components/layout/roster-panel';
import { Footer } from '@/components/layout/footer';

export const metadata = { title: 'AegisDraft Fantasy Valorant', description: 'Fantasy esports SPA for Valorant style leagues' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className='dark'>
      <body>
        <Providers>
          <Header />
          <main className='mx-auto min-h-[80vh] max-w-7xl px-4 py-6'>{children}</main>
          <RosterPanel />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
