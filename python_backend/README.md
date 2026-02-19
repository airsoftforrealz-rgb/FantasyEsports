# AegisDraft Python Backend (FastAPI)

This is a Python backend alternative with the same core fantasy endpoints and live leaderboard SSE stream.

## Run
```bash
cd python_backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python -m app.services.seed
uvicorn app.main:app --reload --port 8000
```

## Endpoints
- `GET /health`
- `GET /api/players`
- `GET /api/teams`
- `GET /api/matches`
- `GET /api/leagues`
- `POST /api/leagues`
- `POST /api/leagues/join`
- `GET /api/live/leaderboards` (SSE)

## Notes
- Uses SQLite through SQLModel.
- This can be used as a drop-in backend for the existing Next.js frontend.
