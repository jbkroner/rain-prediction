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
      <p>
      <label htmlFor="Sunshine">Sunshine</label>
      <input
        id="Sunshine"
        name="Sunshine"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.Sunshine}
      />
      </p>
      <p>
      <label htmlFor="Rainfall">WindGustDir</label>
      <input
        id="WindGustDir"
        name="WindGustDir"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.WindGustDir}
      />
      </p>
      <p>
      <label htmlFor="WindGustSpeed">WindGustSpeed</label>
      <input
        id="WindGustSpeed"
        name="WindGustSpeed"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.WindGustSpeed}
      />
      </p>
      <p>
      <label htmlFor="WindDir9am">WindDir9am</label>
      <input
        id="WindDir9am"
        name="WindDir9am"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.WindDir9am}
      />
      </p>
      <p>
      <label htmlFor="WindSpeed9pm">WindSpeed9pm</label>
      <input
        id="WindSpeed9pm"
        name="WindSpeed9pm"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.WindSpeed9pm}
      />
      </p>
      <p>
      <label htmlFor="WindSpeed9am">WindSpeed9am</label>
      <input
        id="WindSpeed9am"
        name="WindSpeed9am"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.WindSpeed9am}
      />
      </p>
      <p>
      <label htmlFor="Humitidy9am">Humitidy9am</label>
      <input
        id="Humitidy9am"
        name="Humitidy9am"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.Humitidy9am}
      />
      </p>
      <p>
      <label htmlFor="Humidity3pm">Humidity3pm</label>
      <input
        id="Humidity3pm"
        name="Humidity3pm"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.Humidity3pm}
      />
      </p>
      <p>
      <label htmlFor="Pressure9am">Pressure9am</label>
      <input
        id="Pressure9am"
        name="Pressure9am"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.Pressure9am}
      />
      </p>
      <p>
      <label htmlFor="Pressure3pm">Pressure3pm</label>
      <input
        id="Pressure3pm"
        name="Pressure3pm"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.Pressure3pm}
      />
      </p>
      <p>
      <label htmlFor="Cloud9am">Cloud9am</label>
      <input
        id="Cloud9am"
        name="Cloud9am"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.Cloud9am}
      />
      </p>
      <p>
      <label htmlFor="Cloud3pm">Cloud3pm</label>
      <input
        id="Cloud3pm"
        name="Cloud3pm"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.Cloud3pm}
      />
      </p>
      <p>
      <label htmlFor="Temp9am">Temp9am</label>
      <input
        id="Temp9am"
        name="Temp9am"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.Temp9am}
      />
      </p>
      <p>
      <label htmlFor="Temp3pm">Temp3pm</label>
      <input
        id="Temp3pm"
        name="Temp3pm"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.Temp3pm}
      />
      </p>
      <p>
      <label htmlFor="RainToday">Rain Today</label>
      <input
        id="RainToday"
        name="RainToday"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.RainToday}
      />
      </p>
      <button type="submit">Submit</button>
    </form>
    </div>
  );
}


//Not sure about exporting this to the index.js file
export default TestForm;