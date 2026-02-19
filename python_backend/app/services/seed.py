from datetime import datetime, timedelta
from random import choice, randint
from sqlmodel import Session

from app.db.models import League, Match, Player, Team, User
from app.db.session import engine, init_db


roles = ["Duelist", "Initiator", "Controller", "Sentinel"]
regions = ["NA", "EU", "APAC"]


def seed() -> None:
    init_db()
    with Session(engine) as session:
        for i in range(30):
            session.add(
                Team(
                    name=f"Py Team {i + 1}",
                    region=regions[i % len(regions)],
                    is_college=i >= 20,
                    college_affiliation=f"University {i - 19}" if i >= 20 else None,
                )
            )
        session.commit()

        teams = session.query(Team).all()

        for i in range(200):
            session.add(
                Player(
                    name=f"Py Player {i + 1}",
                    role=choice(roles),
                    status=choice(["Active", "Inactive", "Stand-in", "Roster change"]),
                    projection=randint(18, 38),
                    team_id=teams[i % len(teams)].id,
                )
            )

        for i in range(20):
            session.add(User(email=f"py_demo{i+1}@aegisdraft.gg", password_hash="demo", display_name=f"PyDemo{i+1}"))

        session.add(
            League(
                name="Python Campus Prime",
                invite_code="PY-CAMPUS-1",
                size=10,
                draft_type="snake",
                scoring_preset="standard",
                privacy="private",
            )
        )

        for i in range(50):
            session.add(
                Match(
                    home_team_id=teams[i % len(teams)].id,
                    away_team_id=teams[(i + 5) % len(teams)].id,
                    status=choice(["upcoming", "live", "complete"]),
                    starts_at=datetime.utcnow() + timedelta(hours=i * 4),
                )
            )
        session.commit()


if __name__ == "__main__":
    seed()
