import Styles from "./css/style.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Registro from "./../registro/Registro"
import Button from 'react-bootstrap/Button';
import Login from "./../login/Login"

const Nav = () => {


  return (

      <>
  
     <div className="nav">
      <ul>
        <Link to="/">
          <li className="itemnav">Inicio</li>{" "}
        </Link>
        

        <Link to="/login" ><li className="itemnav">Iniciar sesión</li></Link>

        <Link to="/registro">
          <li className="itemnav">Registrar</li>
        </Link>

      
      </ul>
    </div></>
      
     

  );
};

export default Nav;
