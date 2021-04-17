import React from 'react';
import ReactDOM from 'react-dom';
import { useFormik } from 'formik';

class TestForm extends React.Component {
  render(){
  const formik = useFormik({
    initialValues: {
    Location :'',//select
    MinTemp:'',//numeric
    MaxTemp:'',//num
    Rainfall:'',//num
    sunshine:'',//num
    WindGustDir:'', //Select
    WindGustSpeed:'', //numeric
    WindDir9am:'',//Select
    WindSpeed9pm:'',//Numeric
    WindSpeed9am:'',//numeric
    Windspeed3pm:'', //num
    Humitidy9am :'', //num
    Humidity3pm :'', //num
    Pressaure9am:'', //num
    Pressure3pm:'', //num
    Cloud9am:'', //num
    Cloud3pm:'', //num
    Temp9am:'', //num
    Temp3pm:'', //num
    RainToday:''//Select
    },
    onSubmit: values => {
      alert(JSON.stringify(values));
    },
  });
  return (
    <div>
    <h2>Pass in weather Parameters</h2>
    <form onSubmit={formik.handleSubmit}>
      <p>
      <label htmlFor="Location">Location</label>
      <input
        id="Location"
        name="Location"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.Location}
      />
      </p>
      
      <p>
      <label htmlFor="MinTemp">Min Temp</label>
      <input
        id="MinTemp"
        name="MinTemp"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.MinTemp}
      />
      </p>
      <p>
      <label htmlFor="MaxTemp">Max Temp</label>
      <input
        id="MaxTemp"
        name="MaxTemp"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.MaxTemp}
      />
      </p>
      <p>
      <label htmlFor="Rainfall">Rainfall</label>
      <input
        id="Rainfall"
        name="Rainfall"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.Rainfall}
      />
      </p>
      <button type="submit">Submit</button>
    </form>
    </div>
  );
  }
};

//Not sure about exporting this to the index.js file
const element=<TestForm></TestForm>
export default element;