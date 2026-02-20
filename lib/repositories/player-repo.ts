import { prisma } from '@/lib/db/prisma';

export const playerRepository = {
  list: (take = 100) => prisma.player.findMany({ take, include: { team: true } }),
  byId: (id: string) => prisma.player.findUnique({ where: { id }, include: { team: true, statLines: true } }),
};
