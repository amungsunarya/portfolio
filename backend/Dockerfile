FROM python:3.11
WORKDIR /app
COPY . .
RUN pip install -r requirements.txt
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 CMD curl -f http://localhost:8000/health || exit 1

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "5201"]
