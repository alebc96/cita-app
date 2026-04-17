import { useNavigate } from "react-router-dom";
import "../styles/App.css";
import gatitoPregunton from "../assets/gato1.gif";

const Pregunta = () => {
  const navigate = useNavigate();

  return (
    <section id="center" className="app-container">
      <section className="general-container">
        <div className="container">
          <div className="image-container">
            <img src={gatitoPregunton} alt="Gatito" />
          </div>
          <div className="choices-container">
            <div className="text-container">
              <h2>¿Quieres salir conmigo😊💖?</h2>
            </div>
            <div className="btns-container">
              <button
                className="btn btn-yes"
                id="btn-yes"
                onClick={() => navigate("/exito")}
              >
                Yes
              </button>

              <button
                className="btn btn-no"
                id="brn-no"
                onClick={() => navigate("/fracaso-garrafal")}
              >
                No
              </button>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Pregunta;
