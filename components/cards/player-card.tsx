import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export interface PlayerCardProps { id: string; name: string; role: string; team: string; boom: 'Boom'|'Steady'|'Bust'; }
export function PlayerCard({ id, name, role, team, boom }: PlayerCardProps) {
  return <Card><Link href={`/players/${id}`} className='font-semibold'>{name}</Link><p className='text-xs text-muted'>{team} · {role}</p><Badge>{boom}</Badge></Card>;
}
