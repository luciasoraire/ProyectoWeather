
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Error404 from "./../../pageError/Error404"
import Imagen from "./../../img/404-error-not-found-1 (1).png"

const BarraLateral = () => {
  return (
    <>
      <div>
      <img src={Imagen} alt="error 404" />
      </div>
    </>
  );
};

export default BarraLateral;