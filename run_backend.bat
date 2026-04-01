@echo off
cd /d d:\Project\portfolio\backend
call pip install -r requirements.txt
uvicorn app.main:app --reload --host 0.0.0.0 --port 5201
pause
