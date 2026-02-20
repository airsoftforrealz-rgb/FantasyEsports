import { DraftRoom } from '@/components/fantasy/draft-room';
import { Card } from '@/components/ui/card';

export default function FantasyPage() {
  return <div className='space-y-6'>
    <h1 className='text-3xl font-bold'>Fantasy Hub</h1>
    <div className='grid gap-4 md:grid-cols-2'>
      <Card><h3 className='font-semibold'>League Creation Wizard</h3><p className='text-xs text-muted'>Name, size, draft type, draft time, scoring preset, privacy, invite code.</p></Card>
      <Card><h3 className='font-semibold'>Roster Management</h3><p className='text-xs text-muted'>Starters/bench, role slots, free agents, waivers, trades, watchlist, alerts.</p></Card>
    </div>
    <DraftRoom />
    <section id='scoring' className='space-y-2'><h2 className='text-xl font-semibold'>Scoring</h2><p className='text-sm text-muted'>Kills +2, Assists +1, Deaths -1, Plants +2, Defuses +3, Clutches +4, Multi-kills +2, Role bonus +2~3, Win +5, Streak +1 per consecutive win.</p></section>
  </div>;
}
