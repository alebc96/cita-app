import { useNavigate } from "react-router-dom";
import "../styles/App.css";
// Asegúrate de tener un gif de celebración en tus assets
import gatitoFeliz from "../assets/gatoLove.gif"; 

const Exito = () => {
  const navigate = useNavigate();

  return (
    <section id="center" className="app-container">
      <section className="general-container">
        <div className="container">
          <div className="image-container">
            <img src={gatitoFeliz} alt="Gatito Feliz" />
          </div>
          <div className="choices-container">
            <div className="text-container">
              <h2>¡Sabía que dirías que sí! 🥰✨</h2>
              <p style={{ fontSize: "16px", marginTop: "10px", fontWeight: "normal" }}>
                Prepara tus mejores trapos, ¡será un día increíble! 
              </p>
            </div>
            <div className="btns-container">
              <button
                className="btn btn-yes"
                id="btn-yes"
                style={{ width: "100%", maxWidth: "250px" }}
                onClick={() => navigate("/")}
              >
                Volver al inicio ❤️
              </button>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Exito;