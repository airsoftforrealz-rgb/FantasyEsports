import { Card } from '@/components/ui/card';

export function Bracket({ rounds }: { rounds: string[][] }) {
  return (
    <div className='grid grid-cols-3 gap-3 overflow-x-auto'>
      {rounds.map((matches, i) => <Card key={i}><h5 className='mb-2 text-sm font-semibold'>Round {i + 1}</h5><ul className='space-y-2 text-xs'>{matches.map((m) => <li key={m}>{m}</li>)}</ul></Card>)}
    </div>
  );
}
