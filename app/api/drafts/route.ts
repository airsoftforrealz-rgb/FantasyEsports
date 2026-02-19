import { NextRequest, NextResponse } from 'next/server'; import { prisma } from '@/lib/db/prisma';
export async function POST(req:NextRequest){ const {leagueId}=await req.json(); const draft=await prisma.draft.create({data:{leagueId,status:'pending'}}); return NextResponse.json({success:true,data:draft}); }
