'use client';

import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { useAppStore } from '@/lib/stores/app-store';
import { NotificationBell } from '@/components/layout/notification-bell';

const menu = [
  ['Fantasy', '/fantasy'], ['College', '/college'], ['Players', '/players'], ['Teams', '/teams'],
  ['Matches', '/matches'], ['Leaderboards', '/leaderboards'], ['Leagues', '/leagues']
];

export function Header() {
  const { demoMode, toggleDemoMode } = useAppStore();
  return (
    <header className='sticky top-0 z-40 border-b border-white/10 bg-bg/95 backdrop-blur'>
      <div className='mx-auto flex max-w-7xl items-center gap-4 px-4 py-3'>
        <Link href='/' className='text-lg font-bold text-accent'>AegisDraft</Link>
        <nav className='hidden gap-4 md:flex'>
          {menu.map(([label, href]) => <Link key={href} href={href} className='text-sm text-muted hover:text-text'>{label}</Link>)}
        </nav>
        <div className='ml-auto flex items-center gap-2'>
          <Input aria-label='Global search' placeholder='Search /' className='w-48' />
          <button onClick={toggleDemoMode} className='rounded bg-white/10 px-2 py-1 text-xs'>{demoMode ? 'LIVE DEMO' : 'STATIC'}</button><NotificationBell />
        </div>
      </div>
    </header>
  );
}
