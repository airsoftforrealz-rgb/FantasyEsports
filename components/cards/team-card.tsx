import Link from 'next/link';
import { Card } from '@/components/ui/card';

export function TeamCard({ id, name, affiliation }: { id: string; name: string; affiliation?: string }) {
  return <Card><Link href={`/teams/${id}`} className='font-semibold'>{name}</Link><p className='text-xs text-muted'>{affiliation ?? 'Pro Circuit'}</p></Card>;
}
