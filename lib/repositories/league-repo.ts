import { prisma } from '@/lib/db/prisma';

export const leagueRepository = {
  list: () => prisma.league.findMany({ include: { memberships: true, draft: true } }),
  create: (data: { name: string; size: number; draftType: string; draftTime: Date; scoringPreset: string; privacy: string }) =>
    prisma.league.create({ data: { ...data, inviteCode: `INV-${Math.random().toString(36).slice(2, 8).toUpperCase()}` } }),
};
