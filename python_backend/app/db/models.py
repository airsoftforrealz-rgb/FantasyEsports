from datetime import datetime
from typing import Optional
from sqlmodel import SQLModel, Field


class User(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    email: str = Field(index=True, unique=True)
    password_hash: str
    display_name: str


class Team(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str = Field(index=True)
    region: str
    is_college: bool = False
    college_affiliation: Optional[str] = None


class Player(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str = Field(index=True)
    role: str
    status: str
    projection: float
    team_id: int = Field(index=True, foreign_key="team.id")


class League(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str
    invite_code: str = Field(unique=True, index=True)
    size: int
    draft_type: str
    scoring_preset: str
    privacy: str


class Match(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    home_team_id: int = Field(foreign_key="team.id")
    away_team_id: int = Field(foreign_key="team.id")
    status: str
    starts_at: datetime
