import React, { useState } from 'react'
import "./Weather.css";


const api = {
    key: "b57a7e378ad4412b774c11ba8ed56ec5",
    base: "https://api.openweathermap.org/data/2.5/"
}

const Weather = () => {

    const [query,setQuery] = useState("");
    // eslint-disable-next-line no-unused-vars
    const [weather,setWeather] =useState({})

    const search = (evt)=>{
        if(evt.key === "Enter"){
            fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
            .then(res => res.json())
            .then(result=>{
                console.log(result)
                setWeather(result);
                setQuery('')
                console.log(result)
            })
        }
    }

    const dateBuilder = (d) =>{
      let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
      let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Satuarday"];

      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();

      return `${day}${date} ${month} ${year}`

    }



  return (
    <div className={(typeof weather.main != "undefined")?((weather.main.temp >16 )? "app warm" : "app "): 'app'}>
      <main>
        <div className='search-box'>
            <input type='text' value={query} className='search-bar' placeholder='Search....' onChange={e=>setQuery(e.target.value)} onKeyPress={search}/>
        </div>
        {(typeof weather.main != "undefined")?(
        <div>
            <div className='location-box'>
              <div className='location'>
                {weather.name},{weather.sys.country}
                <div className='date'>
                  {
                    dateBuilder(new Date())
                  }
                </div> 
              </div>
            </div>
            <div className='weather-box'>
              {Math.round(weather.main.temp)} °C
            </div>
            <div className='weather'>
              {weather.weather[0].main}
            </div>
        </div>
        ):('')} 
      </main>
    </div>
  )
}

export default Weather
