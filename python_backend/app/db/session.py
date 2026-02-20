from sqlmodel import SQLModel, Session, create_engine

sqlite_file_name = "aegisdraft_py.db"
sqlite_url = f"sqlite:///{sqlite_file_name}"
engine = create_engine(sqlite_url, echo=False, connect_args={"check_same_thread": False})


def init_db() -> None:
    from app.db import models  # noqa: F401

    SQLModel.metadata.create_all(engine)


def get_session():
    with Session(engine) as session:
        yield session
