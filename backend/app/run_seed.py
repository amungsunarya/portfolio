import sys
sys.path.insert(0, '.')
from seed import seed_projects
from database import SessionLocal

db = SessionLocal()
try:
    seed_projects(db)
finally:
    db.close()
print("Seed complete!")
