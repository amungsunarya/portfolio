# Portfolio - Amung Sunarya

IT Infrastructure Engineer | 8+ Years Experience

## Features
- Responsive portfolio with Navbar, Hero, About, Projects (API-driven), Monitoring dashboard, Network topology
- Backend API for projects with CRUD, SQLite persistence
- Dockerized with Nginx reverse proxy, healthchecks, data persistence

## Tech Stack
**Frontend**: React 18, Vite, Tailwind CSS, Framer Motion  
**Backend**: FastAPI, SQLAlchemy, SQLite  
**Infra**: Docker Compose, Nginx  

## Quick Start
```bash
# Clone & run
docker-compose up --build -d

# View at http://localhost (or your domain)
```

## Development
```bash
# Backend dev
cd backend
uvicorn app.main:app --reload

# Frontend dev  
cd frontend
npm run dev

# Seed sample projects (run once)
cd backend
python app/seed.py
```

## API
- `GET /api/projects` - List projects
- `POST /api/projects` - Create project `{name, description}`

## Data Persistence
Projects data saved in `./data/portfolio.db`

## Review Improvements Applied
- Added Navbar with mobile support
- Sample project data seeder
- API validation (Pydantic), health endpoint
- Docker persistence (`./data`), healthchecks, restarts

Built with BLACKBOXAI review.
