import Video from '../../img/sol.mp4'
import Styles from './css/style.css'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Nav from './../../components/nav/Nav'
import NavClima from "./../navclima/NavClima"
import Inicio from "./../inicio/Inicio"

const Clima = () => {


    



    useEffect(() => {
      let NombreUsuario = localStorage.getItem("Registro de nombre")
      document.title = `Bienvenido/a ${NombreUsuario}`;
    });
    
    const [data, setData] = useState({})
    const [location, setLocation] = useState('')
    const url= `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&lang=sp&appid=ac8a8573dacb49a458ed4fdc46f7ee09`
   
  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }

    return (
      <>{localStorage.getItem("Registro de nombre").length===0  ? "" :<><NavClima></NavClima>
      <div>
          
          <div className='app'>
              <video className="videonubes" autoPlay loop src={Video}></video>
              <div className="search">
                  <input 
                   value={location}
                   onChange={event => setLocation(event.target.value)}
                   onKeyPress={searchLocation}
                   placeholder='Ingrese ubicación'
                   type="text"
                  />
              </div>
         <div className='container'>
          <div className='top'>
              <div>
                  <p className='ubicacion'>{data.name}</p>
              </div>
              <div className="temp">
                  {data.main ? <h2 className="temp">{data.main.temp} °C</h2> : null}
              </div>
              <div className="descripcion">
              {data.weather ? <p className="descripcion">{data.weather[0].main}</p> : null}
            </div>
          </div>
          <div className='bottom'>
              <div className="sensacion">
              {data.main ? <p className='bold'>{data.main.feels_like.toFixed()} °C</p> : null}
                  <p className='informacion'>Sensación térmica</p>
              </div>
              <div className="humedad">
                              {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
                  <p className='informacion'>Humedad</p>
              </div>
              <div className="viento">
              {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
                  <p className='informacion'>Velocidad de viento</p>
              </div>
          </div>
         </div>
       </div>
  
       </div></>}</>

       )
}


export default Clima