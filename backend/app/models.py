from sqlalchemy import JSON, Column, Integer, String
from app.database import Base

class Project(Base):
    __tablename__ = "projects"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    description = Column(String)
    detail = Column(String)
    image = Column(String) 
    images = Column(JSON)
