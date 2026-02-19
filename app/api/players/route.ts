import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db/prisma';
import { ApiResponse } from '@/lib/types/api';

export async function GET() {
  try { const data = await prisma.player.findMany({ take: 500, include: { team: true } }); return NextResponse.json<ApiResponse<typeof data>>({ success: true, data }); }
  catch { return NextResponse.json<ApiResponse<null>>({ success: false, error: 'Failed to load players' }, { status: 500 }); }
}
