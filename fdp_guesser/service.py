from fastapi import FastAPI
from pydantic import BaseModel
import predictor
from predictor import predict
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class TitleRequest(BaseModel):
    title: str
    
@app.post("/predict")
def get_prediction(request: TitleRequest):
    return predict(request.title)
