import React from "react";
import Spline from "@splinetool/react-spline";
import "./home.css";

import { FaLinkedin } from "react-icons/fa";

import LiveClockUpdate from "../../components/LiveClockUpdate/LiveClockUpdate";

const Home = () => {
  return (
    <>
      <div
        style={{
          position: "relative",
          width: "100vw",
          height: "100vh",
          zIndex: 0,
        }}
      >
        <Spline scene="https://prod.spline.design/pZ4qyfstIY6r5Vhw/scene.splinecode" />
      </div>

      <div className="hero-header">
        <h1>"En el microcosmos del marketing, las estrategias danzan en un ballet cuántico de partículas, datos, diseños y tendencias, desafiando nuestras expectativas y revelando los misterios de la conexión emocional con el consumidor."</h1>
        <br></br><h1> ÁNGEL HERNÁNDEZ</h1>
      </div>

      <div className="home-logo">
        <a
          href="https://www.linkedin.com/in/angelluishern%C3%A1ndezlencina/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size="16px" style={{ color: "#fff" }} />
        </a>
      </div>

      <div className="live-clock">
        <LiveClockUpdate />
      </div>
    </>
  );
};

export default Home;
