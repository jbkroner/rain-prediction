from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from typing import Optional
from pydantic import BaseModel
import pandas as pd
app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
        )

# un-pickle model
print('loading model...',end="")
from sklearn.linear_model import LogisticRegression
from joblib import load
model = load('./model/model-trained-1.joblib')
print('done!')

# Sample class
class Sample(BaseModel):
    Location: str
    MaxTemp: str
    MinTemp: str
    Rainfall: str
    Evaporation: str
    Sunshine: str
    WindGustDir: str
    WindGustSpeed: str
    WindDir9am: str
    WindDir3pm: str
    WindSpeed9am: str
    WindSpeed3pm: str
    Humidity9am: str
    Humidity3pm: str
    Pressure9am: str
    Cloud9am: str
    Cloud3pm: str
    Temp9am: str
    Temp3pm: str
    RainToday: str




@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/test")
async def test():
    return {"sup":"nice"}

@app.post("/test")
async def test_POST(sample: Sample):
    # generate a new dataframe 

    # add numeric data first
    data = {
            'MinTemp': [sample.MinTemp],
            'MaxTemp': [sample.MaxTemp],
            'Rainfall': [sample.Rainfall],
            'Evaporation': [sample.Evaporation],
            'Sunshine': [sample.Sunshine],
            'WindGustSpeed': [sample.WindGustSpeed],
            'WindSpeed3pm': [sample.WindSpeed3pm],
            'Humidity9am': [sample.Humidity9am],
            'Humidity3pm': [sample.Humidity3pm],
            'Pressure9am': [sample.Pressure9am],
            'Cloud9am': [sample.Cloud9am],
            'Cloud3pm': [sample.Cloud3pm],
            'Temp9am': [sample.Temp9am],
            'Temp3pm': [sample.Temp3pm],
            'RainToday': [sample.RainToday],
            }

    frame = pd.DataFrame(data, columns = ['MinTemp', 'MaxTemp', 'Rainfall', 'Evaporation', 'Sunshine', 'WindGustSpeed9am', 'WindSpeed3pm', 'Humidity9am', 'Humidity3pm', 'Pressure9am', 'Cloud9am', 'Cloud3pm', 'Temp9am', 'Temp3pm', 'RainToday'])
    
    # adding nominal data
    location = {
            'Adelaide': 0.0,
            'Albany': 0.0,
            'Albury': 0.0,
            'AliceSprings': 0.0,
            'BadgerysCreek': 0.0,
            'Ballarat': 0.0,
            'Bendigo': 0.0,
            'Brisbane': 0.0,
            'Cairns': 0.0,
            'Canberra': 0.0,
            'Cobar': 0.0,
            'CoffsHarbour': 0.0,
            'Dartmoor': 0.0,
            'Darwin': 0.0,
            'GoldCoast': 0.0,
            'Hobart': 0.0,
            'Katherine': 0.0,
            'Launceston': 0.0,
            'Melbourne': 0.0,
            'MelbourneAirport': 0.0,
            'Mildura': 0.0,
            'Moree': 0.0,
            'MountGambier': 0.0,
            'MountGinini': 0.0,
            'Newcastle': 0.0,
            'Nhil': 0.0,
            'NorahHead': 0.0,
            'NorfolkIsland': 0.0,
            'Nuriootpa': 0.0,
            'PearceRAAF': 0.0,
            'Penrith': 0.0,
            'Perth': 0.0,
            'PerthAirport': 0.0,
            'Portland': 0.0,
            'Richmond': 0.0, 
            'Sale': 0.0,
            'SalmonGums': 0.0,
            'Sydney': 0.0,
            'SydneyAirport': 0.0,
            'Townsville': 0.0,
            'Tuggeranong': 0.0,
            'Uluru': 0.0, 
            'WaggaWagga': 0.0,
            'Walpole': 0.0,
            'Watsonia': 0.0,
            'Williamtown': 0.0,
            'Witchcliffe': 0.0,
            'Wollongong': 0.0,
            'Woomera': 0.0
            }

    WindGustDir = {
            'E': 0.0,
            'ENE': 0.0,
            'ESE': 0.0,
            'N': 0.0,
            'NE': 0.0,
            'NNE': 0.0,
            'NNW': 0.0,
            'NW': 0.0,
            'S': 0.0,
            'SE': 0.0,
            'SSE': 0.0,
            'SSW': 0.0,
            'SW': 0.0,
            'W': 0.0,
            'WNW': 0.0,
            'WSW': 0.0
            }

    WindDir9am = {
            'E': 0.0,
            'ENE': 0.0,
            'ESE': 0.0,
            'N': 0.0,
            'NE': 0.0,
            'NNE': 0.0,
            'NNW': 0.0,
            'NW': 0.0,
            'S': 0.0,
            'SE': 0.0,
            'SSE': 0.0,
            'SSW': 0.0,
            'SW': 0.0,
            'W': 0.0,
            'WNW': 0.0,
            'WSW': 0.0
            }

    WindDir3pm = {
            'E': 0.0,
            'ENE': 0.0,
            'ESE': 0.0,
            'N': 0.0,
            'NE': 0.0,
            'NNE': 0.0,
            'NNW': 0.0,
            'NW': 0.0,
            'S': 0.0,
            'SE': 0.0,
            'SSE': 0.0,
            'SSW': 0.0,
            'SW': 0.0,
            'W': 0.0,
            'WNW': 0.0,
            'WSW': 0.0
            }

    location.update({sample.Location:1.0}) 
    WindGustDir.update({sample.WindGustDir:1.0})
    WindDir9am.update({sample.WindDir9amd:1.0})
    WindDir3pm.update({sample.WindDir3pm:1.0})


    location_frame = pd.DataFrame(location, columns=['Adelaide', 'Albany', 'Albury', 'AliceSprings', 'BadgerysCreek', 'Ballarat', 'Bendigo', 'Brisbane', 'Cairns', 'Canberra', 'Cobar', 'CoffsHarbour', 'Dartmoor', 'Darwin', 'GoldCoast', 'Hobart', 'Katherine', 'Launceston', 'Melbourne', 'MelbourneAirport', 'Mildura', 'Moree', 'MountGambier', 'MountGinini', 'Newcastle', 'Nhil', 'NorahHead', 'NorfolkIsland', 'Nuriootpa', 'PearceRAAF', 'Penrith', 'Perth', 'PerthAirport', 'Portland', 'Richmond', 'Sale', 'SalmonGums', 'Sydney', 'SydneyAirport', 'Townsville', 'Tuggeranong', 'Uluru', 'WaggaWagga', 'Walpole', 'Watsonia', 'Williamtown','Witchcliffe', 'Wollongong', 'Woomera'])

    WindGustDir_frame = pd.DataFrame(WindGustDirm, columns=['E', 'ENE', 'ESE', 'N', 'NE', 'NNE', 'NNW', 'NW', 'S', 'SE', 'SSE', 'SSW', 'SW', 'W', 'WNW', 'WSW'])

    WindDir9am = pd.DataFrame(WindGustDirm, columns=['E', 'ENE', 'ESE', 'N', 'NE', 'NNE', 'NNW', 'NW', 'S', 'SE', 'SSE', 'SSW', 'SW', 'W', 'WNW', 'WSW'])

    WindDir3pm = pd.DataFrame(WindGustDirm, columns=['E', 'ENE', 'ESE', 'N', 'NE', 'NNE', 'NNW', 'NW', 'S', 'SE', 'SSE', 'SSW', 'SW', 'W', 'WNW', 'WSW'])

    
    









    print(frame.head())



    return sample
    
