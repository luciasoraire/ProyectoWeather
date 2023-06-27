
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Registro from "./../registro/Registro"
import Button from 'react-bootstrap/Button';
import Login from "./../login/Login"


const NavClima = () => {
    const [nombreusuario,setNombreUsuario] =  useState('');
    const [contraseñaingreso,setContraseñaIngreso] =  useState('');
    const [miLogin, setMiLogin] = useState('')
    const [registrar, setRegistrar] = useState('')

    const handleClickk =()=>{
        let NombreUsuario = localStorage.getItem("Registro de nombre")
        let ContraseñaUsuario = localStorage.getItem("Registro de contraseña")
        let Idioma = localStorage.getItem("Registro de idioma")
        let Edad = localStorage.getItem("Registro de edad")
        let Genero = localStorage.getItem("Registro de genero")
       

        var txtUsuario = document.getElementById("txtUsuario").value; //se captura lo que esta inscripto en la caja
        var txtContraseña = document.getElementById("txtContraseña").value;

        if ( nombreusuario.length===0 || contraseñaingreso.length ===0){
            alert("Complete los campos")
        } else {
             if (nombreusuario === NombreUsuario && contraseñaingreso===ContraseñaUsuario ){
                setMiLogin ("true");
                document.getElementById("form_Ingreso");
                alert("Usuario y contraseña correcta")
             }else{
                setMiLogin("false");
                alert("Usuario y/o contraseña incorrecta")
                document.getElementById("txtUsuario").value = ""; 
                document.getElementById("txtContraseña").value = "";
                document.getElementById("txtUsuario").focus();
             }
            }
 

       

    }
    

      

const eliminar=()=>{
    localStorage.removeItem("Registro de nombre")
    localStorage.removeItem("Registro de contraseña")
    localStorage.removeItem("Registro de idioma")
    localStorage.removeItem("Registro de edad")
    localStorage.removeItem("Registro de género")
    

}

  return (

      <>
  
     <div className="nav">
      <ul>

        <Link to="/clima">
          <li className="itemnav">Clima</li>{" "}
        </Link>

        <Link to="/miembros">
          <li className="itemnav">Miembros</li>
        </Link>
        <Link to="/" ><li className="itemnav" onClick={eliminar}>Cerrar sesión</li></Link>
      
      </ul>
    </div></>
      
     

  );
};

export default NavClima;
