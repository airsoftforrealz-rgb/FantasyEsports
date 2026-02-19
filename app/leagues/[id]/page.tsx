import { prisma } from '@/lib/db/prisma';
export default async function LeagueDetail({params}:{params:{id:string}}){ const l=await prisma.league.findUnique({where:{id:params.id},include:{memberships:true,draft:true}}); if(!l)return <div>Not found</div>; return <div><h1 className='text-3xl font-bold'>{l.name}</h1><p>Members: {l.memberships.length} · Draft: {l.draft?.status ?? 'none'}</p></div>; }
