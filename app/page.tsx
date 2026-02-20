import Link from 'next/link';
import { Card } from '@/components/ui/card';

export default function HomePage() {
  return (
    <div className='space-y-6'>
      <section className='rounded-2xl bg-gradient-to-r from-primary/30 to-accent/20 p-8'>
        <h1 className='text-4xl font-bold'>AegisDraft</h1>
        <p className='mt-2 max-w-2xl text-muted'>Command your fantasy roster for tactical 5v5 showdowns, including a deep college circuit with live rankings.</p>
      </section>
      <div className='grid gap-4 md:grid-cols-3'>
        {[
          ['Fantasy Hub', '/fantasy'], ['Live Leaderboards', '/leaderboards'], ['College Tournaments', '/college']
        ].map(([n,h]) => <Card key={h}><Link href={h} className='text-lg font-semibold'>{n}</Link></Card>)}
      </div>
    </div>
  );
}
