from sqlalchemy.orm import Session
from app.database import SessionLocal
from app.models import Project

def seed_projects(db: Session):
    projects = [
        {"name": "Infrastructure Monitoring System", "description": "Real-time monitoring dashboard using Prometheus + Grafana for enterprise IT infra."},
        {"name": "Network Automation Tool", "description": "Ansible-based automation for network device configuration and compliance checks."},
        {"name": "Cloud Migration Pipeline", "description": "CI/CD pipeline for migrating on-prem workloads to AWS with Terraform."},
        {"name": "Security Incident Response Platform", "description": "SIEM integration with automated alerting and SOAR workflows."},
    ]
    
    for proj_data in projects:
        if not db.query(Project).filter(Project.name == proj_data["name"]).first():
            project = Project(name=proj_data["name"], description=proj_data["description"])
            db.add(project)
            db.commit()
            print(f"Seeded: {proj_data['name']}")
    
    print("Seeding complete.")

if __name__ == "__main__":
    db = SessionLocal()
    try:
        seed_projects(db)
    finally:
        db.close()

