import Styles from "./css/style.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <section className="footerdata">
        <Link to="/error404"><p className="derechos">©Todos los derechos reservados</p></Link>
    
      </section>
    </div>
  );
};

export default Footer;
