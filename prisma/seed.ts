import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();
const roles = ['Duelist', 'Initiator', 'Controller', 'Sentinel'];

async function main() {
  await prisma.notification.deleteMany();
  await prisma.leaderboardSnapshot.deleteMany();
  await prisma.statLine.deleteMany();
  await prisma.matchMap.deleteMany();
  await prisma.match.deleteMany();
  await prisma.player.deleteMany();
  await prisma.team.deleteMany();
  await prisma.draftPick.deleteMany();
  await prisma.draft.deleteMany();
  await prisma.rosterSlot.deleteMany();
  await prisma.fantasyRoster.deleteMany();
  await prisma.leagueMembership.deleteMany();
  await prisma.league.deleteMany();
  await prisma.tournament.deleteMany();
  await prisma.user.deleteMany();

  const users = await Promise.all(Array.from({ length: 50 }).map((_, i) => prisma.user.create({ data: {
    email: `demo${i + 1}@aegisdraft.gg`, passwordHash: bcrypt.hashSync('password123', 10), displayName: `DemoUser${i + 1}`
  }})));

  const teams = await Promise.all(Array.from({ length: 32 }).map((_, i) => prisma.team.create({ data: {
    name: `Team ${i + 1}`, region: ['NA', 'EU', 'APAC'][i % 3], isCollege: i > 19, collegeAffiliation: i > 19 ? `University ${i - 19}` : null
  }})));

  const tournaments = await Promise.all(Array.from({ length: 12 }).map((_, i) => prisma.tournament.create({ data: {
    name: i < 8 ? `Pro Masters ${i + 1}` : `College Clash ${i - 7}`,
    type: i < 8 ? 'pro' : 'college',
    startDate: new Date(Date.now() - i * 86400000 * 7),
    endDate: new Date(Date.now() + (10 - i) * 86400000 * 7)
  }})));

  const players = [] as any[];
  for (let i = 0; i < 220; i++) {
    const team = teams[i % teams.length];
    players.push(await prisma.player.create({ data: {
      name: `Player ${i + 1}`,
      role: roles[i % 4],
      status: ['Active', 'Inactive', 'Stand-in', 'Roster change'][i % 4],
      teamId: team.id,
      collegeAffiliation: team.isCollege ? team.collegeAffiliation : null,
      projection: 20 + (i % 15)
    }}));
  }

  const matches = [] as any[];
  for (let i = 0; i < 72; i++) {
    const home = teams[i % teams.length];
    const away = teams[(i + 7) % teams.length];
    const status = i < 28 ? 'complete' : i < 36 ? 'live' : 'upcoming';
    const match = await prisma.match.create({ data: {
      tournamentId: tournaments[i % tournaments.length].id,
      homeTeamId: home.id,
      awayTeamId: away.id,
      status,
      startsAt: new Date(Date.now() + (i - 20) * 3600000 * 6)
    }});
    matches.push(match);
    await prisma.matchMap.create({ data: { matchId: match.id, mapName: 'Harborpoint', homeScore: 13, awayScore: 9 } });
  }

  for (const match of matches.filter((m) => m.status === 'complete')) {
    const p = players.slice(0, 10);
    for (const pl of p) {
      await prisma.statLine.create({ data: {
        playerId: pl.id, matchId: match.id,
        kills: 10 + Math.floor(Math.random() * 16), assists: 3 + Math.floor(Math.random() * 12),
        deaths: 8 + Math.floor(Math.random() * 13), plants: Math.floor(Math.random() * 3), defuses: Math.floor(Math.random() * 2),
        clutches: Math.floor(Math.random() * 2), multikills: Math.floor(Math.random() * 4), won: Math.random() > 0.45
      }});
    }
  }

  const league = await prisma.league.create({ data: {
    name: 'Campus Prime League', inviteCode: 'CAMPUS-7Q9', size: 10, draftType: 'snake', draftTime: new Date(), scoringPreset: 'standard', privacy: 'private', tournamentId: tournaments[9].id
  }});
  await prisma.draft.create({ data: { leagueId: league.id, status: 'active', currentPick: 3, startedAt: new Date() } });

  for (const user of users.slice(0, 12)) {
    await prisma.leagueMembership.create({ data: { userId: user.id, leagueId: league.id, role: 'manager' } });
    const roster = await prisma.fantasyRoster.create({ data: { userId: user.id, leagueId: league.id, name: `${user.displayName} Roster`, points: Math.floor(Math.random() * 600) } });
    for (let i = 0; i < 5; i++) {
      await prisma.rosterSlot.create({ data: { rosterId: roster.id, playerId: players[(i + users.indexOf(user)) % players.length].id, slotType: roles[i % 4], isStarter: i < 4 } });
    }
    await prisma.notification.create({ data: { userId: user.id, title: 'Waiver processed', body: 'Your claim for Player 12 was accepted.' } });
    await prisma.leaderboardSnapshot.create({ data: { userId: user.id, leagueId: league.id, points: Math.floor(Math.random() * 700), period: 'weekly' } });
  }
}

main().finally(() => prisma.$disconnect());
