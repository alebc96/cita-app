import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/App.css";
import gateteDecepcionado from "../assets/gateteDecepcionado.gif";
import gateteCorazonRoto from "../assets/gateteCorazonRoto.gif";
import gatetePreocupado from "../assets/gatoPreocupado.gif";
import gatoSad2 from "../assets/gatoSad2.gif";
import gatoRotoFinal from "../assets/gatoRotoFinal.gif";

const generarNumeroAleatorio = () => {
  return Math.floor(Math.random() * 80) + 10;
};

const Pregunta = () => {
  const navigate = useNavigate();
  const [position, setPosition] = useState({ top: "auto", left: "auto" });
  const [gatete, setGatete] = useState<string>(gateteDecepcionado);
  const [contadorIntentosDeNo, setContadorIntentosDeNo] = useState(0);

  const moverBotonNo = (e: React.MouseEvent | React.TouchEvent) => {
    if (e.type === "touchstart") {
      e.preventDefault();
    }

    const randomTop = generarNumeroAleatorio();
    const randomLeft = generarNumeroAleatorio();

    setPosition({ top: `${randomTop}%`, left: `${randomLeft}%` });

    const nuevosIntentos = contadorIntentosDeNo + 1;
    setContadorIntentosDeNo(nuevosIntentos);
    cambiarGatete(nuevosIntentos);
  };

  const cambiarGatete = (intententos: number) => {
    if (intententos > 8) {
      setGatete(gatoRotoFinal);
    } else if (intententos > 6) {
      setGatete(gatoSad2);
    } else if (intententos > 4) {
      setGatete(gatetePreocupado);
    } else if (intententos > 2) {
      setGatete(gateteCorazonRoto);
    }
  };

  return (
    <section id="center" className="app-container">
      <section className="general-container">
        <div className="container">
          <div className="image-container">
            <img src={gatete} alt="Gatito decepcionado" />
          </div>
          <div className="choices-container">
            <div className="text-container">
              <h2>Ups que torpe eres 😿, pregunto de nuevo ¿Quieres salir conmigo😏?</h2>
            </div>
            <div className="btns-container">
              <button
                className="btn btn-no"
                onMouseEnter={moverBotonNo}
                onTouchStart={moverBotonNo}
                style={{
                  position: position.top === "auto" ? "relative" : "fixed",
                  top: position.top,
                  left: position.left,
                  transition: "all 0.1s ease",
                  zIndex: 1000,
                }}
              >
                No
              </button>
              <button
                className="btn btn-yes"
                id="btn-yes"
                onClick={() => navigate("/exito")}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Pregunta;
