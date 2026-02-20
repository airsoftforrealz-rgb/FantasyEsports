from datetime import datetime
import asyncio
import json
import random
from fastapi import APIRouter, Depends, HTTPException
from sse_starlette.sse import EventSourceResponse
from sqlmodel import Session, select

from app.db.models import League, Match, Player, Team
from app.db.session import get_session

router = APIRouter()


@router.get("/players")
def list_players(session: Session = Depends(get_session)):
    players = session.exec(select(Player).limit(500)).all()
    return {"success": True, "data": players}


@router.get("/teams")
def list_teams(session: Session = Depends(get_session)):
    teams = session.exec(select(Team).limit(200)).all()
    return {"success": True, "data": teams}


@router.get("/matches")
def list_matches(session: Session = Depends(get_session)):
    matches = session.exec(select(Match).limit(300)).all()
    return {"success": True, "data": matches}


@router.get("/leagues")
def list_leagues(session: Session = Depends(get_session)):
    leagues = session.exec(select(League)).all()
    return {"success": True, "data": leagues}


@router.post("/leagues")
def create_league(payload: dict, session: Session = Depends(get_session)):
    league = League(
        name=payload["name"],
        invite_code=f"INV-{random.randint(100000, 999999)}",
        size=payload.get("size", 10),
        draft_type=payload.get("draft_type", "snake"),
        scoring_preset=payload.get("scoring_preset", "standard"),
        privacy=payload.get("privacy", "private"),
    )
    session.add(league)
    session.commit()
    session.refresh(league)
    return {"success": True, "data": league}


@router.post("/leagues/join")
def join_league(payload: dict, session: Session = Depends(get_session)):
    code = payload.get("invite_code")
    league = session.exec(select(League).where(League.invite_code == code)).first()
    if not league:
        raise HTTPException(status_code=404, detail="Invalid invite code")
    return {"success": True, "data": {"league_id": league.id, "joined": True}}


@router.get("/live/leaderboards")
async def live_leaderboards():
    async def event_generator():
        while True:
            payload = {"at": datetime.utcnow().isoformat(), "delta": random.randint(-2, 6)}
            yield {"event": "message", "data": json.dumps(payload)}
            await asyncio.sleep(3.5)

    return EventSourceResponse(event_generator())
