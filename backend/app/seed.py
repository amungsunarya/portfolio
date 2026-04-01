from sqlalchemy.orm import Session
from app.database import SessionLocal
from app.models import Project

def seed_projects(db: Session):
    projects = [
        {
            "name": "Network Monitoring System (Zabbix & LibreNMS)",
            "description": "Monitoring 50+ network devices with real-time alerting.",
            "detail": "Implemented centralized monitoring using Zabbix and LibreNMS, improving visibility and reducing downtime across enterprise infrastructure.",
            "images": [
                "/images/projects/monitoring.png",
                "/images/projects/monitoring1.png"
            ]
        },
        {
            "name": "VPN Infrastructure (OpenVPN)",
            "description": "Secure remote access for internal systems.",
            "detail": "Configured and maintained OpenVPN server for secure remote access.",
            "images": ["/images/projects/ovpn.png"]
        },
        {
            "name": "LAN/WAN/WLAN Infrastructure Maintenance",
            "description": "Troubleshooting and network optimization.",
            "detail": "Handled VLAN configuration, switch troubleshooting, and ensured high availability.",
            "images": [
                "/images/projects/topology.png",
                "/images/projects/wlan.png"
            ]
        },
        {
            "name": "Server Administration (Linux & Windows)",
            "description": "System management and optimization.",
            "detail": "Managed user access, updates, backups, and server performance.",
            "images": ["/images/projects/server.png"]  # ✅ FIX
        }
    ]

    for proj_data in projects:
        existing = db.query(Project).filter(Project.name == proj_data["name"]).first()
        if not existing:
            project = Project(
                name=proj_data["name"],
                description=proj_data["description"],
                detail=proj_data["detail"],
                images=proj_data["images"]
            )
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