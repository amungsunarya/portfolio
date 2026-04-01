from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel
from typing import List, Optional
from sqlalchemy.orm import Session
from app.database import SessionLocal
from app.models import Project

router = APIRouter()

# ================= DATABASE =================
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# ================= SCHEMA =================
class ProjectCreate(BaseModel):
    name: str
    description: str
    detail: Optional[str] = None
    images: Optional[List[str]] = []

class ProjectResponse(BaseModel):
    id: int
    name: str
    description: str
    detail: Optional[str]
    images: Optional[List[str]]

    class Config:
        orm_mode = True

# ================= GET PROJECTS =================
@router.get("/projects", response_model=List[ProjectResponse])
def get_projects(db: Session = Depends(get_db)):
    return db.query(Project).all()

# ================= CREATE PROJECT =================
@router.post("/projects", response_model=ProjectResponse)
def create_project(project: ProjectCreate, db: Session = Depends(get_db)):
    existing = db.query(Project).filter(Project.name == project.name).first()
    if existing:
        raise HTTPException(status_code=400, detail="Project name already exists")

    db_project = Project(
        name=project.name,
        description=project.description,
        detail=project.detail,
        images=project.images
    )

    db.add(db_project)
    db.commit()
    db.refresh(db_project)
    return db_project