
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Error404 from "./../../pageError/Error404"

const Titulo = ({titulo}) => {
  return (
    <>
      <div>
      <h3 className="titleerror404">{titulo}</h3>
      </div>
    </>
  );
};

export default Titulo;
