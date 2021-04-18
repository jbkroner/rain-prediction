import React from 'react';
//import ReactDOM from 'react-dom';
import { useFormik } from 'formik';


function TestForm () {
  const formik = useFormik({
    initialValues: {
    Location :'',//select
    MinTemp:'',//numeric
    MaxTemp:'',//num
    Rainfall:'',//num
    Sunshine:'',//num
    WindGustDir:'', //Select
    WindGustSpeed:'', //numeric
    WindDir9am:'',//Select
    WindSpeed9pm:'',//Numeric
    WindSpeed9am:'',//numeric
    Windspeed3pm:'', //num
    Humitidy9am :'', //num
    Humidity3pm :'', //num
    Pressure9am:'', //num
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
      <label htmlFor="Location">Location </label>
      <select
        name="Location"
        id="Location"
        value={formik.values.Location}
        onChange={formik.handleChange}
        style={{ display: 'block' }}
      >
        <option value="" label="Choose a City" />
        <option value="City1" label="City1" />
        <option value="City2" label="City2" />
        <option value="City3" label="City3" />
      </select>
      </p>
      
      <p>
      <label htmlFor="MinTemp">Min Temp </label>
      <section className="range-slider"
        id="MinTemp"
        name="MinTemp"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.MinTemp}
      />
      </p>
      <p>
      <label htmlFor="MaxTemp">Max Temp </label>
      <input
        id="MaxTemp"
        name="MaxTemp"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.MaxTemp}
      />
      </p>
      <p>
      <label htmlFor="Rainfall">Rain fall </label>
      <input
        id="Rainfall"
        name="Rainfall"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.Rainfall}
      />
      </p>
      <p>
      <label htmlFor="Sunshine">Sunshine </label>
      <input
        id="Sunshine"
        name="Sunshine"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.Sunshine}
      />
      </p>
      <p>
      <label htmlFor="WindGustDir">Wind Gust Direction </label>
      <select
        name="WindGustDir"
        id="WindGustDir"
        value={formik.values.WindGustDir}
        onChange={formik.handleChange}
        style={{ display: 'block' }}
      >
        <option value="" label="Wind Direction" />
        <option value="E" label="E" />
        <option value="ENE" label="ENE" />
        <option value="ESE" label="ESE" />
        <option value="N" label="N" />
        <option value="NE" label="NE" />
        <option value="NNE" label="NNE" />
        <option value="NNW" label="NNW" />
        <option value="NW" label="NW" />
        <option value="S" label="S" />
        <option value="SE" label="SE" />
        <option value="SSE" label="SSE" />
        <option value="SSW" label="SSW" />
        <option value="SW" label="SW" />
        <option value="W" label="W" />
        <option value="WNW" label="WNW" />
        <option value="WSW" label="WSW" />

      </select>
      </p>
      <p>
      <label htmlFor="WindGustSpeed">Wind Gust Speed </label>
      <input
        id="WindGustSpeed"
        name="WindGustSpeed"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.WindGustSpeed}
      />
      </p>
      <p>
      <label htmlFor="WindDir9am">Wind Direction 9am </label>
      <select
        name="WindDir9am"
        id="WindDir9am"
        value={formik.values.WindDir9am}
        onChange={formik.handleChange}
        style={{ display: 'block' }}
      >
        <option value="" label="Wind Direction" />
        <option value="E" label="E" />
        <option value="ENE" label="ENE" />
        <option value="ESE" label="ESE" />
        <option value="N" label="N" />
        <option value="NE" label="NE" />
        <option value="NNE" label="NNE" />
        <option value="NNW" label="NNW" />
        <option value="NW" label="NW" />
        <option value="S" label="S" />
        <option value="SE" label="SE" />
        <option value="SSE" label="SSE" />
        <option value="SSW" label="SSW" />
        <option value="SW" label="SW" />
        <option value="W" label="W" />
        <option value="WNW" label="WNW" />
        <option value="WSW" label="WSW" />

      </select>
      </p>
      <p>
      <label htmlFor="WindSpeed9pm">Wind Speed 9pm </label>
      <input
        id="WindSpeed9pm"
        name="WindSpeed9pm"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.WindSpeed9pm}
      />
      </p>
      <p>
      <label htmlFor="WindSpeed9am">Wind Speed 9am </label>
      <input
        id="WindSpeed9am"
        name="WindSpeed9am"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.WindSpeed9am}
      />
      </p>
      <p>
      <label htmlFor="Humitidy9am">Humitidy 9am </label>
      <input
        id="Humitidy9am"
        name="Humitidy9am"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.Humitidy9am}
      />
      </p>
      <p>
      <label htmlFor="Humidity3pm">Humidity 3pm </label>
      <input
        id="Humidity3pm"
        name="Humidity3pm"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.Humidity3pm}
      />
      </p>
      <p>
      <label htmlFor="Pressure9am">Pressure 9am </label>
      <input
        id="Pressure9am"
        name="Pressure9am"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.Pressure9am}
      />
      </p>
      <p>
      <label htmlFor="Pressure3pm">Pressure 3 pm </label>
      <input
        id="Pressure3pm"
        name="Pressure3pm"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.Pressure3pm}
      />
      </p>
      <p>
      <label htmlFor="Cloud9am">Cloud 9 am </label>
      <input
        id="Cloud9am"
        name="Cloud9am"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.Cloud9am}
      />
      </p>
      <p>
      <label htmlFor="Cloud3pm">Cloud 3 pm </label>
      <input
        id="Cloud3pm"
        name="Cloud3pm"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.Cloud3pm}
      />
      </p>
      <p>
      <label htmlFor="Temp9am">Temp 9 am </label>
      <input
        id="Temp9am"
        name="Temp9am"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.Temp9am}
      />
      </p>
      <p>
      <label htmlFor="Temp3pm">Temp 3 pm </label>
      <input
        id="Temp3pm"
        name="Temp3pm"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.Temp3pm}
      />
      </p>
      <p>
      <label htmlFor="RainToday">Rain Today </label>
      <select
        name="RainToday"
        id="RainToday"
        value={formik.values.RainToday}
        onChange={formik.handleChange}
        style={{ display: 'block' }}
      >
        <option value="" label="Y/N" />
        <option value="Yes" label="Yes" />
        <option value="No" label="No" />
      </select>
      </p>
      <button type="submit">Submit </button>
    </form>
    </div>
  );
}

//Not sure about exporting this to the index.js file
export default TestForm;