from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel
from sqlalchemy.orm import Session
from app.database import SessionLocal
from app.models import Project

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/projects")
def get_projects(db: Session = Depends(get_db)):
    return db.query(Project).all()

class ProjectCreate(BaseModel):
    name: str
    description: str

@router.post("/projects")
def create_project(project: ProjectCreate, db: Session = Depends(get_db)):
    # Check if exists
    existing = db.query(Project).filter(Project.name == project.name).first()
    if existing:
        raise HTTPException(status_code=400, detail="Project name already exists")
    
    db_project = Project(name=project.name, description=project.description)
    db.add(db_project)
    db.commit()
    db.refresh(db_project)
    return db_project
