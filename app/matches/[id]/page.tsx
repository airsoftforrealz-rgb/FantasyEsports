import { prisma } from '@/lib/db/prisma';
export default async function MatchDetail({params}:{params:{id:string}}){ const m=await prisma.match.findUnique({where:{id:params.id},include:{homeTeam:true,awayTeam:true,maps:true}}); if(!m) return <div>Not found</div>; return <div><h1 className='text-3xl font-bold'>{m.homeTeam.name} vs {m.awayTeam.name}</h1><p>{m.status}</p></div>; }
