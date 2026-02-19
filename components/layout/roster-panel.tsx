'use client';

import { useAppStore } from '@/lib/stores/app-store';
import { Card } from '@/components/ui/card';

const roster = ['Duelist - RazeLite', 'Controller - Smokesmith', 'Sentinel - Lockline', 'Bench - EchoNova'];

export function RosterPanel() {
  const { rosterOpen, toggleRoster } = useAppStore();
  return (
    <aside className={`fixed right-0 top-16 z-30 h-[calc(100vh-4rem)] w-72 border-l border-white/10 bg-surface/95 p-3 transition-transform ${rosterOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <button onClick={toggleRoster} className='mb-2 text-xs text-muted'>Toggle Roster</button>
      <Card>
        <h3 className='mb-2 text-sm font-semibold'>Roster Panel</h3>
        <ul className='space-y-2 text-xs'>{roster.map((r) => <li key={r}>{r}</li>)}</ul>
      </Card>
    </aside>
  );
}
