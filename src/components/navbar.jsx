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
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Services</li>
                        <li>Contact Us</li>
                        <li>Blog</li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;