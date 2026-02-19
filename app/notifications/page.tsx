import { prisma } from '@/lib/db/prisma';
export default async function NotificationsPage(){ const notes=await prisma.notification.findMany({take:20}); return <div><h1 className='text-3xl font-bold'>Notifications</h1><ul>{notes.map((n)=><li key={n.id}>{n.title} - {n.body}</li>)}</ul></div>; }
