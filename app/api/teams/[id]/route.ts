import { NextRequest, NextResponse } from 'next/server'; import { prisma } from '@/lib/db/prisma';
export async function GET(_:NextRequest,{params}:{params:{id:string}}){ const t=await prisma.team.findUnique({where:{id:params.id},include:{players:true}}); return t?NextResponse.json({success:true,data:t}):NextResponse.json({success:false,error:'Not found'},{status:404}); }
