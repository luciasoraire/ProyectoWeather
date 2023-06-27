import Video from '../../img/portada.mp4'
import { Link } from "react-router-dom";
import Nav from './../../components/nav/Nav'
import Footer from './../../components/footer/Footer'
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Styles from './css/style.css'
import Registro from './../registro/Registro'

import Clima from '../clima/Clima';


const Login = () => {
    const [nombreusuario,setNombreUsuario] =  useState('');
    const [contraseñaingreso,setContraseñaIngreso] =  useState('');
    const [miLogin, setMiLogin] = useState('')
    const [registrar, setRegistrar] = useState('')

    const handleClickk =()=>{
        let NombreUsuario = localStorage.getItem("Registro de nombre")
        let ContraseñaUsuario = localStorage.getItem("Registro de contraseña")

        var txtUsuario = document.getElementById("txtUsuario").value; //se captura lo que esta inscripto en la caja
        var txtContraseña = document.getElementById("txtContraseña").value;

        if ( nombreusuario.length===0 || contraseñaingreso.length ===0){
            alert("Complete los campos")
        } else {
             if (nombreusuario === NombreUsuario && contraseñaingreso===ContraseñaUsuario ){
                setMiLogin ("true");
                
             }else{
                setMiLogin("false");
                alert("Usuario y/o contraseña incorrecta")
                document.getElementById("txtUsuario").value = ""; 
                document.getElementById("txtContraseña").value = "";
                document.getElementById("txtUsuario").focus();
             }
            }
 

       

    }

    const handleChangeUsuario =(ev)=>{
        setNombreUsuario(ev.target.value)
        
        console.log(ev.target.value)
    }
    const handleChangeContraseñaIngreso =(ev)=>{
        setContraseñaIngreso(ev.target.value)

        console.log(ev.target.value)
    }


    return(
        <>{miLogin === "true" ? <Clima></Clima> : <><Nav></Nav>
        <div className='video'>
            <video className='videoPortada' src={Video} autoPlay loop></video>
        </div>
        <div>
<section className='form'>
        <form 
            id="form_Ingreso"
            onSubmit={ev => {
            ev.preventDefault();
            //login(nombreusuario, contraseña);
        }}>
            <br/>

            <input
                type="text"
                id="txtUsuario"
                name="usuario"
                placeholder="Nombreusuario"
                autoComplete="off"
                value={nombreusuario}
                onChange={handleChangeUsuario}
            
            
            />
            <br/>
            <input
                type="password"
                id="txtContraseña"
                name="password"
                placeholder="Contraseña"
                value={contraseñaingreso}
                onChange={handleChangeContraseñaIngreso}
                
            
            />
            <br/>
            <button className="btn" type="submit" onClick={handleClickk}>
            <span className='enviar chicos'>Iniciar sesión</span>
            <svg viewBox="0 0 13 10" height="10px" width="15px">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </button>


        </form>
        </section>
        
        </div>

        <Footer></Footer></>} 
        </>
    )
}

export default Login