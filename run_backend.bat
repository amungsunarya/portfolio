@echo off
cd /d d:\Project\portfolio\backend
pip install -r requirements.txt
python app/run_seed.py
uvicorn app.main:app --reload --host 0.0.0.0 --port 5201
pause
