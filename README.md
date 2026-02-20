# AegisDraft Fantasy Esports

Production-style Next.js SPA fantasy esports app centered on Valorant-style play, including dedicated college leagues and tournaments.

## Stack
- Next.js App Router + TypeScript
- Tailwind CSS + component primitives
- Zustand + TanStack React Query
- Prisma + SQLite
- SSE live leaderboards demo stream

## Need a fast localhost run guide?
See `QUICKSTART_LOCAL.md` for copy/paste commands (macOS/Linux + Windows PowerShell) for both the website UI and Python backend.

## Setup
1. `npm install`
2. `cp .env.example .env`
3. `npx prisma generate`
4. `npx prisma migrate dev --name init`
5. `npm run db:seed`
6. `npm run dev`

## Demo accounts
- `demo1@aegisdraft.gg` / `password123`
- `demo2@aegisdraft.gg` / `password123`

## Live updates
- `/leaderboards` connects to `/api/live/leaderboards` via SSE.
- Demo mode toggle in header indicates simulated live score deltas every ~3.5s.

## Folder structure overview
- `app/` routes + route handlers
- `components/` UI, cards, draft, bracket, leaderboard, layout
- `lib/` prisma client, stores, utilities, typed API helpers
- `prisma/` schema + seed
- `tests/` unit + e2e stubs

## Key flow
Join league → enter draft lobby (snake + mock actions) → manage roster slots → watch live leaderboard movement.

## Python backend option
A FastAPI-based backend alternative is available under `python_backend/` with comparable core endpoints and SSE live leaderboard stream. See `python_backend/README.md` for setup.
