import { NextRequest, NextResponse } from 'next/server'; import { prisma } from '@/lib/db/prisma'; import bcrypt from 'bcryptjs';
export async function POST(req:NextRequest){ const {mode,email,password,displayName}=await req.json();
 if(mode==='register'){ const user=await prisma.user.create({data:{email,passwordHash:bcrypt.hashSync(password,10),displayName}}); return NextResponse.json({success:true,data:{id:user.id,email:user.email}}); }
 const user=await prisma.user.findUnique({where:{email}}); if(!user||!bcrypt.compareSync(password,user.passwordHash)) return NextResponse.json({success:false,error:'Invalid credentials'},{status:401});
 const res=NextResponse.json({success:true,data:{id:user.id,email:user.email,displayName:user.displayName}}); res.cookies.set('session',user.id,{httpOnly:true}); return res;
}
