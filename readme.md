

## SERVER
This section will guide you on setting up and running the server portion of this project.  It is based on Django, a python web framework. It's purpose is to provide an interface between the client app (react) and the model (scikit-learn).

### Running the django server
After you have cloned this repo, cd into the `server` directory. 

Launch the python virtual enviroment with `$ source venv/bin/activate`

Install the dependencies with `$ pip3 install -r requirements.txt`

Run the server with `$ python3 manage.py runserver`
