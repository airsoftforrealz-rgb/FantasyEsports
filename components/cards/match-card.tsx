import Link from 'next/link';
import { Card } from '@/components/ui/card';

export function MatchCard({ id, teams, status }: { id: string; teams: string; status: string }) {
  return <Card><Link href={`/matches/${id}`} className='font-semibold'>{teams}</Link><p className='text-xs'>{status}</p></Card>;
}
