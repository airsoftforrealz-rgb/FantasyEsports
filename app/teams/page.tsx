import { prisma } from '@/lib/db/prisma';
import { TeamCard } from '@/components/cards/team-card';
export default async function TeamsPage(){ const teams=await prisma.team.findMany({take:50}); return <div><h1 className='mb-4 text-3xl font-bold'>Teams</h1><div className='grid gap-3 md:grid-cols-3'>{teams.map((t)=><TeamCard key={t.id} id={t.id} name={t.name} affiliation={t.collegeAffiliation||undefined} />)}</div></div>; }
