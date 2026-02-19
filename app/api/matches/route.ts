import { NextResponse } from 'next/server'; import { prisma } from '@/lib/db/prisma';
export async function GET(){ const data=await prisma.match.findMany({take:300,include:{homeTeam:true,awayTeam:true,tournament:true}}); return NextResponse.json({success:true,data}); }
