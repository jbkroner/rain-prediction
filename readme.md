# `rain-prediction`

*update*: 🎉 This project won the 'Intelligent Systems in Geoscience' Award sponsored by [IS-GEO](https://is-geo.org/)! 🎉

### Note for Hackathon judges:
These files highlight the core functionality of our project!
- [react form template](https://github.com/jbkroner/rain-prediction/blob/master/client/react-app/src/components/TestForm.jsx)
- [server / api driver](https://github.com/jbkroner/rain-prediction/blob/master/server/server.py)
- [model pre-processing](https://github.com/jbkroner/rain-prediction/blob/master/server/model/preprocessing.py)
- [model training and testing](https://github.com/jbkroner/rain-prediction/blob/master/server/model/train.py)

You can view our video presentation [here.](https://www.youtube.com/watch?v=uyzzd4K1ioQ)


### Inspiration
We were motivated to build this project for two reasons.  First, it was a project that everyone can find some utility in.  Farmers, pilots, and even surfers rely on weather data for safety, efficiency, and fun.  

We also wanted to test our skills in data science and full-stack web development.  This project was a way to unite our desire to build something useful while learning at the same time. 

### What it does
Rain Predictor will try to predict if it's going to rain tomorrow!  The user can input ~20 different meteorological measurements and then receive a prediction.  The predictions are produced by a machine learning model that we trained on [Australian weather data](https://www.kaggle.com/jsphyg/weather-dataset-rattle-package).  Before any kind of hyper-parameter tuning we were achieving a prediction accuracy of 80%.

### How we built it
The front-end was built with React.js.  React renders a web-form with all the relevant meteorological data.

When the user submits the form, a POST request is made to our custom api endpoint built using [FastAPI](https://fastapi.tiangolo.com/).  FastAPI hosts the API endpoint, parses and re-formats requests as [Pandas](https://pandas.pydata.org/) DataFrames, classifies the input using our model, and then returns the results to the user.  We chose to use FastAPI because it made building out endpoints easy, and served as a translation layer between the front-end and our trained model. 

We processed our data using [Pandas](https://pandas.pydata.org/) and trained our model using [SciKit Learn](https://www.kaggle.com/jsphyg/weather-dataset-rattle-package).  During data pre-processing we split the data into test and training data, removed outliers, filled in missing data, encoded nominal features into numerical features, and normalized to a fixed range.  We chose to use  SciKit's linear regression algorithm to train this model.

After pre-processing and training the model was pickled so that the server can load it at any time without having to re-train.  

# run this project
You need to run the client AND the server for this project to work!

### client
First, make sure you have Node and npm installed. 

- Clone the repo
- CD into `client/react-app`
- run `$ npm install`
- run `$ npm start`.

### server
First, make sure that you have python3 and pip3 installed. 
- Clone the repo
- CD into `server`. 
- Create a new python `venv`:
  - run `$ python3 -m venv venv`
  - launch the venv with `$ source venv/bin/activate`
- Install depdencies with `$ pip3 install requirements.txt`
- Launch the server with `$ uvicorn server:app --reload`
