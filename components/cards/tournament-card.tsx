import { Card } from '@/components/ui/card';

export function TournamentCard({ name, type }: { name: string; type: string }) {
  return <Card><h4 className='font-semibold'>{name}</h4><p className='text-xs text-muted'>{type}</p></Card>;
}
