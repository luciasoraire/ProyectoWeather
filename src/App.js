import React from "react";
import Inicio from "./components/inicio/Inicio";
import Clima from "./components/clima/Clima";
import Registro from "./components/registro/Registro"
import Login from "./components/login/Login"
import Error404 from "./pageError/Error404"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      
        <Routes>
          <Route path="/" element={<Inicio></Inicio>} />
          <Route path="/clima" element={<Clima></Clima>} />
          <Route path="/registro" element={<Registro></Registro>} />
          <Route path="/login" element={<Login></Login>} />
          <Route path="*" element={<Error404></Error404>} />
          <Route path="/error404" element={<Error404></Error404>} />
        </Routes>
      
    </div>
  );
}

export default App;
