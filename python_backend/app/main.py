from fastapi import FastAPI
from app.api.routes import router
from app.db.session import init_db

app = FastAPI(title="AegisDraft Python API", version="0.1.0")


@app.on_event("startup")
def startup_event() -> None:
    init_db()


@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok"}


app.include_router(router, prefix="/api")
