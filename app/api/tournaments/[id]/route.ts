import { NextRequest, NextResponse } from 'next/server'; import { prisma } from '@/lib/db/prisma';
export async function GET(_:NextRequest,{params}:{params:{id:string}}){const data=await prisma.tournament.findUnique({where:{id:params.id},include:{matches:true}}); return data?NextResponse.json({success:true,data}):NextResponse.json({success:false,error:'Not found'},{status:404});}
