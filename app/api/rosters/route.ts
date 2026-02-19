import { NextRequest, NextResponse } from 'next/server'; import { prisma } from '@/lib/db/prisma';
export async function GET(req:NextRequest){ const userId=req.nextUrl.searchParams.get('userId'); const data=await prisma.fantasyRoster.findMany({where:{userId:userId||undefined},include:{slots:{include:{player:true}}}}); return NextResponse.json({success:true,data}); }
export async function PUT(req:NextRequest){ const {slotId,isStarter}=await req.json(); const data=await prisma.rosterSlot.update({where:{id:slotId},data:{isStarter}}); return NextResponse.json({success:true,data}); }
