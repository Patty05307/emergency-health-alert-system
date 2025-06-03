from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

# Allow all origins for now
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Request body model
class AlertData(BaseModel):
    latitude: float
    longitude: float

@app.get("/")
def read_root():
    return {"message": "Welcome to Emergency Health Alert System API"}

@app.post("/api/alert")
async def send_alert(data: AlertData):
    # Simulate alert logic
    print(f"Emergency alert sent from location ({data.latitude}, {data.longitude})")
    return {"message": f"Emergency alert sent from location ({data.latitude}, {data.longitude})"}


