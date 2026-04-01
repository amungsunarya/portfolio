# Fix Projects Loading Issue - Approved Plan Breakdown

## Progress
- [x] Analyzed codebase (Projects.jsx, backend routes/models/DB)
- [x] Confirmed root cause: Backend not running + possible DB empty + seed bugs
- [ ] Step 1: Fix seed.py bugs

## Steps
1. **Fix seed.py**: Add missing comma, make image consistent list/str
2. **Seed DB**: cd backend && python app/seed.py  
3. **Start backend**: cd backend && pip install -r requirements.txt && uvicorn app.main:app --reload --host 0.0.0.0 --port 5201  
   (Note: docker-compose uses port 5201)
4. **Serve frontend**: Use nginx build or cd frontend && npm run dev (vite defaults ~5173)
5. **Test**: curl http://localhost:5201/api/projects  
   Browser devtools network tab for /api/projects
6. **Verify**: Projects load without error.

**Browser error confirms server responds (500 ISE)** - likely DB query fail (empty table/missing cols from bad seed).

Run step-by-step or `docker-compose up --build` for full stack.
