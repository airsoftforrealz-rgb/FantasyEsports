import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db/prisma';
export async function GET(_:NextRequest,{params}:{params:{id:string}}){ const p=await prisma.player.findUnique({where:{id:params.id},include:{team:true,statLines:true}}); if(!p) return NextResponse.json({success:false,error:'Not found'},{status:404}); return NextResponse.json({success:true,data:p}); }
