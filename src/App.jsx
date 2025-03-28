import React from "react";

import "./App.css";
import Navbar from "./components/navbar";
import personitas from "./assets/personitas.png";
import Topics from "./components/topics";
import { loupe, microphone, monitor, paper } from "./assets/icons/iconos";
import hombre from "./assets/retrato.png";

function App() {
  return (
    <>
      <Navbar />

      <section className="main">
        <div className="columnaIzquierda">
          <h1 className="tituloMain">
            We create <span style={{ color: "#FF9011" }}>solutions</span> for
            your business
          </h1>
          <p style={{ color: "gray", fontSize: "1.5em", fontWeight: "normal" }}>
            Our team keep a keen eye on emerging trends and technologies to
            ensure your marketing campaings remain cutting-edge
          </p>
          <button className="botonMain">Get Started</button>
        </div>

        <div className="columnaDerecha">
          <img src={personitas} className="personitas" alt="" />
        </div>
      </section>

      <section className="section2">
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
            tituloTopic="Marketing"
            descripcionTopic="Loreim ipsum has been the industry strandsd dumuy text ever since the 1500s  "
          />
        </div>
      </section>

      <section className="section3">
        <div className="section3Izquierda">
          <img src={hombre} className="retrato" alt="" />
        </div>
        <div className="section3Derecha">
          <h1 className="simpleSolutions">
            Simple <span style={{ color: "#FF9011" }}>Solutions!</span>
          </h1>
          <p style={{ color: "gray", fontSize: "1.5em", fontWeight: "normal" }}>
            We undestand that no two busisness are alike. Thats why we take the
            time to undestarnd
          </p>

          <div className="divSolutions">
            
            <div className="divN">
              <p className="n">1</p>
              <p className="n">2</p>
              <p className="n">3</p>
              <p className="n">4</p>
            </div>

            <div className="solutionsTopics">

              

            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default App;
