from fastapi import FastAPI
from pydantic import BaseModel
import predictor
from predictor import predict

app = FastAPI()

class TitleRequest(BaseModel):
    title: str
    
@app.post("/predict")
def get_prediction(request: TitleRequest):
    return predict(request.title)