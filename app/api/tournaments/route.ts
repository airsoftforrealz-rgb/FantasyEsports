import { NextResponse } from 'next/server'; import { prisma } from '@/lib/db/prisma';
export async function GET(){ return NextResponse.json({success:true,data:await prisma.tournament.findMany()}); }
