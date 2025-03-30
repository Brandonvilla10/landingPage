import React from "react";

import "./App.css";
import Navbar from "./components/navbar";
import personitas from "./assets/personitas.png";
import Topics from "./components/topics";
import { loupe, microphone, monitor, paper } from "./assets/icons/iconos";
import hombre from "./assets/retrato.png";
import Solutions from "./components/solutions";
import logo from "./assets/logo.png";

function App() {
  return (
    <>
      <Navbar />
      <section id="home" style={{height:"10px"}}></section>
      <section className="main" >
        <div className="columnaIzquierda">
          <h1 className="tituloMain">
            We create <span style={{ color: "#FF9011" }}>solutions</span> for
            your business
          </h1>
          <p
            className="mainDescription"
            style={{ color: "gray", fontWeight: "normal" }}
          >
            Our team keep a keen eye on emerging trends and technologies to
            ensure your marketing campaings remain cutting-edge
          </p>
          <button className="botonMain">Get Started</button>
        </div>

        <div className="columnaDerecha">
          <img src={personitas} className="personitas" alt="" />
        </div>
      </section>

      <section id="about" style={{height:"0px"}}></section>

      <section className="section2" >
        <div className="servicios">
          <h1 className="tituloServicios">
            We Provide The Best{" "}
            <span style={{ color: "#FF9011" }}>Services</span>
          </h1>

          <p style={{ color: "gray", fontSize: "1.5em", fontWeight: "normal" }}>
            Let us unleash the full potencial of your <br /> busisness with our
            data driven strategies
          </p>
        </div>

        <div className="divTopics">
          <Topics
            icono={loupe}
            color="#EBC800"
            tituloTopic="Seo/sem"
            descripcionTopic="Loreim ipsum has been the industry strandsd dumuy text ever since the 1500s  "
          />

          <Topics
            icono={microphone}
            color="#07C539"
            tituloTopic="Marketing"
            descripcionTopic="Loreim ipsum has been the industry strandsd dumuy text ever since the 1500s  "
          />

          <Topics
            icono={monitor}
            color="#7C40F4 "
            tituloTopic="Viral Campaigns"
            descripcionTopic="Loreim ipsum has been the industry strandsd dumuy text ever since the 1500s  "
          />

          <Topics
            icono={paper}
            color="#C51D07"
            tituloTopic="Solutions"
            descripcionTopic="Loreim ipsum has been the industry strandsd dumuy text ever since the 1500s  "
          />
        </div>
      </section>

      <section id="services" style={{height:"100px"}}></section>

      <section className="section3">
        <div className="section3Izquierda">
          <img src={hombre} className="retrato" alt="" />
        </div>
        <div className="section3Derecha">
          <h1 className="simpleSolutions">
            Simple <span style={{ color: "#FF9011" }}>Solutions!</span>
          </h1>
          <p
            className="subtituloSolutions"
            style={{ color: "gray", fontWeight: "normal" }}
          >
            We undestand that no two busisness are alike. Thats why we take the
            time to undestarnd
          </p>
          <div className="divSolutions">
            <Solutions
              numero="1"
              tittle="Contact us"
              description="Contact us to boost your brand visibily"
            />
            <Solutions
              numero="2"
              tittle="Consult"
              description="Always avabalible to answer your questions"
            />
            <Solutions
              numero="3"
              tittle="Place order"
              description="Buy our package today to proceed"
            />
            <Solutions
              numero="4"
              tittle="Payment"
              description="We receives payments in all types of banking"
            />
          </div>{" "}
          {/* aqui finaliza el divSolutions */}
        </div>
      </section>{" "}
      {/* Aqui finaliza la secrtion 3*/}

      <section id="contact" style={{height:"80px"}}></section>
      
      <section className="section4">
        <h1 style={{ fontSize: "3rem" }}>
          Our <span style={{ color: "#FF9011" }}>Argency</span>
        </h1>

        <p className="subtituloSection4">
          We believe in the power of data. Our analytics-driven approach allows
          us to make informed. Decisions and optimize your marketing efforts for
          maximum RO!, Lets turn your data into actionable insights, Tailored
          solutions for your Business
        </p>

        <div className="readyTo">
          <h1 style={{ color: "white" }}> Ready To Get Started </h1>
        </div>
      </section>

      <div style={{display: "flex", flexDirection: "row", alignItems:"center"}}>
        <img src={logo} className="logo" width={70} height={70} alt="" />
        <b className="nombreEmpresa" style={{ color: "#575454" }}>
          BrandBuzz
        </b>
      </div>

      <footer>
        <p>BrandBuzz™ – Copyright 2025. Inspire, create, protect.</p>
      </footer>
    </>
  );
}

export default App;
