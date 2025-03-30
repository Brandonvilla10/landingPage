import React from "react";
import logo from "../assets/logo.png";

import "../css/navbar.css";
function Navbar(){
    return(
        <>
            <nav style={{marginTop: 50}} >
                <div className="logoDiv">
                    <img src={logo} className="logo" width={50} height={50} alt="" />
                    <b className="nombreEmpresa" style={{color: "#575454"}}>BrandBuzz</b>
                </div>
                
                <div style={{width:"100%"}}>
                    <ul className="lista">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About us</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#contact">Contact us</a></li>
                        <li><a href="#blog">Blog</a></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;