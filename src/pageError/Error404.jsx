
import Titulo from "../components/error404/Titulo";
import Nav from "../components/nav/Nav";
import Footer from "../components/footer/Footer";
import Main from "../components/error404/Main";
import BarraLateral from "../components/error404/BarraLateral";
import React from 'react';
import Style from "./style.css"




const Error404 = () => {
    return (
        <div className="error404">
            <div className="naverror404">
            <Nav></Nav>
            </div>

            <div className="tituloerror404">
            <Titulo titulo='Oops!'  ></Titulo>
            </div>

            <div className="mainerror404">
            <Main></Main>
            </div>

            <div className="barraerror404">
            <BarraLateral></BarraLateral>
            </div>

            <div className="footererror404">
            <Footer></Footer>
            </div>
            
        </div>
    )
}

export default Error404;
