import os
import httpx
from fastapi import APIRouter, HTTPException

router = APIRouter()

SUPERVISOR_TOKEN = os.getenv("SUPERVISOR_TOKEN", "")
HA_API_BASE = "http://supervisor/core/api"

@router.get("/states")
async def get_ha_states():
    if not SUPERVISOR_TOKEN:
        # For local development testing outside of HA
        return [
            {"entity_id": "sensor.example", "state": "100.0", "attributes": {}}
        ]
        
    async with httpx.AsyncClient() as client:
        try:
            resp = await client.get(
                f"{HA_API_BASE}/states",
                headers={"Authorization": f"Bearer {SUPERVISOR_TOKEN}"},
                timeout=10.0
            )
            resp.raise_for_status()
            return resp.json()
        except Exception as e:
            raise HTTPException(status_code=502, detail=str(e))
