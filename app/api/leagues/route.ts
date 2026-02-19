import { NextRequest, NextResponse } from 'next/server'; import { prisma } from '@/lib/db/prisma';
export async function GET(){ return NextResponse.json({success:true,data:await prisma.league.findMany({include:{memberships:true}})}); }
export async function POST(req:NextRequest){ try{ const body=await req.json(); const league=await prisma.league.create({data:{...body,inviteCode:`INV-${Math.random().toString(36).slice(2,8).toUpperCase()}`}}); return NextResponse.json({success:true,data:league}); }catch{return NextResponse.json({success:false,error:'create failed'},{status:400});}}
