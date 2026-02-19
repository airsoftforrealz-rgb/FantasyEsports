import { NextRequest, NextResponse } from 'next/server'; import { prisma } from '@/lib/db/prisma';
export async function POST(req:NextRequest){ const {draftId}=await req.json(); const draft=await prisma.draft.update({where:{id:draftId},data:{status:'active',startedAt:new Date()}}); return NextResponse.json({success:true,data:draft}); }
