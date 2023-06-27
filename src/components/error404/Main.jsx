
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Error404 from "./../../pageError/Error404"

const Main = () => {
  return (
    <>
      <div>
      <h4 className="titleerror404main">Error 404</h4>
      <p className="textoerror404main">Lo siento. Esta página no se encuentra disponible</p>
      </div>
    </>
  );
};

export default Main;
