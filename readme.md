# rain-prediction
`rain-prediciton` as a simple web app that helps the user figure out wether or not it is going to rain tomorrow.  We used a dataset of Australian meteorological data and machine learning to train a model to make these classificaitons.  The user can enter in their measurments and receive a prediction!

The front-end of this project is built with react.  The api was built out with fast-api.  The model was trained and predictions are performed using sklearn.  

## run this project
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
