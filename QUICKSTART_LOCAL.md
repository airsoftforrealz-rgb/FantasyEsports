# Quickstart: Open AegisDraft on localhost

If you only want to open the website quickly, use **Option A**.

---

## Option A (Website UI): Next.js app on `http://localhost:3000`

Run these commands from the repo root:

```bash
npm install
cp .env.example .env
npx prisma generate
npx prisma migrate dev --name init
npm run db:seed
npm run dev
```

Then open:
- `http://localhost:3000`

---

## Option B (Python API only): FastAPI backend on `http://localhost:8000`

Run these commands:

```bash
cd python_backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python -m app.services.seed
uvicorn app.main:app --reload --port 8000
```

Then open:
- `http://localhost:8000/health`
- `http://localhost:8000/api/players`

> Note: this runs the backend API, not the full website UI.

---

## Windows PowerShell versions

### Option A (website)
```powershell
cd C:\path\to\FantasyEsports
npm install
Copy-Item .env.example .env
npx prisma generate
npx prisma migrate dev --name init
npm run db:seed
npm run dev
```

### Option B (Python API)
```powershell
cd C:\path\to\FantasyEsports\python_backend
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
python -m app.services.seed
uvicorn app.main:app --reload --port 8000
```

If activation is blocked:
```powershell
Set-ExecutionPolicy -Scope CurrentUser RemoteSigned
```

---

## Fast troubleshooting

- **Port 3000 in use**
  ```bash
  npm run dev -- -p 3001
  ```
  Open `http://localhost:3001`

- **Prisma/db errors**
  ```bash
  npx prisma generate
  npx prisma migrate dev --name init
  npm run db:seed
  ```

- **Python command not found**: try `py` instead of `python` on Windows.
