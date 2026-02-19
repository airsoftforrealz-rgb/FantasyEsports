import { prisma } from '@/lib/db/prisma';

export default async function PlayerDetail({params}:{params:{id:string}}){ const p=await prisma.player.findUnique({where:{id:params.id},include:{team:true,statLines:true}}); if(!p) return <div>Not found</div>;
return <div className='space-y-2'><h1 className='text-3xl font-bold'>{p.name}</h1><p>{p.team.name} · {p.role} · {p.status}</p><p className='text-sm text-muted'>Projection: {p.projection}</p></div>; }
