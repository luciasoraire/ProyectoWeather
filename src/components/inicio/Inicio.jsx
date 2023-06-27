import Video from '../../img/portada.mp4'
import Styles from './css/style.css'
import { Link } from "react-router-dom";
import Nav from './../../components/nav/Nav'
import Footer from './../../components/footer/Footer'
import React, { useState, useEffect } from 'react'

const Inicio = () => {

  useEffect(() => {
   
    document.title = `Weather`;
  });

    return (
    <div>
        <Nav></Nav>
        <div className='video'>
            <video className='videoPortada' src={Video} autoPlay loop></video>
        </div>
        <div className='info'>
            <h1>Weather</h1>
           
          <Link to="/registro"><button class="btn grande">
  <span>Conocé el pronóstico del clima</span>
  <svg viewBox="0 0 13 10" height="10px" width="15px">
    <path d="M1,5 L11,5"></path>
    <polyline points="8 1 12 5 8 9"></polyline>
  </svg>
</button></Link>
        </div>
        <Footer></Footer>
     </div>
    )
}

export default Inicio