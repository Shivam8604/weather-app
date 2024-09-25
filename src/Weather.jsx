import React, { useState } from 'react'


const api = {
    key: "b57a7e378ad4412b774c11ba8ed56ec5",
    base: "https://api.openweathermap.org/data/2.5/"
}

const Weather = () => {

    const [query,setQuery] = useState('');
    const [Weather,setWeather] =useState({})

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




  return (
    <div>
      <main>
        <div className='search-box'>
            <input type='text' value={query} className='search-bar' placeholder='Search....' onChange={e=>setQuery(e.target.value)} onKeyPress={search}/>
        </div>
        <div>
            <div className='location-box'>
                <div className='location'>
                     
                </div>
            </div>
        </div>
      </main>
    </div>
  )
}

export default Weather
