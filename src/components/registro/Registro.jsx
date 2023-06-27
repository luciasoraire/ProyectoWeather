import Video from '../../img/portada.mp4'
import { Link } from "react-router-dom";
import Nav from './../../components/nav/Nav'
import Footer from './../../components/footer/Footer'
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Styles from './css/style.css'
const Registro = () => {
    const [usuario, setUsuario] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [edad, setEdad] = useState("");
    const [idioma, setIdioma] = useState("");
    const [condiciones, setCondiciones] = useState("");
    const [selec, setSelec] = useState("");


   
    const handleClick = () => {
      localStorage.setItem("Registro de nombre", usuario);
      localStorage.setItem("Registro de contraseña", contraseña);
      localStorage.setItem("Registro de edad", edad);
      localStorage.setItem("Registro de idioma", idioma);
      localStorage.setItem("Registro de género", selec);
    };
   

    const handleChange1 = (ev) => {
      setUsuario(ev.target.value);
      console.log(ev.target.value);
    };
    const handleChange2 = (ev) => {
      setContraseña(ev.target.value);
  
      console.log(ev.target.value);
    };
    const handleChange3 = (ev) => {
      setEdad(ev.target.value);
      
      console.log(ev.target.value);
    };
    const handleChange4 = (ev) => {
      setIdioma(ev.target.value);
      console.log(ev.target.value);
    };
    const handleChange5 = (ev) => {
      setCondiciones(ev.target.value);
      console.log(ev.target.value);
    };
    const handleChange6 = (ev) => {
      setSelec(ev.target.value);
      console.log(ev.target.value);
    };
  
    const handleSubmit = (ev) => {
      ev.preventDefault();
  
      alert("Usuario registrado correctamente");
    };
  
 
  

    return (
    
        <div>
        <Nav></Nav>
        <div className='video'>
            <video className='videoPortada' src={Video} autoPlay loop></video>
        </div>
        <div className='info'>
            
           
         
        </div>
        
    
      
          <section className='form'>
            <form onSubmit={handleSubmit}>
              <label htmlFor="Nuevo usuario" className='labels'>Nombre de usuario</label>
              <br />
              <input
                type="text"
                id="usuario"
                name="usuario"
                value={usuario}
                onChange={handleChange1}
              />
              <br />
              <label htmlFor="crear contraseña" className='labels'>Contraseña</label>
              <br />

              <input required
                type="password"
                name="password"
                placeholder="Contraseña"
                value={contraseña}
                onChange={handleChange2}
              />
              <br />
              <label htmlFor="edad" className='labels'>Edad</label>
              <br />
              <input required
                type="number"
                name="edad"
                value={edad}
                onChange={handleChange3}
              />
              <br />

              <span className='labels'>Idioma</span>
              <br />

              <label>
                <input 
                  type="radio"
                  name="categoria"
                  value="Español"
                  onChange={handleChange4}
                />
                Español
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="categoria"
                  value="Ingles"
                  onChange={handleChange4}
                />
                Inglés
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="categoria"
                  value="Portugues"
                  onChange={handleChange4}
                />
                Portugués
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="categoria"
                  value="Frances"
                  onChange={handleChange4}
                />
                Francés
              </label>
              <br />

              <label>
                <input
                  type="radio"
                  name="categoria"
                  value="Chino"
                  onChange={handleChange4}
                />
                Chino
              </label>
              <br />
              <label className="gen labels" >Género</label>
              <br />
              <select onChange={handleChange6} required>
                <option>Masculino</option>
                <option>Femenino</option>
                <option>Otro</option>
              </select>
              <br />
              <label htmlFor="condiciones" className='labels condiciones' required>
                <input required
                  type="checkbox"
                  name="terminos"
                  onChange={handleChange5}
                />
                He leído los términos y condiciones
              </label>
              <br />

              
              <button className="btn"  onClick={handleClick}>
            <span className='enviar chicos'>Enviar</span>
            <svg viewBox="0 0 13 10" height="10px" width="15px">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </button>
          <Link to="/login">
          <button className="btn">
            <span className='enviar  chicos'>Ya estoy registrado</span>
            <svg viewBox="0 0 13 10" height="10px" width="15px">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </button></Link>
            </form>
          </section>
          <Footer></Footer>
          </div>
    
    )
}

export default Registro