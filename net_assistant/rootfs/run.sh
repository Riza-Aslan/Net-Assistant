#!/usr/bin/env bashio

echo "Starting Net Assistant backend..."

cd /app/backend
python3 -m uvicorn app.main:app --host 0.0.0.0 --port 8099
