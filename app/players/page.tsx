import { prisma } from '@/lib/db/prisma';
import { PlayerCard } from '@/components/cards/player-card';
import { projectFromLastMatches } from '@/lib/utils/projections';

export default async function PlayersPage(){ const players=await prisma.player.findMany({take:60,include:{team:true}});
  return <div><h1 className='mb-4 text-3xl font-bold'>Players</h1><div className='grid gap-3 md:grid-cols-3'>{players.map((p)=><PlayerCard key={p.id} id={p.id} name={p.name} team={p.team.name} role={p.role} boom={projectFromLastMatches([p.projection, p.projection+2, p.projection-1]).boomBust as any} />)}</div></div>
}
