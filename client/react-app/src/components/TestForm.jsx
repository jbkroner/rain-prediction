import React from 'react';
//import ReactDOM from 'react-dom';
import { useFormik } from 'formik';


function TestForm () {
  const formik = useFormik({
    initialValues: {
    Location :'Adelaide',//select
    MinTemp:'20.0',//numeric
    MaxTemp:'20.0',//num
    Rainfall:'100.0',//num
    Sunshine:'8.0',//num
    Evaporation:'75.0',
    WindGustDir:'N', //Select
    WindGustSpeed:'75.0', //numeric
    WindDir9am:'N',//Select
    WindDir3pm:'N',
    WindSpeed9am:'25.0',//numeric
    Windspeed3pm:'25.0', //num
    Humitidy9am :'50.0', //num
    Humidity3pm :'50.0', //num
    Pressure9am:'1000.0', //num
    Pressure3pm:'1000.0', //num
    Cloud9am:'4.5', //num
    Cloud3pm:'4.5', //num
    Temp9am:'30.0', //num
    Temp3pm:'30.0', //num
    RainToday:'No'//Select
    },
    onSubmit: values => {
        console.log(JSON.stringify(values));
        fetch('http://127.0.0.1:8000/test', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values) 
        })

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
        value={formik.values.Location}
        style={{ display: 'block' }}
      >
        <option value="" label="Choose a City" />
        <option value='Adelaide' label='Adelaide'/>
        <option value='Albany' label='Albany' />
        <option value='Albury' label='Albury' />
        <option value='AliceSprings' label='Alice Springs'/>
        <option value='BadgerysCreek' label='Badgerys Creek' />
        <option value='Ballarat'label='Ballarat' />
        <option value='Bendigo' label='Bendigo'/>
        <option value='Brisbane' label='Brisbane' />
        <option value='Cairns' label='Cairns' />
        <option value='Canberra' label='Canberra'/>
        <option value='Cobar' label='Cobar' />
        <option value='CoffsHarbour' label='Coffs Harbour' />
        <option value='Dartmoor' label='Dartmoor'/>
        <option value='Darwin' label='Darwin'/>
        <option value='GoldCoast' label='Gold Coast' />
        <option value='Hobart' label='Hobart'/>
        <option value='Katherine' label='Katherine' />
        <option value='Launceston' label='Launceston' />
        <option value='Melbourne' label='Melbourne'/>
        <option value='MelbourneAirport' label='Melbourne Airport' />
        <option value='Mildura' label='Mildura' />
        <option value='Moree' label='Moree'/>
        <option value='MountGambier' label='Mount Gambier' />
        <option value='MountGinini'label='Mount Ginini' />
        <option value='Newcastle' label='Newcastle'/>
        <option value='Nhil' label='Nhil'/>
        <option value='NorahHead' label='Norah Head' />
        <option value='NorfolkIsland' label='Norfolk Island'/>
        <option value='Nuriootpa' label='Nuriootpa' />
        <option value='PearceRAAF' label='Pearce RAAF' />
        <option value='Penrith' label='Penrith'/>
        <option value='Perth' label='Perth'/>
        <option value='PerthAirport' label='Perth Airport' />
        <option value='Portland' label='Portland'/>
        <option value='Richmond' label='Richmond' />
        <option value='Sale' label='Sale' />
        <option value='SalmonGums' label='Salmon Gums' />
        <option value='Sydney' label='Sydney'/>
        <option value='SydneyAirport' label='Sydney Airport'/>
        <option value='Townsville' label='Townsville' />
        <option value='Tuggeranong' label='Tuggeranong'/>
        <option value='Uluru' label='Uluru' />
        <option value='WaggaWagga' label='WaggaWagga' />
        <option value='Walpole' label='Walpole'/>
        <option value='Watsonia' label='Watsonia' />
        <option value='Williamtown' label='Williamtown' />
        <option value='Witchcliffe' label='Witchcliffe'/>
        <option value='Wollongong' label='Wollongong' />
        <option value='Woomera' label='Woomera' />
      </select>
      </p>
      
      <p>
      <label htmlFor="MinTemp">Min Temp </label>
      <input className="range-slider"
        id="MinTemp"
        name="MinTemp"
        type="range"
      className="slider"
        min="-8.5"
        max="33.9"
        onChange={formik.handleChange}
        value={formik.values.MinTemp}
      />
      </p>
      <p>
      <label htmlFor="MaxTemp">Max Temp </label>
      <input
        id="MaxTemp"
        name="MaxTemp"
        type="range"
        className="slider"
        min="-4.8"
        max="48.1"
        onChange={formik.handleChange}
        value={formik.values.MaxTemp}
      />
      </p>
      <p>
      <label htmlFor="Rainfall">Rain fall </label>
      <input
        id="Rainfall"
        name="Rainfall"
        type="range"
        className="slider"
        min="0.0"
        max="371.0"
        onChange={formik.handleChange}
        value={formik.values.Rainfall}
      />
      </p>
      <p>
      <label htmlFor="Evaporation">Evaporation </label>
      <input
        id="Evaporation"
        name="Evaporation"
        type="range"
        className="slider"
        min="0.0"
        max="145.0"
       onChange={formik.handleChange}
       value={formik.values.Evaporation}
      />
      </p>
      <p>

      <label htmlFor="Sunshine">Sunshine </label>
      <input
        id="Sunshine"
        name="Sunshine"
        type="range"
        className="slider"
        min="0.0"
        max="14.3"
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
        type="range"
        className="slider"
        min="6.0"
        max="135.0"
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
      <label htmlFor="WindDir3pm">Wind Direction 3pm </label>
      <select
        name="WindDir3pm"
        id="WindDir3pm"
        value={formik.values.WindDir3pm}
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
      <label htmlFor="WindSpeed9am">Wind Speed 9am </label>
      <input
        id="WindSpeed9am"
        name="WindSpeed9am"
        type="range"
        className="slider"
        min="0.0"
        max="130.0"
        onChange={formik.handleChange}
        value={formik.values.WindSpeed9am}
      />
      </p>
      <p>
      <label htmlFor="WindSpeed3pm">Wind Speed 3pm </label>
      <input
        id="WindSpeed3pm"
        name="WindSpeed3pm"
        type="range"
        className="slider"
        min="0.0"
        max="87.0"
        onChange={formik.handleChange}
        value={formik.values.WindSpeed3pm}
      />
      </p>
      <p>
      <label htmlFor="Humitidy9am">Humitidy 9am </label>
      <input
        id="Humitidy9am"
        name="Humitidy9am"
        type="range"
        className="slider"
        min="0.0"
        max="100.0"
        onChange={formik.handleChange}
        value={formik.values.Humitidy9am}
      />
      </p>
      <p>
      <label htmlFor="Humidity3pm">Humidity 3pm </label>
      <input
        id="Humidity3pm"
        name="Humidity3pm"
        type="range"
        className="slider"
        min="0.0"
        max="100.0"
        onChange={formik.handleChange}
        value={formik.values.Humidity3pm}
      />
      </p>
      <p>
      <label htmlFor="Pressure9am">Pressure 9am </label>
      <input
        id="Pressure9am"
        name="Pressure9am"
        type="range"
        className="slider"
        min="980.5"
        max="1041.0"
        onChange={formik.handleChange}
        value={formik.values.Pressure9am}
      />
      </p>
      <p>
      <label htmlFor="Pressure3pm">Pressure 3 pm </label>
      <input
        id="Pressure3pm"
        name="Pressure3pm"
        type="range"
        className="slider"
        min="977.1"
        max="1039.6"
        onChange={formik.handleChange}
        value={formik.values.Pressure3pm}
      />
      </p>
      <p>
      <label htmlFor="Cloud9am">Cloud 9 am </label>
      <input
        id="Cloud9am"
        name="Cloud9am"
        type="range"
        className="slider"
        min="0.0"
        max="9.0"
        onChange={formik.handleChange}
        value={formik.values.Cloud9am}
      />
      </p>
      <p>
      <label htmlFor="Cloud3pm">Cloud 3 pm </label>
      <input
        id="Cloud3pm"
        name="Cloud3pm"
        type="range"
        className="slider"
        min="0.0"
        max="9.0"
        onChange={formik.handleChange}
        value={formik.values.Cloud3pm}
      />
      </p>
      <p>
      <label htmlFor="Temp9am">Temp 9 am </label>
      <input
        id="Temp9am"
        name="Temp9am"
        type="range"
        className="slider"
        min="-7.2"
        max="39.1"
        onChange={formik.handleChange}
        value={formik.values.Temp9am}
      />
      </p>
      <p>
      <label htmlFor="Temp3pm">Temp 3 pm </label>
      <input
        id="Temp3pm"
        name="Temp3pm"
        type="range"
        className="slider"
        min="-5.4"
        max="46.7"
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
